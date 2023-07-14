"use client";
import { Box } from "@chakra-ui/react";
import React from "react";
import TodoList from "./TodoList";
import InWorkTodo from "./InWorkTodo";
import ReviewTodo from "./ReviewTodo";
import DoneTodo from "./DoneTodo";

const Todos = () => {
  return (
    <>
      <Box
        width={"100%"}
        display={"flex"}
        gap={{ base: "10px", lg: "17px" }}
        justifyContent={"flex-start"}
        alignItems={"center"}
        paddingInline={{ base: 5, lg: 10 }}
        paddingBlock={{ base: 4, lg: 5 }}
        border={"2px solid #EDEFF2"}
        overflowX={"auto"}
      >
        {/* Todo List */}
        <Box>
          <TodoList />
        </Box>

        {/* In Work Todo */}
        <Box>
          <InWorkTodo />
        </Box>

        {/* Review Todo */}
        <Box>
          <ReviewTodo />
        </Box>

        {/* Done Todo */}
        <Box>
          <DoneTodo />
        </Box>
      </Box>
    </>
  );
};

export default Todos;
