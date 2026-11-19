# BLAU Optoelektronik: Website-Redesign (Prototyp)

Ein klickbarer, responsiver Prototyp in reinem HTML/CSS/JS, ohne Framework und ohne Build-Schritt.

## Seiten
| Datei | Inhalt |
|---|---|
| `index.html` | Startseite: Hero, Sortiment, MVpulse, Auswahlhilfe, Branchen, Vorteile, Ablauf, Tools, Kontakt |
| `produkte.html` | Alle 13 Produkte mit Kategorie-Filter (Link-fähig: `?kategorie=machine-vision`) |
| `produkt-mvnano.html` | Produktdetailseite MVnano (von Hand gebaute Vorlage) |
| `produkt-*.html` | 12 weitere Produktdetailseiten, erzeugt aus `_build/products.json` |
| `unternehmen.html` | Über uns, Werte, Meilensteine, Karriere-Teaser |
| `kontakt.html` | Kontaktwege, Anfrageformular (Produkt wird über `?produkt=…` vorbelegt), Vertriebspartner, Anfahrt |

Vorschau: `serve.ps1` starten → http://localhost:8770

### Produktseiten ändern
Texte und Daten stehen in `_build/products.json`. Danach im Ordner `Datenblätter` neu erzeugen:
```
powershell -NoProfile -Command "& ([scriptblock]::Create([IO.File]::ReadAllText('Website_Redesign\_build\build-products.ps1',[Text.Encoding]::UTF8)))"
```

## Animationen
- Die Startseite zeigt beim ersten Aufruf pro Sitzung ein Intro (ca. 2 s, überspringbar). `index.html?intro=neu` spielt es erneut ab.
- Der Hero der Startseite zeigt eine **live berechnete Laseranimation** (`assets/laser-scene.js`, Canvas, ohne Videodatei): Ein Linienlaser projiziert seine Linie auf ein Förderband, die Linie folgt der Kontur der Teile, dahinter entsteht eine 3D-Punktwolke. Sie reagiert leicht auf die Maus und pausiert automatisch, wenn sie nicht sichtbar ist.
- Der Abschnitt „Einblick“ zeigt das vorhandene Video `Hero.mp4`. Es wird aktuell von blauoptoelektronik.de geladen – vor dem Livegang lokal ablegen, komprimieren (z. B. 720p, ~3–5 MB) und ein Vorschaubild (`poster`) ergänzen.
- Auf Wunsch laufen alle Animationen **immer**, auch wenn Besucher im System „Bewegung reduzieren“ aktiviert haben. Das ist eine bewusste Entscheidung gegen die Barrierefreiheits-Empfehlung (WCAG 2.3.3).

## Downloads (`downloads.html`)
- Zertifikate & Siegel: ISO 9001:2015 (DE/EN) und BSFZ-Siegel „Innovationskompetenz durch F&E“ **2024** (ersetzt das Siegel 2021 der alten Website).
- **Siegel austauschen:** PDF unter genau diesem Namen ablegen: `assets/downloads/FuE_Innovationskompetenz-BSFZ-Siegel_2024.pdf`. Solange die Datei fehlt, zeigt die Seite „Die Datei wird in Kürze ergänzt“ statt eines toten Links; Dateigröße wird automatisch angezeigt.
- Datenblätter: Verweise auf den Download-Bereich jeder Produktseite. Der Footer-Link „Downloads“ führt auf allen Seiten hierher.

## Modul-Konfigurator (`konfigurator.html`, `assets/konfigurator.js`)
- Neugestaltung des bestehenden Konfigurators (blauoptoelektronik.de/tools/konfigurator) im neuen Design: 7 Schritte, Laufzusammenfassung, teilbare URL, Übergabe der Konfiguration an das Kontaktformular.
- Daten aus dem bestehenden Konfigurator bzw. den Produktseiten. Linienlänge: L = 2 · d · tan(Fächerwinkel / 2) – identisch mit dem bestehenden Tool.
- **Nicht enthalten (bei der Umsetzung aus dem bestehenden Tool übernehmen):** Preis, Laserklasse nach IEC 60825-1, MTTF-Prognose, Liniendicke/Schärfentiefe je Abstand, Maßzeichnung, offizielle Bestellbezeichnung, Kunden-Login.
- Abweichung: MVsquare ist hier standardmäßig „Fix“ (wie auf der Produktseite), der bestehende Konfigurator setzt „Einstellbar“ – bitte klären.

## Inhaltliche Grundsätze
- Alle Fakten stammen von blauoptoelektronik.de. Es wurden keine Zahlen, Kunden oder Produkte erfunden.
- Kennzahlen ohne belegte Werte (Lasermodule/Jahr usw.) wurden weggelassen. Auf der aktuellen Website zeigen diese Zähler den Besuchern „+0“.
- Sensorik erscheint nicht als Angebot (Fokus auf Laser und Optik).

## Noch offen vor dem Livegang
1. **Schriften lokal einbinden** (aktuell Google Fonts → DSGVO-Risiko). Inter und Inter Tight als WOFF2 in `assets/fonts/` ablegen.
2. **Bilder lokal hosten und optimieren** (aktuell direkt von Supabase eingebunden; das Hero-Bild ist 3184 px groß). Als WebP/AVIF in 2–3 Größen mit `srcset` ausliefern.
3. **Kontaktformular** an den Versand anbinden (aktuell nur Validierung). Spam-Schutz (Honeypot) ergänzen.
4. **Datenblatt-PDFs direkt verlinken.** Die PDF-Adressen sind auf der aktuellen Website nicht öffentlich sichtbar, deshalb führen die Download-Links vorerst auf die bestehende Produktseite.
5. **Widersprüche auf der aktuellen Website klären.** Die neuen Seiten übernehmen jeweils nur die gesicherte Angabe:
   - MVpulseHP: Laut Text 520 nm, laut Tabelle 525 nm. Als Datenblatt ist „FP-MVgoldHP_Datasheet.pdf“ verlinkt.
   - MVgoldHP: Text und Features nennen 638 nm, in der Tabelle fehlt diese Wellenlänge.
   - MVmicro / MV18: Der Text nennt bis zu 200 mW bei 450 nm, die Tabelle maximal 70 mW bei 450 nm.
   - Linienlaser: Die Leistungstabelle hat eine Spalte mehr als Werte (deshalb ersetzt durch eine Wellenlängenliste). Der Text nennt bis 905 nm, die Tabelle endet bei 850 nm.
   - Powell-Linsen: Der Text nennt Strahldurchmesser von 0,6 bis 3 mm, die Tabelle beginnt bei 0,5 mm.
   - OEM-Module: Die Sensorik-Zeile wurde gemäß Entscheidung (Fokus auf Laser) weggelassen.
6. Englische Version, Tools, Karriere, FAQ, Impressum, Datenschutz und AGB in dasselbe Design übernehmen.
7. Bei Bedarf belegte Kennzahlen ergänzen (z. B. Lasermodule pro Jahr).
