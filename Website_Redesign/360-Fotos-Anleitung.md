# 360°-Fotos für die Produktseiten – Anleitung

Damit sich ein Produkt auf der Website rundherum drehen lässt (wie bei Toptica Eagleyard), braucht es eine **Fotoserie: 36 Fotos, eines alle 10°**, auf einem Drehteller aufgenommen.

## Ausrüstung
- Drehteller mit Gradskala (manuell oder motorisiert, z. B. Foldio360, Ortery, ComXim)
- Kamera auf **Stativ** (Handy geht auch, aber fest montiert)
- **Weißer Hintergrund** (Hohlkehle oder Lichtzelt), gleichmäßiges Licht von beiden Seiten

## Aufnahme
1. Produkt **genau in die Mitte** des Drehtellers legen (Drehachse durch die Produktmitte), sonst „eiert“ es.
2. Kamera leicht von oben (ca. 15–20°), Produkt füllt etwa 70 % des Bildes.
3. Kamera, Licht, Zoom und Belichtung **während der ganzen Serie nicht verändern** (Belichtung/Fokus/Weißabgleich auf manuell).
4. Nach jedem Foto den Teller um **10°** weiterdrehen → 36 Fotos.
5. Drehrichtung immer gleich (im Uhrzeigersinn von oben gesehen).

## Dateien
- Namen: **1.jpg, 2.jpg … 36.jpg** (oder .png / .webp) – Bild 1 ist die Vorderansicht
- Größe: ca. **1200 × 900 px**, alle Bilder gleich groß und gleich zugeschnitten
- Je Produkt ein Ordner, Name wie die Produktseite:
  `mvnano`, `mvfemto`, `mvpico`, `mvmicro`, `mvpulse`, `mvpulsehp`, `mvgoldhp`, `mvsquare`, `linienlaser`, `punktlaser`, `doe`, `powell-linsen`, `oem`

## Einbau
1. Ordner nach `Website_Redesign/assets/360/<produkt>/` kopieren (z. B. `assets/360/mvnano/1.jpg … 36.jpg`).
2. Ausführen: `node Website_Redesign/_build/add-spin.js`
   → Die Produktseite zeigt dann zuerst die 360°-Ansicht (dreht sich beim Öffnen einmal, danach mit Maus/Finger ziehen).
   Produkte ohne Fotoserie zeigen weiter das normale Foto.

Tipp: Wenn die Fotos keinen ganz weißen Hintergrund haben, kann der Hintergrund vor dem Einbau freigestellt werden – einfach Bescheid geben.
