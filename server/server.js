// server/server.js
require('dotenv').config(); // Carrega variáveis de ambiente do .env

const express = require('express');
const next = require('next');
const { connectToDatabase } = require('./db'); // Importa a função de conexão com o banco de dados

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    // Rota para obter todos os carros
    server.get('/api/cars', async (req, res) => {
        try {
            const connection = await connectToDatabase(); // Conectar ao banco de dados
            const [rows] = await connection.execute('SELECT * FROM cars'); // Consulta SQL para todos os carros
            await connection.end(); // Fecha a conexão com o banco de dados
            res.status(200).json(rows); // Retorna os carros como JSON
        } catch (error) {
            console.error('Erro ao buscar carros:', error);
            res.status(500).json({ error: 'Erro ao buscar carros' }); // Enviar erro se ocorrer
        }
    });

    // Rota para obter todos os pneus
    server.get('/api/tires', async (req, res) => {
        try {
            const connection = await connectToDatabase(); // Conectar ao banco de dados
            const [rows] = await connection.execute('SELECT * FROM tires'); // Consulta SQL para todos os pneus
            await connection.end(); // Fecha a conexão com o banco de dados
            res.status(200).json(rows); // Retorna os pneus como JSON
        } catch (error) {
            console.error('Erro ao buscar pneus:', error);
            res.status(500).json({ error: 'Erro ao buscar pneus' }); // Enviar erro se ocorrer
        }
    });

    // Usar Next.js para todas as outras páginas
    server.all('*', (req, res) => {
        return handle(req, res);
    });

    // Iniciar o servidor Express
    server.listen(3000, (err) => {
        if (err) throw err;
        console.log('Servidor Express rodando em http://localhost:3000');
    });
});
