"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withUniqueId = void 0;
const uniqueID = () => Math.floor(Math.random() * Date.now());
exports.withUniqueId = (callback) => {
    const id = uniqueID();
    return Object.assign(Object.assign({}, callback()), { id });
};
//# sourceMappingURL=helpers.js.map