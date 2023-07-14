"use client";
import { Avatar, Box, Text } from "@chakra-ui/react";
import React from "react";

const ReviewTodo = () => {
  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={5}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          backgroundColor={"white"}
          borderRadius={"5px"}
          boxShadow={"0px 2px 5px 0px rgba(38, 51, 77, 0.03)"}
          borderLeft={"5px solid #FFCB33"}
          padding={3}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          gap={6}
          width={{ base: "300px", lg: "230px" }}
          height={"60px"}
        >
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={1}
          >
            <Box>
              <Text
                color={"#4D5E80"}
                fontSize={"12px"}
                fontStyle={"normal"}
                fontWeight={900}
              >
                REVIEW
              </Text>
            </Box>

            <Box
              display={"flex"}
              flexShrink={0}
              justifyContent={"center"}
              alignItems={"center"}
              paddingInline={3}
              paddingBlock={1}
              borderRadius={"50%"}
              backgroundColor={"white"}
              border={"2px solid #F5F6F7"}
              boxShadow={"0px 2px 5px 0px rgba(38, 51, 77, 0.03)"}
              cursor={"pointer"}
            >
              <Text>5</Text>
            </Box>
          </Box>

          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={1}
          >
            <Box>
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

            <Box>
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
                  d="M21 16.5H16V21.5C16 22.05 15.55 22.5 15 22.5C14.45 22.5 14 22.05 14 21.5V16.5H9C8.45 16.5 8 16.05 8 15.5C8 14.95 8.45 14.5 9 14.5H14V9.5C14 8.95 14.45 8.5 15 8.5C15.55 8.5 16 8.95 16 9.5V14.5H21C21.55 14.5 22 14.95 22 15.5C22 16.05 21.55 16.5 21 16.5Z"
                  fill="#C3CAD9"
                />
              </svg>
            </Box>
          </Box>
        </Box>

        <Box width={{ base: "300px", lg: "230px" }} marginTop={3}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={4}
          >
            {/* Box 1 */}

            <Box
              borderRadius={10}
              boxShadow={"0px 2px 5px 0px rgba(38, 51, 77, 0.03)"}
              backgroundColor={"white"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              gap={3}
              padding={4}
              width={"100%"}
            >
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Box width={"100%"}>
                  <Text
                    color={"#ADB8CC"}
                    fontSize={"10px"}
                    fontStyle={"normal"}
                    fontWeight={700}
                  >
                    Space Tasks 2
                  </Text>
                </Box>

                <Box>
                  <Avatar
                    name="Segun Adebayo"
                    src="https://bit.ly/sage-adebayo"
                    width={"20px"}
                    height={"20px"}
                  />
                </Box>
              </Box>

              <Box>
                <Text
                  color={"#6B7A99"}
                  fontSize={"12px"}
                  fontStyle={"normal"}
                  fontWeight={700}
                >
                  Astronomy Or Astrolo
                </Text>
              </Box>
            </Box>

            {/* Box 2 */}

            <Box
              borderRadius={10}
              boxShadow={"0px 2px 5px 0px rgba(38, 51, 77, 0.03)"}
              backgroundColor={"white"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              gap={3}
              padding={4}
              width={"100%"}
            >
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Box width={"100%"}>
                  <Text
                    color={"#ADB8CC"}
                    fontSize={"10px"}
                    fontStyle={"normal"}
                    fontWeight={700}
                  >
                    Space Tasks 2
                  </Text>
                </Box>

                <Box>
                  <Avatar
                    name="Kent Dodds"
                    src="https://bit.ly/kent-c-dodds"
                    width={"20px"}
                    height={"20px"}
                  />
                </Box>
              </Box>

              <Box>
                <Text
                  color={"#6B7A99"}
                  fontSize={"12px"}
                  fontStyle={"normal"}
                  fontWeight={700}
                >
                  Astronomy Binoculars A Great
                </Text>
              </Box>
            </Box>

            {/* Box 3 */}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ReviewTodo;
