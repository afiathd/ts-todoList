"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoList = void 0;
class TodoList {
    constructor() {
        this._todos = new Map();
    }
    addTodoItem(item) {
        this._todos.set(item.id, item);
    }
    deleteTodoItem(id) {
        this._todos.delete(id);
    }
    listAllTodoItems() {
        return Array.from(this._todos.values());
    }
}
exports.TodoList = TodoList;
