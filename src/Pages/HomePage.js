"use client";
import React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Navbar/Sidebar";
import ProfileSection from "../Components/Home Page/ProfileSection";
import TodoSection from "../Components/Home Page/TodoSection";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Box ml={{ base: "0px", md: "90px" }} backgroundColor={"#f7f8fa"}>
        {/* Main Div */}
        <Box width={"100%"} display={{ base: "block", lg: "flex" }}>
          {/* Profile Section */}
          <Box width={{ base: "100%", lg: "25%" }}>
            <ProfileSection />
          </Box>
          {/* Todo Section */}
          <Box
            width={{ base: "95%", lg: "75%" }}
            margin={{ base: "auto", lg: 5 }}
          >
            <TodoSection />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HomePage;
