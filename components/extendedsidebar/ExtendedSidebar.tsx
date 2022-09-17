import { useRouter } from "next/router";
import React from "react";

interface ExtendedSidebarProps {
  title: string;
  children: React.ReactNode;
}

export default function ExtendedSidebar({
  children,
  title,
}: ExtendedSidebarProps) {
  const router = useRouter();

  return (
    <div className="extended-sidebar">
      <h1 className="title">{title}</h1>
      {children}
    </div>
  );
}
