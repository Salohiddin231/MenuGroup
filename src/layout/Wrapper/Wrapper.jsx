import React from "react";
import Sidebar from "./components/SiteBar";
import { RoutePage } from "./components/RoutePage";

export default function Wrapper() {
  return (
    <div className="home">
      <Sidebar />
      <RoutePage />
    </div>
  );
}
