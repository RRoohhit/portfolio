"use client";

import React, { createContext, useCallback, useContext, useState } from "react";
import dynamic from "next/dynamic";

const QuickAuditModal = dynamic(
  () => import("@/components/ui/QuickAuditModal").then((m) => ({ default: m.QuickAuditModal })),
  { ssr: false, loading: () => null }
);

interface AuditContextValue {
  openAudit: () => void;
}

const AuditContext = createContext<AuditContextValue>({ openAudit: () => {} });

export const useAudit = () => useContext(AuditContext);

export const AuditProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [open, setOpen] = useState(false);

  const openAudit = useCallback(() => setOpen(true), []);
  const closeAudit = useCallback(() => setOpen(false), []);

  return (
    <AuditContext.Provider value={{ openAudit }}>
      {children}
      {open && <QuickAuditModal isOpen={open} onClose={closeAudit} />}
    </AuditContext.Provider>
  );
};