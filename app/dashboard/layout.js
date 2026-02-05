"use client";

import { useState } from "react";
import { DashboardProvider } from "app/context/DashboardContext";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

export default function DashboardLayout({ children }) {
 
  const [sidebarOpen, setSidebarOpen] = useState(false); 
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false); 

  return (
    <DashboardProvider>
      <div className="flex min-h-screen bg-gray-50 p-2 gap-2">
        {/* Sidebar */}
        <Sidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          sidebarCollapsed={sidebarCollapsed}
          setSidebarCollapsed={setSidebarCollapsed}
        />

        {/* Main content */}
        <div className="flex flex-col flex-1">
          {/* Header */}
          <Header
            toggleMobile={() => setSidebarOpen(!sidebarOpen)}
            toggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
            sidebarCollapsed={sidebarCollapsed}
          />

          {/* Page content */}
          <main className="p-6">{children}</main>
        </div>
      </div>
    </DashboardProvider>
  );
}
