import { Box, Button, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import pix from '../../../public/logo.png'
import { useNavigate } from 'react-router-dom'

function SideBar() {
  const useNavigate=useNavigate()

  function clickHand(){
    useNavigate('/auth')
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
   px={{base:0,md:4}}>
  
   <Flex direction={"column"} gap={5} w={'full'} height={'full'}>
    {/* <Image src={'../../../public/logo.png'}></Image> */}
   </Flex>
        <Button onClick={clickHand}>click me</Button>
   </Box>
  )
}

export default SideBar
