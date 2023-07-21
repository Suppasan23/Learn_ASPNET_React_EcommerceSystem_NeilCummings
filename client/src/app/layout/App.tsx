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

  function swichThemeMode(){
    if(darkMode)
    {
      setDarkmode(false);
    }
    else
    {
      setDarkmode(true);
    }
  }

  return (
    <ThemeProvider theme={theme}>

      <CssBaseline />
      <Header swichThemeMode={swichThemeMode}/>

      <Container>
        <Catalog/>
      </Container>
      
    </ThemeProvider>
  );
}

export default App;