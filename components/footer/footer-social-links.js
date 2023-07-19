import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

export const socialLinks = [
    {
        name: 'Instagram',
        link: 'https://www.instagram.com/drakshaysdentavenue/',
        icon: '/images/icons/instagram.svg',
    },
    {
        name: 'YouTube',
        link: 'https://www.youtube.com/channel/UCzTOsuUtM6GgJ6oUFEy5NvQ',
        icon: '/images/icons/youtube.svg',
    },
    {
        name: 'Twitter',
        link: 'https://twitter.com/DentavenueM',
        icon: '/images/icons/twitter.svg',
    },
    {
        name: 'Facebook',
        link: 'https://www.facebook.com/profile.php?id=100082969286996',
        icon: '/images/icons/facebbok3.png'
    },
    {
        name: 'Linkedin',
        link: 'https://www.linkedin.com/in/dr-akshay-s-dentavenue-282741255/',
        icon: '/images/icons/linkedin.png',
    },
    {
        name: 'Googlemap',
        link: 'https://goo.gl/maps/o1D6AEhtxDt19QLu5',
        icon: '/images/icons/location.png',
    },



];
const SocialLinkItem = ({ item }) => (<Box component="li" sx={{
    display: 'inline-block',
    color: 'primary.contrastText',
    mr: 0.5,
}}>
    <Link target="_blank" sx={{
        lineHeight: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 36,
        height: 36,
        borderRadius: '50%',
        color: 'inherit',
        '&:hover': {
            backgroundColor: 'secondary.main',
        },
        '& img': {
            fill: 'currentColor',
            width: 22,
            height: 'auto',
        },
    }} href={item.link}>
        {/* eslint-disable-next-line */}
        <img src={item.icon} alt={item.name + 'icon'} />
    </Link>
</Box>);
// default
const SocialLinks = () => {
    return (<Box sx={{ ml: -1 }}>
        <Box component="ul" sx={{
            m: 0,
            p: 0,
            lineHeight: 0,
            borderRadius: 3,
            listStyle: 'none',

        }}>
            {socialLinks.map((item) => {
                return <SocialLinkItem key={item.name} item={item} />;
            })}

        </Box>
    </Box>);
};
export default SocialLinks;
