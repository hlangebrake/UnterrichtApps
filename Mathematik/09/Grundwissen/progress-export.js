// A portable snapshot of this app's learner data; no other browser storage is read.
function learningProgressExport(now=new Date()){
 flush();
 const exportedAt=now.toISOString(),snapshot=JSON.parse(JSON.stringify(state));
 snapshot.sessions=allSessions().map(s=>({...s,...(s===session?{endedAt:exportedAt}:{})}));
 return {format:'grundwissen-lernstand',schemaVersion:1,exportedAt,state:snapshot};
}
function downloadLearningProgress(){
 let url,link;
 try{
  const data=learningProgressExport(),blob=new Blob([JSON.stringify(data,null,2)+'\n'],{type:'application/json;charset=utf-8'});
  url=URL.createObjectURL(blob);link=document.createElement('a');link.href=url;link.download='grundwissen-lernstand-'+data.exportedAt.replace(/:/g,'-').replace(/\.\d{3}Z$/,'Z')+'.json';link.hidden=true;document.body.append(link);link.click();
  toast('JSON-Export gestartet. Du kannst die Datei auf deinem Gerät speichern.');
 }catch{toast('Der Export konnte nicht gestartet werden. Bitte versuche es erneut.');}
 finally{link?.remove();if(url)setTimeout(()=>URL.revokeObjectURL(url),60000);}
}
document.addEventListener('click',e=>{if(!e.target.closest('button[data-export-progress]'))return;e.preventDefault();downloadLearningProgress();});
