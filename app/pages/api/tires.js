// pages/api/tires.js
import fs from 'fs';
import path from 'path';
import formidable from 'formidable';

export const config = {
    api: {
        bodyParser: false, // Desativar o body parser padrão
    },
};  

let tires = []; // Simulação de banco de dados na memória

export default async function handler(req, res) {
    if (req.method === 'POST') {
        // Inserir novo pneu
        const form = new formidable.IncomingForm();
        form.uploadDir = './images'; // Diretório onde as imagens serão armazenadas
        form.keepExtensions = true; // Manter extensões dos arquivos

        form.parse(req, (err, fields, files) => {
            if (err) {
                return res.status(500).json({ error: 'Erro ao processar o formulário' });
            }

            const { brand, size, condition, price, stock } = fields;
            const imageFile = files.image;

            // Renomear o arquivo e movê-lo para a pasta de destino
            const newPath = path.join(form.uploadDir, imageFile.newFilename);
            fs.rename(imageFile.filepath, newPath, (err) => {
                if (err) {
                    return res.status(500).json({ error: 'Erro ao salvar a imagem' });
                }

                // Armazenar os dados do pneu (aqui você deve salvar no banco de dados)
                const newTire = { brand, size, condition, price, stock, imagePath: newPath };
                tires.push(newTire); // Adicionando à "base de dados" em memória

                return res.status(200).json({ message: 'Pneu adicionado com sucesso!', tire: newTire });
            });
        });
    } else if (req.method === 'DELETE') {
        // Remover um pneu
        const { brand } = req.body; // Supondo que você esteja recebendo o nome da marca para identificar o pneu a ser removido

        const tireIndex = tires.findIndex(tire => tire.brand === brand);
        if (tireIndex === -1) {
            return res.status(404).json({ error: 'Pneu não encontrado' });
        }

        // Remover a imagem do servidor
        const tireToDelete = tires[tireIndex];
        fs.unlink(tireToDelete.imagePath, (err) => {
            if (err) {
                return res.status(500).json({ error: 'Erro ao remover a imagem do servidor' });
            }
            tires.splice(tireIndex, 1); // Remover do array

            return res.status(200).json({ message: 'Pneu removido com sucesso!' });
        });
    } else if (req.method === 'PUT') {
        // Atualizar um pneu
        const form = new formidable.IncomingForm();
        form.uploadDir = './images'; // Diretório onde as imagens serão armazenadas
        form.keepExtensions = true; // Manter extensões dos arquivos

        form.parse(req, (err, fields, files) => {
            if (err) {
                return res.status(500).json({ error: 'Erro ao processar o formulário' });
            }

            const { oldBrand, brand, size, condition, price, stock } = fields;
            const tireIndex = tires.findIndex(tire => tire.brand === oldBrand);

            if (tireIndex === -1) {
                return res.status(404).json({ error: 'Pneu não encontrado' });
            }

            const updatedTire = { ...tires[tireIndex], brand, size, condition, price, stock };

            // Verificar se uma nova imagem foi enviada
            if (files.image && files.image.filepath) {
                // Remover a imagem antiga do servidor
                fs.unlink(tires[tireIndex].imagePath, (err) => {
                    if (err) {
                        return res.status(500).json({ error: 'Erro ao remover a imagem antiga do servidor' });
                    }

                    // Renomear o novo arquivo e movê-lo para a pasta de destino
                    const newPath = path.join(form.uploadDir, files.image.newFilename);
                    fs.rename(files.image.filepath, newPath, (err) => {
                        if (err) {
                            return res.status(500).json({ error: 'Erro ao salvar a nova imagem' });
                        }
                        updatedTire.imagePath = newPath; // Atualizar o caminho da imagem
                        tires[tireIndex] = updatedTire; // Atualizar o pneu na "base de dados"
                        return res.status(200).json({ message: 'Pneu atualizado com sucesso!', tire: updatedTire });
                    });
                });
            } else {
                // Se não houver nova imagem, apenas atualiza os dados
                tires[tireIndex] = updatedTire; // Atualizar o pneu na "base de dados"
                return res.status(200).json({ message: 'Pneu atualizado com sucesso!', tire: updatedTire });
            }
        });
    } else {
        res.setHeader('Allow', ['POST', 'DELETE', 'PUT']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
