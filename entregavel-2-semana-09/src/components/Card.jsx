export default function Card({ titulo, descricao, children }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6 mb-4">
      <h2 className="text-xl font-bold text-slate-800 mb-2">{titulo}</h2>
      <p className="text-slate-600 mb-4">{descricao}</p>
      {children}
    </div>
  );
}
