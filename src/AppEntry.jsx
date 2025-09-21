
import React from 'react';
import ReactDOM from 'react-dom/client';
import ApplicationRoot from './DashboardApp.jsx';
import '@styles/AppStyles.css';
import { Provider } from 'react-redux';
import applicationStore from './store/AppStore.js';

ReactDOM?.createRoot(document.getElementById('root'))?.render(
  <React.StrictMode>
    <Provider store={applicationStore}>
      <ApplicationRoot />
    </Provider>
  </React.StrictMode>
);
