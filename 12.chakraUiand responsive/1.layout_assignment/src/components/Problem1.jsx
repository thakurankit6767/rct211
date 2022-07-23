import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";

const Problem1 = () => {
  const styleFunction = {
    color: "white",
    textAlign: "center",
    fontSize: 40,
    fontWeight: "ligth",
  };

  return (
    <Box mt="12px">
      <SimpleGrid
        gridTemplateColumns={{
          base: "1fr",
          lg: "0.5fr 1fr 0.5fr",
          xl: "0.5fr 1fr 0.5fr",
        }}
        p="1.5rem"
      >
        <Box
          w="100%"
          h={[200, 200, 200, 200]}
          bg="blue.500"
          {...styleFunction}
          area={"n"}
        >
          NAV
        </Box>
        <Box
          w="100%"
          h={[300, 300, 300, 200]}
          bg="orange.300"
          {...styleFunction}
          area={"c"}
        >
          Content
        </Box>
        <Box
          w="100%"
          h={[200, 200, 200, 200]}
          bg="red.500"
          {...styleFunction}
          area={"w"}
        >
          Widget
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Problem1;
