"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("../utils/axios");
class FedexService {
    constructor() {
        this.baseURL = 'https://fedex.api/';
        this.price = 5.00;
    }
    calculate(product) {
        return product.price * this.price;
    }
    buy(product) {
        return axios_1.axios(this.baseURL, product);
    }
}
exports.default = FedexService;
//# sourceMappingURL=fedexService.js.map