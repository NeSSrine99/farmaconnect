// components/DashboardCard.jsx
export default function DashboardCard({ title, value, icon, color, progress }) {
  return (
    <div
      className={`flex items-center p-5 rounded-lg shadow-lg transform transition hover:scale-105 hover:shadow-2xl bg-${color}-100`}
    >
      {/* icon */}
      <div className={`text-4xl text-${color}-500 mr-4`}>{icon}</div>

      {/* content*/}
      <div className="flex-1">
        <p className="text-gray-700 font-semibold">{title}</p>
        <p className="text-2xl font-bold">{value}</p>

        {/* Progress bar */}
        {progress !== undefined && (
          <div className="mt-2 bg-gray-200 h-2 rounded-full overflow-hidden">
            <div
              className={`h-2 rounded-full bg-${color}-500`}
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        )}
      </div>
    </div>
  );
}
