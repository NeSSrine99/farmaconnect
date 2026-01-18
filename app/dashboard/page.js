export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">
        Overview
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <p className="text-sm text-gray-500">Pending Prescriptions</p>
          <p className="text-2xl font-bold">12</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-sm">
          <p className="text-sm text-gray-500">Approved Today</p>
          <p className="text-2xl font-bold">8</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-sm">
          <p className="text-sm text-gray-500">Orders in Preparation</p>
          <p className="text-2xl font-bold">5</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-sm">
          <p className="text-sm text-gray-500">Total Products</p>
          <p className="text-2xl font-bold">124</p>
        </div>
      </div>
    </div>
  );
}
