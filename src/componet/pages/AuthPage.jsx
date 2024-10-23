import { Box, Center, Container, Flex ,Image, VStack } from "@chakra-ui/react"
import AuthForm from "../Forms/AuthForm"


function AuthPage() {
  return (
   <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
     <Container maxW={"container.md"} padding={0}>
      <Flex justifyContent={"center"} alignItems={"center"} gap={10}>
             {/* Left side */}
         <Box display={{base:"none",md:"block"}}>
            <Image src="../../public/auth.png" h={650} alt={'PicPhone'} />
         </Box>
              {/* Right side */}
         <VStack  spacing={4} align={"stretch"}>
            <AuthForm/>
              <Box textAlign={"center"}>Get the App</Box>
              <Flex gap={5} justifyContent={"Center"}>
              <Image src="../../../public/microsoft.png" h={10} cursor={"pointer"}></Image>
              <Image src="../../../public/playstore.png" h={10} cursor={"pointer"}></Image>
             </Flex>
         </VStack>
      </Flex>
       


       


         
     </Container>
   </Flex>
  )
}

export default AuthPage
