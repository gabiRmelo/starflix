import React from 'react';
import styled from 'styled-components';

const CarregandoAnimacao = styled.div`
  
  display: flex;
  justify-content: center;
  width: 100%;
  height: 50vh;
  align-items: center;
  margin: 20px;

  .mensagem {
  color: white;
  float: left;
  margin-right: 2%;
  }

  .carregandoEfeito {
  background-color: black;
  height: 25px;
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
          Carregando está à página...
        </div>
        <div class="cylon_eye"></div>
      </div>
      </CarregandoAnimacao>
  );
}

export default Carregando;
