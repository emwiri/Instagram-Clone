import { StrictMode } from 'react';  
import { createRoot } from 'react-dom/client';  
import App from './App.jsx';  
import './index.css';  
import { ChakraProvider } from '@chakra-ui/react';  
import { extendTheme } from '@chakra-ui/react'; 
import {BrowserRouter} from 'react-router-dom'
 

const config = {  
  initialColorMode: 'dark',  
  useSystemColorMode: false,  
};  

const theme = extendTheme({  
  config,  
  styles: {  
    global: {  
      body: {  
        backgroundColor: 'black', // Set background to black  
        color: 'white', // Set text color to white  
      },  
    },  
  },  
});  

createRoot(document.getElementById('root')).render(  
  <StrictMode>  
    <BrowserRouter>
    <ChakraProvider theme={theme}>  
      <App />  
    </ChakraProvider>  
    </BrowserRouter>
  </StrictMode>,  
);