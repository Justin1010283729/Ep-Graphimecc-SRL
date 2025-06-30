@echo off
cd /d "C:\Users\j.plaku\Desktop\progetto Justin"

git init

REM Imposta il remote solo se non è già configurato
git remote get-url origin >nul 2>&1 || git remote add origin https://github.com/Justin1010283729/Ep-Graphimecc-S.R.L..git

REM Sincronizza la copia locale con il remoto senza fare merge automatico
git pull --rebase origin main

REM Aggiungi tutti i file nuovi e modificati
git add .

REM Escludi README.md dal commit (non includerlo se modificato)
git reset README.md

REM Commit delle modifiche locali
git commit -m "Aggiornamento automatico - preservato README.md"

REM Forza il branch main (puoi omettere se già main)
git branch -M main

REM Push al repository remoto
git push origin main
