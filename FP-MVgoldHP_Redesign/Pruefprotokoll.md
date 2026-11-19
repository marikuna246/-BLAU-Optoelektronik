# Prüfprotokoll – Neugestaltung MVpulseHP & FP-MVgoldHP (Stand 12.11.2026)

## 1. Ergebnis

| Datei | Inhalt | Seiten |
|---|---|---|
| `MVpulseHP_Datasheet_EN.pdf` | MVpulseHP, Englisch | 11 |
| `MVpulseHP_Datenblatt_DE.pdf` | MVpulseHP, Deutsch | 11 |
| `FP-MVgoldHP_Datasheet_EN.pdf` | FP-MVgoldHP, Englisch | 4 |
| `FP-MVgoldHP_Datenblatt_DE.pdf` | FP-MVgoldHP, Deutsch | 4 |

Quellen bearbeitbar als `*.html` + `assets/` (Layout wie FP-MVpulse-25: `datasheet.css` + `extra.css`). Neu erzeugen: `render-pdf.ps1` (`-Shots` = Seitenvorschauen in `shots/`). DE-Fassungen entstehen aus EN + Übersetzungsliste `i18n/*_de.txt` (`i18n/apply.ps1`).

## 2. Wichtigster Befund: zwei verschiedene Produkte

Die drei gelieferten PDFs beschreiben **zwei unterschiedliche Produkte**. Auf Wunsch wurden daher **zwei getrennte Datenblätter** erstellt, ohne Daten zu vermischen.

| | FP-MVgoldHP (BLAU-Datenblatt, 2 S., 03.07.2025, Rev 0) | MVpulseHP (LC-Datenblatt 03/25 V02, 7 S. + White Paper 09/24 V1, 5 S.) |
|---|---|---|
| Wellenlängen | 445 / 525 / **638** / 660 / 808 nm | 445 / 525 / 660 / 808 nm |
| Leistung | 445nm: 500mW - 2W · sonst 300mW - 1W | 445: 500 – 1000 mW · sonst 300 – 500 mW (Spitze) |
| Modulation | 0 Hz - 1 MHz, Tastgrad 0-100 % | ≤ 4 kHz, Tastgrad 0 – 10 % |
| Gehäuse | Ø48x146mm, M12-Stecker | Ø19 mm, ST-F / 2H-F, offene Litzen |
| Laserklasse | 3B/4 | 3B |

**Website blauoptoelektronik.de/produkte/11** zeigt das **MVpulseHP**, verlinkt aber `FP-MVgoldHP_Datasheet.pdf` (falsches Produkt). Außerdem nennt die Seite **520 nm** (Datenblätter: 525 nm) und in der Tabelle die Öffnungswinkel **1°, 20°, 90°**, die in keinem Datenblatt vorkommen. → Bitte durch BLAU klären; im Datenblatt steht jeweils der Wert der Quelle.

## 3. Inhaltskontrolle (`verify-content.ps1`, Ergebnis in `verify-result.txt`)

| Prüfung | Ergebnis |
|---|---|
| MVpulseHP EN ← LC-Datenblatt (82 Zahlenwerte) | alle vorhanden; 28 Werte (Diagrammachsen S. 3, Bemaßungen S. 5/6) stehen in den **unveränderten Originalgrafiken** |
| MVpulseHP EN ← White Paper (17 Zahlenwerte) | alle vorhanden |
| FP-MVgoldHP EN ← BLAU-Datenblatt (53 Zahlenwerte inkl. Firmenangaben) | alle vorhanden |
| DE gegen EN (Zahlenfolge identisch) | MVpulseHP 288 = 288, FP-MVgoldHP 198 = 198, **0 Abweichungen** |
| 40 kritische Wortlaute (Bestellbeispiel, Normen, Befehle, Bankdaten …) | alle wörtlich vorhanden |

Zusätzlich wurde jede Seite aller vier PDFs visuell geprüft (kein Überlauf, Seitenzahl korrekt).

### Seitenzuordnung MVpulseHP
| Neu | Quelle |
|---|---|
| S. 1 Titel, Produktfotos, Einleitung, Features, Applications | LC S. 1 (Originalfotos) |
| S. 2 Spezifikationen Wellenlänge, Leistungsdiagramm, Öffnungswinkel-Grafik, Pulsbetrieb | LC S. 2 |
| S. 3 Spezifikationen Fortsetzung + Fußnoten 1–5 | LC S. 2 |
| S. 4 Liniendicke/DOF (Originaldiagramme), Fokusoptionen, Faktortabelle | LC S. 3 |
| S. 5 Pulse and Monitor / Control Features (Originalgrafik), Pulse Control Features | LC S. 4, WP S. 1 |
| S. 6 Formeln, Abb. 1, Abb. 2 | WP S. 1–2 |
| S. 7 Elektronischer Schutz, Abb. 3, Klemmbereich, Kommunikation | WP S. 2–3 |
| S. 8 Befehlstabelle, Fokussiermechanismus, Installation | WP S. 4–5 |
| S. 9 / 10 Technische Zeichnungen ST-F / 2H-F (Original) | LC S. 5 / 6 |
| S. 11 Bestellschlüssel, Kontakt | LC S. 7, BLAU-Firmendaten |

### Seitenzuordnung FP-MVgoldHP
S. 1 Titel + Kennwerte · S. 2 Basic properties + Leistungsdiagramm · S. 3 Beam properties + Öffnungswinkel-Grafik · S. 4 Mechanical properties + Pinbelegung + Firmendaten (alles aus BLAU S. 1–2).

## 4. Was gestalterisch geändert wurde (keine Inhaltsänderung)
- Neue Visualisierungen ausschließlich aus Quelldaten: Leistungsbalken, maßstäbliche Öffnungswinkel-Fächer, Kennwert-Leiste, Wellenlängen-Chips, Pinbelegungs-Karten, Befehls-Chips.
- FP-MVgoldHP: Die Quelle enthält **kein Produktfoto**. Titelbild ist eine als solche gekennzeichnete **schematische Darstellung** auf Basis der Abmessung Ø48x146mm ±1mm (Gehäusefarbe/Anschlusslage nicht dargestellt, da nicht dokumentiert). → Echtes Produktfoto bitte nachliefern.
- MVpulseHP: Originalfotos aus dem LC-Datenblatt; deren Auflösung ist gering (454 × 454 px bzw. 738 × 364 px). Für den Druck hochaufgelöste Fotos empfohlen.
- LC-Kontaktliste, LC-Logo und „beyond borders“ ersetzt durch BLAU-Kontaktblock (Firmendaten aus dem FP-MVgoldHP-Datenblatt). Dokumentstände der Quellen auf S. 11 als „Inhaltliche Grundlage“ genannt.
- FP-MVgoldHP „445nm: 500mW - 2W |“: Der senkrechte Strich (Zeilentrenner) wurde durch einen Zeilenumbruch ersetzt.
- Formeln aus dem White Paper als Text gesetzt (gleicher Inhalt).

## 5. Auffälligkeiten in den Originalen – unverändert übernommen, bitte prüfen
1. FP-MVgoldHP: „Pin **defintion**“ (Tippfehler) und „**Fokussabstand**“ – EN unverändert; in DE steht die Originalbezeichnung „Anschlussbelegung“ bzw. „Fokussabstand“.
2. FP-MVgoldHP: „RS-232/RS-485“ und „RS-232/RS485“ (uneinheitlich) – unverändert.
3. FP-MVgoldHP S. 2: unsichtbarer Resttext „Line straightness/ Geradheit“ am Seitenkopf und ein leerer blauer Balken mit „-“ – nicht übernommen (kein Inhalt).
4. LC S. 4: „pulse **lenght**“ – EN unverändert.
5. White Paper: Befehle in Spalte 1 „get**I**dcurrent / get**I**dtemp“ (großes I), im Beispiel „#000get**l**dcurrent“ (kleines l); FP-MVgoldHP schreibt „getldcurrent“. – unverändert.
6. LC: 445 nm Spitzenleistung „500 – 1000“ (Spezifikation) vs. Bestellschlüssel „300 – 500 / 1000 (445 nm only)“; Modulation „active high“ (Spezifikation) vs. „MI | Digital Modulation inverted, active high“ – unverändert.
7. LC Bestellschlüssel: Spalte „Focus [mm]“ mit Wert „F“ – unverändert.

## 6. Übersetzung (DE)
- Übersetzt wurden nur Wörter. Zahlen, Toleranzen, Einheiten, Normen, Befehle und Bestellcodes sind identisch; Dezimalpunkte wie in der Quelle (z. B. 0.97, ±0.1). Einzige Ausnahme: Achsenbeschriftung „1,5W“ im neu gezeichneten Leistungsdiagramm (kein Quellwert).
- FP-MVgoldHP DE nutzt die deutschen Originalbezeichnungen des BLAU-Datenblatts.
- Originalgrafiken (Diagramme, Zeichnungen, Pulsschemata) haben englische Beschriftungen; in DE steht jeweils eine Legende darunter (z. B. „Clamping Area = Klemmbereich“).
