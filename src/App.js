import React from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import GlobalStyle from "./styles/GlobalStyle";
import { darkTheme, primaryTheme } from "./styles/theme";
import Router from "./Router";
import Auth from "./components/Auth";
import "react-toastify/dist/ReactToastify.css";
import store from "./store";

const App = () => {
  const { token } = useSelector((state) => state.user.data);
console.log(store.getState())

  return (
    <ThemeProvider theme={primaryTheme}>
      <GlobalStyle />
      <ToastContainer
        autoClose={2500}
        position="top-right"
        closeButton={false}
      />
      {token ? <Router /> : <Auth />}
    </ThemeProvider>
  );
};

export default App;
