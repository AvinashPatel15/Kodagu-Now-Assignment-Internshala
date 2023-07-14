"use client";
import { Avatar, Box, Image, Text } from "@chakra-ui/react";
import React from "react";

const InWorkTodo = () => {
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
          borderLeft={"5px solid #33BFFF"}
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
                IN WORK
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
                  Types Of Paper In Catalog
                </Text>
              </Box>
            </Box>

            {/* Box 2 */}

            <Box
              borderRadius={10}
              boxShadow={"0px 2px 5px 0px rgba(38, 51, 77, 0.03)"}
              backgroundColor={"white"}
            >
              <Box>
                <Image
                  src="https://images.unsplash.com/photo-1490772888775-55fceea286b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGZsb3dlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                  width={"100%"}
                  height={"auto"}
                  alt="image"
                  objectFit={"fill"}
                  borderTopLeftRadius={10}
                  borderTopRightRadius={10}
                />
              </Box>

              <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                gap={3}
                padding={4}
              >
                <Box display={"flex"} justifyContent={"space-between"}>
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
                      name="Ryan Florence"
                      src="https://bit.ly/ryan-florence"
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
                    Global Resorts Network
                  </Text>
                </Box>

                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    gap={1}
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
                        d="M7 12.5C7.55 12.5 8 12.05 8 11.5C8 10.95 7.55 10.5 7 10.5C6.45 10.5 6 10.95 6 11.5C6 12.05 6.45 12.5 7 12.5ZM8 15.5C8 16.05 7.55 16.5 7 16.5C6.45 16.5 6 16.05 6 15.5C6 14.95 6.45 14.5 7 14.5C7.55 14.5 8 14.95 8 15.5ZM8 19.5C8 20.05 7.55 20.5 7 20.5C6.45 20.5 6 20.05 6 19.5C6 18.95 6.45 18.5 7 18.5C7.55 18.5 8 18.95 8 19.5ZM24 15.5C24 16.05 23.55 16.5 23 16.5H11C10.45 16.5 10 16.05 10 15.5C10 14.95 10.45 14.5 11 14.5H23C23.55 14.5 24 14.95 24 15.5ZM23 20.5C23.55 20.5 24 20.05 24 19.5C24 18.95 23.55 18.5 23 18.5H11C10.45 18.5 10 18.95 10 19.5C10 20.05 10.45 20.5 11 20.5H23ZM11 12.5C10.45 12.5 10 12.05 10 11.5C10 10.95 10.45 10.5 11 10.5H23C23.55 10.5 24 10.95 24 11.5C24 12.05 23.55 12.5 23 12.5H11Z"
                        fill="#C3CAD9"
                      />
                    </svg>

                    <Text
                      color={"#6B7A99"}
                      fontSize={"10px"}
                      fontStyle={"normal"}
                      fontWeight={700}
                    >
                      4
                    </Text>
                  </Box>

                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    gap={1}
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
                        d="M20.2539 20H9.67393C7.58393 20 5.72393 18.47 5.52393 16.39C5.29393 14.01 7.16393 12 9.50393 12H21.8639C23.1739 12 24.3639 12.94 24.4939 14.24C24.6439 15.74 23.4739 17 22.0039 17H11.5039C10.9539 17 10.5039 16.55 10.5039 16C10.5039 15.45 10.9539 15 11.5039 15H20.2539C20.6639 15 21.0039 14.66 21.0039 14.25C21.0039 13.84 20.6639 13.5 20.2539 13.5H11.6439C10.3339 13.5 9.14393 14.44 9.01393 15.74C8.86393 17.24 10.0339 18.5 11.5039 18.5H21.8339C23.9239 18.5 25.7839 16.97 25.9839 14.89C26.2139 12.5 24.3439 10.5 22.0039 10.5H9.73393C6.86393 10.5 4.29393 12.6 4.02393 15.46C3.72393 18.75 6.28393 21.5 9.50393 21.5H20.2539C20.6639 21.5 21.0039 21.16 21.0039 20.75C21.0039 20.34 20.6639 20 20.2539 20Z"
                        fill="#C3CAD9"
                      />
                    </svg>

                    <Text
                      color={"#6B7A99"}
                      fontSize={"10px"}
                      fontStyle={"normal"}
                      fontWeight={700}
                    >
                      2
                    </Text>
                  </Box>

                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    gap={1}
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
                        d="M18.4064 18.5314L15.0364 16.5314V12.0014C15.0364 11.6014 14.7164 11.2814 14.3164 11.2814H14.2564C13.8564 11.2814 13.5364 11.6014 13.5364 12.0014V16.7214C13.5364 17.0714 13.7164 17.4014 14.0264 17.5814L17.6764 19.7714C18.0164 19.9714 18.4564 19.8714 18.6564 19.5314C18.8664 19.1814 18.7564 18.7314 18.4064 18.5314ZM23.7164 8.29139L20.6364 5.73139C20.2164 5.38139 19.5864 5.43139 19.2264 5.86139C18.8764 6.28139 18.9364 6.91139 19.3564 7.27139L22.4264 9.83139C22.8464 10.1814 23.4764 10.1314 23.8364 9.70139C24.1964 9.28139 24.1364 8.65139 23.7164 8.29139ZM6.63638 9.83139L9.70638 7.27139C10.1364 6.91139 10.1964 6.28139 9.83638 5.86139C9.48638 5.43139 8.85638 5.38139 8.43638 5.73139L5.35638 8.29139C4.93638 8.65139 4.87638 9.28139 5.23638 9.70139C5.58638 10.1314 6.21638 10.1814 6.63638 9.83139ZM14.5364 7.28139C9.56638 7.28139 5.53638 11.3114 5.53638 16.2814C5.53638 21.2514 9.56638 25.2814 14.5364 25.2814C19.5064 25.2814 23.5364 21.2514 23.5364 16.2814C23.5364 11.3114 19.5064 7.28139 14.5364 7.28139ZM14.5364 23.2814C10.6764 23.2814 7.53638 20.1414 7.53638 16.2814C7.53638 12.4214 10.6764 9.28139 14.5364 9.28139C18.3964 9.28139 21.5364 12.4214 21.5364 16.2814C21.5364 20.1414 18.3964 23.2814 14.5364 23.2814Z"
                        fill="#C3CAD9"
                      />
                    </svg>

                    <Text
                      color={"#6B7A99"}
                      fontSize={"10px"}
                      fontStyle={"normal"}
                      fontWeight={700}
                    >
                      6 Days Left
                    </Text>
                  </Box>
                </Box>
              </Box>
            </Box>

            {/* Box 3 */}

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
                  Development Apps
                </Text>
              </Box>
            </Box>

            {/* Box 4 */}
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
                  Characteristics Of A Successful
                </Text>
              </Box>

              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  gap={1}
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
                      d="M7 12.5C7.55 12.5 8 12.05 8 11.5C8 10.95 7.55 10.5 7 10.5C6.45 10.5 6 10.95 6 11.5C6 12.05 6.45 12.5 7 12.5ZM8 15.5C8 16.05 7.55 16.5 7 16.5C6.45 16.5 6 16.05 6 15.5C6 14.95 6.45 14.5 7 14.5C7.55 14.5 8 14.95 8 15.5ZM8 19.5C8 20.05 7.55 20.5 7 20.5C6.45 20.5 6 20.05 6 19.5C6 18.95 6.45 18.5 7 18.5C7.55 18.5 8 18.95 8 19.5ZM24 15.5C24 16.05 23.55 16.5 23 16.5H11C10.45 16.5 10 16.05 10 15.5C10 14.95 10.45 14.5 11 14.5H23C23.55 14.5 24 14.95 24 15.5ZM23 20.5C23.55 20.5 24 20.05 24 19.5C24 18.95 23.55 18.5 23 18.5H11C10.45 18.5 10 18.95 10 19.5C10 20.05 10.45 20.5 11 20.5H23ZM11 12.5C10.45 12.5 10 12.05 10 11.5C10 10.95 10.45 10.5 11 10.5H23C23.55 10.5 24 10.95 24 11.5C24 12.05 23.55 12.5 23 12.5H11Z"
                      fill="#C3CAD9"
                    />
                  </svg>

                  <Text
                    color={"#6B7A99"}
                    fontSize={"10px"}
                    fontStyle={"normal"}
                    fontWeight={700}
                  >
                    4
                  </Text>
                </Box>

                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  gap={1}
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
                      d="M20.2539 20H9.67393C7.58393 20 5.72393 18.47 5.52393 16.39C5.29393 14.01 7.16393 12 9.50393 12H21.8639C23.1739 12 24.3639 12.94 24.4939 14.24C24.6439 15.74 23.4739 17 22.0039 17H11.5039C10.9539 17 10.5039 16.55 10.5039 16C10.5039 15.45 10.9539 15 11.5039 15H20.2539C20.6639 15 21.0039 14.66 21.0039 14.25C21.0039 13.84 20.6639 13.5 20.2539 13.5H11.6439C10.3339 13.5 9.14393 14.44 9.01393 15.74C8.86393 17.24 10.0339 18.5 11.5039 18.5H21.8339C23.9239 18.5 25.7839 16.97 25.9839 14.89C26.2139 12.5 24.3439 10.5 22.0039 10.5H9.73393C6.86393 10.5 4.29393 12.6 4.02393 15.46C3.72393 18.75 6.28393 21.5 9.50393 21.5H20.2539C20.6639 21.5 21.0039 21.16 21.0039 20.75C21.0039 20.34 20.6639 20 20.2539 20Z"
                      fill="#C3CAD9"
                    />
                  </svg>

                  <Text
                    color={"#6B7A99"}
                    fontSize={"10px"}
                    fontStyle={"normal"}
                    fontWeight={700}
                  >
                    2
                  </Text>
                </Box>

                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  gap={1}
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
                      d="M18.4064 18.5314L15.0364 16.5314V12.0014C15.0364 11.6014 14.7164 11.2814 14.3164 11.2814H14.2564C13.8564 11.2814 13.5364 11.6014 13.5364 12.0014V16.7214C13.5364 17.0714 13.7164 17.4014 14.0264 17.5814L17.6764 19.7714C18.0164 19.9714 18.4564 19.8714 18.6564 19.5314C18.8664 19.1814 18.7564 18.7314 18.4064 18.5314ZM23.7164 8.29139L20.6364 5.73139C20.2164 5.38139 19.5864 5.43139 19.2264 5.86139C18.8764 6.28139 18.9364 6.91139 19.3564 7.27139L22.4264 9.83139C22.8464 10.1814 23.4764 10.1314 23.8364 9.70139C24.1964 9.28139 24.1364 8.65139 23.7164 8.29139ZM6.63638 9.83139L9.70638 7.27139C10.1364 6.91139 10.1964 6.28139 9.83638 5.86139C9.48638 5.43139 8.85638 5.38139 8.43638 5.73139L5.35638 8.29139C4.93638 8.65139 4.87638 9.28139 5.23638 9.70139C5.58638 10.1314 6.21638 10.1814 6.63638 9.83139ZM14.5364 7.28139C9.56638 7.28139 5.53638 11.3114 5.53638 16.2814C5.53638 21.2514 9.56638 25.2814 14.5364 25.2814C19.5064 25.2814 23.5364 21.2514 23.5364 16.2814C23.5364 11.3114 19.5064 7.28139 14.5364 7.28139ZM14.5364 23.2814C10.6764 23.2814 7.53638 20.1414 7.53638 16.2814C7.53638 12.4214 10.6764 9.28139 14.5364 9.28139C18.3964 9.28139 21.5364 12.4214 21.5364 16.2814C21.5364 20.1414 18.3964 23.2814 14.5364 23.2814Z"
                      fill="red"
                    />
                  </svg>

                  <Text
                    color={"red"}
                    fontSize={"10px"}
                    fontStyle={"normal"}
                    fontWeight={700}
                  >
                    1 Days Left
                  </Text>
                </Box>
              </Box>
            </Box>

            <Box>
              <Text
                color={"#6B7A99"}
                fontSize={"14px"}
                fontStyle={"normal"}
                fontWeight={700}
              >
                + New Task
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default InWorkTodo;
