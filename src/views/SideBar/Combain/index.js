import React from 'react';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Box } from '@mui/material';
import { MainListItems, SecondaryListItems } from '../SideBarViews';
import { Logo } from '../../../images'
import stylejs from '../styles'



const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open, drawerWidth }) => ({
    '& .MuiDrawer-paper': {
      position: "absolute",
      whiteSpace: 'nowrap',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      width: drawerWidth,
      boxSizing: 'border-box',
      ...(!open && {
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);


const SideBar = ({ children, open, setOpen, toggleDrawer, drawerWidth, ...props }) => {

  return (
    <Drawer variant="permanent" drawerWidth={drawerWidth} open={open}>
      <Toolbar sx={{ ...stylejs.toolbar }} >
        <Box sx={{ ...stylejs.box }}>
          <img alt=" Site logo" width="200" height="50"
            src={Logo}
          />
        </Box>
        <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List>
        <MainListItems {...props} />
      </List>
      <Divider />
      <List>
        <SecondaryListItems />
      </List>
    </Drawer>

  )
}

export default SideBar;