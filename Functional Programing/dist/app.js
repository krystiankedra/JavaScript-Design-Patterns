"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pipe_1 = require("./utils/pipe");
const mock_1 = require("./utils/mock");
const mappers_1 = require("./users/mappers");
const usersMapper = pipe_1.pipe(mappers_1.mapperName, mappers_1.mapperAge, mappers_1.pluck('age'))(mock_1.users());
console.log(usersMapper);
//# sourceMappingURL=app.js.map