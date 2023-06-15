import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';
import './index.css';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <IconContext.Provider value={{ size: '40px' }}>
      <Provider store={store}>
        <BrowserRouter basename="/">
          <App />
        </BrowserRouter>
      </Provider>
    </IconContext.Provider>
  </React.StrictMode>
);
