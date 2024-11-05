import React from 'react';

const Newsletter = () => {
  return (
    <div className="dark:bg-black p-6 rounded-lg shadow-md transition duration-300">
      <h2 className="text-2xl font-bold text-center mb-4 dark:text-white">Inscreva-se na nossa Newsletter</h2>
      <p className="text-center mb-6  dark:text-gray-300">Receba as últimas novidades e ofertas diretamente na sua caixa de entrada.</p>
      <form className="flex flex-col md:flex-row justify-center">
        <input
          type="email"
          placeholder="Digite seu email"
          className="p-2 rounded-l-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 dark:bg-gray-700 dark:text-white"
          required
          style={{ color: '#000', backgroundColor: '#fff' }} // Cor do texto e fundo do input em modo claro
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md md:rounded-l-none md:rounded-r-md hover:bg-blue-600 transition duration-200"
        >
          Inscrever
        </button>
      </form>
    </div>
  );
};

export default Newsletter;

