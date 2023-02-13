import React from "react";
import { Outlet } from "react-router-dom";
import MainHeader from "../organisms/MainHeader";

const App = () => {
  return (
    <div>
      <MainHeader />
      <div className="pt-16">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
