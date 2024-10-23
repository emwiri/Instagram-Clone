import { Box, Button, Flex, Image } from '@chakra-ui/react';  
import React from 'react';  
import pix from '../../../public/logo.png'; // Ensure the path is correct  
import { useNavigate } from 'react-router-dom';  

function SideBar() {  
  const navigate = useNavigate(); // Fixed variable name  

  function clickHand() {  
    navigate('/auth'); // Use the correct function here  
  }  

  return (  
    <Box  
      h={"100vh"}  
      borderRight={"1px solid"}  
      borderColor={"whiteAlpha.300"}  
      py={8}  
      position={"sticky"}  
      top={0}  
      left={0}  
      px={{ base: 0, md: 4 }}  
    >  
      <Flex direction={"column"} gap={5} w={'full'} height={'full'}>  
        <Image src={pix} /> {/* Uncommented and fixed to use the imported image */}  
      </Flex>  
      <Button  onClick={clickHand }>Log out</Button>  
    </Box>  
  );  
}  

export default SideBar;