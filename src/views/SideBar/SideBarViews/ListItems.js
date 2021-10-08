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
import { PATHS } from '../../../const';
import styles from '../styles/index.module.scss'
import stylejs from '../styles'

const MainListItems = ({...props}) => {
  return (
    <>
      <ListItem button onClick={props.handleOpenAdd}>
        <ListItemIcon>
          <PlaylistAddIcon />
        </ListItemIcon>
        <ListItemText primary="Добавить Запись" />
      </ListItem>
      <ListItem >
        <NavLink className={styles.nav_link} to={PATHS.todo.url}>
          <ListItemIcon>
            <FormatListNumberedIcon />
            <ListItemText sx={{ ...stylejs.text }} primary="Список" />
          </ListItemIcon>
        </NavLink>
      </ListItem>
      <ListItem >
        <NavLink className={styles.nav_link} to={PATHS.basket.url} >
          <ListItemIcon>
            <DeleteIcon />
            <ListItemText sx={{ ...stylejs.text }} primary="Корзина" />
          </ListItemIcon>
        </ NavLink>
      </ListItem>
      <ListItem >
        <NavLink className={styles.nav_link} to={PATHS.archive.url}>
          <ListItemIcon>
            <AutoDeleteIcon />
            <ListItemText sx={{ ...stylejs.text }} primary="Архив" />
          </ListItemIcon>
        </NavLink>
      </ListItem>
    </>
  );
}

const SecondaryListItems = () => {

  return (
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
}

export {
  SecondaryListItems,
  MainListItems
}