"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDate = exports.isString = void 0;
function isString(value) {
    return typeof value === 'string';
}
exports.isString = isString;
function isDate(value) {
    return value instanceof Date;
}
exports.isDate = isDate;
