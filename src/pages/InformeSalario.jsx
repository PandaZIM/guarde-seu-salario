import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Operacoes from './Operacoes';
// import { Container } from './styles'

function InformeSalario() {
  
  const [valor, setValor] = useState()
  const [valorClique, setValorClique] = useState(0)

  const [valorSubtraido, setValorSubtraido] = useState([])

  //funcao que cria mais inputs ao clique
  function criaInputs(){
    const criaNovoInput = document.createElement('div')

    criaNovoInput.innerHTML = "<input type='text' id='novoInput'"

    document.getElementById("Botoes").appendChild(criaNovoInput)
  }

  function handleClick(){
    setValorClique(valor)
  }

  return (
      <div className="principal">
          <span>Informe a quantia que deseja planejar e o tipo da moeda</span>
          <div className="inputs">
            <input 
              type="numeric"
              placeholder="Quantidade"
              id="inputValor"
              onChange={e => setValor(e.target.value)}
            />
            <select name="dinheiro" id="dinheiro">
                <option value="real">Real R$</option>
                <option value="dolar">Dolar $</option>
            </select>
          </div>
          <button 
            type="submit"
            onClick={handleClick}> 
            <Link>
              Confirma
            </Link>
          </button>
          <div>
              {valorClique}
          </div>
          <div>
              <input type="text" id="Botoes"/>
              <input type="button" value="+" onClick={criaInputs}/>
          </div>
      </div>
  );

}

export default InformeSalario;