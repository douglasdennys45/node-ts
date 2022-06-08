"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupMiddlewares = void 0;
const middlewares_1 = require("@/infrastructure/middlewares");
const setupMiddlewares = (app) => {
    app.use(middlewares_1.bodyParser);
    app.use(middlewares_1.newCors);
};
exports.setupMiddlewares = setupMiddlewares;
//# sourceMappingURL=middlewares.js.map