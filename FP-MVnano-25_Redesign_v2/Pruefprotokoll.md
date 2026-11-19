# Prüfprotokoll: Redesign Datenblatt FP-MVnano-25 (v2)

**Original:** `Datenblätter 1/FP-MVnano-25_Datasheet.pdf` (Date 24.03.2026, Rev 0, 2 Seiten)
**Neu:** `FP-MVnano-25_Datasheet_BLAU.pdf` (11 Seiten, A4, Vektorschrift Inter, Bilder eingebettet)
**Ergänzungsquellen (auf Wunsch, Stand 09.11.2026):**
- **LC:** `Datenblätter 1/flexpoint-mvnano-machine-vision-laser-2025.pdf` (11/24 / V2). Daraus stammen die Produktfotos (S. 1), der englische Einleitungstext, Features und Applications (S. 1), Zusatzdaten (S. 2), Fokus-Diagramme, Faktortabelle und Abkürzungen (S. 3), Modulation (S. 4–5), technische Zeichnungen (S. 6–8) und Ordering Code (S. 9).
- **WEB:** blauoptoelektronik.de/produkte/1. Daraus stammen der deutsche Produkttext und die Gehäuse-Optionen.

**Regel bei Widersprüchen:** Es gelten die **LC-Werte** (Entscheidung vom 09.11.2026: „LC-Werte stimmen“). Damit wurden 6 Werte im Blau-Inhalt angepasst, siehe Abschnitt 5a.
**Stilreferenzen (nur Gestaltung):** lasercomponents.com/de/produkt/flexpointr-mvnano, blauoptoelektronik.de/produkte/1

---

## 1. Analyse des Originals

| Seite | Inhalt |
|---|---|
| 1 | Titel „Datasheet/ Datenblatt“ + BLAU-Logo · Order number / Module · **Basic properties** (9 Zeilen) · **Beam properties** (8 Zeilen) · Firmenblock · Date / Rev / page 1 of 2 |
| 2 | **Mechanical properties** (4 Zeilen) · leerer blauer Balken · ca. 70 % Leerfläche · Date / Rev / page 2 of 2 |

Das Blau-Datenblatt enthält keine Produktfotos, Diagramme oder Zeichnungen. Das einzige Bild ist das Logo.

**Schwachstellen der bisherigen Darstellung**
- Es gibt keine Titelseite, kein Produktbild und keine Hervorhebung der Kernwerte.
- EN- und DE-Label stehen in einer Zeile. Dadurch sind die Labels lang und schwer zu überfliegen.
- Die Wellenlängen-/Leistungs-Kombinationen stehen als Fließtext in einer Zelle. Werte werden mitten im Text umbrochen („785nm (1-↵100mW)“).
- Unterstrichene Balkenüberschriften wirken wie ein Formular.
- Seite 2 ist zu etwa 70 % leer und hat einen funktionslosen blauen Balken.

## 2. Neuer Aufbau

| Seite | Inhalt |
|---|---|
| 1 Titel | Aufbau wie LC-Datenblatt S. 1: Produktname, Beam profile, **3 Original-Produktfotos**, Überschrift + englischer Einleitungstext (LC), FEATURES und APPLICATIONS (LC) |
| 2 | **Product overview / Produktbeschreibung:** DE-Text (WEB), 5 Kennwert-Kacheln, Wellenlängen-Chips, Order number / Module |
| 3 | 01 Basic properties (Tabelle mit Icons) + Balkendiagramm Wellenlänge × Ausgangsleistung |
| 4 | 02 Beam properties (Tabelle) + Öffnungswinkel (geometrisch exakt) + Schema Homogenität + Liniendicken-Optionen |
| 5 | **03 Focus Options** (LC): 2 Original-Diagramme LT/DOF bei 660 nm, Fokus-Faktortabelle (15 Zeilen, Referenz 660 nm / STD rot), Abkürzungen |
| 6 | Focussing range, Fixed/adjustable focus, Liniendicken DLSE … TS2 + **04 Modulation Options** (LC): 2 Original-Kurven, Tabelle M/MI/D/DI |
| 7 | 04 Modulation: Original-Kombinationstabelle (LC S. 5) mit Legende a–e |
| 8 | 05 Mechanical properties (Tabelle) + Schema Kabel/Anschlussbelegung + **Additional information** (LC: Shock tolerance, Housing, Accessories, Fußnoten 1–5) |
| 9 | **06 Technical drawing** (LC): ST-F (54 ±1) und 2H-F (29 ±1 / 38 ±1) |
| 10 | Technical drawing ST-FIX (60 ±1) + Fußnote Clamping Area + Gehäuse Optionen ST/OH/2H (WEB) |
| 11 | **07 Ordering code** (LC, als Grafik neu gesetzt) + Kontaktblock mit vollständigem Firmenblock |

Die Tabellen auf S. 3, 4 und 8 geben alle Texte des Blau-Datenblatts vollständig und maßgeblich wieder. Die Seiten 1–2, 5–7 und 9–11 sowie der Block „Additional information“ ergänzen Inhalte aus LC und WEB im exakten Wortlaut.

Die Diagramme, die Modulations-Kombinationstabelle und die Maßzeichnungen sind hochaufgelöste Ausschnitte (4-fache Auflösung) der LC-Originale. Sie wurden nicht neu gezeichnet; alle Maße und Toleranzen sind damit unverändert.

## 3. Inhaltsabgleich

`verify-content.ps1` prüft **85 Originalzeichenketten** zeichengenau gegen das neue Dokument. Dazu gehören alle Labels EN/DE, alle Werte, Normen, Firmendaten, Datum und Revision sowie die Original-Unicode-Zeichen μ (U+03BC), ≤, ±, Ø, × und °. Für die 5 freigegebenen Korrekturen aus Abschnitt 5 prüft das Skript die neue Schreibweise.

**Ergebnis: 85 / 85 gefunden, 0 Abweichungen.**

Zusätzlich prüft das Skript **65 ergänzte Zeichenketten** aus LC und WEB im exakten Wortlaut. Außerdem bestätigt es, dass keine der ersetzten Blau-Werte mehr vorkommen (635-640, 650-660, 850nm, -20° to +50°C, 0 - 10kHz, 405/520nm, ≤3mrad as option).

**Ergebnis: 65 / 65 gefunden, 0 Altwerte.**

Dazu kommen **26 Prüfungen der neu ergänzten LC-Tabellen**. Die Fokus-Faktortabelle wird dabei Zelle für Zelle (15 × 15) gegen die Textebene des LC-PDFs geprüft.

**Ergebnis: 26 / 26, 0 Abweichungen.**

Manuell geprüft:
- **Balkendiagramm:** Die Balken reichen exakt von 1 mW bis 100 / 75 / 80 / 100 / 100 / 40 / 100 / 80 / 40 mW.
- **Öffnungswinkel:** Der Halbwinkel ist jeweils Winkel/2 für alle 10 Werte.
- **Einheiten:** Es wurden keine Einheiten ergänzt. „Ø=11,5“ bleibt ohne „mm“, die Länge ist nur als „Length“ beschriftet.
- **Seite 2 (vorher/nachher):** Die Werte stimmen 1:1 mit dem Original-Rendering überein.

## 4. Reine Formatierungsentscheidungen

1. Die Schreibweise „EN/ DE“ wird gestalterisch aufgelöst: EN fett, DE grau darunter. Bei Kopf, Order number und Module bleibt „/ “ erhalten.
2. Der Doppelpunkt am Ende der Abschnittsüberschriften entfällt typografisch. „Wavelength stability:“ behält den Doppelpunkt wie im Original.
3. Die Seitenzählung lautet „page x of 11“ statt „of 2“, weil das neue Dokument 11 Seiten hat.
4. Das Original zeigt „UST-IDNR.“ sichtbar mit Zeilenumbruch. Übernommen wurde die sichtbare Schreibweise in einer Zeile.
5. Die selbst gezeichneten Grafiken auf S. 4 und 8 sind als „schematic · not to scale“ gekennzeichnet. Die Farben der Wellenlängen sind Näherungen; jeder Wert steht zusätzlich als Text daneben.
6. Die Produktfotos stammen aus dem LASER-COMPONENTS-PDF. Sie wurden nicht beschnitten, retuschiert oder umgefärbt. Für den weißen Bildhintergrund wird nur eine Multiplizieren-Überblendung verwendet.

## 5. Auffälligkeiten im Original

### Korrigiert (nach Freigabe am 09.11.2026)

| # | Stelle | Original | Neu |
|---|---|---|---|
| 1 | Pin definition (Tabelle + Schema) | „**Bronw**: +VDC“ | „**Brown**: +VDC“ |
| 2 | Label (Tabelle + Schema) | „Pin **defintion**“ | „Pin **definition**“ |
| 3 | Pointing stability | „pointing **stabillity**“ | „pointing **stability**“ |
| 4 | Label DE | „**Fokussabstand**“ | „**Fokusabstand**“ |
| 5 | Power stability | „…only for modules with driver **electro**“ (Satz und Klammer brechen ab) | „…driver **electronics)**“: sinngemäß ergänzt, bitte fachlich bestätigen |

`verify-content.ps1` prüft jetzt die korrigierten Fassungen. Außerdem stellt es sicher, dass keine der alten Schreibweisen mehr vorkommt.

### Weiterhin offen, nicht geändert

| # | Stelle | Original | Hinweis |
|---|---|---|---|
| 6 | Schreibweise | Dezimal-Komma und -Punkt gemischt (4,5-30V / 0.25nm/K / ±0,1%); „-10° to +50°C“ vs. „-20°C to +60°C“ | Vereinheitlichen? |
| 7 | Verweise | „see technical note“, „see product map“, „instruction manual“ | Diese Dokumente liegen nicht bei |
| 8 | Original S. 2 | Die Textebene enthält verdeckt „Line straightness/ Geradheit“ mit Wert „-“ im leeren blauen Balken | Nicht sichtbar, deshalb nicht übernommen |

## 5a. Widersprüche Blau ↔ LC: auf LC-Werte umgestellt (Entscheidung 09.11.2026)

| Stelle im Blau-Inhalt | Vorher (Blau) | Jetzt (LC) |
|---|---|---|
| Spectral range, Diagramm, Chips | 635-640nm / 650-660nm / 850nm | 640nm / 660nm / 845nm |
| Operating voltage | (405/520nm available with 5V electronics on request) | (405/450/520nm available with 5V electronics on request) |
| Operating temperature | -20° to +50°C | -10° to +50°C |
| Boresight deviation | ≤10 mrad (≤3mrad as option) | ≤10 mrad (≤3 or 5mrad as option) |
| Modulation digital | 0 - 10kHz | < 20kHz |

Die Formulierungen der Blau-Zeilen (Klammerzusätze usw.) bleiben erhalten. Ersetzt wurde nur der jeweilige Wert.

**Neu ergänzt aus LC:**
- Wavelength tolerance (typ.)
- Fußnote 2 (5 V StepUp)
- Fokus-Faktortabelle
- Modulationskurven und die Tabelle M/MI/D/DI
- Kombinationstabelle mit Legende a–e
- Ordering Code

**Unverändert aus Blau, weil es dazu keinen Widerspruch gibt:**
- -20°C to +60°C (Storage)
- < 200mA
- IP67
- Laserklasse

**Bitte prüfen:** Diese LC-Inhalte wurden wörtlich bzw. als Original-Ausschnitt übernommen, obwohl sie vermutlich fehlerhaft sind:
- Der Einleitungstext nennt „405 – 850 nm“.
- In der Kombinationstabelle steht bei 830 nm „1 – 180“ mW.
- In der Legende stehen die Tippfehler „respone“ und „indiactes“.

**Angepasst:** Im Ordering-Code-Text stehen die Seitenverweise jetzt auf die Seiten dieses Dokuments: „page 3“ statt „page 2“ und „page 7“ statt „page 5“.

## 5b. Detailanalyse LC-Datenblatt (9 Seiten, Stand 11/24 / V2)

Das LC-Datenblatt beschreibt dasselbe Produkt, das BLAU herstellt: FP-MVnano-25, Edition 2025.

### Seite für Seite: was ist im neuen Datenblatt?

| LC-Seite | Inhalt | Im neuen Datenblatt |
|---|---|---|
| 1 | Titel, 3 Produktfotos, Einleitung (3 Absätze), Features (6), Applications (5) | ✅ komplett, S. 1 |
| 2 | Spezifikationstabelle (14 Zeilen) | ⚠️ teilweise (Details unten) |
| 2 | Shock tolerance, Housing, Accessories, Connector | ✅ S. 6; Connector ist identisch mit Blau „Pin definition“ |
| 2 | Fußnoten 1–5 | ✅ 1, 3, 4, 5 · ❌ 2 (Widerspruch 5 V) |
| 3 | 2 Diagramme LT/DOF bei 660 nm | ✅ S. 5 |
| 3 | Fokus-Faktortabelle (15 Zeilen × 6 Optiken × LT/DOF) | ❌ enthält 845 / 640 / 660 |
| 3 | Abkürzungen DLSE … TS2, LT, DOF | ✅ S. 5 |
| 4 | Modulation: 2 Kurven + Tabelle M/MI/D/DI | ❌ < 20 kHz statt 0 - 10kHz |
| 5 | Kombinationstabelle Modulation (21 Zeilen × 8 Optionen) + Legende a–e | ❌ enthält 845 / 640 / 660 |
| 6 | Zeichnung ST-F (54 ±1) | ✅ S. 7 |
| 7 | Zeichnung 2H-F (29 ±1 / 38 ±1) | ✅ S. 7 |
| 8 | Zeichnung ST-FIX (60 ±1) | ✅ S. 8 |
| 9 | Ordering Code + Beispiel FP-MVnano-25-ST-785-50M-30-F-DL | ❌ enthält 845 / 640 / 660 |

### LC-Spezifikationstabelle (S. 2) im Vergleich mit dem Blau-Datenblatt

| Parameter | LC | Blau | Bewertung |
|---|---|---|---|
| Model | Line laser with uniform power distribution (FOV correction available) | laser line with uniform power distribution (thin lines, TS versions and FOV correction available) | ✅ gleich, Blau ausführlicher |
| Wavelength | 405, 450, 520, **640, 660**, 685, 785, 830, **845** | 405, 450, 520, **635-640, 650-660**, 685, 785, 830, **850** | ❌ Widerspruch |
| Wavelength tolerance | ±5 / ±10 je λ | – | ➕ nur LC, nicht übernommen (Spalten 640/845) |
| Wavelength drift | < 0.25 nm/°C | <0.25nm/K | ✅ gleich |
| Output power | 1–100 / 1–75 / 1–80 / 1–100 / 1–100 / 1–40 / 1–100 / 1–80 / 1–40 | identisch | ✅ |
| Power stability | ≤ 5 % at 25 °C (after warm up) | ≤5% at 25°C (after warm up …) | ✅ |
| Operating voltage | 10–30 (405/450/520), sonst 4.5–30 | 4,5-30V (10-30V for 405/450/520nm) | ✅ gleich |
| 5 V Option | 405, 450 **und 520** nm (»StepUp« 4.5–6 V) | **405/520nm** | ❌ Widerspruch (450 nm) |
| Operating temperature | **-10** to +50 °C | **-20°** to +50°C | ❌ Widerspruch |
| Storage temperature | – | -20°C to +60°C | ➕ nur Blau |
| Current consumption | – | < 200mA | ➕ nur Blau |
| Fan angle | 1 … 90 (10 Werte) | identisch | ✅ |
| Focussing range | 50 – 5000 mm | – | ➕ übernommen (S. 5) |
| Line intensity variation | ±20 (optional ±10), 80 % of the line | identisch | ✅ |
| Line straightness | ±0.1 (optional ±0.05) | ±0,1% ( ±0,05 as option) | ✅ |
| Pointing stability | ≤ 10 µrad/K | ≤10μrad/K | ✅ |
| Boresight deviation | ≤ 10 (optional **≤ 3 or 5**) | ≤10 mrad (**≤3mrad** as option) | ❌ Widerspruch (Option 5 mrad) |
| Modulation | digital **< 20 kHz**, 24 V Version | digital **0 - 10kHz**, on request 0-24V | ❌ Widerspruch (Frequenz) |
| IP-Schutz, Laserklasse | – | IP67, IEC/EN 60825-1 | ➕ nur Blau |

### Unstimmigkeiten innerhalb des LC-Datenblatts

1. Der Einleitungstext nennt „405 – 850 nm“, die Tabellen dagegen 845 nm.
2. In der Modulations-Kombinationstabelle (S. 5) steht bei 830 nm „1 – 180“ mW, überall sonst „1 – 80“ mW. Vermutlich ein Tippfehler.
3. Die Leistungsbereiche sind unterschiedlich aufgeteilt. Fokustabelle: 405 1–30 / 30–100, 640 1–20 / 21–30 / 31–100. Modulationstabelle: 405 1–25 / 25–100, 640 1–20 / 20–100.
4. Tippfehler auf S. 5: „respone“ und „indiactes“.
5. Der Ordering Code verweist auf „table on page 2 (possible combinations wavelength and output power)“. Auf S. 2 gibt es aber nur die Leistungsbereiche, keine Kombinationstabelle.

### Fazit

**Aktualisiert (Entscheidung 09.11.2026, „LC-Werte stimmen“):** Das LC-Datenblatt ist jetzt vollständig im neuen Datenblatt enthalten. Bei Widersprüchen gelten die LC-Werte (siehe 5a).

Die Tabelle „Seite für Seite“ oben zeigt den Stand vor dieser Entscheidung. Alle dort mit ❌ markierten Blöcke sind inzwischen übernommen.

## 6. Dateien

- `FP-MVnano-25_Datasheet_BLAU.pdf`: fertiges Datenblatt
- `FP-MVnano-25_Datasheet_BLAU.pptx`: **bearbeitbare Fassung** (PowerPoint, 11 A4-Folien). Alle Texte und Tabellen sind editierbar, alle Elemente frei verschiebbar. Prüfung mit `verify-content.ps1 -TextFile pptx-text-dump.txt`: 85/85, 65/65, 26/26.
- `build-pptx.ps1`: erzeugt die PowerPoint-Datei neu (überschreibt manuelle Änderungen!)
- `FP-MVnano-25_Datasheet.html` + `assets/`: bearbeitbare Quelle
- `render-pdf.ps1`: erzeugt das PDF neu (Headless Chrome)
- `verify-content.ps1`: Inhaltsabgleich gegen das Original
