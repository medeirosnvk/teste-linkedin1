"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Client_1 = require("../models/Client");
const clientRoutes = express_1.default.Router();
const clients = [];
clientRoutes.post('/clients', async (req, res) => {
    try {
        // Verifica se o corpo da requisição está vazio ou indefinido
        if (!req.body) {
            throw new Error('Corpo da requisição vazio');
        }
        // Desestruturação dos dados do corpo da requisição
        const { name, email, phone } = req.body;
        // Verifica se os campos necessários estão presentes
        if (!name || !email || !phone) {
            throw new Error('Campos obrigatórios ausentes');
        }
        // Cria um novo cliente
        const newClient = (0, Client_1.createClient)(name, email, phone);
        // Adiciona o novo cliente ao array de clientes
        clients.push(newClient);
        // Retorna o novo cliente como resposta
        res.status(201).json(newClient);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao cadastrar cliente' });
    }
});
clientRoutes.get('/clients', async (req, res) => {
    try {
        res.json(clients);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao listar clientes' });
    }
});
exports.default = clientRoutes;
