// pages/api/tires.js

import multer from 'multer';
import path from 'path';

// Configuração do Multer para upload de arquivos
const upload = multer({
    storage: multer.diskStorage({
        destination: './uploads',  // Diretório seguro no servidor
        filename: (req, file, cb) => {
            cb(null, Date.now() + path.extname(file.originalname));
        }
    }),
    limits: { fileSize: 5 * 1024 * 1024 }, // Limite de 5MB para a imagem
});

// Aqui o Next.js usa o 'apiHandler' para tratar a solicitação
export const config = {
    api: {
        bodyParser: false, // Desativar o bodyParser para lidar com o FormData
    },
};

const handler = (req, res) => {
    if (req.method === 'POST') {
        upload.single('image')(req, res, (err) => {
            if (err) {
                return res.status(500).json({ message: 'Erro no upload da imagem.' });
            }

            // Agora os dados do formulário e o arquivo estão disponíveis
            const { brand, size, condition, price, stock } = req.body;
            const imagePath = req.file ? req.file.path : null;

            // Exemplo de validação simples
            if (!brand || !size || !price || !stock) {
                return res.status(400).json({ message: 'Dados incompletos ou inválidos.' });
            }

            // Você pode agora salvar os dados de forma segura no banco de dados, sem expô-los ao cliente
            // Exemplo: salvar os dados no banco de dados (pode ser um MySQL, MongoDB, etc.)
            
            // Retorna uma resposta segura, sem expor dados sensíveis
            return res.status(200).json({
                message: 'Pneu adicionado com sucesso!',
            });
        });
    } else {
        res.status(405).json({ message: 'Método não permitido' });
    }
};

export default handler;
