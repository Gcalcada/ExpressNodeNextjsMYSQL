// src/components/ProductCategories.js
import React from 'react';

const categories = [
  { name: "Moda", image: "/images/shoes-8212405_1280.jpg" },
  { name: "Eletrônicos", image: "/images/hospitality-3793946_1280.jpg" },
  { name: "Casa", image: "/images/furniture-998265_1280.jpg" },
  { name: "Beleza", image: "/images/makeup-brushes-1761648_1280.jpg" },
];

const ProductCategories = () => {
  return (
    <div className="mx-12 mt-20 mb-12">
      <h2 className="text-2xl font-bold mb-4 text-center">Categorias de Produtos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div key={index} className="group relative bg-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img 
              src={category.image} 
              alt={category.name} 
              className="w-full h-40 object-cover transition-transform duration-300 transform group-hover:scale-105" 
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-lg font-semibold">{category.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategories;
