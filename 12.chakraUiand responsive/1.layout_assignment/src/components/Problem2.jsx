import { Box, Grid, GridItem } from "@chakra-ui/react";
import React from "react";

const Problem2 = () => {
  const styleFunction = {
    textAlign: "center",
    fontSize: "40px",
    fontWeight: "bold",
    color: "white",
  };
  return (
    <Grid
      mb="2rem"
      mt="2rem"
      p="2rem"
      gap={5}
      templateAreas={{
        base: `"one"
                  "two"
                  "three"`,
        xl: `"one two"
               "three two"`,
      }}
      gridTemplateRows={{
        base: "100px 100px 100px",
        xl: "100px 1fr",
      }}
      gridTemplateColumns={{
        base: "1fr",
        sm: "1fr",
        xl: "1fr 0.5fr",
      }}
    >
      <GridItem {...styleFunction} area={"one"} bg="blue.600">
        1
      </GridItem>
      <GridItem {...styleFunction} area={"two"} bg="red.500">
        2
      </GridItem>
      <GridItem {...styleFunction} area={"three"} bg="blue.200">
        3
      </GridItem>
    </Grid>
  );
};

export default Problem2;
