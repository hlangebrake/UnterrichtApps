// In-place definitions; mathematical markup and editable answers stay intact.
const glossaryIndex=new Map();
for(const [id,entry] of TERM_GLOSSARY.entries())glossaryIndex.set(entry.term.trim().toLocaleLowerCase('de-DE'),id);
for(const [id,entry] of TERM_GLOSSARY.entries())for(const alias of [entry.term,...(entry.aliases||[])]){
  const key=alias.trim().toLocaleLowerCase('de-DE');if(key&&!glossaryIndex.has(key))glossaryIndex.set(key,id);
}
const glossaryPattern=new RegExp('(?<![\\p{L}\\p{N}_])(?:'+[...glossaryIndex.keys()].sort((a,b)=>b.length-a.length).map(s=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).join('|')+')(?![\\p{L}\\p{N}_])','giu');
function glossaryMatches(text,id=topic()){
  return [...String(text).matchAll(glossaryPattern)].filter(match=>{
    const key=match[0].toLocaleLowerCase('de-DE');
    if(['von','genau','mindestens','sicher','unmöglich','neutral','verdeckt'].includes(key))return false;
    if(/^gerade[nrsm]?$/.test(key)&&(match[0][0]===match[0][0].toLowerCase()||/gerade\s+(?:übst|hast|lernst|bearbeitest|eben|jetzt|noch|weiter)/i.test(text)))return false;
    if(/^seite[n]?$/.test(key)&&(!/^[GM]/.test(id)||/Seite(?:n)?\s+(?:öffnen|lesen|ansehen|nachlesen|noch|zurück)/i.test(text)))return false;
    if(key==='stelle'&&/(?:an dieser Stelle|Stelle,? an der du)/i.test(text))return false;
    if(['basis','höhe','fläche','körper'].includes(key)&&match[0][0]===match[0][0].toLowerCase())return false;
    return true;
  }).map(m=>({start:m.index,end:m.index+m[0].length,text:m[0],id:glossaryIndex.get(m[0].toLocaleLowerCase('de-DE'))}));
}
function glossaryPopupContent(id){
  const entry=TERM_GLOSSARY[id];if(!entry)return '';
  let target=entry.topic;if(entry.term==='Ergebnis'&&!topic().startsWith('W'))target='N02';if(entry.term==='Quadrat'&&/^[RT]/.test(topic()))target='R04';
  const inCheck=route().startsWith('learn/')&&currentSection()==='check'&&!activeRun()?.complete;
  return `<div class="glossary-dialog-head"><h2 id="glossary-title">${esc(entry.term)}</h2><button type="button" class="quiet" data-glossary-close aria-label="Begriffserklärung schließen">Schließen</button></div><p>${materialText(entry.definition)}</p><div class="glossary-example"><h3>Einfaches Beispiel</h3><p>${materialText(entry.example)}</p></div>${target&&DATA.topics[target]?`<a class="button" href="#learn/${target}/explain" data-glossary-learn="${target}" data-prerequisite="${target}">Weiterlernen: ${esc(title(target))}</a>`:''}${inCheck?'<p class="small muted">Im Check zählt Nachschlagen als Hilfe.</p>':''}`;
}
let glossaryDialog=null,glossaryOpener=null;
function closeGlossary(){
  if(!glossaryDialog)return;glossaryDialog.close();glossaryDialog.remove();glossaryDialog=null;
  if(glossaryOpener?.isConnected)glossaryOpener.focus({preventScroll:true});glossaryOpener=null;
}
function openGlossary(id,opener){
  if(!TERM_GLOSSARY[id])return;
  closeGlossary();glossaryOpener=opener;
  if(route().startsWith('learn/')&&currentSection()==='check'){const run=activeRun();if(run&&!run.complete){run.assisted=true;save();}}
  glossaryDialog=document.createElement('dialog');glossaryDialog.className='glossary-dialog';glossaryDialog.setAttribute('aria-labelledby','glossary-title');
  glossaryDialog.innerHTML=glossaryPopupContent(id);document.body.append(glossaryDialog);
  glossaryDialog.addEventListener('cancel',e=>{e.preventDefault();closeGlossary();});
  glossaryDialog.addEventListener('click',e=>{if(e.target===glossaryDialog){const r=glossaryDialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)closeGlossary();}});
  glossaryDialog.showModal();glossaryDialog.querySelector('[data-glossary-close]').focus();
}
function glossaryButton(match){
  const button=document.createElement('button');button.type='button';button.className='glossary-term';button.dataset.glossaryId=String(match.id);button.textContent=match.text;
  button.setAttribute('aria-haspopup','dialog');button.setAttribute('aria-label',match.text+' erklären');return button;
}
function annotateGlossary(){
  if(typeof document.createTreeWalker!=='function')return;
  const main=document.querySelector('main');if(!main)return;
  glossaryObserver?.disconnect();
  const inline=new Set(),supplement=new Map(),figureTerms=new Map();
  main.querySelectorAll('[data-glossary-id]').forEach(b=>{if(!b.closest('.glossary-supplement'))inline.add(Number(b.dataset.glossaryId));});
  const walker=document.createTreeWalker(main,4),texts=[];while(walker.nextNode())texts.push(walker.currentNode);
  for(const node of texts){const parent=node.parentElement;if(!parent||parent.closest('.glossary-term,.glossary-supplement,script,style,textarea,input,code,[contenteditable],footer'))continue;
    const matches=glossaryMatches(node.nodeValue);if(!matches.length)continue;
    if(parent.closest('a,button,select,option,summary,svg,math,.katex')){const figure=parent.closest('svg')&&parent.closest('.discovery-model');if(figure&&!figureTerms.has(figure))figureTerms.set(figure,new Map());for(const match of matches)(figure?figureTerms.get(figure):supplement).set(match.id,TERM_GLOSSARY[match.id].term);continue;}
    const fragment=document.createDocumentFragment();let cursor=0;
    for(const match of matches){fragment.append(document.createTextNode(node.nodeValue.slice(cursor,match.start)),glossaryButton(match));cursor=match.end;inline.add(match.id);}
    fragment.append(document.createTextNode(node.nodeValue.slice(cursor)));node.replaceWith(fragment);
  }
  // Printed figure labels cannot be wrapped; their topic vocabulary remains available below.
  for(const figure of main.querySelectorAll('.material-figure')){const terms=new Map();for(const term of MATERIAL_SOURCE.topics[topic()]?.terms||[])for(const match of glossaryMatches(term))terms.set(match.id,TERM_GLOSSARY[match.id].term);figureTerms.set(figure,terms);}
  main.querySelectorAll('.glossary-supplement').forEach(el=>el.remove());
  function termList(terms,label){if(!terms.length)return null;const details=document.createElement('details');details.className='glossary-supplement';const summary=document.createElement('summary');summary.textContent=label;details.append(summary);const list=document.createElement('div');list.className='glossary-term-list';for(const[id,text]of terms.sort((a,b)=>a[1].localeCompare(b[1],'de')))list.append(glossaryButton({id,text}));details.append(list);return details;}
  for(const[figure,terms]of figureTerms){const details=termList([...terms],'Begriffe zum Schaubild');if(details){figure.after(details);for(const id of terms.keys())inline.add(id);}}
  const additional=termList([...supplement].filter(([id])=>!inline.has(id)),'Weitere Begriffe auf dieser Seite');if(additional)main.insertBefore(additional,main.querySelector('footer'));
  glossaryObserver?.observe(document.querySelector('#app'),{childList:true,subtree:true,characterData:true});
}
let glossaryObserver=null,glossaryQueued=false;
if(typeof MutationObserver!=='undefined')glossaryObserver=new MutationObserver(records=>{
  const relevant=records.some(r=>r.target.nodeType===1?(r.target.closest?.('main')||r.target.id==='app'):r.target.parentElement?.closest('main'));
  if(!relevant||glossaryQueued)return;glossaryQueued=true;queueMicrotask(()=>{glossaryQueued=false;annotateGlossary();});
});
const glossaryPreviousRender=render;render=function(){glossaryPreviousRender();annotateGlossary();};
document.addEventListener('click',e=>{
  const term=e.target.closest('[data-glossary-id]');if(term?.dataset.glossaryId!==undefined){e.preventDefault();e.stopImmediatePropagation();lastActive=Date.now();openGlossary(Number(term.dataset.glossaryId),term);return;}
  const close=e.target.closest('[data-glossary-close]');if(close?.hasAttribute?.('data-glossary-close')){e.preventDefault();closeGlossary();return;}
  const learn=e.target.closest('[data-glossary-learn]');if(learn?.dataset.glossaryLearn){
    if(currentSection()==='check'&&route().startsWith('learn/')){state.returnToTask={route:route(),index:exerciseIndex,topic:topic()};save();}
    closeGlossary();
  }
},true);
window.addEventListener('hashchange',closeGlossary);
