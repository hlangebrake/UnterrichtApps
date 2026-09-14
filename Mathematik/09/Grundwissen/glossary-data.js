// Fachbegriffe aus dem Material, mit redaktionell geprüften Beispielen.
const TERM_GLOSSARY = [
  {
    "term": "Stellenwert",
    "aliases": [
      "Stellenwerte",
      "Stellenwerten"
    ],
    "definition": "Der Wert einer Ziffer hängt davon ab, an welcher Stelle sie in einer Zahl steht.",
    "example": "In $352$ bedeutet die $5$ fünf Zehner, also $50$.",
    "topic": "N01"
  },
  {
    "term": "Ziffer",
    "aliases": [
      "Ziffern"
    ],
    "definition": "Ein einzelnes Zeichen, mit dem wir Zahlen schreiben. Im Dezimalsystem sind es die Zeichen 0 bis 9.",
    "example": "Die Zahl $202$ besteht aus drei Ziffern; die Ziffer $2$ kommt zweimal vor.",
    "topic": "N01"
  },
  {
    "term": "Zahl",
    "aliases": [
      "Zahlen"
    ],
    "definition": "Eine Zahl kann zum Beispiel eine Anzahl, eine Größe oder eine Position beschreiben. Ihre Schreibweise kann aus mehreren Ziffern bestehen.",
    "example": "$12$ ist eine Zahl aus den beiden Ziffern $1$ und $2$.",
    "topic": "N01"
  },
  {
    "term": "Runden",
    "aliases": [
      "Rundung",
      "Rundungen",
      "gerundet",
      "abrunden",
      "aufrunden"
    ],
    "definition": "Eine Zahl durch einen nahe gelegenen Wert mit der gewünschten Genauigkeit ersetzen. Die nächste Stelle entscheidet: 0 bis 4 ab, 5 bis 9 auf.",
    "example": "Auf Zehner gerundet gilt: $347\\approx350$.",
    "topic": "N01"
  },
  {
    "term": "Näherungszeichen",
    "aliases": [
      "Näherungswert",
      "Näherungswerte"
    ],
    "definition": "Das Zeichen ≈ bedeutet ungefähr gleich. Es zeigt, dass ein Wert nur näherungsweise angegeben wird.",
    "example": "$\\frac13\\approx0{,}33$, aber $\\frac13$ ist nicht genau $0{,}33$.",
    "topic": "N01"
  },
  {
    "term": "natürliche Zahl",
    "aliases": [
      "natürlichen Zahlen",
      "natürliche Zahlen",
      "natürlichen Zahl"
    ],
    "definition": "Eine Zahl zum Zählen: 1, 2, 3 und so weiter. Je nach Vereinbarung gehört auch die 0 dazu.",
    "example": "$7$ ist eine natürliche Zahl; $\\frac12$ ist keine.",
    "topic": "N02"
  },
  {
    "term": "Addition",
    "aliases": [
      "addieren",
      "addiert",
      "addierst",
      "Additionsterm"
    ],
    "definition": "Die Rechenart des Zusammenzählens. Ihr Rechenzeichen ist +.",
    "example": "$4+3=7$.",
    "topic": "N02"
  },
  {
    "term": "Subtraktion",
    "aliases": [
      "subtrahieren",
      "subtrahiert",
      "subtrahierst"
    ],
    "definition": "Die Rechenart des Abziehens. Ihr Rechenzeichen ist −.",
    "example": "$9-4=5$.",
    "topic": "N02"
  },
  {
    "term": "Multiplikation",
    "aliases": [
      "multiplizieren",
      "multipliziert",
      "multiplizierst"
    ],
    "definition": "Die Rechenart des Malnehmens. Ihr Rechenzeichen ist zum Beispiel ein Mittelpunkt.",
    "example": "$3\\cdot4=12$.",
    "topic": "N02"
  },
  {
    "term": "Division",
    "aliases": [
      "dividieren",
      "dividiert",
      "dividierst"
    ],
    "definition": "Die Rechenart des Teilens. Durch 0 darf man nicht teilen.",
    "example": "$12:3=4$.",
    "topic": "N02"
  },
  {
    "term": "Summand",
    "aliases": [
      "Summanden"
    ],
    "definition": "Eine Zahl oder ein Term, die beziehungsweise der in einer Summe addiert wird.",
    "example": "In $3+5=8$ sind $3$ und $5$ die Summanden.",
    "topic": "N02"
  },
  {
    "term": "Summe",
    "aliases": [
      "Summen"
    ],
    "definition": "Eine Addition von Summanden oder das Ergebnis dieser Addition.",
    "example": "$3+5$ ist eine Summe. Ihr Wert ist $8$.",
    "topic": "N02"
  },
  {
    "term": "Differenz",
    "aliases": [
      "Differenzen"
    ],
    "definition": "Eine Subtraktion zweier Zahlen oder Terme oder das Ergebnis dieser Subtraktion. Die Reihenfolge ist wichtig.",
    "example": "Die Differenz $9-4$ hat den Wert $5$.",
    "topic": "N02"
  },
  {
    "term": "Minuend",
    "aliases": [
      "Minuenden"
    ],
    "definition": "Die Zahl oder der Term, von der beziehungsweise dem etwas abgezogen wird.",
    "example": "In $9-4=5$ ist $9$ der Minuend.",
    "topic": "N02"
  },
  {
    "term": "Subtrahend",
    "aliases": [
      "Subtrahenden"
    ],
    "definition": "Die Zahl oder der Term, die beziehungsweise der abgezogen wird.",
    "example": "In $9-4=5$ ist $4$ der Subtrahend.",
    "topic": "N02"
  },
  {
    "term": "Faktor",
    "aliases": [
      "Faktoren"
    ],
    "definition": "Eine Zahl oder ein Term, die beziehungsweise der in einem Produkt mit anderen multipliziert wird.",
    "example": "In $3\\cdot5=15$ sind $3$ und $5$ die Faktoren.",
    "topic": "N02"
  },
  {
    "term": "Produkt",
    "aliases": [
      "Produkte",
      "Produkten"
    ],
    "definition": "Eine Multiplikation von zwei oder mehr Faktoren oder das Ergebnis dieser Multiplikation.",
    "example": "$3\\cdot5$ ist ein Produkt. Sein Wert ist $15$.",
    "topic": "N02"
  },
  {
    "term": "Dividend",
    "aliases": [
      "Dividenden"
    ],
    "definition": "Die Zahl oder der Term, die beziehungsweise der geteilt wird.",
    "example": "In $12:3=4$ ist $12$ der Dividend.",
    "topic": "N02"
  },
  {
    "term": "Divisor",
    "aliases": [
      "Divisoren"
    ],
    "definition": "Die Zahl oder der Term, durch die beziehungsweise den geteilt wird. Der Divisor darf nicht 0 sein.",
    "example": "In $12:3=4$ ist $3$ der Divisor.",
    "topic": "N02"
  },
  {
    "term": "Quotient",
    "aliases": [
      "Quotienten"
    ],
    "definition": "Eine Division zweier Zahlen oder Terme oder das Ergebnis dieser Division. Der Divisor darf nicht 0 sein.",
    "example": "Der Quotient $12:3$ hat den Wert $4$.",
    "topic": "N02"
  },
  {
    "term": "Übertrag",
    "aliases": [
      "Überträge",
      "Überträgen"
    ],
    "definition": "Beim schriftlichen Rechnen wird ein Bündel aus einer Stelle in die nächstgrößere Stelle übernommen.",
    "example": "Bei $8+7=15$ bleiben $5$ Einer; $1$ Zehner wird als Übertrag weitergegeben.",
    "topic": "N02"
  },
  {
    "term": "Umkehroperation",
    "aliases": [
      "Umkehroperationen",
      "Umkehrrechnung",
      "Umkehraufgabe",
      "Umkehraufgaben"
    ],
    "definition": "Eine Rechnung, die eine andere rückgängig macht: Addition und Subtraktion gehören zusammen, ebenso Multiplikation und Division durch eine Zahl ungleich 0.",
    "example": "Zu $4\\cdot3=12$ gehört die Umkehrrechnung $12:3=4$.",
    "topic": "N02"
  },
  {
    "term": "Teiler",
    "aliases": [
      "Teilern"
    ],
    "definition": "Eine ganze Zahl teilt eine andere ganze Zahl ohne Rest. Als Teiler betrachten wir hier positive Zahlen.",
    "example": "$3$ ist ein Teiler von $12$, denn $12:3=4$.",
    "topic": "N03"
  },
  {
    "term": "gemeinsamer Teiler",
    "aliases": [
      "gemeinsame Teiler",
      "gemeinsamen Teiler",
      "gemeinsamen Teilern"
    ],
    "definition": "Eine positive ganze Zahl, durch die sich mehrere Zahlen ohne Rest teilen lassen.",
    "example": "$3$ ist ein gemeinsamer Teiler von $12$ und $18$.",
    "topic": "N03"
  },
  {
    "term": "Vielfaches",
    "aliases": [
      "Vielfache",
      "Vielfachen"
    ],
    "definition": "Eine Zahl, die durch Multiplizieren mit einer ganzen Zahl entsteht.",
    "example": "$6$, $12$ und $18$ sind positive Vielfache von $6$.",
    "topic": "N03"
  },
  {
    "term": "Primzahl",
    "aliases": [
      "Primzahlen"
    ],
    "definition": "Eine natürliche Zahl größer als 1, die genau zwei positive Teiler hat: 1 und sich selbst.",
    "example": "$7$ ist eine Primzahl. $1$ ist keine Primzahl.",
    "topic": "N03"
  },
  {
    "term": "Primfaktor",
    "aliases": [
      "Primfaktoren",
      "Primfaktorzerlegung"
    ],
    "definition": "Ein Faktor, der eine Primzahl ist. Bei einer Primfaktorzerlegung schreibt man eine natürliche Zahl größer als 1 als Produkt von Primzahlen.",
    "example": "$12=2\\cdot2\\cdot3$. Die Primfaktoren sind $2$ und $3$.",
    "topic": "N03"
  },
  {
    "term": "ggT",
    "aliases": [
      "größter gemeinsamer Teiler",
      "größten gemeinsamen Teiler"
    ],
    "definition": "Der größte gemeinsame Teiler ist die größte positive ganze Zahl, die alle betrachteten Zahlen ohne Rest teilt.",
    "example": "Der ggT von $12$ und $18$ ist $6$.",
    "topic": "N03"
  },
  {
    "term": "kgV",
    "aliases": [
      "kleinstes gemeinsames Vielfaches",
      "kleinsten gemeinsamen Vielfachen"
    ],
    "definition": "Das kleinste gemeinsame Vielfache ist das kleinste positive Vielfache, das die betrachteten positiven ganzen Zahlen gemeinsam haben.",
    "example": "Das kgV von $4$ und $6$ ist $12$.",
    "topic": "N03"
  },
  {
    "term": "Klammer",
    "aliases": [
      "Klammern",
      "Klammerausdruck"
    ],
    "definition": "Klammern fassen einen Rechenausdruck zusammen. Der Ausdruck in ihnen wird als Einheit behandelt.",
    "example": "Bei $2\\cdot(3+4)$ wird zuerst $3+4$ berechnet.",
    "topic": "N04"
  },
  {
    "term": "Punktrechnung",
    "aliases": [
      "Punktrechnungen",
      "Punkt vor Strich"
    ],
    "definition": "Multiplikation und Division heißen Punktrechnungen. Ohne andere Klammerung werden sie vor Addition und Subtraktion berechnet.",
    "example": "$2+3\\cdot4=2+12=14$.",
    "topic": "N04"
  },
  {
    "term": "Strichrechnung",
    "aliases": [
      "Strichrechnungen"
    ],
    "definition": "Addition und Subtraktion heißen Strichrechnungen.",
    "example": "In $8-2+1=7$ werden die gleichrangigen Strichrechnungen von links nach rechts ausgeführt.",
    "topic": "N04"
  },
  {
    "term": "gleichrangig",
    "aliases": [
      "gleichrangige",
      "gleichrangigen"
    ],
    "definition": "Rechenarten derselben Vorrangstufe sind gleichrangig. Ohne Klammern rechnet man sie von links nach rechts.",
    "example": "Multiplikation und Division sind gleichrangig: $12:3\\cdot2=8$.",
    "topic": "N04"
  },
  {
    "term": "Kommutativgesetz",
    "aliases": [
      "Vertauschungsgesetz"
    ],
    "definition": "Bei Addition und Multiplikation dürfen die Zahlen oder Terme vertauscht werden.",
    "example": "$3+5=5+3$ und $3\\cdot5=5\\cdot3$.",
    "topic": "N05"
  },
  {
    "term": "Assoziativgesetz",
    "aliases": [
      "Verbindungsgesetz"
    ],
    "definition": "Bei einer reinen Summe oder einem reinen Produkt darf die Klammerung verändert werden.",
    "example": "$(2+3)+7=2+(3+7)$.",
    "topic": "N05"
  },
  {
    "term": "Distributivgesetz",
    "aliases": [
      "Verteilungsgesetz"
    ],
    "definition": "Ein Faktor vor einer Summe wird mit jedem Summanden multipliziert. Das funktioniert auch rückwärts beim Ausklammern.",
    "example": "$3(x+2)=3x+6$.",
    "topic": "T03"
  },
  {
    "term": "Überschlag",
    "aliases": [
      "Überschlagsrechnung",
      "überschlagen"
    ],
    "definition": "Eine bewusst vereinfachte Rechnung mit nahe gelegenen Zahlen, um die Größe des Ergebnisses zu prüfen.",
    "example": "$19\\cdot51$ liegt ungefähr bei $20\\cdot50=1000$.",
    "topic": "N05"
  },
  {
    "term": "Bruch",
    "aliases": [
      "Brüche",
      "Brüchen"
    ],
    "definition": "Eine Schreibweise für eine Division. Der Zähler steht über, der Nenner unter dem Bruchstrich. Der Nenner darf nicht 0 sein.",
    "example": "$\\frac34$ bedeutet $3:4$ oder drei von vier gleich großen Teilen eines Ganzen.",
    "topic": "B01"
  },
  {
    "term": "Zähler",
    "aliases": [
      "Zählern"
    ],
    "definition": "Die Zahl oder der Term über dem Bruchstrich. Bei Anteilen zählt er die betrachteten gleich großen Teile.",
    "example": "In $\\frac35$ ist $3$ der Zähler.",
    "topic": "B01"
  },
  {
    "term": "Nenner",
    "aliases": [
      "Nennern"
    ],
    "definition": "Die Zahl oder der Term unter dem Bruchstrich. Bei Anteilen gibt er an, in wie viele gleiche Teile das Ganze geteilt ist. Er darf nicht 0 sein.",
    "example": "In $\\frac35$ ist $5$ der Nenner.",
    "topic": "B01"
  },
  {
    "term": "Anteil",
    "aliases": [
      "Anteile",
      "Anteilen"
    ],
    "definition": "Ein Teil einer festgelegten Gesamtmenge oder Größe. Ohne das zugehörige Ganze ist ein Anteil nicht eindeutig.",
    "example": "$3$ von $12$ Kindern sind $\\frac3{12}=\\frac14$ der Gruppe.",
    "topic": "B01"
  },
  {
    "term": "Bezugsgröße",
    "aliases": [
      "Bezugsgrößen",
      "Bezugswert"
    ],
    "definition": "Die Gesamtgröße, auf die sich ein Anteil oder ein Vergleich bezieht.",
    "example": "Bei $3$ von $12$ Kindern ist die Bezugsgröße die Gruppe mit $12$ Kindern.",
    "topic": "B08"
  },
  {
    "term": "Verhältnis",
    "aliases": [
      "Verhältnisse",
      "Verhältnissen"
    ],
    "definition": "Ein Vergleich zweier Größen durch Division. Die Reihenfolge der beiden Größen ist wichtig.",
    "example": "$2$ rote und $3$ blaue Kugeln stehen im Verhältnis $2:3$.",
    "topic": "B01"
  },
  {
    "term": "Erweitern",
    "aliases": [
      "erweitert",
      "erweiterst",
      "Erweiterungszahl"
    ],
    "definition": "Zähler und Nenner eines Bruchs mit derselben Zahl ungleich 0 multiplizieren. Der Wert des Bruchs bleibt gleich.",
    "example": "$\\frac23=\\frac{2\\cdot4}{3\\cdot4}=\\frac8{12}$.",
    "topic": "B02"
  },
  {
    "term": "Kürzen",
    "aliases": [
      "gekürzt",
      "kürzt",
      "Kürzungszahl"
    ],
    "definition": "Zähler und Nenner eines Bruchs durch denselben gemeinsamen Faktor ungleich 0 teilen. Einzelne Summanden darf man nicht einfach wegkürzen.",
    "example": "$\\frac6{15}=\\frac{6:3}{15:3}=\\frac25$.",
    "topic": "B02"
  },
  {
    "term": "gleichwertig",
    "aliases": [
      "gleichwertige",
      "gleichwertigen",
      "äquivalent",
      "äquivalente",
      "äquivalenten"
    ],
    "definition": "Mathematische Ausdrücke sind gleichwertig, wenn sie bei denselben zulässigen Eingaben denselben Wert haben.",
    "example": "$\\frac12$ und $\\frac24$ sind gleichwertig. Ebenso $2(x+1)$ und $2x+2$.",
    "topic": "T07"
  },
  {
    "term": "gleichnamig",
    "aliases": [
      "gleichnamige",
      "gleichnamigen",
      "gleichnamigen Brüchen"
    ],
    "definition": "Brüche mit demselben Nenner heißen gleichnamig. Ihre Teile sind gleich groß.",
    "example": "$\\frac25$ und $\\frac35$ sind gleichnamig.",
    "topic": "B03"
  },
  {
    "term": "gemeinsamer Nenner",
    "aliases": [
      "gemeinsamen Nenner",
      "gemeinsame Nenner"
    ],
    "definition": "Ein Nenner, auf den mehrere Brüche durch Erweitern gebracht werden können.",
    "example": "Für $\\frac12$ und $\\frac13$ ist $6$ ein gemeinsamer Nenner: $\\frac36$ und $\\frac26$.",
    "topic": "B04"
  },
  {
    "term": "Hauptnenner",
    "aliases": [
      "Hauptnennern"
    ],
    "definition": "Bei Brüchen mit positiven ganzen Nennern ist der Hauptnenner ihr kleinstes gemeinsames Vielfaches.",
    "example": "Für $\\frac16$ und $\\frac14$ ist der Hauptnenner $12$.",
    "topic": "E03"
  },
  {
    "term": "gemischte Zahl",
    "aliases": [
      "gemischten Zahl",
      "gemischte Zahlen",
      "gemischten Zahlen"
    ],
    "definition": "Die Schreibweise einer Zahl als Summe aus einer ganzen Zahl und einem echten Bruch.",
    "example": "$2\\frac13$ bedeutet $2+\\frac13=\\frac73$.",
    "topic": "B03"
  },
  {
    "term": "unechter Bruch",
    "aliases": [
      "unechte Brüche",
      "unechten Bruch",
      "unechten Brüchen"
    ],
    "definition": "Ein Bruch mit nichtnegativem Zähler und positivem Nenner, dessen Zähler mindestens so groß ist wie sein Nenner.",
    "example": "$\\frac74$ ist ein unechter Bruch und entspricht $1\\frac34$.",
    "topic": "B03"
  },
  {
    "term": "echter Bruch",
    "aliases": [
      "echte Brüche",
      "echten Bruch",
      "echten Brüchen"
    ],
    "definition": "Ein Bruch mit nichtnegativem Zähler und positivem Nenner, dessen Zähler kleiner ist als sein Nenner.",
    "example": "$\\frac34$ ist ein echter Bruch und kleiner als $1$.",
    "topic": "B03"
  },
  {
    "term": "Kehrwert",
    "aliases": [
      "Kehrwerte",
      "Kehrwerts"
    ],
    "definition": "Der Kehrwert einer Zahl ungleich 0 ergibt mit ihr multipliziert 1. Bei einem Bruch werden Zähler und Nenner vertauscht.",
    "example": "Der Kehrwert von $\\frac35$ ist $\\frac53$, denn $\\frac35\\cdot\\frac53=1$.",
    "topic": "B07"
  },
  {
    "term": "Dezimalzahl",
    "aliases": [
      "Dezimalzahlen",
      "Dezimalbruch",
      "Dezimalbrüche",
      "Dezimaldarstellung"
    ],
    "definition": "Eine Zahl in Stellenwertschreibweise zur Basis 10; rechts vom Komma stehen Zehntel, Hundertstel und weitere kleinere Stellen.",
    "example": "$2{,}35=2+\\frac3{10}+\\frac5{100}$.",
    "topic": "D01"
  },
  {
    "term": "Zehntel",
    "aliases": [
      "Zehnteln"
    ],
    "definition": "Einer von zehn gleich großen Teilen eines Ganzen.",
    "example": "$\\frac1{10}=0{,}1$.",
    "topic": "D01"
  },
  {
    "term": "Hundertstel",
    "aliases": [
      "Hundertsteln"
    ],
    "definition": "Einer von hundert gleich großen Teilen eines Ganzen.",
    "example": "$\\frac1{100}=0{,}01=1\\,\\%$.",
    "topic": "D01"
  },
  {
    "term": "endlicher Dezimalbruch",
    "aliases": [
      "endliche Dezimalzahl",
      "endliche Dezimalbrüche",
      "endlichen Dezimalbruch"
    ],
    "definition": "Eine Dezimalschreibweise, die nach endlich vielen Nachkommastellen endet.",
    "example": "$\\frac38=0{,}375$ ist ein endlicher Dezimalbruch.",
    "topic": "D03"
  },
  {
    "term": "periodischer Dezimalbruch",
    "aliases": [
      "periodische Dezimalzahl",
      "periodische Dezimalbrüche",
      "periodischen Dezimalbruch",
      "periodisch"
    ],
    "definition": "Eine Dezimalschreibweise, in der sich ab einer Stelle ein Ziffernblock ohne Ende wiederholt.",
    "example": "$\\frac13=0{,}\\overline3=0{,}333\\ldots$.",
    "topic": "D03"
  },
  {
    "term": "Periode",
    "aliases": [
      "Perioden"
    ],
    "definition": "Der Ziffernblock, der sich bei einer periodischen Dezimalzahl immer wiederholt.",
    "example": "Bei $0{,}\\overline{27}=0{,}272727\\ldots$ ist $27$ die Periode.",
    "topic": "D03"
  },
  {
    "term": "rationale Zahl",
    "aliases": [
      "rationale Zahlen",
      "rationalen Zahlen",
      "rationalen Zahl"
    ],
    "definition": "Eine Zahl, die als Bruch zweier ganzer Zahlen mit Nenner ungleich 0 geschrieben werden kann.",
    "example": "$-0{,}5=-\\frac12$ und $3=\\frac31$ sind rationale Zahlen.",
    "topic": "R01"
  },
  {
    "term": "ganze Zahl",
    "aliases": [
      "ganze Zahlen",
      "ganzen Zahlen",
      "ganzen Zahl"
    ],
    "definition": "Eine Zahl ohne Bruchteil: die positiven Zählzahlen, ihre negativen Gegenzahlen und die 0.",
    "example": "$-3$, $0$ und $7$ sind ganze Zahlen; $0{,}5$ ist keine.",
    "topic": "R01"
  },
  {
    "term": "Gegenzahl",
    "aliases": [
      "Gegenzahlen"
    ],
    "definition": "Eine Zahl und ihre Gegenzahl ergeben zusammen 0. Auf der Zahlengeraden haben sie denselben Abstand von 0 und liegen für Zahlen ungleich 0 auf gegenüberliegenden Seiten. 0 ist ihre eigene Gegenzahl.",
    "example": "Die Gegenzahl von $-4$ ist $4$.",
    "topic": "R01"
  },
  {
    "term": "Betrag",
    "aliases": [
      "Beträge",
      "Beträgen",
      "Absolutbetrag"
    ],
    "definition": "Der Abstand einer Zahl von 0 auf der Zahlengeraden. Ein Betrag ist nie negativ.",
    "example": "$|-4|=4$ und $|4|=4$.",
    "topic": "R01"
  },
  {
    "term": "Zahlengerade",
    "aliases": [
      "Zahlengeraden",
      "Zahlenstrahl"
    ],
    "definition": "Eine Linie, auf der Zahlen nach ihrer Größe und mit gleichmäßigen Abständen angeordnet sind. Ein Zahlenstrahl beginnt an einem Anfangspunkt.",
    "example": "$-2$ liegt auf der Zahlengeraden links von $0$; $3$ liegt rechts davon.",
    "topic": "R01"
  },
  {
    "term": "Vorzeichen",
    "aliases": [
      "Vorzeichenregel",
      "Vorzeichenregeln"
    ],
    "definition": "Ein Plus- oder Minuszeichen unmittelbar bei einer Zahl gibt an, ob sie positiv oder negativ ist.",
    "example": "In $5+(-3)$ ist das Minus das Vorzeichen von $-3$, das Plus ein Rechenzeichen.",
    "topic": "R02"
  },
  {
    "term": "Rechenzeichen",
    "aliases": [],
    "definition": "Ein Zeichen, das angibt, welche Rechnung ausgeführt werden soll, etwa +, −, · oder :.",
    "example": "In $7-2$ bedeutet das Rechenzeichen $-$: Ziehe $2$ von $7$ ab.",
    "topic": "R02"
  },
  {
    "term": "Potenz",
    "aliases": [
      "Potenzen",
      "Potenzschreibweise"
    ],
    "definition": "Ein Ausdruck aus Basis und Exponent. Bei positivem ganzem Exponenten ist er eine Kurzschreibweise für das wiederholte Multiplizieren derselben Basis.",
    "example": "$2^3=2\\cdot2\\cdot2=8$.",
    "topic": "R04"
  },
  {
    "term": "Basis",
    "aliases": [
      "Basen"
    ],
    "definition": "Bei einer Potenz ist die Basis die Zahl oder der Ausdruck, die beziehungsweise der potenziert wird.",
    "example": "In $(-3)^2$ ist $-3$ die Basis. Das Ergebnis ist $9$.",
    "topic": "R04"
  },
  {
    "term": "Exponent",
    "aliases": [
      "Exponenten",
      "Hochzahl",
      "Hochzahlen"
    ],
    "definition": "Die hochgestellte Zahl einer Potenz. Bei positivem ganzem Exponenten gibt sie die Anzahl gleicher Faktoren an.",
    "example": "In $5^3$ ist $3$ der Exponent: $5\\cdot5\\cdot5$.",
    "topic": "R04"
  },
  {
    "term": "Quadrieren",
    "aliases": [
      "quadriert",
      "quadrierst",
      "Quadratzahl",
      "Quadratzahlen",
      "quadrieren",
      "Quadriert",
      "quadrierten"
    ],
    "definition": "Eine Zahl oder einen Term mit sich selbst multiplizieren, also die zweite Potenz bilden.",
    "example": "$5^2=5\\cdot5=25$.",
    "topic": "R04"
  },
  {
    "term": "Prozent",
    "aliases": [
      "Prozentangabe",
      "Prozentangaben"
    ],
    "definition": "Prozent bedeutet von hundert. Mit Prozentangaben beschreibt man Anteile bezogen auf ein Ganzes.",
    "example": "$25\\,\\%=\\frac{25}{100}=\\frac14$.",
    "topic": "P01"
  },
  {
    "term": "Grundwert",
    "aliases": [
      "Grundwerte",
      "Grundwerts"
    ],
    "definition": "Das Ganze, auf das sich eine Prozentangabe bezieht. Es entspricht 100 Prozent.",
    "example": "Bei $20\\,\\%$ von $50$ Euro ist $50$ Euro der Grundwert.",
    "topic": "P02"
  },
  {
    "term": "Prozentwert",
    "aliases": [
      "Prozentwerte",
      "Prozentwerts"
    ],
    "definition": "Die Größe des betrachteten Anteils am Grundwert, mit derselben Einheit wie der Grundwert.",
    "example": "$20\\,\\%$ von $50$ Euro sind $10$ Euro. Das ist der Prozentwert.",
    "topic": "P02"
  },
  {
    "term": "Prozentsatz",
    "aliases": [
      "Prozentsätze",
      "Prozentsatzes"
    ],
    "definition": "Der Anteil am Grundwert, ausgedrückt in Prozent.",
    "example": "$10$ von $50$ Euro sind $20\\,\\%$. Der Prozentsatz beträgt $20\\,\\%$.",
    "topic": "P02"
  },
  {
    "term": "Prozentpunkt",
    "aliases": [
      "Prozentpunkte",
      "Prozentpunkten"
    ],
    "definition": "Die Einheit für den absoluten Unterschied zweier Prozentangaben.",
    "example": "Von $20\\,\\%$ auf $30\\,\\%$ sind es $10$ Prozentpunkte; relativ sind es $50\\,\\%$ mehr.",
    "topic": "P02"
  },
  {
    "term": "Änderungsfaktor",
    "aliases": [
      "Änderungsfaktoren",
      "Wachstumsfaktor"
    ],
    "definition": "Die Zahl, mit der ein Anfangswert multipliziert wird, um den geänderten Wert zu erhalten.",
    "example": "Bei einer Erhöhung um $20\\,\\%$ ist der Faktor $1{,}2$: $50\\cdot1{,}2=60$.",
    "topic": "P03"
  },
  {
    "term": "Rabatt",
    "aliases": [
      "Rabatte"
    ],
    "definition": "Ein Preisnachlass. Ein prozentualer Rabatt bezieht sich auf den vorherigen Preis.",
    "example": "$10\\,\\%$ Rabatt auf $80$ Euro sind $8$ Euro Nachlass; es bleiben $72$ Euro.",
    "topic": "P03"
  },
  {
    "term": "Kapital",
    "aliases": [
      "Anfangskapital"
    ],
    "definition": "Der Geldbetrag, auf den Zinsen berechnet werden.",
    "example": "Bei $200$ Euro Kapital und $3\\,\\%$ Jahreszins entstehen in einem Jahr $6$ Euro Zinsen.",
    "topic": "P04"
  },
  {
    "term": "Zinsen",
    "aliases": [
      "Zins",
      "Jahreszinsen"
    ],
    "definition": "Ein Geldbetrag für das Überlassen von Kapital, zum Beispiel der Ertrag einer Geldanlage.",
    "example": "Bei $100$ Euro und $2\\,\\%$ Jahreszins erhält man für ein Jahr $2$ Euro Zinsen.",
    "topic": "P04"
  },
  {
    "term": "Zinssatz",
    "aliases": [
      "Zinssätze",
      "Jahreszinssatz"
    ],
    "definition": "Die Zinsen als Prozentsatz des Kapitals für einen festgelegten Zeitraum, meist ein Jahr.",
    "example": "$3\\,\\%$ pro Jahr bedeutet $3$ Euro Jahreszinsen je $100$ Euro Kapital.",
    "topic": "P04"
  },
  {
    "term": "p.a.",
    "aliases": [
      "p. a."
    ],
    "definition": "Die Abkürzung für per annum bedeutet pro Jahr.",
    "example": "$2\\,\\%$ p.a. bezeichnet einen Zinssatz von $2\\,\\%$ pro Jahr.",
    "topic": "P04"
  },
  {
    "term": "Term",
    "aliases": [
      "Terme",
      "Termen",
      "Rechenausdruck",
      "Rechenausdrücke",
      "Rechenplan"
    ],
    "definition": "Ein mathematischer Ausdruck aus Zahlen, Variablen und Rechenzeichen. Auch eine einzelne Zahl oder Variable ist ein Term. Er kann als Anleitung zum Rechnen verstanden werden.",
    "example": "$2(x+3)$ sagt: Addiere $3$ zu deiner eingesetzten Zahl und verdopple das Ergebnis.",
    "topic": "T01"
  },
  {
    "term": "Variable",
    "aliases": [
      "Variablen"
    ],
    "definition": "Ein Zeichen als Platzhalter für eine Zahl. Die Zahl kann sich ändern oder in einer Aufgabe gesucht sein.",
    "example": "In $3x+2$ ist $x$ die Variable. Für $x=4$ ergibt sich $14$.",
    "topic": "T01"
  },
  {
    "term": "Koeffizient",
    "aliases": [
      "Koeffizienten",
      "Zahlenfaktor"
    ],
    "definition": "Ein Zahlenfaktor vor einem Variablenteil.",
    "example": "In $-4x$ ist $-4$ der Koeffizient; in $x$ ist er $1$.",
    "topic": "T02"
  },
  {
    "term": "Konstante",
    "aliases": [
      "Konstanten",
      "konstant",
      "konstante",
      "konstanten"
    ],
    "definition": "Eine Größe oder Zahl, deren Wert im betrachteten Zusammenhang fest bleibt.",
    "example": "In $3x+2$ ist $2$ das konstante Glied: Es ändert sich beim Einsetzen anderer Werte für $x$ nicht.",
    "topic": "T01"
  },
  {
    "term": "Termwert",
    "aliases": [
      "Termwerte",
      "Termwerts"
    ],
    "definition": "Der Zahlenwert, den ein Term nach dem Einsetzen zulässiger Werte und dem Ausrechnen erhält.",
    "example": "Für $x=3$ hat $2x+1$ den Termwert $7$.",
    "topic": "T01"
  },
  {
    "term": "Variablenteil",
    "aliases": [
      "Variablenteile",
      "Variablenteilen"
    ],
    "definition": "Der Teil eines Produktterms, der aus Variablen und ihren Potenzen besteht, ohne den Zahlenfaktor.",
    "example": "In $4x^2y$ ist $x^2y$ der Variablenteil.",
    "topic": "T02"
  },
  {
    "term": "gleichartige Terme",
    "aliases": [
      "gleichartigen Terme",
      "gleichartigen Termen",
      "gleichartig",
      "gleichartige",
      "gleichartigen"
    ],
    "definition": "Terme mit demselben Variablenteil einschließlich aller Exponenten. Ihre Koeffizienten können zusammengefasst werden.",
    "example": "$3x+2x=5x$. Dagegen sind $x$ und $x^2$ nicht gleichartig.",
    "topic": "T02"
  },
  {
    "term": "Zusammenfassen",
    "aliases": [
      "zusammengefasst",
      "zusammenfasst"
    ],
    "definition": "Gleichartige Summanden durch Addieren oder Subtrahieren ihrer Koeffizienten zu einem Term verbinden.",
    "example": "$4x+3-2x+5=2x+8$.",
    "topic": "T02"
  },
  {
    "term": "Ausmultiplizieren",
    "aliases": [
      "ausmultipliziert",
      "ausmultiplizierst",
      "ausmultiplizieren",
      "Ausmultipliziert",
      "ausmultiplizierten"
    ],
    "definition": "Ein Produkt mit einer Summe mithilfe des Distributivgesetzes in eine Summe umwandeln.",
    "example": "$2(x+3)=2x+6$.",
    "topic": "T03"
  },
  {
    "term": "Minusklammer",
    "aliases": [
      "Minusklammern"
    ],
    "definition": "Eine Klammer, vor der ein Minuszeichen steht. Beim Auflösen werden die Vorzeichen aller Summanden in der Klammer umgekehrt.",
    "example": "$-(x-3)=-x+3$.",
    "topic": "T03"
  },
  {
    "term": "Ausklammern",
    "aliases": [
      "ausgeklammert",
      "ausklammerst"
    ],
    "definition": "Einen gemeinsamen Faktor aller Summanden vor eine Klammer ziehen. Die Summe wird so als Produkt geschrieben.",
    "example": "$6x+9=3(2x+3)$.",
    "topic": "T04"
  },
  {
    "term": "Faktorisieren",
    "aliases": [
      "faktorisiert",
      "Faktorisierung"
    ],
    "definition": "Einen Ausdruck als Produkt von Faktoren schreiben.",
    "example": "$x^2-9=(x-3)(x+3)$.",
    "topic": "T06"
  },
  {
    "term": "Teilprodukt",
    "aliases": [
      "Teilprodukte",
      "Teilprodukten"
    ],
    "definition": "Eines der Produkte, die beim Ausmultiplizieren entstehen und anschließend addiert werden.",
    "example": "Bei $(x+2)(x+3)$ entstehen die Teilprodukte $x^2$, $3x$, $2x$ und $6$.",
    "topic": "T05"
  },
  {
    "term": "binomische Formel",
    "aliases": [
      "binomischen Formel",
      "binomische Formeln",
      "binomischen Formeln"
    ],
    "definition": "Eine Rechenregel für Quadrate von Summen oder Differenzen und für das Produkt aus ihrer Summe und Differenz.",
    "example": "$(x+3)^2=x^2+6x+9$.",
    "topic": "T06"
  },
  {
    "term": "doppeltes Produkt",
    "aliases": [
      "doppelten Produkt"
    ],
    "definition": "Das Zweifache eines Produkts. Es entsteht bei einer binomischen Formel aus zwei gleichen gemischten Teilprodukten.",
    "example": "In $(a+b)^2=a^2+2ab+b^2$ ist $2ab$ das doppelte Produkt.",
    "topic": "T06"
  },
  {
    "term": "Quadratdifferenz",
    "aliases": [
      "Quadratdifferenzen"
    ],
    "definition": "Eine Differenz zweier Quadrate. Sie lässt sich als Produkt aus Summe und Differenz der Grundterme schreiben.",
    "example": "$x^2-4=(x+2)(x-2)$.",
    "topic": "T06"
  },
  {
    "term": "Definitionsbereich",
    "aliases": [
      "Definitionsmenge",
      "Definitionsbereiche"
    ],
    "definition": "Die Menge aller Werte, die für eine Variable im betrachteten Zusammenhang eingesetzt werden dürfen.",
    "example": "Bei $\\frac1x$ ist $x=0$ ausgeschlossen.",
    "topic": "T07"
  },
  {
    "term": "Gleichung",
    "aliases": [
      "Gleichungen"
    ],
    "definition": "Eine Aussage, dass zwei Terme gleich groß sind. Die Terme stehen links und rechts eines Gleichheitszeichens.",
    "example": "$2x+1=7$ ist für $x=3$ wahr.",
    "topic": "E01"
  },
  {
    "term": "Lösung",
    "aliases": [
      "Lösungen"
    ],
    "definition": "Ein zulässiger Wert, der eine Gleichung beim Einsetzen wahr macht; bei einer Aufgabe das gesuchte, die Bedingungen erfüllende Ergebnis.",
    "example": "$x=3$ ist die Lösung von $2x+1=7$.",
    "topic": "E01"
  },
  {
    "term": "Probe",
    "aliases": [
      "Proben",
      "Einsetzprobe"
    ],
    "definition": "Eine Kontrolle, ob ein gefundenes Ergebnis wirklich zur ursprünglichen Aufgabe passt.",
    "example": "Für $x=3$ in $2x+1=7$ ergibt die Probe $2\\cdot3+1=7$.",
    "topic": "E01"
  },
  {
    "term": "Äquivalenzumformung",
    "aliases": [
      "Äquivalenzumformungen"
    ],
    "definition": "Eine Umformung einer Gleichung, die genau dieselben Lösungen erhält. Dazu gehört das Addieren derselben Zahl auf beiden Seiten.",
    "example": "$x+3=8\\iff x=5$: Auf beiden Seiten wird $3$ subtrahiert.",
    "topic": "E02"
  },
  {
    "term": "Lösungsmenge",
    "aliases": [
      "Lösungsmengen"
    ],
    "definition": "Die Menge aller zulässigen Werte, die eine Gleichung oder ein Gleichungssystem erfüllen.",
    "example": "Für $x+2=5$ gilt $L=\\{3\\}$.",
    "topic": "E02"
  },
  {
    "term": "lineare Gleichung",
    "aliases": [
      "linearen Gleichung",
      "lineare Gleichungen",
      "linearen Gleichungen"
    ],
    "definition": "Eine Gleichung, in der die Variablen nach dem Vereinfachen nur in erster Potenz und nicht miteinander multipliziert auftreten.",
    "example": "$3x+2=11$ ist linear; $x^2=9$ ist nicht linear.",
    "topic": "E02"
  },
  {
    "term": "Formel",
    "aliases": [
      "Formeln"
    ],
    "definition": "Eine mathematische Beziehung zwischen Größen, meist als Gleichung aufgeschrieben.",
    "example": "$A=a\\cdot b$ beschreibt den Flächeninhalt eines Rechtecks.",
    "topic": "E04"
  },
  {
    "term": "Freistellen",
    "aliases": [
      "freigestellt",
      "Umstellen",
      "umgestellt"
    ],
    "definition": "Eine Gleichung so umformen, dass die gesuchte Variable allein auf einer Seite steht.",
    "example": "Aus $U=4a$ wird $a=\\frac U4$.",
    "topic": "E04"
  },
  {
    "term": "Sachprobe",
    "aliases": [
      "Sachproben"
    ],
    "definition": "Prüfen, ob eine rechnerische Lösung auch in der beschriebenen Situation sinnvoll und möglich ist.",
    "example": "Eine Lösung von $2{,}5$ Kindern passt nicht zu einer Aufgabe über die Anzahl von Kindern.",
    "topic": "E05"
  },
  {
    "term": "Gleichungssystem",
    "aliases": [
      "Gleichungssysteme",
      "Gleichungssystemen",
      "LGS"
    ],
    "definition": "Mehrere Gleichungen, die für dieselben Variablen gleichzeitig erfüllt sein sollen.",
    "example": "$x+y=5$ und $x-y=1$ haben gemeinsam die Lösung $x=3$, $y=2$.",
    "topic": "E06"
  },
  {
    "term": "Lösungspaar",
    "aliases": [
      "Lösungspaare",
      "Lösungspaaren"
    ],
    "definition": "Zwei zusammengehörige Werte für zwei Variablen, die alle Gleichungen eines Systems gleichzeitig erfüllen.",
    "example": "$(3;2)$ löst $x+y=5$ und $x-y=1$.",
    "topic": "E07"
  },
  {
    "term": "Einsetzungsverfahren",
    "aliases": [],
    "definition": "Eine Gleichung nach einer Variablen auflösen und den erhaltenen Ausdruck in die andere Gleichung einsetzen.",
    "example": "Aus $y=x+1$ und $x+y=5$ wird $x+(x+1)=5$.",
    "topic": "E07"
  },
  {
    "term": "Gleichsetzungsverfahren",
    "aliases": [
      "Gleichsetzen",
      "gleichgesetzt"
    ],
    "definition": "Zwei Ausdrücke für dieselbe Größe einander gleichsetzen, um ein Gleichungssystem zu lösen.",
    "example": "Aus $y=2x$ und $y=x+3$ wird $2x=x+3$.",
    "topic": "E07"
  },
  {
    "term": "Widerspruch",
    "aliases": [
      "Widersprüche"
    ],
    "definition": "Eine Aussage, die nicht wahr sein kann. Entsteht beim äquivalenten Umformen einer Gleichung ein Widerspruch, hat sie keine Lösung.",
    "example": "$x+1=x+2$ führt zu $1=2$: Es gibt keine Lösung.",
    "topic": "E08"
  },
  {
    "term": "identisch",
    "aliases": [
      "identische",
      "identischen"
    ],
    "definition": "Genau übereinstimmend. Identische Geraden bestehen aus denselben Punkten.",
    "example": "$y=2x+1$ und $2y=4x+2$ beschreiben dieselbe Gerade.",
    "topic": "E08"
  },
  {
    "term": "Zuordnung",
    "aliases": [
      "Zuordnungen"
    ],
    "definition": "Eine Beziehung, die Eingaben passende Ausgaben zuweist.",
    "example": "Jedem Apfelgewicht wird sein Preis an der Kasse zugeordnet.",
    "topic": "F00"
  },
  {
    "term": "Funktion",
    "aliases": [
      "Funktionen"
    ],
    "definition": "Eine Zuordnung, die jeder zugelassenen Eingabe genau eine Ausgabe zuordnet. Verschiedene Eingaben dürfen dieselbe Ausgabe haben.",
    "example": "$f(x)=2x$ ordnet $x=3$ genau den Wert $6$ zu.",
    "topic": "F00"
  },
  {
    "term": "Funktionswert",
    "aliases": [
      "Funktionswerte",
      "Funktionswerts",
      "Funktionswerten",
      "Funktionswertes"
    ],
    "definition": "Die Ausgabe einer Funktion zu einer bestimmten Eingabe.",
    "example": "Bei $f(x)=2x+1$ ist $f(3)=7$ der Funktionswert zu $x=3$.",
    "topic": "F03"
  },
  {
    "term": "proportional",
    "aliases": [
      "proportionale",
      "proportionalen",
      "Proportionalität",
      "proportionale Zuordnung"
    ],
    "definition": "Zwei Größen ändern sich im selben Verhältnis: Wird die eine verdoppelt, verdoppelt sich auch die andere. Ihr Quotient bleibt bei Eingaben ungleich 0 gleich.",
    "example": "Ein Heft kostet $2$ Euro: $3$ Hefte kosten $6$ Euro, $6$ Hefte $12$ Euro.",
    "topic": "F01"
  },
  {
    "term": "Proportionalitätsfaktor",
    "aliases": [
      "Proportionalitätsfaktoren"
    ],
    "definition": "Der feste Faktor, mit dem bei einer proportionalen Zuordnung die Eingabe multipliziert wird.",
    "example": "Bei $y=3x$ ist $3$ der Proportionalitätsfaktor.",
    "topic": "F01"
  },
  {
    "term": "Dreisatz",
    "aliases": [],
    "definition": "Ein Rechenweg über den Wert für eine Einheit, um anschließend den Wert für die gesuchte Anzahl zu bestimmen.",
    "example": "$3$ Hefte kosten $6$ Euro. Ein Heft kostet $2$ Euro; $5$ Hefte kosten $10$ Euro.",
    "topic": "F01"
  },
  {
    "term": "lineare Funktion",
    "aliases": [
      "linearen Funktion",
      "lineare Funktionen",
      "linearen Funktionen"
    ],
    "definition": "Eine Funktion der Form y = mx + b. Ihr Graph ist eine Gerade; m und b sind feste Zahlen.",
    "example": "$y=2x+3$ hat die Steigung $2$ und den y-Achsenabschnitt $3$.",
    "topic": "F02"
  },
  {
    "term": "linear",
    "aliases": [
      "lineare",
      "linearen"
    ],
    "definition": "Bei linearen Funktionen ändert sich der Ausgabewert bei gleichen Eingabeänderungen immer um denselben Betrag. Ihr Graph ist eine Gerade.",
    "example": "Bei $y=2x+1$ wächst $y$ stets um $2$, wenn $x$ um $1$ wächst.",
    "topic": "F02"
  },
  {
    "term": "Steigung",
    "aliases": [
      "Steigungen"
    ],
    "definition": "Die Änderung des y-Werts geteilt durch die zugehörige Änderung des x-Werts. Sie beschreibt, wie steil eine Gerade steigt oder fällt.",
    "example": "$2$ nach rechts und $6$ nach oben ergibt $m=\\frac62=3$.",
    "topic": "F02"
  },
  {
    "term": "y-Achsenabschnitt",
    "aliases": [
      "Achsenabschnitt",
      "y-Achsenabschnitts",
      "Achsenabschnitte"
    ],
    "definition": "Der y-Wert, an dem ein Graph die y-Achse schneidet, also der Funktionswert bei x = 0.",
    "example": "Bei $y=2x+3$ ist der y-Achsenabschnitt $3$; der Schnittpunkt ist $(0;3)$.",
    "topic": "F02"
  },
  {
    "term": "Steigungsdreieck",
    "aliases": [
      "Steigungsdreiecke",
      "Steigungsdreiecks"
    ],
    "definition": "Ein rechtwinkliges Dreieck am Graphen, dessen waagerechte und senkrechte Seiten die Änderungen von x und y zeigen.",
    "example": "Bei $\\Delta x=2$ und $\\Delta y=4$ ist $m=\\frac42=2$.",
    "topic": "F02"
  },
  {
    "term": "Funktionsgleichung",
    "aliases": [
      "Funktionsgleichungen",
      "Geradengleichung",
      "Geradengleichungen"
    ],
    "definition": "Eine Gleichung, die angibt, wie ein Funktionswert aus der Eingabe berechnet wird. Eine Geradengleichung beschreibt eine Gerade.",
    "example": "$y=3x-2$ ordnet der Eingabe $x=2$ den Wert $y=4$ zu.",
    "topic": "F03"
  },
  {
    "term": "Wertetabelle",
    "aliases": [
      "Wertetabellen"
    ],
    "definition": "Eine Tabelle mit zusammengehörigen Eingabe- und Ausgabewerten einer Zuordnung oder Funktion.",
    "example": "Für $y=2x$ können die Paare $(1;2)$, $(2;4)$ und $(3;6)$ in einer Wertetabelle stehen.",
    "topic": "F03"
  },
  {
    "term": "Graph",
    "aliases": [
      "Graphen",
      "Funktionsgraph",
      "Funktionsgraphen"
    ],
    "definition": "Die Darstellung aller zusammengehörigen Wertepaare einer Funktion oder Zuordnung als Punkte im Koordinatensystem.",
    "example": "Der Graph von $y=2x$ ist eine Gerade durch $(0;0)$ und $(1;2)$.",
    "topic": "F03"
  },
  {
    "term": "Differenzenquotient",
    "aliases": [
      "Differenzenquotienten"
    ],
    "definition": "Die Änderung einer Größe geteilt durch die Änderung einer anderen Größe. Bei Geraden berechnet er die Steigung.",
    "example": "Durch $(1;3)$ und $(3;7)$ gilt $m=\\frac{7-3}{3-1}=2$.",
    "topic": "F04"
  },
  {
    "term": "Nullstelle",
    "aliases": [
      "Nullstellen"
    ],
    "definition": "Ein Eingabewert x, bei dem der Funktionswert 0 ist. Die Nullstelle ist eine Zahl; der zugehörige Graphenpunkt liegt auf der x-Achse.",
    "example": "Bei $y=2x-6$ ist $x=3$ die Nullstelle.",
    "topic": "F05"
  },
  {
    "term": "Schnittpunkt",
    "aliases": [
      "Schnittpunkte",
      "Schnittpunkten"
    ],
    "definition": "Ein Punkt, den zwei Linien oder Graphen gemeinsam haben.",
    "example": "$y=x$ und $y=4-x$ schneiden sich in $(2;2)$.",
    "topic": "F05"
  },
  {
    "term": "antiproportional",
    "aliases": [
      "antiproportionale",
      "antiproportionalen",
      "Antiproportionalität",
      "antiproportionale Zuordnung"
    ],
    "definition": "Zwei Größen haben ein gleichbleibendes Produkt. Verdoppelt sich die eine, halbiert sich die andere, sofern die Modellannahmen gelten.",
    "example": "Für $xy=12$ gehören zu $x=2$ der Wert $y=6$ und zu $x=4$ der Wert $y=3$.",
    "topic": "F06"
  },
  {
    "term": "Hyperbel",
    "aliases": [
      "Hyperbeln"
    ],
    "definition": "Hier der gekrümmte Graph einer antiproportionalen Funktion y = k/x mit k ungleich 0. Bei x = 0 ist die Funktion nicht definiert.",
    "example": "Der Graph von $y=\\frac6x$ enthält $(1;6)$, $(2;3)$ und $(3;2)$.",
    "topic": "F06"
  },
  {
    "term": "Modell",
    "aliases": [
      "Modelle",
      "Modellen",
      "mathematisches Modell",
      "lineares Modell"
    ],
    "definition": "Eine vereinfachte mathematische Beschreibung einer Situation. Sie gilt nur unter ihren Annahmen und innerhalb eines passenden Bereichs.",
    "example": "$K(x)=2x+5$ kann einen Preis mit $5$ Euro Grundgebühr und $2$ Euro je Nutzung beschreiben.",
    "topic": "F08"
  },
  {
    "term": "Gültigkeitsbereich",
    "aliases": [
      "Gültigkeitsbereiche"
    ],
    "definition": "Der Bereich, in dem ein Modell zur beschriebenen Situation passt.",
    "example": "Ein Parkpreismodell für höchstens $8$ Stunden sollte nicht ungeprüft für $3$ Tage verwendet werden.",
    "topic": "F08"
  },
  {
    "term": "Rate",
    "aliases": [
      "Änderungsrate"
    ],
    "definition": "Die Änderung einer Größe pro Einheit einer anderen Größe.",
    "example": "Eine Füllrate von $3$ Litern pro Minute bedeutet: Pro Minute kommen $3$ Liter hinzu.",
    "topic": "F08"
  },
  {
    "term": "Messpunkt",
    "aliases": [
      "Messpunkte",
      "Messpunkten"
    ],
    "definition": "Ein Punkt im Koordinatensystem, der ein gemessenes Wertepaar darstellt.",
    "example": "Nach $2$ Minuten wurden $5$ Liter gemessen: der Messpunkt ist $(2;5)$.",
    "topic": "F09"
  },
  {
    "term": "Ausgleichsgerade",
    "aliases": [
      "Ausgleichsgeraden"
    ],
    "definition": "Eine Gerade, die den ungefähren Trend von Messpunkten beschreibt. Sie muss nicht durch jeden Messpunkt gehen.",
    "example": "Messpunkte nahe $(1;2)$, $(2;4)$ und $(3;6)$ können näherungsweise durch $y=2x$ beschrieben werden.",
    "topic": "F09"
  },
  {
    "term": "Interpolation",
    "aliases": [
      "interpolieren"
    ],
    "definition": "Einen Wert zwischen bereits bekannten Messwerten mit einem Modell schätzen.",
    "example": "Zwischen $2$ Litern nach $1$ Minute und $6$ Litern nach $3$ Minuten schätzt man bei gleichmäßigem Zufluss $4$ Liter nach $2$ Minuten.",
    "topic": "F09"
  },
  {
    "term": "Extrapolation",
    "aliases": [
      "extrapolieren"
    ],
    "definition": "Ein Modell über den Bereich der bekannten Messwerte hinaus fortsetzen. Solche Schätzungen sind besonders unsicher.",
    "example": "Aus Messungen bis Minute $3$ wird der Füllstand in Minute $10$ geschätzt; der Behälter könnte vorher voll sein.",
    "topic": "F09"
  },
  {
    "term": "Strecke",
    "aliases": [
      "Strecken"
    ],
    "definition": "Ein gerades Verbindungsstück zwischen zwei Endpunkten. Es hat eine messbare Länge.",
    "example": "Die Strecke $\\overline{AB}$ verbindet die Punkte $A$ und $B$.",
    "topic": "G01"
  },
  {
    "term": "Gerade",
    "aliases": [
      "Geraden"
    ],
    "definition": "Eine gerade Linie ohne Anfang und Ende; sie verläuft in beide Richtungen unbegrenzt weiter.",
    "example": "Durch zwei verschiedene Punkte $A$ und $B$ geht genau eine Gerade.",
    "topic": "G01"
  },
  {
    "term": "Strahl",
    "aliases": [
      "Strahlen",
      "Halbgerade"
    ],
    "definition": "Eine gerade Linie mit einem Anfangspunkt, die in einer Richtung unbegrenzt weitergeht.",
    "example": "Ein Strahl beginnt bei $A$ und geht durch $B$ über $B$ hinaus weiter.",
    "topic": "G01"
  },
  {
    "term": "parallel",
    "aliases": [
      "parallele",
      "parallelen"
    ],
    "definition": "Verschiedene parallele Geraden in derselben Ebene schneiden sich nicht und haben überall denselben Abstand.",
    "example": "Die Geraden $y=x$ und $y=x+2$ sind parallel.",
    "topic": "G01"
  },
  {
    "term": "senkrecht",
    "aliases": [
      "senkrechte",
      "senkrechten",
      "rechtwinklig",
      "rechtwinklige",
      "rechtwinkligen"
    ],
    "definition": "Zwei Linien sind senkrecht zueinander, wenn sie einen rechten Winkel bilden.",
    "example": "Die x-Achse und die y-Achse stehen senkrecht aufeinander: $90^\\circ$.",
    "topic": "G01"
  },
  {
    "term": "Rechteck",
    "aliases": [
      "Rechtecke",
      "Rechtecken"
    ],
    "definition": "Ein Viereck mit vier rechten Winkeln. Gegenüberliegende Seiten sind gleich lang und parallel.",
    "example": "Ein Rechteck mit Seitenlängen $3$ cm und $5$ cm hat $15\\,\\mathrm{cm}^2$ Flächeninhalt.",
    "topic": "G01"
  },
  {
    "term": "Quadrat",
    "aliases": [
      "Quadrate",
      "Quadraten"
    ],
    "definition": "In der Geometrie ein Viereck mit vier gleich langen Seiten und vier rechten Winkeln. Beim Rechnen bedeutet das Quadrat einer Zahl ihre zweite Potenz.",
    "example": "Ein Quadrat mit Seite $3\\,\\mathrm{cm}$ hat den Flächeninhalt $A=(3\\,\\mathrm{cm})^2=9\\,\\mathrm{cm}^2$. Beim Rechnen ist das Quadrat der Zahl 3 die Zahl 9: $3^2=9$.",
    "topic": "G01"
  },
  {
    "term": "Kante",
    "aliases": [
      "Kanten"
    ],
    "definition": "Eine Verbindungsstrecke, an der bei einem ebenflächigen Körper zwei Flächen zusammentreffen.",
    "example": "Ein Quader besitzt $12$ Kanten.",
    "topic": "G01"
  },
  {
    "term": "Ecke",
    "aliases": [
      "Ecken"
    ],
    "definition": "Ein Punkt, an dem die Seiten einer Figur oder mehrere Kanten eines Körpers zusammentreffen.",
    "example": "Ein Dreieck hat $3$ Ecken; ein Quader hat $8$ Ecken.",
    "topic": "G01"
  },
  {
    "term": "Winkel",
    "aliases": [
      "Winkeln"
    ],
    "definition": "Zwei Strahlen mit gemeinsamem Anfangspunkt bilden einen Winkel. Seine Größe beschreibt, wie weit sie gegeneinander geöffnet sind.",
    "example": "Ein rechter Winkel hat das Winkelmaß $90^\\circ$.",
    "topic": "G02"
  },
  {
    "term": "Winkelmaß",
    "aliases": [
      "Winkelmaße",
      "Winkelgröße"
    ],
    "definition": "Die Größe eines Winkels, hier in Grad angegeben.",
    "example": "Ein gestreckter Winkel hat das Winkelmaß $180^\\circ$.",
    "topic": "G02"
  },
  {
    "term": "Scheitel",
    "aliases": [
      "Scheitelpunkt"
    ],
    "definition": "Bei einem Winkel der gemeinsame Anfangspunkt seiner beiden Schenkel.",
    "example": "Beim Winkel $\\angle ABC$ ist $B$ der Scheitel.",
    "topic": "G02"
  },
  {
    "term": "Schenkel",
    "aliases": [
      "Schenkeln"
    ],
    "definition": "Die beiden Strahlen, die einen Winkel bilden. Bei einem gleichschenkligen Dreieck heißen auch die beiden gleich langen Seiten Schenkel.",
    "example": "Zwei Strahlen mit Anfangspunkt $S$ sind die Schenkel des Winkels bei $S$.",
    "topic": "G02"
  },
  {
    "term": "Nebenwinkel",
    "aliases": [
      "Nebenwinkeln"
    ],
    "definition": "Zwei nebeneinanderliegende Winkel mit einem gemeinsamen Schenkel, deren andere Schenkel eine Gerade bilden. Zusammen ergeben sie 180 Grad.",
    "example": "Zu $65^\\circ$ gehört ein Nebenwinkel von $115^\\circ$.",
    "topic": "G02"
  },
  {
    "term": "Scheitelwinkel",
    "aliases": [
      "Scheitelwinkeln"
    ],
    "definition": "Die gegenüberliegenden Winkel an zwei sich schneidenden Geraden. Sie sind gleich groß.",
    "example": "Ist ein Winkel $40^\\circ$ groß, ist sein Scheitelwinkel ebenfalls $40^\\circ$ groß.",
    "topic": "G02"
  },
  {
    "term": "Innenwinkelsumme",
    "aliases": [
      "Winkelsumme",
      "Innenwinkelsummen"
    ],
    "definition": "Die Summe aller Innenwinkel einer Figur. Im Dreieck beträgt sie 180 Grad.",
    "example": "Im Dreieck gilt $50^\\circ+60^\\circ+70^\\circ=180^\\circ$.",
    "topic": "G02"
  },
  {
    "term": "Koordinatensystem",
    "aliases": [
      "Koordinatensysteme",
      "Koordinatensystems"
    ],
    "definition": "Ein System von Achsen, mit dem man die Lage von Punkten durch Zahlen beschreibt.",
    "example": "Im üblichen ebenen Koordinatensystem gibt es eine waagerechte x-Achse und eine senkrechte y-Achse.",
    "topic": "G03"
  },
  {
    "term": "Koordinate",
    "aliases": [
      "Koordinaten"
    ],
    "definition": "Eine Zahl, die die Lage eines Punktes bezüglich einer Achse angibt.",
    "example": "Bei $P(3;2)$ ist $3$ die x-Koordinate und $2$ die y-Koordinate.",
    "topic": "G03"
  },
  {
    "term": "Koordinatenpaar",
    "aliases": [
      "Koordinatenpaare",
      "Wertepaar",
      "Wertepaare",
      "Wertepaaren"
    ],
    "definition": "Zwei geordnete Zahlen, die zusammengehören. Im ebenen Koordinatensystem stehen sie in der Reihenfolge x und y.",
    "example": "$(3;2)$ bedeutet $x=3$ und $y=2$, nicht umgekehrt.",
    "topic": "G03"
  },
  {
    "term": "x-Achse",
    "aliases": [],
    "definition": "Die waagerechte Achse im üblichen ebenen Koordinatensystem. Auf ihr ist die y-Koordinate 0.",
    "example": "Der Punkt $(4;0)$ liegt auf der x-Achse.",
    "topic": "G03"
  },
  {
    "term": "y-Achse",
    "aliases": [],
    "definition": "Die senkrechte Achse im üblichen ebenen Koordinatensystem. Auf ihr ist die x-Koordinate 0.",
    "example": "Der Punkt $(0;4)$ liegt auf der y-Achse.",
    "topic": "G03"
  },
  {
    "term": "Ursprung",
    "aliases": [
      "Koordinatenursprung"
    ],
    "definition": "Der Schnittpunkt der Koordinatenachsen. Im ebenen Koordinatensystem hat er beide Koordinaten 0.",
    "example": "Der Ursprung ist $O(0;0)$.",
    "topic": "G03"
  },
  {
    "term": "Spiegelung",
    "aliases": [
      "Spiegelungen",
      "Spiegeln",
      "gespiegelt",
      "Achsenspiegelung"
    ],
    "definition": "Eine Abbildung an einer Spiegelachse: Außerhalb der Achse liegen Punkt und Bildpunkt auf gegenüberliegenden Seiten im gleichen Abstand; ihre Verbindung steht senkrecht zur Achse. Punkte auf der Achse bleiben fest.",
    "example": "Spiegelung von $(2;1)$ an der y-Achse ergibt $(-2;1)$.",
    "topic": "G04"
  },
  {
    "term": "Spiegelachse",
    "aliases": [
      "Spiegelachsen",
      "Symmetrieachse"
    ],
    "definition": "Die Gerade, an der gespiegelt wird. Sie liegt genau zwischen jedem Punkt und seinem gespiegelten Bildpunkt.",
    "example": "Die y-Achse ist die Spiegelachse zwischen $(2;1)$ und $(-2;1)$.",
    "topic": "G04"
  },
  {
    "term": "Verschiebung",
    "aliases": [
      "Verschiebungen",
      "Verschieben",
      "verschoben"
    ],
    "definition": "Eine Abbildung, bei der alle Punkte in dieselbe Richtung um dieselbe Strecke bewegt werden.",
    "example": "$2$ nach rechts und $1$ nach oben verschiebt $(1;3)$ nach $(3;4)$.",
    "topic": "G04"
  },
  {
    "term": "Drehung",
    "aliases": [
      "Drehungen",
      "Drehen",
      "gedreht"
    ],
    "definition": "Eine Abbildung, bei der alle Punkte um dasselbe Zentrum um denselben Winkel gedreht werden.",
    "example": "Eine Drehung von $(1;0)$ um den Ursprung um $90^\\circ$ gegen den Uhrzeigersinn ergibt $(0;1)$.",
    "topic": "G04"
  },
  {
    "term": "Drehzentrum",
    "aliases": [
      "Drehzentren",
      "Drehpunkt"
    ],
    "definition": "Der feste Punkt, um den bei einer Drehung alle anderen Punkte gedreht werden.",
    "example": "Bei einer Drehung um $O(0;0)$ bleibt der Ursprung an seinem Platz.",
    "topic": "G04"
  },
  {
    "term": "Längentreue",
    "aliases": [
      "längentreu"
    ],
    "definition": "Eine Abbildung ist längentreu, wenn jede Strecke und ihre Bildstrecke dieselbe Länge haben.",
    "example": "Beim Spiegeln bleibt eine Strecke von $4$ cm auch im Bild $4$ cm lang.",
    "topic": "G04"
  },
  {
    "term": "Ortslinie",
    "aliases": [
      "Ortslinien"
    ],
    "definition": "Eine Linie aus allen Punkten, die eine bestimmte geometrische Bedingung erfüllen.",
    "example": "Alle Punkte im Abstand $3$ cm von $M$ bilden eine Kreislinie.",
    "topic": "G05"
  },
  {
    "term": "Kreis",
    "aliases": [
      "Kreise",
      "Kreisen",
      "Kreislinie"
    ],
    "definition": "Die Kreislinie besteht aus allen Punkten einer Ebene, die denselben Abstand vom Mittelpunkt haben. Die Fläche innerhalb der Linie heißt Kreisfläche.",
    "example": "Alle Punkte mit Abstand $2$ cm von $M$ liegen auf dem Kreis mit Radius $2$ cm.",
    "topic": "G05"
  },
  {
    "term": "Radius",
    "aliases": [
      "Radien"
    ],
    "definition": "Der Abstand vom Kreismittelpunkt zur Kreislinie; auch die entsprechende Verbindungsstrecke heißt Radius.",
    "example": "Bei einem Radius von $3$ cm beträgt der Durchmesser $6$ cm.",
    "topic": "G05"
  },
  {
    "term": "Durchmesser",
    "aliases": [
      "Durchmessers"
    ],
    "definition": "Eine Strecke zwischen zwei Kreispunkten durch den Mittelpunkt; ihre Länge ist doppelt so groß wie der Radius.",
    "example": "Bei $r=4$ cm gilt $d=2r=8$ cm.",
    "topic": "G05"
  },
  {
    "term": "Konstruktion",
    "aliases": [
      "Konstruktionen",
      "konstruieren",
      "konstruiert"
    ],
    "definition": "Eine geometrische Zeichnung nach festgelegten Regeln und Bedingungen, häufig mit Zirkel und Lineal.",
    "example": "Ein Dreieck wird aus drei vorgegebenen Seitenlängen mit Strecken und Kreisbögen konstruiert.",
    "topic": "G06"
  },
  {
    "term": "Kongruenz",
    "aliases": [
      "kongruent",
      "kongruente",
      "kongruenten",
      "deckungsgleich"
    ],
    "definition": "Zwei Figuren sind kongruent, wenn sie durch Verschieben, Drehen oder Spiegeln genau aufeinandergelegt werden können.",
    "example": "Zwei Dreiecke mit denselben drei Seitenlängen sind kongruent.",
    "topic": "G06"
  },
  {
    "term": "SSS",
    "aliases": [
      "Seite-Seite-Seite"
    ],
    "definition": "Ein Kongruenzsatz: Drei festgelegte Seitenlängen bestimmen ein Dreieck bis auf seine Lage eindeutig, sofern ein Dreieck möglich ist.",
    "example": "Seiten von $3$ cm, $4$ cm und $5$ cm bestimmen die Form eindeutig.",
    "topic": "G06"
  },
  {
    "term": "SWS",
    "aliases": [
      "Seite-Winkel-Seite"
    ],
    "definition": "Ein Kongruenzsatz: Zwei Seitenlängen und der zwischen ihnen liegende Winkel bestimmen die Form eines Dreiecks eindeutig.",
    "example": "Zwei Seiten von $4$ cm und $5$ cm mit eingeschlossenem Winkel $60^\\circ$ legen ein Dreieck fest.",
    "topic": "G06"
  },
  {
    "term": "WSW",
    "aliases": [
      "Winkel-Seite-Winkel"
    ],
    "definition": "Ein Kongruenzsatz: Eine Seite und ihre beiden anliegenden Winkel bestimmen die Form eines Dreiecks eindeutig.",
    "example": "Eine Seite von $5$ cm mit anliegenden Winkeln $50^\\circ$ und $70^\\circ$ legt ein Dreieck fest.",
    "topic": "G06"
  },
  {
    "term": "Dreiecksungleichung",
    "aliases": [],
    "definition": "In einem Dreieck ist die Summe je zweier Seitenlängen größer als die dritte Seitenlänge.",
    "example": "$2$, $3$ und $6$ cm ergeben kein Dreieck, denn $2+3<6$.",
    "topic": "G06"
  },
  {
    "term": "Höhe",
    "aliases": [
      "Höhen",
      "Höhe im Dreieck",
      "zugehörige Höhe"
    ],
    "definition": "Ein senkrecht gemessener Abstand. Im Dreieck verbindet die Höhe eine Ecke senkrecht mit der gegenüberliegenden Seite oder deren Verlängerung.",
    "example": "Für ein Dreieck mit Grundseite $6$ cm und zugehöriger Höhe $4$ cm gilt $A=\\frac12\\cdot6\\cdot4=12\\,\\mathrm{cm}^2$.",
    "topic": "G07"
  },
  {
    "term": "Seitenhalbierende",
    "aliases": [
      "Seitenhalbierenden"
    ],
    "definition": "Eine Strecke von einer Dreiecksecke zum Mittelpunkt der gegenüberliegenden Seite. Sie muss nicht senkrecht auf der Seite stehen.",
    "example": "Ist $M$ die Mitte von $\\overline{BC}$, ist $\\overline{AM}$ eine Seitenhalbierende.",
    "topic": "G07"
  },
  {
    "term": "Mittelsenkrechte",
    "aliases": [
      "Mittelsenkrechten"
    ],
    "definition": "Die Gerade durch den Mittelpunkt einer Strecke, die senkrecht auf der Strecke steht. Alle ihre Punkte sind von beiden Endpunkten gleich weit entfernt.",
    "example": "Liegt $P$ auf der Mittelsenkrechten von $\\overline{AB}$, gilt $PA=PB$.",
    "topic": "G07"
  },
  {
    "term": "Winkelhalbierende",
    "aliases": [
      "Winkelhalbierenden"
    ],
    "definition": "Ein Strahl vom Scheitel aus, der einen Winkel in zwei gleich große Winkel teilt.",
    "example": "Die Winkelhalbierende teilt $70^\\circ$ in zweimal $35^\\circ$.",
    "topic": "G07"
  },
  {
    "term": "Lot",
    "aliases": [
      "Lotstrecke",
      "Lotfußpunkt"
    ],
    "definition": "Eine Senkrechte von einem Punkt auf eine Gerade oder Ebene. Ihr Auftreffpunkt heißt Lotfußpunkt.",
    "example": "Der kürzeste Weg von einem Punkt zu einer Geraden verläuft entlang des Lots.",
    "topic": "G07"
  },
  {
    "term": "Mittelpunkt",
    "aliases": [
      "Mittelpunkte",
      "Mittelpunkts"
    ],
    "definition": "Bei einer Strecke der Punkt genau zwischen den Endpunkten; beim Kreis der Punkt, von dem alle Kreispunkte gleich weit entfernt sind.",
    "example": "Die Mitte einer Strecke von $8$ cm liegt $4$ cm von beiden Endpunkten entfernt.",
    "topic": "G07"
  },
  {
    "term": "Satz des Thales",
    "aliases": [
      "Thalessatz",
      "Thaleskreis"
    ],
    "definition": "Liegt ein Dreieckspunkt auf einem Kreis über der gegenüberliegenden Seite als Durchmesser, ist der Winkel an diesem Punkt ein rechter Winkel.",
    "example": "Ist $\\overline{AB}$ ein Kreisdurchmesser und liegt $C$ auf dem Kreis, dann gilt $\\angle ACB=90^\\circ$.",
    "topic": "G08"
  },
  {
    "term": "rechter Winkel",
    "aliases": [
      "rechten Winkel",
      "rechte Winkel"
    ],
    "definition": "Ein Winkel von genau 90 Grad, also eine Vierteldrehung.",
    "example": "Jede Ecke eines Rechtecks hat einen rechten Winkel: $90^\\circ$.",
    "topic": "G02"
  },
  {
    "term": "Umkehrung",
    "aliases": [
      "Umkehrsatz"
    ],
    "definition": "Bei einem Satz werden Voraussetzung und Folgerung vertauscht. Ob die Umkehrung gilt, muss gesondert geprüft werden.",
    "example": "Die Umkehrung des Satzes von Thales: Ein rechtwinkliger Dreieckspunkt liegt auf dem Kreis über der gegenüberliegenden Seite als Durchmesser.",
    "topic": "G08"
  },
  {
    "term": "Netz",
    "aliases": [
      "Netze",
      "Netzen",
      "Körpernetz"
    ],
    "definition": "Die zusammenhängend in die Ebene aufgeklappten Flächen eines Körpers, die sich zu ihm zusammenfalten lassen.",
    "example": "Ein Würfelnetz besteht aus $6$ passend angeordneten Quadraten.",
    "topic": "G09"
  },
  {
    "term": "Schrägbild",
    "aliases": [
      "Schrägbilder",
      "Schrägbilds"
    ],
    "definition": "Eine ebene Zeichnung eines räumlichen Körpers, in der nach hinten laufende Kanten schräg und meist verkürzt dargestellt werden.",
    "example": "Bei einem Quader wird die Vorderseite als Rechteck gezeichnet; die Tiefenkanten verlaufen schräg nach hinten.",
    "topic": "G09"
  },
  {
    "term": "Tiefenkante",
    "aliases": [
      "Tiefenkanten"
    ],
    "definition": "Eine Kante, die in der Zeichnung vom vorderen Bereich eines Körpers nach hinten führt.",
    "example": "Im Schrägbild wird eine Tiefenkante von $4$ cm bei halber Verkürzung mit $2$ cm gezeichnet.",
    "topic": "G09"
  },
  {
    "term": "Beweis",
    "aliases": [
      "Beweise",
      "Beweisen",
      "beweisen"
    ],
    "definition": "Eine schlüssige Begründung, die zeigt, dass eine Aussage unter den genannten Voraussetzungen immer gilt. Einzelne Beispiele reichen dafür nicht.",
    "example": "$2n+2m=2(n+m)$ zeigt: Die Summe zweier gerader ganzer Zahlen ist gerade.",
    "topic": "G10"
  },
  {
    "term": "Vermutung",
    "aliases": [
      "Vermutungen"
    ],
    "definition": "Eine Aussage, die plausibel erscheint, aber noch nicht allgemein bewiesen ist.",
    "example": "Nach einigen Zeichnungen vermutest du, dass die Innenwinkel eines Dreiecks zusammen $180^\\circ$ ergeben.",
    "topic": "G10"
  },
  {
    "term": "Gegenbeispiel",
    "aliases": [
      "Gegenbeispiele",
      "Gegenbeispielen"
    ],
    "definition": "Ein einzelnes Beispiel, das eine behauptete allgemeine Aussage widerlegt.",
    "example": "Die Behauptung, alle Primzahlen seien ungerade, wird durch die Primzahl $2$ widerlegt.",
    "topic": "S05"
  },
  {
    "term": "Einheit",
    "aliases": [
      "Einheiten",
      "Maßeinheit",
      "Maßeinheiten"
    ],
    "definition": "Ein festgelegtes Vergleichsmaß, mit dem eine Größe angegeben wird.",
    "example": "Bei $5$ cm ist $5$ die Maßzahl und cm die Einheit.",
    "topic": "M01"
  },
  {
    "term": "Größe",
    "aliases": [
      "Größen",
      "Messgröße"
    ],
    "definition": "Eine messbare Eigenschaft, zum Beispiel Länge, Masse, Zeit oder Flächeninhalt. Ihr Wert wird meist mit Zahl und Einheit angegeben.",
    "example": "Die Länge eines Stifts kann $14$ cm betragen.",
    "topic": "M01"
  },
  {
    "term": "Umrechnungsfaktor",
    "aliases": [
      "Umrechnungsfaktoren"
    ],
    "definition": "Der Faktor, mit dem eine Maßzahl beim Wechsel zu einer anderen Einheit multipliziert wird.",
    "example": "Von Metern zu Zentimetern ist der Faktor $100$: $2\\,\\mathrm m=200\\,\\mathrm{cm}$.",
    "topic": "M01"
  },
  {
    "term": "Flächeninhalt",
    "aliases": [
      "Flächeninhalte",
      "Flächeninhalts"
    ],
    "definition": "Der Flächeninhalt gibt an, wie groß eine Fläche ist. Er wird in Quadrateinheiten wie Quadratzentimetern gemessen.",
    "example": "Ein Rechteck von $3$ cm mal $4$ cm hat $A=12\\,\\mathrm{cm}^2$.",
    "topic": "M03"
  },
  {
    "term": "Volumen",
    "aliases": [
      "Rauminhalt",
      "Volumens"
    ],
    "definition": "Das Maß dafür, wie viel Raum ein Körper einnimmt oder ein Behälter fassen kann.",
    "example": "Ein Quader mit Kanten $2$, $3$ und $4$ cm hat $V=24\\,\\mathrm{cm}^3$.",
    "topic": "M04"
  },
  {
    "term": "Quadrateinheit",
    "aliases": [
      "Quadrateinheiten",
      "Flächeneinheit",
      "Flächeneinheiten"
    ],
    "definition": "Eine Einheit für Flächeninhalte, etwa die Fläche eines Quadrats mit Seitenlänge 1 cm.",
    "example": "$1\\,\\mathrm{cm}^2$ ist ein Quadratzentimeter; $1\\,\\mathrm{dm}^2=100\\,\\mathrm{cm}^2$.",
    "topic": "M02"
  },
  {
    "term": "Kubikeinheit",
    "aliases": [
      "Kubikeinheiten",
      "Raumeinheit",
      "Raumeinheiten",
      "Volumeneinheit"
    ],
    "definition": "Eine Einheit für Volumen, etwa der Rauminhalt eines Würfels mit Kantenlänge 1 cm.",
    "example": "$1\\,\\mathrm{cm}^3$ ist ein Kubikzentimeter; $1\\,\\mathrm{dm}^3=1000\\,\\mathrm{cm}^3$.",
    "topic": "M02"
  },
  {
    "term": "Liter",
    "aliases": [],
    "definition": "Eine Volumeneinheit. Ein Liter entspricht einem Kubikdezimeter.",
    "example": "$1\\,\\mathrm l=1\\,\\mathrm{dm}^3=1000\\,\\mathrm{cm}^3$.",
    "topic": "M02"
  },
  {
    "term": "Umfang",
    "aliases": [
      "Umfänge",
      "Umfangs"
    ],
    "definition": "Die gesamte Länge des Randes einer ebenen Figur.",
    "example": "Ein Rechteck mit Seiten $3$ cm und $4$ cm hat $U=2\\cdot3+2\\cdot4=14$ cm.",
    "topic": "M03"
  },
  {
    "term": "Quader",
    "aliases": [
      "Quadern",
      "Quaders"
    ],
    "definition": "Ein Körper, dessen sechs Begrenzungsflächen Rechtecke sind.",
    "example": "Eine rechteckige Schachtel mit Länge $5$ cm, Breite $3$ cm und Höhe $2$ cm ist ein Quader.",
    "topic": "M04"
  },
  {
    "term": "Würfel",
    "aliases": [
      "Würfels"
    ],
    "definition": "Ein besonderer Quader mit sechs gleich großen quadratischen Flächen. Alle zwölf Kanten sind gleich lang. Ein gewöhnlicher Spielwürfel hat diese Form.",
    "example": "Bei Kantenlänge $2$ cm beträgt das Volumen $8\\,\\mathrm{cm}^3$.",
    "topic": "M04"
  },
  {
    "term": "Oberfläche",
    "aliases": [
      "Oberflächen",
      "Oberflächeninhalt"
    ],
    "definition": "Die gesamte äußere Begrenzung eines Körpers; ihr Flächeninhalt ist die Summe der Flächeninhalte aller äußeren Flächen.",
    "example": "Ein Würfel mit Kante $2$ cm hat den Oberflächeninhalt $6\\cdot2^2=24\\,\\mathrm{cm}^2$.",
    "topic": "M04"
  },
  {
    "term": "Grundseite",
    "aliases": [
      "Grundseiten"
    ],
    "definition": "Eine gewählte Seite einer ebenen Figur, auf die sich die zugehörige Höhe bezieht.",
    "example": "Beim Dreieck gilt $A=\\frac12gh$, wobei $h$ senkrecht zur Grundseite $g$ gemessen wird.",
    "topic": "M05"
  },
  {
    "term": "Dreieck",
    "aliases": [
      "Dreiecke",
      "Dreiecken",
      "Dreiecks"
    ],
    "definition": "Eine ebene Figur mit drei Seiten und drei Ecken.",
    "example": "Die drei Innenwinkel eines Dreiecks ergeben zusammen $180^\\circ$.",
    "topic": "G06"
  },
  {
    "term": "Parallelogramm",
    "aliases": [
      "Parallelogramme",
      "Parallelogrammen"
    ],
    "definition": "Ein Viereck mit jeweils parallelen gegenüberliegenden Seiten.",
    "example": "Bei Grundseite $5$ cm und senkrechter Höhe $3$ cm gilt $A=5\\cdot3=15\\,\\mathrm{cm}^2$.",
    "topic": "M05"
  },
  {
    "term": "Trapez",
    "aliases": [
      "Trapeze",
      "Trapezen"
    ],
    "definition": "Ein Viereck mit mindestens einem Paar paralleler gegenüberliegender Seiten.",
    "example": "Bei parallelen Seiten $4$ cm und $6$ cm und Höhe $3$ cm gilt $A=\\frac{4+6}{2}\\cdot3=15\\,\\mathrm{cm}^2$.",
    "topic": "M05"
  },
  {
    "term": "Prisma",
    "aliases": [
      "Prismen",
      "gerades Prisma",
      "geraden Prismen"
    ],
    "definition": "Ein Körper mit zwei parallelen, kongruenten Vielecken als Grund- und Deckfläche. Bei einem geraden Prisma stehen die verbindenden Seitenkanten senkrecht auf der Grundfläche.",
    "example": "Ein gerades Prisma mit Grundfläche $10\\,\\mathrm{cm}^2$ und Höhe $4$ cm hat $V=40\\,\\mathrm{cm}^3$.",
    "topic": "M06"
  },
  {
    "term": "Grundfläche",
    "aliases": [
      "Grundflächen",
      "Deckfläche"
    ],
    "definition": "Eine gewählte Basisfläche eines Körpers. Bei einem Prisma ist die parallele gegenüberliegende Fläche kongruent zu ihr und heißt Deckfläche.",
    "example": "Bei einem Dreiecksprisma sind Grund- und Deckfläche gleich große Dreiecke.",
    "topic": "M06"
  },
  {
    "term": "Körperhöhe",
    "aliases": [
      "Körperhöhen"
    ],
    "definition": "Der senkrechte Abstand zwischen Grund- und Deckebene eines Prismas.",
    "example": "Bei einem geraden Prisma entspricht die Körperhöhe der Länge einer Seitenkante.",
    "topic": "M06"
  },
  {
    "term": "Mantel",
    "aliases": [
      "Mantelfläche",
      "Mantelflächeninhalt"
    ],
    "definition": "Die Seitenflächen eines Körpers ohne Grund- und Deckfläche. Bei einem geraden Prisma berechnet sich ihr Inhalt aus Grundumfang mal Körperhöhe.",
    "example": "Bei Grundumfang $12$ cm und Höhe $5$ cm ist $M=60\\,\\mathrm{cm}^2$.",
    "topic": "M06"
  },
  {
    "term": "Grundumfang",
    "aliases": [],
    "definition": "Der Umfang der Grundfläche eines Körpers.",
    "example": "Eine rechteckige Grundfläche mit Seiten $3$ cm und $4$ cm hat den Grundumfang $14$ cm.",
    "topic": "M06"
  },
  {
    "term": "Maßstab",
    "aliases": [
      "Maßstäbe",
      "Maßstäben"
    ],
    "definition": "Das Verhältnis einer Länge in einer Zeichnung zur entsprechenden wirklichen Länge, jeweils in derselben Einheit.",
    "example": "Im Maßstab $1:100$ entsprechen $2$ cm im Plan $200$ cm in Wirklichkeit.",
    "topic": "M07"
  },
  {
    "term": "Längenfaktor",
    "aliases": [
      "Längenfaktoren"
    ],
    "definition": "Der Faktor, mit dem bei einer maßstäblichen Vergrößerung oder Verkleinerung alle Längen multipliziert werden.",
    "example": "Beim Längenfaktor $3$ wird aus $2$ cm eine Länge von $6$ cm.",
    "topic": "M07"
  },
  {
    "term": "Flächenfaktor",
    "aliases": [
      "Flächenfaktoren"
    ],
    "definition": "Der Faktor für die Änderung des Flächeninhalts bei maßstäblicher Vergrößerung. Er ist das Quadrat des Längenfaktors.",
    "example": "Werden alle Längen verdoppelt, wird der Flächeninhalt mit $2^2=4$ multipliziert.",
    "topic": "M07"
  },
  {
    "term": "Größenordnung",
    "aliases": [
      "Größenordnungen"
    ],
    "definition": "Die ungefähre Größenstufe eines Werts, zum Beispiel einige Zehner, Hunderter oder Tausender.",
    "example": "$49\\cdot21$ liegt in der Größenordnung von $1000$, nicht von $100$.",
    "topic": "M08"
  },
  {
    "term": "Plausibilität",
    "aliases": [
      "plausibel",
      "plausible",
      "plausiblen"
    ],
    "definition": "Ein Ergebnis ist plausibel, wenn seine Größe und Bedeutung zur Situation passen. Plausibilität ersetzt keine genaue Prüfung.",
    "example": "Eine Körpergröße von $1{,}65$ m ist für einen Jugendlichen plausibel; $16{,}5$ m nicht.",
    "topic": "M08"
  },
  {
    "term": "Stichprobe",
    "aliases": [
      "Stichproben"
    ],
    "definition": "Eine untersuchte Teilmenge einer größeren Gruppe. Aus ihr möchte man oft etwas über die ganze Gruppe erfahren.",
    "example": "Für eine Schulbefragung werden $100$ von $800$ Schülerinnen und Schülern befragt.",
    "topic": "S01"
  },
  {
    "term": "Zielgruppe",
    "aliases": [
      "Zielgruppen",
      "Grundgesamtheit"
    ],
    "definition": "Die gesamte Gruppe, über die eine Untersuchung eine Aussage machen soll.",
    "example": "Bei der Frage nach Schulwegen der ganzen Schule gehören alle Schülerinnen und Schüler zur Zielgruppe.",
    "topic": "S01"
  },
  {
    "term": "Datenerhebung",
    "aliases": [
      "Datenerhebungen",
      "Erhebung"
    ],
    "definition": "Das planmäßige Sammeln von Daten, zum Beispiel durch Befragen, Beobachten oder Messen.",
    "example": "Eine Klasse misst eine Woche lang täglich die Außentemperatur.",
    "topic": "S01"
  },
  {
    "term": "Verzerrung",
    "aliases": [
      "Verzerrungen",
      "verzerrt"
    ],
    "definition": "Ein systematischer Einfluss, durch den Daten ein einseitiges oder irreführendes Bild geben.",
    "example": "Eine Umfrage zum Lieblingssport nur im Fußballverein bildet die ganze Schule vermutlich nicht gut ab.",
    "topic": "S01"
  },
  {
    "term": "absolute Häufigkeit",
    "aliases": [
      "absoluten Häufigkeit",
      "absolute Häufigkeiten",
      "absoluten Häufigkeiten"
    ],
    "definition": "Die gezählte Anzahl, wie oft ein bestimmter Wert oder ein Ereignis vorkommt.",
    "example": "Bei $20$ Würfen fällt fünfmal eine Sechs. Ihre absolute Häufigkeit ist $5$.",
    "topic": "S02"
  },
  {
    "term": "relative Häufigkeit",
    "aliases": [
      "relativen Häufigkeit",
      "relative Häufigkeiten",
      "relativen Häufigkeiten"
    ],
    "definition": "Die absolute Häufigkeit geteilt durch die Gesamtzahl der Beobachtungen.",
    "example": "Fünf Sechsen bei $20$ Würfen ergeben $\\frac5{20}=0{,}25=25\\,\\%$.",
    "topic": "S02"
  },
  {
    "term": "Kategorie",
    "aliases": [
      "Kategorien"
    ],
    "definition": "Eine Gruppe, in die Daten nach einer gemeinsamen Eigenschaft eingeordnet werden.",
    "example": "Bei einer Schulwegbefragung können Fahrrad, Bus und zu Fuß Kategorien sein.",
    "topic": "S02"
  },
  {
    "term": "Säulendiagramm",
    "aliases": [
      "Säulendiagramme",
      "Säulendiagrammen"
    ],
    "definition": "Ein Diagramm, bei dem die Höhe von Säulen Werte oder Häufigkeiten darstellt.",
    "example": "Eine doppelt so hohe Säule bedeutet bei einer bei 0 beginnenden gleichmäßigen Skala den doppelten Wert.",
    "topic": "S03"
  },
  {
    "term": "Kreisdiagramm",
    "aliases": [
      "Kreisdiagramme",
      "Kreisdiagrammen"
    ],
    "definition": "Ein Diagramm, das ein Ganzes als Kreis und seine Anteile als Kreisausschnitte zeigt.",
    "example": "$25\\,\\%$ entsprechen einem Viertelkreis mit $90^\\circ$.",
    "topic": "S03"
  },
  {
    "term": "Skala",
    "aliases": [
      "Skalen",
      "Skalierung"
    ],
    "definition": "Die Einteilung einer Achse oder eines Messgeräts, die Abstände mit Zahlenwerten verknüpft.",
    "example": "Auf einer Skala mit Schritten von $10$ liegen zwischen $20$ und $50$ drei gleich große Schritte.",
    "topic": "S03"
  },
  {
    "term": "Sektorwinkel",
    "aliases": [
      "Sektorwinkeln"
    ],
    "definition": "Der Winkel eines Kreisausschnitts am Mittelpunkt. Im Kreisdiagramm entspricht er dem dargestellten Anteil von 360 Grad.",
    "example": "Für $10\\,\\%$ gilt $0{,}10\\cdot360^\\circ=36^\\circ$.",
    "topic": "S03"
  },
  {
    "term": "arithmetisches Mittel",
    "aliases": [
      "arithmetischen Mittel",
      "Mittelwert",
      "Mittelwerte",
      "Durchschnitt"
    ],
    "definition": "Die Summe aller Zahlenwerte geteilt durch ihre Anzahl.",
    "example": "Für $2$, $4$ und $9$ ist das Mittel $\\frac{2+4+9}{3}=5$.",
    "topic": "S04"
  },
  {
    "term": "Median",
    "aliases": [
      "Zentralwert"
    ],
    "definition": "Der mittlere Wert einer sortierten Datenliste. Bei gerader Anzahl ist es der Mittelwert der beiden mittleren Werte.",
    "example": "Bei $1;3;8$ ist der Median $3$. Bei $1;3;8;10$ ist er $\\frac{3+8}{2}=5{,}5$.",
    "topic": null
  },
  {
    "term": "Modalwert",
    "aliases": [
      "Modalwerte",
      "Modus"
    ],
    "definition": "Der Wert, der am häufigsten vorkommt. Mehrere Werte können gleich häufig an der Spitze liegen.",
    "example": "In $2;2;3;5$ ist der Modalwert $2$.",
    "topic": "S04"
  },
  {
    "term": "Spannweite",
    "aliases": [
      "Spannweiten"
    ],
    "definition": "Der größte Datenwert minus der kleinste Datenwert. Sie beschreibt die gesamte Breite der Daten.",
    "example": "Für $2;4;9$ ist die Spannweite $9-2=7$.",
    "topic": "S05"
  },
  {
    "term": "Ausreißer",
    "aliases": [
      "Ausreißern"
    ],
    "definition": "Ein Datenwert, der deutlich von den übrigen Werten abweicht. Er kann echt sein oder auf einen Fehler hindeuten.",
    "example": "In $10;11;12;60$ fällt $60$ als möglicher Ausreißer auf.",
    "topic": "S04"
  },
  {
    "term": "Verteilung",
    "aliases": [
      "Verteilungen"
    ],
    "definition": "Die Art, wie sich Datenwerte auf verschiedene Werte oder Bereiche verteilen.",
    "example": "$4;5;6$ und $0;5;10$ haben denselben Mittelwert, aber eine unterschiedliche Verteilung.",
    "topic": "S05"
  },
  {
    "term": "Streuung",
    "aliases": [
      "Streuungen"
    ],
    "definition": "Sie beschreibt, wie eng Datenwerte beieinanderliegen oder wie weit sie auseinanderliegen.",
    "example": "$4;5;6$ streut weniger als $0;5;10$, obwohl beide Listen den Mittelwert $5$ haben.",
    "topic": "S05"
  },
  {
    "term": "Kennwert",
    "aliases": [
      "Kennwerte",
      "Kennwerten"
    ],
    "definition": "Eine Zahl, die eine Eigenschaft vieler Daten zusammenfasst, etwa ihre Mitte oder Breite.",
    "example": "Mittelwert und Spannweite sind Kennwerte; sie zeigen nicht jeden einzelnen Datenwert.",
    "topic": "S05"
  },
  {
    "term": "Zufallsversuch",
    "aliases": [
      "Zufallsversuche",
      "Zufallsversuchen"
    ],
    "definition": "Ein Versuch mit bekannten möglichen Ausgängen, dessen konkretes Ergebnis vorher nicht sicher feststeht.",
    "example": "Ein Würfelwurf hat die möglichen Ergebnisse $1$ bis $6$.",
    "topic": "W01"
  },
  {
    "term": "Ergebnis",
    "aliases": [
      "Ergebnisse",
      "Ergebnissen"
    ],
    "definition": "Beim Rechnen der erhaltene Wert; bei einem Zufallsversuch ein einzelner möglicher Ausgang.",
    "example": "Beim Würfeln ist die Augenzahl $4$ ein Ergebnis. Beim Rechnen ist $7$ das Ergebnis von $3+4$.",
    "topic": "W01"
  },
  {
    "term": "Ergebnismenge",
    "aliases": [
      "Ergebnismengen"
    ],
    "definition": "Die Menge aller möglichen Ergebnisse eines Zufallsversuchs.",
    "example": "Beim gewöhnlichen Würfeln ist $\\Omega=\\{1,2,3,4,5,6\\}$.",
    "topic": "W01"
  },
  {
    "term": "Ereignis",
    "aliases": [
      "Ereignisse",
      "Ereignissen"
    ],
    "definition": "Eine Menge von Ergebnissen eines Zufallsversuchs. Das Ereignis tritt ein, wenn das beobachtete Ergebnis dazu gehört.",
    "example": "Gerade Augenzahl ist das Ereignis $\\{2,4,6\\}$.",
    "topic": "W01"
  },
  {
    "term": "sicheres Ereignis",
    "aliases": [
      "sichere Ereignisse",
      "sicheren Ereignis"
    ],
    "definition": "Ein Ereignis, das alle möglichen Ergebnisse enthält und deshalb immer eintritt.",
    "example": "Beim gewöhnlichen Würfeln fällt sicher eine Zahl von $1$ bis $6$: $P=1$.",
    "topic": "W01"
  },
  {
    "term": "unmögliches Ereignis",
    "aliases": [
      "unmögliche Ereignisse",
      "unmöglichen Ereignis"
    ],
    "definition": "Ein Ereignis, das kein mögliches Ergebnis enthält und deshalb nicht eintreten kann.",
    "example": "Mit einem gewöhnlichen sechsseitigen Würfel eine $7$ würfeln: $P=0$.",
    "topic": "W01"
  },
  {
    "term": "Wahrscheinlichkeit",
    "aliases": [
      "Wahrscheinlichkeiten"
    ],
    "definition": "Eine Zahl zwischen 0 und 1, die im Modell beschreibt, wie wahrscheinlich ein Ereignis ist. Sie kann auch in Prozent angegeben werden.",
    "example": "Beim fairen Würfel gilt $P(6)=\\frac16$.",
    "topic": "W02"
  },
  {
    "term": "Laplace-Versuch",
    "aliases": [
      "Laplace-Versuche",
      "Laplace-Experiment",
      "Laplace"
    ],
    "definition": "Ein Zufallsversuch, bei dem alle einzelnen Ergebnisse gleich wahrscheinlich sind.",
    "example": "Bei einem fairen Würfel sind alle $6$ Augenzahlen gleich wahrscheinlich, jeweils mit $\\frac16$.",
    "topic": "W02"
  },
  {
    "term": "günstige Ergebnisse",
    "aliases": [
      "günstigen Ergebnisse",
      "günstigen Ergebnissen",
      "günstiges Ergebnis"
    ],
    "definition": "Die Ergebnisse, die zum betrachteten Ereignis gehören. Günstig heißt hier passend zum Ereignis, nicht unbedingt erfreulich.",
    "example": "Für gerade Augenzahl sind $2$, $4$ und $6$ die günstigen Ergebnisse.",
    "topic": "W02"
  },
  {
    "term": "Gegenereignis",
    "aliases": [
      "Gegenereignisse",
      "Gegenereignisses"
    ],
    "definition": "Das Ereignis aus allen Ergebnissen, die nicht zum betrachteten Ereignis gehören. Seine Wahrscheinlichkeit ist 1 minus die des Ereignisses.",
    "example": "Zu gerade Augenzahl gehört ungerade Augenzahl als Gegenereignis.",
    "topic": "W02"
  },
  {
    "term": "Schwankung",
    "aliases": [
      "Schwankungen"
    ],
    "definition": "Zufällige Unterschiede zwischen beobachteten Häufigkeiten. Auch bei gleicher Wahrscheinlichkeit fallen Versuchsreihen unterschiedlich aus.",
    "example": "Bei $10$ fairen Münzwürfen muss Kopf nicht genau fünfmal fallen.",
    "topic": "W03"
  },
  {
    "term": "Baumdiagramm",
    "aliases": [
      "Baumdiagramme",
      "Baumdiagrammen"
    ],
    "definition": "Eine verzweigte Darstellung der möglichen Abläufe eines mehrstufigen Zufallsversuchs.",
    "example": "Bei zwei Münzwürfen gehen vom Start Zweige für Kopf und Zahl beim ersten Wurf ab. Von jedem dieser Knoten gehen erneut Zweige für Kopf und Zahl beim zweiten Wurf ab.",
    "topic": "W04"
  },
  {
    "term": "Knoten",
    "aliases": [
      "Knotenpunkt"
    ],
    "definition": "Eine Stelle im Baumdiagramm, an der ein neuer Schritt beginnt oder an der Zweige zusammentreffen.",
    "example": "Nach dem ersten Ergebnis Kopf beginnt ein Knoten mit den möglichen zweiten Ergebnissen Kopf und Zahl.",
    "topic": "W04"
  },
  {
    "term": "Zweig",
    "aliases": [
      "Zweige",
      "Zweigen"
    ],
    "definition": "Eine einzelne Verbindung im Baumdiagramm, die eine mögliche nächste Teilentscheidung oder ein Teilergebnis darstellt.",
    "example": "Beim Münzwurf trägt der Zweig zu Kopf die Wahrscheinlichkeit $\\frac12$.",
    "topic": "W04"
  },
  {
    "term": "mit Zurücklegen",
    "aliases": [
      "Zurücklegen",
      "zurückgelegt"
    ],
    "definition": "Nach dem Ziehen wird der gezogene Gegenstand vor der nächsten Ziehung wieder in die Ausgangsmenge gelegt.",
    "example": "Bei $3$ roten und $2$ blauen Kugeln bleibt die Wahrscheinlichkeit für Rot nach Zurücklegen $\\frac35$.",
    "topic": "W04"
  },
  {
    "term": "ohne Zurücklegen",
    "aliases": [],
    "definition": "Ein gezogener Gegenstand bleibt außerhalb der Ausgangsmenge. Dadurch können sich die Wahrscheinlichkeiten bei der nächsten Ziehung ändern.",
    "example": "Nach einer roten Kugel aus $3$ roten und $2$ blauen bleiben $2$ rote von $4$ Kugeln: $P(\\text{Rot})=\\frac24$.",
    "topic": "W04"
  },
  {
    "term": "Pfad",
    "aliases": [
      "Pfade",
      "Pfaden",
      "Pfad im Baumdiagramm"
    ],
    "definition": "Ein vollständiger Weg vom Start bis zu einem Endpunkt im Baumdiagramm. Er beschreibt einen möglichen gesamten Versuchsablauf.",
    "example": "Beim zweimaligen Münzwurf ist Kopf, dann Zahl ein Pfad.",
    "topic": "W05"
  },
  {
    "term": "Pfadregel",
    "aliases": [
      "Produktregel",
      "Multiplikationsregel"
    ],
    "definition": "Die Wahrscheinlichkeit eines vollständigen Pfads erhält man, indem man die Zweigwahrscheinlichkeiten entlang dieses Pfads multipliziert.",
    "example": "Bei zwei unabhängigen fairen Münzwürfen gilt $P(\\text{Kopf, Kopf})=\\frac12\\cdot\\frac12=\\frac14$.",
    "topic": "W05"
  },
  {
    "term": "Summenregel",
    "aliases": [
      "Additionsregel"
    ],
    "definition": "Die Wahrscheinlichkeiten verschiedener vollständiger Pfade, die zu einem Ereignis gehören, werden addiert.",
    "example": "Genau einmal Kopf bei zwei fairen Münzwürfen: $\\frac14+\\frac14=\\frac12$.",
    "topic": "W05"
  },
  {
    "term": "mindestens",
    "aliases": [],
    "definition": "Eine untere Grenze ist eingeschlossen; größere Anzahlen sind ebenfalls erlaubt.",
    "example": "Mindestens zwei Treffer bedeutet $2$, $3$, $4$ oder mehr Treffer.",
    "topic": "W05"
  },
  {
    "term": "höchstens",
    "aliases": [],
    "definition": "Eine obere Grenze ist eingeschlossen; kleinere Anzahlen sind ebenfalls erlaubt.",
    "example": "Höchstens zwei Treffer bedeutet $0$, $1$ oder $2$ Treffer.",
    "topic": "W05"
  },
  {
    "term": "Simulation",
    "aliases": [
      "Simulationen",
      "simulieren",
      "simuliert"
    ],
    "definition": "Eine Situation wird mit einem passenden Modell nachgeahmt, oft mit Zufallszahlen und vielen Wiederholungen.",
    "example": "Zufallszahlen von $1$ bis $6$ können faire Würfelwürfe simulieren.",
    "topic": "W06"
  },
  {
    "term": "Zufallszahl",
    "aliases": [
      "Zufallszahlen"
    ],
    "definition": "Eine Zahl, die nach einer festgelegten Zufallsregel erzeugt wird. Für ein Modell muss ihre Verteilung zur Situation passen.",
    "example": "Gleich wahrscheinliche ganze Zufallszahlen von $1$ bis $6$ passen zum Modell eines fairen Würfels.",
    "topic": "W06"
  },
  {
    "term": "Ganzes",
    "aliases": [
      "das Ganze",
      "dem Ganzen"
    ],
    "definition": "Die vollständige Bezugsmenge, von der ein Anteil betrachtet wird. Bei einer Bruchdarstellung muss klar sein, was als ein Ganzes zählt.",
    "example": "Ist eine Pizza das Ganze, dann sind $\\frac34$ drei ihrer vier gleich großen Teile.",
    "topic": "B01"
  },
  {
    "term": "Vergleichen",
    "aliases": [
      "vergleichen",
      "verglichen"
    ],
    "definition": "Bei Zahlen feststellen, welche größer, kleiner oder gleich groß ist. Dabei müssen Größen gegebenenfalls zuerst in dieselbe Einheit umgerechnet werden.",
    "example": "$\\frac34>\\frac12$, weil $\\frac34>\\frac24$.",
    "topic": "B03"
  },
  {
    "term": "von",
    "aliases": [],
    "definition": "Bei einem Bruchanteil bedeutet von eine Multiplikation: Der Bruch wird mit der Bezugsgröße multipliziert.",
    "example": "$\\frac34$ von $20$ sind $\\frac34\\cdot20=15$.",
    "topic": "B06"
  },
  {
    "term": "Rest",
    "aliases": [
      "Reste"
    ],
    "definition": "Der Teil, der nach einer Entnahme oder Aufteilung übrig bleibt. Bei einer Division mit Rest ist er kleiner als der positive Divisor.",
    "example": "$17:5$ ergibt $3$ mit Rest $2$, denn $17=3\\cdot5+2$.",
    "topic": "B08"
  },
  {
    "term": "Rückwärtsrechnen",
    "aliases": [
      "rückwärts rechnen"
    ],
    "definition": "Von einem bekannten Endergebnis aus die Rechenschritte mithilfe passender Umkehroperationen rückgängig machen.",
    "example": "Sind $\\frac34$ einer Menge $12$, ist das Ganze $12:\\frac34=16$.",
    "topic": "B08"
  },
  {
    "term": "stellenrichtig",
    "aliases": [
      "stellenrichtige",
      "stellenrichtigen"
    ],
    "definition": "Beim schriftlichen Addieren oder Subtrahieren stehen gleiche Stellenwerte untereinander: Einer unter Einer, Zehntel unter Zehntel.",
    "example": "Bei $2{,}35+0{,}4$ wird $0{,}4$ als $0{,}40$ passend unter $2{,}35$ geschrieben.",
    "topic": "D02"
  },
  {
    "term": "Ordnung",
    "aliases": [
      "Anordnung"
    ],
    "definition": "Die Reihenfolge von Zahlen nach ihrer Größe. Auf der Zahlengeraden liegen kleinere Zahlen weiter links.",
    "example": "Es gilt $-5<-2<0<3$.",
    "topic": "R01"
  },
  {
    "term": "Anfangswert",
    "aliases": [
      "Anfangswerte"
    ],
    "definition": "Der Wert einer Größe vor der betrachteten Veränderung.",
    "example": "Steigt die Temperatur von $-2$ auf $5$ Grad Celsius, ist $-2$ der Anfangswert.",
    "topic": "R05"
  },
  {
    "term": "Endwert",
    "aliases": [
      "Endwerte"
    ],
    "definition": "Der Wert einer Größe nach der betrachteten Veränderung.",
    "example": "Bei Anfangswert $-2$ und Änderung $+7$ ist der Endwert $5$.",
    "topic": "R05"
  },
  {
    "term": "Änderung",
    "aliases": [
      "Änderungen",
      "Zuwachs"
    ],
    "definition": "Die Differenz aus Endwert und Anfangswert. Eine positive Änderung bedeutet Zunahme, eine negative Abnahme.",
    "example": "Von $-2$ auf $5$ ist die Änderung $5-(-2)=7$.",
    "topic": "R05"
  },
  {
    "term": "Jahresbezug",
    "aliases": [],
    "definition": "Eine Angabe bezieht sich auf die Dauer eines ganzen Jahres. Für andere Zeiträume muss geprüft werden, welche Berechnungsregel gilt.",
    "example": "$3\\,\\%$ Jahreszins auf $100$ Euro bedeutet $3$ Euro Zinsen für ein volles Jahr.",
    "topic": "P04"
  },
  {
    "term": "linke Seite",
    "aliases": [
      "linken Seite"
    ],
    "definition": "Bei einer Gleichung der gesamte Term links vom Gleichheitszeichen.",
    "example": "Bei $2x+1=7$ ist $2x+1$ die linke Seite.",
    "topic": "E01"
  },
  {
    "term": "rechte Seite",
    "aliases": [
      "rechten Seite"
    ],
    "definition": "Bei einer Gleichung der gesamte Term rechts vom Gleichheitszeichen.",
    "example": "Bei $2x+1=7$ ist $7$ die rechte Seite.",
    "topic": "E01"
  },
  {
    "term": "Bedingung",
    "aliases": [
      "Bedingungen"
    ],
    "definition": "Eine Voraussetzung, die erfüllt sein muss, damit ein Rechenschritt oder eine Aussage zulässig ist.",
    "example": "Beim Teilen durch $x$ muss die Bedingung $x\\ne0$ gelten.",
    "topic": "E04"
  },
  {
    "term": "Eingabe",
    "aliases": [
      "Eingaben",
      "Eingabewert"
    ],
    "definition": "Bei einer Funktion oder einem Rechenplan der eingesetzte Startwert. In der App kann Eingabe auch die eigene Antwort bezeichnen.",
    "example": "Bei $f(x)=2x+1$ führt die Eingabe $x=3$ zur Ausgabe $7$.",
    "topic": "F00"
  },
  {
    "term": "Ausgabe",
    "aliases": [
      "Ausgaben",
      "Ausgabewert"
    ],
    "definition": "Der Wert, den eine Zuordnung oder ein Rechenplan zu einer Eingabe liefert.",
    "example": "Bei $f(x)=2x+1$ gehört zur Eingabe $3$ die Ausgabe $7$.",
    "topic": "F00"
  },
  {
    "term": "Regel",
    "aliases": [
      "Regeln",
      "Zuordnungsregel"
    ],
    "definition": "Eine Vorschrift, die beschreibt, wie ein Wert bestimmt wird oder welche mathematische Beziehung gilt.",
    "example": "Die Regel $y=2x$ bedeutet: Verdopple die Eingabe.",
    "topic": "F00"
  },
  {
    "term": "Tabelle",
    "aliases": [
      "Tabellen"
    ],
    "definition": "Eine geordnete Darstellung von Informationen in Zeilen und Spalten. Zusammengehörige Werte stehen passend beieinander.",
    "example": "Eine Wertetabelle zu $y=2x$ kann die Paare $(1;2)$ und $(2;4)$ enthalten.",
    "topic": "F03"
  },
  {
    "term": "Stelle",
    "aliases": [
      "Stellen"
    ],
    "definition": "Bei Funktionen meint eine Stelle einen Eingabewert x. Bei Zahlen bezeichnet eine Stelle eine Position im Stellenwertsystem.",
    "example": "Die Stelle $x=3$ ist bei $f(x)=x-3$ eine Nullstelle; der zugehörige Punkt ist $(3;0)$.",
    "topic": "F05"
  },
  {
    "term": "Punkt",
    "aliases": [
      "Punkte",
      "Punkten"
    ],
    "definition": "In der Geometrie eine genaue Position ohne Ausdehnung. Im Koordinatensystem wird sie durch Koordinaten beschrieben.",
    "example": "$P(2;3)$ liegt $2$ Einheiten rechts und $3$ Einheiten oberhalb des Ursprungs.",
    "topic": "G03"
  },
  {
    "term": "Annahme",
    "aliases": [
      "Annahmen"
    ],
    "definition": "Eine Voraussetzung, die man für eine Rechnung oder ein Modell festlegt. Das Ergebnis gilt nur, soweit diese Voraussetzung passt.",
    "example": "Bei einem Modell für gemeinsames Arbeiten kann angenommen werden, dass alle gleich schnell arbeiten.",
    "topic": "F08"
  },
  {
    "term": "Grundgebühr",
    "aliases": [
      "Grundgebühren"
    ],
    "definition": "Ein fester Preisanteil, der unabhängig von der betrachteten Nutzungsmenge anfällt.",
    "example": "In $K(x)=2x+5$ Euro sind $5$ Euro die Grundgebühr.",
    "topic": "F08"
  },
  {
    "term": "Abweichung",
    "aliases": [
      "Abweichungen"
    ],
    "definition": "Der Unterschied zwischen einem beobachteten Wert und einem Vergleichs- oder Modellwert.",
    "example": "Bei Messwert $5{,}2$ und Modellwert $5$ beträgt die Abweichung $0{,}2$.",
    "topic": "F09"
  },
  {
    "term": "Abstand",
    "aliases": [
      "Abstände",
      "Abständen"
    ],
    "definition": "Die Länge der kürzesten Verbindung zwischen den betrachteten geometrischen Objekten.",
    "example": "Der Abstand von $(1;2)$ zu $(4;2)$ ist $3$ Längeneinheiten.",
    "topic": "G03"
  },
  {
    "term": "verdeckte Kante",
    "aliases": [
      "verdeckte Kanten",
      "verdeckt"
    ],
    "definition": "Eine Kante eines Körpers, die von der gewählten Blickrichtung aus nicht direkt sichtbar ist. Im Schrägbild wird sie oft gestrichelt gezeichnet.",
    "example": "Die hintere untere Kante eines Quaders kann im Schrägbild verdeckt sein.",
    "topic": "G09"
  },
  {
    "term": "Begründung",
    "aliases": [
      "Begründungen",
      "begründen"
    ],
    "definition": "Eine Erklärung mit passenden Regeln, Eigenschaften oder Rechnungen, warum eine Aussage gilt.",
    "example": "Zwei Scheitelwinkel sind gleich groß, weil beide denselben Nebenwinkel zu $180^\\circ$ ergänzen.",
    "topic": "G10"
  },
  {
    "term": "Stunde",
    "aliases": [
      "Stunden"
    ],
    "definition": "Eine Zeiteinheit. Eine Stunde besteht aus 60 Minuten.",
    "example": "$1{,}5$ Stunden sind $90$ Minuten, nicht $150$ Minuten.",
    "topic": "M01"
  },
  {
    "term": "Minute",
    "aliases": [
      "Minuten"
    ],
    "definition": "Eine Zeiteinheit. Eine Minute besteht aus 60 Sekunden und ist der sechzigste Teil einer Stunde.",
    "example": "$30$ Minuten entsprechen $0{,}5$ Stunden.",
    "topic": "M01"
  },
  {
    "term": "Zerlegen",
    "aliases": [
      "zerlegt",
      "Zerlegung"
    ],
    "definition": "Eine Figur in einfachere Teilfiguren ohne Überlappung aufteilen, deren Flächeninhalte sich berechnen und addieren lassen.",
    "example": "Eine L-förmige Fläche lässt sich oft in zwei Rechtecke zerlegen.",
    "topic": "M03"
  },
  {
    "term": "Ergänzen",
    "aliases": [
      "ergänzt",
      "Ergänzung"
    ],
    "definition": "Bei Flächenberechnungen eine Figur zu einer einfacheren Figur vervollständigen und die zusätzlich eingefügte Fläche anschließend wieder abziehen.",
    "example": "Eine ausgeschnittene Ecke wird rechnerisch ergänzt: Gesamt-Rechteck minus fehlendes kleines Rechteck.",
    "topic": "M03"
  },
  {
    "term": "offener Behälter",
    "aliases": [
      "offene Behälter",
      "offenen Behälter"
    ],
    "definition": "Ein Behälter ohne Deckfläche. Bei der Berechnung des benötigten Materials wird die Öffnung nicht als feste Fläche mitgezählt.",
    "example": "Eine offene würfelförmige Schachtel hat fünf statt sechs quadratische Materialflächen.",
    "topic": "M04"
  },
  {
    "term": "Zeichnung",
    "aliases": [
      "Zeichnungen"
    ],
    "definition": "Eine bildliche Darstellung einer Figur oder Situation. Nur bei maßstäblicher Darstellung lassen sich Längen mit dem Maßstab zuverlässig übertragen.",
    "example": "Bei $1:100$ werden $3$ m Wirklichkeit als $3$ cm in der Zeichnung dargestellt.",
    "topic": "M07"
  },
  {
    "term": "Wirklichkeit",
    "aliases": [
      "wirkliche Länge"
    ],
    "definition": "Beim Maßstab die tatsächliche Größe eines Gegenstands außerhalb seiner verkleinerten oder vergrößerten Darstellung.",
    "example": "$2$ cm in einer Zeichnung im Maßstab $1:100$ entsprechen $2$ m in Wirklichkeit.",
    "topic": "M07"
  },
  {
    "term": "Schätzen",
    "aliases": [
      "geschätzt",
      "Schätzung"
    ],
    "definition": "Einen ungefähren Wert mithilfe von Erfahrungen, Vergleichsgrößen oder einer vereinfachten Rechnung bestimmen.",
    "example": "Ist ein Tisch ungefähr doppelt so lang wie ein Meterstab, schätzt man seine Länge auf etwa $2$ m.",
    "topic": "M08"
  },
  {
    "term": "Vergleichsgröße",
    "aliases": [
      "Vergleichsgrößen"
    ],
    "definition": "Eine bekannte Größe, die als Orientierung für das Schätzen oder Prüfen einer unbekannten Größe dient.",
    "example": "Die Länge eines $30$-cm-Lineals kann helfen, die Breite eines Tisches zu schätzen.",
    "topic": "M08"
  },
  {
    "term": "Fragestellung",
    "aliases": [
      "Fragestellungen"
    ],
    "definition": "Die möglichst genaue Frage, die mit einer Untersuchung beantwortet werden soll. Sie legt fest, welche Daten gebraucht werden.",
    "example": "Wie viele Minuten brauchen die Lernenden unserer Klasse für den Schulweg? ist genauer als Wie ist der Schulweg?",
    "topic": "S01"
  },
  {
    "term": "neutrale Frage",
    "aliases": [
      "neutrale Fragen",
      "neutral"
    ],
    "definition": "Eine Frage, die keine bestimmte Antwort nahelegt und Befragte nicht in eine Richtung drängt.",
    "example": "Welches Verkehrsmittel nutzt du? ist neutraler als Fährst du nicht auch am liebsten Fahrrad?",
    "topic": "S01"
  },
  {
    "term": "Gesamtzahl",
    "aliases": [
      "Gesamtanzahl"
    ],
    "definition": "Die Anzahl aller betrachteten Beobachtungen oder Elemente. Sie bildet den Nenner beim Berechnen relativer Häufigkeiten.",
    "example": "Bei $5$ Treffern in $20$ Versuchen ist die Gesamtzahl $20$.",
    "topic": "S02"
  },
  {
    "term": "fehlender Wert",
    "aliases": [
      "fehlende Werte",
      "fehlenden Wert"
    ],
    "definition": "Ein noch unbekannter Datenwert, der manchmal aus anderen Werten und einem Kennwert bestimmt werden kann.",
    "example": "Drei Werte haben Mittelwert $5$, zwei lauten $3$ und $4$. Der dritte ist $3\\cdot5-3-4=8$.",
    "topic": "S04"
  },
  {
    "term": "Informationsverlust",
    "aliases": [],
    "definition": "Beim Zusammenfassen von Daten durch wenige Kennwerte gehen Einzelheiten über die ursprünglichen Daten verloren.",
    "example": "Der Mittelwert $5$ verrät nicht, ob die Daten $4;5;6$ oder $0;5;10$ waren.",
    "topic": "S05"
  },
  {
    "term": "sicher",
    "aliases": [],
    "definition": "In der Wahrscheinlichkeitsrechnung bedeutet sicher, dass ein Ereignis im betrachteten Modell bei jedem möglichen Ergebnis eintritt.",
    "example": "Ein gewöhnlicher Würfel zeigt sicher eine Zahl kleiner als $7$.",
    "topic": "W01"
  },
  {
    "term": "unmöglich",
    "aliases": [],
    "definition": "In der Wahrscheinlichkeitsrechnung kann ein unmögliches Ereignis unter den festgelegten Versuchsbedingungen nicht eintreten.",
    "example": "Ein gewöhnlicher Würfel kann keine Augenzahl $8$ zeigen.",
    "topic": "W01"
  },
  {
    "term": "gleich wahrscheinlich",
    "aliases": [
      "gleichwahrscheinlich"
    ],
    "definition": "Ereignisse oder Ergebnisse haben dieselbe Wahrscheinlichkeit. Das folgt aus dem Modell, nicht allein daraus, dass es mehrere Möglichkeiten gibt.",
    "example": "Bei einer fairen Münze sind Kopf und Zahl gleich wahrscheinlich, jeweils mit $\\frac12$.",
    "topic": "W02"
  },
  {
    "term": "günstig",
    "aliases": [],
    "definition": "In einer Wahrscheinlichkeitsaufgabe bedeutet günstig, dass ein Ergebnis zum betrachteten Ereignis gehört.",
    "example": "Für das Ereignis Zahl größer als $4$ sind beim Würfeln die Ergebnisse $5$ und $6$ günstig.",
    "topic": "W02"
  },
  {
    "term": "Versuchszahl",
    "aliases": [
      "Versuchszahlen",
      "Anzahl der Versuche"
    ],
    "definition": "Die Anzahl der Wiederholungen eines Zufallsversuchs.",
    "example": "Bei $100$ Münzwürfen ist die Versuchszahl $100$; $48$-mal Kopf ergibt die relative Häufigkeit $\\frac{48}{100}$.",
    "topic": "W03"
  },
  {
    "term": "Stufe",
    "aliases": [
      "Stufen"
    ],
    "definition": "Im Baumdiagramm ein einzelner Schritt eines mehrstufigen Zufallsversuchs.",
    "example": "Zweimaliges Ziehen wird in einem Baumdiagramm mit zwei Stufen dargestellt.",
    "topic": "W04"
  },
  {
    "term": "genau",
    "aliases": [],
    "definition": "Bei Anzahlen in Ereignissen bedeutet genau, dass nur die genannte Anzahl erlaubt ist, weder mehr noch weniger.",
    "example": "Genau zweimal Kopf bei drei Würfen erlaubt Kopf–Kopf–Zahl, aber nicht Kopf–Kopf–Kopf.",
    "topic": "W05"
  },
  {
    "term": "Versuchsregel",
    "aliases": [
      "Versuchsregeln"
    ],
    "definition": "Die festgelegte Beschreibung, wie ein Versuch abläuft und welche Ergebnisse gezählt werden.",
    "example": "Zweimal ziehen ohne Zurücklegen ist eine andere Versuchsregel als zweimal ziehen mit Zurücklegen.",
    "topic": "W06"
  },
  {
    "term": "Zweigsumme",
    "aliases": [
      "Zweigsummen"
    ],
    "definition": "Die Summe der Wahrscheinlichkeiten aller möglichen Zweige, die von demselben Knoten ausgehen. Sie beträgt 1.",
    "example": "Gehen von einem Knoten Rot mit $\\frac35$ und Blau mit $\\frac25$ ab, ist ihre Summe $1$.",
    "topic": "W04"
  },
  {
    "term": "Fläche",
    "aliases": [
      "Flächen"
    ],
    "definition": "Ein zweidimensionaler Bereich, zum Beispiel das Innere eines Rechtecks oder eine Seitenfläche eines Körpers. Seine Größe wird durch den Flächeninhalt gemessen.",
    "example": "Ein Würfel hat sechs quadratische Flächen. Jede kann zum Beispiel den Flächeninhalt $4\\,\\mathrm{cm}^2$ haben.",
    "topic": "M03"
  },
  {
    "term": "Hypotenuse",
    "aliases": [
      "Hypotenusen"
    ],
    "definition": "Die Seite eines rechtwinkligen Dreiecks, die dem rechten Winkel gegenüberliegt. Sie ist dessen längste Seite.",
    "example": "In einem rechtwinkligen Dreieck mit den Seitenlängen 3 cm, 4 cm und 5 cm ist die 5 cm lange Seite die Hypotenuse.",
    "topic": null
  },
  {
    "term": "Kathete",
    "aliases": [
      "Katheten"
    ],
    "definition": "Eine der beiden Seiten eines rechtwinkligen Dreiecks, die den rechten Winkel bilden.",
    "example": "In einem rechtwinkligen Dreieck mit Seitenlängen 3 cm, 4 cm und 5 cm sind die 3 cm und 4 cm langen Seiten die Katheten.",
    "topic": null
  },
  {
    "term": "Funktionsgraph",
    "aliases": [
      "Funktionsgraphen",
      "Funktionsgraphes"
    ],
    "definition": "Die Menge aller Punkte, deren Koordinaten zusammen zur Funktion passen. Im Koordinatensystem zeigt der Graph, welche Ausgabe zu welcher Eingabe gehört.",
    "example": "Zur Funktion $y=2x$ gehört der Punkt $(3\\mid6)$, weil $2\\cdot3=6$ gilt.",
    "topic": "F03"
  },
  {
    "term": "Parameter",
    "aliases": [
      "Parametern",
      "Parameters"
    ],
    "definition": "Eine einstellbare Zahl in einer Formel. Wenn du den Parameter änderst, erhältst du eine andere Regel derselben Art.",
    "example": "In $y=mx+1$ ist m ein Parameter: Für $m=2$ gilt $y=2x+1$, für $m=3$ gilt $y=3x+1$.",
    "topic": "F02"
  },
  {
    "term": "Ungleichung",
    "aliases": [
      "Ungleichungen"
    ],
    "definition": "Eine Aussage, die zwei Zahlen oder Terme mit einem Zeichen wie kleiner als oder größer als vergleicht. Gesucht werden oft die Werte, für die sie stimmt.",
    "example": "Die Ungleichung $x+2<5$ stimmt genau für $x<3$.",
    "topic": null
  },
  {
    "term": "Identität",
    "aliases": [
      "Identitäten"
    ],
    "definition": "Eine Gleichung, die für alle zugelassenen Werte der Variablen stimmt.",
    "example": "$2(x+1)=2x+2$ gilt für jede reelle Zahl x. Diese Gleichung ist eine Identität.",
    "topic": "E08"
  },
  {
    "term": "Zinseszins",
    "aliases": [
      "Zinseszinsen"
    ],
    "definition": "Zinsen auf früher gutgeschriebene Zinsen: Die Zinsen bleiben beim Kapital und werden in der nächsten Zeitspanne mitverzinst.",
    "example": "100 Euro wachsen bei 10 % Jahreszins zunächst auf 110 Euro. Im zweiten Jahr ergeben 10 % von 110 Euro weitere 11 Euro Zinsen.",
    "topic": "P04"
  },
  {
    "term": "Stichprobengröße",
    "aliases": [
      "Stichprobengrößen"
    ],
    "definition": "Die Anzahl der Personen oder Beobachtungen in einer Stichprobe. Eine große Stichprobe ist nicht automatisch passend ausgewählt.",
    "example": "Du befragst 40 Schülerinnen und Schüler. Die Stichprobengröße ist 40.",
    "topic": "S01"
  },
  {
    "term": "Achsenbruch",
    "aliases": [
      "Achsenbruchs",
      "Achsenbrüche",
      "Achsenbrüchen"
    ],
    "definition": "Eine markierte Unterbrechung einer Diagrammachse. Sie zeigt, dass ein Abschnitt der Skala ausgelassen wird. Dadurch können Unterschiede größer wirken.",
    "example": "Eine Achse überspringt den Bereich von 0 bis 90 und zeigt erst 90 bis 100. Der Unterschied zwischen 95 und 100 wirkt dann leicht besonders groß.",
    "topic": "S03"
  },
  {
    "term": "Bruchstrich",
    "aliases": [
      "Bruchstriche",
      "Bruchstrichs"
    ],
    "definition": "Der Strich zwischen Zähler und Nenner. Er bedeutet Division und fasst den ganzen Zähler und den ganzen Nenner jeweils zusammen.",
    "example": "$\\frac{2+4}{3}$ bedeutet $(2+4):3=2$.",
    "topic": "B01"
  },
  {
    "term": "Bruchteil",
    "aliases": [
      "Bruchteile",
      "Bruchteilen",
      "Bruchteils"
    ],
    "definition": "Ein mit einem Bruch angegebener Anteil eines Ganzen. Für seine Größe musst du wissen, was das Ganze ist.",
    "example": "Ein Viertel von 12 Plättchen sind 3 Plättchen: $\\frac14\\cdot12=3$.",
    "topic": "B01"
  },
  {
    "term": "Nachkommastelle",
    "aliases": [
      "Nachkommastellen",
      "Dezimalstelle",
      "Dezimalstellen"
    ],
    "definition": "Eine Stelle rechts vom Komma. Die erste steht für Zehntel, die zweite für Hundertstel, die dritte für Tausendstel.",
    "example": "In 2,47 steht die 4 an der ersten Nachkommastelle und bedeutet vier Zehntel.",
    "topic": "D01"
  },
  {
    "term": "Rundungsstelle",
    "aliases": [
      "Rundungsstellen"
    ],
    "definition": "Die Stelle, auf deren Genauigkeit eine Zahl gerundet werden soll. Die unmittelbar nächste Stelle entscheidet über Auf- oder Abrunden.",
    "example": "Beim Runden von 3,47 auf Zehntel ist die Zehntelstelle die Rundungsstelle. Die 7 dahinter führt zu 3,5.",
    "topic": "N01"
  },
  {
    "term": "Näherungswert",
    "aliases": [
      "Näherungswerte",
      "Näherungswerten",
      "Näherungswertes"
    ],
    "definition": "Eine Zahl, die einem genauen Wert nahekommt, aber nicht unbedingt mit ihm übereinstimmt. Dafür verwendet man das Zeichen ungefähr gleich.",
    "example": "3,14 ist ein Näherungswert für die Kreiszahl: $\\pi\\approx3{,}14$.",
    "topic": "N01"
  },
  {
    "term": "Änderungsrate",
    "aliases": [
      "Änderungsraten"
    ],
    "definition": "Die Änderung einer Größe je Einheit einer anderen Größe. Bei einer linearen Funktion ist diese Rate überall gleich und entspricht der Steigung.",
    "example": "Ein Wasserstand steigt in 2 Minuten um 6 cm. Seine durchschnittliche Änderungsrate beträgt 3 cm pro Minute.",
    "topic": "F02"
  },
  {
    "term": "Innenwinkel",
    "aliases": [
      "Innenwinkeln",
      "Innenwinkels"
    ],
    "definition": "Ein Winkel innerhalb einer Figur zwischen zwei benachbarten Seiten.",
    "example": "Die drei Innenwinkel eines Dreiecks können 50°, 60° und 70° sein; zusammen ergeben sie 180°.",
    "topic": "G02"
  },
  {
    "term": "Außenwinkel",
    "aliases": [
      "Außenwinkeln",
      "Außenwinkels"
    ],
    "definition": "Bei einem konvexen Vieleck: der Winkel zwischen einer Seite und der Verlängerung ihrer Nachbarseite. Er ergänzt den angrenzenden Innenwinkel zu 180°.",
    "example": "Zu einem Innenwinkel von 70° gehört ein angrenzender Außenwinkel von 110°.",
    "topic": "G02"
  },
  {
    "term": "Diagonale",
    "aliases": [
      "Diagonalen"
    ],
    "definition": "Eine Strecke zwischen zwei Ecken einer Figur, die nicht durch eine Seite direkt benachbart sind.",
    "example": "In einem Rechteck verbindet eine Diagonale die linke untere mit der rechten oberen Ecke.",
    "topic": "G01"
  },
  {
    "term": "Tangente",
    "aliases": [
      "Tangenten"
    ],
    "definition": "Eine Gerade, die einen Kreis in genau einem Punkt berührt. Dort steht sie senkrecht auf dem Radius zum Berührpunkt.",
    "example": "Berührt eine waagerechte Gerade einen Kreis ganz unten, steht der Radius zu diesem Berührpunkt senkrecht nach unten.",
    "topic": null
  },
  {
    "term": "Höhenschnittpunkt",
    "aliases": [
      "Höhenschnittpunkts",
      "Höhenschnittpunkte"
    ],
    "definition": "Der gemeinsame Schnittpunkt der drei Höhengeraden eines Dreiecks. Er kann innerhalb oder außerhalb des Dreiecks oder an einer Ecke liegen.",
    "example": "In einem rechtwinkligen Dreieck treffen sich die Höhengeraden an der Ecke mit dem rechten Winkel.",
    "topic": "G07"
  },
  {
    "term": "Umkreismittelpunkt",
    "aliases": [
      "Umkreismittelpunkts",
      "Umkreismittelpunkte"
    ],
    "definition": "Der Punkt, der von allen drei Ecken eines Dreiecks gleich weit entfernt ist. Du findest ihn am Schnittpunkt der Mittelsenkrechten.",
    "example": "In einem rechtwinkligen Dreieck liegt der Umkreismittelpunkt in der Mitte der Hypotenuse.",
    "topic": "G07"
  },
  {
    "term": "Deckfläche",
    "aliases": [
      "Deckflächen"
    ],
    "definition": "Bei einem Prisma die zur Grundfläche parallele, deckungsgleiche Fläche auf der anderen Seite des Körpers.",
    "example": "Bei einem aufrecht stehenden Quader kann der Boden die Grundfläche und die gleich große obere Rechteckfläche die Deckfläche sein.",
    "topic": "M06"
  },
  {
    "term": "Mantelfläche",
    "aliases": [
      "Mantelflächen",
      "Mantelflächeninhalt"
    ],
    "definition": "Die Seitenflächen eines Körpers zusammen, ohne Grundfläche und gegebenenfalls Deckfläche. Ihr Flächeninhalt heißt Mantelflächeninhalt.",
    "example": "Bei einem Quader mit quadratischer Grundfläche gehören die vier seitlichen Rechtecke zur Mantelfläche; Boden und Deckel gehören nicht dazu.",
    "topic": "M06"
  },
  {
    "term": "Pfadwahrscheinlichkeit",
    "aliases": [
      "Pfadwahrscheinlichkeiten"
    ],
    "definition": "Die Wahrscheinlichkeit für einen vollständigen Weg im Baumdiagramm. Du multiplizierst die Wahrscheinlichkeiten der Zweige entlang dieses Weges.",
    "example": "Bei zwei unabhängigen fairen Münzwürfen hat der Pfad Kopf–Kopf die Wahrscheinlichkeit $\\frac12\\cdot\\frac12=\\frac14$.",
    "topic": "W05"
  },
  {
    "term": "Zweigwahrscheinlichkeit",
    "aliases": [
      "Zweigwahrscheinlichkeiten"
    ],
    "definition": "Die Wahrscheinlichkeit an einem einzelnen Ast des Baumdiagramms. Sie gilt für den nächsten Schritt unter den Bedingungen, die bis zum aktuellen Knoten entstanden sind.",
    "example": "Nach einer roten Kugel bleiben ohne Zurücklegen noch 2 rote von 4 Kugeln. Der folgende rote Zweig hat die Wahrscheinlichkeit $\\frac24$.",
    "topic": "W04"
  },
  {
    "term": "Unabhängigkeit",
    "aliases": [
      "unabhängige Ereignisse",
      "unabhängigen Ereignissen",
      "unabhängiger Ereignisse"
    ],
    "definition": "Zwei Ereignisse sind unabhängig, wenn das Eintreten des einen die Wahrscheinlichkeit des anderen nicht verändert.",
    "example": "Bei zwei unabhängigen fairen Münzwürfen bleibt die Chance auf Kopf beim zweiten Wurf $\\frac12$, auch wenn der erste Wurf Kopf war.",
    "topic": "W03"
  },
  {
    "term": "Maßzahl",
    "aliases": [
      "Maßzahlen"
    ],
    "definition": "Die Zahl in einer Größenangabe. Zusammen mit der Einheit sagt sie, wie groß etwas ist.",
    "example": "Bei 5 cm ist 5 die Maßzahl und cm die Einheit. Dieselbe Länge ist 50 mm; dann ist die Maßzahl 50.",
    "topic": "M01"
  },
  {
    "term": "Symmetrieachse",
    "aliases": [
      "Symmetrieachsen"
    ],
    "definition": "Eine Gerade, an der du eine Figur spiegeln kannst, sodass sie genau auf sich selbst passt.",
    "example": "Ein nicht quadratisches Rechteck besitzt zwei Symmetrieachsen durch die Mittelpunkte gegenüberliegender Seiten.",
    "topic": null
  }
];
