import React from "react";
import MainMenu from "../molecules/header/MainMenu";
import Logo from "../molecules/header/Logo";
const MainHeader = () => {
  return (
    <div className="fixed border-b border-light-400 bg-white z-10 w-full">
      <div className="container flex justify-between items-center mx-auto py-3">
        <Logo />
        <MainMenu />
      </div>
    </div>
  );
};

export default MainHeader;
