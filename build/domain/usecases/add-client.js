"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupAddClient = void 0;
const entities_1 = require("@/domain/entities");
const setupAddClient = (repo) => async (input) => {
    const client = new entities_1.Client(input);
    const { error, value } = client.create();
    if (error && !value) {
        return { error };
    }
    const newClient = await repo.create(value);
    return { value: newClient };
};
exports.setupAddClient = setupAddClient;
//# sourceMappingURL=add-client.js.map