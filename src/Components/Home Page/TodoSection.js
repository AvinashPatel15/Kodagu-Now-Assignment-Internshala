"use client";
import { Box } from "@chakra-ui/react";
import React from "react";
import TodoNavbar from "./TodoNavbar";

const TodoSection = () => {
  return (
    <>
      <Box
        width={"100%"}
      >
        {/* Todo Navbar */}
        <TodoNavbar />
      </Box>
    </>
  );
};

export default TodoSection;
