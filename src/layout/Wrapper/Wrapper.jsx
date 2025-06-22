import React, { useState } from "react";
import Sidebar from "./components/SiteBar";
import { RoutePage } from "./components/RoutePage";

export default function Wrapper() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className={`home ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className="routes">
        <RoutePage />
      </div>
    </div>
  );
}
