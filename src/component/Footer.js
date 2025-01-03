import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            flexWrap: 'wrap',
            backgroundColor: '#f0f0f0',
            padding: 4, // Adjusted padding for a better look
            marginTop: 4, // Ensure spacing from the content above
        }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                flexDirection: 'column',
                textAlign: 'center',
                padding: 2,
            }}>
                <Typography variant="h6" sx={{ fontSize: 20, fontWeight: 'bold' }}>BODSPHERE</Typography>
                <Typography variant="body2">Download the Bodsphere app to take classes offline</Typography>
            </Box>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                textAlign: 'center',
                padding: 2,
            }}>
                <Typography variant="h6" sx={{ fontSize: 20, fontWeight: 'bold' }}>FAQ</Typography>
                <Link to="/faq" style={{ textDecoration: 'none', color: 'inherit' }}>Frequently Asked Questions</Link>
            </Box>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                textAlign: 'center',
                padding: 2,
            }}>
                <Typography variant="h6" sx={{ fontSize: 20, fontWeight: 'bold' }}>CONTACT US</Typography>
                <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>Get in touch</Link>
            </Box>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                textAlign: 'center',
                padding: 2,
            }}>
                <Typography variant="h6" sx={{ fontSize: 20, fontWeight: 'bold' }}>Follow Bodsphere</Typography>
                <Box>
                    <LinkedInIcon />
                    < FacebookIcon />
                    <InstagramIcon />
                </Box>
            </Box>
        </Box>
    );
}
