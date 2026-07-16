# Mise tří dobrodruhů – Japonsko 2026

Hotová offline-first PWA pro rodinnou cestu Jakuba, Filipa a Nely.

## Obsah

- kompletní itinerář 20. 7.–5. 8. 2026,
- šest hotelů,
- potvrzené Shinkanseny, workshopy, muzea, kola a sushi,
- detail každého dne, přesuny, jídlo, mapové odkazy a Jakubovy tipy,
- předodletový checklist,
- lokální poznámky a odškrtávání,
- tmavý režim,
- instalace na plochu iPhonu,
- offline cache,
- automatické nasazení přes GitHub Pages.

## Lokální spuštění na Macu

V Terminálu otevřete složku projektu a spusťte:

```bash
python3 -m http.server 8080
```

Pak v Safari otevřete:

```text
http://localhost:8080
```

PWA a offline režim nefungují při otevření souboru přímo přes `file://`.

## Nahrání na GitHub

1. Vytvořte prázdný veřejný repozitář, například `japan-2026-guide`.
2. Nahrajte **obsah této složky**, nikoli celý ZIP jako jediný soubor.
3. V repozitáři otevřete **Settings → Pages**.
4. U `Source` zvolte **GitHub Actions**.
5. Workflow `.github/workflows/pages.yml` web automaticky zveřejní.

## Instalace na iPhone

Otevřete zveřejněnou adresu v Safari → Sdílet → **Přidat na plochu**.

## Úpravy itineráře

Většina obsahu je v `data.json`. Pro změnu času nebo programu obvykle stačí upravit tento soubor.

## Licence

MIT pro kód. Osobní obsah itineráře je určen pro rodinné použití.

## Nejjednodušší publikace

Doporučené nastavení je:

**Settings → Pages → Deploy from a branch → main → /(root)**

GitHub Actions nejsou nutné. Podrobnosti jsou v `DEPLOYMENT.md`.
