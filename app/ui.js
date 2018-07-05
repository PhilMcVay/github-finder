class UI {
  constructor() {
    this.profile = document.querySelector('#profile')
    this.alert = document.querySelector('#alert-container')
  }

  showProfile(user) {
    this.profile.innerHTML = `
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${user.avatar_url}" alt="User Profile Image">
            <div class="card-body">
              <h5 class="card-title text-color">${user.login}</h5>
              ${user.bio !== null && `<p class="card-text">${user.bio}</p>`}
              <a href="${user.html_url}" target="_blank" class="btn btn-dark btn-block">View GitHub</a>
            </div>
          </div>
        </div>
        <div class="col">
          <button type="button" class="btn btn-dark">
            Followers <span class="badge badge-light">${user.followers}</span>
          </button>
          <button type="button" class="btn btn-dark">
            Repos <span class="badge badge-light">${user.public_repos}</span>
          </button>
        </div>
      </div>
    </div>
    `
  }

  showNotFound(userInput) {
    this.profile.innerHTML = `
      <div>No user with the name <strong>${userInput}</strong> was found</div>
    `
  }

  showError() {
    this.alert.innerHTML = `
    <div class="alert alert-danger alert-dismissible fade show" role="alert">
      Please enter a user
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    `
  }
}
