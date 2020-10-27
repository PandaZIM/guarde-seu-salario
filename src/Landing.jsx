import React from 'react';
import { ButtonComponent } from "./components/button"
// import { Container } from './styles';

function Landing() {
  return(
      <div>
          <div className='esquerda'>
            <h1>Essa aplicação foi criada para pessoas que <br/> assim como eu <br/> querem facilidade ao guardar dinheiro.</h1>
          </div>
          <div className='direita'>
            <h1>Clique na seta e comece seu planejamento</h1>
                <ButtonComponent>></ButtonComponent>
          </div>    
      </div>
  )
}

export default Landing;