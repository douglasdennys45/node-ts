"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.response = void 0;
const response = (data, status) => {
    return { error: data?.error, value: data?.value, status };
};
exports.response = response;
//# sourceMappingURL=http.js.map