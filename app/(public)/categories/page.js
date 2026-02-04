import CategoriesContent from "@categories/CategoriesContent";
import { Suspense } from "react";


export default function categories() {
  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <CategoriesContent />
    </Suspense>
  );
}
