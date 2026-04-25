"use client";

import { Printer } from "lucide-react";

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="no-print inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-cream shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md"
    >
      <Printer size={16} />
      Download PDF
    </button>
  );
}
