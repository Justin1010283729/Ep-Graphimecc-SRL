const form = document.getElementById('loginForm')
const usernameInput = document.getElementById('username')
const passwordInput = document.getElementById('password')
const usernameError = document.getElementById('username-error')
const passwordError = document.getElementById('password-error')
const successMessage = document.getElementById('success-message')





const createUserForm = document.getElementById('createUserForm')
const createUserMessage = document.getElementById('createUserMessage')

function loadUsers() {
  const storedUsers = localStorage.getItem('users')
  if (storedUsers) return JSON.parse(storedUsers)
  return {}
}

function saveUsers(users) {
  localStorage.setItem('users', JSON.stringify(users))
}

createUserForm.addEventListener('submit', function(e) {
  e.preventDefault()
  createUserMessage.textContent = ''

  const username = document.getElementById('newUsername').value.trim()
  const password = document.getElementById('newPassword').value.trim()
  const role = document.getElementById('newRole').value

  if (username.length < 3) {
    createUserMessage.textContent = 'Username deve avere almeno 3 caratteri.'
    return
  }
  if (password.length === 0) {
    createUserMessage.textContent = 'Password non può essere vuota.'
    return
  }

  let users = loadUsers()

  if (users[username]) {
    createUserMessage.textContent = 'Username già esistente, scegli un altro.'
    return
  }

  users[username] = { password: password, role: role }
  saveUsers(users)

  createUserMessage.style.color = '#90ee90'
  createUserMessage.textContent = `Utente "${username}" creato con successo!`

  createUserForm.reset()
})







// Carica utenti da localStorage o inizializza con default
function loadUsers() {
  const storedUsers = localStorage.getItem('users')
  if (storedUsers) {
    return JSON.parse(storedUsers)
  } else {
    const defaultUsers = {
      utente: { password: "abcd", role: "user" },
      "R.pedrollo": { password: "secret", role: "user" },
      "J.Plaku": { password: "secret", role: "user" },
      admin: { password: "1234", role: "admin" }
    }
    localStorage.setItem('users', JSON.stringify(defaultUsers))
    return defaultUsers
  }
}

let users = loadUsers()

function validate() {
  let valid = true
  usernameError.style.display = 'none'
  passwordError.style.display = 'none'
  successMessage.style.display = 'none'

  if (usernameInput.value.trim().length < 3) {
    usernameError.style.display = 'block'
    valid = false
  }
  if (passwordInput.value.trim() === '') {
    passwordError.style.display = 'block'
    valid = false
  }
  return valid
}

function login(event) {
  event.preventDefault()
  if (!validate()) return false

  users = loadUsers()

  const username = usernameInput.value.trim()
  const password = passwordInput.value.trim()

  if (users[username] && users[username].password === password) {
    localStorage.setItem("loggedIn", "true")
    localStorage.setItem("role", users[username].role)
    localStorage.setItem("username", username)

    if (users[username].role === 'admin') {
      let count = parseInt(localStorage.getItem('adminLoginsCount') || '0', 10)
      count++
      localStorage.setItem('adminLoginsCount', count.toString())
    }

    successMessage.textContent = 'Login effettuato con successo! Benvenuto, ' + username + '.'
    successMessage.style.display = 'block'

    usernameInput.value = ''
    passwordInput.value = ''
    usernameInput.focus()

    setTimeout(() => {
      if (users[username].role === 'admin') {
        window.location.href = 'admin.html'
      } else {
        window.location.href = 'index.html'
      }
    }, 1500)
  } else {
    alert('Credenziali errate, riprova.')
  }
}

form.addEventListener('submit', login)
