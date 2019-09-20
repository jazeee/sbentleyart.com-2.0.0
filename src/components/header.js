import PropTypes from "prop-types";
import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "./link";
import { SideBar } from "./side-bar";

import { HideOnScroll } from "./hide-on-scroll";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  social: {
    marginLeft: theme.spacing(1),
  },
}));

export const Header = props => {
  const [isSideBarOpen, setIsSideBarOpen] = React.useState(false);
  const { title, breadcrumbs } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Drawer
        anchor="left"
        open={isSideBarOpen}
        onClose={() => setIsSideBarOpen(false)}
      >
        <SideBar closeSideBar={() => setIsSideBarOpen(false)} />
      </Drawer>
      <HideOnScroll>
        <AppBar>
          <Toolbar variant="dense">
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={() => setIsSideBarOpen(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              <Link to="/" color="inherit">
                {title}
              </Link>
              {breadcrumbs.map(breadcrumb => {
                const { name, path } = breadcrumb;
                if (!path) {
                  return <span key={name}>{` > ${name}`}</span>;
                }
                return (
                  <span key={name}>
                    {" "}&gt;{" "}
                    <Link to={path} color="inherit">
                      {name}
                    </Link>
                  </span>
                );
              })}
            </Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </div>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};
