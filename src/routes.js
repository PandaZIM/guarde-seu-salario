import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import InformeSalario from './pages/InformeSalario';
import Landing from './pages/Landing';
import Operacoes from './pages/Operacoes';

// import { Container } from './styles';

function Routes() {
  return(
      <BrowserRouter>
        <Route path ='/' exact component={Landing}/>
        <Route path ='/InformeSalario' component={InformeSalario}/>
        <Route path ='/Operacoes' component={Operacoes}/>
      </BrowserRouter>
  )
}

export default Routes;