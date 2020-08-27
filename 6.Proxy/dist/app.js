"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const currencyService_1 = __importDefault(require("./services/currencyService"));
const CurrencyServiceProxy_1 = __importDefault(require("./services/CurrencyServiceProxy"));
const currencyService = new currencyService_1.default();
const currencyServiceProxy = new CurrencyServiceProxy_1.default(currencyService);
console.log(currencyServiceProxy.getValue('PLN'));
console.log(currencyServiceProxy.getValue('EUR'));
console.log(currencyServiceProxy.getValue('USD'));
console.log(currencyServiceProxy.getValue('PLN'));
console.log(currencyServiceProxy.getValue('EUR'));
console.log(currencyServiceProxy.getValue('USD'));
//# sourceMappingURL=app.js.map