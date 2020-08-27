"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CurrencyServiceProxy {
    constructor(currencyService) {
        this.currencyService = null;
        this.cache = {};
        this.currencyService = currencyService;
    }
    getValue(currency) {
        if (!this.cache[currency]) {
            this.cache[currency] = this.currencyService.getValue(currency);
        }
        return this.cache[currency];
    }
}
exports.default = CurrencyServiceProxy;
//# sourceMappingURL=CurrencyServiceProxy.js.map