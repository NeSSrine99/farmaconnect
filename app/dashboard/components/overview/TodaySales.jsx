import React from "react";

import Button from "@shared/Button";
import DashboardCard from "../ui/DashboardCard";
import { FaCartFlatbedSuitcase, FaUsersLine } from "react-icons/fa6";
import { FaFilePrescription, FaSalesforce } from "react-icons/fa";

const TodaySales = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm space-y-4 w-full">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-l">Today's Sales</h3>
          <p className="text-xs text-textLight">Sales Summary</p>
        </div>
        <Button variant="tertiary" size="sm">
          {" "}
          Export
        </Button>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
        <DashboardCard
          title="Total Orders"
          value={1245}
          trend="+12%"
          icon={<FaCartFlatbedSuitcase className="text-white" />}
          bgicon="blue"
          color="blue"
          progress={75}
          bgcolor="blue"
        />
        <DashboardCard
          title="Revenue"
          value={18450}
          prefix="$"
          trend="+8%"
          icon={<FaSalesforce className="text-white" />}
          bgicon="green"
          color="green"
          progress={60}
          bgcolor="green"
        />
        <DashboardCard
          title="Prescriptions"
          value={320}
          trend="+5%"
          icon={<FaFilePrescription className="text-white" />}
          bgicon="purple"
          color="purple"
          progress={50}
          bgcolor="purple"
        />
        <DashboardCard
          title="Users"
          value={860}
          trend="+10%"
          icon={<FaUsersLine className="text-white" />}
          bgicon="yellow"
          color="yellow"
          progress={80}
          bgcolor="yellow"
        />
      </div>
    </div>
  );
};

export default TodaySales;
