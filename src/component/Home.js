import React from 'react';
import Box from '@mui/material/Box';
import Navbar from './Navbar';
import yogapic from "../image/yogapic.jpg";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Footer from './Footer';
import mobilepic from "../image/mobilePic.jpg"
import Scrollbar from './Scrollbar';
import image2 from "../image/scrollbar1.jpg"



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
                    <Box sx={{
                        wordBreak: 'break-word',
                        width: '40%',
                        padding: 5,
                        color: 'white',
                        textAlign: 'center',
                    }}>
                        <h1 style={{ color: 'black' }}>Welcome to the Yogic World</h1>
                        <h3>Yoga Teacher Trainings, Classes, Meditation, Pranayam, Music, Philosophy & More</h3>
                        <h4>Everything under $10</h4>
                    </Box>
                </Box>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    padding: 4,
                    flexWrap: 'wrap',
                    backgroundColor: '#f0f0f0',
                }}>
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
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4, padding: 4., backgroundColor: '#f0f0f0',
                }}>
                    <Box sx={{
                        height: '100%', width: '100%', border: '2px solid black', textAlign: 'center',

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
                        <Typography gutterBottom sx={{ color: 'black', fontWeight: 'bold', fontSize: 14 }}>
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
                <Box sx={{
                    display: 'flex', justifyContent: 'space-around', alignItems: 'center',
                    wordBreak: 'break-word',
                    backgroundColor: '#f0f0f0',
                }}>
                    <Box sx={{ width: "500px" }}>
                        <Typography sx={{ fontWeight: 'bold', fontSize: 30 }}> Get Internationally Accredited by Bodsphere, from the comfort of your home</Typography>
                        <Box sx={{ paddintTop: 10 }}>
                            <Typography  >Join the Bodsphere community and take the first step towards joining the world's biggest community of yoga schools and Teacher that represent high quality, safe , affordable, accessible and equitable Yoga</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 4 }}>
                        <img
                            src={mobilepic}
                            alt="Mobile Representation"
                            style={{
                                objectFit: 'cover',
                                width: '80%',
                                maxWidth: '400px',
                                borderRadius: '10px',
                            }}
                        />
                    </Box>
                </Box>
                <Scrollbar />
                <Box sx={{
                    display: 'flex', justifyContent: 'space-around', alignItems: 'center',
                    wordBreak: 'break-word',
                    backgroundColor: '#f0f0f0',
                }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 4 }}>
                        <img
                            src={image2}
                            alt="Mobile Representation"
                            style={{
                                objectFit: 'cover',
                                width: '80%',
                                maxWidth: '400px',
                                borderRadius: '10px',
                            }}
                        />
                    </Box>
                    <Box sx={{ width: "500px" }}>
                        <Typography sx={{ fontWeight: 'bold', fontSize: 30 }}> Yoga Like never before</Typography>
                        <Box sx={{ paddintTop: 10 }}>
                            <Typography  >Becoming a yoga teacher has never been so easy. You can even donwload your favourite classes so they are always available when you wantthem</Typography>
                        </Box>
                    </Box>


                </Box>
                <Box sx={{
                    textAlign: 'center', backgroundColor: '#f0f0f0',
                }}>
                    <Box style={{ fontSize: 40, fontWeight: 'bold' }}>What they about bodsaphere</Box>
                    <Box sx={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4, padding: 4., backgroundColor: '#f0f0f0',
                    }}>
                        <Box sx={{
                            height: '100%', width: '100%', border: '2px solid black', textAlign: 'center',

                        }}>                    <CardContent>
                                <Typography gutterBottom sx={{ color: 'black', fontSize: 14, fontWeight: 'bold' }}>
                                    Bodspher has made yoga accessible and effortable for everyone
                                </Typography>
                                <Typography variant="h5" component="div">
                                </Typography>
                                <Typography variant="body2 ">
                                    Alejaendra martinez
                                </Typography>
                            </CardContent>
                            <CardActions>
                            </CardActions>
                        </Box>
                        <Box sx={{ height: '100%', width: '100%', border: '2px solid black', textAlign: 'center', }}>                    <CardContent>
                            <Typography gutterBottom sx={{ color: 'black', fontWeight: 'bold', fontSize: 14 }}>
                                Super happy to be part of revolution
                            </Typography>
                            <Typography variant="h5" component="div">
                            </Typography>
                            <Typography variant="body2">
                                Katrine smith
                            </Typography>
                        </CardContent>
                            <CardActions>
                            </CardActions>
                        </Box>
                        <Box sx={{ height: '100%', width: '100%', border: '2px solid black', textAlign: 'center', }}>                    <CardContent>
                            <Typography gutterBottom sx={{ color: 'black', fontWeight: 'bold', fontSize: 14 }}>
                                Bodsphere platform is a gift for this world
                            </Typography>
                            <Typography variant="h5" component="div">
                            </Typography>
                            <Typography variant="body2">
                                DieRondize
                            </Typography>
                        </CardContent>
                            <CardActions>
                            </CardActions>
                        </Box>
                    </Box>
                </Box>


            </Box>
            <Footer />
        </>
    );
}
