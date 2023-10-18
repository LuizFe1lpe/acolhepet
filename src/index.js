import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';

import App from './components/App';
import MainPage from './components/MainPage';


import {RouterProvider, createBrowserRouter} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: App(),
  },
  {
    path: "/main",
    element: MainPage(),
  },
  /*
  {
    path: "/profile",
    element: Profile();
  },
  {
    path: "/meuspets",
    element: MeusPets();
  },
  {
    path: "/adocoes",
    element: Adocoes();
  }
  */
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);