export default function Modal({ open, title, children, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl p-8 relative">

        {/* Header */}
        <div className="flex justify-between items-center mb-6 border-b pb-4">
          <h3 className="text-2xl font-bold text-gray-800">{title}</h3>

          <button
            onClick={onClose}
            className="text-gray-400 hover:text-red-500 text-xl transition"
          >
            ✕
          </button>
        </div>

        {children}
      </div>
    </div>
  );
}
