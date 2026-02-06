"use client";

import StatCard from "./components/StatCard";
import WeeklySalesChart from "./components/WeeklySalesChart";
import MonthlyOrdersChart from "./components/MonthlyOrdersChart";
import CalendarSection from "./components/CalendarSection";
import TopProductsTable from "./components/TopProductsTable";
import SalesMappingByRegion from "./components/TunisiaSalesMap.jsx";
import VolumeVsService from "./components/VolumeVsService";
import TodaySales from "./components/overview/TodaySales";

export default function DashboardPage() {
  return (
    <div className="min-h-screen space-y-8">
      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Stats Cards */}
        <TodaySales />
        <WeeklySalesChart />
      </div>
      <MonthlyOrdersChart />

      {/* Calendar */}
      {/* <CalendarSection /> */}
      <TopProductsTable />
      <VolumeVsService />

      {/* <SalesMappingByRegion /> */}
      {/* VolumeVsService */}
    </div>
  );
}
