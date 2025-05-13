"use client";

import { useEffect, useState } from "react";
import Card from "./Card";

const MedicamentsList = () => {
  const [medicamments, setMedicaments] = useState([]);

  useEffect(() => {
    fetch("/api/Medicamments") // تأكد من المسار الصحيح
      .then((response) => response.json())
      .then((data) => setMedicaments(data)) // تعيين البيانات المحصلة في حالة
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>List of Medicaments</h1>
      <div>
        {medicamments.map((medicament) => (
          <Card key={medicament.id} {...medicament} />
        ))}
      </div>
    </div>
  );
};

export default MedicamentsList;
