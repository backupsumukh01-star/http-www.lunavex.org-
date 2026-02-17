import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-xl border border-[#1E2440] bg-[#0B0F1A] p-6 ${className}`}
    >
      {children}
    </div>
  );
}
