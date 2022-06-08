"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAddClientController = void 0;
const usecases_1 = require("@/infrastructure/factories/usecases");
const controllers_1 = require("@/interfaces/controllers");
const makeAddClientController = () => {
    return new controllers_1.AddClientController((0, usecases_1.makeAddClient)());
};
exports.makeAddClientController = makeAddClientController;
//# sourceMappingURL=add-client-controller.js.map