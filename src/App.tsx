import { ThemeProvider } from "@mui/material"
import { darkTheme, lightTheme } from "./theme"
import MainLayout from "./layouts/MainLayout"
import { useSelector } from "react-redux"
import { RootState } from "./store/store"

function App() {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  const theme = darkMode ? darkTheme : lightTheme;
  return (
    <ThemeProvider theme={theme}>
      <MainLayout />
    </ThemeProvider>
  )
}

export default App
