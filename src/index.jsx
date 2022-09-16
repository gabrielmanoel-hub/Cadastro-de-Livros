import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';
import './styleGlobal.scss'
const tudo = createRoot(document.getElementById('tudo'));
tudo.render(
    <div>
        <App />
    </div>

)
