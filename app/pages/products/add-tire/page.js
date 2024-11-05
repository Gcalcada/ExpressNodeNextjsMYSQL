// app/add-tire/page.js// app/add-tire/page.js
export default function AddTire() {
    const handleSubmit = async (e) => {
        e.preventDefault(); // Impede o comportamento padrão do formulário

        const formData = new FormData(e.target);

        // Aqui você pode chamar sua API ou inserir no banco de dados
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/tires`, {  // Corrigido aqui
            method: 'POST',
            body: formData, // Envia o FormData com a imagem
        });

        if (res.ok) {
            alert("Pneu adicionado com sucesso!");
        } else {
            alert("Erro ao adicionar pneu.");
        }
    };

    return (
        <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4">Adicionar Pneu</h1>
            <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Marca:</label>
                    <input
                        type="text"
                        name="brand"
                        required
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Tamanho:</label>
                    <input
                        type="text"
                        name="size"
                        required
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Condição:</label>
                    <select
                        name="condition"
                        required
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    >
                        <option value="Novo">Novo</option>
                        <option value="Semi-novo">Semi-novo</option>
                        <option value="Usado">Usado</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Preço:</label>
                    <input
                        type="number"
                        name="price"
                        step="0.01"
                        required
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Quantidade em stock:</label>
                    <input
                        type="number"
                        name="stock"
                        required
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Selecionar imagem:</label>
                    <input
                        type="file"
                        name="image"
                        accept="image/*" // Permite apenas imagens
                        required
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200"
                >
                    Adicionar Pneu
                </button>
            </form>
        </div>
    );
}
