import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createHashRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import Collections from "./pages/Collections/Collections";
import Men from "./pages/Men/Men";
import Women from "./pages/Women/Women";
import Contacts from "./pages/Contacts/Contacts";
import About from "./pages/About/About";
import { Provider } from "react-redux";
import { store } from "./store";

const router = createHashRouter([
    {
        path: "/",
        element: <Layout><App/></Layout>,
    },
    {
        path: "/collections",
        element: <Layout><Collections/></Layout>,
    },
    {
        path: "/men",
        element: <Layout><Men/></Layout>,
    },
    {
        path: "/women",
        element: <Layout><Women/></Layout>,
    },
    {
        path: "/contact",
        element: <Layout><Contacts/></Layout>,
    },
    {
        path: "/about",
        element: <Layout><About/></Layout>,
    },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    </React.StrictMode>,
)
