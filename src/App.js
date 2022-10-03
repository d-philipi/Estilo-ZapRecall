import React, { useState } from 'react';
import styled from 'styled-components';
import Perguntas from './perguntas';

const perguntas = [
    {Q:"O que é JSX?",R:"Uma extensão de linguagem do JavaScript"},
    {Q:"O React é __",R:"uma biblioteca JavaScript para construção de interfaces"},
    {Q:"Componentes devem iniciar com __",R:"letra maiúscula"},
    {Q:"Podemos colocar __ dentro do JSX",R:"expressões"}
];

const naoLembrado = [];

const quaseLembrado = [];

const lembrado = [];

const respondidas = [];

export default function App () {
    const [desabilitar,setDesabilitar] = useState(true);

    const[pergunta, setPergunta] = useState(perguntas.map((p,index) => 
    <PerguntaFechada onClick={() => verPergunta(index)} key={index}>
        <p>Pergunta {index + 1}</p>
        <img src="./img/seta_play.png" alt="Seta para ver a pergunta" />
    </PerguntaFechada>
    ));

    const [questionClicada, setQuestionClicada] = useState();
    const [contador, setContador] = useState(0);

    function renderApp(p,index){

        if(naoLembrado.includes(p)){
            return(
                <PerguntaFechada key={index}>
                    <p>Pergunta {index + 1}</p>
                    <img src="./img/icone_erro.png" alt="Seta para ver a pergunta" />
                </PerguntaFechada>
            )
        }else if(quaseLembrado.includes(p)){
            return(
                <PerguntaFechada key={index}>
                    <p>Pergunta {index + 1}</p>
                    <img src="./img/icone_quase.png" alt="Seta para ver a pergunta" />
                </PerguntaFechada>
            )
        }else if(lembrado.includes(p)){
            return(
                <PerguntaFechada key={index}>
                    <p>Pergunta {index + 1}</p>
                    <img src="./img/icone_certo.png" alt="Seta para ver a pergunta" />
                </PerguntaFechada>
            )
        }else{
            return(
                <PerguntaFechada onClick={() => verPergunta(index)} key={index}>
                    <p>Pergunta {index + 1}</p>
                    <img src="./img/seta_play.png" alt="Seta para ver a pergunta" />
                </PerguntaFechada>
            )
        }
    };

    function verPergunta(indice){

        function jaRespondidas(p,index){
            if(naoLembrado.includes(p)){
                return(
                    <PerguntaFechada key={index}>
                        <p>Pergunta {index + 1}</p>
                        <img src="./img/icone_erro.png" alt="Seta para ver a pergunta" />
                    </PerguntaFechada>
                )
            }else if(quaseLembrado.includes(p)){
                return(
                    <PerguntaFechada key={index}>
                        <p>Pergunta {index + 1}</p>
                        <img src="./img/icone_quase.png" alt="Seta para ver a pergunta" />
                    </PerguntaFechada>
                )
            }else if(lembrado.includes(p)){
                return(
                    <PerguntaFechada key={index}>
                        <p>Pergunta {index + 1}</p>
                        <img src="./img/icone_certo.png" alt="Seta para ver a pergunta" />
                    </PerguntaFechada>
                )
            }else if(indice === index){
                setQuestionClicada(perguntas[indice]);
                return(
                    <PerguntaAberta onClick={() => verResposta(index)} key={index}>
                        <p>{p.Q}</p>
                        <img src="./img/seta_virar.png" alt="Seta para ver a pergunta" />
                    </PerguntaAberta>
                )
            }else{
                return(
                    <PerguntaFechada onClick={() => verPergunta(index)} key={index}>
                        <p>Pergunta {index + 1}</p>
                        <img src="./img/seta_play.png" alt="Seta para ver a pergunta" />
                    </PerguntaFechada>
                )
            }
        };

        setPergunta(perguntas.map(jaRespondidas));

        setDesabilitar(false);

        console.log("Quero ver a pergunta");
    };

    function verResposta(indice){

        function perguntaComRespostas(p,index){
            if(naoLembrado.includes(p)){
                return(
                    <PerguntaFechada key={index}>
                        <p>Pergunta {index + 1}</p>
                        <img src="./img/icone_erro.png" alt="Seta para ver a pergunta" />
                    </PerguntaFechada>
                )
            }else if(quaseLembrado.includes(p)){
                return(
                    <PerguntaFechada key={index}>
                        <p>Pergunta {index + 1}</p>
                        <img src="./img/icone_quase.png" alt="Seta para ver a pergunta" />
                    </PerguntaFechada>
                )
            }else if(lembrado.includes(p)){
                return(
                    <PerguntaFechada key={index}>
                        <p>Pergunta {index + 1}</p>
                        <img src="./img/icone_certo.png" alt="Seta para ver a pergunta" />
                    </PerguntaFechada>
                )
            }else if(indice === index){
                setQuestionClicada(perguntas[indice]);
                return(
                    <PerguntaAberta onClick={() => verResposta(index)} key={index}>
                        <p>{p.R}</p>
                        <img src="./img/seta_virar.png" alt="Seta para ver a pergunta" />
                    </PerguntaAberta>
                )
            }else{
                return(
                    <PerguntaFechada onClick={() => verPergunta(index)} key={index}>
                        <p>Pergunta {index + 1}</p>
                        <img src="./img/seta_play.png" alt="Seta para ver a pergunta" />
                    </PerguntaFechada>
                )
            }
        };

        setPergunta(perguntas.map(perguntaComRespostas));

        setDesabilitar(false);

        console.log("Quero ver a resposta");
    };

    function naoLembrei(questao){
        naoLembrado.push(questao);
        respondidas.push(questao);
        console.log("Não lembrei!", naoLembrado);
        setDesabilitar(true);
        setContador(contador + 1);
        setPergunta(perguntas.map(renderApp));

        if(contador + 1 === 4){
            alert("Você finalizou!");
        }
    };

    function quaseNao(questao){
        quaseLembrado.push(questao);
        respondidas.push(questao);
        console.log("Quase não lembrei", quaseLembrado);
        setDesabilitar(true);
        setContador(contador + 1);
        setPergunta(perguntas.map(renderApp));

        if(contador + 1 === 4){
            alert("Você finalizou!");
        }
    };

    function zapLembrei(questao){
        lembrado.push(questao);
        respondidas.push(questao);
        console.log("Zap, lembrei!", lembrado);
        setDesabilitar(true);
        setContador(contador + 1);
        setPergunta(perguntas.map(renderApp));

        if(contador + 1 === 4){
            alert("Você finalizou!");
        }
    };

    return(
        <Container>
            <Logo>
                <img src="./img/logo.png" alt="Logo do site"/>
                <h1>ZapRecall</h1>
            </Logo>
            {pergunta}
            <Concluidos>
                <ContainerBotao>
                    <Botao1 disabled={desabilitar} onClick={() => naoLembrei(questionClicada)}>Não lembrei</Botao1>
                    <Botao2 disabled={desabilitar} onClick={() => quaseNao(questionClicada)}>Quase não lembrei</Botao2>
                    <Botao3 disabled={desabilitar} onClick={() => zapLembrei(questionClicada)}>Zap!</Botao3>
                </ContainerBotao>
                {contador}/4 CONCLUÍDOS
            </Concluidos>
        </Container>
    )
}

const Container = styled.div`
    background-color: #FB6B6B;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 0px;
    padding-bottom: 200px;
`

const Logo = styled.div`
    display: flex;
    align-items: center;
    margin: 40px 0 20px 0;
    img {
        width: 52px;
    }
    h1 {
        font-family: 'Righteous', cursive;
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        color: #FFFFFF;
        margin-left: 20px;
    }
`

const Concluidos = styled.div`
    width: 100%;
    min-height: 50px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Recursive', sans-serif;
    font-weight: 400;
    font-size: 18px;
    color: #333333;
    padding: 10px;
`

const ContainerBotao = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-between;
    margin: 20px;
    button {
        width: 90px;
        font-family: 'Recursive', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: #FFFFFF;
        border-radius: 5px;
        padding:5px;
    }
`

const Botao1 = styled.button`
    background: #FF3030;
    border: 1px solid #FF3030;
`

const Botao2 = styled.button`
    background: #FF922E;
    border: 1px solid #FF922E;
`

const Botao3 = styled.button`
    background: #2FBE34;
    border: 1px solid #2FBE34;
`

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