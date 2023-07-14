"use client";
import { Avatar, Box, Text } from "@chakra-ui/react";
import React from "react";

const DevelopmentSection = () => {
  return (
    <>
      <Box
        width={"450px"}
        height={"340px"}
        borderRadius={30}
        boxShadow={"0px 2px 5px 0px rgba(38, 51, 77, 0.03)"}
        backgroundColor={"white"}
        display={{ base: "none", lg: "flex" }}
        flexDirection={"column"}
        justifyContent={"center"}
        gap={9}
        padding={5}
      >
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={3}
          >
            <Box>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="31"
                viewBox="0 0 30 31"
                fill="none"
              >
                <rect
                  x="11"
                  y="12.5"
                  width="7"
                  height="7"
                  rx="3.5"
                  fill="#33BFFF"
                />
              </svg>
            </Box>

            <Box>
              <Text
                color={"#4D5E80"}
                fontSize={"14px"}
                fontStyle={"normal"}
                fontWeight={700}
              >
                Development Apps
              </Text>
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
                  d="M20 10.5H17C16.45 10.5 16 10.95 16 11.5C16 12.05 16.45 12.5 17 12.5H20C21.65 12.5 23 13.85 23 15.5C23 17.15 21.65 18.5 20 18.5H17C16.45 18.5 16 18.95 16 19.5C16 20.05 16.45 20.5 17 20.5H20C22.76 20.5 25 18.26 25 15.5C25 12.74 22.76 10.5 20 10.5ZM11 15.5C11 16.05 11.45 16.5 12 16.5H18C18.55 16.5 19 16.05 19 15.5C19 14.95 18.55 14.5 18 14.5H12C11.45 14.5 11 14.95 11 15.5ZM13 18.5H10C8.35 18.5 7 17.15 7 15.5C7 13.85 8.35 12.5 10 12.5H13C13.55 12.5 14 12.05 14 11.5C14 10.95 13.55 10.5 13 10.5H10C7.24 10.5 5 12.74 5 15.5C5 18.26 7.24 20.5 10 20.5H13C13.55 20.5 14 20.05 14 19.5C14 18.95 13.55 18.5 13 18.5Z"
                  fill="#C3CAD9"
                />
              </svg>
            </Box>
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
                d="M20.8925 8.80249C20.7057 8.61523 20.452 8.51 20.1875 8.51C19.923 8.51 19.6693 8.61523 19.4825 8.80249L14.5925 13.6825L9.7025 8.79249C9.51567 8.60523 9.26202 8.5 8.9975 8.5C8.73298 8.5 8.47933 8.60523 8.2925 8.79249C7.9025 9.18249 7.9025 9.81249 8.2925 10.2025L13.1825 15.0925L8.2925 19.9825C7.9025 20.3725 7.9025 21.0025 8.2925 21.3925C8.6825 21.7825 9.3125 21.7825 9.7025 21.3925L14.5925 16.5025L19.4825 21.3925C19.8725 21.7825 20.5025 21.7825 20.8925 21.3925C21.2825 21.0025 21.2825 20.3725 20.8925 19.9825L16.0025 15.0925L20.8925 10.2025C21.2725 9.82249 21.2725 9.18249 20.8925 8.80249Z"
                fill="#C3CAD9"
              />
            </svg>
          </Box>
        </Box>

        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"flex-start"}
          gap={10}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"flex-start"}
            gap={5}
          >
            <Box
              display={"flex"}
              gap={4}
              justifyContent={"center"}
              alignItems={"center"}
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
                    d="M22.29 19.21L17.71 23.79C17.32 24.18 16.68 24.18 16.29 23.79C15.9 23.4 15.9 22.76 16.29 22.37L19.17 19.5H9C8.45 19.5 8 19.05 8 18.5V8.5C8 7.95 8.45 7.5 9 7.5C9.55 7.5 10 7.95 10 8.5V17.5H19.17L16.29 14.63C15.9 14.24 15.9 13.6 16.29 13.21C16.68 12.82 17.32 12.82 17.71 13.21L22.29 17.79C22.68 18.18 22.68 18.82 22.29 19.21Z"
                    fill="#C3CAD9"
                  />
                </svg>
              </Box>

              <Box>
                <Text
                  color={"#4D5E80"}
                  fontSize={"12px"}
                  fontStyle={"normal"}
                  fontWeight={700}
                >
                  4 Subtasks
                </Text>
              </Box>
            </Box>

            <Box
              display={"flex"}
              gap={4}
              justifyContent={"center"}
              alignItems={"center"}
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
                    d="M22.35 13.54C21.67 10.09 18.64 7.5 15 7.5C12.11 7.5 9.6 9.14 8.35 11.54C5.34 11.86 3 14.41 3 17.5C3 20.81 5.69 23.5 9 23.5H22C24.76 23.5 27 21.26 27 18.5C27 15.86 24.95 13.72 22.35 13.54Z"
                    fill="#C3CAD9"
                  />
                </svg>
              </Box>

              <Box>
                <Text
                  color={"#4D5E80"}
                  fontSize={"12px"}
                  fontStyle={"normal"}
                  fontWeight={700}
                >
                  3 Files
                </Text>
              </Box>
            </Box>

            <Box
              display={"flex"}
              gap={4}
              justifyContent={"flex-start"}
              alignItems={"center"}
            >
              <Box>
                <Avatar
                  name="Segun Adebayo"
                  src="https://bit.ly/sage-adebayo"
                  width={"30px"}
                  height={"30px"}
                  flexShrink={0}
                />
              </Box>

              <Box>
                <Text
                  color={"#4D5E80"}
                  fontSize={"12px"}
                  fontStyle={"normal"}
                  fontWeight={700}
                >
                  Tyler Norman
                </Text>
              </Box>
            </Box>
          </Box>

          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"flex-start"}
            gap={5}
          >
            <Box
              display={"flex"}
              gap={4}
              justifyContent={"center"}
              alignItems={"center"}
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
                <Text
                  color={"#4D5E80"}
                  fontSize={"12px"}
                  fontStyle={"normal"}
                  fontWeight={700}
                >
                  Priority Enabled
                </Text>
              </Box>
            </Box>

            <Box
              display={"flex"}
              gap={4}
              justifyContent={"center"}
              alignItems={"center"}
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
                    d="M23 5.5H7C5.9 5.5 5 6.4 5 7.5V19.5C5 20.6 5.9 21.5 7 21.5H21L25 25.5V7.5C25 6.4 24.1 5.5 23 5.5ZM20 17.5H10C9.45 17.5 9 17.05 9 16.5C9 15.95 9.45 15.5 10 15.5H20C20.55 15.5 21 15.95 21 16.5C21 17.05 20.55 17.5 20 17.5ZM20 14.5H10C9.45 14.5 9 14.05 9 13.5C9 12.95 9.45 12.5 10 12.5H20C20.55 12.5 21 12.95 21 13.5C21 14.05 20.55 14.5 20 14.5ZM20 11.5H10C9.45 11.5 9 11.05 9 10.5C9 9.95 9.45 9.5 10 9.5H20C20.55 9.5 21 9.95 21 10.5C21 11.05 20.55 11.5 20 11.5Z"
                    fill="#C3CAD9"
                  />
                </svg>
              </Box>

              <Box>
                <Text
                  color={"#4D5E80"}
                  fontSize={"12px"}
                  fontStyle={"normal"}
                  fontWeight={700}
                >
                  7 Comments
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={5}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"flex-start"}
            gap={1}
          >
            <Text
              color={"#7D8FB3"}
              fontSize={"12px"}
              fontStyle={"normal"}
              fontWeight={900}
            >
              START DATE
            </Text>
            <Text
              color={"#4D5E80"}
              fontSize={"12px"}
              fontStyle={"normal"}
              fontWeight={900}
            >
              Sep 3, 9:00 pm
            </Text>
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
                d="M12.2925 9.79376C11.9025 10.1838 11.9025 10.8138 12.2925 11.2038L16.1725 15.0838L12.2925 18.9638C11.9025 19.3538 11.9025 19.9838 12.2925 20.3738C12.6825 20.7638 13.3125 20.7638 13.7025 20.3738L18.2925 15.7838C18.6825 15.3938 18.6825 14.7638 18.2925 14.3738L13.7025 9.78376C13.3225 9.40376 12.6825 9.40376 12.2925 9.79376Z"
                fill="#C3CAD9"
              />
            </svg>
          </Box>

          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"flex-start"}
            gap={1}
          >
            <Text
              color={"#7D8FB3"}
              fontSize={"12px"}
              fontStyle={"normal"}
              fontWeight={900}
            >
              DUE DATE
            </Text>
            <Text
              color={"#4D5E80"}
              fontSize={"12px"}
              fontStyle={"normal"}
              fontWeight={900}
            >
              Sep 4, 9:00 pm
            </Text>
          </Box>

          <Box
            display={"flex"}
            gap={2}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box
              padding={"6px"}
              border={"2px solid #29CC39"}
              borderRadius={"50%"}
              backgroundColor={"#29CC39"}
              boxShadow={"0px 10px 30px 0px rgba(41, 204, 57, 0.20)"}
            >
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
                  d="M8 8.50114V16.7891C8 17.4211 8.696 17.8051 9.232 17.4611L15.744 13.3171C16.24 13.0051 16.24 12.2851 15.744 11.9651L9.232 7.82914C8.696 7.48514 8 7.86914 8 8.50114Z"
                  fill="white"
                />
              </svg>
            </Box>

            <Box>
              <Text
                color={"#4D5E80"}
                fontSize={"12px"}
                fontStyle={"normal"}
                fontWeight={900}
              >
                0:00
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default DevelopmentSection;
