// Local, task-specific support after three unsuccessful answer revisions.
function recordStrategyAttempt(q,w){
  const d=w.strategy??(w.strategy={misses:0,lastAnswer:null,dismissed:false});
  const answer=JSON.stringify([w.values,w.choice,w.order]);
  if(w.feedback.correct||w.feedback.partial){d.misses=0;d.lastAnswer=answer;return;}
  if(q.fields.some((_,i)=>!String(w.values[i]??'').trim())||(q.options&&w.choice===null))return;
  if(answer!==d.lastAnswer){d.misses++;d.lastAnswer=answer;}
}
function strategyNotice(q,w){
  if(!w.strategy||w.strategy.misses<3||w.strategy.dismissed||w.feedback?.correct||w.feedback?.partial)return '';
  const id=topic(),search=encodeURIComponent(title(id)+' Mathematik Klasse 9 Erklärung');
  return `<dialog id="strategy-dialog" class="strategy-notice" aria-labelledby="strategy-title" aria-describedby="strategy-description"><h2 id="strategy-title" tabindex="-1" autofocus>Zeit für einen anderen Weg?</h2><p id="strategy-description">Bei dieser Aufgabe haben mehrere Versuche noch nicht gepasst. Was könnte dir jetzt helfen?</p><div class="actions"><button type="button" data-strategy-action="example">Beispiel ansehen</button><a class="button" href="#learn/${id}/guide" data-prerequisite="${id}" data-strategy-link="true">Erklärung nachlesen</a><a class="button ai-link" href="#learn/${id}/ai" data-prerequisite="${id}" data-strategy-link="true">Lernen mit KI</a><a class="button" href="https://www.google.com/search?q=${search}" target="_blank" rel="noopener noreferrer" data-strategy-link="true">Im Internet recherchieren ↗</a><a class="button" href="https://www.youtube.com/results?search_query=${search}" target="_blank" rel="noopener noreferrer" data-strategy-link="true">YouTube-Tutorial suchen ↗</a></div><p class="small">Die Suche passt zu deinem Thema. Vergleiche die Erklärung mit deinem Lernblatt. Pausiere Videos und rechne den nächsten Schritt selbst.</p><p class="small">Oder bitte eine Mitschülerin, einen Mitschüler oder deine Lehrkraft um Hilfe. Zeige deinen bisherigen Weg: „Bis hier komme ich. Bei diesem Schritt bin ich unsicher.“</p><div class="strategy-return"><button type="button" class="primary" data-strategy-action="read">Aufgabe nochmal lesen</button><button type="button" data-strategy-action="continue">Selbst weiterprobieren</button></div></dialog>`;
}
function focusStrategyDestination(action){
 let target=action==='example'?document.querySelector('.worked-example'):action==='continue'?document.querySelector('#full-exercise-form input:not([type="hidden"]), #full-exercise-form textarea, #full-exercise-form select, #full-exercise-form button'):null;
 target??=document.querySelector('.exercise-card > h2');
 if(!target)return;
 if(!target.matches?.('input,textarea,select,button,a'))target.setAttribute?.('tabindex','-1');
 target.scrollIntoView?.({block:'start',behavior:'auto'});target.focus?.({preventScroll:true});
}
function dismissStrategy(action){
 const w=visibleWork();if(!w?.strategy||currentSection()==='check')return;
 w.strategy.dismissed=true;
 if(action==='example'){w.helpOpen=true;w.helpMode='example';w.exampleUsed=true;}
 document.querySelector('#strategy-dialog')?.close?.();
 save();render();focusStrategyDestination(action);
}
const strategyPreviousRender=render;
render=function(){
 document.querySelector('#strategy-dialog')?.close?.();
 strategyPreviousRender();
 const dialog=document.querySelector('#strategy-dialog');
 if(!dialog||typeof dialog.showModal!=='function')return;
 dialog.addEventListener('cancel',e=>{e.preventDefault();dismissStrategy('read');});
 dialog.showModal();dialog.scrollTop=0;
 dialog.querySelector('#strategy-title')?.focus?.({preventScroll:true});
};
document.addEventListener('click',e=>{
 const button=e.target.closest('button[data-strategy-action]');if(!button?.dataset.strategyAction)return;
 e.preventDefault();e.stopImmediatePropagation();dismissStrategy(button.dataset.strategyAction);
},true);
document.addEventListener('click',e=>{
 const a=e.target.closest('a[data-strategy-link]');if(!a?.dataset.strategyLink)return;
 const w=visibleWork();if(!w?.strategy)return;
 w.strategy.dismissed=true;save();
 document.querySelector('#strategy-dialog')?.close?.();
 // Keep the link connected until its normal navigation has taken place.
 if(a.target==='_blank')focusStrategyDestination('read');
});
