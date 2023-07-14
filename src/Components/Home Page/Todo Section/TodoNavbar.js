"use client";
import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import React from "react";

const TodoNavbar = () => {
  return (
    <>
      {/* Dasktop Screen Todo Navbar */}
      <Box
        paddingInline={10}
        paddingBlock={4}
        border={"2px solid #EDEFF2"}
        borderTopLeftRadius={30}
        borderTopRightRadius={30}
        display={{ base: "none", lg: "flex" }}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        {/* Todo Links */}
        <Box>
          <List
            display={"flex"}
            gap={7}
            justifyContent={"center"}
            alignItems={"center"}
          >
            {/* List Tasks */}
            <ListItem
              display={"flex"}
              gap={2}
              justifyContent={"center"}
              alignItems={"center"}
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
                  d="M16 12.5H6C5.45 12.5 5 12.95 5 13.5C5 14.05 5.45 14.5 6 14.5H16C16.55 14.5 17 14.05 17 13.5C17 12.95 16.55 12.5 16 12.5ZM16 8.5H6C5.45 8.5 5 8.95 5 9.5C5 10.05 5.45 10.5 6 10.5H16C16.55 10.5 17 10.05 17 9.5C17 8.95 16.55 8.5 16 8.5ZM6 18.5H12C12.55 18.5 13 18.05 13 17.5C13 16.95 12.55 16.5 12 16.5H6C5.45 16.5 5 16.95 5 17.5C5 18.05 5.45 18.5 6 18.5ZM25.21 14.71L25.3 14.8C25.69 15.19 25.69 15.82 25.3 16.21L19.72 21.8C19.33 22.19 18.7 22.19 18.31 21.8L15.22 18.71C15.0327 18.5232 14.9275 18.2695 14.9275 18.005C14.9275 17.7405 15.0327 17.4868 15.22 17.3L15.31 17.21C15.7 16.82 16.33 16.82 16.72 17.21L19.02 19.51L23.8 14.72C24.18 14.32 24.82 14.32 25.21 14.71Z"
                  fill="#ADB8CC"
                />
              </svg>
              <Text
                fontSize={"12px"}
                fontWeight={700}
                color={"#7D8FB3"}
                fontStyle={"normal"}
              >
                List Tasks
              </Text>
            </ListItem>

            {/* Boards */}
            <ListItem
              display={"flex"}
              gap={2}
              justifyContent={"center"}
              alignItems={"center"}
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
                  d="M7 16.5H13C13.55 16.5 14 16.05 14 15.5V7.5C14 6.95 13.55 6.5 13 6.5H7C6.45 6.5 6 6.95 6 7.5V15.5C6 16.05 6.45 16.5 7 16.5ZM7 24.5H13C13.55 24.5 14 24.05 14 23.5V19.5C14 18.95 13.55 18.5 13 18.5H7C6.45 18.5 6 18.95 6 19.5V23.5C6 24.05 6.45 24.5 7 24.5ZM17 24.5H23C23.55 24.5 24 24.05 24 23.5V15.5C24 14.95 23.55 14.5 23 14.5H17C16.45 14.5 16 14.95 16 15.5V23.5C16 24.05 16.45 24.5 17 24.5ZM16 7.5V11.5C16 12.05 16.45 12.5 17 12.5H23C23.55 12.5 24 12.05 24 11.5V7.5C24 6.95 23.55 6.5 23 6.5H17C16.45 6.5 16 6.95 16 7.5Z"
                  fill="#3361FF"
                />
              </svg>
              <Text
                fontSize={"12px"}
                fontWeight={700}
                color={"#3361FF"}
                fontStyle={"normal"}
              >
                Boards
              </Text>
            </ListItem>

            {/* Calendar */}
            <ListItem
              display={"flex"}
              gap={2}
              justifyContent={"center"}
              alignItems={"center"}
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
                  d="M22 7.5H21V6.5C21 5.95 20.55 5.5 20 5.5C19.45 5.5 19 5.95 19 6.5V7.5H11V6.5C11 5.95 10.55 5.5 10 5.5C9.45 5.5 9 5.95 9 6.5V7.5H8C6.89 7.5 6.01 8.4 6.01 9.5L6 23.5C6 24.6 6.89 25.5 8 25.5H22C23.1 25.5 24 24.6 24 23.5V9.5C24 8.4 23.1 7.5 22 7.5ZM22 22.5C22 23.05 21.55 23.5 21 23.5H9C8.45 23.5 8 23.05 8 22.5V12.5H22V22.5ZM10 14.5H12V16.5H10V14.5ZM14 14.5H16V16.5H14V14.5ZM18 14.5H20V16.5H18V14.5Z"
                  fill="#ADB8CC"
                />
              </svg>
              <Text
                fontSize={"12px"}
                fontWeight={700}
                color={"#7D8FB3"}
                fontStyle={"normal"}
              >
                Calendar
              </Text>
            </ListItem>

            {/* Gantt */}
            <ListItem
              display={"flex"}
              gap={2}
              justifyContent={"center"}
              alignItems={"center"}
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
                  d="M7 21.5H11C11.55 21.5 12 21.05 12 20.5C12 19.95 11.55 19.5 11 19.5H7C6.45 19.5 6 19.95 6 20.5C6 21.05 6.45 21.5 7 21.5ZM6 10.5C6 11.05 6.45 11.5 7 11.5H23C23.55 11.5 24 11.05 24 10.5C24 9.95 23.55 9.5 23 9.5H7C6.45 9.5 6 9.95 6 10.5ZM7 16.5H17C17.55 16.5 18 16.05 18 15.5C18 14.95 17.55 14.5 17 14.5H7C6.45 14.5 6 14.95 6 15.5C6 16.05 6.45 16.5 7 16.5Z"
                  fill="#ADB8CC"
                />
              </svg>
              <Text
                fontSize={"12px"}
                fontWeight={700}
                color={"#7D8FB3"}
                fontStyle={"normal"}
              >
                Gantt
              </Text>
            </ListItem>

            {/* TImeline */}
            <ListItem
              display={"flex"}
              gap={2}
              justifyContent={"center"}
              alignItems={"center"}
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
                  fill="#ADB8CC"
                />
              </svg>
              <Text
                fontSize={"12px"}
                fontWeight={700}
                color={"#7D8FB3"}
                fontStyle={"normal"}
              >
                Timeline
              </Text>
            </ListItem>

            {/* Activity */}
            <ListItem
              display={"flex"}
              gap={2}
              justifyContent={"center"}
              alignItems={"center"}
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
                  fill="#ADB8CC"
                />
              </svg>
              <Text
                fontSize={"12px"}
                fontWeight={700}
                color={"#7D8FB3"}
                fontStyle={"normal"}
              >
                Activity
              </Text>
            </ListItem>
          </List>
        </Box>

        {/* Search Todo */}

        <Box display={{ base: "none", md: "block" }}>
          <InputGroup size="md">
            <InputLeftElement cursor={"pointer"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.8005 14.1005H14.1685L13.9445 13.8845C14.9045 12.7645 15.4005 11.2365 15.1285 9.61249C14.7525 7.38849 12.8965 5.61249 10.6565 5.34049C7.27249 4.92449 4.42449 7.77249 4.84049 11.1565C5.11249 13.3965 6.88849 15.2525 9.11249 15.6285C10.7365 15.9005 12.2645 15.4045 13.3845 14.4445L13.6005 14.6685V15.3005L17.0005 18.7005C17.3285 19.0285 17.8645 19.0285 18.1925 18.7005C18.5205 18.3725 18.5205 17.8365 18.1925 17.5085L14.8005 14.1005ZM10.0005 14.1005C8.00849 14.1005 6.40049 12.4925 6.40049 10.5005C6.40049 8.50849 8.00849 6.90049 10.0005 6.90049C11.9925 6.90049 13.6005 8.50849 13.6005 10.5005C13.6005 12.4925 11.9925 14.1005 10.0005 14.1005Z"
                  fill="#C3CAD9"
                />
              </svg>
            </InputLeftElement>
            <Input
              placeholder="Search Tasks"
              width={"200px"}
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
          </InputGroup>
        </Box>
      </Box>

      {/* Mobile Screen Todo Navbar */}
      <Box
        paddingInline={5}
        paddingBlock={2}
        border={"2px solid #EDEFF2"}
        borderTopLeftRadius={30}
        borderTopRightRadius={30}
        display={{ base: "flex", lg: "none" }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={7}
        >
          {/* Left Arrow */}
          <Box
            display={"flex"}
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
              width="28"
              height="29"
              viewBox="0 0 28 29"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.073 17.7316L13.4517 14.1103L17.073 10.489C17.437 10.125 17.437 9.53698 17.073 9.17298C16.8986 8.99821 16.6619 8.89999 16.415 8.89999C16.1681 8.89999 15.9314 8.99821 15.757 9.17298L11.473 13.457C11.109 13.821 11.109 14.409 11.473 14.773L15.757 19.057C16.121 19.421 16.709 19.421 17.073 19.057C17.4277 18.693 17.437 18.0956 17.073 17.7316Z"
                fill="#C3CAD9"
              />
            </svg>
          </Box>

          {/* Board */}
          <Box
            display={"flex"}
            gap={2}
            justifyContent={"center"}
            alignItems={"center"}
            cursor={"pointer"}
            borderBottom={"2px solid blue"}
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
                d="M7 16.5H13C13.55 16.5 14 16.05 14 15.5V7.5C14 6.95 13.55 6.5 13 6.5H7C6.45 6.5 6 6.95 6 7.5V15.5C6 16.05 6.45 16.5 7 16.5ZM7 24.5H13C13.55 24.5 14 24.05 14 23.5V19.5C14 18.95 13.55 18.5 13 18.5H7C6.45 18.5 6 18.95 6 19.5V23.5C6 24.05 6.45 24.5 7 24.5ZM17 24.5H23C23.55 24.5 24 24.05 24 23.5V15.5C24 14.95 23.55 14.5 23 14.5H17C16.45 14.5 16 14.95 16 15.5V23.5C16 24.05 16.45 24.5 17 24.5ZM16 7.5V11.5C16 12.05 16.45 12.5 17 12.5H23C23.55 12.5 24 12.05 24 11.5V7.5C24 6.95 23.55 6.5 23 6.5H17C16.45 6.5 16 6.95 16 7.5Z"
                fill="#3361FF"
              />
            </svg>
            <Text
              fontSize={"12px"}
              fontWeight={700}
              color={"#3361FF"}
              fontStyle={"normal"}
            >
              Boards
            </Text>
          </Box>

          {/* Right Arrow */}
          <Box
            display={"flex"}
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
              width="28"
              height="29"
              viewBox="0 0 28 29"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.473 17.7317L15.0943 14.1103L11.473 10.489C11.2982 10.3146 11.2 10.0779 11.2 9.83099C11.2 9.58411 11.2982 9.34737 11.473 9.17299C11.837 8.80899 12.425 8.80899 12.789 9.17299L17.073 13.457C17.437 13.821 17.437 14.409 17.073 14.773L12.789 19.057C12.425 19.421 11.837 19.421 11.473 19.057C11.1183 18.693 11.109 18.0957 11.473 17.7317Z"
                fill="#C3CAD9"
              />
            </svg>
          </Box>

          {/* Search Button */}
          <Box
            display={"flex"}
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
                d="M18.5006 17.5006H17.7106L17.4306 17.2306C18.6306 15.8306 19.2506 13.9206 18.9106 11.8906C18.4406 9.11063 16.1206 6.89063 13.3206 6.55063C9.09063 6.03063 5.53063 9.59063 6.05063 13.8206C6.39063 16.6206 8.61063 18.9406 11.3906 19.4106C13.4206 19.7506 15.3306 19.1306 16.7306 17.9306L17.0006 18.2106V19.0006L21.2506 23.2506C21.6606 23.6606 22.3306 23.6606 22.7406 23.2506C23.1506 22.8406 23.1506 22.1706 22.7406 21.7606L18.5006 17.5006ZM12.5006 17.5006C10.0106 17.5006 8.00063 15.4906 8.00063 13.0006C8.00063 10.5106 10.0106 8.50063 12.5006 8.50063C14.9906 8.50063 17.0006 10.5106 17.0006 13.0006C17.0006 15.4906 14.9906 17.5006 12.5006 17.5006Z"
                fill="#C3CAD9"
              />
            </svg>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default TodoNavbar;
