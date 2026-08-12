"use client";

import { createContext, useCallback, useContext, useState, ReactNode } from "react";

type ConsultationSource = string;

interface ConsultationModalContextValue {
  isOpen: boolean;
  source: ConsultationSource;
  openConsultation: (source?: ConsultationSource) => void;
  closeConsultation: () => void;
}

const ConsultationModalContext = createContext<ConsultationModalContextValue | null>(null);

export function ConsultationModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [source, setSource] = useState<ConsultationSource>("unknown");

  const openConsultation = useCallback((src: ConsultationSource = "unknown") => {
    setSource(src);
    setIsOpen(true);
  }, []);

  const closeConsultation = useCallback(() => setIsOpen(false), []);

  return (
    <ConsultationModalContext.Provider value={{ isOpen, source, openConsultation, closeConsultation }}>
      {children}
    </ConsultationModalContext.Provider>
  );
}

export function useConsultationModal() {
  const ctx = useContext(ConsultationModalContext);
  if (!ctx) {
    throw new Error("useConsultationModal must be used within a ConsultationModalProvider");
  }
  return ctx;
}
