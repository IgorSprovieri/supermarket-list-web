import { ThemeProvider } from 'styled-components'
import { HomeScreen, ListScreen } from 'screens'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { theme, GlobalStyle } from 'styles'
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle></GlobalStyle>
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen></HomeScreen>}></Route>
          <Route path="/list" element={<ListScreen></ListScreen>}></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
