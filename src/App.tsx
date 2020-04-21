import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './pages/Home'
import DenunciaPage from './pages/Denuncia'
import SobrePage from './pages/Sobre'

import { ThemeProvider, DefaultTheme } from 'styled-components'
import GlobalStyle from './styles/global'
import light from './styles/themes/light'
import dark from './styles/themes/dark'
import usePersistedState from './utils/usePersistedState'
import NavBar from './components/NavBar'

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)

  function toggleTheme() {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
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
        <NavBar toggleTheme={toggleTheme} />
      </Router>
    </ThemeProvider>
  )
}

export default App
