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
    <Provider store={store}>
      <BrowserRouter basename="/">
        <IconContext.Provider value={{ size: '40px' }}>
          <App />
        </IconContext.Provider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
