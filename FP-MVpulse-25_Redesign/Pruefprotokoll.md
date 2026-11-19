# Prüfprotokoll: Redesign Datenblatt FP-MVpulse-25

**Neu:** `FP-MVpulse-25_Datasheet_BLAU.pdf` (14 Seiten, A4, Vektorschrift Inter, Bilder eingebettet)

**Quellen (alle im Wortlaut übernommen):**

| Kürzel | Datei / Quelle | Rolle |
|---|---|---|
| **DS** | `FP-MVpulse-25_Datasheet.pdf` (BLAU, Date 12.02.2026, Rev 0, 2 Seiten) | maßgeblich, vollständig 1:1 |
| **LC** | `flexpoint-mvpulse-machine-vision-laser-2025.pdf` (LASER COMPONENTS, 01/26 / V8, 11 Seiten) | Ergänzung: Fotos, Texte, Diagramme, Zeichnungen, Ordering Code |
| **PC1 / PC2** | `FP-MVpulse-25_Pulse-control_1.pdf` / `_2.pdf` (je 1 Seite, reine Bild-PDFs) | Original-Grafiken, unverändert eingebettet |
| **WEB** | blauoptoelektronik.de/produkte/10 (Stand 12.11.2026) | deutscher Produkttext, Gehäuse-Optionen |

Stilreferenzen (nur Gestaltung): lasercomponents.com/de/produkt/flexpointr-mvpulse, Layout-System des FP-MVnano-25-Redesigns (BLAU-Farben Navy #003368 / Rot #E51837).

---

## 1. Analyse der Originale (Phase 1)

| Quelle | Seite | Inhalt |
|---|---|---|
| DS | 1 | Titel „Datasheet/ Datenblatt“ + Logo · Order number / Module · **Basic properties** (11 Zeilen) · **Beam properties** (8 Zeilen) · Firmenblock · Date / Rev / page 1 of 2 |
| DS | 2 | **Mechanical properties** (4 Zeilen) · leerer blauer Balken · ca. 70 % Leerfläche |
| LC | 1 | Titel, 2 Produktfotos, Einleitung (Überschrift + 3 Absätze), Features (4), Applications (4), Award-Logo |
| LC | 2 | Spezifikationstabelle (20 Zeilen, 5 Wellenlängen-Spalten) + Fußnoten 1–4 |
| LC | 3 | 2 Diagramme LT/DOF bei 660 nm, Text Focus Options, Faktortabelle (9 Zeilen × 15 Spalten), Abkürzungen |
| LC | 4 | Text Pulse and Monitor / Control Features, Visualisierung Pulsfaktoren, Kurve Pulse Increase Factor |
| LC | 5 | Tabelle Pulsfaktor 5x/4x/3x/2x, Text Pulskontrolle, Legende t<sub>m</sub>/t<sub>p</sub>, Diagramm Modulation/Laser Output |
| LC | 6–10 | 5 Maßzeichnungen: ST-F, ST-F-M12, ST-FIX, 2H-F, 2H-FIX |
| LC | 11 | Ordering Code + Beispiel, Product Changes and Liability, Ordering Information, Safety and Handling, RoHS |
| PC1 | 1 | Grafik Laserklassen-Grenzen / Pulsfaktor 4/3/2 mit Duty Cycle |
| PC2 | 1 | Grafik Modulation signal / Laser output mit t<sub>m,on</sub>, t<sub>p,on</sub> usw. |

**Schwachstellen des BLAU-Originals**
- Keine Titelseite, kein Produktbild, keine Hervorhebung der Kernwerte.
- EN- und DE-Label stehen in einer Zeile („Output power/ Ausgangsleistung“) – lang, schwer zu überfliegen.
- Lange Werteblöcke (Peak-Power-Faktoren, Housing size) als Fließtext ohne Gliederung.
- Unterstrichene Balkenüberschriften wirken wie ein Formular.
- Seite 2 ist zu ca. 70 % leer, mit funktionslosem blauem Balken.
- Pulse-Control-Grafiken liegen als zwei separate PDFs vor, ohne Bezug zum Datenblatt.

## 2. Neuer Aufbau

| Seite | Inhalt | Quelle |
|---|---|---|
| 1 | Titelseite: Produktname, **2 Original-Produktfotos**, Einleitung, Features, Applications | LC 1 |
| 2 | Produktbeschreibung (DE), 5 Kennwert-Kacheln, Wellenlängen-Chips, Gehäuse Optionen, Order number / Module | WEB, DS |
| 3 | **01 Basic properties** (Tabelle mit Icons) + Balkendiagramm Ausgangsleistung je Wellenlänge | DS |
| 4 | **02 Beam properties** + Öffnungswinkel (geometrisch exakt) + Schema Homogenität + Liniendicken | DS |
| 5 | **03 Specifications** als Matrix je Wellenlänge + Fußnoten 1–4 | LC 2 |
| 6 | **04 Pulse and Monitor / Control Features**: Text, Original-Visualisierung, Pulsfaktor-Tabelle | LC 4–5 |
| 7 | 04 Fortsetzung: Original-Kurve, Text Pulskontrolle, Legende, Original-Diagramm | LC 4–5 |
| 8 | 04 Pulse control: **PC1 und PC2** als Original-Grafiken | PC1, PC2 |
| 9 | **05 Focus Options**: 2 Original-Diagramme, Text, Faktortabelle (Referenz 660 nm / STD rot), Abkürzungen | LC 3 |
| 10 | **06 Mechanical properties** (Tabelle) + maßstäbliche Visualisierung Housing size + Schema Anschlussbelegung | DS |
| 11–13 | **07 Technical drawing**: 5 Original-Maßzeichnungen (isometrisch + Maßansicht), Fußnote Clamping Area | LC 6–10 |
| 13 | **08 Safety and Handling Information** + RoHS compliant | LC 11 |
| 14 | **09 Ordering code** (als Grafik neu gesetzt) + Kontaktblock mit vollständigem BLAU-Firmenblock | LC 11, DS |

Die Maßzeichnungen, Fokus-Diagramme, die Pulse-Visualisierung, die Pulskurve, das Modulationsdiagramm, PC1/PC2 und die Produktfotos sind hochaufgelöste Ausschnitte (4-fache Auflösung) der Originale. Sie wurden nicht neu gezeichnet, nicht retuschiert und nicht umgefärbt; alle Maße und Toleranzen bleiben damit unverändert.

Selbst erstellte Grafiken (nur aus vorhandenen Werten, keine neuen Daten): Balkendiagramm Ausgangsleistung (S. 3), Öffnungswinkel und Homogenitäts-Schema (S. 4), Housing-size-Visualisierung mit Originalmaßen (S. 10, Kabel verkürzt dargestellt), Anschluss-Schema (S. 10). Wellenlängenfarben sind Näherungen; jeder Wert steht zusätzlich als Text daneben.

## 3. Inhaltsabgleich (automatisch)

`verify-content.ps1` prüft zeichengenau gegen das neue Dokument (inkl. Original-Unicode-Zeichen μ U+03BC, ≤, ±, Ø, °, –, Δ, λ):

| Prüfung | Ergebnis |
|---|---|
| DS: alle Labels EN/DE, alle Werte, Normen, Firmendaten, Datum, Rev (3 Tippfehler in freigegebener Korrektur, siehe 6) | **90 / 90, 0 Abweichungen** |
| Alte Schreibweisen „Fokussabstand“, „defintion“, „stabillity“ | **nicht mehr vorhanden** |
| LC: alle übernommenen Texte, Tabellenwerte, Fußnoten, Zeichnungstitel, Ordering Code | **131 / 131, 0 Abweichungen** |
| WEB: deutscher Produkttext, Gehäuse-Optionen | **14 / 14, 0 Abweichungen** |
| Fokus-Faktortabelle Zelle für Zelle (9 × 15) gegen LC-Textebene | identisch (außer den freigegebenen P_out-Untergrenzen 10 mW, siehe 6) |
| LC-Spezifikationsmatrix: Spaltenzuordnung 450/520/640/660/785 | identisch |
| 18 Original-Bildausschnitte eingebettet (PC1 neu gezeichnet, siehe 6) | vollständig |
| Fachliche Korrekturen 4, 5, 7, 8, 9: alte Fassungen | **nicht mehr vorhanden** |

**Gesamt: 0 Probleme.**

Manuell geprüft:
- Balkendiagramm: Balken exakt von 10 mW bis 80 / 80 / 100 / 100 / 100 mW.
- Öffnungswinkel: Halbwinkel = Winkel/2 für alle 9 Werte (5° … 90°).
- Housing size: Längen/Durchmesser im Maßstab 1:1 zueinander (90, 36, 29, 58 mm; Ø19, Ø11,5).
- Seitenweise Sichtprüfung aller 14 Seiten: kein Text abgeschnitten, keine Überlappung mit der Fußzeile.

## 4. Reine Formatierungsentscheidungen

1. „EN/ DE“-Labels werden gestalterisch aufgelöst: EN fett, DE grau darunter. Bei Kopf, Order number und Module bleibt „/ “ erhalten.
2. Doppelpunkte am Ende der Abschnittsüberschriften („Basic properties/ Allgemeine Eigenschaften:“) entfallen typografisch.
3. Seitenzählung „page x of 14“ statt „of 2“.
4. „UST-IDNR.“ ist im Original sichtbar umbrochen („UST-↵IDNR.“), übernommen in einer Zeile.
5. Die LC-Spezifikationstabelle wurde als Matrix je Wellenlänge gesetzt; Werte, die im Original über mehrere Spalten gelten, sind als zusammengefasste Zelle markiert.
6. Die Fußnote „¹For optimal heat dissipation …“ steht einmal pro Zeichnungsseite statt einmal pro Zeichnung.

## 5. Bewusst nicht übernommen (bitte bestätigen)

| Inhalt | Quelle | Grund |
|---|---|---|
| LASER-COMPONENTS-Logo, Länderadressen, „beyond borders“, Dokumentnummer | LC alle Seiten | Fremdmarke / Firmendaten LC |
| Vision Systems Design „2021 Innovators Awards – Silver Honoree“ | LC 1 | Auszeichnung von LC, nicht von BLAU |
| PRODUCT CHANGES AND LIABILITY | LC 11 | rechtlicher Text im Namen von LASER COMPONENTS |
| ORDERING INFORMATION („Products can be ordered directly from LASER COMPONENTS …“) | LC 11 | verweist auf LC als Verkäufer |
| Website: „Alle Features“, FAQ, Tabellen „Wellenlänge & Leistung“ / „Liniendicke / Tiefenschärfe & Öffnungswinkel“ | WEB | Tippfehler bzw. Abweichungen zu den Datenblättern (siehe 6) |
| verdeckter Text auf DS S. 2 („Line straightness/ Geradheit“, Wert „-“ im blauen Balken) | DS 2 | im Original nicht sichtbar |

## 6. Auffälligkeiten in den Originalen

### Korrigiert (nach Freigabe am 12.11.2026)

| # | Stelle | Original | Neu |
|---|---|---|---|
| 1 | DS Beam properties, DE-Label (S. 4) | „Fokus**s**abstand“ | „Fokusabstand“ |
| 2 | DS Mechanical properties, Label (S. 10, Tabelle + Schema) | „Pin **defintion**“ | „Pin definition“ |
| 3 | Pointing stability, DS (S. 4) und LC (S. 5) | „improved pointing **stabillity** as option“ | „improved pointing stability as option“ |

### Fachlich entschieden (Auftrag 12.11.2026: „korrekte fachliche Entscheidungen, da BLAU das Produkt produziert“)

Regel: Das BLAU-Datenblatt (Hersteller) und die BLAU-Website gelten vor dem LC-Datenblatt (Vertrieb). Entschieden wurde nur, wo die Unterlagen selbst den richtigen Wert belegen.

| # | Stelle | Vorher | Jetzt | Beleg |
|---|---|---|---|---|
| 4 | PC1-Grafik (S. 8) | „continous wave“, „tbc“ | „continuous wave“, kein Platzhalter | Tippfehler / Entwurfsvermerk |
| 5 | PC1-Grafik (S. 8) | pulse length < **0.94** ms / < **3** ms | < **0.9** ms / < **2.9** ms | DS und LC nennen 0,9 / 2,9 ms. Die Duty Cycles der Grafik selbst bestätigen das: 0,9 / (0,9 + 2,7) = 25 %, 2,9 / (2,9 + 5,8) = 33 %, 15 / (15 + 15) = 50 %. Mit 0,94 bzw. 3 ms stimmen sie nicht. |
| 7 | Einleitung (S. 1) | fan angles (**1**–90°) | (**5**–90°) | DS, LC-Spezifikation, Ordering Code und Website: kleinster Winkel 5° |
| 8 | Ordering Code, Output Power (S. 14) | **1** – 80 / **1** – 100 | **10** – 80 / **10** – 100 | DS, LC-Spezifikation und Website („von 10 mW bis 100 mW“) |
| 9 | Ordering-Code-Beispiel (S. 14) | FP-MVpulse-ST-785-… | FP-MVpulse-**25**-ST-785-… | Der Code beginnt mit „FP-MVpulse-25“ |
| 8b | Fokus-Faktortabelle (S. 9), Spalte P_out | 450 / 520 „1 – 80“ · 640 „1 – 20“ · 660 „1 – 30“ · 785 „1 – 10“ | 450 / 520 „**10** – 80“ · 640 „**10** – 20“ · 660 „**10** – 30“ · 785 „**10**“ | Bestätigung durch BLAU (12.11.2026): „ab 10 mW“; deckt sich mit Specs und Website. Alle Faktoren unverändert. |
| 6 | Ordering Code, Laser Class (S. 14) | 1, 2, 3R · Beispiel „…-DL-**1**-2x“ | **2, 3R** · Beispiel „…-DL-**2**-2x“ | Bestätigung durch BLAU (12.11.2026): „nur 2 und 3R“; deckt sich mit LC „preset at factory to 2 or 3R“ |

**PC1 neu gezeichnet:** Die Grafik „FP-MVpulse-25_Pulse-control_1“ ist jetzt eine Vektorgrafik im BLAU-Stil. Die Pulse sind maßstäblich auf der Zeitachse 0–45 ms gezeichnet (Faktor 4: 0,9 ms an / 2,7 ms aus; Faktor 3: 2,9 / 5,8 ms; Faktor 2: 15 / 15 ms). Das Original liegt unverändert in `src/`.

`verify-content.ps1` prüft die neuen Werte und stellt sicher, dass keine der alten Fassungen mehr vorkommt.

### Weiterhin offen – Bestätigung durch BLAU nötig

| # | Stelle | Original | Warum nicht entschieden |
|---|---|---|---|
| 10 | Modulation | DS: „0 - 20 kHz … higher frequencies on request“ · LC: „(0 – 1 MHz on request)“ | Formulierung unterschiedlich |
| 11 | Safety (LC) | „emit highly concentrated non visible infrared light“ | 450–660 nm sind sichtbar; Sicherheitstext sollte BLAU selbst formulieren |
| 12 | Schreibweise | „Aluminum“ (DS) vs. „Aluminium“ (LC); Dezimal-Komma (DS) vs. -Punkt (LC) | beides im Wortlaut belassen |
| 13 | Verweise | „see instruction manual for details“ | Dokument liegt nicht bei |
| 14 | Website | „Hohe Ausgangsleistun**d**, niedrige dur**s**chnittliche Augenbelastung“, „TS“ statt „TS1“, Öffnungswinkel-Tabelle ohne 15° | betrifft nur die Website |

Die Punkte 10–14 wurden **nicht** geändert. Die Zeile „Laser class“ im BLAU-Teil (S. 10: „2 (IEC …)“) bleibt unverändert; sie nennt die Standardklasse, 3R ist im Spezifikationsteil und im Ordering Code als Option geführt. Punkt 10 (beide Aussagen widersprechen sich nicht), 12 (beide Schreibweisen korrekt), 13 und 14 (nur Website) brauchen keine Änderung im Datenblatt.

## 7. Dateien

- `FP-MVpulse-25_Datasheet_BLAU.pdf` – fertiges Datenblatt
- `FP-MVpulse-25_Datasheet.html` + `assets/` – bearbeitbare Quelle
- `render-pdf.ps1` – erzeugt das PDF neu (Headless Chrome)
- `verify-content.ps1` – Inhaltsabgleich gegen die Originale
- `shots.ps1` – Seitenvorschauen (PNG) für die Sichtprüfung
- `src/` – Kopien der 4 Original-PDFs · `extract/` – Arbeitsdateien (Textebene, Renderings)
