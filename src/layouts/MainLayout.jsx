import React from "react";
import { Outlet } from "react-router-dom";

import { Header } from "antd/es/layout/layout";

export default function MainLayout() {
  return (
    <div>
      {/* <Header /> */}

      <Outlet />
    </div>
  );
}
