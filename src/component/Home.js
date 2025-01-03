import React from 'react';
import Box from '@mui/material/Box';
import Navbar from './Navbar';
import yogapic from "../image/yogapic.jpg";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function Home() {
    return (
        <>
            <Navbar />
            <Box sx={{ minHeight: '100vh' }}>
                <Box
                    sx={{
                        height: '80vh',
                        backgroundImage: `url(${yogapic})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        position: 'relative',
                    }}
                >
                    {/* Text overlay with better width and padding */}
                    <Box sx={{
                        wordBreak: 'break-word',
                        width: '40%', // Adjust width as necessary
                        padding: 5,
                        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: for better text visibility on image
                        color: 'white',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        textAlign: 'center',
                    }}>
                        <h1>Welcome to the Yogic World</h1>
                        <h3>Yoga Teacher Trainings, Classes, Meditation, Pranayam, Music, Philosophy & More</h3>
                        <h4>Everything under $10</h4>
                    </Box>
                </Box>

                {/* Statistics Section */}
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    padding: 4,
                    flexWrap: 'wrap', // Makes the layout responsive on smaller screens
                    backgroundColor: '#f0f0f0',
                }}>
                    {/* Box for Countries */}
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        textAlign: 'center',
                        padding: 2,
                    }}>
                        <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>190+</p>
                        <p>Countries</p>
                    </Box>

                    {/* Box for On-Demand Classes */}
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        textAlign: 'center',
                        padding: 2,
                    }}>
                        <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>1000+</p>
                        <p>On-Demand Classes</p>
                    </Box>

                    {/* Box for Members */}
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        textAlign: 'center',
                        padding: 2,
                    }}>
                        <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>100k</p>
                        <p>Members</p>
                    </Box>
                </Box>
                <Box sx={{
                    textAlign: 'center', backgroundColor: '#f0f0f0',
                }}>
                    <Box style={{ fontSize: 40, fontWeight: 'bold' }}>Discover Your Yogic Path</Box>
                    <Box style={{ fontSize: 20 }}>Join our community and transform your yoga practise today.</Box>
                </Box>

                <Box sx={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4, padding: 4., backgroundColor: '#f0f0f0', boxShadow: '5px 5px 15px rgba(255, 47, 47, 0.3)'
                }}>
                    <Box sx={{
                        height: '100%', width: '100%', border: '2px solid black', textAlign: 'center', // Adding a white border

                    }}>                    <CardContent>
                            <Typography gutterBottom sx={{ color: 'black', fontSize: 14, fontWeight: 'bold' }}>
                                Yoga Teacher Training
                            </Typography>
                            <Typography variant="h5" component="div">
                            </Typography>
                            <Typography variant="body2">
                                Become certified Yoga Teachers and transform your practise with world's most accessible &   affordable program
                            </Typography>
                        </CardContent>
                        <CardActions>
                        </CardActions>
                    </Box>

                    <Box sx={{ height: '100%', width: '100%', border: '2px solid black', textAlign: 'center', }}>                    <CardContent>
                        <Typography gutterBottom sx={{ color: 'black', fontWeight: 'bold', fontSize: 14 }}>
                            Yoga Classes
                        </Typography>
                        <Typography variant="h5" component="div">
                        </Typography>
                        <Typography variant="body2">
                            Join revitalizing Yoga classes of Yin, Hatha, , Ashtanga, Vinyasa and a lot more, to enhance your well-being and done
                        </Typography>
                    </CardContent>
                        <CardActions>
                        </CardActions>
                    </Box>
                    <Box sx={{ height: '100%', width: '100%', border: '2px solid black', textAlign: 'center', }}>                    <CardContent>
                        <Typography gutterBottom sx={{ color: 'black', fontWeight: 'bold', fontSize: 14 }}>
                            Calm Music
                        </Typography>
                        <Typography variant="h5" component="div">
                        </Typography>
                        <Typography variant="body2">
Experience tranquility with our calming music, perfect for relaxation and mindfulness and done and done again
                        </Typography>
                    </CardContent>
                        <CardActions>
                        </CardActions>
                    </Box>
                    <Box sx={{ height: '100%', width: '100%', border: '2px solid black', textAlign: 'center', }}>                    <CardContent>
                        <Typography gutterBottom sx={{ color: 'black', fontWeight:'bold', fontSize: 14 }}>
Pranayam & Meditation
                        </Typography>
                        <Typography variant="h5" component="div">
                        </Typography>
                        <Typography variant="body2">
                          Explore  the power of breath and enhance your self-awareness and inner peace and done  and done and done
                        </Typography>
                    </CardContent>
                        <CardActions>
                        </CardActions>
                    </Box>
                </Box>

            </Box>
        </>
    );
}
