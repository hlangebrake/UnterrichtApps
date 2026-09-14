// Four authored worked examples. Fixed column positions preserve written arithmetic on touch screens.
const WRITTEN_DECIMALS = (() => {
 const ink='#2c414b',accent='#355a70';
 const text=(x,y,value,size=30,color=ink,extra='')=>`<text x="${x}" y="${y}" font-size="${size}" fill="${color}" text-anchor="middle" dominant-baseline="middle" ${extra}>${esc(value)}</text>`;
 const line=(x1,y1,x2,y2,color=ink,width=1.6)=>`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${width}"/>`;
 const row=(name,values,xs,y,color=ink)=>`<g data-written-row="${name}">${values.map((v,i)=>v===''?'':text(xs[i],y,v,30,color)).join('')}</g>`;
 const highlight=(xs,y=42,h=176)=>xs.map(x=>`<rect x="${x-19}" y="${y}" width="38" height="${h}" rx="5" fill="#eef3f6"/>`).join('');
 const svg=(body,label,height=250)=>`<svg xmlns="http://www.w3.org/2000/svg" class="written-calculation" viewBox="0 0 480 ${height}" role="img" aria-label="${esc(label)}"><g font-family="ui-monospace, SFMono-Regular, Consolas, monospace">${body}</g></svg>`;
 const xs=[160,200,260,300],comma=(y)=>text(229,y,',');
 const entries={
  add:{title:'Schriftlich addieren',problem:'27,68 + 8,57',result:'36,25',steps:[
   'Schreibe gleiche Stellenwerte untereinander: Komma unter Komma. Beginne rechts bei den Hundertsteln.',
   'Hundertstel: 8 + 7 = 15. Schreibe die 5 unten hin. Die 1 überträgst du zu den Zehnteln.',
   'Zehntel: 6 + 5 + 1 Übertrag = 12. Schreibe die 2 hin und übertrage die 1 zu den Einern.',
   'Einer: 7 + 8 + 1 Übertrag = 16. Schreibe die 6 hin und übertrage die 1 zu den Zehnern.',
   'Zehner: 2 + 1 Übertrag = 3. Das Komma bleibt unter den anderen Kommas. Ergebnis: 36,25.'
  ],draw(s){
   let b=s?highlight([xs[4-s]]):'';
   b+=row('first',['2','7','6','8'],xs,65)+comma(65)+row('second',['','8','5','7'],xs,110)+comma(110)+text(112,110,'+');
   for(let i=1;i<=Math.min(3,s);i++)b+=text(xs[3-i],142,'1',18,accent,'data-written-carry="true"');
   b+=line(130,161,321,161)+row('result',['3','6','2','5'].map((n,i)=>s>=4-i?n:''),xs,202,accent)+(s?comma(202):'');
   return svg(b,'Schriftliche Addition 27,68 plus 8,57. '+this.steps[s]);
  }},
  subtract:{title:'Schriftlich subtrahieren',problem:'52,04 − 18,76',result:'33,28',steps:[
   'Schreibe Komma unter Komma. Hier verwenden wir das Entbündeln: Eine größere Einheit wird in zehn kleinere getauscht.',
   'Für 4 − 6 reichen die Hundertstel nicht. Es gibt aber 0 Zehntel. Tausche deshalb zuerst 1 Einer gegen 10 Zehntel: Aus 2 Einern werden 1 Einer und 10 Zehntel.',
   'Tausche nun 1 Zehntel gegen 10 Hundertstel. Es bleiben 9 Zehntel; aus 4 Hundertsteln werden 14. Die Zahl oben hat weiterhin den Wert 52,04.',
   'Hundertstel: 14 − 6 = 8. Schreibe die 8 rechts ins Ergebnis.',
   'Zehntel: 9 − 7 = 2. Schreibe die 2 ins Ergebnis.',
   'Bei den Einern reicht 1 − 8 nicht. Tausche 1 Zehner gegen 10 Einer: Aus 5 Zehnern werden 4; aus 1 Einer werden 11.',
   'Einer: 11 − 8 = 3. Schreibe die 3 ins Ergebnis.',
   'Zehner: 4 − 1 = 3. Das Komma bleibt in seiner Spalte. Ergebnis: 33,28.'
  ],draw(s){
   const original=[5,2,0,4],changed=s>=5?[4,11,9,14]:s>=2?[5,1,9,14]:s>=1?[5,1,10,4]:original;
   const active=[[],[200,260],[260,300],[300],[260],[160,200],[200],[160]][s];
   let b=highlight(active,12,210);
   original.forEach((n,i)=>{b+=text(xs[i],76,n,30,changed[i]===n?ink:'#7f8a91');if(changed[i]!==n)b+=line(xs[i]-11,84,xs[i]+11,66,'#7f8a91')+text(xs[i],30,changed[i],21,accent,'data-written-exchange="true"');});
   b+=comma(76)+row('second',['1','8','7','6'],xs,121)+comma(121)+text(112,121,'−')+line(130,147,321,147);
   b+=row('result',[s>=7?'3':'',s>=6?'3':'',s>=4?'2':'',s>=3?'8':''],xs,194,accent)+(s>=3?comma(194):'');
   return svg(b,'Schriftliche Subtraktion 52,04 minus 18,76 mit Entbündeln. '+this.steps[s]);
  }},
  multiply:{title:'Schriftlich multiplizieren',problem:'23,6 · 1,7',result:'40,12',steps:[
   'Die Faktoren stehen nebeneinander. Beide haben je eine Nachkommastelle; das Ergebnis bekommt daher insgesamt zwei Nachkommastellen.',
   'Rechne zunächst 236 · 17 ohne Kommas. Unter dem Strich entstehen zwei Teilprodukte: eines für die 7 und eines für die 1 an der Zehnerstelle.',
   'Beginne mit der Zehnerziffer 1 im rechten Faktor. Sie steht für 10. Schreibe in die erste Teilproduktzeile rechts eine Platzhalter-0.',
   '1 · 6 = 6. Schreibe die 6 links neben die 0. Dadurch berücksichtigt die Zeile die Zehnerstelle.',
   '1 · 3 = 3. Schreibe die 3 eine Stelle weiter links.',
   '1 · 2 = 2. Das erste Teilprodukt ist 2360, also 236 · 10.',
   'Jetzt die Einerziffer 7: 7 · 6 = 42. Schreibe die 2 in die zweite Zeile. Merke dir den Übertrag 4 für die nächste Stelle.',
   '7 · 3 + 4 Übertrag = 25. Schreibe die 5 links neben die 2. Übertrag: 2.',
   '7 · 2 + 2 Übertrag = 16. Schreibe die 16 davor. Das zweite Teilprodukt ist 1652. Addiere nun beide Zeilen stellenrichtig.',
   'Addiere von rechts: 0 + 2 = 2. Schreibe die 2 unter den zweiten Strich.',
   'Nächste Spalte: 6 + 5 = 11. Schreibe die 1; übertrage die andere 1 nach links.',
   'Nächste Spalte: 3 + 6 + 1 Übertrag = 10. Schreibe die 0; übertrage die 1 nach links.',
   'Links: 2 + 1 + 1 Übertrag = 4. Die Rechnung ohne Kommas ergibt 4012.',
   'Setze jetzt zwei Nachkommastellen: 23,6 hat eine und 1,7 hat eine. Aus 4012 wird 40,12.'
  ],draw(s){
   const columns=[218,254,290,326];let b='';
   if(s===0)b+=text(240,90,'23,6 · 1,7');
   else b+=row('left-factor',['2','3','6'],[140,176,212],90)+text(248,90,'·')+row('right-factor',['1','7'],[290,326],90);
   b+=line(120,112,347,112);
   if(s>=6&&s<=8)b+=text(176,55,'4',18,accent,'data-written-carry="true"');
   if(s>=7&&s<=8)b+=text(140,55,'2',18,accent,'data-written-carry="true"');
   b+=row('partial-10',[s>=5?'2':'',s>=4?'3':'',s>=3?'6':'',s>=2?'0':''],columns,151);
   if(s>=5)b+=text(398,151,'× 10',16,'#65757e');
   b+=row('partial-7',[s>=8?'1':'',s>=8?'6':'',s>=7?'5':'',s>=6?'2':''],columns,198);
   if(s>=8)b+=text(177,198,'+')+text(398,198,'× 7',16,'#65757e');
   if(s>=10)b+=text(254,233,'1',18,accent,'data-written-carry="true"');
   if(s>=11)b+=text(218,233,'1',18,accent,'data-written-carry="true"');
   if(s>=8)b+=line(199,254,347,254);
   b+=row('integer-result',[s>=12?'4':'',s>=11?'0':'',s>=10?'1':'',s>=9?'2':''],columns,287,accent);
   if(s>=13)b+=text(240,343,'23,6 · 1,7 = 40,12',27,accent,'data-written-row="result"');
   return svg(b,'Schriftliche Multiplikation. '+this.steps[s],380);
  }},
  divide:{title:'Schriftlich dividieren',problem:'8,64 : 1,2',result:'7,2',steps:[
   'Bei 8,64 : 1,2 hat der Divisor eine Nachkommastelle. Mache ihn zuerst ganzzahlig.',
   'Multipliziere beide Zahlen mit 10: 8,64 : 1,2 = 86,4 : 12. Der Quotient bleibt gleich. Rechne nun schriftlich mit 12.',
   '8 ist kleiner als 12, deshalb nimmst du die ersten beiden Ziffern: 86. Die 12 passt 7-mal hinein, denn 7 · 12 = 84. Schreibe die 7 ins Ergebnis.',
   'Multipliziere zurück: 7 · 12 = 84. Schreibe −84 stellenrichtig unter die 86.',
   'Subtrahiere: 86 − 84 = 2. Schreibe den Rest 2 unter den Strich.',
   'Jetzt überschreitest du im Dividenden das Komma. Setze deshalb auch im Ergebnis das Komma.',
   'Hole die nächste Ziffer 4 herunter. Aus dem Rest 2 und der heruntergeholten 4 wird 24.',
   '24 : 12 = 2. Schreibe die 2 nach dem Komma ins Ergebnis.',
   'Multipliziere zurück und ziehe ab: 2 · 12 = 24. Schreibe −24 unter die 24.',
   '24 − 24 = 0. Es bleibt kein Rest. Ergebnis: 7,2. Probe: 7,2 · 1,2 = 8,64.'
  ],draw(s){
   let b='';
   if(s===0)b+=text(240,54,'8,64 : 1,2 =');
   else{
    b+=row('dividend',['8','6',',','4'],[78,118,141,160],54)+text(196,54,':')+row('divisor',['1','2'],[236,266],54)+text(308,54,'=');
    b+=row('quotient',[s>=2?'7':'',s>=5?',':'',s>=7?'2':''],[360,383,405],54,accent);
   }
   if(s>=3)b+=text(41,100,'−')+row('subtract-84',['8','4'],[78,118],100)+line(58,123,136,123);
   if(s>=4)b+=row('remainder-24',['2',s>=6?'4':''],[118,160],153);
   if(s>=6)b+=line(160,78,160,127,'#9bacb6',1)+text(160,129,'↓',17,'#65757e');
   if(s>=8)b+=text(80,196,'−')+row('subtract-24',['2','4'],[118,160],196)+line(100,220,177,220);
   if(s>=9)b+=row('remainder',['0'],[160],250,accent);
   return svg(b,'Schriftliche Division. '+this.steps[s],280);
  }}
 };
 return entries;
})();
const writtenDecimalSteps={};
function writtenDecimalStep(key,value){const max=WRITTEN_DECIMALS[key].steps.length-1,n=Number(value);return Number.isFinite(n)?Math.max(0,Math.min(max,Math.round(n))):max;}
function writtenDecimalStage(key,step){const d=WRITTEN_DECIMALS[key],s=writtenDecimalStep(key,step);return `<figure class="written-figure">${d.draw(s)}</figure><p class="written-step-note" aria-live="polite">${materialText(d.steps[s])}</p>`;}
function writtenDecimalExamples(){return `<section class="written-examples" aria-labelledby="written-examples-title"><h2 id="written-examples-title">Schriftlich rechnen – vier Beispiele</h2><p class="small muted">Zunächst siehst du die fertige Rechnung. Ziehe den Regler nach links und gehe die Schritte noch einmal durch.</p>${Object.entries(WRITTEN_DECIMALS).map(([key,d])=>{const max=d.steps.length-1,s=writtenDecimalSteps[key]??max;return `<section class="card written-example" data-written-card="${key}"><h3>${d.title}</h3><p class="written-problem">${d.problem}</p><div class="written-stage" id="written-stage-${key}">${writtenDecimalStage(key,s)}</div><label class="slider-label" for="written-step-${key}">Rechenschritt <output id="written-count-${key}">${s} von ${max}${s===max?' · fertig':''}</output></label><input type="range" id="written-step-${key}" data-written-operation="${key}" min="0" max="${max}" step="1" value="${s}" aria-label="Rechenschritt: ${d.title}" aria-valuetext="Schritt ${s} von ${max}"><div class="written-range-labels"><span>Aufstellen</span><span>Fertig</span></div></section>`;}).join('')}</section>`;}
const writtenPreviousExplain=explain;
explain=function(id){return writtenPreviousExplain(id)+(id==='D02'?writtenDecimalExamples():'');};
function updateWrittenDecimal(e){const key=e.target.dataset?.writtenOperation;if(!Object.hasOwn(WRITTEN_DECIMALS,key))return;const s=writtenDecimalStep(key,e.target.value),max=WRITTEN_DECIMALS[key].steps.length-1;writtenDecimalSteps[key]=s;document.querySelector('#written-stage-'+key).innerHTML=writtenDecimalStage(key,s);document.querySelector('#written-count-'+key).textContent=s+' von '+max+(s===max?' · fertig':'');e.target.setAttribute('aria-valuetext','Schritt '+s+' von '+max);}
document.addEventListener('input',updateWrittenDecimal);
document.addEventListener('change',updateWrittenDecimal);