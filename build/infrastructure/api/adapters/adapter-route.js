"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adaptRoute = void 0;
const adaptRoute = controller => async (req, res) => {
    const httpRequest = {
        body: req.body,
        params: req.params,
        query: req.query,
        headers: req.headers
    };
    const { status, value, error } = await controller.handle(httpRequest);
    if (status < 400) {
        return res.status(status).json({ data: value });
    }
    return res.status(status).json({ error });
};
exports.adaptRoute = adaptRoute;
//# sourceMappingURL=adapter-route.js.map