import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Notes from './pages/Notes'
import Create from './pages/Create'
import {createMuiTheme, ThemeProvider} from "@material-ui/core";
import {purple} from "@material-ui/core/colors";
import Layout from './components/Layout';
const theme = createMuiTheme({
  palette:{
    primary: {
      main:"#fefefe"
    },
    secondary: purple,
    typography: {
      fontFamily : 'QuickSand',
      fontWeightLight :400,
      fontWeightMedium :600,
      fontWeightBold :700,
      fontWeightRegular :500
      
    }
  }
})
function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
    <Layout>
      <Routes>
        <Route exact path ="/"  element={<Notes/>}></Route>   
        <Route  exact path="/create"  element={<Create/>}></Route>
      </Routes>
      </Layout>
    </Router>
    </ThemeProvider>

  );
}

export default App;