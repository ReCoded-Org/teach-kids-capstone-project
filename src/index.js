import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import reportWebVitals from "./reportWebVitals";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import i18n from "./i18n";
import { I18nextProvider } from "react-i18next";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient} >
            <BrowserRouter>
                <React.Suspense fallback='loading'>
                    <I18nextProvider i18n={i18n}>
                        <App />
                    </I18nextProvider>
                </React.Suspense>
            </BrowserRouter>
        </QueryClientProvider>
    </React.StrictMode>
);


reportWebVitals();
