"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logAddition = void 0;
function logAddition(target, key, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`Adding todo item: ${args[0]}`);
        return originalMethod.apply(this, args);
    };
}
exports.logAddition = logAddition;
