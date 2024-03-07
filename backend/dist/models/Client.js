"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClient = void 0;
const uuid_1 = require("uuid");
function createClient(name, email, phone) {
    return {
        id: (0, uuid_1.v4)(),
        name,
        email,
        phone
    };
}
exports.createClient = createClient;
