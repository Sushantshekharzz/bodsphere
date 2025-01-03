import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { useState } from 'react';
import scrollbar1 from '../image/scrollbar1.jpg';
import scrollbar2 from '../image/scrollbar2.jpg';
import scrollbar3 from '../image/scrollbar3.jpg';
import scrollbar4 from '../image/scrollbar4.jpg';
import scrollbar5 from '../image/scrollbar5.jpg';
import scrollbar6 from "../image/scrollbar6.jpg"



export default function Scrollbar() {
    const images = [
        { id: 1, src: scrollbar1 },
        { id: 2, src: scrollbar2 },
        { id: 3, src: scrollbar3 },
        { id: 4, src: scrollbar4 },
        { id: 5, src: scrollbar5 },
        { id: 6, src: scrollbar6 },

        // Add more images
    ];
    
    const [startIndex, setStartIndex] = useState(0);

    const itemsToShow = 2;

    const handleNext = () => {
        setStartIndex((prevIndex) =>
            prevIndex + itemsToShow >= images.length ? 0 : prevIndex + itemsToShow
        );
    };

    const handlePrevious = () => {
        setStartIndex((prevIndex) =>
            prevIndex - itemsToShow < 0 ? images.length - itemsToShow : prevIndex - itemsToShow
        );
    };


    return (
        <Box sx={{
            backgroundColor: '#f0f0f0',
paddingTop:10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            wordBreak: 'break-word',
            width: '100%',
            flexDirection: 'column'
        }}
        >
            <Typography sx={{ fontSize: 30, fontWeight: 'bold' }}>Meet your instructor</Typography>
            <Typography sx={{ fontSize: 20, }}>We work with finest professional to ensure you feel your best</Typography>

            <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2,
                padding: 4,
            }}
        >
            {/* Image display */}
            <Box
                sx={{
                    display: 'flex',
                    gap: 2,
                    overflow: 'hidden',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {images.slice(startIndex, startIndex + itemsToShow).map((image) => (
                    <Box
                        key={image.id}
                        sx={{
                            width: '150px',
                            height: '100px',
                            border: '2px solid #ccc',
                            borderRadius: '8px',
                            overflow: 'hidden',
                        }}
                    >
                        <img
                            src={image.src}
                            alt={`Scrollbar ${image.id}`}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </Box>
                ))}
            </Box>

            {/* Buttons to navigate */}
            <Box sx={{ display: 'flex', gap: 2 }}>
                <Button variant="contained" onClick={handlePrevious}>
                    Previous
                </Button>
                <Button variant="contained" onClick={handleNext}>
                    Next
                </Button>
            </Box>
        </Box>


        </Box>
    )
}
