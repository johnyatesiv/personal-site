import React from "react"
import PropTypes from "prop-types"
import HeaderMenu from "./headerMenu";
import { Hidden, Drawer, AppBar, MenuIcon, Toolbar, IconButton, Typography, Button } from "@material-ui/core"
import "./header.scss";

const Header = (props) => {
    const { container } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <header id="header">
            <div className="header-wrapper">
                <AppBar class="header-app-bar">
                    <HeaderMenu />
                </AppBar>
            </div>
        </header>
    )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
