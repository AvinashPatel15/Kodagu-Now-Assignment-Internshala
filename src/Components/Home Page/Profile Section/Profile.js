"use clients";
import { Avatar, Box, Text } from "@chakra-ui/react";
import React from "react";

const Profile = () => {
  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        {/* Profile Logo */}
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
              d="M14 14.5C16.0627 14.5 17.7333 12.8293 17.7333 10.7667C17.7333 8.70399 16.0627 7.03333 14 7.03333C11.9373 7.03333 10.2667 8.70399 10.2667 10.7667C10.2667 12.8293 11.9373 14.5 14 14.5ZM14 16.3667C11.508 16.3667 6.53333 17.6173 6.53333 20.1V21.0333C6.53333 21.5467 6.95333 21.9667 7.46666 21.9667H20.5333C21.0467 21.9667 21.4667 21.5467 21.4667 21.0333V20.1C21.4667 17.6173 16.492 16.3667 14 16.3667Z"
              fill="#C3CAD9"
            />
          </svg>
        </Box>

        {/* Option Logo */}
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
              d="M8.39999 12.6333C7.37333 12.6333 6.53333 13.4733 6.53333 14.5C6.53333 15.5267 7.37333 16.3667 8.39999 16.3667C9.42666 16.3667 10.2667 15.5267 10.2667 14.5C10.2667 13.4733 9.42666 12.6333 8.39999 12.6333ZM19.6 12.6333C18.5733 12.6333 17.7333 13.4733 17.7333 14.5C17.7333 15.5267 18.5733 16.3667 19.6 16.3667C20.6267 16.3667 21.4667 15.5267 21.4667 14.5C21.4667 13.4733 20.6267 12.6333 19.6 12.6333ZM14 12.6333C12.9733 12.6333 12.1333 13.4733 12.1333 14.5C12.1333 15.5267 12.9733 16.3667 14 16.3667C15.0267 16.3667 15.8667 15.5267 15.8667 14.5C15.8667 13.4733 15.0267 12.6333 14 12.6333Z"
              fill="#C3CAD9"
            />
          </svg>
        </Box>
      </Box>

      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={7}
        justifyContent={"center"}
        alignItems={"center"}
        marginTop={5}
      >
        {/* Avatar */}
        <Box>
          <Avatar
            size="2xl"
            name="Alfred Bryant"
            src="https://bit.ly/code-beast"
          />
        </Box>
        {/* Information */}
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={1}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Text fontSize={"16px"} fontWeight={700} color={"#6B7A99"}>
            Hello Alfred Bryant
          </Text>
          <Text fontSize={"14px"} fontWeight={700} color={"#6B7A99"}>
            adrain.nader@yahoo.com
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default Profile;
