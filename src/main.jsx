import './i18n';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';   
import { store } from './app/store';     
import Home from '../src/pages/Home';
import Login from '../src/pages/Login';
import Dashboard from './pages/Dashboard';
import Error403 from '../src/component/Error/Error403';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}> 
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/profile' element={<Dashboard/>}/>
          <Route path='/403' element={<Error403/>}/>
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
