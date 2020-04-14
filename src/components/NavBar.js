import React, { useState } from "react";
import {
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import styled from "styled-components";
import HomeIcon from '@material-ui/icons/Home';

export default function NavBar({ title }) {
  const [drawer, setDrawer] = useState(false);
  function handleDrawer() {
    setDrawer(!drawer);
  }

  return (
    <>
      <AppBar>
        <IconButton
          onClick={handleDrawer}
          edge="start"
          color="white"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <h3>{title}</h3>
      </AppBar>

      <Drawer anchor="left" open={drawer} onClose={handleDrawer}>
        <div
          style={{ width: 300 }}
          role="presentation"
          onClick={handleDrawer}
          onKeyDown={handleDrawer}
        >
          <List>
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Início" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </>
  );
}

const AppBar = styled.div`
  width: 100%;
  background-color: #ef3535;
  display: flex;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 20px;

  h3 {
    color: white;
    font-family: "Roboto";
    font-weight: normal;
  }

  button {
    margin-left: 5px;
    color: white;
  }

`;
