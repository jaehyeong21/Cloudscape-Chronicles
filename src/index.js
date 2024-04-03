import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Busan from './pages/Busan';

const router = createBrowserRouter([
  {
    path : '/',
    element : <App/>,
    errorElement : <NotFound/>,
    children : [
      {index : true, path : '/', element : <Home/>},
      {path : '/busan', element : <Busan/>}
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>
);


