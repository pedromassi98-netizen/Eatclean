"use client";

import React from "react";
import FooterNav from "./FooterNav";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen pb-16"> {/* pb-16 para evitar que o conteúdo seja coberto pelo footer */}
      <main className="flex-grow">{children}</main>
      <FooterNav />
    </div>
  );
};

export default Layout;