import { Box, Typography } from '@mui/material'
import React from 'react'

const About = () => {
    return (
        <div >
            <Box sx={{
                background: "gray",
                color: "black",
                padding: "100px 0px 40px 0px",
                textAlign: "center"
            }}>
                <Typography variant='h3'>
                    About Us
                </Typography>
            </Box>
            <Box sx={{
                padding: "50px 100px 40px 100px",
                textAlign: "justify"
            }}>
                <Typography>
                    LOGO is known for its high-quality fashion footwear and exclusively designed extravagance leather goods offering an incomparable shopping experience. Something that people immediately fell in love with, Built on the core ethics of Respect, Love and Integrity. LOGO products are recognized for their vibrant designs traditional craftsmanship, unique techniques, and high-quality materials, offered minimalistic, elegant, and sophisticated designs to their customers, Each pair of LOGO shoes is designed and crafted by many talented artisans. In-house production ensures that each pair receives due attention right to the finest detail during the many stages of its making. LOGO has spread its wings into retailing apart from having its flagship and exclusive stores. The company is taking several steps toward its goal to become a retail tech company and some of these tactics are already appearing to be working. “We are craftsmen, designers and dreamers who are working together to redefine how handcrafted shoes and accessories are made and delivered.”
                </Typography>
            </Box>
        </div>
    )
}

export default About