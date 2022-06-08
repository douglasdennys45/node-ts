"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientRepository = void 0;
const mongo_connection_1 = require("./mongo-connection");
class ClientRepository {
    constructor(collection) {
        this.collection = collection;
    }
    async create(payload) {
        const col = await mongo_connection_1.MongoConnection.getCollection(this.collection);
        const { insertedId } = await col.insertOne(payload);
        return insertedId.toString();
    }
}
exports.ClientRepository = ClientRepository;
//# sourceMappingURL=client-repository.js.map