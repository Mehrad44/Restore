import { useEffect, useState } from "react"
import type { Product } from "../models/product";
import Catalog from "../../features/catalog/Catalog";
import NavBar from "./NavBar";
import { Box, Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";



function App() {
  const[products , setProducts] = useState<Product[]>([]);
  const [darkMode ,setDarkMode] = useState(false);
  const platteType = darkMode ? 'dark' : 'light'

  const theme = createTheme({
    palette: {
      mode: platteType,
      background:{
        default: (platteType === 'light') ? '#eaeaea' : '#121212'
      }
    }
  });

  const toggleDarkMode = () =>{
    setDarkMode(!darkMode);
  }

  useEffect(() => {
    fetch('http://localhost:5000/products')
    .then(res => res.json())
    .then(data => setProducts(data));


    
  }, []) 



  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
    <NavBar toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
    <Box
      sx={{
        minHeight: '100vh',
        background: darkMode
          ? 'radial-gradient(circle, #1e3aBa,#111B27)'
          : 'radial-gradient(circle,#baecf9,#f0f9ff)',
          py:6
      }} 
    >
          <Container maxWidth='xl' sx={{mt:14}}>
     <Catalog products={products}  />
    </Container>
    </Box>

    </ThemeProvider>

  )
}

export default App
