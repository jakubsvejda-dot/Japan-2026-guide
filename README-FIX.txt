OPRAVA WORKFLOW

1. V lokálním repozitáři ručně smažte soubor package-lock.json.
2. Obsah tohoto ZIPu překopírujte do repozitáře a potvrďte Replace.
3. GitHub Desktop musí ukázat:
   - package-lock.json jako Deleted
   - .github/workflows/pages.yml jako Modified
   - .gitignore jako Modified
4. Commit do redesign-v3 a Push origin.

Doporučený commit:
fix: use public npm registry in GitHub Actions
