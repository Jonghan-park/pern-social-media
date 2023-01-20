import StyledApp from "./components/styled/App.styled";
import GlobalStyle from "./components/styled/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { gradientTheme } from "./themes";

function App() {
  return (
    <ThemeProvider theme={gradientTheme}>
      <GlobalStyle />
      <StyledApp>
        <h1>Social media</h1>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
