export class TodoService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }

  async get() {
    const response = await this.httpClient.fetch("todos");
    return response.json();
  }

  async create(todo) {
    const res = await this.httpClient.fetch("todos", {
      method: "POST",
      body: JSON.stringify({ todo }),
    });

    return res.json();
  }
}

// TodoServiceInterface
// get():Promise<todo[]>
// create(todo):Promise<todo>
//
export class LocalTodoService {
  constructor() {
    this.id = 0;
    this.todos = [];
  }

  async get() {
    return this.todos;
  }

  async create(todo) {
    const newTodo = { id: ++this.id, todo, isComplete: false, userId: 1 };
    const newTodos = [...this.todos, newTodo];

    this.todos = newTodos;

    return newTodo;
  }
}
