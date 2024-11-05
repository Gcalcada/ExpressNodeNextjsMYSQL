// pages/api/cars.js
import { connectToDatabase } from '../../../server/db';

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            // Conectar à base de dados
            const connection = await connectToDatabase();
            
            // Realizar uma consulta para obter todos os carros
            const [rows] = await connection.execute('SELECT * FROM cars');
            
            // Retornar os dados dos carros
            res.status(200).json(rows);
        } catch (error) {
            console.error('Erro na conexão com a base de dados:', error);
            res.status(500).json({ message: 'Erro ao buscar carros' });
        }
    } else {
        res.status(405).json({ message: 'Método não permitido' });
    }
}
