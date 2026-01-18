"use client";

import { useState } from "react";
import { useDashboard } from "../../context/DashboardContext";
import Modal from "../components/ui/Modal";

export default function PrescriptionsPage() {
  const { prescriptions, approvePrescription, denyPrescription } = useDashboard();

  const [openView, setOpenView] = useState(false);
  const [openDeny, setOpenDeny] = useState(false);

  const [selected, setSelected] = useState(null);
  const [denyReason, setDenyReason] = useState("");

  const handleView = (p) => {
    setSelected(p);
    setOpenView(true);
  };

  const handleOpenDeny = (p) => {
    setSelected(p);
    setDenyReason("");
    setOpenDeny(true);
  };

  const handleDeny = () => {
    if (!denyReason.trim()) return;

    denyPrescription(selected.id, denyReason);
    setOpenDeny(false);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Prescriptions</h1>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left">ID</th>
              <th className="px-6 py-4 text-left">Patient</th>
              <th className="px-6 py-4 text-left">Date</th>
              <th className="px-6 py-4 text-left">Status</th>
              <th className="px-6 py-4 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {prescriptions.map((p) => (
              <tr key={p.id} className="border-t">
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleView(p)}
                    className="text-blue-600 hover:underline"
                  >
                    {p.id}
                  </button>
                </td>
                <td className="px-6 py-4">{p.patient}</td>
                <td className="px-6 py-4">{p.date}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      p.status === "pending"
                        ? "bg-orange-100 text-orange-700"
                        : p.status === "approved"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {p.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  {p.status === "pending" && (
                    <div className="flex gap-2">
                      <button
                        onClick={() => approvePrescription(p.id)}
                        className="px-4 py-2 bg-green-500 text-white rounded-lg"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleOpenDeny(p)}
                        className="px-4 py-2 bg-red-500 text-white rounded-lg"
                      >
                        Deny
                      </button>
                    </div>
                  )}

                  {p.status !== "pending" && (
                    <span className="text-gray-500">No actions</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* View Modal */}
      <Modal
        open={openView}
        title="Prescription Details"
        onClose={() => setOpenView(false)}
      >
        {selected && (
          <div>
            <p className="mb-2">
              <strong>ID:</strong> {selected.id}
            </p>
            <p className="mb-2">
              <strong>Patient:</strong> {selected.patient}
            </p>
            <p className="mb-2">
              <strong>Date:</strong> {selected.date}
            </p>
            <p className="mb-2">
              <strong>Status:</strong> {selected.status}
            </p>
            <p className="mb-2">
              <strong>Details:</strong> {selected.details}
            </p>
            {selected.reason && (
              <p className="mb-2">
                <strong>Reason:</strong> {selected.reason}
              </p>
            )}
          </div>
        )}
      </Modal>

      {/* Deny Modal */}
      <Modal
        open={openDeny}
        title="Deny Prescription"
        onClose={() => setOpenDeny(false)}
      >
        <div className="space-y-4">
          <p>
            Enter the reason for denying this prescription:
          </p>

          <textarea
            value={denyReason}
            onChange={(e) => setDenyReason(e.target.value)}
            className="w-full border rounded-lg p-3"
            rows={4}
          />

          <div className="flex justify-end gap-2">
            <button
              onClick={() => setOpenDeny(false)}
              className="px-4 py-2 rounded-lg border"
            >
              Cancel
            </button>
            <button
              onClick={handleDeny}
              className="px-4 py-2 bg-red-500 text-white rounded-lg"
            >
              Deny
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
