"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const errors_1 = require("@/domain/entities/errors");
class Client {
    constructor(client) {
        this.client = client;
    }
    create() {
        const errors = this.isValidFields();
        if (errors) {
            return { error: errors };
        }
        return { value: this.client };
    }
    isValidFields() {
        let errors = [];
        if (!this.client.name)
            errors = [...errors, 'Name required'];
        if (!this.client.type)
            errors = [...errors, 'Type required'];
        if (errors.length > 0) {
            const error = new errors_1.Error({ code: 'FIELD_REQUIRED', status: 400, detail: errors.join(', '), title: 'Field required' });
            return error.generateError();
        }
        return null;
    }
}
exports.Client = Client;
//# sourceMappingURL=client.js.map