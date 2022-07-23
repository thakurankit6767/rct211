import React from "react";
import { Box, Image, Button, Stack } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <div>
      <Box
        border={"1px solid lightgrey"}
        height="60px"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        padding="20px"
      >
        <Box>
          <Image
            src="https://www.wework4days.com/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fassets%2Fimages%2Flogo.4cc40a9ad62028ac0ab9af556de0b081.svg&w=32&q=75"
            height="32px"
            width="32px"
          />
        </Box>

        <Box>
          <Stack direction="row" spacing={4} align="center">
            <Button
              colorScheme="teal"
              variant="ghost"
              color="linear(to-tr, #67057e, #00d4ff)"
              height="40px"
            >
              Sign In
            </Button>
            <Button
              colorScheme="teal"
              variant="outline"
              color="linear(to-tr, #67057e, #00d4ff)"
              height="40px"
            >
              Sign Up
            </Button>
            <Button
              bgGradient="linear(to-r, #7928CA, #00d4ff)"
              color="white"
              variant="solid"
              height="40px"
              width="120px"
            >
              Post a Job
            </Button>
          </Stack>
        </Box>
      </Box>
    </div>
  );
};

export default Navbar;
