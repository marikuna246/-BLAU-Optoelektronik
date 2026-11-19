# FP-MVpulse-25 – Sprachversionen (Stand 12.11.2026)

| Datei | Inhalt |
|---|---|
| `FP-MVpulse-25_Datasheet_EN.pdf` | Englische Fassung, 14 Seiten |
| `FP-MVpulse-25_Datenblatt_DE.pdf` | Deutsche Fassung, 14 Seiten |
| `*.html` + `assets/` | bearbeitbare Quellen (gemeinsames Layout `assets/datasheet.css`, Grafik-Skript `assets/datasheet.js`) |
| `render-pdf.ps1` | erzeugt beide PDFs neu (`-Shots` zusätzlich Seitenvorschauen in `shots/`) |
| `verify-versions.ps1` | prüft, dass beide Fassungen dieselben Zahlen enthalten wie die Masterfassung |

**Grundlage:** die fachlich bereinigte Masterfassung `..\FP-MVpulse-25_Redesign\FP-MVpulse-25_Datasheet.html` (siehe dortiges Prüfprotokoll). Aufbau, Seiten und Grafiken sind in beiden Sprachen identisch.

**Übersetzung**
- Übersetzt sind nur Wörter. Alle Zahlen, Toleranzen, Einheiten, Normen und Bestellcodes sind unverändert; Dezimaltrennzeichen bleiben wie in der jeweiligen Quelle (BLAU-Werte mit Komma, LC-Werte mit Punkt).
- Produkttext Seite 2: in beiden Sprachen der offizielle Text von blauoptoelektronik.de/produkte/10 (DE bzw. EN-Umschaltung). Auf der englischen Website steht „780 nm“ statt 785 nm – im Datenblatt steht wie in allen anderen Quellen **785 nm**. *Website-Hinweis: dort auch der Seitentitel „MVpluse“.*
- Alle übrigen Texte (LC-Datenblatt bzw. englische Werte des BLAU-Datenblatts) wurden für die DE-Fassung übersetzt.
- Original-Diagramme und Maßzeichnungen enthalten englische Beschriftungen. In der DE-Fassung steht darunter jeweils eine kurze Legende mit den deutschen Begriffen (z. B. „Clamping Area = Klemmbereich“). Die neu gezeichnete Pulse-Control-Grafik (S. 8) ist vollständig deutsch beschriftet.

**Prüfung (`verify-versions.ps1`):** 12 Inhaltsblöcke je Sprache (Spezifikationstabellen, Fokus-Faktortabelle, Pulsfaktor-Tabelle, Kennwerte, Wellenlängen, Gehäuseoptionen, Bestellschlüssel, Zeichnungstitel, Diagrammbeschriftungen, Kontaktblock) – Zahlenfolgen identisch mit der Masterfassung. Alte bzw. korrigierte Werte kommen nicht mehr vor. Ergebnis: **0 Abweichungen**. Alle 28 Seiten wurden zusätzlich als Vorschau gerendert; geprüft wurden u. a. die textlängsten DE-Seiten (1, 3, 5, 7, 8, 11, 14).

**Weiterhin offen:** Sicherheitstext Seite 13 („non visible infrared light“ / „nicht sichtbares Infrarotlicht“, obwohl 450–660 nm sichtbar sind) – Wortlaut bitte durch BLAU vorgeben.
