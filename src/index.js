import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';

import App from './components/App';

import MainPage from './pages/MainPage';
import Profile from './pages/Profile';
import Adocoes from './pages/Adocoes';
import MeusPets from './pages/MeusPets';
import cadastrapetPet from './pages/CadastarPet';
import Fred from './pages/Fred';
import Soli from './pages/Soli';

import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Singup from './pages/Singup';
const router = createBrowserRouter([
  {
    path: "/",
    element: App(),
  },
  {
    path: "/main",
    element: MainPage(),
  },
  {
    path: "singup",
    element: Singup(),
  },
  {
    path: "/profile",
    element: Profile(),
  },
  {
    path: "/meuspets",
    element: MeusPets(),
  },
  {
    path: "/adocoes",
    element: Adocoes(),
  },
  {
    path: "/cadastrapet",
    element: cadastrapetPet(),
  },
  {
    path: "/fred",
    element: Fred(),
  },
  {
    path: "/solicitacoes",
    element: Soli(),
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);