import React from "react";
import { Box, Tabs } from "@mui/material";
import { NavLink } from "react-router-dom";
import styles from '../styles'
import styleModile from '../styles/index.module.scss'

const Menu = ({ pageValue, setPage }) => {

    return (
        <>
            <Box sx={styles.menuBox}>
                <NavLink className={styleModile.header_menu_link} to="/todo" >1111111111111111</ NavLink>
                <NavLink className={styleModile.header_menu_link} to="/basket" >2222222222222</ NavLink>
            </ Box>
        </>
    )
}

export default Menu