import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import { TodoProvider } from "./context/TodoContext";
import { HttpClient } from "./httpClient/httpClient";
import { TokenRepository } from "./repository/TokenRepository";
import { AuthService } from "./service/AuthService";
import { LocalTodoService, TodoService } from "./service/TodoService";

const root = ReactDOM.createRoot(document.getElementById("root"));

const tokenRepository = new TokenRepository();
const httpClient = new HttpClient(
  "https://pre-onboarding-selection-task.shop/",
  tokenRepository
);
const authService = new AuthService(httpClient, tokenRepository);
const todoService = new TodoService(httpClient);
// const todoService = new LocalTodoService();

root.render(
  <AuthProvider authService={authService}>
    <TodoProvider todoService={todoService}>
      <App />
    </TodoProvider>
  </AuthProvider>
);
