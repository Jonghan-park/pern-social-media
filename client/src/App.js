import { useContext } from "react";
import StyledApp from "./components/styled/App.styled";
import GlobalStyle from "./components/styled/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { gradientTheme } from "./themes";
import { BrowserRouter } from "react-router-dom";
import Signup from "./components/Signup";
import { UserContext } from "./components/UserContext";

function App() {
  const user = useContext(UserContext);
  return (
    <BrowserRouter>
      <ThemeProvider theme={gradientTheme}>
        <GlobalStyle />
        <StyledApp>{user.loggedIn ? "logged in " : <Signup />}</StyledApp>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
