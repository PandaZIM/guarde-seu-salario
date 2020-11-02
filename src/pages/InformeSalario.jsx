import React, { useState } from 'react';
import { Link } from 'react-router-dom'
// import { Container } from './styles'

class InformeSalario extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 0
    }

    this.handleChage = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    console.log(event.target.value)
  }

  render() {
    const { value } = this.state
  return (
      <div className="principal">
          <span>Informe a quantia que deseja planejar e o tipo da moeda</span>
          <div className="inputs">
            <input 
              type="text"
              placeholder="Quantidade"
              value={value}
              onChange={this.handleChange}
            />
            <select name="dinheiro" id="dinheiro">
                <option value="real">Real R$</option>
                <option value="dolar">Dolar $</option>
            </select>
          </div>
          <button type="submit"
          onClick={this.handleSubmit}> 
            <Link>
              Confirma
            </Link>
          </button>
      </div>
  );

  }
}

export default InformeSalario;