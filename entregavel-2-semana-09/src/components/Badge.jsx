export default function Badge({ texto, cor = 'blue' }) {
  const cores = {
    blue: 'bg-blue-100 text-blue-800',
    green: 'bg-green-100 text-green-800',
    red: 'bg-red-100 text-red-800',
  };

  return (
    <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${cores[cor] || cores.blue}`}>
      {texto}
    </span>
  );
}
