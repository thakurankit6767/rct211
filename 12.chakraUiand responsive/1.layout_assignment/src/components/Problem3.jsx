import { Box, Flex, Stack } from "@chakra-ui/react";
import React from "react";

const Problem3 = () => {
  return (
    <Stack p="1rem" fontSize={40} mb="15px" color="white" fontWeight="bold">
      <Flex gap={2} direction={{ base: "column", lg: "row", xl: "row" }}>
        <Box bg="orange.300" w="100%" h={[200, 100, 100]}>
          1
        </Box>
        <Box bg="orange.300" w="100%" h={[200, 100, 100]}>
          2
        </Box>
      </Flex>
      <Box w="100%" bg="red.500" h="200">
        3
      </Box>
      <Flex gap={2} direction={{ base: "column", lg: "row", xl: "row" }}>
        <Box bg="blue.300" w="100%" h={[200, 100, 100]}>
          4
        </Box>
        <Box bg="blue.300" w="100%" h={[200, 100, 100]}>
          5
        </Box>
        <Box
          bg="blue.300"
          w="100%"
          h={[200, 100, 100]}
          display={{ base: "none", sm: "none", xl: "block" }}
        >
          6
        </Box>
      </Flex>
    </Stack>
  );
};

export default Problem3;
