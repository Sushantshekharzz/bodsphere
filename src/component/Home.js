import React from 'react'
import Box from '@mui/material/Box';
import Navbar from './Navbar';
import yogapic  from "../image/yogapic.jpg"


export default function Home() {
  return (
    <>
    <Navbar/>
    <Box sx={{minHeight:'100vh'}}>
    <Box
      sx={{
        height: '80vh', // Full viewport height (adjust as needed)
        backgroundImage: `url(${yogapic})`, // Replace with your image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
      }}
    >
      {/* Overlay Text */}
      <Box>
        <h1>Welcome to the  </h1>
      </Box>
    </Box>
    </Box>
    
    
    
    </>
  )
}
