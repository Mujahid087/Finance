import { createTheme, ThemeProvider } from "@mui/material/styles"
import { useMemo } from "react"
import { themeSettings } from "./thems"
import { Box, CssBaseline} from "@mui/material"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "./scenes/navbar/NavBar"



function App() {
  const theme = useMemo(() => createTheme(themeSettings), [])
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
            <NavBar/>
            <Routes>
              <Route path="/" element={<div>dashboard page</div>}/>
              <Route path="/predictions" element={<div>Protections page</div>}/>
            </Routes>

          </Box>

        </ThemeProvider>
      </BrowserRouter>

    </>
  )
}

export default App
