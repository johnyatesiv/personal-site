import { Link } from "gatsby"
//import PropTypes from "prop-types"
import React from "react"
import { List, ListItem, ListItemIcon, ListItemText, Divider, Toolbar, IconButton, Typography, Button } from "@material-ui/core"
import AccountIcon from "@material-ui/icons/AccountCircle"
import MenuIcon from "@material-ui/icons/Menu"
import DescriptionIcon from "@material-ui/icons/Description"
import MusicIcon from "@material-ui/icons/MusicNote"
import InboxIcon from "@material-ui/icons/MoveToInbox"
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import "./headerMenu.css";

const classes = {
    toolbar: ""
}

const menuItems = [
    { display: 'About Me', link: '/', icon: <AccountIcon className="app-bar-icon"/> },
    { display: 'Resume', link: '/resume', icon: <DescriptionIcon className="app-bar-icon"/> },
    { display: 'Github', external: true, link: 'https://github.com/johnyatesiv', icon: <GitHubIcon className="app-bar-icon"></GitHubIcon> },
    { display: 'LinkedIn', external: true, link: 'https://www.linkedin.com/in/john-yates-web', icon: <LinkedInIcon className="app-bar-icon"></LinkedInIcon> },
    //{ display: 'Contact', link: '/contact', icon: <InboxIcon></InboxIcon> },
]

const subMenuItems = [];

const HeaderMenu = ({...props}) => {
    return (
        <div id="headerMenu">
            <Toolbar>
                {menuItems.map((obj, index) => (
                    obj.external ?
                        <a href={obj.link}>
                            <IconButton className="list-item" button key={obj.display}>
                                {obj.icon}
                            </IconButton>
                        </a>
                        :
                        <Link to={obj.link}>
                            <IconButton className="list-item" button key={obj.display}>
                                {obj.icon}
                            </IconButton>
                        </Link>
                ))}
            </Toolbar>
            <div className={classes.toolbar}></div>
        </div>
    )
}

export default HeaderMenu
