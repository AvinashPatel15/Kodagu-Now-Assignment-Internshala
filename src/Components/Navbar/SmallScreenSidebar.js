"use client";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useRef } from "react";

const SmallScreenSidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Box ref={btnRef} onClick={onOpen}>
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
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            {/* Search Button */}
            <Box marginTop={10}>
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
                  width={"100%"}
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

            {/* Links */}
            <Box
              marginTop={10}
              paddingLeft={2}
              display={"flex"}
              flexDirection={"column"}
              gap={7}
              justifyContent={"center"}
              alignItems={"flex-start"}
            >
              <Box
                color={"#7D8FB3"}
                fontSize={"18px"}
                fontStyle={"normal"}
                fontWeight={700}
                _hover={{color:"black"}}
                cursor={"pointer"}
              >
                Dashboard
              </Box>
              <Box
                color={"#7D8FB3"}
                fontSize={"18px"}
                fontStyle={"normal"}
                fontWeight={700}
                _hover={{color:"black"}}
                cursor={"pointer"}
              >
                About Us
              </Box>
              <Box
                color={"#7D8FB3"}
                fontSize={"18px"}
                fontStyle={"normal"}
                fontWeight={700}
                _hover={{color:"black"}}
                cursor={"pointer"}
              >
                News
              </Box>
              <Box
                color={"#7D8FB3"}
                fontSize={"18px"}
                fontStyle={"normal"}
                fontWeight={700}
                _hover={{color:"black"}}
                cursor={"pointer"}
              >
                User Policy
              </Box>
              <Box
                color={"#7D8FB3"}
                fontSize={"18px"}
                fontStyle={"normal"}
                fontWeight={700}
                _hover={{color:"black"}}
                cursor={"pointer"}
              >
                Contacts
              </Box>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SmallScreenSidebar;
