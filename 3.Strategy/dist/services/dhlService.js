"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("../utils/axios");
class DHLService {
    constructor() {
        this.baseURL = 'https://dhl.api/';
        this.price = 2.50;
    }
    calculate(product) {
        return product.price * this.price;
    }
    buy(product) {
        return axios_1.axios(this.baseURL, product);
    }
}
exports.default = DHLService;
//# sourceMappingURL=dhlService.js.map