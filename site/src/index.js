import React from 'react';
import './index.css';
import App from './App';
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path='/' element={<App />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
)
