import Pergunta from "./pergunta";
import React, { useState } from "react";

export default function Perguntas(){
    const perguntas = [
        {Q:"O que é JSX?",R:"Uma extensão de linguagem do JavaScript"},
        {Q:"O React é __",R:"uma biblioteca JavaScript para construção de interfaces"},
        {Q:"Componentes devem iniciar com __",R:"letra maiúscula"},
        {Q:"Podemos colocar __ dentro do JSX",R:"expressões"}
    ]

    return(
        perguntas.map((p,index) => <Pergunta 
        key={index}
        index={index + 1}
        questao={p.Q}
        resposta={p.R}
        />)
    )
}
