import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, VStack, useToast } from "@chakra-ui/react";
import { FaExchangeAlt } from "react-icons/fa";

const Index = () => {
  const [amountPHPT, setAmountPHPT] = useState("");
  const toast = useToast();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const webhookUrl = "https://hooks.zapier.com/hooks/catch/16946926/3e749lm/";

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        body: JSON.stringify({
          amountPHPT: amountPHPT,
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
    <Box p={8}>
      <VStack as="form" spacing={4} onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel htmlFor="amountPHPT">Amount in PHPT</FormLabel>
          <Input id="amountPHPT" type="number" value={amountPHPT} onChange={(e) => setAmountPHPT(e.target.value)} placeholder="Enter amount in PHPT" />
        </FormControl>
        <Button leftIcon={<FaExchangeAlt />} colorScheme="teal" type="submit" isLoading={false} loadingText="Submitting">
          Submit Exchange Request
        </Button>
      </VStack>
    </Box>
  );
};

export default Index;
