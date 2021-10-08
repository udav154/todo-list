import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Box } from "@mui/material";
import { PATHS } from "../../../const";
import stylejs from '../styles'
import styles from '../styles/index.module.scss'

const Buttons = () => {

    return (
        <Box >
            <NavLink className={styles.nav_link} to={PATHS.authentication.url} >
            <Button sx={stylejs.btn_login} color="inherit" variant="outlined">Log in</Button>
            </NavLink>
            <NavLink className={styles.nav_link} to={PATHS.registration.url} >
            <Button sx={stylejs.btn_signin} color="secondary" variant="contained">Sign in</Button>
            </NavLink>
        </ Box>
    )
}

export default Buttons