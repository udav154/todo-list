import React from 'react';
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
import stylejs from '../styles'

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <PlaylistAddIcon />
      </ListItemIcon>
      <ListItemText primary="Добавить Запись" />
    </ListItem>
    <ListItem >
      <NavLink className={styles.nav_link} to='/todo'>
        <ListItemIcon>
          <FormatListNumberedIcon />
          <ListItemText sx={{...stylejs.text}} primary="Список" />
        </ListItemIcon>
      </NavLink>
    </ListItem>

    <ListItem >
      <NavLink className={styles.nav_link} to='/basket' >
        <ListItemIcon>
          <DeleteIcon />
          <ListItemText sx={{...stylejs.text}} primary="Корзина" />
        </ListItemIcon>
      </ NavLink>
    </ListItem>

    <ListItem b>
      <NavLink className={styles.nav_link} to='/archive'>
        <ListItemIcon>
          <AutoDeleteIcon />
          <ListItemText sx={{...stylejs.text}} primary="Архив" />
        </ListItemIcon>
      </NavLink>
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