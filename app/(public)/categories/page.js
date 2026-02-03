import { Suspense } from "react";
import CategoriesContent from "../(public)/categories/components/CategoriesContent";

export default function categories() {
  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <CategoriesContent />
    </Suspense>
  );
}
