import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from "./components/Home.jsx";
import RickAndMortyApp from "./RickAndMortyApp.jsx";
import { createHashRouter, RouterProvider } from "react-router-dom";


const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/character",
    element: <RickAndMortyApp />,
  },
  {
    path: "/*",
    element: <p>ERROR 404 Pagina Inexistente</p>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/*esto es un componente osea una funcion */}
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
