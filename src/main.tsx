import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '@mantine/core/styles.css';
import { BrowserRouter } from 'react-router-dom'
import { MantineProvider, createTheme } from '@mantine/core'
import { Provider } from 'react-redux'
import { store } from './store/store.ts';
import { SideBar } from './components/sideBar.tsx';


const theme = createTheme({
  focusRing: 'never',
  primaryColor: 'violet'
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <MantineProvider theme={theme} defaultColorScheme="dark">
        <BrowserRouter basename='theorionproject'>
          <SideBar />
          <App />
        </BrowserRouter>
      </MantineProvider>
    </Provider>
  </React.StrictMode>,
)
