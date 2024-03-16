import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css';
import './i18n';
import { Provider } from 'react-redux';
import { Store } from './Features/Store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={Store}>
    <App />
    </Provider>
    
    </BrowserRouter>
    
  </React.StrictMode>,
)
