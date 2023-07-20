import Catalog from "../../features/catalog/Catalog";
import { Container, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Header from "./Header";
import { useState } from "react";

function App() {
  const [darkMode, setDarkmode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light';
  const theme = createTheme({
    palette: {
      mode: paletteType
    }
  })

  return (
    <ThemeProvider theme={theme}>

      <CssBaseline />
      <Header/>

      <Container>
        <Catalog/>
      </Container>
      
    </ThemeProvider>
  );
}

export default App;