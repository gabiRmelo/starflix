import React from 'react';
import styled from 'styled-components';
import mestreYoda from '../../../src/assets/img/mestre_yoda.png';

const CarregandoAnimacao = styled.div`
  
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 90vw;
  height: 90vh;
  align-items: center;
  margin: 15px;

  .MestreYoda {
    height: 20em;
    align-items: right;
    margin: 10px;
  }

  .mensagem {
  color: white;
  float: left;
  margin-right: 2%;
  line-height: 30px;
  }

  .carregandoEfeito {
  background-color: black;
  height: 70px;
  width: 100%;
  overflow: hidden;
  }

  .cylon_eye {
    background-color: yellow;
    background-image: linear-gradient(to right,
        rgba(0, 0, 0, .9) 25%,
        rgba(0, 0, 0, .1) 50%,
        rgba(0, 0, 0, .9) 75%);
    color: white;
    height: 100%;
    width: 20%;

    animation: 0.5s linear 0s infinite alternate move_eye;
  }

  @keyframes move_eye { 
    from { margin-left: -20%; } 
    to { margin-left: 100%; }
}`

function Carregando() {
  return (
      <CarregandoAnimacao>
      <div class="carregandoEfeito">
        <div class="mensagem">
          Carregando está a página...
        </div>
        <div class="cylon_eye"></div>
      </div>
      <img className="MestreYoda" src={mestreYoda} alt="Mestre Yoda" />
      </CarregandoAnimacao>
  );
}

export default Carregando;
