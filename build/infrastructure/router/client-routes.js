"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const adapters_1 = require("@/infrastructure/api/adapters");
const controllers_1 = require("@/infrastructure/factories/interfaces/controllers");
exports.default = (router) => {
    router.post('/clients', (0, adapters_1.adaptRoute)((0, controllers_1.makeAddClientController)()));
};
//# sourceMappingURL=client-routes.js.map