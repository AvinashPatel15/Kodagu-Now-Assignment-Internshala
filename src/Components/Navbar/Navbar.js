"use client";
import React from "react";
import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import ProfileButton from "./ProfileButton";
import SmallScreenSidebar from "./SmallScreenSidebar";

const Navbar = () => {
  return (
    <>
      <Box
        width={"100%"}
        position={"fixed"}
        top={0}
        left={0}
        zIndex={100}
        paddingInline={4}
        paddingBlock={3}
        borderBottom={"1px solid #EDEFF2"}
        display={"flex"}
        gap={{ base: 0, lg: 10 }}
        justifyContent={"space-between"}
        alignItems={"center"}
        backgroundColor={"#f7f8fa"}
      >
        {/* Slider Button */}
        <Box
          display={{ base: "none", md: "flex" }}
          justifyContent={"center"}
          alignItems={"center"}
          backgroundColor={"white"}
          padding={"9px"}
          borderRadius={"50%"}
          boxShadow={"0px 2px 5px 0px rgba(38, 51, 77, 0.03)"}
          cursor={"pointer"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="31"
            viewBox="0 0 30 31"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7 21.5H23C23.55 21.5 24 21.05 24 20.5C24 19.95 23.55 19.5 23 19.5H7C6.45 19.5 6 19.95 6 20.5C6 21.05 6.45 21.5 7 21.5ZM7 16.5H23C23.55 16.5 24 16.05 24 15.5C24 14.95 23.55 14.5 23 14.5H7C6.45 14.5 6 14.95 6 15.5C6 16.05 6.45 16.5 7 16.5ZM6 10.5C6 11.05 6.45 11.5 7 11.5H23C23.55 11.5 24 11.05 24 10.5C24 9.95 23.55 9.5 23 9.5H7C6.45 9.5 6 9.95 6 10.5Z"
              fill="#C3CAD9"
            />
          </svg>
        </Box>

        <Box
          display={{ base: "flex", md: "none" }}
          justifyContent={"center"}
          alignItems={"center"}
          backgroundColor={"white"}
          padding={"9px"}
          borderRadius={"50%"}
          boxShadow={"0px 2px 5px 0px rgba(38, 51, 77, 0.03)"}
          cursor={"pointer"}
        >
          <SmallScreenSidebar />
        </Box>

        {/* Constructor */}
        <Box>
          <Text
            color={"#4D5E80"}
            fontSize={"18px"}
            fontStyle={"normal"}
            fontWeight={700}
            cursor={"pointer"}
          >
            Constructor
          </Text>
        </Box>

        {/* Links */}
        <Box
          display={{ base: "none", xl: "flex" }}
          gap={4}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box
            color={"#7D8FB3"}
            fontSize={"13px"}
            fontStyle={"normal"}
            fontWeight={700}
            cursor={"pointer"}
          >
            Dashboard
          </Box>
          <Box
            color={"#7D8FB3"}
            fontSize={"13px"}
            fontStyle={"normal"}
            fontWeight={700}
            cursor={"pointer"}
          >
            About Us
          </Box>
          <Box
            color={"#7D8FB3"}
            fontSize={"13px"}
            fontStyle={"normal"}
            fontWeight={700}
            cursor={"pointer"}
          >
            News
          </Box>
          <Box
            color={"#7D8FB3"}
            fontSize={"13px"}
            fontStyle={"normal"}
            fontWeight={700}
            cursor={"pointer"}
          >
            User Policy
          </Box>
          <Box
            color={"#7D8FB3"}
            fontSize={"13px"}
            fontStyle={"normal"}
            fontWeight={700}
            cursor={"pointer"}
          >
            Contacts
          </Box>
          <Box
            color={"#7D8FB3"}
            fontSize={"13px"}
            fontStyle={"normal"}
            fontWeight={700}
            cursor={"pointer"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="31"
              viewBox="0 0 30 31"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9 13.5C7.9 13.5 7 14.4 7 15.5C7 16.6 7.9 17.5 9 17.5C10.1 17.5 11 16.6 11 15.5C11 14.4 10.1 13.5 9 13.5ZM21 13.5C19.9 13.5 19 14.4 19 15.5C19 16.6 19.9 17.5 21 17.5C22.1 17.5 23 16.6 23 15.5C23 14.4 22.1 13.5 21 13.5ZM15 13.5C13.9 13.5 13 14.4 13 15.5C13 16.6 13.9 17.5 15 17.5C16.1 17.5 17 16.6 17 15.5C17 14.4 16.1 13.5 15 13.5Z"
                fill="#C3CAD9"
              />
            </svg>
          </Box>
        </Box>

        {/* Search Box */}
        <Box display={{ base: "none", md: "block" }}>
          <InputGroup size="lg">
            <InputLeftElement cursor={"pointer"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="31"
                viewBox="0 0 30 31"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.5006 17.5006H17.7106L17.4306 17.2306C18.6306 15.8306 19.2506 13.9206 18.9106 11.8906C18.4406 9.11063 16.1206 6.89063 13.3206 6.55063C9.09063 6.03063 5.53063 9.59063 6.05063 13.8206C6.39063 16.6206 8.61063 18.9406 11.3906 19.4106C13.4206 19.7506 15.3306 19.1306 16.7306 17.9306L17.0006 18.2106V19.0006L21.2506 23.2506C21.6606 23.6606 22.3306 23.6606 22.7406 23.2506C23.1506 22.8406 23.1506 22.1706 22.7406 21.7606L18.5006 17.5006ZM12.5006 17.5006C10.0106 17.5006 8.00063 15.4906 8.00063 13.0006C8.00063 10.5106 10.0106 8.50063 12.5006 8.50063C14.9906 8.50063 17.0006 10.5106 17.0006 13.0006C17.0006 15.4906 14.9906 17.5006 12.5006 17.5006Z"
                  fill="#C3CAD9"
                />
              </svg>
            </InputLeftElement>
            <Input
              placeholder="Search Products, Orders and Clients"
              width={"430px"}
              borderRadius={"30px"}
              backgroundColor={"white"}
              border={"none"}
              fontSize={"12px"}
              fontWeight={700}
              fontStyle={"normal"}
              color={"#C3CAD9"}
              _placeholder={{ color: "#C3CAD9" }}
              cursor={"pointer"}
              boxShadow={"0px 2px 5px 0px rgba(38, 51, 77, 0.03)"}
            />
            <InputRightElement cursor={"pointer"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="31"
                viewBox="0 0 30 31"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.2925 18.9625L16.1725 15.0825L12.2925 11.2025C12.1052 11.0157 12 10.762 12 10.4975C12 10.233 12.1052 9.97933 12.2925 9.7925C12.6825 9.4025 13.3125 9.4025 13.7025 9.7925L18.2925 14.3825C18.6825 14.7725 18.6825 15.4025 18.2925 15.7925L13.7025 20.3825C13.3125 20.7725 12.6825 20.7725 12.2925 20.3825C11.9125 19.9925 11.9025 19.3525 12.2925 18.9625Z"
                  fill="#C3CAD9"
                />
              </svg>
            </InputRightElement>
          </InputGroup>
        </Box>

        <Box
          display={"flex"}
          gap={5}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {/* Profile Logo */}
          <Box
            display={{ base: "none", xl: "flex" }}
            justifyContent={"center"}
            alignItems={"center"}
            backgroundColor={"white"}
            padding={"9px"}
            borderRadius={"50%"}
            boxShadow={"0px 2px 5px 0px rgba(38, 51, 77, 0.03)"}
            cursor={"pointer"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="31"
              viewBox="0 0 30 31"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15 5.5C9.48 5.5 5 9.98 5 15.5C5 21.02 9.48 25.5 15 25.5C20.52 25.5 25 21.02 25 15.5C25 9.98 20.52 5.5 15 5.5ZM15 8.5C16.66 8.5 18 9.84 18 11.5C18 13.16 16.66 14.5 15 14.5C13.34 14.5 12 13.16 12 11.5C12 9.84 13.34 8.5 15 8.5ZM15 22.7C12.5 22.7 10.29 21.42 9 19.48C9.03 17.49 13 16.4 15 16.4C16.99 16.4 20.97 17.49 21 19.48C19.71 21.42 17.5 22.7 15 22.7Z"
                fill="#C3CAD9"
              />
            </svg>
          </Box>

          <Box display={{ base: "flex", xl: "none" }} cursor={"pointer"}>
            <ProfileButton />
          </Box>

          {/* Clayton Santos */}
          <Box display={{ base: "none", xl: "flex" }}>
            <Text
              fontSize={"13px"}
              fontStyle={"normal"}
              fontWeight={700}
              color={"#6B7A99"}
            >
              Clayton Santos
            </Text>
          </Box>

          {/* Notification Button */}
          <Box
            display={{ base: "none", xl: "flex" }}
            justifyContent={"center"}
            alignItems={"center"}
            backgroundColor={"white"}
            padding={"9px"}
            borderRadius={"50%"}
            boxShadow={"0px 2px 5px 0px rgba(38, 51, 77, 0.03)"}
            cursor={"pointer"}
            position={"relative"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="31"
              viewBox="0 0 30 31"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.5865 25C15.6865 25 16.5865 24.1 16.5865 23H12.5865C12.5865 24.1 13.4765 25 14.5865 25ZM20.5865 19V14C20.5865 10.93 18.9465 8.36 16.0865 7.68V7C16.0865 6.17 15.4165 5.5 14.5865 5.5C13.7565 5.5 13.0865 6.17 13.0865 7V7.68C10.2165 8.36 8.58648 10.92 8.58648 14V19L7.29648 20.29C6.66648 20.92 7.10648 22 7.99648 22H21.1665C22.0565 22 22.5065 20.92 21.8765 20.29L20.5865 19Z"
                fill="#C3CAD9"
              />
            </svg>

            <Text
              padding={1.5}
              borderRadius={"50%"}
              backgroundColor={"red"}
              position={"absolute"}
              top={"2px"}
              right={"-1px"}
            ></Text>
          </Box>

          {/* Close Button */}
          <Box
            display={{ base: "none", xl: "flex" }}
            justifyContent={"center"}
            alignItems={"center"}
            backgroundColor={"white"}
            padding={"9px"}
            borderRadius={"50%"}
            boxShadow={"0px 2px 5px 0px rgba(38, 51, 77, 0.03)"}
            cursor={"pointer"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="31"
              viewBox="0 0 30 31"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15 5.5C9.47 5.5 5 9.97 5 15.5C5 21.03 9.47 25.5 15 25.5C20.53 25.5 25 21.03 25 15.5C25 9.97 20.53 5.5 15 5.5ZM19.3 19.8C18.91 20.19 18.28 20.19 17.89 19.8L15 16.91L12.11 19.8C11.72 20.19 11.09 20.19 10.7 19.8C10.5127 19.6132 10.4075 19.3595 10.4075 19.095C10.4075 18.8305 10.5127 18.5768 10.7 18.39L13.59 15.5L10.7 12.61C10.5127 12.4232 10.4075 12.1695 10.4075 11.905C10.4075 11.6405 10.5127 11.3868 10.7 11.2C11.09 10.81 11.72 10.81 12.11 11.2L15 14.09L17.89 11.2C18.28 10.81 18.91 10.81 19.3 11.2C19.69 11.59 19.69 12.22 19.3 12.61L16.41 15.5L19.3 18.39C19.68 18.77 19.68 19.41 19.3 19.8Z"
                fill="#C3CAD9"
              />
            </svg>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
