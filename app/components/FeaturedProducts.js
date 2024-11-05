// src/components/FeaturedProducts.js
import React from 'react';
import Link from 'next/link';

const featuredProducts = [
  { id: 1, name: "Produto 1", price: "19.99", image: "/images/furniture-998265_1280.jpg" },
  { id: 2, name: "Produto 2", price: "29.99", image: "/images/fabian-kuhne-eksdFRXS28s-unsplash.jpg" },
  { id: 3, name: "Produto 3", price: "39.99", image: "/images/car-334200_1280.jpg" },
];

const FeaturedProducts = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {featuredProducts.map((product) => (
        <div key={product.id} className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
          <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-2" />
          <h3 className="text-lg font-semibold dark:text-white">{product.name}</h3>
          <p className="text-gray-700 dark:text-gray-300">${product.price}</p>
          <Link href={`/productDetails/${product.id}`}>
            <button className="bg-blue-600 text-white py-2 px-4 rounded mt-2 hover:bg-blue-700 transition">
              Ver Detalhes
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default FeaturedProducts;
