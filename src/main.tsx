import React from 'react';
import ReactDOM from 'react-dom/client';
import { HomeSearchFilm } from './HomeSearchFilm.tsx';
import { FilmsProvider } from './Context/FilmsProvider.tsx';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FilmsProvider>
      <HomeSearchFilm />
    </FilmsProvider>
  </React.StrictMode>
);
