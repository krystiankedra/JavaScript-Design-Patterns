"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("../utils/axios");
class UPSService {
    constructor() {
        this.baseURL = 'https://ups.api/';
        this.price = 10.00;
    }
    calculate(product) {
        return product.price * this.price;
    }
    buy(product) {
        return axios_1.axios(this.baseURL, product);
    }
}
exports.default = UPSService;
//# sourceMappingURL=upsService.js.map