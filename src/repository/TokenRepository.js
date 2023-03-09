// TokenRepository Interface
// save(token):void
// get():string
// delete():void

export class SessionTokenRepository {
  #KEY = "AT";

  save(token) {
    sessionStorage.setItem(this.#KEY, token);
  }
  get() {
    return sessionStorage.getItem(this.#KEY);
  }
  delete() {
    sessionStorage.removeItem(this.#KEY);
  }
}

export class TokenRepository {
  #KEY = "AT";

  save(token) {
    localStorage.setItem(this.#KEY, token);
  }
  get() {
    return localStorage.getItem(this.#KEY);
  }
  delete() {
    localStorage.removeItem(this.#KEY);
  }
}
