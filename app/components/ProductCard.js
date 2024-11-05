// app/components/ProductCard.js
import Image from 'next/image';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <Image src={product.image} alt={product.name} width={300} height={200} />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-gray-600">{product.description}</p>
        <p className="text-xl font-bold">${product.price}</p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded mt-2">Adicionar ao Carrinho</button>
      </div>
    </div>
  );
};

export default ProductCard;