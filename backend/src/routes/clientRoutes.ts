import express, { Request, Response } from 'express';
import { Client, createClient } from '../models/Client';

const clientRoutes = express.Router();
const clients: Client[] = [];

clientRoutes.post('/clients', async (req: Request, res: Response) => {
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
    const newClient = createClient(name, email, phone);

    // Adiciona o novo cliente ao array de clientes
    clients.push(newClient);

    // Retorna o novo cliente como resposta
    res.status(201).json(newClient);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao cadastrar cliente' });
  }
});


clientRoutes.get('/clients', async (req: Request, res: Response) => {
  try {
      res.json(clients);
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao listar clientes' });
  }
});

export default clientRoutes;