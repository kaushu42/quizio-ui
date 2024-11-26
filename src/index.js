import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from 'react-redux';
import configureStore from "./configureStore";
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { useState } from 'react';

const store = configureStore();

const Root = () => {
  const [mode, setMode] = useState('light'); // Start with light mode

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Global reset of CSS */}
      <App toggleMode={toggleMode} />
    </ThemeProvider>
  );
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Root />
  </Provider>
);

