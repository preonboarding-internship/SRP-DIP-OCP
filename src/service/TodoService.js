// inteface
// get():Promise<todo[]>
// create(newTodo):Promise<todo>

export class LocalTodoService {
  #todos;
  #id;

  constructor() {
    this.#todos = [];
    this.#id = 1;
  }

  get() {
    return Promise.resolve([...this.#todos]);
  }

  create(newTodo) {
    const result = { id: this.#id++, todo: newTodo };

    this.#todos.push(result);

    return Promise.resolve(result);
  }
}

export class TodoService {
  #httpClient;

  constructor(httpClient) {
    this.#httpClient = httpClient;
  }

  async get() {
    const result = await this.#httpClient.fetch("todos");
    return result.json();
  }

  async create(newTodo) {
    const result = await this.#httpClient.fetch("todos", {
      method: "POST",
      body: JSON.stringify({
        todo: newTodo,
      }),
    });

    return result.json();
  }
}
