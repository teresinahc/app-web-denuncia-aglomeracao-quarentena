import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import DenunciaPage from "./pages/Denuncia";
import SobrePage from "./pages/Sobre";
import SplashScreen from "./pages/Splash";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/global";
import light from "./styles/themes/light";

function App() {
  const splashScreen = localStorage.getItem("splash_screen");

  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route exact path="/denuncia/:id">
            <DenunciaPage />
          </Route>
          <Route exact path="/sobre">
            <SobrePage />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
