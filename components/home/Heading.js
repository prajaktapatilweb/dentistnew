import React from 'react'
import { subtitle, title } from '../constants/titlefile'
import { Box, Typography } from '@mui/material'

export default function Heading({ data }) {
    return (
        <div>
            <Box>
                {data.map((item, index) => (
                    <Box>
                        <Typography
                            variant='h4'
                            sx={{

                                fontSize: { xs: 18, md: 19 },
                                ml: { xs: 0, md: 4 },
                                mt: 0,
                                mb: 1,
                                // lineHeight: 1.3,
                                fontWeight: "500",
                                color: '#1b1075',
                                textAlign: 'center'
                            }}
                        >
                            {item.title}


                        </Typography>

                        <Typography
                            variant="h1"
                            sx={{

                                fontSize: { xs: 40, md: 45 },
                                ml: { xs: 0, md: 4 },
                                mt: 0,
                                mb: 3,
                                lineHeight: 1.3,
                                fontWeight: "bold",
                                color: 'black',
                                textAlign: 'center'
                            }}

                        >
                            {item.subtitle}

                        </Typography>
                    </Box>
                ))}
            </Box>
        </div>
    )
}
