import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Your main app component
import { SearchContextProvider } from './context/SearchContext.js';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <SearchContextProvider>
    <App />
    </SearchContextProvider>

);
