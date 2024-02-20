"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoItem = void 0;
class TodoItem {
    constructor(content) {
        this._id = TodoItem._counter++;
        this._content = content;
    }
    get id() {
        return this._id;
    }
    get content() {
        return this._content;
    }
}
exports.TodoItem = TodoItem;
TodoItem._counter = 0;
