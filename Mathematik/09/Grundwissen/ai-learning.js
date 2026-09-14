/* Short coaching prompts: challenge, student reasoning, then targeted feedback. */
const AI_CONTEXT = 'Ich wiederhole Grundwissen für das Gymnasium Niedersachsen, Klasse 9.';
const AI_DIALOG = 'Stelle immer nur eine Frage und warte auf meine Antwort. Gib gezieltes Feedback zu meiner Begründung; verrate keine Lösung vor meinem Versuch.';
const AI_TOPIC_TASKS = {
  "N01": "Gib mir eine Zahl mit Nullen. Lass mich den Wert jeder Ziffer erklären.",
  "N02": "Aufgabe und mein Rechenweg: […]. Frage beim ersten Fehler gezielt nach, damit ich ihn selbst verbessere.",
  "N03": "Stelle eine falsche Behauptung über Primzahlen auf und kennzeichne sie als falsch. Lass mich ein Gegenbeispiel finden.",
  "N04": "Gib mir einen Term mit drei Rechenarten. Lass mich die Reihenfolge der Schritte begründen.",
  "N05": "Aufgabe und mein Weg: […]. Fordere einen zweiten Rechenweg und lass mich beide vergleichen.",
  "B01": "Beschreibe eine Bruchsituation. Lass mich das Ganze und die gleich großen Teile bestimmen und begründen.",
  "B02": "Gib mir einen Bruch zum Kürzen. Lass mich erklären, warum sein Wert gleich bleibt.",
  "B03": "Gib mir zwei nahe beieinanderliegende Brüche. Lass mich ihre Reihenfolge vermuten und dann begründen.",
  "B04": "Meine Aufgabe: […]. Lass mich mit Bruchstreifen erklären, warum ich einen gemeinsamen Nenner brauche.",
  "B05": "Meine Aufgabe und mein Ergebnis: […]. Lass mich die Subtraktion durch Addition prüfen und meinen Schluss erklären.",
  "B06": "Gib mir eine Gartensituation zum Anteil eines Anteils. Lass mich den Rechenansatz begründen.",
  "B07": "Stelle eine Portionsaufgabe mit Brüchen. Lass mich erklären, was das Ergebnis zählt, bevor ich rechne.",
  "B08": "Meine Bruchaufgabe: […]. Lass mich Ganzes, Anteil und gesuchte Größe bestimmen und einen Rechenplan entwickeln.",
  "D01": "Gib mir zwei Dezimalzahlen mit unterschiedlich vielen Nachkommastellen. Lass mich ihren Größenvergleich mit Stellenwerten begründen.",
  "D02": "Gib mir eine Dezimalmultiplikation. Lass mich zuerst das Ergebnis abschätzen und danach meine Rechnung damit prüfen.",
  "D03": "Zeige eine als fehlerhaft markierte Gleichung zu einer periodischen Dezimalzahl. Lass mich Gleichheits- und Näherungszeichen prüfen.",
  "R01": "Gib mir drei negative Zahlen. Lass mich ihre Reihenfolge am Zahlenstrahl begründen und eine eigene Vergleichsaufgabe erfinden.",
  "R02": "Meine Aufgabe: […]. Lass mich Startpunkt und Bewegungsrichtung am Zahlenstrahl begründen, bevor ich rechne.",
  "R03": "Gib mir eine Rechnung mit negativen Faktoren. Lass mich zuerst das Vorzeichen begründen und danach den Betrag berechnen.",
  "R04": "Gib mir zwei Potenzen mit unterschiedlicher Klammerung. Lass mich sie als Produkte ausschreiben und vergleichen.",
  "R05": "Meine Geschichte: […]. Lass mich Anfangswert, Änderung und Endwert unterscheiden und meine Rechnung begründen.",
  "P01": "Nenne einen Anteil als Prozentzahl, Bruch oder Dezimalzahl. Lass mich die anderen Darstellungen ergänzen und erklären.",
  "P02": "Meine Prozentaufgabe: […]. Lass mich zuerst begründen, welche Größe 100 % entspricht, und dann den Ansatz entwickeln.",
  "P03": "Gib mir zwei aufeinanderfolgende Preisänderungen. Lass mich jeweils den Grundwert bestimmen und erklären, ob sie sich aufheben.",
  "P04": "Gib Kapital und Zinssatz für ein volles Jahr vor. Lass mich Ansatz und Einheit der Jahreszinsen begründen.",
  "T01": "Mein Term: […]. Lass mich die Bedeutung der Variablen und die Rechenreihenfolge erklären und einen Wert einsetzen.",
  "T02": "Lass mich eigene Beispiele für gleichartige und nicht gleichartige Terme finden und den Unterschied begründen.",
  "T03": "Aufgabe und mein Rechenweg: […]. Frage an der ersten fraglichen Stelle nach der Regel. Ich korrigiere selbst.",
  "T04": "Ausgangsterm und mein ausgeklammerter Term: […]. Lass mich durch Ausmultiplizieren prüfen und erklären, warum die Probe funktioniert.",
  "T05": "Gib mir ein Produkt zweier Summen. Lass mich alle Teilprodukte begründen, bevor ich zusammenfasse.",
  "T06": "Zeige eine als unvollständig markierte binomische Entwicklung. Lass mich den fehlenden Term durch Ausmultiplizieren herleiten.",
  "T07": "Gib mir einen Term mit Klammer. Lass mich eine passende Geschichte erfinden und jedes Glied zuordnen.",
  "E01": "Gib eine Gleichung und zwei Lösungskandidaten. Lass mich durch Einsetzen begründen, welche Zahl eine Lösung ist.",
  "E02": "Meine Gleichung und mein Weg: […]. Lass mich begründen, warum eine Umformung die Lösungsmenge erhält.",
  "E03": "Gib mir eine Gleichung mit Brüchen. Lass mich den Hauptnenner wählen und seine Wirkung auf jeden Summanden erklären.",
  "E04": "Meine Formel und Zielgröße: […]. Lass mich einen Umformungsschritt begründen und prüfen, wann eine Division erlaubt ist.",
  "E05": "Meine Sachsituation: […]. Lass mich die Variable erklären, eine Gleichung aufstellen und ihre Bedeutung begründen.",
  "E06": "Gib zwei Geradengleichungen und einen Prüfpunkt. Lass mich begründen, welche Proben einen gemeinsamen Punkt nachweisen.",
  "E07": "Mein Gleichungssystem: […]. Lass mich eine günstige Lösungsmethode wählen, begründen und selbst durchführen.",
  "E08": "Gib zwei Geradengleichungen. Lass mich die Anzahl der Lösungen anhand von Steigungen und Achsenabschnitten begründen.",
  "F00": "Beschreibe eine Alltagszuordnung. Lass mich prüfen, ob jede Eingabe genau eine Ausgabe hat, und ein eigenes Beispiel finden.",
  "F01": "Gib eine proportionale Alltagssituation. Lass mich den konstanten Faktor mit Einheit bestimmen und seine Bedeutung erklären.",
  "F02": "Gib einen Bruch als Steigung vor. Lass mich passende waagerechte und senkrechte Schritte beschreiben und begründen.",
  "F03": "Gib eine lineare Funktionsgleichung. Lass mich eine Wertetabelle erstellen und erklären, wie daraus der Graph entsteht.",
  "F04": "Meine Punkte und Rechnung: […]. Lass mich die Punktreihenfolge im Steigungsbruch prüfen und den Ansatz begründen.",
  "F05": "Situation und meine beiden Kostenfunktionen: […]. Lass mich Steigungen und Grundgebühren erklären, den Schnittpunkt berechnen und prüfen.",
  "F06": "Gib eine antiproportionale Arbeitssituation. Lass mich erklären, welches Produkt gleich bleibt und unter welchen Annahmen.",
  "F07": "Stelle eine als falsch markierte Behauptung über Zuordnungsarten auf. Lass mich ein Gegenbeispiel entwickeln und erklären.",
  "F08": "Mein lineares Modell und die Situation: […]. Lass mich sinnvolle Eingaben abgrenzen und die Grenzen begründen.",
  "F09": "Gib einen Messpunkt und eine Modellgerade. Lass mich die Abweichung berechnen und eine mögliche Ursache erklären.",
  "G01": "Beschreibe eine Figur durch Eigenschaften. Lass mich ihren Namen begründen und prüfen, ob mehrere Namen passen.",
  "G02": "Lass mich das Anlegen des Geodreiecks erklären. Frage gezielt nach Scheitel, Schenkel und der passenden Skala.",
  "G03": "Gib einen Punkt mit negativer Koordinate. Lass mich seinen Weg vom Ursprung erklären und eine eigene Punktbeschreibung erstellen.",
  "G04": "Beschreibe eine Spiegelung oder Verschiebung und einen Bildpunkt. Lass mich den Ausgangspunkt finden und die Rückprobe erklären.",
  "G05": "Nenne eine Abstandseigenschaft. Lass mich die passende Ortslinie bestimmen und begründen, warum ihre Punkte die Bedingung erfüllen.",
  "G06": "Gib drei Angaben zu einem Dreieck vor. Lass mich begründen, ob ein Dreieck möglich und eindeutig bestimmt ist.",
  "G07": "Beschreibe eine besondere Dreieckslinie ohne Namen. Lass mich sie bestimmen und von einer anderen Linie abgrenzen.",
  "G08": "Beschreibe eine Kreissituation. Lass mich prüfen und begründen, ob ich den Satz des Thales anwenden darf.",
  "G09": "Mein selbst gezeichnetes Würfelnetz: […]. Frage nach gegenüberliegenden Flächen. Lass mich durch Falten prüfen und begründen.",
  "G10": "Meine geometrische Behauptung und Begründung: […]. Lass mich prüfen, ob mein Argument allgemein gilt oder nur zur Skizze passt.",
  "M01": "Nenne eine Größenangabe mit unpassender Einheit. Lass mich mit einer Alltagsgröße begründen, was daran unplausibel ist.",
  "M02": "Lass mich am Quadrat oder Würfel erklären, warum ein Umrechnungsfaktor bei Fläche zweimal und bei Volumen dreimal wirkt.",
  "M03": "Lass mich zwei Rechtecke mit gleichem Umfang und verschiedener Fläche finden und den Unterschied erklären.",
  "M04": "Gib drei Quaderkantenlängen vor. Lass mich die sechs Flächen zuordnen und daraus die Oberflächenformel erklären.",
  "M05": "Grundseite und Beschreibung meiner Dreiecksskizze: […]. Lass mich die zugehörige Höhe bestimmen und ihre Wahl begründen.",
  "M06": "Beschreibe ein Dreiecksprisma mit Dreieckshöhe und Körperhöhe. Lass mich erklären, welche Höhe zu welcher Flächen- oder Volumenrechnung gehört.",
  "M07": "Gib eine Planlänge in cm und eine echte Länge in m vor. Lass mich den Maßstab bestimmen und die Umrechnung begründen.",
  "M08": "Lass mich eine Alltagsgröße schätzen, eine Vergleichsgröße nennen und meine Annahmen begründen. Hinterfrage unplausible Größenordnungen.",
  "S01": "Meine Umfragefrage und Auswahl der Befragten: […]. Lass mich mögliche Verzerrungen erkennen und eine Verbesserung begründen.",
  "S02": "Gib zwei unterschiedlich große Gruppen mit Trefferzahlen. Lass mich absolute und relative Häufigkeiten vergleichen und den Unterschied erklären.",
  "S03": "Beschreibe ein Diagramm mit abgeschnittener Achse. Lass mich seine Wirkung erklären und einen fairen Vergleich vorschlagen.",
  "S04": "Gib eine Datenliste mit Wiederholungen. Lass mich den Mittelwert berechnen und begründen, warum jeder Wert mitzählt.",
  "S05": "Nenne einen Mittelwert. Lass mich zwei sehr verschiedene passende Datenlisten erfinden und ihre Unterschiede erklären.",
  "W01": "Beschreibe einen Zufallsversuch. Lass mich Ergebnisraum und ein Ereignis mit mehreren Ergebnissen angeben und unterscheiden.",
  "W02": "Gib eine Ziehsituation. Lass mich begründen, welche Einzelergebnisse gleich wahrscheinlich sind, bevor ich die Wahrscheinlichkeit berechne.",
  "W03": "Gib eine kurze Versuchsreihe. Lass mich Beobachtung und Modellwahrscheinlichkeit unterscheiden und meine Aussagen begründen.",
  "W04": "Gib eine Urne für zwei Züge ohne Zurücklegen vor. Lass mich nach jedem Zug den Bestand und die Zweigwahrscheinlichkeiten erklären.",
  "W05": "Beschreibe ein zweistufiges Ereignis. Lass mich begründen, wo ich multipliziere und welche Fälle ich addiere.",
  "W06": "Lass mich Trefferregel und Versuchszahl einer Simulation festlegen und begründen, warum ich die Regel bei überraschenden Ergebnissen beibehalte."
};
function aiTopicPrompt(id) {
  return AI_CONTEXT+' Ich übe: '+title(id)+'.\n'+AI_TOPIC_TASKS[id]+'\n'+AI_DIALOG;
}
const AI_PROMPTS = [
  ['Mich herausfordern lassen', 'Mein Thema: […]. Stelle mir eine passende Verständnisfrage. Fordere eine Begründung und passe die nächste Frage an meine Antwort an.'],
  ['Meine Begründung prüfen', 'Aufgabe und meine Begründung: […]. Prüfe, was trägt und wo eine Lücke ist. Lass mich die Begründung selbst verbessern.'],
  ['Eigene Beispiele finden', 'Mein Thema: […]. Fordere ein eigenes Beispiel und ein Gegenbeispiel. Lass mich erklären, warum sie passen.'],
  ['Meinen Rechenweg prüfen', 'Aufgabe und mein Rechenweg: […]. Frage beim ersten Fehler gezielt nach, damit ich ihn selbst erkenne und verbessere.'],
  ['Nur einen kleinen Hinweis bekommen', 'Aufgabe, mein Versuch und die schwierige Stelle: […]. Gib nur einen kleinen Denkanstoß. Lass mich weiterrechnen und meinen Schritt begründen.']
].map(([heading,task])=>[heading,AI_CONTEXT+'\n'+task+'\n'+AI_DIALOG]);
function aiPromptBox(text, key) {
  return `<div class="ai-prompt"><div class="ai-prompt-heading"><label for="ai-prompt-${key}">Dein Auftrag an die KI</label><button type="button" class="ai-link" data-ai-copy="ai-prompt-${key}">Prompt kopieren</button></div><div class="ai-prompt-preview">${materialText(text)}</div><details><summary>Text zum Kopieren anzeigen</summary><textarea id="ai-prompt-${key}" rows="6" readonly>${esc(text)}</textarea></details></div>`;
}
function aiAccess() {
  return `<section class="card ai-card"><h2>So kommst du zu AIS.chat</h2><ol class="ai-steps"><li>Öffne <strong>moin.schule</strong> und melde dich mit deinem Schulzugang an.</li><li>Wähle unter <strong>Meine Anwendungen</strong> die Kachel <strong>AIS.chat</strong> und tippe auf <strong>Start</strong>.</li><li>Öffne einen Chat. Füge deinen Auftrag ein und ergänze deine Aufgabe und deinen bisherigen Versuch.</li></ol><a class="button ai-link" href="https://moin.schule/" target="_blank" rel="noopener noreferrer">moin.schule öffnen ↗</a><details class="ai-tile"><summary>Die Kachel erkennen</summary><img src="ais-chat.png" width="322" height="559" alt="Unter Meine Anwendungen: die Kachel AIS.chat mit der Schaltfläche Start" loading="lazy"><p class="small muted">Für dich ist die Schaltfläche „Start“ wichtig. Der Hinweis zur Aktivierung richtet sich an die Schulleitung.</p></details></section>`;
}
function aiRules() {
  return `<section class="card ai-card"><h2>Lass dich von der KI herausfordern.</h2><p><strong>Sinnvoll mit KI lernen heißt: Du denkst, erklärst und begründest.</strong> Die KI stellt gezielte Nachfragen, fordert eigene Beispiele und gibt Feedback. Du verbesserst deinen Weg selbst.</p><ol class="ai-steps"><li><strong>Erst selbst:</strong> Versuche die Aufgabe und zeige deinen bisherigen Gedanken oder Rechenweg.</li><li><strong>Dann herausfordern lassen:</strong> Bitte um eine Frage nach der anderen. Begründe deine Antwort oder finde ein eigenes Beispiel. Lass die KI prüfen, was überzeugt und was noch fehlt.</li><li><strong>Feedback nutzen:</strong> Überarbeite deine Antwort. Prüfe auch die KI mit einer Probe, Skizze oder der Erklärung im Lernraum.</li><li><strong>Zum Schluss allein:</strong> Schließe den Chat. Löse eine neue Aufgabe und erkläre deinen Weg ohne Hilfe.</li></ol><p class="small">Checks und Tests bearbeitest du ohne KI, entsprechend den Vorgaben deiner Lehrkraft.</p></section>`;
}
function aiOverview() {
  return `<div class="ai-page">${pageHead('Lernen mit KI','Lass dich herausfordern: selbst denken, begründen und verbessern.')}${aiRules()}${aiAccess()}<section class="card ai-card"><h2>Was möchtest du gerade tun?</h2><p>Ein guter Auftrag nennt dein Thema, deinen Versuch und was die KI tun soll. Wähle einen Vorschlag und ergänze die eckigen Klammern.</p>${AI_PROMPTS.map(([heading,prompt],i)=>`<details><summary>${heading}</summary>${aiPromptBox(prompt,'general-'+i)}</details>`).join('')}<p class="small">Einen passenden Auftrag zu deinem Thema findest du dort im lila Bereich „Lernen mit KI“.</p><a class="button" href="#topics">Mein Thema auswählen</a></section><section class="card"><h2>KI-Antworten prüfen</h2><p>Eine überzeugende Erklärung kann falsch sein. Die Mathematik entscheidet.</p><details><summary>Beispiel: eine falsche Bruchregel</summary><p>Behauptet die KI, ${renderMath('\\frac12+\\frac12')} sei ${renderMath('\\frac24')}, prüfe am Ganzen: Zwei Hälften ergeben ein Ganzes. Beim Addieren werden die Nenner nicht mitaddiert.</p><a href="#learn/B02/explain">Brüche wiederholen</a></details><details><summary>Beispiel: zwei Kostenmodelle vergleichen</summary><p>Nenne beide vollständigen Angebote und deinen Ansatz. Bitte die KI zunächst nur zu prüfen, ob du Grundgebühr und Preis pro Einheit richtig zugeordnet hast. Sie soll dir danach eine Frage zum Gleichsetzen stellen.</p><p>Prüfe selbst: Haben beide Funktionen am berechneten x denselben y-Wert? Passt der Schnittpunkt zum erlaubten Bereich der Sachsituation?</p><a href="#learn/F05/explain">Nullstellen und Schnittpunkte wiederholen</a></details><details><summary>Wenn die KI zu viel verrät oder etwas nicht stimmt</summary><p>Decke eine sofort angezeigte Lösung ab und bitte um eine neue Aufgabe. Abschreiben zeigt noch kein Verständnis. Bei einem Widerspruch notiere den genauen Schritt und kläre ihn mit deiner Lehrkraft.</p></details><p class="small">Die KI kennt dein Lernblatt nicht automatisch. Nenne das Thema, die vollständige Aufgabe und deinen Versuch. Beschreibe bei Zeichnungen auch Punkte, Maße und Markierungen.</p></section><p class="small muted">Nutze deinen freigegebenen Schulzugang. Gib keine Namen, Noten, Zugangsdaten oder erkennbaren Personenfotos in den Chat ein. Alle Themen lassen sich auch ohne KI bearbeiten.</p></div>`;
}
function aiTopic(id) {
  const coach=MATERIAL_SOURCE.topics[id].coach;
  const prompt=aiTopicPrompt(id);
  return `<div class="ai-page"><section class="card ai-card"><div class="eyebrow">Lernen mit KI</div><h2>${esc(coach.title)}</h2><p>Lass dich herausfordern: Begründe deinen Weg, beantworte Nachfragen und nutze das Feedback für eine eigene Verbesserung.</p>${aiPromptBox(prompt,'topic')}<p class="small">Ersetze Platzhalter durch deine Angaben. Ergänze die vollständige Aufgabe und deinen bisherigen Versuch im Chat. Die KI kennt dein Lernblatt nicht automatisch.</p><div class="actions"><a class="button ai-link" href="https://moin.schule/" target="_blank" rel="noopener noreferrer">Zu moin.schule ↗</a><a href="#ai">So öffnest und nutzt du AIS.chat</a></div></section><section class="card"><h2>Danach wieder selbst</h2><p>Prüfe die Antwort mit einer Probe oder der Erklärung. Erkläre deinen Weg in eigenen Worten, schließe den Chat und löse eine neue Aufgabe ohne Hilfe.</p><div class="actions"><a class="button" href="#learn/${id}/practice">Selbst weiterüben</a><a href="#learn/${id}/guide">Erklärung nachlesen</a></div><p class="small muted">Der Chat findet außerhalb des Lernraums statt. Deine Nachrichten und die dort verbrachte Zeit werden hier nicht übernommen. Den Check bearbeitest du ohne KI.</p></section></div>`;
}
document.addEventListener('click',async e=>{
  const button=e.target.closest('button[data-ai-copy]');if(!button?.dataset.aiCopy)return;
  const field=document.getElementById(button.dataset.aiCopy);if(!field)return;
  if(button.disabled)return;
  button.disabled=true;
  let copied=false;
  try {
    if(typeof navigator==='undefined'||!navigator.clipboard?.writeText)throw new Error('clipboard unavailable');
    await navigator.clipboard.writeText(field.value);
    copied=true;
  } catch {
    const details=field.closest?.('details'),wasOpen=details?.open;
    if(details)details.open=true;
    field.focus();field.select();field.setSelectionRange(0,field.value.length);
    try {copied=document.execCommand?.('copy')===true;} catch {}
    if(copied){if(details)details.open=wasOpen;button.focus?.();}
    else toast('Automatisches Kopieren ist hier nicht möglich. Der Prompt ist markiert: Wähle „Kopieren“.');
  }
  button.disabled=false;
  if(copied){
    button.textContent='✓ Kopiert';
    toast('Prompt kopiert. Du kannst ihn jetzt im KI-Chat einfügen.');
    setTimeout(()=>{button.textContent='Prompt kopieren';},2500);
  }
});
window.addEventListener('hashchange',()=>{
  if(route()!=='ai')return;let changed=false;
  for(const run of Object.values(state.activeChecks||{})){if(!run.complete&&!run.assisted){run.assisted=true;changed=true;}}
  if(changed)save();
});
