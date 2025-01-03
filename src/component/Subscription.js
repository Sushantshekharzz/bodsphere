import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';



export default function Subscription() {
    return (
        <Box sx={{
            paddingInline: 20, backgroundColor: '#f0f0f0',
        }}>
            <Box sx={{ backgroundColor: ' #CD5C5C', height: '50vh', display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ padding: 2, color: 'white' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography variant="h4">
                            Get unlimited access to everything
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ padding: 2 }}>
                  
                </Box>

            </Box>
        </Box>
    )
}
