# 🚀 Ep-Graphimecc S.R.L.

![GitHub last commit](https://img.shields.io/github/last-commit/Justin1010283729/Ep-Graphimecc-SRL)
![GitHub issues](https://img.shields.io/github/issues/Justin1010283729/Ep-Graphimecc-SRL)
![GitHub license](https://img.shields.io/github/license/Justin1010283729/Ep-Graphimecc-SRL)
![GitHub repo size](https://img.shields.io/github/repo-size/Justin1010283729/Ep-Graphimecc-SRL)
<img src="icon/gpf.jpg" alt="custom emoji" width="20" height="20" style="vertical-align:middle" />


---

## 🛠️ Come eseguire il progetto correttamente

Per visualizzare e utilizzare il sito web del progetto **Ep-Graphimecc-S.R.L.**, segui questi semplici passaggi:

### 📁 1. Clona o scarica il repository

Puoi clonare il progetto dal repository GitHub usando Git oppure scaricare direttamente il file `.zip`.

#### 🔽 Clonazione con Git:
```bash
git clone https://github.com/Justin1010283729/Ep-Graphimecc-S.R.L..git
```

#### 📦 Download ZIP:
Vai al [repository GitHub](https://github.com/Justin1010283729/Ep-Graphimecc-S.R.L.) → clicca su **"Code"** → **"Download ZIP"** → estrai i file.


## Esegui il file *login.html*

**Inserisci le credenziali e avrai accesso al sito.**



---

### 💻 2. Apri il progetto in locale

Apri la cartella del progetto con un browser oppure in un editor di codice come **Visual Studio Code**.

> ⚠️ Consigliato: **avvia il progetto da un server locale** per evitare problemi con il caricamento di immagini, JavaScript e mappe.

---

### 🚀 3. Avvio da server locale (consigliato)

Puoi usare vari metodi per aprire il sito in locale:

#### Metodo 1: VS Code con estensione Live Server

1. Installa [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).
2. Clic destro su `index.html` → **"Apri con Live Server"**.

#### Metodo 2: Python (se installato)

Vai nella cartella del progetto ed esegui:

```bash
python -m http.server 8000
```

Poi apri il browser su: [http://localhost:8000](http://localhost:8000)

---

### 🗺️ 4. Requisiti per funzionalità avanzate

Alcune funzionalità potrebbero richiedere connessione a Internet:

- 🌐 **Mappa Google Maps**: viene caricata da API online
- 🌗 **Cambio tema**: funziona solo con JavaScript abilitato
- 🌍 **Cambio lingua**: richiede i file JS e gli attributi `data-i18n`

---

### 📌 Struttura del progetto (riepilogo)

```
progetto Justin/
├── index.html                 ← Homepage principale
├── login.html                 ← Pagina login
├── programmazione.html        ← Pagina argomenti tecnici
├── admin.html                 ← Dashboard amministrativa
├── Argomenti trattati.html    ← Contenuti approfonditi
├── contatti.html              ← Contatti e form
├── stile.css                  ← Stile grafico globale
├── script.js                  ← Script principale (tema, lingua)
├── login.js                   ← Script per login
└── icon/                      ← Immagini e icone
    ├── gpf.jpg
    ├── iconasitogp.ico
    └── image.png
```

---

✅ Una volta avviato correttamente, potrai navigare il sito in locale e provare tutte le funzionalità integrate: login, mappa, cambio lingua/tema e dashboard.

---

## 📄 Descrizione dei file

### 1. `index.html`  
La **pagina principale** del sito, che introduce l'utente alla mia esperienza di tirocinio.  
- Contiene testo descrittivo, statistiche, mappa integrata con Google Maps per mostrare la posizione di Graphimecc.  
- Include pulsanti per cambiare tema (chiaro/scuro) e lingua (italiano/inglese).  
- È il punto di partenza per navigare nelle altre pagine del sito.

### 2. `login.html`  
Pagina dedicata al **login degli utenti**.  
- Contiene form di accesso con validazione base.  
- Collegata a `login.js` per la gestione delle funzionalità di autenticazione.

### 3. `programmazione.html`  
Pagina che raccoglie gli **argomenti di programmazione trattati** durante il tirocinio.  
- Elenca le tecnologie e linguaggi usati (C#, HTML, CSS, JavaScript).  
- Presenta esempi di codice o spiegazioni tecniche.

### 4. `admin.html`  
**Dashboard amministrativa** riservata ad utenti con permessi speciali.  
- Gestione utenti, statistiche avanzate, e altre funzionalità di amministrazione.  
- Include meccanismi di sicurezza (login e permessi).

### 5. `Argomenti trattati.html`  
Pagina dettagliata sugli **argomenti trattati nel tirocinio** e nel progetto.  
- Può contenere paragrafi approfonditi, immagini, link esterni.

### 6. `contatti.html`  
Pagina con **informazioni di contatto** e moduli per inviare messaggi.  
- Include dettagli aziendali, mappa, e form di contatto.

### 7. `script.js`  
File JavaScript principale, che contiene:  
- Funzioni per il cambio tema (dark/light mode).  
- Funzioni per il cambio lingua dinamico (italiano/inglese).  
- Gestione degli eventi UI generali.

### 8. `login.js`  
Script dedicato al **controllo del login**:  
- Validazione form.  
- Eventuale gestione di sessioni o token (da implementare).

### 9. `stile.css`  
File CSS che definisce lo **stile grafico globale** del sito:  
- Layout della pagina, colori, font, spaziature.  
- Definizioni per temi chiaro e scuro.  
- Responsive design per adattare il sito a diversi dispositivi.

### 10. Cartella `icon/`  
Contiene le **icone e immagini** usate nel sito:  
- `gpf.jpg`: logo aziendale.  
- `iconasitogp.ico`: favicon per il sito.  
- `image.png`: immagine generica usata nelle pagine.

---

## 🌟 Funzionalità principali implementate

- **Cambio tema (light/dark):** bottone per alternare tema chiaro e scuro, con salvataggio preferenza in `localStorage`.  
- **Supporto multi-lingua:** bottone per cambiare lingua (italiano/inglese) che modifica i testi dinamicamente tramite attributi `data-i18n`.  
- **Login base:** form di autenticazione con gestione tramite JavaScript.  
- **Mappa integrata Google Maps:** visualizzazione della sede aziendale con marker personalizzato e info.  
- **Navigazione semplice:** menu verticale per spostarsi tra le pagine del sito.  
- **Statistiche e dati di tirocinio:** box riassuntivi con ore, periodo e orari.  

---

## 🚀 Possibili miglioramenti futuri

- Implementare un sistema di login con backend e database reale.  
- Aggiungere una sezione curriculum dettagliata con CV scaricabile.  
- Inserire una galleria fotografica e video dell’esperienza di tirocinio.  
- Migliorare l’accessibilità e l’ottimizzazione SEO.  
- Inserire animazioni più elaborate e transizioni CSS.  
- Integrare Google Analytics per monitorare il traffico.  

---

## 🤝 Contatti

Per qualsiasi domanda o suggerimento, puoi contattarmi via email o aprire una issue in questo repository.

---

## 📜 Licenza

Questo progetto è rilasciato sotto la licenza MIT. Sentiti libero di usarlo e modificarlo per i tuoi scopi personali o didattici.

---

Grazie per aver visitato il mio progetto!   
---

*Justin Plaku*  
*Verona, Italia*


