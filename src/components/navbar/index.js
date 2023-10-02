import React from 'react';
import { Button, Flex, Box, HStack, Link, Image } from '@chakra-ui/react';
import { DASHBOARD, ABOUT, CONTACT } from 'lib/routes';
import { Link as RouterLink } from 'react-router-dom';
import { useLogout } from 'hooks/auth';

export default function Navbar() {
  const { logout, isLoading } = useLogout();

  return (
    <Flex
      boxShadow="lg"
      padding="2"
      pos="fixed"
      top="0"
      bgColor="#0A66C2"
      left="0"
      width="100%"
      borderBottom="1px solid #e1e1e1"
      zIndex="3"
      justifyContent="space-between"
      align="center"
    >
      <Flex px={{ base: '4', md: '10' }} w="full" align="center" maxW="1200px">
        <HStack spacing="4">
          <Link as={RouterLink} to={DASHBOARD}>
            <Image
              src="/images/logo2.gif"
              alt="Company Logo"
              h="auto"
              w="50px"
              maxHeight="50px"
              maxWidth="100%"
              borderRadius="50%"
            />
          </Link>
          <Box fontSize="xl" fontWeight="bold">
            <Link
              as={RouterLink}
              to={DASHBOARD}
              color="white" // Set text color to white
            >
              HOME
            </Link>
          </Box>
          <Box fontSize="xl" fontWeight="bold">
            <Link
              as={RouterLink}
              to={ABOUT}
              color="white" // Set text color to white
            >
              ABOUT
            </Link>
          </Box>
          <Box fontSize="xl" fontWeight="bold">
            <Link
              as={RouterLink}
              to={CONTACT}
              color="white" // Set text color to white
            >
              CONTACT
            </Link>
          </Box>
        </HStack>
      </Flex>

      <HStack spacing="4">
        <Button
          size="md"
          bgColor="black"
          color="white"
          background= "black"
          onClick={() => {
            logout();
          }}
          isLoading={isLoading}
        >
          Logout
        </Button>
      </HStack>
    </Flex>
  );
}
