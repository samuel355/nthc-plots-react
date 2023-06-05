import React from 'react';
import ReactDOM from 'react-dom/client';
import './responsive.css';
import './style.css'
import './vendor.css'
import {ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

import store from './redux/store';
import { Provider } from 'react-redux';
import App from './App';

import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";
import PurchasePlot from './pages/PurchasePlot';
import Contact from './pages/Contact';
import About from './pages/About';
import Login from './pages/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/purchase",
    element: <PurchasePlot />,
  },
  {
    path: "/about-us",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "*",
    element: <NoMatch />,
  }

]);


function NoMatch() {
  return (
    <div id='error-page'>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);


