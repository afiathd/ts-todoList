import { TodoItem } from "../models/todoItem";

export class TodoList<T> {
  private _todos: Map<number, TodoItem<T>>;

  constructor() {
      this._todos = new Map();
  }

  addTodoItem(item: TodoItem<T>): void {
      this._todos.set(item.id, item);
  }

  deleteTodoItem(id: number): void {
      this._todos.delete(id);
  }

  listAllTodoItems(): TodoItem<T>[] {
      return Array.from(this._todos.values());
  }

  getItemsByContent(content: T): TodoItem<T>[] {
    return [...this._todos.values()].filter(item => item.content === content);
    }
}

