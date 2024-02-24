import React from "react";
import { HStack, IconButton } from "@chakra-ui/react";
import { FaUser, FaHistory, FaWallet, FaSpa } from "react-icons/fa";

const Footer = () => {
  return (
    <HStack as="footer" spacing={4} p={4} justifyContent="space-around">
      <IconButton aria-label="User Profile" icon={<FaUser />} />
      <IconButton aria-label="Transaction History" icon={<FaHistory />} />
      <IconButton aria-label="Wallet" icon={<FaWallet />} />
      <IconButton aria-label="Spa" icon={<FaSpa />} />
    </HStack>
  );
};

export default Footer;
