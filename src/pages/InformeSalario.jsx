import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Operacoes from './Operacoes';
// import { Container } from './styles'

function InformeSalario() {
  
  const [valor, setValor] = useState()
  const [valorClique, setValorClique] = useState(0)

  const [valorSubtraido, setValorSubtraido] = useState([])

  const [inputs, setInputs] = useState([])


  //funcao que cria mais inputs ao clique
  function criaInputs(){
    console.log(inputs)
    setInputs(prevInputs => [...prevInputs, `${prevInputs.length}`])
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
              {inputs.map((input, index) => {
                <div key={index}>
                  <input value={input}/>
                </div>
              })}
              <form>
                <input type="text" id="Botoes"/>
              </form>

              <input type="button" value="+" onClick={criaInputs}/>

          </div>

      </div>
  );

}

export default InformeSalario;