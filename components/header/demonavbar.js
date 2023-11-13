import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from '@mui/material';
import Image from 'next/image';
// import Link from 'next/link';

const pages = [

    { linkID: '/#home', label: 'Home' },
    { linkID: '/#aboutus', label: 'About Us' },
    { linkID: '/#treatments', label: 'Treatments' },
    { linkID: '/#testimonials', label: 'Testimonials' },
    { linkID: '/#gallery', label: 'Gallery' },
    { linkID: '/#faq', label: 'FAQ' },
    { linkID: '/trainer', label: 'Training' },
    { linkID: '/#contactform', label: 'Contact' },
    { linkID: '/blog', label: 'Blog' },

];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: '#000000' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ p: 1 }}>
                    {/* <Image src='/images/logo1.jpg' width={200} height={120} ></Image> */}
                    {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
                    {/* <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 1,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.1rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGOs
                    </Typography> */}

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        {/* mobile menu */}
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{

                                display: { xs: 'block', sm: 'block', md: 'block', lg: 'none' },
                            }}
                        >
                            {pages.map((page, i) => {
                                return (
                                    < Link key={i} href={page.linkID} sx={{
                                        mr: 2,
                                        fontFamily: 'monospace',

                                        fontWeight: 800,
                                        letterSpacing: '.1rem',
                                        color: 'black',
                                        textDecoration: 'none',
                                        textAlign: "center"
                                    }}>
                                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                                            <Typography>{page.label}</Typography>
                                        </MenuItem>
                                    </Link>)
                            }
                            )}
                        </Menu>
                    </Box>
                    {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
                    <Image src='/images/logo1.jpg' width={200} height={120} ></Image>
                    {/* <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography> */}
                    {/* dekstop menu */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', textDecoration: "none" } }}>
                        {/* {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))} */}
                        {pages.map((page, i) => {

                            return (
                                <Link key={i} href={page.linkID} sx={{
                                    mx: 2,
                                    display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex' },
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.1rem',
                                    color: 'White',
                                    textDecoration: 'none',
                                }}>
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography variant='h5'>
                                            {page.label}</Typography>
                                    </MenuItem>
                                </Link>)
                        }
                        )}
                    </Box>

                    {/* <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box> */}
                </Toolbar>
            </Container>
        </AppBar >
    );
}
export default ResponsiveAppBar;