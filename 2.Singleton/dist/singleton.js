"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let Singleton = /** @class */ (() => {
    class Singleton {
        constructor() { }
        static getInstance() {
            if (!Singleton.instance) {
                Singleton.instance = new Singleton();
            }
            return Singleton.instance;
        }
    }
    Singleton.instance = null;
    return Singleton;
})();
exports.default = Singleton;
//# sourceMappingURL=singleton.js.map