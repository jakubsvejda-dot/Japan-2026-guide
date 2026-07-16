# Nasazení na GitHub Pages

## Doporučená varianta — bez GitHub Actions

Aplikace je čistý statický web, takže workflow není nutné.

1. Nahrajte všechny soubory do větve `main`.
2. Otevřete **Settings → Pages**.
3. Nastavte:
   - **Source:** `Deploy from a branch`
   - **Branch:** `main`
   - **Folder:** `/(root)`
4. Klikněte **Save**.
5. Po několika minutách bude aplikace na:
   `https://jakubsvejda-dot.github.io/Japan-2026-guide/`

Soubor `.nojekyll` je přiložen.

## Alternativa — GitHub Actions

Workflow je v `.github/workflows/pages.yml`.
Jeho viditelná kopie je `github-pages-workflow.yml`.

Pokud Finder skryje `.github`, zobrazíte skryté soubory pomocí:
`Command + Shift + .`
