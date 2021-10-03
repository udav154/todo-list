import React from 'react';
import {
  Button,
  InputBase,
  IconButton,
  Typography,
  Toolbar,
  Box,
  CssBaseline
} from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';

import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { styled, ThemeProvider, createTheme, alpha } from '@mui/material/styles';
import styles from '../styles'



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

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  edge: "start",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const Header = ({ children, title, open, setOpen, toggleDrawer, drawerWidth, headerHeight, ...props }) => {

  const mdTheme = createTheme();

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={styles.box}>
        <CssBaseline />
        <AppBar sx={styles.appBar} drawerWidth={drawerWidth} headerHeight={headerHeight} open={open}>
          <Toolbar
            sx={styles.toolbar}
          >
            <IconButton
              edge="start"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                ...styles.menu_icon,
                ...(open && styles.menu_icon_open)
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={styles.typography}
            >
              {title}
            </Typography>
            <Search >
              <SearchIconWrapper >
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <Box >
              <Button sx={styles.btn_login} color="inherit" variant="outlined">Log in</Button>
              <Button sx={styles.btn_signin} color="secondary" variant="contained">Sign in</Button>
            </ Box>
          </Toolbar>
        </AppBar>
        {children}
      </Box>
    </ThemeProvider>
  )

}
{/* <AppBar sx={styles.appBar} position="fixed" >
    <Container fixed>
        <Toolbar >
        <IconButton
  edge="start"
  color="inherit"
  aria-label="open drawer"
  onClick={toggleDrawer}
  sx={{
    marginRight: '36px',
    ...(open && { display: 'none' }),
  }}
>
  <MenuIcon />
</IconButton>
            <Box mr={3}>
                <Button color="inherit" variant="outlined">Log in</Button>
            </ Box>
            <Button color="secondary" variant="contained">Sign in</Button>
        </Toolbar>
    </Container>
</AppBar> */}

export default Header