import React, { useState } from 'react';
import { Link } from 'react-router-dom'
// import { Container } from './styles'

function InformeSalario() {
  
  const [valor, setValor] = useState()
  
  function handleChange(){
    console.log(valor)
  }

  return (
      <div className="principal">
          <span>Informe a quantia que deseja planejar e o tipo da moeda</span>
          <div className="inputs">
            <input 
              type="numeric"
              placeholder="Quantidade"
              onChange={e => setValor(e.target.value)}
            />
            <select name="dinheiro" id="dinheiro">
                <option value="real">Real R$</option>
                <option value="dolar">Dolar $</option>
            </select>
          </div>
          <button 
            type="submit"
            onClick={handleChange}> 
            <Link>
              Confirma
            </Link>
          </button>
      </div>
  );

}

export default InformeSalario;