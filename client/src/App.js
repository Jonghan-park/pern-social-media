import StyledApp from "./components/styled/App.styled";
import GlobalStyle from "./components/styled/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { gradientTheme } from "./themes";
import { BrowserRouter } from "react-router-dom";
import Signup from "./components/Signup";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={gradientTheme}>
        <GlobalStyle />
        <StyledApp>
          <Signup />
        </StyledApp>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
