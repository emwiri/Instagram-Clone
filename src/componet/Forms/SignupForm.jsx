import { Box, VStack, Image, Input, Button, Flex, Text } from '@chakra-ui/react';
import { FaFacebook } from 'react-icons/fa';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function SignupForm() {
    const navigate = useNavigate();

    function changeRoutHandler(){
        navigate('/auth')
    }

  return (
    <Flex align="center" justify="center"  marginTop={"4px"} >
      <VStack w={310} spacing={2}>
        <Box border="1px solid gray" borderRadius={4} p={5} >
          <VStack spacing={4}>
            <Image src='../../../public/logo.png' h={24} cursor="pointer" />
            <Text textAlign={"center"} fontSize={15} color={"#a3a5a8"}>Sign up to see photos and videos from your friends.</Text>
            {/* Login FaceBooks */}
            <Flex align="center" gap={1} cursor="pointer" bg={'#0095f6'} color={"white"} p={2}w={"100%"} justifyContent={'center'} borderRadius={4}>
              <FaFacebook  />
              <Text  fontSize={13} fontWeight="bold">Login with Facebook</Text>
            </Flex>

            <Input placeholder='Email' fontSize={14} type='email' />
            <Input placeholder='Password' type='password' fontSize={14} />
            <Input placeholder='FullName' type='password' fontSize={14} />
            <Input placeholder='UserName' type='password' fontSize={14} />
            <Text textAlign={"center"} fontSize={"12"} color={"#a3a5a8"}>People who use our service may have uploaded your contact information to Instagram. Learn More</Text>

            <Button bg="#0095f6" w="100%" fontSize={13} fontWeight="bold">signup</Button>
          </VStack>
        </Box>

        <Box border="1px solid gray" borderRadius={4} p={5} w={"100%"}>
          <Flex align="center" justify="center" gap={1}>
            <Text fontSize={12}>Have an acoount?</Text>
            <Text fontSize={15}
             color="#0095f6"
              fontWeight="bold"
               cursor="pointer"
               onClick={changeRoutHandler}
            >Login</Text>
          </Flex>
        </Box>
        <Box textAlign={"center"}>Get the App</Box>
        <Flex gap={5} justifyContent={"Center"}>
              <Image src="../../../public/microsoft.png" h={10} cursor={"pointer"}></Image>
              <Image src="../../../public/playstore.png" h={10} cursor={"pointer"}></Image>
             </Flex>
      </VStack>
      
    </Flex>
    
  );
}

export default SignupForm;
