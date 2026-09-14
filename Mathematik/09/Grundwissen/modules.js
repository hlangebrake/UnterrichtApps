function parseNumber(v){const s=String(v).trim().replace(/−/g,'-').replace(',','.');return /^-?\d+(\.\d+)?$/.test(s)?Number(s):NaN;}
function parseFraction(v){const s=String(v).trim().replace(/\s/g,'').replace(/−/g,'-');const m=s.match(/^(-?\d+)\/(-?\d+)$/);return m&&Number(m[2])!==0?[Number(m[1]),Number(m[2])]:null;}
const num=n=>v=>parseNumber(v)===n;
const exactFraction=(a,b)=>v=>{const f=parseFraction(v);if(!f)return 'Notiere einen Bruch mit Schrägstrich, zum Beispiel 3/4.';if(f[0]===a&&f[1]===b)return true;if(f[0]*b===a*f[1])return 'Der Wert stimmt bereits. Prüfe noch den geforderten Nenner oder ob du vollständig gekürzt hast.';return false;};
const MODULES={
 B02:{practice:[
 {id:'B02_L4_01',kind:'Grundfertigkeit',prompt:'Kürze vollständig.',math:'35 / 49',fraction:true,validate:exactFraction(5,7),reason:'35 und 49 sind durch 7 teilbar: 35 : 7 = 5 und 49 : 7 = 7. Der Bruch 5/7 ist vollständig gekürzt.',hints:['Suche eine Zahl größer als 1, durch die sich 35 und 49 ohne Rest teilen lassen.','Beide Zahlen kommen in der Siebenerreihe vor. Teile Zähler und Nenner durch 7.','35 : 7 = 5. Rechne nun 49 : 7 und notiere den gekürzten Bruch.']},
 {id:'B02_L4_02',kind:'Erweitern',prompt:'Erweitere auf den Nenner 30.',math:'7 / 10',fraction:true,validate:exactFraction(21,30),reason:'Aus 10 wird 30 durch Multiplikation mit 3. Deshalb auch den Zähler verdreifachen: 7 · 3 = 21.',hints:['Vergleiche den alten und den neuen Nenner.','10 · 3 = 30. Derselbe Faktor gilt für den Zähler.','Multipliziere 7 mit 3. Der Nenner soll 30 sein.']},
 {id:'B02_L4_03',kind:'Rückwärts denken',prompt:'Ergänze den fehlenden Nenner.',math:'4 / □ = 28 / 63',label:'Der fehlende Nenner',validate:num(9),reason:'28 wird durch Teilen durch 7 zu 4. Also auch 63 durch 7 teilen: 63 : 7 = 9.',hints:['Wie kommst du vom Zähler 28 zum Zähler 4?','28 : 7 = 4. Teile den Nenner durch dieselbe Zahl.','Berechne 63 : 7.']}
 ],check:[
 {id:'B02_TEST_01',prompt:'Kürze vollständig.',math:'15 / 20',fraction:true,validate:exactFraction(3,4),reason:'15/20 = 3/4. Zähler und Nenner werden durch 5 geteilt.'},
 {id:'B02_TEST_03',prompt:'Ergänze den fehlenden Zähler.',math:'□ / 20 = 3 / 4',validate:num(15),reason:'4 · 5 = 20. Also muss auch 3 mit 5 multipliziert werden: 15.'},
 {id:'B02_NEU_08-adaptiert',prompt:'Jemand kürzt 18/24 zu 9/8. Welche Erklärung beschreibt den Fehler?',options:['Nur der Zähler darf beim Kürzen verändert werden.','Oben wurde durch 2, unten durch 3 geteilt. Der Teiler muss für beide gleich sein.','Der Bruch hätte stattdessen oben und unten um 2 verkleinert werden müssen.'],validate:v=>v==='1',reason:'Es wurden verschiedene Teiler benutzt: 18 : 2 = 9, aber 24 : 3 = 8. Vollständig gekürzt lautet der Bruch 3/4.'}
 ]},
 T01:{practice:[
 {id:'T01_L4_01',kind:'Grundfertigkeit',prompt:'Berechne den Termwert für a = 5.',math:'18 − 2a',validate:num(8),reason:'18 − 2 · 5 = 18 − 10 = 8. Die Multiplikation kommt zuerst.',hints:['Ersetze a durch die Zahl 5.','2a bedeutet 2 · a. Berechne zuerst 2 · 5.','Ziehe 10 von 18 ab.']},
 {id:'T01_L4_02',kind:'Negative Eingabe',prompt:'Setze t = −3 ein und berechne.',math:'t² + 4t',validate:num(-3),reason:'(−3)² + 4 · (−3) = 9 − 12 = −3.',hints:['Ersetze beide t durch (−3).','Das Quadrat von −3 ist positiv: (−3)² = 9.','4 · (−3) = −12. Addiere 9 und −12.']},
 {id:'T01_L4_03',kind:'Rückwärts denken',prompt:'Für welches b ist der Termwert 20?',math:'4b + 8 = 20',label:'Der Wert von b',validate:num(3),reason:'4 · 3 + 8 = 12 + 8 = 20. Die Probe bestätigt b = 3.',hints:['Rechne den Rechenplan rückwärts.','Ziehe zuerst 8 von 20 ab.','4b = 12. Teile jetzt durch 4.']}
 ],check:[
 {id:'T01_TEST_01',prompt:'Berechne für x = −2.',math:'T(x) = 5x − 7',validate:num(-17),reason:'5 · (−2) − 7 = −10 − 7 = −17.'},
 {id:'T01_TEST_02',prompt:'Berechne für a = 3 und b = −1.',math:'5a − 2b',validate:num(17),reason:'5 · 3 − 2 · (−1) = 15 + 2 = 17.'},
 {id:'T01_TEST_03-adaptiert',prompt:'Welcher Rechenplan gehört zu 2(x + 5)²?',options:['x verdoppeln, dann 5 addieren und das Ergebnis quadrieren.','x quadrieren, dann 5 addieren und das Ergebnis verdoppeln.','Zu x die Zahl 5 addieren, die Summe quadrieren und das Ergebnis verdoppeln.'],validate:v=>v==='2',reason:'Von innen nach außen: x + 5 bilden, die gesamte Summe quadrieren, zuletzt mit 2 multiplizieren.'}
 ]}
};
