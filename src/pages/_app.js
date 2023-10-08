import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/globals.scss'
import { ThemeProvider, createTheme, StyledEngineProvider } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
})

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(<>
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <Component {...pageProps} />
      </StyledEngineProvider>
    </ThemeProvider>
  </>) 
}
