import { Box, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import pix from '../../../public/logo.png'

function SideBar() {
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

   </Box>
  )
}

export default SideBar
