// Review reminders supplement the earned status; they do not change mastery or check results.
const REVIEW_INTERVAL_MS = 28 * 24 * 60 * 60 * 1000;
function topicLastInteraction(id){
 const dates=[state.topicActivity?.[id]];
 for(const a of state.attempts)if(a.topic===id)dates.push(a.at||a.date);
 for(const c of state.checks)if(c.topic===id)dates.push(c.at||c.date);
 // Older versions only recorded sessions. New sessions must not count just for opening a page.
 for(const s of state.sessions)if(s.topic===id&&s.seconds>0&&!s.reviewActivityTracked)dates.push(s.endedAt||s.startedAt||s.date);
 const override=state.statusOverrides?.[id];
 if(override&&override.level!=='open')dates.push(override.updatedAt);
 return Math.max(0,...dates.map(d=>Date.parse(d)).filter(Number.isFinite));
}
function needsTopicReview(id,status,required,now=Date.now()){
 const last=topicLastInteraction(id);
 return !!(required&&['yellow','green'].includes(status.color)&&last>0&&now-last>=REVIEW_INTERVAL_MS);
}
function recordTopicInteraction(e){
 if(!route().startsWith('learn/')||!DATA.topics[topic()]||document.hidden)return;
 const target=e.target;
 if(!target?.closest?.('.learning .card, .learning .exercise-picker, .learning .check-overview, .learning .learning-tabs'))return;
 const id=topic(),now=Date.now(),previous=Date.parse(state.topicActivity?.[id]);
 if(Number.isFinite(previous)&&now-previous<60000)return;
 state.topicActivity??={};state.topicActivity[id]=new Date(now).toISOString();save();
 // Update only status decorations: never replace an input or interrupt a drag.
 document.querySelectorAll('[data-review-topic="'+id+'"]').forEach(mark=>{mark.outerHTML=statusMark(learningStatus(id));});
}
for(const event of ['pointerdown','click','input','change','submit'])document.addEventListener(event,recordTopicInteraction,true);