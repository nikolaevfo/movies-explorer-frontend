class MainApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _handleOriginalResponse(response) {
    if (!response.ok) {
      return Promise.reject(`Error: ${response}`);
    }
    return response.json();
  }

  register(userData) {
    return fetch(`https://api.nikolaevfo.movies.nomoredomains.icu/signup`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(userData),
    }).then(this._handleOriginalResponse);
  }

  login(userData) {
    return fetch(`https://api.nikolaevfo.movies.nomoredomains.icu/signin`, {
      method: "POST",
      credentials: "include",
      headers: this._headers,
      body: JSON.stringify(userData),
    }).then(this._handleOriginalResponse);
  }

  updateUser(userData) {
    return fetch(`https://api.nikolaevfo.movies.nomoredomains.icu/users/me`, {
      method: "PATCH",
      credentials: "include",
      headers: this._headers,
      body: JSON.stringify(userData),
    }).then(this._handleOriginalResponse);
  }

  signout(userData) {
    return fetch(`https://api.nikolaevfo.movies.nomoredomains.icu/signout`, {
      method: "POST",
      credentials: "include",
      headers: this._headers,
      body: JSON.stringify(userData),
    }).then(this._handleOriginalResponse);
  }

  checkToken() {
    return fetch(`https://api.nikolaevfo.movies.nomoredomains.icu/users/me`, {
      method: "GET",
      credentials: "include",
      headers: this._headers,
    }).then(this._handleOriginalResponse);
  }

  getSavedMovies() {
    return fetch(`https://api.nikolaevfo.movies.nomoredomains.icu/movies`, {
      method: "GET",
      credentials: "include",
      headers: this._headers,
    }).then(this._handleOriginalResponse);
  }

  addMovie(movie) {
    return fetch(`https://api.nikolaevfo.movies.nomoredomains.icu/movies`, {
      method: "POST",
      credentials: "include",
      headers: this._headers,
      body: JSON.stringify(movie),
    }).then(this._handleOriginalResponse);
  }

  delMovie(id) {
    return fetch(
      `https://api.nikolaevfo.movies.nomoredomains.icu/movies/${id}`,
      {
        method: "DELETE",
        credentials: "include",
        headers: this._headers,
      }
    ).then(this._handleOriginalResponse);
  }
}

const mainApi = new MainApi({
  baseUrl: "https://api.nikolaevfo.movies.nomoredomains.icu",
  headers: {
    "Content-Type": "application/json",
  },
});

export default mainApi;
