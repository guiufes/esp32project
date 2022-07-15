import React from 'react'
import styled from 'styled-components'

const Inicio = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: black;
`;

const Descricao = styled.div`
    flex: 1;
    padding-right: 5rem;
    h1{
        font-weight: bold;
        font-size: 3rem;
        color: yellow;
    }
    h2{
        font-weight: bold;
        font-size: 2rem;
        color: yellow;
    }
`;

function SecaoResumo(){
  return(
    <Inicio>
        <Descricao>
        <h1>Guilherme da Costa Gonçalves</h1>
        <h2>Engenheiro Elétrico</h2>
        <p>Um dia acontece, a gente tem que crescer... eu não deixei de achar graça nas coisas, simplesmente hoje quero ser levado a sério.</p>
        <button>Fale Comigo</button>
        </Descricao>
    </Inicio>
  )
}
export default SecaoResumo