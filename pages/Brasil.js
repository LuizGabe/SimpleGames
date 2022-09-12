// Importa o useState para guardar os valores da aplicação
import { useState } from 'react'
// Importa o React
import React from "react"
// Importa o css da aplicação
import globalStyles from '../style/global.js';

const Game = () => {
  // Inicia as variáveis utilizadas
  const [lista, setLista] = useState(['Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Distrito Federal','Espírito Santo','Goiás','Maranhão','Mato Grosso','Mato Grosso do Sul','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins']);
  var [listaC, setlistaC] = useState([])
  const [teste, setTeste] = useState('');

  // Identifica se o input é igual aos itens da lista
  lista.map((n, index) => {
    if(lista[index] == teste) {
      // Adiciona o item na lista para mostrar
      listaC.push(lista[index])
    }
  })
  // Filtra itens iguais para não mostrar duas vezes
  listaC = listaC.filter((este, i) => listaC.indexOf(este) === i)

  // Retorna o objeto html
  return (
    <>
      <title>Estados do Brasil</title>
      {/* Importa o css global da página */}
      <style jsx global>{`${globalStyles}`}</style>
      <h1>Identifique todos os estados do Brasil</h1><br/><br/>
      <input type='text' onChange={(event) => setTeste(event.target.value)}/>
      <h5>Você já descobriu {listaC.length}/{lista.length}</h5>

      <div id='todosAcertos'>
      {/* Imprimi todos os elementos na tela */}
      {
        listaC.map((n,index) => (
          <div key={n} className='acerto'>
            {n}
          </div>
        ))
      }
      </div>
    </> 
  )
}

export default Game