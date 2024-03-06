import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '@mantine/core/styles.css';
import './globals.css'
import { BrowserRouter } from 'react-router-dom'
import { MantineProvider, createTheme } from '@mantine/core'


const theme = createTheme({
  focusRing: 'never'
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <BrowserRouter basename='theorionproject'>
        <App />
      </BrowserRouter>
    </MantineProvider>
  </React.StrictMode>,
)
