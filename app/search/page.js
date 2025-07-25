"use client";
import { Suspense } from "react";
import SearchPageContent from "./SearchPageContent";

export default function SearchPage() {
  return (
    <Suspense fallback={<div>downloading...</div>}>
      <SearchPageContent />
    </Suspense>
  );
}
