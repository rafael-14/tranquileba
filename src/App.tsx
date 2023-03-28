import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";
import FavoritesContextProvider from "./contexts/FavoritesContext";
import defaultTheme from "./styles/theme";
import Router from "./Router";
import Header from "./components/Header";

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <FavoritesContextProvider>
          <Header />
          <Router />
        </FavoritesContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
