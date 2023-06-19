import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { store, persistor } from './store';
import App from './App';
import './index.css';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <BrowserRouter basename="/">
          <IconContext.Provider value={{ size: '40px' }}>
            <App />
          </IconContext.Provider>
        </BrowserRouter>
      </Provider>
    </PersistGate>
  </React.StrictMode>
);
