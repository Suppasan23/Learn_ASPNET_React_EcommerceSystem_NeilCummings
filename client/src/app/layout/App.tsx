import { Container, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Header from "./Header";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useStoreContext } from "../context/StoreContext";
import agent from "../api/agent";
import LoadingComponent from "./loadingComponent";
import { getCookie } from "../util/util";

function App() {

  const {setBasket} = useStoreContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const buyerId = getCookie('buyerId');
    if(buyerId){
      agent.Basket.get()
          .then(basket => setBasket(basket))
          .catch(error => console.log(error))
          .finally(() => setLoading(false));
    }
  }, [setBasket])

  const [darkMode, setDarkmode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light';
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background : {
        default: paletteType === 'light' ? '#eaeaea' : '#121212'
      }
    }
  })

  function handleThemeChange(){ 
    setDarkmode(!darkMode); 
  }

  if(loading) return <LoadingComponent message="Initialising app..."/>
  return (
    <ThemeProvider theme={theme}>

      <ToastContainer position="bottom-right" hideProgressBar theme="colored"/>

      <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange}/>

      <Container>
        <Outlet/>
      </Container>
      
    </ThemeProvider>
  );
}

export default App;