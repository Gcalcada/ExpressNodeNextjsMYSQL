import React from 'react';
import { useParams } from 'react-router-dom';

const productDetails = [
  {
    id: 1,
    name: "Produto 1",
    price: "19.99",
    images: [
      "/images/furniture-998265_1280.jpg",
      "/images/car-image-1.jpg",
      "/images/car-image-2.jpg",
      "/images/car-image-3.jpg",
      "/images/car-image-4.jpg"
    ],
    description: "Carro desportivo, 20.000 km, 2022, Gasolina. Este carro é perfeito para quem busca desempenho e estilo. Com um motor potente e design arrojado, é ideal para qualquer entusiasta.",
    condition: "Novo em folha",
    contact: {
      seller: "João Silva",
      phone: "912345678",
      socialMedia: [
        { platform: "Facebook", link: "https://facebook.com/joao" },
        { platform: "Instagram", link: "https://instagram.com/joao" },
      ],
    }
  },
  {
    id: 2,
    name: "Produto 2",
    price: "29.99",
    images: [
      "/images/fabian-kuhne-eksdFRXS28s-unsplash.jpg",
      "/images/car-image-5.jpg",
      "/images/car-image-6.jpg",
      "/images/car-image-7.jpg",
      "/images/car-image-8.jpg"
    ],
    description: "Coupé clássico, 50.000 km, 2019, Gasóleo. Este carro combina elegância e potência, ideal para passeios longos ou trajetos urbanos.",
    condition: "Comprado em 2ª mão",
    contact: {
      seller: "Maria Costa",
      phone: "987654321",
      socialMedia: [
        { platform: "Facebook", link: "https://facebook.com/maria" },
        { platform: "Instagram", link: "https://instagram.com/maria" },
      ],
    }
  },
  {
    id: 3,
    name: "Produto 3",
    price: "39.99",
    images: [
      "/images/car-334200_1280.jpg",
      "/images/car-image-9.jpg",
      "/images/car-image-10.jpg",
      "/images/car-image-11.jpg",
      "/images/car-image-12.jpg"
    ],
    description: "SUV familiar, 30.000 km, 2021, Elétrico. Com amplo espaço interno e tecnologia avançada, é perfeito para famílias.",
    condition: "Restaurado",
    contact: {
      seller: "Ana Pereira",
      phone: "923456789",
      socialMedia: [
        { platform: "Facebook", link: "https://facebook.com/ana" },
        { platform: "Instagram", link: "https://instagram.com/ana" },
      ],
    }
  },
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = productDetails.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Produto não encontrado.</div>;
  }

  return (
    <div className="mx-12 mt-20 mb-12">
      <h2 className="text-2xl font-bold mb-4 dark:text-white">{product.name}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col">
          {product.images.map((image, index) => (
            <img key={index} src={image} alt={`${product.name} - ${index}`} className="w-full h-48 object-cover mb-2" />
          ))}
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
          <p className="text-gray-700 dark:text-gray-300">${product.price}</p>
          <p className="text-gray-600 dark:text-gray-400">{product.description}</p>
          <p className="text-gray-800 dark:text-white font-semibold mt-2">Estado: {product.condition}</p>
          <div className="mt-4">
            <h3 className="font-semibold">Contacto:</h3>
            <p>Vendedor: {product.contact.seller}</p>
            <p>Telefone: {product.contact.phone}</p>
            <h4 className="font-semibold">Redes Sociais:</h4>
            {product.contact.socialMedia.map((social, index) => (
              <a key={index} href={social.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{social.platform}</a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
