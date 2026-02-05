// // app/dashboard/page.js
// "use client";


// import { FaBox, FaShoppingCart, FaPrescriptionBottle, FaDollarSign } from "react-icons/fa";
// import DashboardCard from "./components/ui/DashboardCard";

// export default function DashboardPage() {
//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
      

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         <DashboardCard
//           title="Total Orders"
//           value="120"
//           icon={<FaShoppingCart />}
//           color="purple"
//           progress={75} // نسبة الطلبات المكتملة
//         />
//         <DashboardCard
//           title="Total Products"
//           value="50"
//           icon={<FaBox />}
//           color="green"
//           progress={50} // نسبة المنتجات المضافة
//         />
//         <DashboardCard
//           title="Pending Prescriptions"
//           value="30"
//           icon={<FaPrescriptionBottle />}
//           color="yellow"
//           progress={40} // نسبة الوصفات المكتملة
//         />
//         <DashboardCard
//           title="Revenue"
//           value="$12,000"
//           icon={<FaDollarSign />}
//           color="blue"
//           progress={60} // نسبة الإيرادات المحققة
//         />
//       </div>
//     </div>
//   );
// }


// app/dashboard/page.js
"use client";

import { FaBox, FaShoppingCart, FaPrescriptionBottle, FaDollarSign } from "react-icons/fa";
import DashboardCard from "./components/ui/DashboardCard";


export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-8">
      <h1 className="text-3xl font-bold">Farmaconnect Dashboard</h1>

      {/* 1️⃣ Cards / KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard title="Total Orders" value="120" icon={<FaShoppingCart />} color="purple" progress={75} />
        <DashboardCard title="Total Products" value="50" icon={<FaBox />} color="green" progress={50} />
        <DashboardCard title="Pending Prescriptions" value="30" icon={<FaPrescriptionBottle />} color="yellow" progress={40} />
        <DashboardCard title="Revenue" value="$12,000" icon={<FaDollarSign />} color="blue" progress={60} />
      </div>

      {/* 2️⃣ Charts / Graphs */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Orders per Month (Static Chart) */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Orders per Month</h2>
          <div className="h-48 flex items-end justify-between space-x-2">
            {/* Simple bars */}
            {[50, 75, 60, 90, 120, 80].map((val, i) => (
              <div key={i} className="bg-purple-500 rounded-t" style={{ height: `${val}px`, width: "20px" }}></div>
            ))}
          </div>
        </div>

        {/* Revenue per Month (Static Chart) */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Revenue per Month</h2>
          <div className="h-48 flex items-end justify-between space-x-2">
            {[5000, 8000, 7000, 12000, 15000, 10000].map((val, i) => (
              <div key={i} className="bg-blue-500 rounded-t" style={{ height: `${val / 150}px`, width: "20px" }}></div>
            ))}
          </div>
        </div>
      </div>

      {/* 3️⃣ Tables / Latest Records */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Latest Orders */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Latest Orders</h2>
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 text-left">Order ID</th>
                <th className="px-4 py-2 text-left">Customer</th>
                <th className="px-4 py-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-2">#001</td>
                <td className="px-4 py-2">Ali</td>
                <td className="px-4 py-2 text-green-500">Completed</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2">#002</td>
                <td className="px-4 py-2">Sara</td>
                <td className="px-4 py-2 text-yellow-500">Pending</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Latest Prescriptions */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Latest Prescriptions</h2>
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 text-left">Prescription ID</th>
                <th className="px-4 py-2 text-left">Patient</th>
                <th className="px-4 py-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-2">#101</td>
                <td className="px-4 py-2">Mohamed</td>
                <td className="px-4 py-2 text-green-500">Approved</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2">#102</td>
                <td className="px-4 py-2">Lina</td>
                <td className="px-4 py-2 text-red-500">Rejected</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
