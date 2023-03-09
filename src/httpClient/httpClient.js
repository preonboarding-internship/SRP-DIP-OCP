// httpClientInterface
// fetch(endPoint, options):Promise<Any>

export class HttpClient {
  #baseURL;
  #tokenRepository;

  constructor(baseURL, tokenRepository) {
    this.#baseURL = baseURL;
    this.#tokenRepository = tokenRepository;
  }

  async fetch(endPoint, options = {}) {
    const result = await window.fetch(this.#baseURL + endPoint, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.#tokenRepository.get(),
        ...options.headers,
      },
    });

    if (!result.ok) {
      throw new Error(result.status);
    }

    return result;
  }
}
