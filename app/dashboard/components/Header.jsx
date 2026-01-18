export default function Header() {
  return (
    <header className="h-16 bg-white border-b px-6 flex items-center justify-between">
      {/* Left */}
      <div className="text-lg font-semibold">
        Dashboard
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        <div className="text-sm text-gray-600">
          Pharmacy Account
        </div>

        <div className="w-8 h-8 rounded-full bg-gray-300" />
      </div>
    </header>
  );
}
