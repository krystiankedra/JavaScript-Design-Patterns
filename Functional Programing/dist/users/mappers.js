"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pluck = exports.mapperAge = exports.mapperName = void 0;
exports.mapperName = (users) => users.map(user => {
    user.name = `My name is - ${user.name}`;
    return user;
});
exports.mapperAge = (users) => users.map(user => {
    user.age = user.name.length;
    return user;
});
exports.pluck = (key) => (users) => users.map((user) => user[key]);
//# sourceMappingURL=mappers.js.map