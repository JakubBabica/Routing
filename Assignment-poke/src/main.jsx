import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import ErrorPage from "./routes/error-page";
import Pokemon, {
  loader as contactLoader,
} from "./routes/Pokemon";
import About, {
  loader as aboutLoader,
} from "./routes/About";
import Root, { loader as rootLoader,action as rootAction, } from "./routes/root";
import EditContact, {
  action as editAction,
} from "./routes/Pokemon";
const router = createBrowserRouter([
  {
    path: "/",
    element:  <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: "pokemons",
        element: <EditContact />,
        loader: contactLoader,
        action: editAction,
      },
      {
        path: "about",
        element: <About />,
        loader: contactLoader,
        action: editAction,
      },
    ],
    
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
