import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import SideBar from '../sideBar/SideBar';
import { useLocation } from 'react-router-dom';
    
function PageLayout({ children }) {
    const { pathname } = useLocation();
    return (
        <Flex>
            {/* SideBar Left */}
            {pathname !== '/auth' &&  pathname!=='/sign' ? (
                <Box w={{ base: "70px", md: "240px" }}>
                    <SideBar />
                </Box>
            ) : null}
            {/* Content Area */}
            <Box flex={1} w={{ base: "calc(100% - 70px)", md: "calc(100% - 240px)" }}>
                {children}
            </Box>
        </Flex>
        
    );
    console.log(pathname)
}

export default PageLayout;
