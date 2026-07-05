# Goldstück Café Website

Eine elegante, statische Landingpage für das Café Goldstück in München. Präsentiert den Slogan, die Speisekarte, Öffnungszeiten und Kontaktdaten.

## Features

- Hero-Bereich mit Slogan und ansprechendem Bild
- Speisekarte als Karten (Kaffee, Kuchen) mit Filterfunktion
- Öffnungszeiten in übersichtlicher Darstellung
- Kontaktbereich mit Adresse und Google Maps Platzhalter
- Vollständig responsives Design für mobile Geräte

## Technologie

- Reines HTML, CSS und Vanilla JavaScript
- Kein Build-Schritt erforderlich
- Daten aus statischen JSON-Dateien

## Setup

1. Repository klonen:
   ```bash
   git clone https://github.com/your-repo/goldstueck-cafe.git
   ```

2. Im Projektverzeichnis navigieren:
   ```bash
   cd goldstueck-cafe
   ```

3. Die Website öffnen:
   - Doppelklick auf `index.html` oder
   - Lokalen Server starten mit:
     ```bash
     python -m http.server 8000
     ```
     und dann im Browser öffnen: `http://localhost:8000`

## Anpassungen

- Menüpunkte: Bearbeite `data/menu.json`
- Öffnungszeiten: Bearbeite `data/hours.json`
- Styling: Bearbeite `styles.css`
