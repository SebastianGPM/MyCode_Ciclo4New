import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarComponent from './Shared/NavbarComponent/NavbarComponent';
import LoginPage from './LoginPage/LoginPage';
import RegisterPage from './RegisterPage/RegisterPage';
import PerfilPage from './PerfilPage/PerfilPage';
import ModificarPerfil from './ModificarPerfil/ModificarPerfil';

import Proyecto from './Proyecto/Proyecto';
import CreateProyectoFr from './Proyecto/CreateProyectoFr';
import EditarProyecto from './Proyecto/EditarProyecto';


function App() {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route exact path="/" element={<LoginPage/>}/>
        <Route exact path="/proyecto" element={<Proyecto/>}/>
        <Route exact path="/addProyecto" element={<CreateProyectoFr/>}/>
      </Routes>
    </Router>
  );
}

export default App;
