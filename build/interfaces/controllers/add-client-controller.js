"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddClientController = void 0;
const presentations_1 = require("@/interfaces/presentations");
class AddClientController {
    constructor(usecases) {
        this.usecases = usecases;
    }
    async handle({ body }) {
        try {
            const { error, value } = await this.usecases(body);
            if (error && !value) {
                return (0, presentations_1.response)({ error }, 400);
            }
            return (0, presentations_1.response)({ value }, 201);
        }
        catch (error) {
            return (0, presentations_1.response)({ error: { code: 'SERVER_ERROR', title: 'Server Error', status: 500, detail: 'Server error' } }, 500);
        }
    }
}
exports.AddClientController = AddClientController;
//# sourceMappingURL=add-client-controller.js.map