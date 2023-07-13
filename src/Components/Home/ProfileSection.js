"use client";
import { Avatar, Box, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import Profile from "./Profile";
import TableLinks from "./TableLinks";
import SocialLinks from "./SocialLinks";

const ProfileSection = () => {
  return (
    <>
      <Box width={"100%"} paddingInline={10} paddingBlock={3}>
        {/* Profile Photo */}
        <Profile />

        {/* Table */}
        <TableLinks />

        {/* Social Links */}
        <SocialLinks />
      </Box>
    </>
  );
};

export default ProfileSection;
