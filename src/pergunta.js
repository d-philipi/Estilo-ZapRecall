import React, { useState } from "react";
import styled from 'styled-components';

export default function Pergunta({setDesabilitar}){
    const perguntas = [
        {Q:"O que é JSX?",R:"Uma extensão de linguagem do JavaScript"},
        {Q:"O React é __",R:"uma biblioteca JavaScript para construção de interfaces"},
        {Q:"Componentes devem iniciar com __",R:"letra maiúscula"},
        {Q:"Podemos colocar __ dentro do JSX",R:"expressões"}
    ]

    function verPergunta(){
        console.log("Quero ver a pergunta");
    }

    function verResposta(){
        console.log("Quero ver a resposta");
    }

    const[pergunta, setPergunta] = useState(perguntas.map((p,index) => 
    <PerguntaFechada onClick={verPergunta} key={index}>
        <p>Pergunta {index + 1}</p>
        <img src="./img/seta_play.png" alt="Seta para ver a pergunta" />
    </PerguntaFechada>
    ))

    return(
        <>
            {pergunta}
        </>
    )
}

const PerguntaFechada = styled.div`
    width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    p {
        font-family: 'Recursive', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #333333;
    }
    img{
        position: absolute;
        bottom: 20px;
        right: 15px;
    }
`

const PerguntaAberta = styled.div`
    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    p {
        font-family: 'Recursive', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #333333;
    }
    img{
        position: absolute;
        bottom: 15px;
        right: 15px;
    }
`


setPergunta(perguntas.map((p,index) => (indice === index) ?
        <PerguntaAberta onClick={() => verResposta(index)} key={index}>
            <p>{p.Q}</p>
            <img src="./img/seta_virar.png" alt="Seta para ver a pergunta" />
        </PerguntaAberta> 
        :
        <PerguntaFechada onClick={() => verPergunta(index)} key={index}>
            <p>Pergunta {index + 1}</p>
            <img src="./img/seta_play.png" alt="Seta para ver a pergunta" />
        </PerguntaFechada>))