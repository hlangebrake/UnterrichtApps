const DATA = {
  "topics": {
    "N01": {
      "title": "Stellenwert, Ordnen und Runden",
      "idea": "Der Wert einer Ziffer hängt von ihrer Stelle ab. Beim Runden entscheidet die nächste kleinere Stelle: 0 bis 4 abrunden, 5 bis 9 aufrunden.",
      "area": "Natürliche Zahlen und Rechenregeln",
      "competence": "Ich kann natürliche Zahlen im Stellenwertsystem darstellen, ordnen und runden.",
      "steps": [
        "Ordnen: Vergleiche von links, bis sich eine Stelle unterscheidet.",
        "Runden: Markiere die verlangte Stelle. Die Ziffer direkt rechts entscheidet: 0–4 ab, 5–9 auf.",
        "Nach dem Runden stehen rechts von der Rundungsstelle Nullen. Schreibe dazu, auf welche Stelle du gerundet hast."
      ]
    },
    "N02": {
      "title": "Sicher mit natürlichen Zahlen rechnen",
      "idea": "Zerlege große Rechnungen in überschaubare Schritte. Addition und Subtraktion sowie Multiplikation und Division sind jeweils Umkehroperationen.",
      "area": "Natürliche Zahlen und Rechenregeln",
      "competence": "Ich kann mit natürlichen Zahlen sicher im Kopf und schriftlich rechnen.",
      "steps": [
        "Wähle die Rechenart und schätze zuerst die Größenordnung.",
        "Schreibe beim schriftlichen Rechnen Einer unter Einer, Zehner unter Zehner usw. Halte Überträge fest.",
        "Prüfe Plus mit Minus und Mal mit Geteilt – oder umgekehrt. Bei Division ist der Rest kleiner als der Divisor."
      ]
    },
    "N03": {
      "title": "Teiler, Vielfache und Primzahlen",
      "idea": "Ein Teiler passt ohne Rest in eine Zahl. Vielfache entstehen durch Multiplikation. Eine Primzahl hat genau zwei positive Teiler: 1 und sich selbst.",
      "area": "Natürliche Zahlen und Rechenregeln",
      "competence": "Ich kann Teiler, Vielfache und Primzahlen erkennen und Teilbarkeit nutzen.",
      "steps": [
        "Für Teiler suche passende Faktorpaare. Eine Primzahl hat genau zwei positive Teiler; 1 ist nicht prim.",
        "Für den größten gemeinsamen Teiler (ggT) suche den größten Teiler beider Zahlen.",
        "Für das kleinste gemeinsame Vielfache (kgV) suche das kleinste positive gemeinsame Vielfache."
      ]
    },
    "N04": {
      "title": "Die Reihenfolge beim Rechnen",
      "idea": "Rechne zuerst Klammern, dann Potenzen, dann Punkt- vor Strichrechnung. Gleichrangige Operationen werden von links nach rechts ausgeführt.",
      "area": "Natürliche Zahlen und Rechenregeln",
      "competence": "Ich kann Klammern und die Rangfolge der Rechenoperationen beachten.",
      "steps": [
        "Berechne zuerst die innersten Klammern, dann Potenzen.",
        "Berechne Multiplikationen und Divisionen, danach Additionen und Subtraktionen.",
        "Bei gleichem Rang arbeite von links nach rechts. Schreibe in jeder Zeile auch die noch unveränderten Teile mit."
      ]
    },
    "N05": {
      "title": "Rechengesetze und Überschlag",
      "idea": "Bei Summen und Produkten darfst du geschickt umordnen und zusammenfassen. Ein Überschlag zeigt vor dem genauen Rechnen die Größenordnung.",
      "area": "Natürliche Zahlen und Rechenregeln",
      "competence": "Ich kann Rechengesetze und Überschläge zur Kontrolle nutzen.",
      "steps": [
        "Bei reinen Summen oder Produkten darfst du vertauschen und anders gruppieren.",
        "Verteile einen Faktor auf eine Summe oder Differenz: a · (b + c) = a · b + a · c.",
        "Vergleiche das genaue Ergebnis mit einem groben Überschlag. Bei Minus und Geteilt darfst du nicht beliebig vertauschen."
      ]
    },
    "B01": {
      "title": "Was bedeutet ein Bruch?",
      "idea": "Der Nenner nennt die Anzahl gleich großer Teile des Ganzen; der Zähler zählt die gewählten Teile. Ein Bruch ist zugleich eine Zahl und eine Division.",
      "area": "Brüche",
      "competence": "Ich kann Brüche als Anteil, Zahl, Quotient und Verhältnis deuten.",
      "steps": [
        "Der Nenner unter dem Bruchstrich sagt, in wie viele gleich große Teile ein Ganzes geteilt wird.",
        "Der Zähler über dem Strich zählt die ausgewählten Teile. Auf der Zahlengeraden zählt die Strecke von 0 bis 1 als ein Ganzes.",
        "Für einen Anteil einer Menge: erst durch den Nenner teilen, dann mit dem Zähler multiplizieren."
      ]
    },
    "B02": {
      "title": "Brüche kürzen und erweitern",
      "idea": "Multipliziere oder dividiere Zähler und Nenner mit derselben Zahl ungleich 0. Die Schreibweise ändert sich, der Wert des Bruchs bleibt gleich.",
      "area": "Brüche",
      "competence": "Ich kann Brüche kürzen und erweitern und die Werterhaltung erklären.",
      "steps": [
        "Erweitern: Multipliziere Zähler und Nenner mit derselben positiven ganzen Zahl.",
        "Kürzen: Teile Zähler und Nenner durch denselben gemeinsamen Teiler größer als 1.",
        "Vollständig gekürzt ist ein Bruch, wenn oben und unten kein gemeinsamer Teiler größer als 1 mehr vorkommt."
      ]
    },
    "B03": {
      "title": "Brüche vergleichen und umwandeln",
      "idea": "Bei gleichem Nenner entscheidet der Zähler über die Größe. Zerlege einen unechten Bruch in ganze Anteile und einen Rest, um eine gemischte Zahl zu erhalten.",
      "area": "Brüche",
      "competence": "Ich kann Brüche vergleichen und zwischen gemischter Zahl und Bruch wechseln.",
      "steps": [
        "Erweitere zum Vergleichen auf denselben positiven Nenner. Dann entscheidet der größere Zähler.",
        "Bei gleichem positiven Zähler ist der Bruch mit dem kleineren positiven Nenner größer.",
        "Gemischte Zahl umwandeln: Ganze · Nenner + Zähler. Zurück: Zähler durch Nenner teilen und den Rest als Bruch schreiben."
      ]
    },
    "B04": {
      "title": "Brüche addieren",
      "idea": "Zum Addieren brauchst du gleich große Teile: Mache die Brüche gleichnamig. Addiere dann nur die Zähler und kürze das Ergebnis, wenn möglich.",
      "area": "Brüche",
      "competence": "Ich kann Brüche addieren und das Ergebnis sinnvoll vereinfachen.",
      "steps": [
        "Finde einen gemeinsamen Nenner und erweitere beide Brüche passend.",
        "Addiere die Zähler; der gemeinsame Nenner bleibt stehen.",
        "Kürze das Ergebnis. Bei positiven Summanden muss die Summe größer sein als jeder einzelne Summand."
      ]
    },
    "B05": {
      "title": "Brüche subtrahieren",
      "idea": "Zum Subtrahieren brauchst du gleiche Nenner. Ziehe dann die Zähler voneinander ab; die Größe der Teile und damit der Nenner bleiben gleich.",
      "area": "Brüche",
      "competence": "Ich kann Brüche subtrahieren und Ergebnisse prüfen.",
      "steps": [
        "Wandle ganze oder gemischte Zahlen bei Bedarf in Brüche um und mache die Nenner gleich.",
        "Subtrahiere die Zähler; behalte den gemeinsamen Nenner.",
        "Kürze und prüfe: Rest + weggenommener Anteil muss wieder den Anfangswert ergeben."
      ]
    },
    "B06": {
      "title": "Brüche multiplizieren",
      "idea": "Ein Anteil von einem Anteil wird durch ein Produkt beschrieben. Multipliziere die Zähler und die Nenner; gemeinsame Faktoren kannst du vorher kürzen.",
      "area": "Brüche",
      "competence": "Ich kann Brüche multiplizieren und einen Anteil von einem Anteil bestimmen.",
      "steps": [
        "Multipliziere Zähler mit Zähler und Nenner mit Nenner.",
        "Du darfst vorher gemeinsame Faktoren aus dem gesamten Zähler und Nenner kürzen.",
        "Prüfe die Größe: Ein positiver Faktor kleiner als 1 verkleinert eine positive Menge; ein Faktor größer als 1 vergrößert sie."
      ]
    },
    "B07": {
      "title": "Durch einen Bruch dividieren",
      "idea": "Dividieren fragt auch: Wie oft passt der Divisor hinein? Multipliziere mit dem Kehrwert des zweiten Bruchs. Durch 0 darfst du nicht teilen.",
      "area": "Brüche",
      "competence": "Ich kann durch einen Bruch dividieren und den Kehrwert erklären.",
      "steps": [
        "Lass den ersten Bruch unverändert. Vertausche nur beim zweiten Bruch Zähler und Nenner: Das ist sein Kehrwert.",
        "Ersetze die Division durch Multiplikation mit diesem Kehrwert. Kürze und rechne.",
        "Prüfe mit Ergebnis · Divisor = Dividend. Durch 0 darfst du nicht teilen."
      ]
    },
    "B08": {
      "title": "Mit Brüchen Sachaufgaben lösen",
      "idea": "Kläre, was das Ganze ist. Ist ein Anteil gesucht, multipliziere. Ist ein Anteil bekannt und das Ganze gesucht, rechne über einen Teil zurück.",
      "area": "Brüche",
      "competence": "Ich kann Brüche in Sachaufgaben verwenden und rückwärts zum Ganzen rechnen.",
      "steps": [
        "Notiere das Ganze, den Bruch und die bekannte oder gesuchte Menge mit Einheit.",
        "Anteil gesucht: Ganzes · Bruch. Ganzes gesucht: bekannte Teilmenge durch den Bruch teilen – oder zuerst einen Teil bestimmen.",
        "Bei „vom Rest“ ändert sich das Ganze. Rechne nacheinander und prüfe deinen Antwortsatz."
      ]
    },
    "D01": {
      "title": "Dezimalzahlen verstehen",
      "idea": "Rechts vom Komma stehen Zehntel, Hundertstel, Tausendstel und so weiter. Zum Vergleichen kannst du Endnullen ergänzen; der Wert bleibt gleich.",
      "area": "Dezimalzahlen",
      "competence": "Ich kann Dezimalzahlen als Stellenwerte und Brüche darstellen und vergleichen.",
      "steps": [
        "Vergleiche erst die ganzen Teile und dann die Nachkommastellen von links nach rechts.",
        "Du darfst hinten Nachkommanullen ergänzen; vorhandene Ziffern bleiben dabei an ihrer Stelle.",
        "Als Bruch: eine Nachkommastelle bedeutet Zehntel, zwei bedeuten Hundertstel usw. Danach kürzen."
      ]
    },
    "D02": {
      "title": "Mit Dezimalzahlen rechnen",
      "idea": "Beim Addieren und Subtrahieren gehören gleiche Stellenwerte untereinander. Beim Dividieren darfst du beide Zahlen gleich weit verschieben, bis der Divisor ganzzahlig ist.",
      "area": "Dezimalzahlen",
      "competence": "Ich kann mit Dezimalzahlen in allen vier Grundrechenarten rechnen.",
      "steps": [
        "Plus und Minus: Schreibe die Kommas untereinander; gleiche Stellenwerte werden zusammen gerechnet.",
        "Mal: Rechne zunächst ohne Kommas. Die Nachkommastellen beider Faktoren werden für das Produkt zusammengezählt; Endnullen darfst du weglassen.",
        "Geteilt: Multipliziere beide Zahlen mit derselben Zehnerpotenz, bis der Divisor ganzzahlig ist. Prüfe mit Überschlag oder Umkehraufgabe."
      ]
    },
    "D03": {
      "title": "Bruch und Dezimalzahl wechseln",
      "idea": "Teile den Zähler durch den Nenner. Die Division endet oder Ziffern wiederholen sich periodisch. Ein Periodenstrich kennzeichnet die sich wiederholende Ziffernfolge.",
      "area": "Dezimalzahlen",
      "competence": "Ich kann zwischen Brüchen und endlichen oder periodischen Dezimalzahlen wechseln.",
      "steps": [
        "Vom Bruch zur Dezimalzahl: Teile Zähler durch Nenner oder erweitere auf 10, 100, 1000 usw.",
        "Bei einer Periode steht der Strich über genau der wiederholten Ziffernfolge.",
        "Zurück zum Bruch: Nutze bei endlichen Dezimalzahlen die Stellenwerte und kürze. Verwende ≈ für gerundete, nicht exakt gleiche Werte."
      ]
    },
    "R01": {
      "title": "Rationale Zahlen ordnen",
      "idea": "Negative Zahlen liegen links von 0. Je weiter links eine Zahl liegt, desto kleiner ist sie. Gegenzahlen haben denselben Abstand von 0, aber entgegengesetzte Vorzeichen.",
      "area": "Rationale Zahlen",
      "competence": "Ich kann rationale Zahlen auf der Zahlengeraden ordnen und Gegenzahlen nutzen.",
      "steps": [
        "Zum Ordnen nutze eine gemeinsame Schreibweise, etwa Dezimalzahlen, und die Lage auf der Zahlengeraden.",
        "Die Gegenzahl liegt gegenüber auf der anderen Seite von 0; bei 0 bleibt sie 0.",
        "Der Betrag ist der Abstand zu 0. Er ist nie negativ und sagt allein noch nicht, auf welcher Seite die Zahl liegt."
      ]
    },
    "R02": {
      "title": "Mit Vorzeichen addieren und subtrahieren",
      "idea": "Addieren einer positiven Zahl führt nach rechts, einer negativen nach links. Subtrahieren heißt die Gegenzahl addieren.",
      "area": "Rationale Zahlen",
      "competence": "Ich kann rationale Zahlen addieren und subtrahieren.",
      "steps": [
        "Ersetze eine Subtraktion durch das Addieren der Gegenzahl.",
        "Auf der Zahlengeraden: positive Zahl addieren nach rechts, negative Zahl addieren nach links.",
        "Bei Brüchen zusätzlich gleichnamig machen. Prüfe Startwert, Richtung und Endwert."
      ]
    },
    "R03": {
      "title": "Mit Vorzeichen multiplizieren und teilen",
      "idea": "Bestimme erst das Vorzeichen, dann den Betrag: Gleiche Vorzeichen geben Plus, verschiedene Minus. Diese Regel gilt für Produkt und Quotient.",
      "area": "Rationale Zahlen",
      "competence": "Ich kann rationale Zahlen multiplizieren und dividieren.",
      "steps": [
        "Bestimme beim Produkt oder Quotienten das Vorzeichen: gleich ergibt Plus, verschieden ergibt Minus.",
        "Rechne anschließend mit den Beträgen. Bei Bruchdivision nutze den Kehrwert des zweiten Bruchs.",
        "Prüfe eine Division mit Multiplikation. Bei mehreren negativen Faktoren zählen gerade oder ungerade Anzahlen; 0 als Faktor ergibt 0."
      ]
    },
    "R04": {
      "title": "Vorzeichen, Klammern und Potenzen",
      "idea": "Eine Potenz steht für wiederholtes Multiplizieren. Klammern zeigen, ob das Minus zur Basis gehört. Potenzrechnung hat Vorrang vor einem äußeren Minus.",
      "area": "Rationale Zahlen",
      "competence": "Ich kann Vorzeichen, Klammern und einfache Potenzschreibweisen unterscheiden.",
      "steps": [
        "Schreibe bei Unsicherheit die Potenz als Produkt gleicher Faktoren.",
        "Bei (−a)² wird das Minus mit quadriert; bei −a² steht es vor dem Quadrat.",
        "Setze negative Werte immer mit Klammern für die Variable ein und beachte die Rechenreihenfolge."
      ]
    },
    "R05": {
      "title": "Positive und negative Änderungen",
      "idea": "Ein Vorzeichen beschreibt eine Richtung, etwa steigen oder fallen. Der Endwert ist Anfangswert plus Änderung. Rückwärts ziehst du die Änderung wieder ab.",
      "area": "Rationale Zahlen",
      "competence": "Ich kann Sachverhalte mit positiven und negativen Änderungen modellieren.",
      "steps": [
        "Übersetze steigen, einzahlen und aufwärts in positive Änderungen; fallen, abbuchen und abwärts in negative.",
        "Endwert = Anfangswert + Änderung. Gesuchte Änderung = Endwert − Anfangswert.",
        "Zum Anfangswert kommst du mit Endwert − Änderung zurück. Nenne die Einheit und prüfe den Sinn."
      ]
    },
    "P01": {
      "title": "Prozent, Bruch und Dezimalzahl",
      "idea": "Prozent heißt „von hundert“. Du kannst denselben Anteil als Bruch, Dezimalzahl oder Prozentangabe schreiben. 100 % entsprechen dem Ganzen.",
      "area": "Prozent- und Zinsrechnung",
      "competence": "Ich kann zwischen Prozentangabe, Bruch und Dezimalzahl wechseln.",
      "steps": [
        "Lege fest, was das Ganze (100 %) ist.",
        "Schreibe p % als Bruch p/100 oder als Dezimalzahl.",
        "Prüfe, ob der Anteil kleiner oder größer als das Ganze sein muss."
      ]
    },
    "P02": {
      "title": "Die drei Größen der Prozentrechnung",
      "idea": "Der Grundwert G ist das Ganze, der Prozentwert W der Anteil. Hier ist p der Prozentsatz als Dezimalzahl, zum Beispiel p = 0,25 für 25 %.",
      "area": "Prozent- und Zinsrechnung",
      "competence": "Ich kann Prozentwert, Grundwert und Prozentsatz unterscheiden und berechnen.",
      "steps": [
        "Markiere das Ganze G (100 %) und den Anteil W.",
        "Wandle den Prozentsatz in die Dezimalzahl p um: 20 % → 0,20.",
        "Nutze W = G · p, G = W : p oder p = W : G; prüfe am Sachzusammenhang."
      ]
    },
    "P03": {
      "title": "Prozentuale Änderungen",
      "idea": "Bei einer Erhöhung um p ist der Faktor 1 + p, bei einer Senkung 1 − p. p ist der Dezimalanteil. Zum ursprünglichen Wert kommst du durch Division durch den Faktor.",
      "area": "Prozent- und Zinsrechnung",
      "competence": "Ich kann prozentuale Zu- und Abnahmen sowie den Ausgangswert bestimmen.",
      "steps": [
        "Bestimme den Ausgangswert: Er entspricht 100 %.",
        "Erhöhung um p: Faktor 1 + p; Senkung um p: Faktor 1 − p (p als Dezimalzahl).",
        "Multipliziere mit dem Faktor. Suchst du den Ausgangswert, teile den Endwert durch den Faktor."
      ]
    },
    "P04": {
      "title": "Einfache Jahreszinsen",
      "idea": "Zinsen sind ein Prozentwert des Kapitals für einen festgelegten Zeitraum. Wir rechnen ein volles Jahr ohne Gebühren und ohne Zinseszins; p ist der Dezimalzinssatz.",
      "area": "Prozent- und Zinsrechnung",
      "competence": "Ich kann einfache Jahreszinsen mit passenden Größen berechnen.",
      "steps": [
        "Ordne zu: Kapital K = angelegtes Geld; Z = Zinsen; p = Zinssatz als Dezimalzahl.",
        "Für ein Jahr gilt Z = K · p. Das Endguthaben ist K + Z.",
        "Kontrolliere, ob Zinsen oder gesamtes Guthaben gefragt sind."
      ]
    },
    "T01": {
      "title": "Terme verstehen und Werte einsetzen",
      "idea": "Ein Term ist ein Rechenausdruck. Eine Variable steht für eine Zahl. Ersetze die Variable überall durch denselben Wert; negative Werte setzt du in Klammern ein.",
      "area": "Terme",
      "competence": "Ich kann Variablen und Termstrukturen verstehen und Werte einsetzen.",
      "steps": [
        "Ersetze jedes Auftreten derselben Variable durch dieselbe Zahl.",
        "Setze negative Zahlen mit ihrem Vorzeichen in Klammern.",
        "Rechne nach der Reihenfolge: Klammern, Potenzen, Punkt vor Strich."
      ]
    },
    "T02": {
      "title": "Gleichartige Terme zusammenfassen",
      "idea": "Nur Summanden mit gleichem Variablenteil lassen sich zusammenfassen. Addiere ihre Koeffizienten und behalte den Variablenteil bei.",
      "area": "Terme",
      "competence": "Ich kann gleichartige Terme zusammenfassen.",
      "steps": [
        "Markiere gleiche Variablenteile; x und x² sind verschiedene Typen.",
        "Nimm beim Umordnen das Vorzeichen jedes Summanden mit.",
        "Addiere die Zahlenfaktoren; der Variablenteil bleibt unverändert."
      ]
    },
    "T03": {
      "title": "Klammern auflösen",
      "idea": "Multipliziere jeden Summanden in der Klammer mit dem äußeren Faktor. Ein Minus vor der Klammer entspricht dem Faktor −1 und ändert alle Vorzeichen.",
      "area": "Terme",
      "competence": "Ich kann Klammern ausmultiplizieren und Minusklammern auflösen.",
      "steps": [
        "Multipliziere den äußeren Faktor mit jedem Klammerglied.",
        "Beachte dabei alle Vorzeichen.",
        "Fasse erst danach gleichartige Summanden zusammen."
      ]
    },
    "T04": {
      "title": "Gemeinsame Faktoren ausklammern",
      "idea": "Ausklammern ist Ausmultiplizieren rückwärts. Suche einen gemeinsamen Faktor aller Summanden. In der Klammer stehen die jeweiligen Quotienten.",
      "area": "Terme",
      "competence": "Ich kann gemeinsame Faktoren ausklammern.",
      "steps": [
        "Suche einen Faktor, der in jedem Summanden steckt.",
        "Schreibe in die Klammer, womit dieser Faktor jeweils multipliziert werden muss.",
        "Prüfe durch Ausmultiplizieren."
      ]
    },
    "T05": {
      "title": "Produkte von Summen",
      "idea": "Jeder Summand der ersten Klammer wird mit jedem Summanden der zweiten multipliziert. Erst danach fasst du gleichartige Teilprodukte zusammen.",
      "area": "Terme",
      "competence": "Ich kann Produkte von Summen ausmultiplizieren.",
      "steps": [
        "Schreibe alle vier Produkte mit ihren Vorzeichen auf.",
        "Multipliziere die Teilprodukte aus.",
        "Fasse die gleichartigen Summanden zusammen."
      ]
    },
    "T06": {
      "title": "Die binomischen Formeln",
      "idea": "Die Formeln kürzen besondere Produkte ab. Bei Quadraten von Summen und Differenzen gehört das doppelte Produkt dazu. Rückwärts erkennst du passende Faktoren.",
      "area": "Terme",
      "competence": "Ich kann binomische Formeln vorwärts und rückwärts anwenden.",
      "steps": [
        "Erkenne die Form: (a + b)², (a − b)² oder (a − b)(a + b).",
        "Bestimme die vollständigen Teile a und b; bei 2x ist a der ganze Ausdruck 2x.",
        "Prüfe besonders das doppelte Produkt 2ab und das Vorzeichen des letzten Terms."
      ]
    },
    "T07": {
      "title": "Terme zu Situationen aufstellen",
      "idea": "Lege fest, was die Variable bedeutet. Übersetze die Beziehungen in einen Term. Gleichwertige Terme haben für jeden erlaubten Variablenwert denselben Wert.",
      "area": "Terme",
      "competence": "Ich kann Terme zu Situationen aufstellen, deuten und ihre Gleichwertigkeit begründen.",
      "steps": [
        "Lege Variable und Einheit fest.",
        "Unterscheide feste Beträge von Beträgen „je Stück“; nutze Klammern für ganze Pakete.",
        "Erkläre jeden Teil des Terms und prüfe mit einem einfachen Zahlenwert."
      ]
    },
    "E01": {
      "title": "Gleichung, Lösung und Probe",
      "idea": "Eine Gleichung setzt zwei Terme gleich. Eine Lösung ist ein Wert, der diese Gleichheit wahr macht. Bei der Probe setzt du ihn in die ursprüngliche Gleichung ein.",
      "area": "Gleichungen und Gleichungssysteme",
      "competence": "Ich kann Gleichung, Lösung und Probe unterscheiden.",
      "steps": [
        "Setze den vorgeschlagenen Wert in die ursprüngliche Gleichung ein.",
        "Berechne linke und rechte Seite getrennt.",
        "Vergleiche: Gleiche Werte bedeuten „Lösung“, verschiedene „keine Lösung“."
      ]
    },
    "E02": {
      "title": "Lineare Gleichungen lösen",
      "idea": "Führe auf beiden Seiten dieselbe umkehrbare Operation aus. Addieren, Subtrahieren sowie Multiplikation und Division mit einer Zahl ungleich 0 erhalten die Lösungen.",
      "area": "Gleichungen und Gleichungssysteme",
      "competence": "Ich kann lineare Gleichungen durch Äquivalenzumformungen lösen.",
      "steps": [
        "Löse nötige Klammern auf und fasse auf jeder Seite zusammen.",
        "Führe auf beiden Seiten dieselbe umkehrbare Rechenoperation aus; teile nie durch 0.",
        "Sammle die Variable auf einer Seite, berechne ihren Wert und prüfe im Original."
      ]
    },
    "E03": {
      "title": "Gleichungen mit Brüchen",
      "idea": "Bekannte Nenner kannst du durch Multiplikation auf beiden Seiten beseitigen. Bei einer Summe muss jeder Summand mitmultipliziert werden.",
      "area": "Gleichungen und Gleichungssysteme",
      "competence": "Ich kann Gleichungen mit Brüchen und einfache Verhältnisgleichungen lösen.",
      "steps": [
        "Suche einen gemeinsamen Nenner aller Brüche.",
        "Multipliziere jeden Summanden auf beiden Seiten damit; vergiss reine Zahlen nicht.",
        "Löse die neue Gleichung und prüfe in der ursprünglichen Bruchgleichung."
      ]
    },
    "E04": {
      "title": "Formeln umstellen",
      "idea": "Behandle andere Buchstaben wie bekannte Größen. Mache Rechenschritte rückgängig, bis die gesuchte Größe allein steht. Durch eine Größe darfst du nur teilen, wenn sie nicht 0 ist.",
      "area": "Gleichungen und Gleichungssysteme",
      "competence": "Ich kann einfache Formeln nach einer gesuchten Größe umstellen.",
      "steps": [
        "Markiere die gesuchte Größe und behandle die anderen Größen zunächst wie bekannte Zahlen.",
        "Mache die Rechenoperationen schrittweise rückgängig; die Operation gilt auf beiden Seiten.",
        "Behalte Klammern um ganze Summen und nenne Bedingungen für Divisionen."
      ]
    },
    "E05": {
      "title": "Sachaufgaben als Gleichung",
      "idea": "Benenne die gesuchte Größe mit einer Variablen. Übersetze die Aussage, löse die Gleichung und gib eine Antwort mit passender Einheit. Prüfe an der Situation.",
      "area": "Gleichungen und Gleichungssysteme",
      "competence": "Ich kann Sachaufgaben als lineare Gleichung modellieren und das Ergebnis deuten.",
      "steps": [
        "Schreibe auf, was x bedeutet und in welcher Einheit du rechnest.",
        "Übersetze die Beziehung in eine Gleichung und löse sie.",
        "Prüfe mit dem ursprünglichen Text; formuliere eine Antwort mit Einheit."
      ]
    },
    "E06": {
      "title": "Gleichungssysteme im Graphen",
      "idea": "Jede lineare Gleichung beschreibt eine Gerade. Ein gemeinsamer Schnittpunkt liegt auf beiden Geraden: Sein Koordinatenpaar erfüllt beide Gleichungen.",
      "area": "Gleichungen und Gleichungssysteme",
      "competence": "Ich kann lineare Gleichungssysteme grafisch deuten.",
      "steps": [
        "Bestimme für jede Gerade mindestens zwei Punkte.",
        "Zeichne beide mit derselben Skalierung in ein Koordinatensystem.",
        "Lies beide Koordinaten des Schnittpunkts ab und prüfe in beiden Gleichungen."
      ]
    },
    "E07": {
      "title": "Gleichungssysteme rechnerisch lösen",
      "idea": "Ist eine Variable isoliert, setze ihren Term in die andere Gleichung ein. Sind beide Gleichungen nach derselben Variablen aufgelöst, kannst du die Terme gleichsetzen.",
      "area": "Gleichungen und Gleichungssysteme",
      "competence": "Ich kann lineare Gleichungssysteme durch Einsetzen und Gleichsetzen lösen.",
      "steps": [
        "Ist eine Variable freigestellt, setze ihren gesamten Ausdruck in die andere Gleichung ein.",
        "Sind beide Gleichungen nach derselben Variable aufgelöst, kannst du ihre anderen Seiten gleichsetzen.",
        "Berechne beide Variablen und prüfe das Paar in beiden ursprünglichen Gleichungen."
      ]
    },
    "E08": {
      "title": "Wie viele Lösungen gibt es?",
      "idea": "Verschiedene Steigungen führen zu einem Schnittpunkt. Gleiche Steigungen ergeben parallele oder identische Geraden. Beim Umformen kann eine falsche oder immer wahre Aussage entstehen.",
      "area": "Gleichungen und Gleichungssysteme",
      "competence": "Ich kann eine, keine oder unendlich viele Lösungen erkennen.",
      "steps": [
        "Bringe die Gleichungen nach Möglichkeit in die Form y = mx + b.",
        "Vergleiche: verschiedene Steigungen → eine Lösung; gleiche Steigung und verschiedene Abschnitte → keine.",
        "Gleiche Steigung und gleicher Abschnitt → dieselbe Gerade, also unendlich viele gemeinsame Punkte."
      ]
    },
    "F00": {
      "title": "Abhängigkeiten beschreiben",
      "idea": "Eine Eingabegröße beeinflusst eine Ausgabegröße. Beschreibe die Regel in Worten, mit einer Tabelle oder einem Term. Prüfe, welche Eingaben in der Situation sinnvoll sind.",
      "area": "Zuordnungen und lineare Funktionen",
      "competence": "Ich kann Abhängigkeiten zwischen Zahlen und Größen beschreiben.",
      "steps": [
        "Benenne Eingabe und Ausgabe mit ihren Einheiten.",
        "Lies die Rechenregel in der richtigen Reihenfolge und berechne Wertepaare.",
        "Prüfe, welche Eingaben in der Situation sinnvoll sind und ob jede genau eine Ausgabe hat."
      ]
    },
    "F01": {
      "title": "Proportionale Zuordnungen",
      "idea": "Bei einer proportionalen Zuordnung bleibt der Quotient y/x für x ≠ 0 gleich. Doppelte Eingabe bedeutet doppelte Ausgabe. Der Graph geht durch den Ursprung.",
      "area": "Zuordnungen und lineare Funktionen",
      "competence": "Ich kann proportionale Zuordnungen erkennen und mit Dreisatz berechnen.",
      "steps": [
        "Prüfe, ob ein fester Wert je Einheit gilt.",
        "Berechne k = y : x für x ≠ 0; die Regel lautet y = kx.",
        "Nutze den Einheitswert für die gesuchte Menge und prüfe die Einheiten."
      ]
    },
    "F02": {
      "title": "Steigung und Achsenabschnitt",
      "idea": "In y = mx + b ist b der y-Wert bei x = 0. Die Steigung m beschreibt, wie stark y bei einem Schritt nach rechts steigt oder fällt.",
      "area": "Zuordnungen und lineare Funktionen",
      "competence": "Ich kann Steigung und y-Achsenabschnitt linearer Funktionen deuten.",
      "steps": [
        "Lies b ab und markiere (0|b).",
        "Lies m = Änderung von y : Änderung von x; beachte das Vorzeichen.",
        "Nutze das Steigungsdreieck für einen zweiten Punkt und prüfe durch Einsetzen."
      ]
    },
    "F03": {
      "title": "Gleichung, Tabelle und Graph",
      "idea": "Setze x-Werte ein und berechne die y-Werte. Die Paare bilden Punkte im Koordinatensystem. Bei einer linearen Funktion liegen sie auf einer Geraden.",
      "area": "Zuordnungen und lineare Funktionen",
      "competence": "Ich kann zwischen Funktionsgleichung, Wertetabelle und Graph wechseln.",
      "steps": [
        "Setze ausgewählte x-Werte in die Gleichung ein.",
        "Schreibe jedes Paar als (x|y), also Eingabe zuerst.",
        "Trage die Punkte ein; bei einer linearen Funktion zeichnest du die Gerade durch sie."
      ]
    },
    "F04": {
      "title": "Eine Gerade durch zwei Punkte",
      "idea": "Teile die Änderung der y-Werte durch die Änderung der x-Werte. Setze danach einen Punkt ein, um b zu bestimmen. Gleiche x-Werte erlauben so keine Funktion y = mx + b.",
      "area": "Zuordnungen und lineare Funktionen",
      "competence": "Ich kann eine Geradengleichung aus zwei Punkten bestimmen.",
      "steps": [
        "Berechne m = (y₂ − y₁) : (x₂ − x₁) in derselben Punktreihenfolge.",
        "Setze einen Punkt und m in y = mx + b ein und bestimme b.",
        "Prüfe die fertige Gleichung mit beiden Punkten."
      ]
    },
    "F05": {
      "title": "Nullstellen und Schnittpunkte",
      "idea": "An der Nullstelle ist y = 0. Am Schnittpunkt zweier Graphen sind ihre y-Werte bei demselben x gleich. Eine Stelle ist ein x-Wert, ein Punkt hat zwei Koordinaten.",
      "area": "Zuordnungen und lineare Funktionen",
      "competence": "Ich kann Nullstellen und Schnittpunkte linearer Graphen bestimmen.",
      "steps": [
        "Für eine Nullstelle setze y = 0; für den y-Achsenschnittpunkt setze x = 0.",
        "Für zwei Graphen setze die beiden Funktionsterme gleich und löse nach x.",
        "Berechne danach y und notiere den vollständigen Punkt (x|y)."
      ]
    },
    "F06": {
      "title": "Antiproportionale Zuordnungen",
      "idea": "Bei einer antiproportionalen Zuordnung bleibt das Produkt xy gleich. Verdoppelt sich x, halbiert sich y. In Sachaufgaben müssen die Bedingungen unverändert bleiben.",
      "area": "Zuordnungen und lineare Funktionen",
      "competence": "Ich kann antiproportionale Zuordnungen erkennen und berechnen.",
      "steps": [
        "Prüfe im Sachzusammenhang, ob eine feste Gesamtgröße verteilt wird.",
        "Berechne das konstante Produkt k = x · y.",
        "Bestimme den gesuchten Wert mit y = k : x; x darf nicht 0 sein."
      ]
    },
    "F07": {
      "title": "Zuordnungsarten unterscheiden",
      "idea": "Prüfe Quotient, Produkt oder Zuwachs. Ein konstanter Quotient kennzeichnet Proportionalität, ein konstantes Produkt Antiproportionalität; konstanter Zuwachs kennzeichnet Linearität.",
      "area": "Zuordnungen und lineare Funktionen",
      "competence": "Ich kann proportionale, antiproportionale und sonstige lineare Modelle unterscheiden.",
      "steps": [
        "Prüfe y : x: konstant → proportional, y = kx.",
        "Prüfe x · y: konstant → antiproportional, y = k/x.",
        "Prüfe den y-Zuwachs je gleich großem x-Schritt: konstant → linear. Ein Startwert ungleich 0 bedeutet „nicht proportional“."
      ]
    },
    "F08": {
      "title": "Lineare Modelle und ihre Grenzen",
      "idea": "Eine lineare Formel beschreibt konstanten Zuwachs. Grundwert, Einheit und erlaubte Eingaben gehören dazu. Eine Formel kann außerhalb der Situation unsinnige Werte liefern.",
      "area": "Zuordnungen und lineare Funktionen",
      "competence": "Ich kann lineare Modelle im Kontext nutzen und ihre Grenzen beschreiben.",
      "steps": [
        "Benenne Variable und Einheit; bestimme Startwert und Änderung je Einheit.",
        "Stelle y = mx + b auf und berechne die gefragten Werte.",
        "Begrenze den sinnvollen Bereich, zum Beispiel bis ein Behälter leer oder voll ist."
      ]
    },
    "F09": {
      "title": "Messdaten näherungsweise beschreiben",
      "idea": "Eine Ausgleichsgerade beschreibt den Verlauf streuender Messpunkte ungefähr. Sie muss nicht alle Punkte treffen. Vorhersagen weit außerhalb der Messspanne sind besonders unsicher.",
      "area": "Zuordnungen und lineare Funktionen",
      "competence": "Ich kann Messdaten durch eine Ausgleichsgerade näherungsweise beschreiben.",
      "steps": [
        "Vergleiche die Messpunkte mit einer vorgeschlagenen Geraden.",
        "Berechne Abweichungen als Messwert minus Modellwert.",
        "Unterscheide Schätzen innerhalb der Messspanne von der unsichereren Fortsetzung weit außerhalb."
      ]
    },
    "G01": {
      "title": "Figuren und Körper beschreiben",
      "idea": "Nutze genaue Eigenschaften: Endpunkte, Seiten, Winkel, Flächen und Kanten. Besondere Figuren erfüllen zusätzliche Bedingungen; ein Quadrat ist auch ein Rechteck.",
      "area": "Geometrie",
      "competence": "Ich kann geometrische Grundbegriffe und Eigenschaften von Figuren und Körpern verwenden.",
      "steps": [
        "Prüfe zuerst: Geht es um eine Linie, eine ebene Figur oder einen Körper?",
        "Nenne kennzeichnende Eigenschaften wie Endpunkte, rechte Winkel oder parallele Seiten.",
        "Achte auf Sonderfälle: Jedes Quadrat ist auch ein Rechteck, jeder Würfel auch ein Quader."
      ]
    },
    "G02": {
      "title": "Winkel messen und berechnen",
      "idea": "Winkel messen die Öffnung zweier Schenkel. Nebenwinkel ergeben 180°, Scheitelwinkel sind gleich. Im Dreieck ist die Innenwinkelsumme 180°.",
      "area": "Geometrie",
      "competence": "Ich kann Winkel messen, zeichnen und mit Winkelsätzen berechnen.",
      "steps": [
        "Beim Messen: Mittelpunkt des Geodreiecks auf den Scheitel, Nulllinie auf einen Schenkel; richtige Skala wählen.",
        "Nebenwinkel ergänzen sich zu 180°; Scheitelwinkel sind gleich groß.",
        "Im Dreieck beträgt die Innenwinkelsumme 180°. Markiere, welchen Satz du verwendest."
      ]
    },
    "G03": {
      "title": "Das Koordinatensystem",
      "idea": "Die x-Koordinate wird waagerecht, die y-Koordinate senkrecht gelesen. Rechts und oben sind positiv, links und unten negativ. Die Reihenfolge ist immer x vor y.",
      "area": "Geometrie",
      "competence": "Ich kann Punkte im Koordinatensystem eintragen und ablesen.",
      "steps": [
        "Lies die Skalierung: Wie viele Einheiten entspricht ein Kästchen?",
        "Gehe vom Ursprung zuerst in x-Richtung: positiv rechts, negativ links.",
        "Gehe dann in y-Richtung: positiv oben, negativ unten; beschrifte den Punkt."
      ]
    },
    "G04": {
      "title": "Spiegeln, Verschieben und Drehen",
      "idea": "Diese Abbildungen erhalten Längen und Winkel. Beim Spiegeln liegen Punkt und Bildpunkt gleich weit auf beiden Seiten der Achse; ihre Verbindung steht senkrecht zur Achse.",
      "area": "Geometrie",
      "competence": "Ich kann Symmetrien erkennen und Figuren spiegeln, verschieben und drehen.",
      "steps": [
        "Spiegeln: Achse angeben; Punkt und Bildpunkt liegen senkrecht dazu im gleichen Abstand.",
        "Verschieben: Alle Punkte gleich weit in dieselbe Richtung bewegen.",
        "Drehen: Zentrum, Winkel und Drehrichtung beachten; der Abstand zum Zentrum bleibt gleich."
      ]
    },
    "G05": {
      "title": "Kreis und besondere Ortslinien",
      "idea": "Eine Ortslinie enthält genau die Punkte mit einer bestimmten Eigenschaft. Kreise beschreiben einen festen Abstand; Mittelsenkrechten und Winkelhalbierende gleiche Abstände.",
      "area": "Geometrie",
      "competence": "Ich kann Kreise, Mittelsenkrechte und Winkelhalbierende als Ortslinien nutzen.",
      "steps": [
        "Genauer Abstand r zu einem Punkt M → Kreislinie mit Mittelpunkt M.",
        "Gleicher Abstand zu zwei Punkten → Mittelsenkrechte ihrer Verbindungsstrecke.",
        "Gleicher senkrechter Abstand zu den Winkelschenkeln im Winkelinneren → Winkelhalbierende."
      ]
    },
    "G06": {
      "title": "Dreiecke konstruieren",
      "idea": "SSS, SWS und WSW bestimmen ein Dreieck bis auf Kongruenz. Bei zwei Seiten und einem nicht eingeschlossenen Winkel ist Eindeutigkeit nur unter passenden Bedingungen gesichert.",
      "area": "Geometrie",
      "competence": "Ich kann Dreiecke mit Kongruenzsätzen konstruieren und die Eindeutigkeit prüfen.",
      "steps": [
        "Zeichne eine beschriftete Planfigur und ordne die gegebenen Seiten und Winkel zu.",
        "Prüfe den passenden Kongruenzsatz: SSS, SWS, WSW oder SsW mit dem Winkel gegenüber der längeren Seite.",
        "Konstruiere mit Lineal, Geodreieck und Zirkel; prüfe Maße und die Dreiecksungleichung."
      ]
    },
    "G07": {
      "title": "Besondere Linien im Dreieck",
      "idea": "Eine Höhe steht senkrecht auf einer Gegenseite. Eine Seitenhalbierende trifft deren Mittelpunkt. Eine Mittelsenkrechte halbiert die Seite senkrecht; eine Winkelhalbierende halbiert einen Winkel.",
      "area": "Geometrie",
      "competence": "Ich kann Höhen, Seitenhalbierende, Mittelsenkrechte und Winkelhalbierende unterscheiden.",
      "steps": [
        "Höhe: von einer Ecke senkrecht auf die gegenüberliegende Seitengerade.",
        "Seitenhalbierende: von einer Ecke zur Mitte der Gegenseite; Mittelsenkrechte: senkrecht durch eine Seitenmitte.",
        "Winkelhalbierende: durch den Scheitel und mit zwei gleich großen Teilwinkeln."
      ]
    },
    "G08": {
      "title": "Der Satz des Thales",
      "idea": "Liegt C auf dem Kreis über dem Durchmesser AB, dann ist der Winkel bei C rechtwinklig. C darf kein Endpunkt sein. Auch die Umkehrung gilt.",
      "area": "Geometrie",
      "competence": "Ich kann den Satz des Thales anwenden und begründen.",
      "steps": [
        "Prüfe zuerst, ob AB wirklich ein Durchmesser ist und durch den Mittelpunkt geht.",
        "Prüfe, ob C auf der Kreislinie und nicht an einem Endpunkt liegt.",
        "Markiere den rechten Winkel bei C. Umgekehrt liefert dieser Kreis alle möglichen rechten Dreiecke über AB."
      ]
    },
    "G09": {
      "title": "Netze und Schrägbilder",
      "idea": "Ein Netz zeigt die zusammenhängenden Flächen eines Körpers in der Ebene. Ein Schrägbild zeigt seine räumliche Form; Tiefenkanten können verkürzt gezeichnet sein.",
      "area": "Geometrie",
      "competence": "Ich kann Netze und Schrägbilder von Quadern und Prismen lesen und zeichnen.",
      "steps": [
        "Netz: Zähle alle Flächen und prüfe, ob passende Kanten beim Falten zusammentreffen.",
        "Schrägbild: Zeichne die Vorderfläche unverzerrt; beachte die angegebene Richtung und Verkürzung der Tiefenkanten.",
        "Zeichne verdeckte Kanten gestrichelt und verwende Maßangaben statt bloßes Abmessen."
      ]
    },
    "G10": {
      "title": "Geometrisch begründen",
      "idea": "Verknüpfe eine Angabe mit einer passenden Eigenschaft und ziehe daraus einen Schluss. Eine Zeichnung hilft beim Entdecken; sie ersetzt keine Begründung.",
      "area": "Geometrie",
      "competence": "Ich kann Dreieckskonstruktionen und Ortslinieneigenschaften begründen.",
      "steps": [
        "Notiere, was sicher gegeben oder konstruiert ist.",
        "Wähle einen Satz oder eine Eigenschaft, deren Voraussetzungen erfüllt sind.",
        "Formuliere eine Kette: „Weil …, gilt …; deshalb …“. Ein Gegenbeispiel widerlegt eine allgemeine Behauptung."
      ]
    },
    "M01": {
      "title": "Länge, Masse, Zeit und Geld",
      "idea": "Schreibe zuerst die Beziehung zwischen den Einheiten auf. Bei Zeit gelten andere Faktoren als im Dezimalsystem: Eine Stunde hat 60 Minuten.",
      "area": "Größen und Messen",
      "competence": "Ich kann Längen, Massen, Zeiten und Geldbeträge in passende Einheiten umrechnen.",
      "steps": [
        "Schreibe die Beziehung der Einheiten auf, zum Beispiel 1 m = 100 cm.",
        "Zur kleineren Einheit wird die Maßzahl größer; zur größeren Einheit kleiner.",
        "Gleiche vor dem Addieren die Einheiten an. Bei Zeit gilt 1 h = 60 min, nicht 100 min."
      ]
    },
    "M02": {
      "title": "Flächen- und Raumeinheiten",
      "idea": "Bei Flächen wirkt der Längenfaktor zweimal, bei Volumen dreimal. Ein Liter ist ein Kubikdezimeter; ein Milliliter ist ein Kubikzentimeter.",
      "area": "Größen und Messen",
      "competence": "Ich kann Flächen- und Volumeneinheiten sicher umrechnen.",
      "steps": [
        "Entscheide: Länge, Fläche oder Volumen?",
        "Bei 1 dm = 10 cm gilt 1 dm² = 100 cm² und 1 dm³ = 1000 cm³.",
        "Nutze für Füllmengen 1 dm³ = 1 l und 1 cm³ = 1 ml. Prüfe Richtung und Einheit."
      ]
    },
    "M03": {
      "title": "Umfang und Flächeninhalt",
      "idea": "Umfang ist die Länge des Randes; Flächeninhalt misst die bedeckte Ebene. Zusammengesetzte Flächen kannst du in Rechtecke zerlegen oder zu Rechtecken ergänzen.",
      "area": "Größen und Messen",
      "competence": "Ich kann Umfang und Flächeninhalt von Rechtecken und zusammengesetzten Figuren bestimmen.",
      "steps": [
        "Umfang: Gehe den vollständigen Rand ab und addiere alle Seitenlängen.",
        "Fläche eines Rechtecks: Länge mal Breite; zerlege andere Figuren oder ergänze und ziehe Ausschnitte ab.",
        "Gleiche Einheiten vorher an; Umfang erhält Längen-, Fläche Quadrateinheiten."
      ]
    },
    "M04": {
      "title": "Quader: Oberfläche und Volumen",
      "idea": "Das Volumen ist Grundfläche mal Höhe. Die Oberfläche setzt sich aus drei Paaren gleicher Rechtecke zusammen. Bei offenen Behältern fehlt eine Fläche.",
      "area": "Größen und Messen",
      "competence": "Ich kann Oberfläche und Volumen von Quadern bestimmen und die Formeln erklären.",
      "steps": [
        "Volumen: Multipliziere Länge, Breite und Höhe, V = abc.",
        "Geschlossene Oberfläche: Addiere die drei verschiedenen Rechteckflächen zweimal, O = 2(ab + ac + bc).",
        "Prüfe, ob eine Fläche fehlt, etwa der Deckel, und ob Innen- oder Außenmaße gemeint sind."
      ]
    },
    "M05": {
      "title": "Dreiecke und Vierecke messen",
      "idea": "Die Höhe steht senkrecht auf der Grundseite. Parallelogramm: Grundseite mal Höhe. Dreieck: davon die Hälfte. Trapez: mittlere parallele Seitenlänge mal Höhe.",
      "area": "Größen und Messen",
      "competence": "Ich kann Flächeninhalte von Dreiecken, Parallelogrammen und Trapezen berechnen und begründen.",
      "steps": [
        "Markiere Grundseite und zugehörige senkrechte Höhe.",
        "Nutze A = gh für das Parallelogramm und A = gh/2 für das Dreieck.",
        "Beim Trapez sind a und c die parallelen Seiten: A = (a + c)h/2."
      ]
    },
    "M06": {
      "title": "Gerade Prismen berechnen",
      "idea": "Jede Schicht eines Prismas hat denselben Flächeninhalt G. Der Mantel eines geraden Prismas hat den Inhalt u mal h; zwei Grundflächen kommen zur Oberfläche hinzu.",
      "area": "Größen und Messen",
      "competence": "Ich kann Oberfläche und Volumen gerader Prismen aus Grundfläche, Umfang und Höhe bestimmen.",
      "steps": [
        "Berechne Grundflächeninhalt G und Grundumfang u getrennt.",
        "Volumen: V = Gh mit der Körperhöhe h.",
        "Oberfläche beim geraden Prisma: O = 2G + uh. Verwechsle Körperhöhe und Höhe in der Grundfigur nicht."
      ]
    },
    "M07": {
      "title": "Mit Maßstäben rechnen",
      "idea": "Ein Maßstab vergleicht Zeichnung und Wirklichkeit in derselben Einheit. Beim Maßstab 1 : n ist jede gezeichnete Länge n-mal kleiner als die wirkliche.",
      "area": "Größen und Messen",
      "competence": "Ich kann Maßstäbe lesen und maßstäbliche Zeichnungen zur Größenbestimmung nutzen.",
      "steps": [
        "Bringe beide Längen in dieselbe Einheit.",
        "Bei 1 : n gilt: Wirklichkeit = Planlänge · n; Plan = wirkliche Länge : n.",
        "Bei Flächen wirkt der Längenfaktor zweimal. Ein vergrößerter Ausdruck kann den Maßstab verändern."
      ]
    },
    "M08": {
      "title": "Schätzen und Ergebnisse prüfen",
      "idea": "Nutze vertraute Vergleichsgrößen und einfache Modelle. Prüfe Zahl, Einheit und Größenordnung gemeinsam. Eine genaue Rechnung kann mit falschen Einheiten trotzdem falsch sein.",
      "area": "Größen und Messen",
      "competence": "Ich kann Größen schätzen und Ergebnisse mit Einheiten auf Plausibilität prüfen.",
      "steps": [
        "Wähle passende bekannte Vergleichsgrößen und nenne deine Annahmen.",
        "Rechne mit gerundeten, handlichen Werten.",
        "Prüfe die Größenordnung und die Einheit; behaupte nicht mehr Genauigkeit als die Angaben erlauben."
      ]
    },
    "S01": {
      "title": "Eine Datenerhebung planen",
      "idea": "Eine gute Frage ist eindeutig und neutral. Die Auswahl der Befragten muss zur Zielgruppe passen. Eine große, aber einseitige Auswahl kann Ergebnisse verzerren.",
      "area": "Daten",
      "competence": "Ich kann eine Datenerhebung planen und mögliche Verzerrungen erkennen.",
      "steps": [
        "Lege fest, über welche Gruppe du etwas wissen willst.",
        "Formuliere neutral und eindeutig, mit Zeitraum und Einheit.",
        "Wähle Personen so aus, dass nicht nur eine besondere Teilgruppe vertreten ist; dokumentiere Frage, Auswahl und Antwortzahl."
      ]
    },
    "S02": {
      "title": "Absolute und relative Häufigkeit",
      "idea": "Die absolute Häufigkeit h zählt die Fälle. Die relative Häufigkeit teilt h durch die Gesamtzahl N. Bei vollständigen, getrennten Kategorien ergeben alle Anteile zusammen 1.",
      "area": "Daten",
      "competence": "Ich kann absolute und relative Häufigkeiten bestimmen.",
      "steps": [
        "Bestimme Trefferzahl h und Gesamtzahl N.",
        "Berechne r = h : N; für Prozent multipliziere den Dezimalanteil mit 100 %.",
        "Prüfe den Bezugswert. Nur vollständige, nicht überlappende Kategorien ergeben zusammen 100 %."
      ]
    },
    "S03": {
      "title": "Diagramme lesen und prüfen",
      "idea": "Säulenhöhen zeigen Häufigkeiten auf einer gemeinsamen Skala. Im Kreisdiagramm steht der Vollwinkel für das Ganze. Beschriftungen und Skalen beeinflussen die Aussage.",
      "area": "Daten",
      "competence": "Ich kann Säulen- und Kreisdiagramme lesen und Darstellungen kritisch prüfen.",
      "steps": [
        "Lies Titel, Kategorien, Einheit, Gesamtzahl und Achsenskalierung.",
        "Säulen vergleichen Häufigkeiten; gleiche Zahlenabstände brauchen gleiche Zeichenabstände.",
        "Im Kreis entsprechen 360° dem Ganzen: Sektorwinkel = Anteil · 360°."
      ]
    },
    "S04": {
      "title": "Mittelwert, Modalwert und Spannweite",
      "idea": "Das arithmetische Mittel verteilt die Summe gleichmäßig. Der Modalwert kommt am häufigsten vor. Die Spannweite ist größter minus kleinster Wert; es kann mehrere Modalwerte geben.",
      "area": "Daten",
      "competence": "Ich kann arithmetisches Mittel, Modalwert und Spannweite berechnen und deuten.",
      "steps": [
        "Mittelwert: Addiere alle Werte, auch Wiederholungen, und teile durch ihre Anzahl.",
        "Modalwert: Suche den häufigsten Wert; mehrere Werte können gleich häufig sein.",
        "Spannweite: Größter Wert minus kleinster Wert."
      ]
    },
    "S05": {
      "title": "Was Kennwerte verschweigen",
      "idea": "Kennwerte fassen Daten zusammen und verlieren dabei Informationen. Verschiedene Verteilungen können denselben Mittelwert haben. Betrachte deshalb auch Streuung und Einzelwerte.",
      "area": "Daten",
      "competence": "Ich kann Datensätze darstellen und den Informationsverlust von Kennwerten erklären.",
      "steps": [
        "Vergleiche nicht nur das Mittel, sondern auch Anzahl, Einzelwerte und Spannweite.",
        "Prüfe eine allgemeine Behauptung mit einem passenden Gegenbeispiel.",
        "Beim Zusammenfassen von Gruppen gewichte die Mittelwerte mit den jeweiligen Gruppengrößen."
      ]
    },
    "W01": {
      "title": "Ergebnis und Ereignis",
      "idea": "Ein Ergebnis ist ein möglicher Ausgang eines Versuchs. Ein Ereignis ist eine Menge solcher Ergebnisse. Es kann unmöglich, sicher oder dazwischen liegen.",
      "area": "Wahrscheinlichkeit",
      "competence": "Ich kann Ergebnis, Ereignis und Wahrscheinlichkeit bei Zufallsversuchen unterscheiden.",
      "steps": [
        "Lege den Versuch und die möglichen Einzelergebnisse fest.",
        "Notiere alle Ergebnisse, die zur Ereignisbeschreibung passen.",
        "Bei mehreren Stufen beachte die Reihenfolge: Kopf–Zahl ist ein anderer Ablauf als Zahl–Kopf."
      ]
    },
    "W02": {
      "title": "Laplace und Gegenereignis",
      "idea": "Nur bei gleich wahrscheinlichen Einzelergebnissen kannst du günstige durch mögliche Fälle teilen. Ein Ereignis und sein Gegenereignis ergänzen sich zur Wahrscheinlichkeit 1.",
      "area": "Wahrscheinlichkeit",
      "competence": "Ich kann Laplace-Wahrscheinlichkeiten und Gegenereignisse berechnen.",
      "steps": [
        "Prüfe zuerst, ob die Einzelergebnisse gleich wahrscheinlich sind.",
        "Zähle passende und alle möglichen Ergebnisse: P(E) = günstig : möglich.",
        "Für „nicht E“ gilt P(nicht E) = 1 − P(E). Ereignis und Gegenereignis ergänzen sich vollständig."
      ]
    },
    "W03": {
      "title": "Wahrscheinlichkeit und Beobachtung",
      "idea": "Eine relative Häufigkeit beschreibt die bisherigen Versuche. Eine Wahrscheinlichkeit gehört zum Modell. Zufällige Schwankungen sind auch bei einem passenden Modell möglich.",
      "area": "Wahrscheinlichkeit",
      "competence": "Ich kann relative Häufigkeit von Wahrscheinlichkeit unterscheiden.",
      "steps": [
        "Berechne die beobachtete relative Häufigkeit als Trefferzahl : Versuchszahl.",
        "Nenne davon getrennt die angenommene Modellwahrscheinlichkeit.",
        "Bei unabhängigen Versuchen erzwingen vergangene Ergebnisse keinen Ausgleich beim nächsten Versuch."
      ]
    },
    "W04": {
      "title": "Baumdiagramme aufbauen",
      "idea": "Jede Stufe beschreibt einen Zug, jeder Zweig ein mögliches Ergebnis. Von jedem Knoten aus ergeben die Zweigwahrscheinlichkeiten zusammen 1. Ohne Zurücklegen verändert sich die Urne.",
      "area": "Wahrscheinlichkeit",
      "competence": "Ich kann mehrstufige Versuche mit und ohne Zurücklegen im Baumdiagramm darstellen.",
      "steps": [
        "Zeichne für jede Stufe alle möglichen nächsten Ausgänge.",
        "Bestimme an jedem Knoten die aktuellen Anzahlen; ohne Zurücklegen fehlt die gezogene Kugel.",
        "Prüfe: Die Wahrscheinlichkeiten aller ausgehenden Zweige eines Knotens ergeben 1."
      ]
    },
    "W05": {
      "title": "Pfadregel und Summenregel",
      "idea": "Multipliziere die Zweigwahrscheinlichkeiten entlang eines vollständigen Pfades. Besteht ein Ereignis aus mehreren verschiedenen vollständigen Pfaden, addiere ihre Wahrscheinlichkeiten.",
      "area": "Wahrscheinlichkeit",
      "competence": "Ich kann Pfad- und Summenregel für Ereignisse anwenden.",
      "steps": [
        "Markiere alle vollständigen Pfade, die genau zur Frage passen.",
        "Multipliziere entlang jedes dieser Pfade die aktuellen Zweigwahrscheinlichkeiten.",
        "Addiere die Ergebnisse verschiedener passender Pfade ohne Doppelzählung; bei „mindestens einmal“ hilft oft das Gegenereignis."
      ]
    },
    "W06": {
      "title": "Zufall simulieren",
      "idea": "Die Zuordnung von Zufallszahlen muss die gewünschten Chancen abbilden. Dokumentiere Regel, Versuchszahl und Ergebnisse. Eine Simulation ist ein Modell und liefert zufällige Schwankungen.",
      "area": "Wahrscheinlichkeit",
      "competence": "Ich kann Zufallsversuche durchführen oder simulieren und Ergebnisse kritisch auswerten.",
      "steps": [
        "Wähle eine passende Zufallsquelle mit bekannten Chancen.",
        "Lege die Zuordnung und Anzahl der Versuche vor Beginn fest.",
        "Protokolliere alle Ergebnisse und vergleiche die relative Häufigkeit mit der Modellchance, ohne die Regel nachträglich anzupassen."
      ]
    }
  },
  "schedule": {
    "start": "2026-09-14",
    "weekday": "Montag",
    "confirmed_completed_through": 1,
    "confirmed_on": "2026-09-14",
    "rule": "Jeder Montag außerhalb der niedersächsischen Schulferien und gesetzlichen Feiertage.",
    "sources": [
      "https://www.mk.niedersachsen.de/download/190060",
      "https://www.mi.niedersachsen.de/startseite/themen/allgemeine_angelegenheiten_des_inneren/feiertagsrecht/feiertagsgesetz-61491.html"
    ],
    "holiday_ranges": [
      [
        "2026-10-12",
        "2026-10-24"
      ],
      [
        "2026-12-23",
        "2027-01-09"
      ],
      [
        "2027-02-01",
        "2027-02-02"
      ],
      [
        "2027-03-22",
        "2027-04-03"
      ],
      [
        "2027-05-07",
        "2027-05-07"
      ],
      [
        "2027-05-18",
        "2027-05-18"
      ],
      [
        "2027-07-08",
        "2027-08-18"
      ],
      [
        "2027-10-16",
        "2027-10-30"
      ]
    ],
    "public_holidays": [
      "2026-10-03",
      "2026-10-31",
      "2026-12-25",
      "2026-12-26",
      "2027-01-01",
      "2027-03-26",
      "2027-03-29",
      "2027-05-01",
      "2027-05-06",
      "2027-05-17",
      "2027-10-03",
      "2027-10-31"
    ]
  },
  "tests": [
    {
      "number": 1,
      "date": "2026-09-14",
      "graded": false,
      "minutes": 5,
      "new_topics": [
        "N01",
        "T01",
        "E01"
      ],
      "review_topics": [],
      "assessment_scope": [
        "N01",
        "T01",
        "E01"
      ]
    },
    {
      "number": 2,
      "date": "2026-09-21",
      "graded": false,
      "minutes": 5,
      "new_topics": [
        "N02",
        "T02",
        "R01"
      ],
      "review_topics": [
        "N01",
        "T01"
      ],
      "assessment_scope": [
        "N01",
        "N02",
        "R01",
        "T01",
        "T02"
      ]
    },
    {
      "number": 3,
      "date": "2026-09-28",
      "graded": false,
      "minutes": 5,
      "new_topics": [
        "N03",
        "N04",
        "T03"
      ],
      "review_topics": [
        "E01",
        "N01"
      ],
      "assessment_scope": [
        "N01",
        "N03",
        "N04",
        "T03",
        "E01"
      ]
    },
    {
      "number": 4,
      "date": "2026-10-05",
      "graded": true,
      "minutes": 10,
      "new_topics": [
        "E02",
        "R02"
      ],
      "review_topics": [
        "N02",
        "R01",
        "T01",
        "T02",
        "N01",
        "N03",
        "N04",
        "T03"
      ],
      "assessment_scope": [
        "N01",
        "N02",
        "N03",
        "N04",
        "R01",
        "R02",
        "T01",
        "T02",
        "T03",
        "E01",
        "E02"
      ]
    },
    {
      "number": 5,
      "date": "2026-10-26",
      "graded": false,
      "minutes": 5,
      "new_topics": [
        "B01",
        "D01",
        "G01"
      ],
      "review_topics": [
        "E01",
        "N01"
      ],
      "assessment_scope": [
        "N01",
        "B01",
        "D01",
        "E01",
        "G01"
      ]
    },
    {
      "number": 6,
      "date": "2026-11-02",
      "graded": false,
      "minutes": 5,
      "new_topics": [
        "B02",
        "D02",
        "M01"
      ],
      "review_topics": [
        "N02",
        "N03"
      ],
      "assessment_scope": [
        "N02",
        "N03",
        "B02",
        "D02",
        "M01"
      ]
    },
    {
      "number": 7,
      "date": "2026-11-09",
      "graded": false,
      "minutes": 5,
      "new_topics": [
        "B03",
        "B04",
        "S01"
      ],
      "review_topics": [
        "N04",
        "R01"
      ],
      "assessment_scope": [
        "N04",
        "B03",
        "B04",
        "R01",
        "S01"
      ]
    },
    {
      "number": 8,
      "date": "2026-11-16",
      "graded": true,
      "minutes": 10,
      "new_topics": [
        "B05",
        "B06",
        "F00"
      ],
      "review_topics": [
        "R02",
        "T01",
        "T02",
        "T03",
        "E02",
        "N01",
        "B01"
      ],
      "assessment_scope": [
        "N01",
        "N02",
        "N03",
        "N04",
        "B01",
        "B02",
        "B03",
        "B04",
        "B05",
        "B06",
        "D01",
        "D02",
        "R01",
        "R02",
        "T01",
        "T02",
        "T03",
        "E01",
        "E02",
        "F00",
        "G01",
        "M01",
        "S01"
      ]
    },
    {
      "number": 9,
      "date": "2026-11-23",
      "graded": false,
      "minutes": 5,
      "new_topics": [
        "B07",
        "R03"
      ],
      "review_topics": [
        "D01",
        "E01",
        "G01"
      ],
      "assessment_scope": [
        "B07",
        "D01",
        "R03",
        "E01",
        "G01"
      ]
    },
    {
      "number": 10,
      "date": "2026-11-30",
      "graded": false,
      "minutes": 5,
      "new_topics": [
        "B08",
        "D03"
      ],
      "review_topics": [
        "N02",
        "N03",
        "B02"
      ],
      "assessment_scope": [
        "N02",
        "N03",
        "B02",
        "B08",
        "D03"
      ]
    },
    {
      "number": 11,
      "date": "2026-12-07",
      "graded": false,
      "minutes": 5,
      "new_topics": [
        "F01",
        "P01"
      ],
      "review_topics": [
        "D02",
        "M01",
        "N04"
      ],
      "assessment_scope": [
        "N04",
        "D02",
        "P01",
        "F01",
        "M01"
      ]
    },
    {
      "number": 12,
      "date": "2026-12-14",
      "graded": true,
      "minutes": 10,
      "new_topics": [
        "E03",
        "P02"
      ],
      "review_topics": [
        "B03",
        "B04",
        "R01",
        "S01",
        "N01",
        "B01",
        "B05",
        "B06"
      ],
      "assessment_scope": [
        "N01",
        "N02",
        "N03",
        "N04",
        "B01",
        "B02",
        "B03",
        "B04",
        "B05",
        "B06",
        "B07",
        "B08",
        "D01",
        "D02",
        "D03",
        "R01",
        "R02",
        "R03",
        "P01",
        "P02",
        "T01",
        "T02",
        "T03",
        "E01",
        "E02",
        "E03",
        "F00",
        "F01",
        "G01",
        "M01",
        "S01"
      ]
    },
    {
      "number": 13,
      "date": "2026-12-21",
      "graded": false,
      "minutes": 5,
      "new_topics": [
        "T04",
        "N05"
      ],
      "review_topics": [
        "R02",
        "T01",
        "T02"
      ],
      "assessment_scope": [
        "N05",
        "R02",
        "T01",
        "T02",
        "T04"
      ]
    },
    {
      "number": 14,
      "date": "2027-01-11",
      "graded": false,
      "minutes": 5,
      "new_topics": [
        "T05",
        "G02"
      ],
      "review_topics": [
        "T03",
        "E02",
        "F00"
      ],
      "assessment_scope": [
        "T03",
        "T05",
        "E02",
        "F00",
        "G02"
      ]
    },
    {
      "number": 15,
      "date": "2027-01-18",
      "graded": false,
      "minutes": 5,
      "new_topics": [
        "T06",
        "P03"
      ],
      "review_topics": [
        "B07",
        "D01",
        "R03"
      ],
      "assessment_scope": [
        "B07",
        "D01",
        "R03",
        "P03",
        "T06"
      ]
    },
    {
      "number": 16,
      "date": "2027-01-25",
      "graded": true,
      "minutes": 10,
      "new_topics": [
        "T07",
        "E04"
      ],
      "review_topics": [
        "E01",
        "G01",
        "N02",
        "N03",
        "B02",
        "B08",
        "D03",
        "N04"
      ],
      "assessment_scope": [
        "N01",
        "N02",
        "N03",
        "N04",
        "N05",
        "B01",
        "B02",
        "B03",
        "B04",
        "B05",
        "B06",
        "B07",
        "B08",
        "D01",
        "D02",
        "D03",
        "R01",
        "R02",
        "R03",
        "P01",
        "P02",
        "P03",
        "T01",
        "T02",
        "T03",
        "T04",
        "T05",
        "T06",
        "T07",
        "E01",
        "E02",
        "E03",
        "E04",
        "F00",
        "F01",
        "G01",
        "G02",
        "M01",
        "S01"
      ]
    },
    {
      "number": 17,
      "date": "2027-02-08",
      "graded": false,
      "minutes": 5,
      "new_topics": [
        "E05",
        "P04"
      ],
      "review_topics": [
        "D02",
        "P01",
        "F01"
      ],
      "assessment_scope": [
        "D02",
        "P01",
        "P04",
        "E05",
        "F01"
      ]
    },
    {
      "number": 18,
      "date": "2027-02-15",
      "graded": false,
      "minutes": 5,
      "new_topics": [
        "R04",
        "G03"
      ],
      "review_topics": [
        "M01",
        "N01",
        "B01"
      ],
      "assessment_scope": [
        "N01",
        "B01",
        "R04",
        "G03",
        "M01"
      ]
    },
    {
      "number": 19,
      "date": "2027-02-22",
      "graded": false,
      "minutes": 5,
      "new_topics": [
        "R05",
        "F02"
      ],
      "review_topics": [
        "B03",
        "B04",
        "B05"
      ],
      "assessment_scope": [
        "B03",
        "B04",
        "B05",
        "R05",
        "F02"
      ]
    },
    {
      "number": 20,
      "date": "2027-03-01",
      "graded": true,
      "minutes": 10,
      "new_topics": [
        "F03",
        "M02"
      ],
      "review_topics": [
        "B06",
        "R01",
        "P02",
        "E03",
        "S01",
        "N05",
        "R02",
        "T01"
      ],
      "assessment_scope": [
        "N01",
        "N02",
        "N03",
        "N04",
        "N05",
        "B01",
        "B02",
        "B03",
        "B04",
        "B05",
        "B06",
        "B07",
        "B08",
        "D01",
        "D02",
        "D03",
        "R01",
        "R02",
        "R03",
        "R04",
        "R05",
        "P01",
        "P02",
        "P03",
        "P04",
        "T01",
        "T02",
        "T03",
        "T04",
        "T05",
        "T06",
        "T07",
        "E01",
        "E02",
        "E03",
        "E04",
        "E05",
        "F00",
        "F01",
        "F02",
        "F03",
        "G01",
        "G02",
        "G03",
        "M01",
        "M02",
        "S01"
      ]
    },
    {
      "number": 21,
      "date": "2027-03-08",
      "graded": false,
      "minutes": 5,
      "new_topics": [
        "F04",
        "S02"
      ],
      "review_topics": [
        "T02",
        "T04",
        "T03"
      ],
      "assessment_scope": [
        "T02",
        "T03",
        "T04",
        "F04",
        "S02"
      ]
    },
    {
      "number": 22,
      "date": "2027-03-15",
      "graded": false,
      "minutes": 5,
      "new_topics": [
        "E06",
        "W01"
      ],
      "review_topics": [
        "T05",
        "E02",
        "F00"
      ],
      "assessment_scope": [
        "T05",
        "E02",
        "E06",
        "F00",
        "W01"
      ]
    },
    {
      "number": 23,
      "date": "2027-04-05",
      "graded": false,
      "minutes": 5,
      "new_topics": [
        "E07",
        "G04"
      ],
      "review_topics": [
        "G02",
        "B07",
        "D01"
      ],
      "assessment_scope": [
        "B07",
        "D01",
        "E07",
        "G02",
        "G04"
      ]
    },
    {
      "number": 24,
      "date": "2027-04-12",
      "graded": true,
      "minutes": 10,
      "new_topics": [
        "E08",
        "F05"
      ],
      "review_topics": [
        "R03",
        "P03",
        "T06",
        "N02",
        "N03",
        "N04",
        "B02",
        "B08"
      ],
      "assessment_scope": [
        "N01",
        "N02",
        "N03",
        "N04",
        "N05",
        "B01",
        "B02",
        "B03",
        "B04",
        "B05",
        "B06",
        "B07",
        "B08",
        "D01",
        "D02",
        "D03",
        "R01",
        "R02",
        "R03",
        "R04",
        "R05",
        "P01",
        "P02",
        "P03",
        "P04",
        "T01",
        "T02",
        "T03",
        "T04",
        "T05",
        "T06",
        "T07",
        "E01",
        "E02",
        "E03",
        "E04",
        "E05",
        "E06",
        "E07",
        "E08",
        "F00",
        "F01",
        "F02",
        "F03",
        "F04",
        "F05",
        "G01",
        "G02",
        "G03",
        "G04",
        "M01",
        "M02",
        "S01",
        "S02",
        "W01"
      ]
    },
    {
      "number": 25,
      "date": "2027-04-19",
      "graded": false,
      "minutes": 5,
      "new_topics": [
        "F06",
        "S03"
      ],
      "review_topics": [
        "D03",
        "T07",
        "E01"
      ],
      "assessment_scope": [
        "D03",
        "T07",
        "E01",
        "F06",
        "S03"
      ]
    },
    {
      "number": 26,
      "date": "2027-04-26",
      "graded": false,
      "minutes": 5,
      "new_topics": [
        "F07",
        "S04"
      ],
      "review_topics": [
        "E04",
        "G01",
        "D02"
      ],
      "assessment_scope": [
        "D02",
        "E04",
        "F07",
        "G01",
        "S04"
      ]
    },
    {
      "number": 27,
      "date": "2027-05-03",
      "graded": false,
      "minutes": 5,
      "new_topics": [
        "F08",
        "S05"
      ],
      "review_topics": [
        "P01",
        "P04",
        "E05"
      ],
      "assessment_scope": [
        "P01",
        "P04",
        "E05",
        "F08",
        "S05"
      ]
    },
    {
      "number": 28,
      "date": "2027-05-10",
      "graded": true,
      "minutes": 10,
      "new_topics": [
        "F09",
        "G05"
      ],
      "review_topics": [
        "F01",
        "N01",
        "B01",
        "R04",
        "G03",
        "M01",
        "B03",
        "B04"
      ],
      "assessment_scope": [
        "N01",
        "N02",
        "N03",
        "N04",
        "N05",
        "B01",
        "B02",
        "B03",
        "B04",
        "B05",
        "B06",
        "B07",
        "B08",
        "D01",
        "D02",
        "D03",
        "R01",
        "R02",
        "R03",
        "R04",
        "R05",
        "P01",
        "P02",
        "P03",
        "P04",
        "T01",
        "T02",
        "T03",
        "T04",
        "T05",
        "T06",
        "T07",
        "E01",
        "E02",
        "E03",
        "E04",
        "E05",
        "E06",
        "E07",
        "E08",
        "F00",
        "F01",
        "F02",
        "F03",
        "F04",
        "F05",
        "F06",
        "F07",
        "F08",
        "F09",
        "G01",
        "G02",
        "G03",
        "G04",
        "G05",
        "M01",
        "M02",
        "S01",
        "S02",
        "S03",
        "S04",
        "S05",
        "W01"
      ]
    },
    {
      "number": 29,
      "date": "2027-05-24",
      "graded": false,
      "minutes": 5,
      "new_topics": [
        "G06",
        "G07"
      ],
      "review_topics": [
        "B05",
        "R05",
        "F02"
      ],
      "assessment_scope": [
        "B05",
        "R05",
        "F02",
        "G06",
        "G07"
      ]
    },
    {
      "number": 30,
      "date": "2027-05-31",
      "graded": false,
      "minutes": 5,
      "new_topics": [
        "G08",
        "G09"
      ],
      "review_topics": [
        "N05",
        "B06",
        "R01"
      ],
      "assessment_scope": [
        "N05",
        "B06",
        "R01",
        "G08",
        "G09"
      ]
    },
    {
      "number": 31,
      "date": "2027-06-07",
      "graded": false,
      "minutes": 5,
      "new_topics": [
        "G10",
        "M03"
      ],
      "review_topics": [
        "R02",
        "P02",
        "T01"
      ],
      "assessment_scope": [
        "R02",
        "P02",
        "T01",
        "G10",
        "M03"
      ]
    },
    {
      "number": 32,
      "date": "2027-06-14",
      "graded": true,
      "minutes": 10,
      "new_topics": [
        "M04",
        "M05"
      ],
      "review_topics": [
        "E03",
        "F03",
        "M02",
        "S01",
        "T02",
        "T03",
        "T04",
        "F04"
      ],
      "assessment_scope": [
        "N01",
        "N02",
        "N03",
        "N04",
        "N05",
        "B01",
        "B02",
        "B03",
        "B04",
        "B05",
        "B06",
        "B07",
        "B08",
        "D01",
        "D02",
        "D03",
        "R01",
        "R02",
        "R03",
        "R04",
        "R05",
        "P01",
        "P02",
        "P03",
        "P04",
        "T01",
        "T02",
        "T03",
        "T04",
        "T05",
        "T06",
        "T07",
        "E01",
        "E02",
        "E03",
        "E04",
        "E05",
        "E06",
        "E07",
        "E08",
        "F00",
        "F01",
        "F02",
        "F03",
        "F04",
        "F05",
        "F06",
        "F07",
        "F08",
        "F09",
        "G01",
        "G02",
        "G03",
        "G04",
        "G05",
        "G06",
        "G07",
        "G08",
        "G09",
        "G10",
        "M01",
        "M02",
        "M03",
        "M04",
        "M05",
        "S01",
        "S02",
        "S03",
        "S04",
        "S05",
        "W01"
      ]
    },
    {
      "number": 33,
      "date": "2027-06-21",
      "graded": false,
      "minutes": 5,
      "new_topics": [
        "M06",
        "M07"
      ],
      "review_topics": [
        "S02",
        "T05",
        "E02"
      ],
      "assessment_scope": [
        "T05",
        "E02",
        "M06",
        "M07",
        "S02"
      ]
    },
    {
      "number": 34,
      "date": "2027-06-28",
      "graded": false,
      "minutes": 5,
      "new_topics": [
        "M08",
        "W02"
      ],
      "review_topics": [
        "E06",
        "F00",
        "W01"
      ],
      "assessment_scope": [
        "E06",
        "F00",
        "M08",
        "W01",
        "W02"
      ]
    },
    {
      "number": 35,
      "date": "2027-07-05",
      "graded": false,
      "minutes": 5,
      "new_topics": [
        "W03",
        "W04"
      ],
      "review_topics": [
        "B07",
        "D01",
        "E07"
      ],
      "assessment_scope": [
        "B07",
        "D01",
        "E07",
        "W03",
        "W04"
      ]
    },
    {
      "number": 36,
      "date": "2027-08-23",
      "graded": true,
      "minutes": 10,
      "new_topics": [
        "W05",
        "W06"
      ],
      "review_topics": [
        "G02",
        "G04",
        "N02",
        "N03",
        "N04",
        "B02",
        "B08",
        "R03"
      ],
      "assessment_scope": [
        "N01",
        "N02",
        "N03",
        "N04",
        "N05",
        "B01",
        "B02",
        "B03",
        "B04",
        "B05",
        "B06",
        "B07",
        "B08",
        "D01",
        "D02",
        "D03",
        "R01",
        "R02",
        "R03",
        "R04",
        "R05",
        "P01",
        "P02",
        "P03",
        "P04",
        "T01",
        "T02",
        "T03",
        "T04",
        "T05",
        "T06",
        "T07",
        "E01",
        "E02",
        "E03",
        "E04",
        "E05",
        "E06",
        "E07",
        "E08",
        "F00",
        "F01",
        "F02",
        "F03",
        "F04",
        "F05",
        "F06",
        "F07",
        "F08",
        "F09",
        "G01",
        "G02",
        "G03",
        "G04",
        "G05",
        "G06",
        "G07",
        "G08",
        "G09",
        "G10",
        "M01",
        "M02",
        "M03",
        "M04",
        "M05",
        "M06",
        "M07",
        "M08",
        "S01",
        "S02",
        "S03",
        "S04",
        "S05",
        "W01",
        "W02",
        "W03",
        "W04",
        "W05",
        "W06"
      ]
    }
  ]
};
