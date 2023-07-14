"use client";
import { Box } from "@chakra-ui/react";
import React from "react";
import TodoList from "./TodoList";
import InWorkTodo from "./InWorkTodo";
import ReviewTodo from "./ReviewTodo";
import DoneTodo from "./DoneTodo";
import DevelopmentSection from "./DevelopmentSection";

const Todos = () => {
  return (
    <>
      <Box
        width={"100%"}
        display={"flex"}
        gap={"17px"}
        justifyContent={"flex-start"}
        alignItems={"flex-start"}
        paddingInline={{ base: 5, lg: 10 }}
        paddingBlock={{ base: 4, lg: 5 }}
        border={"2px solid #EDEFF2"}
        overflowX={"auto"}
        borderBottomLeftRadius={30}
        borderBottomRightRadius={30}
        position={"relative"}
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

        {/* Development Apps Section */}
        <Box position={"absolute"} bottom={4} right={4}>
          <DevelopmentSection />
        </Box>
      </Box>
    </>
  );
};

export default Todos;
