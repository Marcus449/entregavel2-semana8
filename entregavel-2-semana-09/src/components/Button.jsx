export default function Button({ children, variant = 'primary', onClick }) {
  const estilos = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    danger: 'bg-red-600 hover:bg-red-700 text-white',
    secondary: 'bg-slate-200 hover:bg-slate-300 text-slate-800',
  };

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg font-medium transition-colors ${estilos[variant] || estilos.primary}`}
    >
      {children}
    </button>
  );
}
