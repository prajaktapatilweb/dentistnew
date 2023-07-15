import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import IconButton, { iconButtonClasses } from '@mui/material/IconButton';
import Image from 'next/image';
import { Typography } from '@mui/material';

export default function Equipment() {
    var Details = [
        {
            img: "/images/courses/a9e7b27a0c5e986a22416d79e2e9dba9.jpg",
            altitle: "retrete",
            desc: " gfgh j kgr jkl jjrtyl jtkly gnfkj nkftg hnkj hjnk hnkfjtnh"
        },
        {
            img: "/images/courses/a9e7b27a0c5e986a22416d79e2e9dba9.jpg",
            altitle: "retrete",
            desc: " gfgh j kgr jkl jjrtyl jtkly gnfkj nkftg hnkj hjnk hnkfjtnh"
        },
        {
            img: "/images/courses/a9e7b27a0c5e986a22416d79e2e9dba9.jpg",
            altitle: "retrete",
            desc: " gfgh j kgr jkl jjrtyl jtkly gnfkj nkftg hnkj hjnk hnkfjtnh"
        }
    ]
    return (
        <div>
            <Box

                sx={{
                    pt: {
                        xs: 6,
                        md: 8,
                    },
                    pb: 14,
                    backgroundColor: '#ecf3f3',
                }}
            >
                <Container maxWidth="lg">
                    <Typography variant="h1" sx={{ mt: { xs: 0, md: -5 }, fontSize: { xs: 30, md: 48 } }}>
                        Equipments
                    </Typography>
                    <Grid container spacing={2}>
                        {Details.map((item, i) => (
                            <Grid item xs={12} md={4} key={i}>
                                <Box sx={{
                                    px: 1,
                                    py: 4,
                                }}>
                                    <Box sx={{
                                        p: 2,
                                        backgroundColor: 'background.paper',
                                        borderRadius: 4,
                                        transition: (theme) => theme.transitions.create(['box-shadow']),
                                        '&:hover': {
                                            boxShadow: 2,
                                            [`& .${iconButtonClasses.root}`]: {
                                                backgroundColor: 'primary.main',
                                                color: 'primary.contrastText',
                                                boxShadow: 2,
                                            },
                                        },
                                    }}>
                                        <Box sx={{
                                            lineHeight: 0,
                                            overflow: 'hidden',
                                            borderRadius: 3,
                                            mb: 2,
                                        }}>
                                            <Image src={item.img} width={100} height={100} layout='responsive' alt={'Course ' + item.altitle} />
                                        </Box>
                                        <Box sx={{ mb: 2 }}>
                                            <Typography component="h2" variant="h5" sx={{ mb: 2, height: 56, overflow: 'hidden', fontSize: '1.2rem' }}>
                                                {item.desc}
                                            </Typography>

                                        </Box>

                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </div>
    )
}
