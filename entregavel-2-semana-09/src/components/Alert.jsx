export default function Alert({ variant = 'success', mensagem }) {
  const variantes = {
    success: 'bg-green-100 border-green-500 text-green-800',
    error: 'bg-red-100 border-red-500 text-red-800',
    warning: 'bg-yellow-100 border-yellow-500 text-yellow-800',
  };

  return (
    <div className={`border-l-4 p-4 rounded-r-lg mb-3 ${variantes[variant] || variantes.success}`} role="alert">
      <p className="font-medium">{mensagem}</p>
    </div>
  );
}
