import React from "react";
import { Box, VStack, Heading } from "@chakra-ui/react";
import SlidingMenu from "./SlidingMenu";
import UserPanel from "./UserPanel";
import Footer from "./Footer";

const MobileLayout = ({ children }) => {
  return (
    <Box>
      <SlidingMenu />
      <VStack minH="100vh" justify="space-between">
        <Box as="header">
          <Heading size="lg" p={4} textAlign="center">
            Team Pogi PHPT Exchange
          </Heading>
        </Box>
        <UserPanel />
        <Box as="main" flex="1" p={4}>
          {children}
        </Box>
        <Footer />
      </VStack>
    </Box>
  );
};

export default MobileLayout;
