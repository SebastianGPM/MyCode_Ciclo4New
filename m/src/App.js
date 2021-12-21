import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavbarComponent from './Shared/NavbarComponent/NavbarComponent';
import ProyectosPropios from './Proyecto/ProyectosPropios';
import LoginPage from './LoginPage/LoginPage'
import RegisterPage from './RegisterPage/RegisterPage';
import PerfilPage from './PerfilPage/PerfilPage';
import ModificarPerfil from './ModificarPerfil/ModificarPerfil';
import AvancesPage from './AvancesPage/AvancesPage';



import Proyecto from './Proyecto/Proyecto';
import CreateProyecto from './Proyecto/CreateProyecto';
import EditarProyecto from './Proyecto/EditarProyecto';
import Usuario from './usuario/Usuario';
import CreateUsuario from './usuario/CreateUsuario';
import InscripcionesPage from './InscipcionesPage/InscripcionesPage';

function App() {
  return (
    <Router>
      <NavbarComponent />
      <Switch>

        <Route path="/MisProyectos">
          <ProyectosPropios />
        </Route>

        <Route path="/" exact>
          <LoginPage />
        </Route>

        <Route path="/Register" exact>
          <RegisterPage />
        </Route>

        <Route path="/Perfil">
          <PerfilPage />
        </Route>

        <Route path="/EditarPefil" exact>
          <ModificarPerfil />
        </Route>

        <Route exact path="/proyecto">
          <Proyecto />
        </Route>

        <Route exact path="/addProyecto">
          <CreateProyecto />
        </Route>

        <Route exact path="/updateProy/:id">
          <EditarProyecto />
        </Route>

        <Route exact path="/Usuario">
          <Usuario />
        </Route>

        <Route exact path="/CreateUsuario">
          <CreateUsuario />
        </Route>

        <Route exact path="/Inscripciones">
          <InscripcionesPage />
        </Route>

        <Route exact path="/Avances">
          <AvancesPage />
        </Route>


      </Switch>
    </Router>
  );
}

export default App;
