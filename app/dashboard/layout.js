import { DashboardProvider } from "app/context/DashboardContext";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";


export default function DashboardLayout({ children }) {
  return (
    <DashboardProvider>
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex flex-col flex-1">
        {/* Header */}
        <Header />

        {/* Page content */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
    </DashboardProvider>
  );
}
