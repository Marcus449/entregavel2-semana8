export default function Input({ label, placeholder, type = 'text' }) {
  return (
    <div className="flex flex-col gap-1 mb-4">
      {label && <label className="text-sm font-medium text-slate-700">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        className="px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
