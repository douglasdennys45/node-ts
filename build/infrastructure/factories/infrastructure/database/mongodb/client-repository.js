"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeClientRepository = void 0;
const mongodb_1 = require("@/infrastructure/database/mongodb");
const makeClientRepository = () => {
    return new mongodb_1.ClientRepository('clients');
};
exports.makeClientRepository = makeClientRepository;
//# sourceMappingURL=client-repository.js.map