import { Suspense } from "react";
import CategoriesContent from "./CategoriesContent";

export default function categories() {
  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <CategoriesContent />
    </Suspense>
  );
}
