"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAddClient = void 0;
const usecases_1 = require("@/domain/usecases");
const mongodb_1 = require("@/infrastructure/factories/infrastructure/database/mongodb");
const makeAddClient = () => {
    return (0, usecases_1.setupAddClient)((0, mongodb_1.makeClientRepository)());
};
exports.makeAddClient = makeAddClient;
//# sourceMappingURL=add-client.js.map