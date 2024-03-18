import { MantineProvider, createTheme } from "@mantine/core";
import "@mantine/core/styles.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { SideBar } from "./components/sideBar.tsx";
import { store } from "./store/store.ts";
import '@mantine/notifications/styles.css';
import { Notifications } from '@mantine/notifications';

const theme = createTheme({
    focusRing: "never",
    primaryColor: "violet",
    primaryShade: 7
});

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <MantineProvider theme={theme} defaultColorScheme="dark">
                <BrowserRouter basename="theorionproject">
                    <Notifications  position="top-right" zIndex={1000} limit={5} />
                    <SideBar />
                    <App />
                </BrowserRouter>
            </MantineProvider>
        </Provider>
    </React.StrictMode>
);
