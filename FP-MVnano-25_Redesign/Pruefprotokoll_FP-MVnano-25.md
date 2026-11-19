# Prüfprotokoll: Redesign Datenblatt FP-MVnano-25

**Original:** `Datenblätter 1/FP-MVnano-25_Datasheet.pdf` (Date 24.03.2026, Rev 0, 2 Seiten)
**Neu:** `FP-MVnano-25_Datasheet_Redesign.pdf` (4 Seiten, A4, Vektor, Schriften eingebettet)
**Stilreferenzen (nur Gestaltung, keine Inhalte übernommen):** Osela „Multi-Dot and Multi-Line" Datenblatt, LASER COMPONENTS „MVnano Series" Datenblatt

---

## 1. Analyse des Originals

| Seite | Inhalt |
|---|---|
| 1 | Kopf „Datasheet/ Datenblatt" + Logo · Order number / Module · Block **Basic properties** (9 Zeilen) · Block **Beam properties** (8 Zeilen) · Firmenblock (Geschäftsführer, Kontakt, Handelsregister, Bank) · Date / Rev / page |
| 2 | Block **Mechanical properties** (4 Zeilen) · leerer blauer Balken · ca. 75 % Leerfläche · Date / Rev / page |

Produktbilder, Diagramme oder technische Zeichnungen gibt es im Original nicht, nur das Firmenlogo.

**Schwachstellen in der Darstellung**
- Es gibt keine Titelseite, kein Produktbild und keine visuelle Hierarchie. Alle Werte stehen gleichgewichtet im Fließtext.
- EN- und DE-Bezeichnungen stehen in einer Zeile („Spectral range/ Wellenlänge"). Dadurch sind die Labels lang und schwer zu überfliegen.
- Die Wellenlänge-Leistungs-Kombinationen stecken als Fließtext in einer Zelle, mit Umbrüchen mitten in Werten („(1-↵100mW)").
- Die unterstrichenen Abschnittsbalken wirken wie Formulare. Die Kernwerte sind nicht hervorgehoben.
- Seite 2 ist fast leer und hat einen funktionslosen blauen Balken. Die Seitenaufteilung ist unausgewogen.

## 2. Gestaltung

| Seite | Inhalt |
|---|---|
| 1 Titel | Produktname, Strahlprofil als Lead, schematische Illustration, 5 Kennwert-Kacheln, Wellenlängen-Chips, Order number / Module, vollständiger Firmenblock |
| 2 | 01 Basic properties (Tabelle) + Balkendiagramm Wellenlänge × Ausgangsleistung |
| 3 | 02 Beam properties (Tabelle) + maßstäbliche Darstellung aller 10 Öffnungswinkel |
| 4 | 03 Mechanical properties (Tabelle) + Schema Gehäuse & Anschlussbelegung + Kontaktblock |

- **Farben:** Blau-Navy `#003368` und Laser-Rot `#E51837`, beide direkt aus dem Original-Logo gemessen. Das Logo stammt unverändert aus dem Original-PDF.
- **Schrift:** Barlow / Barlow Semi Condensed, eine technische Groteske ähnlich dem Osela-Stil. Ligaturen sind deaktiviert, damit z. B. „-->" nicht als „—>" erscheint.
- **Grundprinzip:** Die Tabellen sind die vollständige und maßgebliche Wiedergabe aller Originaltexte. Grafiken und Kacheln ergänzen sie nur und verwenden ausschließlich Originalwerte.

## 3. Inhaltsabgleich (automatisiert)

Das Skript `verify-content.ps1` prüft 88 Originalzeichenketten zeichengenau gegen das neue Dokument. Dazu gehören alle Werte, Labels (EN/DE), Normen, Firmendaten, Datum und Revision.

**Ergebnis: 88 von 88 gefunden, 0 fehlen.**

Manuell zusätzlich geprüft:
- Diagramm Seite 2: Die Balkenlängen entsprechen exakt den Leistungsbereichen 1–100 / 1–75 / 1–80 / 1–100 / 1–100 / 1–40 / 1–100 / 1–80 / 1–40 mW. Die Marker auf der Spektralskala liegen bei den Originalwellenlängen.
- Fächerwinkel Seite 3: Die Geometrie ist mathematisch exakt (halber Öffnungswinkel = Winkel/2) für 1°, 5°, 10°, 15°, 20°, 30°, 45°, 60°, 75° und 90°.
- Es wurden keine Einheiten ergänzt, z. B. bleibt „Ø=11,5" ohne „mm" wie im Original. Es wurden keine Maße erfunden: Die Länge ist nur als „Length" beschriftet.

## 4. Bewusste Formatierungsentscheidungen (keine inhaltlichen Änderungen)

1. Das Trennzeichen „/ " zwischen EN und DE wird als Layout umgesetzt: EN fett, DE grau darunter bzw. daneben.
2. Der Doppelpunkt am Ende der Abschnittsüberschriften („…Eigenschaften:") entfällt typografisch. „Wavelength stability:" bleibt wie im Original mit Doppelpunkt.
3. Die Seitenzählung lautet jetzt „page x of 4" statt „of 2", weil das Dokument 4 Seiten hat.
4. Im Firmenblock zeigt das Original sichtbar „UST-IDNR." (die Textebene enthält „USTIDNR."). Übernommen wurde die sichtbare Schreibweise.
5. Die Produktillustration auf Seite 1 und das Gehäuseschema auf Seite 4 sind als „schematic" gekennzeichnet. Es sind keine maßstäblichen Zeichnungen.
6. Die Farben der Wellenlängen sind Näherungen zur Orientierung. Alle Werte sind zusätzlich als Text beschriftet.

## 5. Auffälligkeiten im Original

### Korrigiert (nach Freigabe am 09.11.2026)

| # | Stelle | Original | Neu |
|---|---|---|---|
| 1 | Pin definition (Tabelle + Schema) | „**Bronw**: +VDC" | „**Brown**: +VDC" |
| 2 | Label | „Pin **defintion**" | „Pin **definition**" |
| 3 | Pointing stability | „improved pointing **stabillity**" | „…**stability**" |
| 4 | Label DE | „**Fokussabstand**" | „**Fokusabstand**" |
| 5 | Power stability | „…only for modules with driver **electro**" (abgebrochen) | „…driver **electronics)**" (sinngemäße Ergänzung, bitte fachlich bestätigen) |

`verify-content.ps1` prüft die korrigierten Fassungen und bestätigt zusätzlich, dass keine der alten Schreibweisen mehr vorkommt.

### Weiterhin offen, nicht geändert

| # | Stelle | Original | Hinweis |
|---|---|---|---|
| 6 | Original S. 2 | Die unsichtbare Textebene enthält zusätzlich „Line straightness/ Geradheit" mit Wert „-" (verdeckt im leeren blauen Balken) | Vermutlich ein Überrest; wurde nicht übernommen, weil im Original nicht sichtbar |
| 7 | Schreibweise | Dezimal-Komma und -Punkt gemischt (4,5 V / 0.25 nm/K / ±0,1 %), „-20° to +50°C" und „-20°C to +60°C" | Vereinheitlichen? |
| 8 | Verweise | „see technical note", „see product map", „instruction manual" | Diese Dokumente liegen dem Datenblatt nicht bei |

Zur Information: Das LASER-COMPONENTS-Datenblatt nennt teilweise andere Werte, z. B. 845 nm statt 850 nm, Betriebstemperatur -10 bis +50 °C statt -20 bis +50 °C und Fokussierbereich 50–5000 mm. Diese Werte wurden **nicht** übernommen. Maßgeblich ist ausschließlich das Blau-Datenblatt.


## 6. Dateien

- `FP-MVnano-25_Datasheet_Redesign.pdf`: fertiges Datenblatt
- `FP-MVnano-25_Datasheet_Redesign.html` + `assets/blau-logo.png`: bearbeitbare Quelle
- `render-pdf.ps1`: erzeugt das PDF neu (Headless Chrome)
- `verify-content.ps1`: Inhaltsabgleich gegen das Original
- `serve.ps1` + `assets/editor.js`: Bearbeiten direkt im Browser (siehe unten)

## 7. Datenblatt im Browser bearbeiten

1. Starten: in Claude die Vorschau **„datenblatt-editor"** öffnen (oder in PowerShell `powershell -NoProfile -ExecutionPolicy Bypass -File FP-MVnano-25_Redesign\serve.ps1`) und anschließend **http://localhost:8765** aufrufen.
2. **Texte** (Tabellen, Überschriften, Kennwerte, Fußzeile) einfach anklicken und tippen. Eingefügter Text wird automatisch ohne Formatierung übernommen.
3. **Beschriftungen in Grafiken** anklicken: Es öffnet sich ein Eingabefeld, mit Enter übernehmen. Die Öffnungswinkel-Grafik wird automatisch erzeugt.
4. **Tabellenzeilen:** Zuerst in eine Zeile klicken, dann **＋ Zeile** oder **－ Zeile** (mit „Rückgängig").
5. **Speichern** (Strg+S) oder **Speichern & PDF erzeugen**. Dabei passiert jedes Mal Folgendes:
   - Die vorherige Version wird nach `backups/` gesichert.
   - Alle 88 Originalwerte werden geprüft. Abweichungen werden gemeldet, gespeichert wird trotzdem.
   - Ist eine Seite zu voll, wird sie gelb markiert und eine Warnung angezeigt.
6. Im fertigen PDF sind die Editor-Leiste und die Markierungen nicht enthalten.
