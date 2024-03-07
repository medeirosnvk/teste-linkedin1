"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const clientRoutes_1 = __importDefault(require("./routes/clientRoutes"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use(clientRoutes_1.default);
app.listen(PORT, () => {
    console.log(`Servidor backend iniciado na porta ${PORT}`);
});
