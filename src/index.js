import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import { TodoProvider } from "./context/TodoContext";
import { HttpClient } from "./httpClient/httpClient";
import { LocalTokenRepository } from "./repository/LocalTokenRepository";
import { AuthService } from "./service/AuthService";
import { LocalTodoService, TodoService } from "./service/TodoService";

const root = ReactDOM.createRoot(document.getElementById("root"));

// bootstrapping,
// Dependency Injection
//
const localTokenRepository = new LocalTokenRepository();
const httpClient = new HttpClient(
  process.env.REACT_APP_BASE_URL,
  localTokenRepository
);
const authService = new AuthService(httpClient, localTokenRepository);
const todoService = new TodoService(httpClient);
const localTodoService = new LocalTodoService();

root.render(
  <AuthProvider authService={authService}>
    <TodoProvider todoService={todoService}>
      <App />
    </TodoProvider>
  </AuthProvider>
);
