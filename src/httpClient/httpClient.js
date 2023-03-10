// httpClientInterface
// fetch(endPoint, options): Promise<Response>

export class HttpClient {
  constructor(baseURL, tokenRepository) {
    this.baseURL = baseURL;
    this.tokenRepository = tokenRepository;
  }

  fetch(url, options = {}) {
    return window.fetch(`${this.baseURL}${url}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.tokenRepository.get(),
        ...options.headers,
      },
    });
  }
}
