import React, { useState } from "react";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import { ForwardRefLink } from "../link";
import { Location } from "@reach/router";
import { SECONDARY_COLOR } from "../../styles/theme";
import { useStaticQuery, graphql } from "gatsby";

const useStyles = makeStyles(theme => ({
  sideBar: {
    width: 250,
    "& $selectedLink *": {
      fontWeight: "bold",
      color: SECONDARY_COLOR,
    },
  },
  selectedLink: {},
  nestedMenu: {
    paddingLeft: theme.spacing(4),
  }
}));

const SideBarItem = (props) => {
  const classes = useStyles();
  const { name, path, location, isNested } = props;
  const isCurrentPath = location.pathname.includes(path);
  let className = isCurrentPath ? classes.selectedLink : "";
  if (isNested) {
    className += ` ${classes.nestedMenu}`;
  }
  return (
    <ListItem
      className={className}
      component={ForwardRefLink}
      button
      to={path}
    >
      <ListItemText primary={name} />
    </ListItem>
  );
};

const SideBarExpanderItem = (props) => {
  const { name, subTree, location } = props;
  const [isExpanded, setIsExpanded] = useState(
    subTree.some(({ path }) => location.pathname.includes(path))
  );
  const onClickExpand = (event) => {
    setIsExpanded(!isExpanded);
    event.stopPropagation();
  }
  return (
    <>
      <ListItem button onClick={onClickExpand}>
        <ListItemText primary={name} />
        {isExpanded ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={isExpanded} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <SideBarTree urls={subTree} location={location} isNested/>
        </List>
      </Collapse>
    </>
  );
};

const SideBarTree = (props) => {
  const { urls, location, isNested } = props;
  return (
    <>
      {urls.map(({ name, path, subTree }) => {
        if (subTree) {
          return (
            <SideBarExpanderItem
              key={name}
              name={name}
              subTree={subTree}
              location={location}
            />
          );
        }
        return <SideBarItem
          key={name}
          name={name}
          path={path}
          location={location}
          isNested={isNested}
        />
      })}
    </>
  );
};

export const SideBar = props => {
  const classes = useStyles();
  const { closeSideBar } = props;
  const { allUrlsJson, allGalleriesJson } = useStaticQuery(
    graphql`
      query {
        allUrlsJson {
          nodes {
            name
            path
          }
        }
        allGalleriesJson {
          nodes {
            id
            name
          }
        }
      }
    `
  );
  const urls = [
    ...allUrlsJson.nodes,
    {
      name: "Galleries",
      subTree: allGalleriesJson.nodes.map(({ id, name }) => ({
        name,
        path: `/galleries/${id}`,
      })),
    }
  ];
  return (
    <div
      className={classes.sideBar}
      role="presentation"
      onClick={closeSideBar}
      onKeyDown={closeSideBar}
    >
      <Location>
        {({ location }) => (
          <List>
            <SideBarTree urls={urls} location={location} />
          </List>
        )}
      </Location>
    </div>
  );
};
