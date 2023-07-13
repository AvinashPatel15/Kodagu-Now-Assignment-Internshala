"use client";
import React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Navbar/Sidebar";
import ProfileSection from "./ProfileSection";
import TodoSection from "./TodoSection";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Box ml={{ base: "0px", md: "90px" }} backgroundColor={"#f7f8fa"}>
        {/* Main Div */}
        <Box width={"100%"} display={{ base: "block", lg: "flex" }}>
          {/* Profile Section */}
          <Box width={{ base: "100%", lg: "30%" }}>
            <ProfileSection />
          </Box>
          {/* Todo Section */}
          <Box width={{ base: "100%", lg: "70%" }} border={"1px solid blue"}>
            <TodoSection />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HomePage;
