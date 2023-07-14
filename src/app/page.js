"use client";
import HomePage from "@/Pages/HomePage";
import { ChakraProvider } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <ChakraProvider>
        <HomePage />
      </ChakraProvider>
    </>
  );
}
