import { MantineProvider, createTheme } from "@mantine/core";
import "@mantine/core/styles.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { SideBar } from "./components/sideBar.tsx";
import { store } from "./store/store.ts";

const theme = createTheme({
    focusRing: "never",
    primaryColor: "violet",
});

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <MantineProvider theme={theme} defaultColorScheme="dark">
                <BrowserRouter basename="theorionproject">
                    <SideBar />
                    <App />
                </BrowserRouter>
            </MantineProvider>
        </Provider>
    </React.StrictMode>
);
