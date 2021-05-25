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
}

const mainApi = new MainApi({
  baseUrl: "https://api.nikolaevfo.movies.nomoredomains.icu",
  headers: {
    "Content-Type": "application/json",
  },
});

export default mainApi;
