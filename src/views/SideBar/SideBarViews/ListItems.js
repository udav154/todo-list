import  React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import AutoDeleteIcon from '@mui/icons-material/AutoDelete';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import DeleteIcon from '@mui/icons-material/Delete';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { NavLink } from 'react-router-dom';
import styles from '../styles/index.module.scss'

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <PlaylistAddIcon />
      </ListItemIcon>
      <ListItemText primary="Добавить Запись" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <FormatListNumberedIcon />
      </ListItemIcon>
      <NavLink className={styles.nav_link} to='/todo'>Список</NavLink>
    </ListItem>

    <NavLink className={styles.nav_link} to='/basket' > 
    <ListItem button>
      <ListItemIcon>
        <DeleteIcon />
        <ListItemText primary="Корзина" />
      </ListItemIcon>
    </ListItem>
    </ NavLink>
    
    <ListItem button>
      <ListItemIcon>
        <AutoDeleteIcon />
      </ListItemIcon>
      <NavLink className={styles.nav_link} to='/archive'>Архив</NavLink>
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="История" />
    </ListItem>
  </div>
);