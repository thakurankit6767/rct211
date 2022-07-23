import React from "react";
import {
  Box,
  Image,
  Button,
  Text,
  InputGroup,
  Input,
  Flex,
} from "@chakra-ui/react";
import Navbar from "./Navbar";

const Page = () => {
  return (
    <div>
      <Navbar />
      <Box
        height="350px"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box>
          <Box display="flex" flexDirection="column">
            <Box textAlign="center">
              <Text fontSize="6xl" fontWeight="bold">
                Find The Right
              </Text>
            </Box>
            <Box
              textAlign="center"
              display="flex"
              justifyContent="center"
              gap="20px"
            >
              <Text
                bgGradient="linear(to-r, #7928CA, #00d4ff)"
                bgClip="text"
                fontSize="6xl"
                fontWeight="bold"
              >
                Four-Day
              </Text>
              <Text fontSize="6xl" fontWeight="bold">
                Week Job
              </Text>
            </Box>
          </Box>
          <Box
          // border={"2px solid red"}
          >
            <Box
              marginTop="30px"
              // border={"2px solid red"}
            >
              <InputGroup display="flex" justifyContent="center" gap="10px">
                <Input
                  boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
                  placeholder="Type job title or keyword"
                  width="400px"
                  borderRadius="13px"
                  height="45px"
                />
                <Button borderRadius="13px" height="45px">
                  <i class="fa-solid fa-filter"></i>
                </Button>
              </InputGroup>
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              gap="20px"
              marginTop="20px"
              // border={"2px solid red"}
            >
              <Button
                width="140px"
                bgColor="#7928CA"
                color="white"
                border="2px"
                borderColor="purple.900"
              >
                Remoting
              </Button>
              <Button
                width="140px"
                bgColor="#7928CA"
                color="white"
                border="2px"
                borderColor="purple.900"
              >
                Tech
              </Button>
              <Button
                width="140px"
                bgColor="#7928CA"
                color="white"
                border="2px"
                borderColor="purple.900"
              >
                Marketing
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        backgroundColor="gray.300"
        height="auto"
        width={"100%"}
        paddingTop="30px"
        marginTop="30px"
      >
        <Box width="50%" margin="auto">
          <Box
            textAlign="center"
            display="flex"
            justifyContent="center"
            gap="1rem"
          >
            <Text
              fontSize="4xl"
              color="#7928CA"
              fontWeight="bold"
              textAlign="center"
            >
              Recent
            </Text>
            <Text fontSize="4xl" fontWeight="bold">
              Jobs
            </Text>
          </Box>
          <Box
            bgColor="white"
            width="100%"
            padding="10px"
            marginTop="20px"
            border="2px solid #7928CA"
            height="100px"
            gap="10px"
            borderRadius="20px"
            display="flex"
            
          >
            <Box>
              <Image
                width="32px"
                height="32px"
                src="https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F1f61d027-d061-4780-9198-fb8c716d6e0a&w=1920&q=75"
              />
            </Box>
            <Box>
              <Box width="600px" display="flex" justifyContent="space-between">
                <Box>
                  <Text fontSize="13px">TailWind</Text>
                </Box>
                <Box display="flex" gap="8px" >
                  <Image
                    width="20px"
                    height="20px"
                    src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/toss-face/331/fire_1f525.png"
                  />
                  <Image
                    width="20px"
                    height="20px"
                    src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/globe-showing-americas_1f30e.png"
                  />
                  <Image
                    width="20px"
                    height="20px"
                    src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/toss-face/331/pushpin_1f4cc.png"
                  />
                  <Image
                    width="20px"
                    height="20px"
                    src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/toss-face/331/bookmark_1f516.png"
                  />
                </Box>
              </Box>
              <Box>
                <Text fontSize="20px" fontWeight="bold">
                  Lead Producer
                </Text>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Text fontSize="14px">£50k - £65k</Text>
                <Text fontSize="13px">Full-Time</Text>
              </Box>
            </Box>
          </Box>
          <Box
            bgColor="white"
            width="100%"
            padding="10px"
            marginTop="20px"
            border="2px solid #7928CA"
            height="100px"
            gap="10px"
            borderRadius="20px"
            display="flex"
          >
            <Box>
              <Image
                width="32px"
                height="32px"
                src="https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F1f61d027-d061-4780-9198-fb8c716d6e0a&w=1920&q=75"
              />
            </Box>
            <Box>
              <Box width="600px" display="flex" justifyContent="space-between">
                <Box>
                  <Text fontSize="13px">TailWind</Text>
                </Box>
                <Box display="flex" gap="8px">
                  <Image
                    width="20px"
                    height="20px"
                    src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/toss-face/331/fire_1f525.png"
                  />
                  <Image
                    width="20px"
                    height="20px"
                    src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/globe-showing-americas_1f30e.png"
                  />
                  <Image
                    width="20px"
                    height="20px"
                    src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/toss-face/331/pushpin_1f4cc.png"
                  />
                  <Image
                    width="20px"
                    height="20px"
                    src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/toss-face/331/bookmark_1f516.png"
                  />
                </Box>
              </Box>
              <Box>
                <Text fontSize="20px" fontWeight="bold">
                  Lead Game Devloper
                </Text>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Text fontSize="14px">£40k - £50k</Text>
                <Text fontSize="13px">Full-Time</Text>
              </Box>
            </Box>
          </Box>
          <Box
            bgColor="white"
            width="100%"
            padding="10px"
            marginTop="20px"
            border="2px solid #7928CA"
            height="100px"
            gap="10px"
            borderRadius="20px"
            display="flex"
          >
            <Box>
              <Image
                width="32px"
                height="32px"
                src="https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2Fd74e52d1-6529-4ab1-98b2-a27b1b9947ed&w=1920&q=75"
              />
            </Box>
            <Box>
              <Box width="600px" display="flex" justifyContent="space-between">
                <Box>
                  <Text fontSize="13px">SlimWiki</Text>
                </Box>
                <Box display="flex" gap="8px">
                  <Image
                    width="20px"
                    height="20px"
                    src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/globe-showing-americas_1f30e.png"
                  />
                  <Image
                    width="20px"
                    height="20px"
                    src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/toss-face/331/bookmark_1f516.png"
                  />
                </Box>
              </Box>
              <Box>
                <Text fontSize="20px" fontWeight="bold">
                  Full-Stack JavaScript Developer (Node.js / Rea...
                </Text>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Text fontSize="14px">Mid, Senior</Text>
                <Text fontSize="13px">Full-Time</Text>
              </Box>
            </Box>
          </Box>
          <Box
            bgColor="white"
            width="100%"
            padding="10px"
            marginTop="20px"
            height="100px"
            gap="10px"
            borderRadius="20px"
            display="flex"
          >
            <Box>
              <Image
                width="32px"
                height="32px"
                margin={"auto"}
                position="initial"
                src="https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2Fd4f13259-d651-4b8a-8115-48bdfabd24aa&w=1920&q=75"
              />
            </Box>
            <Box>
              <Box width="600px" display="flex" justifyContent="space-between">
                <Box>
                  <Text fontSize="13px">The WanderLust Group</Text>
                </Box>
                <Box display="flex" gap="8px">
                  <Image
                    width="20px"
                    height="20px"
                    src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/globe-showing-americas_1f30e.png"
                  />
                  <Image
                    width="20px"
                    height="20px"
                    src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/toss-face/331/bookmark_1f516.png"
                  />
                </Box>
              </Box>
              <Box>
                <Text fontSize="20px" fontWeight="bold">
                  Director Of Marketing
                </Text>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Text fontSize="14px">£150k</Text>
                <Text fontSize="13px">Full-Time</Text>
              </Box>
            </Box>
          </Box>
          <Box
            bgColor="white"
            width="100%"
            padding="10px"
            marginTop="20px"
            height="100px"
            gap="10px"
            borderRadius="20px"
            display="flex"
          >
            <Box>
              <Image
                width="32px"
                height="32px"
                src="https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F0ecc5576-0a1c-4787-880b-6e23c379550e&w=1920&q=75"
              />
            </Box>
            <Box>
              <Box width="600px" display="flex" justifyContent="space-between">
                <Box>
                  <Text fontSize="13px">JumpSearch</Text>
                </Box>
                <Box display="flex" gap="8px">
                  <Image
                    width="20px"
                    height="20px"
                    src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/toss-face/331/bookmark_1f516.png"
                  />
                </Box>
              </Box>
              <Box>
                <Text fontSize="20px" fontWeight="bold">
                  Senior Software Engineer(.NET)
                </Text>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Text fontSize="14px">Senior</Text>
                <Text fontSize="13px">Full-Time</Text>
              </Box>
            </Box>
          </Box>
          <Box
            bgColor="white"
            width="100%"
            padding="10px"
            marginTop="20px"
            height="100px"
            gap="10px"
            borderRadius="20px"
            display="flex"
          >
            <Box>
              <Image
                width="32px"
                height="32px"
                src="https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F0ecc5576-0a1c-4787-880b-6e23c379550e&w=1920&q=75"
              />
            </Box>
            <Box>
              <Box width="600px" display="flex" justifyContent="space-between">
                <Box>
                  <Text fontSize="13px">JumpSearch</Text>
                </Box>
                <Box display="flex" gap="8px">
                  <Image
                    width="20px"
                    height="20px"
                    src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/globe-showing-americas_1f30e.png"
                  />
                  <Image
                    width="20px"
                    height="20px"
                    src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/toss-face/331/bookmark_1f516.png"
                  />
                </Box>
              </Box>
              <Box>
                <Text fontSize="20px" fontWeight="bold">
                  Account Exeutive
                </Text>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Text fontSize="14px">Mid</Text>
                <Text fontSize="13px">Full-Time</Text>
              </Box>
            </Box>
          </Box>
          <Box
            bgColor="white"
            width="100%"
            padding="10px"
            marginTop="20px"
            height="100px"
            gap="10px"
            borderRadius="20px"
            display="flex"
          >
            <Box>
              <Image
                width="32px"
                height="32px"
                src="https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F0ecc5576-0a1c-4787-880b-6e23c379550e&w=1920&q=75"
              />
            </Box>
            <Box>
              <Box width="600px" display="flex" justifyContent="space-between">
                <Box>
                  <Text fontSize="13px">JumpSearch</Text>
                </Box>
                <Box display="flex" gap="8px">
                  <Image
                    width="20px"
                    height="20px"
                    src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/toss-face/331/bookmark_1f516.png"
                  />
                </Box>
              </Box>
              <Box>
                <Text fontSize="20px" fontWeight="bold">
                  Software Engineer(.NET)
                </Text>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Text fontSize="14px">Mid</Text>
                <Text fontSize="13px">Full-Time</Text>
              </Box>
            </Box>
          </Box>
          
          <Flex
            direction={"column"}
            gap="10px"
            width={"80%"}
            borderRadius="15px"
            padding="20px"
            margin="auto"
            marginTop={"30px"}
            bgGradient="linear(to-r, #7928CA, #00d4ff)"
            height="160px"
            // border={"2px solid red"}
          >
            <Text
              fontWeight={"extrabold"}
              fontSize="25px"
              textAlign={"center"}
              color="white"
            >
              Subscribe to our Newsletter
            </Text>
            <Flex gap="15px" directrion={"row"}>
              <Input backgroundColor={"white"} placeholder="Your Email"></Input>
              <Button
                color={"white"}
                backgroundColor="green.500"
                width={"150px"}
              >
                Submit
              </Button>
            </Flex>
            <Text textAlign={"center"} color="white">
              Receive the best job offers every week! ✌️
            </Text>
          </Flex>
        </Box>
      </Box>
    </div>
  );
};

export default Page;
