# Offline map sources

The files in `public/assets/maps/` are locally stored orientation snapshots for
the daily guide. They were rendered from the OpenStreetMap standard map layer
on 19 July 2026 using the OpenStreetMap embedded-map view.

- Map data: © [OpenStreetMap contributors](https://www.openstreetmap.org/copyright)
- Data licence: [Open Database Licence (ODbL)](https://opendatacommons.org/licenses/odbl/)
- Purpose: calm offline orientation only; they are not turn-by-turn navigation.

Each screenshot's exact bounding box is stored alongside its route in
`src/data/routeMaps.ts`, so the markers are projected onto the same real map
area that appears in the application.
