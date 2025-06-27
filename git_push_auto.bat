@echo off
cd /d "C:\Users\j.plaku\Desktop\progetto Justin"
git init
git remote remove origin >nul 2>&1
git remote add origin https://github.com/Justin1010283729/Ep-Graphimecc-S.R.L..git
git add .
git commit -m "Reset completo automatico"
git branch -M main
git push -f origin main
