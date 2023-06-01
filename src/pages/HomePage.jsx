import React from "react";
import styled from "styled-components";
// import PrimarySearchAppBar from '../components/NavBar';
import MiniDrawer from "../components/SideNavBar/SideNavBar";
import background1 from "../pictures/taxi-service-in-delhi.jpg";
const HomePage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${background1})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "80% auto",
        backgroundPosition: "center",
        backgroundSize: "contain",
        height: "100vh",
      }}
    >
      <aside>
        <MiniDrawer />
      </aside>
    </div>
  );
};

export default HomePage;
