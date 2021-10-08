import React from 'react';
import {
  IconButton,
  Typography,
  Toolbar,
  Box,
  CssBaseline
} from '@mui/material';
import HeaderViews from '../HeaderViews';
import MuiAppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import stylejs from '../styles'



const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open, drawerWidth }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));


const Header = ({ children, title, open, setOpen, toggleDrawer, drawerWidth, headerHeight, ...props }) => {

  const mdTheme = createTheme();

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={stylejs.box}>
        <CssBaseline />
        <AppBar sx={stylejs.appBar} drawerWidth={drawerWidth} headerHeight={headerHeight} open={open}>
          <Toolbar
            sx={stylejs.toolbar}
          >
            <IconButton
              edge="start"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                ...stylejs.menu_icon,
                ...(open && stylejs.menu_icon_open)
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={stylejs.typography}
            >
              {title}
            </Typography>
           <HeaderViews.HeaderSearch />
            <HeaderViews.Buttons />
          </Toolbar>
        </AppBar>
        {children}
      </Box>
    </ThemeProvider>
  )
}

export default Header