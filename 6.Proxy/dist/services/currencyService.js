"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CurrencyService {
    getValue(currency) {
        console.log('External Api call');
        switch (currency) {
            case 'PLN': {
                return 4.25;
            }
            case 'EUR': {
                return 5.50;
            }
            case 'USD': {
                return 10.00;
            }
        }
    }
}
exports.default = CurrencyService;
//# sourceMappingURL=currencyService.js.map