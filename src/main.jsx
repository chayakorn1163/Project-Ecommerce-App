// eslint-disable-next-line no-unused-vars
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from'react-router-dom'
import ShopContextProvider from './context/ShopContext.jsx'
import ReactDom from 'react-dom/client'

ReactDom.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </BrowserRouter>
);
