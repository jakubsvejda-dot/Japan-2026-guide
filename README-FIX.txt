OPRAVA PRO VÝVOJOVOU VĚTEV

Tento workflow:
- na redesign-v3 aplikaci pouze sestaví a ověří,
- nenasazuje redesign na produkční GitHub Pages,
- na main sestaví i zveřejní aplikaci.

Postup:
1. Rozbalit ZIP.
2. Překopírovat složku .github do lokálního repozitáře a potvrdit Replace.
3. Commit do redesign-v3.
4. Push origin.

Doporučený commit:
fix: deploy GitHub Pages only from main
