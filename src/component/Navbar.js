import React from 'react'
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';


export default function Navbar() {
  return (
    <Box sx={{height:'20%'}}>
        <Box sx={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:2 }}>
           <Box sx={{color:'yellow'}}>
            BODSPHERE
           </Box>
           <Box sx={{display:'flex', alignItems:'center', justifyContent:'flex-end', gap:4 }} >
            <Link  to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link>
            <Link to="/categories" style={{ textDecoration: 'none', color: 'inherit' }}>Categories</Link>
            <Link  to="/notification" style={{ textDecoration: 'none', color: 'inherit' }}>Notification</Link>
            <Link  to="/aimusic" style={{ textDecoration: 'none', color: 'inherit' }}>Ai Music</Link>

           </Box>
        </Box>
    </Box>
  )
}
