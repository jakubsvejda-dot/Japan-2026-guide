# Mise tří dobrodruhů — redesign, fáze 3

Tento sprint mění detail dne na datově řízenou architekturu:

- obecný typ `DayGuide`,
- registr dní `dayRegistry`,
- jediná znovupoužitelná stránka `DayGuidePage`,
- samostatné komponenty pro dopravu, místa, jídlo a „Všimněte si“,
- Tokio 22. 7. doplněné o galerii jídel a sekci „Dnešní Japonsko“,
- odstraněné generované build soubory a bezpečný workflow pro větev redesign-v3.

Další den se nyní přidává hlavně vytvořením datového souboru, nikoli kopírováním stránky.

## Documentation

The authoritative itinerary is maintained in:

`docs/TRIP_SOURCE_OF_TRUTH_v4.1_FINAL.md`

All PWA pages and printable guides should be derived from this document.
