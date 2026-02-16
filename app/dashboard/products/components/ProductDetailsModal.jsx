function inputField({ label, name, value, onChange, type = "text" }) {
  return (
    <div className="flex flex-col">
      <label className="text-sm text-gray-600 mb-1">{label}</label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className="border rounded-xl p-3 focus:ring-2 focus:ring-purple-500 outline-none transition"
      />
    </div>
  );
}

function Checkbox({ label, name, checked, onChange }) {
  return (
    <label className="flex items-center gap-2 text-gray-700">
      <input type="checkbox" name={name} checked={checked} onChange={onChange} />
      {label}
    </label>
  );
}
