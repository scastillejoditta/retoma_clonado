import styled, { ThemeProvider } from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import theme from "./utils/theme";
import GlobalStyles from "./utils/globalStyles";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Scenes
import Home from "./scenes/Home";
import About from "./scenes/About";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/inicio" component={Home} />
            <Route exact path="/sobre-nosotrxs" component={About} />
          </Switch>
          <Footer />
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
