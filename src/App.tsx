function App() {
    return (
        <div className="min-h-screen bg-slate-900 flex items-center justify-center">
            <div className="bg-white p-8 rounded-2xl shadow-2xl text-center">
                <h1 className="text-4xl font-bold text-blue-600 mb-4">
                    Tailwind fonctionne
                </h1>

                <p className="text-gray-600 mb-6">
                    Si tu vois ce texte stylisé avec un fond sombre, Tailwind
                    est bien configuré.
                </p>

                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition">
                    Tester Tailwind
                </button>
            </div>
        </div>
    );
}

export default App;
