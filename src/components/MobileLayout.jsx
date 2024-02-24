import React from "react";
import { Box, VStack, Heading, useDisclosure, Button, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton } from "@chakra-ui/react";
import SlidingMenu from "./SlidingMenu";
import UserPanel from "./UserPanel";
import Footer from "./Footer";

const MobileLayout = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Button onClick={onOpen} m={4} size="sm">
        Menu
      </Button>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <SlidingMenu />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
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
