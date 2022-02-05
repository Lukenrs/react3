import React, {Component} from 'react'
import acai from './acai.jpg'

class Dados extends Component{
  state = {
    nome: "Luiz Kennedy",
    idade: 19,
    comida: "Macarronada",
    musicas:["Stay With Me", "Perfect Strangers", "Preciso Me Encontrar"]
    
  }
  render(){
    return(
      <div>
        <h1>Nome: {this.state.nome}</h1>
        <h2>Idade: {this.state.idade}</h2>
        <h3>Comida favorita: {this.state.comida}
        </h3>
        <h2>Músicas:</h2>
        <ol>
          <li>{this.state.musicas[0]}</li>
          <li>{this.state.musicas[1]}</li>
          <li>{this.state.musicas[2]}</li>
        </ol>
        <img src={acai}/>
      </div>
    )
  }

}

export default Dados

// Guarde em um state as seguintes propriedades: nome, idade, comida favorita, e uma array com pelo menos 3 músicas.

// Renderize na tela:
// Seu nome em um h1
// Sua idade em um h2
// Sua comida favorita em um h3
// Suas músicas favoritas em uma lista (ul / ol)