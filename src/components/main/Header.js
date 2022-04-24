import React, { useState } from 'react';
import { Modal } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import { Menu as MenuIcon } from "@material-ui/icons";
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import './Header.css';
import SignUpDialog from './SignUpDialog';

const pages = ['Diccionario', 'Torneos'];
const settings = ['Mis Torneos', 'Mis partidas', 'Logout'];

const Header = () => { 

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [isSignUpDialogOpen, setIsSignUpDialogOpen] = React.useState(false);

  const handleCloseSignUpDialog = () => {
    setIsSignUpDialogOpen(false);
  }
  const handleOpenSignUpDialog = () => {
    setIsSignUpDialogOpen(true);
  }

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

  const getSignedUpTemplate  = () => {
    return <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
             <Avatar />
           </IconButton> 
  }

  const getUnauthenticatedTemplate = () => {
    return <Container 
    open={Boolean(anchorElNav)}
    onClose={handleCloseNavMenu}
    sx={{ display: "flex", flexDirection: "row" }}>
      <MenuItem key="Sign in">
        <Typography sx={{ color: "#BFE3B4" }} textAlign="center">Sign in</Typography>
      </MenuItem>
      <MenuItem key="Sign up" onClick={() => setIsSignUpDialogOpen(true)}>
        <Typography sx={{ color: "#BFE3B4" }} textAlign="center">Sign up</Typography>
      </MenuItem>
    </Container>
  }

  const [loginTemplate, setLoginTemplate] = React.useState(getUnauthenticatedTemplate());

  const setLoginTemplateBasedOnAuthentication = (isAuthenticated) => {
    let template = isAuthenticated ? getSignedUpTemplate() : getUnauthenticatedTemplate();
    setLoginTemplate(template)
  }

  return (
    <AppBar position="static" className='navbar'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            WORDLE
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            WORDLE
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
              { loginTemplate }
              <SignUpDialog open={isSignUpDialogOpen} handleClose={handleCloseSignUpDialog}/>
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
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;