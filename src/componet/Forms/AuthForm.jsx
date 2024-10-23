import { Box, VStack,Image, Input, Button, Flex,Text } from '@chakra-ui/react'
import { FaFacebook } from 'react-icons/fa';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function AuthForm() {
    const navigate = useNavigate(); 
    function chngeRoutHandler(){
        navigate('/sign')
    }
    const [inputs,SetInput] = useState({
        email:'',
        pass:'',

    });
    const  handlerAuth = () => {
        if (inputs.email=='' || inputs.pass==''){
            alert("Kamel por Konid Lotfan!")
            return;
        }
        navigate('/home')

    }
  return (
    <>
    <Box border={"1px solid gray"} borderRadius={4} padding={5} >
        <VStack spacing={4}>
            <Image src='../../../public/logo.png' h={24} cursor={"pointer"}></Image>
            <Input
            placeholder='Email'
            fontSize={14}
            type='email'
            value={inputs.email}
            onChange={(e)=>{
                SetInput({...inputs,email:e.target.value})
            }}
            />
             <Input
            placeholder='Passwords'
            type='password'
            fontSize={14}
            value={inputs.pass}
            onChange={(e)=>{
                SetInput({...inputs,pass:e.target.value})
            }}
            />

            <Button backgroundColor={"#0095f6"} w={"100%"} fontSize={14} fontWeight={'bold'} onClick={handlerAuth}>Login</Button>

            {/* ORRR TEXT */}
            <Flex alignItems={'center'} justifyContent={'center'} my={4} gap={1} w={"full"}>
                <Box flex={2} h={"1px"} bg={"gray.400"}></Box>
                 <Text color={"white"}>OR</Text>
                 <Box flex={2} h={"1px"} bg={"gray.400"}></Box>
            </Flex>
                {/* Facebook Login */}
            <Flex alignItems={"center"} gap={2} cursor={"pointer"}>
                <FaFacebook color='#0095f6' />
                <Text color={"#0095f6"} fontSize={13} fontWeight={"bold"}>Login With Facebooka</Text>
            </Flex>
            <Flex>
                <Text fontSize={12} fontWeight={"medium"} cursor={"pointer"} >Forget Passwords?</Text>
            </Flex>
        </VStack>
    </Box>
    <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <Flex alignItems={"center"} justifyContent={"center"} gap={1}>
        <Text fontSize={12} >Do not have an account?</Text>
        <Text 
            fontSize={15}
            color={"#0095f6"}
            fontWeight={"bold"}
            cursor={"pointer"}
            onClick={chngeRoutHandler}
            >sign up</Text>
        </Flex>
    </Box>
    </>
  )
}

export default AuthForm
