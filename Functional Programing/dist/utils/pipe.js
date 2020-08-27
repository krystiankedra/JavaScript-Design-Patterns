"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pipe = void 0;
exports.pipe = (...fns) => (initialArg) => fns.reduce((acc, fn) => fn(acc), initialArg);
//# sourceMappingURL=pipe.js.map