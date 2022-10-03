import React, { useState } from 'react';
import styled from 'styled-components';

export default function Botoes({desabilitar, naoLembrei, quaseNao, zapLembrei, questionClicada}){
    return(
        <>
            <Botao1 data-identifier="forgot-btn" disabled={desabilitar} onClick={() => naoLembrei(questionClicada)}>Não lembrei</Botao1>
            <Botao2 data-identifier="almost-forgot-btn" disabled={desabilitar} onClick={() => quaseNao(questionClicada)}>Quase não lembrei</Botao2>
            <Botao3 data-identifier="zap-btn" disabled={desabilitar} onClick={() => zapLembrei(questionClicada)}>Zap!</Botao3>
        </>
    )
}

const Botao1 = styled.button`
    background: #FF3030;
    border: 1px solid #FF3030;
    cursor: pointer;
`

const Botao2 = styled.button`
    background: #FF922E;
    border: 1px solid #FF922E;
    cursor: pointer;
`

const Botao3 = styled.button`
    background: #2FBE34;
    border: 1px solid #2FBE34;
    cursor: pointer;
`