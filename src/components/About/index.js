import React from "react";
import Navbar from "components/navbar";

import {
  Box,
  // Text,
  // Container,
  // Heading,
  // Stack,
  // Grid,
  // GridItem,
  // Image,
  IconButton,
}
  from "@chakra-ui/react";
import { FaArrowLeft } from 'react-icons/fa';
import { DASHBOARD } from 'lib/routes';

import { Link as RouterLink } from "react-router-dom";
import UserProfileSidebar from 'components/sidebar/index.js'

const AboutUs = () => {
  return (
    <Box bgColor="#F3F2F0">
      <UserProfileSidebar />
      <Navbar />

      <IconButton
        as={RouterLink}
        to={DASHBOARD}
        aria-label="Back to Home"
        icon={<FaArrowLeft />}
        colorScheme="black"
        variant="ghost"
        size="lg"
        position="fixed"
        top="4rem"
        left="1rem"
        zIndex="1"
      />

      {/* <Container maxW="xl" py={20}>
        <Stack spacing={6}>
          <Stack spacing={2}>
            <Heading as="h1" size="xl" fontWeight="bold" color="gray.800">
              About Us
            </Heading>
            <Text fontSize="lg" color="gray.600">
              Welcome to The Post Boost, a unique social media platform designed to help individuals grow their LinkedIn profiles through mutual engagement. We understand the power of networking and the impact it can have on your professional journey.
            </Text>

            <Text fontSize="lg" color="gray.600" mb={4}>
              Our platform provides a seamless way for peers to connect, engage with, and support each other's LinkedIn posts. By interacting with posts, you're not only boosting engagement but also creating valuable connections that go beyond digital interactions.
            </Text>
            <Text fontSize="lg" color="gray.600" mb={4}>
              We believe in the concept of mutual growth. As you engage with others, they engage with your content, creating a win-win scenario for all involved. With{" "}
              <Text as="span" fontWeight="bold" color="gray.800">
                The Post Boost
              </Text>
              , every interaction is an opportunity to learn, share, and elevate your online presence.
            </Text>
          </Stack>

          <Stack spacing={2}>
            <Heading as="h1" size="xl" fontWeight="bold" color="gray.800">
              Our Story
            </Heading>
            <Text fontSize="lg" color="gray.600">
              We were inspired by the power of networking and the impact it can have on your professional journey. We wanted to create a platform that would help individuals grow their LinkedIn profiles through mutual engagement.
            </Text>

            <Heading as="h1" size="xl" fontWeight="bold" color="gray.800">
              Additional
            </Heading>
            <Text fontSize="lg" color="gray.600">
             Hey! I am a solo creator of this website and my intentions are purely of support. I am trying to get this website upto public standards and beyond but I need your help. In all honesty, I am terrible at front end and I would love your support for the same. 
             While I cannot offer monetary compensation, if you are interested in making something truly valuable for people, ping me on LinkedIn and we will make this better and better. As Buzz Lightyear would say 'To infinity and beyond!''
            </Text>
          </Stack>

          <Grid
            templateColumns={{
              base: "1fr",
              md: "repeat(2, 1fr)",
              lg: "repeat(4, 1fr)",
            }}
            gap={8}
          >
            <GridItem>
              <Box textAlign="center">
                <Image
                  rounded="full"
                  src="/images/hi.png"
                  alt="Anuj Pathak - Founder"
                  display={{ base: "none", md: "block" }}
                />
                <Text fontSize="xl" fontWeight="medium" color="gray.800" mt={2}>
                  Anuj 
                </Text>
                
              </Box>
            </GridItem>
            <GridItem>
              <Box textAlign="center">
                <Image
                  rounded="full"
                  // src="/images/hi.png"
                  alt="Anuj Pathak - Founder"
                  display={{ base: "none", md: "block" }}
                />
                <Text fontSize="xl" fontWeight="medium" color="gray.800" mt={2}>
                  Anirudha
                </Text>
                
              </Box>
            </GridItem>
          </Grid>
        </Stack>
      </Container> */}

      <div className="about-section">
        <div className="about-header">
          <div className="row">
            <div className="about-left col-lg-6 col-12 d-flex align-items-center justify-content-center">
              <h1>Connect, engage <br /> and support.</h1>
            </div>
            <div className="col-lg-6 col-12">
              <img src="https://s3-alpha-sig.figma.com/img/bd0f/23eb/ba07adde23b9dfc54bdfe9ae7343f377?Expires=1695600000&Signature=Cq7r41Hzrtw90y23vnU1rnUEpRevhYcLd0OML6PlyGuTh~cz-VYckSfXyI8XYQml0F8wkCS1ucYzjiOrIiHRPQH5QbJcoRAwG1cfIEqpaH3sR3Cr0y5hxryUvFiDsiw8ArymKtqDAI0GJP17grxm1upXAdxdX~qktLCd25LBGqmrCVQsC6nltxjPyqpthHRmktP6IXk5LRSOy3oxtoZcmfIhaxYSq-QFMkgwT1hN7sAzjtMalCVbNYasjl8lOcJ9110iaucPD5~D78r9wZJiQwA3SPtYSxeb3kH5M8A-FZF2ENJ0MIiIuXY0fu96oBSUKk8QXWWLcKlNkXWqOXYNMw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="img" />
            </div>
          </div>


        </div>
        <div className="about-us container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <h1>About Us</h1>
              <p>Welcome to The Post Boost, a unique social media platform designed to help individuals grow their LinkedIn profiles through mutual engagement. We understand the power of networking and the impact it can have on your professional journey.Our platform provides a seamless way for peers to connect, engage with, and support each other's LinkedIn posts. By interacting with posts, you're not only boosting engagement but also creating valuable connections that go beyond digital interactions.We believe in the concept of mutual growth. As you engage with others, they engage with your content, creating a win-win scenario for all involved. With The Post Boost, every interaction is an opportunity to learn, share, and elevate your online presence.</p>
            </div>
            <div className="about-us-right col-lg-6 col-12 d-flex justify-content-end">
              <img src="https://s3-alpha-sig.figma.com/img/a5b9/c6f6/060c1aaf68f9add4f29b632f6bb5a5bc?Expires=1695600000&Signature=IBMBOrAN5m0Bu6zS5OGdeH8diDbx~CGKTy1S6MUvpvbkQ397Hh6pwwiZRC518Ya3Q5qCORMJ5qMjL~YG1iuubVUGvLL1-8woQJ5Nu2u4rmvTN8~hiHu7WEczRHRF8sKwtIRVvzGAA0qfPZsb7jGqwrmz3wZBXyB27GgjElSOTpt66tzfGbJugVg8pnv2VSowKV-A9NRkLaZhNBeTFBX~iZnYzhoWLyQ1E382PLGsIKpYCtNkKl~TeKYkJ7fcPyoaWXhDlV4QIfVukI3gVU1Xx2GECxMlBcZNVC3xJgPWQas7kpiUp9ZNLL9YMqjbJx36yTSuqEXwTGP9PAXd-kOXEA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="img" />
            </div>
          </div>
        </div>
        <div className="our-story container text-center">
          <h1 className="text-center">Our Story</h1>
          <div className="video-box d-flex align-items-center justify-content-center">
            <img src="https://s3-alpha-sig.figma.com/img/6895/c9f4/a7d4eaa30ae006edc79b307b15dd02f5?Expires=1695600000&Signature=YLkzkQnsKPhEE2tMMyJAUmxNlPqnIyYgt6I2xsTa5X6OqCnSZPyr1~88mGINZA3Sp25RZDlQEJ4o9v4DY7fwSWrp9C4h5we9xowD330rETHSDbHnNIlZ2FF5es5~552Dxnj7UrZYYCHGGvwEHKdxCRbMYjYjF-hscC455FbuDZ6mvtCy2p8z96Etzt1QSwfDxA1TwoZ4Pxh7VKQ014CW4BCmU2jGi0A1n8FXQaooWOES09hRQ39hHc7-K6fMngn40FjI84AFRWk65xPgOo6PhF59c3qK-oD2vSwxbkU14hLHMJWMjSKHU7m72u7BhD5NBpkA4BrJYITx8afWoO5lyA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="img" />
            
            <img src="https://ik.imagekit.io/3s93gcrudd/youtube-blue.svg?updatedAt=1694459203175" alt="" />

          </div>
          <p>We were inspired by the power of networking and the impact it can have on your professional journey. <br /> We wanted to create a platform that would help individuals grow their LinkedIn profiles through mutual engagement.</p>
        </div>
        
      </div>

    </Box>
  );
};

export default AboutUs;
