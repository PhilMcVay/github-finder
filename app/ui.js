class UI {
  constructor() {
    this.profile = document.querySelector('#profile')
    // Add bootstrap modal alert
  }

  showProfile(user) {
    this.profile.innerHTML = `
      <div>${user.login}</div>
    `
  }

  // Add function to showError
}
