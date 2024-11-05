// app/products/page.js

import { useCurrency } from '../../../hooks/useCurrency';

export default async function ProductsPage() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/tires`);

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const products = await response.json();

    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Lista de Produtos</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => {
            const formattedPrice = useCurrency(product.price); // Usando o hook aqui
            
            return (
              <div
                key={product.id}
                className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
              >
                <img 
                  src={product.image_path} // Caminho da imagem
                  alt={`Imagem de ${product.brand}`} // Texto alternativo
                  className="w-full h-auto mb-2 rounded" // Estilo da imagem
                />
                <h2 className="text-xl font-semibold mb-2">{product.brand}</h2>
                <p><strong>Tamanho:</strong> {product.size}</p>
                <p><strong>Condição:</strong> {product.condition}</p>
                <p><strong>Preço:</strong> {formattedPrice}</p> {/* Exibe o preço formatado */}
                <p><strong>Estoque:</strong> {product.stock} unidades</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  } catch (error) {
    return <div className="text-red-500">Erro: {error.message}</div>;
  }
}
