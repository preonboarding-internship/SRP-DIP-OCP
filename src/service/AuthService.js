// AuthServiceInterface
//
// signin(email, password):void
// signup(email, password):void
// logout():void

export class AuthService {
  #httpClient;
  #tokenRepository;

  constructor(httpClient, tokenRepository) {
    this.#httpClient = httpClient;
    this.#tokenRepository = tokenRepository;
  }

  signin(email, password) {
    this.#httpClient
      .fetch("auth/signin", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      })
      .then((res) => res.json())
      .then((res) => this.#tokenRepository.save(res.access_token));
  }

  signup(email, password) {
    this.#httpClient
      .fetch("auth/signup", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      })
      .then((res) => res.json())
      .then((res) => this.#tokenRepository.save(res.access_token));
  }

  logout() {
    this.#tokenRepository.delete();
  }
}
