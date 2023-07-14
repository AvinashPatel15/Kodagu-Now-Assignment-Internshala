"use client";
import { Avatar, Box, Button, Input, Text } from "@chakra-ui/react";
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

            <Box
              borderRadius={10}
              boxShadow={"0px 2px 5px 0px rgba(38, 51, 77, 0.03)"}
              backgroundColor={"white"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              gap={7}
              padding={4}
              width={"100%"}
            >
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                gap={2}
              >
                <Box cursor={"pointer"}>
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
                      d="M20.8925 8.80249C20.7057 8.61523 20.452 8.51 20.1875 8.51C19.923 8.51 19.6693 8.61523 19.4825 8.80249L14.5925 13.6825L9.7025 8.79249C9.51567 8.60523 9.26202 8.5 8.9975 8.5C8.73298 8.5 8.47933 8.60523 8.2925 8.79249C7.9025 9.18249 7.9025 9.81249 8.2925 10.2025L13.1825 15.0925L8.2925 19.9825C7.9025 20.3725 7.9025 21.0025 8.2925 21.3925C8.6825 21.7825 9.3125 21.7825 9.7025 21.3925L14.5925 16.5025L19.4825 21.3925C19.8725 21.7825 20.5025 21.7825 20.8925 21.3925C21.2825 21.0025 21.2825 20.3725 20.8925 19.9825L16.0025 15.0925L20.8925 10.2025C21.2725 9.82249 21.2725 9.18249 20.8925 8.80249Z"
                      fill="#C3CAD9"
                    />
                  </svg>
                </Box>

                <Box>
                  <Input
                    placeholder="Task name or type"
                    size="xs"
                    border={"none"}
                    _active={{ border: "none" }}
                  />
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
                        d="M17.4 9.5L17.16 8.3C17.07 7.84 16.66 7.5 16.18 7.5H9C8.45 7.5 8 7.95 8 8.5V23.5C8 24.05 8.45 24.5 9 24.5C9.55 24.5 10 24.05 10 23.5V17.5H15.6L15.84 18.7C15.93 19.17 16.34 19.5 16.82 19.5H22C22.55 19.5 23 19.05 23 18.5V10.5C23 9.95 22.55 9.5 22 9.5H17.4Z"
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
                        d="M20.2539 20H9.67393C7.58393 20 5.72393 18.47 5.52393 16.39C5.29393 14.01 7.16393 12 9.50393 12H21.8639C23.1739 12 24.3639 12.94 24.4939 14.24C24.6439 15.74 23.4739 17 22.0039 17H11.5039C10.9539 17 10.5039 16.55 10.5039 16C10.5039 15.45 10.9539 15 11.5039 15H20.2539C20.6639 15 21.0039 14.66 21.0039 14.25C21.0039 13.84 20.6639 13.5 20.2539 13.5H11.6439C10.3339 13.5 9.14393 14.44 9.01393 15.74C8.86393 17.24 10.0339 18.5 11.5039 18.5H21.8339C23.9239 18.5 25.7839 16.97 25.9839 14.89C26.2139 12.5 24.3439 10.5 22.0039 10.5H9.73393C6.86393 10.5 4.29393 12.6 4.02393 15.46C3.72393 18.75 6.28393 21.5 9.50393 21.5H20.2539C20.6639 21.5 21.0039 21.16 21.0039 20.75C21.0039 20.34 20.6639 20 20.2539 20Z"
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
                        d="M14.99 5.5C9.47 5.5 5 9.98 5 15.5C5 21.02 9.47 25.5 14.99 25.5C20.52 25.5 25 21.02 25 15.5C25 9.98 20.52 5.5 14.99 5.5ZM15 23.5C10.58 23.5 7 19.92 7 15.5C7 11.08 10.58 7.5 15 7.5C19.42 7.5 23 11.08 23 15.5C23 19.92 19.42 23.5 15 23.5ZM14.78 10.5H14.72C14.32 10.5 14 10.82 14 11.22V15.94C14 16.29 14.18 16.62 14.49 16.8L18.64 19.29C18.98 19.49 19.42 19.39 19.62 19.05C19.83 18.71 19.72 18.26 19.37 18.06L15.5 15.76V11.22C15.5 10.82 15.18 10.5 14.78 10.5Z"
                        fill="#C3CAD9"
                      />
                    </svg>
                  </Box>
                </Box>

                <Box>
                  <Button
                    display={"inline-flex"}
                    paddingBlock={"5px"}
                    paddingInline={"10px"}
                    fontSize={"14px"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    flexShrink={0}
                    borderRadius={"5px"}
                    border={"2px solid #3361FF"}
                    backgroundColor={"#3361FF"}
                    color={"white"}
                  >
                    Save
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ReviewTodo;
