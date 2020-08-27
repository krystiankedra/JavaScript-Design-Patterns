"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createProduct_1 = require("./factory/createProduct");
const helpers_1 = require("./utils/helpers");
console.log(createProduct_1.createProduct());
console.log(helpers_1.withUniqueId(createProduct_1.createProduct));
//# sourceMappingURL=app.js.map