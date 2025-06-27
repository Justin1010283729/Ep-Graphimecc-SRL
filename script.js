if (localStorage.getItem("loggedIn") !== "true") {
  window.location.href = "login.html";
}

function logout() {
  localStorage.clear();
  window.location.href = "login.html";
}

function aggiornaDataOra() {
  const now = new Date();

  // Opzioni per formato data
  const opzioniData = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  // Formatta giorno della settimana + data in italiano
  const data = now.toLocaleDateString('it-IT', opzioniData);

  // Formatta ora (HH:MM:SS)
  const ora = now.toLocaleTimeString('it-IT');

  document.getElementById('datetime').textContent = `${data} - ${ora}`;
}

setInterval(aggiornaDataOra, 1000);
aggiornaDataOra();  // chiamata iniziale subito
