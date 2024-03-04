import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import '@mantine/core/styles.css';
import { BrowserRouter } from 'react-router-dom'
<<<<<<< HEAD
import { MantineProvider, rem } from '@mantine/core'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename='theorionproject'>
      <MantineProvider
        defaultColorScheme='dark'
        theme={{
          focusRing: 'never',
          colors: {
            brand: [
                '#F2F2F2',
                '#DBDBDB',
                '#C4C4C4',
                '#ADADAD',
                '#969696',
                '#808080',
                '#666666',
                '#4D4D4D',
                '#333333',
                '#1A1A1A',
            ],
          },
          primaryColor: 'brand',
          primaryShade: 6,
        fontFamily: 'NexaFont, sans-serif'}}>        <App />
      </MantineProvider>
    </BrowserRouter>
=======
import { MantineProvider } from '@mantine/core'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider>
      <BrowserRouter basename='theorionproject'>
        <App />
      </BrowserRouter>
    </MantineProvider>
>>>>>>> d136e5d49228ff270a39151120f322cec95c1a50
  </React.StrictMode>,
)
