"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoConnection = void 0;
const mongodb_1 = require("mongodb");
exports.MongoConnection = {
    client: null,
    uri: '',
    async connect(uri) {
        this.uri = uri;
        this.client = await mongodb_1.MongoClient.connect(uri);
    },
    async disconnect() {
        await this.client.close();
        this.client = null;
    },
    async getCollection(name) {
        if (!this.client) {
            await this.connect(this.uri);
        }
        return this.client.db().collection(name);
    }
};
//# sourceMappingURL=mongo-connection.js.map