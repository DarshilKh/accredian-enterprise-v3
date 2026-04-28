"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import EnquireModal from "@/components/EnquireModal";

const ModalContext = createContext<{ openModal: () => void }>({ openModal: () => {} });

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ModalContext.Provider value={{ openModal: () => setIsOpen(true) }}>
      {children}
      <EnquireModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}
