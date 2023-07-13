"use client";
import {
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { MdNotificationsActive } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";

const ProfileButton = () => {
  return (
    <>
      <Menu isLazy>
        <MenuButton
          as={Button}
          size="sm"
          paddingBlock={6}
          paddingInline={2}
          rounded="full"
          boxShadow={"0px 2px 5px 0px rgba(38, 51, 77, 0.03)"}
          backgroundColor={"white"}
          _hover={{ backgroundColor: "white" }}
          _active={{ backgroundColor: "white" }}
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
        </MenuButton>
        <MenuList
          zIndex={99}
          border="2px solid"
          borderColor={"gray.700"}
          boxShadow="4px 4px 0"
        >
          <MenuItem>
            <VStack justify="start" alignItems="left">
              <Text fontWeight="500">Clayton Santos</Text>
            </VStack>
          </MenuItem>
          <MenuDivider />
          <MenuItem icon={<CgProfile size="22px" />}>
            <Text fontWeight="500">Profile</Text>
          </MenuItem>
          <MenuItem icon={<MdNotificationsActive size="22px" />}>
            <Text fontWeight="500">Notification</Text>
          </MenuItem>
          <MenuItem icon={<AiOutlineClose size="22px" />}>
            <Text fontWeight="500">Sign Out</Text>
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default ProfileButton;
