@echo off
cd /d "C:\Users\j.plaku\Desktop\progetto Justin"

git init

REM Imposta il remote solo se non è già configurato
git remote get-url origin >nul 2>&1 || git remote add origin https://github.com/Justin1010283729/Ep-Graphimecc-S.R.L..git

REM Sincronizza con il repository remoto (prende eventuali modifiche fatte da remoto)
git pull --rebase origin main

REM Scarta eventuali modifiche al README.md per non includerlo
git checkout -- README.md

REM Aggiungi tutto il resto
git add .

REM Commit (se ci sono modifiche)
git diff --cached --quiet || git commit -m "Aggiornamento automatico - README preservato"

REM Imposta branch main (opzionale se già fatto)
git branch -M main

REM Push senza forzare per non cancellare file remoti
git push origin main
