import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './pages/Home'
import DenunciaPage from './pages/Denuncia'
import SobrePage from './pages/Sobre'
import NavBar from './components/NavBar'
import usePersistedState from './utils/usePersistedState'

// eslint-disable-next-line no-unused-vars
import { ThemeProvider, DefaultTheme } from 'styled-components'
import GlobalStyle from './styles/global'
import light from './styles/themes/light'
import dark from './styles/themes/dark'
import { Body } from './styles/Body'
import StatsBar from './components/StatsBar'

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)

  function toggleTheme() {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StatsBar />
      <Body>
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
      </Body>
      <NavBar toggleTheme={toggleTheme} />
    </ThemeProvider>
  )
}

export default App
