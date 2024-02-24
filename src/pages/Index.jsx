import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, Select, VStack, Heading, useToast } from "@chakra-ui/react";
import { FaExchangeAlt } from "react-icons/fa";

const Index = () => {
  const [email, setEmail] = useState("");
  const [amountPHPT, setAmountPHPT] = useState("");
  const [currency, setCurrency] = useState("");
  const [username, setUsername] = useState("");
  const toast = useToast();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const webhookUrl = "https://hooks.zapier.com/hooks/catch/16946926/3e749lm/";

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        body: JSON.stringify({
          email: email,
          amountPHPT: amountPHPT,
          currency: currency,
          ...(currency === "CHIPS" && { username: username }),
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        toast({
          title: "Request submitted successfully.",
          description: "Your exchange request is being processed.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        // Reset form
        setAmountPHPT("");
      } else {
        // Handle errors if not successful
        toast({
          title: "Submission failed.",
          description: "There was an issue submitting your request. Please try again.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      // Handle network errors
      toast({
        title: "Network error.",
        description: "Please check your internet connection and try again.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <VStack p={8} align="center">
      <Heading size="lg" mb={6}>
        Team Pogi PHPT Exchange
      </Heading>
      <Box p={8} borderWidth="1px" borderRadius="lg" boxShadow="xl" w="full" maxW="md">
        <VStack as="form" spacing={4} onSubmit={handleSubmit}>
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
          </FormControl>
          <FormControl id="amount" isRequired>
            <FormLabel>Amount in PHPT</FormLabel>
            <Input type="number" value={amountPHPT} onChange={(e) => setAmountPHPT(e.target.value)} placeholder="Enter amount in PHPT" />
          </FormControl>
          {currency === "CHIPS" && (
            <FormControl id="username" isRequired>
              <FormLabel>Username</FormLabel>
              <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter your username for CHIPS" />
            </FormControl>
          )}
          <FormControl id="currency" isRequired>
            <FormLabel>Exchange Currency</FormLabel>
            <Select value={currency} onChange={(e) => setCurrency(e.target.value)} placeholder="Select currency">
              <option value="AED">AED</option>
              <option value="PHP">PHP</option>
              <option value="CHIPS">CHIPS</option>
            </Select>
          </FormControl>
          {/* Conditional rendering for username field */}
          <Button colorScheme="teal" type="submit">
            Submit
          </Button>
          {/* Add the modal popup logic here */}
        </VStack>
      </Box>
    </VStack>
  );
};

export default Index;
