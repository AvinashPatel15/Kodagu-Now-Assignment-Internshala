"use client";
import { Box } from "@chakra-ui/react";
import React from "react";
import TodoNavbar from "./TodoNavbar";
import Todos from "./Todos";

const TodoSection = () => {
  return (
    <>
      <Box width={"100%"}>
        {/* Todo Navbar */}
        <TodoNavbar />

        {/* Todos */}
        <Todos />
      </Box>
    </>
  );
};

export default TodoSection;
