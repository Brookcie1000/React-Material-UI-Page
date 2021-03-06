import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import { createTheme, ThemeProvider } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import Layout from './components/Layout'
import ErrorPage from './pages/404'

const theme = createTheme({
  palette: {
    primary: deepPurple
  },
  typography: {
    fontFamily: 'Raleway',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700
  }
})

function App() {
  return (    
    <ThemeProvider theme={theme}>
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Notes />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="*">
            <ErrorPage />
          </Route>
        </Switch>
      </Layout>
    </Router> 
    </ThemeProvider>   
  );
}

export default App;
