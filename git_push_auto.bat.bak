@echo off
cd /d "C:\Users\j.plaku\Desktop\progetto Justin"

git init

REM Imposta il remote solo se non è già configurato
git remote get-url origin >nul 2>&1 || git remote add origin https://github.com/Justin1010283729/Ep-Graphimecc-S.R.L..git

REM Aggiungi tutti i file tranne il README.md (evita sovrascrittura accidentale)
git add . 
git reset README.md

REM Conferma e invia le modifiche
git commit -m "Aggiornamento automatico - README preservato"
git branch -M main
git push -f origin main

