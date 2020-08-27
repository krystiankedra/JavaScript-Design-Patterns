"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let UsersService = /** @class */ (() => {
    class UsersService {
        constructor() {
            this.users = [];
        }
        static getInstance() {
            if (!UsersService.instance) {
                UsersService.instance = new UsersService();
            }
            return UsersService.instance;
        }
        fetch() {
            this.users = [
                { id: 1, name: 'Krystian', age: 25 },
                { id: 2, name: 'Paweł', age: 30 },
                { id: 3, name: 'Mateusz', age: 28 }
            ];
        }
        remove(user) {
            const { id } = user;
            this.users = this.users.filter(user => user.id !== id);
        }
    }
    UsersService.instance = null;
    return UsersService;
})();
exports.default = UsersService;
//# sourceMappingURL=usersService.js.map