// Init classes
const github = new GitHub()
const ui = new UI()

// UI Elements
const searchForm = document.querySelector('#search-form')
const input = document.querySelector('input[name=user-input]')

function fetchUser(e) {
  e.preventDefault()

  let inputValue = e.target.querySelector('input').value

  if (inputValue) {
    github.getUser(inputValue)
      .then(data => ui.showProfile(data))
  } else {
    alert('Enter a user...')
  }
}

// Event Listeners
searchForm.addEventListener('submit', fetchUser)