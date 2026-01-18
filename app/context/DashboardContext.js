"use client";

import { createContext, useContext, useState } from "react";
import { prescriptions as initialPrescriptions } from "../data/prescriptions";
import { orders as initialOrders } from "../data/orders";

const DashboardContext = createContext();

export function DashboardProvider({ children }) {
  const [prescriptions, setPrescriptions] = useState(initialPrescriptions);
  const [orders, setOrders] = useState(initialOrders);

  const approvePrescription = (id) => {
    const prescription = prescriptions.find((p) => p.id === id);
    if (!prescription) return;

    // 1) Update prescription status
    setPrescriptions((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, status: "approved" } : p
      )
    );

    // 2) Create Order
    const newOrder = {
      id: `ORD-${Math.floor(Math.random() * 10000)}`,
      prescriptionId: prescription.id,
      patient: prescription.patient,
      status: "preparing",
      total: 0, // backend
      date: new Date().toISOString().slice(0, 10),
    };

    setOrders((prev) => [newOrder, ...prev]);
  };

  const denyPrescription = (id, reason) => {
    setPrescriptions((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, status: "denied", reason } : p
      )
    );
  };

  return (
    <DashboardContext.Provider
      value={{
        prescriptions,
        orders,
        approvePrescription,
        denyPrescription,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  return useContext(DashboardContext);
}
