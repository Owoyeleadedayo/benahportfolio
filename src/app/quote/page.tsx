import QuoteContent from "@/components/QuoteContent";
import { Suspense } from "react";

export default function QuotePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <QuoteContent />
    </Suspense>
  );
}
