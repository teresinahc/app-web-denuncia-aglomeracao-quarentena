import React, { useState } from "react";
import {
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import styled from "styled-components";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import { useHistory } from "react-router-dom";

export default function NavBar({ title }) {
  const [drawer, setDrawer] = useState(false);
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  let history = useHistory();

  function handleDrawer() {
    setDrawer(!drawer);
  }

  function navigate(url) {
    history.push(url);
  }

  return (
    <>
      <AppBar>
        <IconButton
          onClick={handleDrawer}
          edge="start"
          color="primary"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <h3>{title}</h3>
      </AppBar>

      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        anchor="left"
        open={drawer}
        onClose={handleDrawer}
        onOpen={handleDrawer}
      >
        <div
          style={{ width: 300 }}
          role="presentation"
          onClick={handleDrawer}
          onKeyDown={handleDrawer}
        >
          <List>
            <Image
              src={process.env.PUBLIC_URL + "/logo192.png"}
              alt="Fique em casa"
            />
            <Title>#FIQUEEMCASA</Title>

            <ListItem button onClick={() => navigate("/")}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Início" />
            </ListItem>
            <ListItem button onClick={() => navigate("/sobre")}>
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary="Sobre" />
            </ListItem>
          </List>
        </div>
      </SwipeableDrawer>
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

const Image = styled.img`
  margin: 0 18%;
  align-self: center;
  justify-self: center;
`;

const Title = styled.h1`
  font-family: "Maven Pro";
  position: absolute;

  font-size: 40px;
  color: rgba(255, 0, 0, 0.06);
  filter: blur(2px);

  top: 0;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;
