import React from 'react';
import styled from 'styled-components';
import PageDefault from '../../components/PageDefault';
import babyYoda from '../../assets/img/baby_yoda.png';

const Erro = styled.div`
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 25px;
    text-align: center;

    @keyframes float {
	    0%, 75%, 100% {
		    box-shadow:0px 0px 15px 0 rgba(0,0,0,.6);
            transform:translatey(0);
            transform:translatex(0);
        }
        25%{
		    box-shadow:25px 25px 15px 0 rgba(246,250,25,.2);
            transform:translatey(50px);
            transform:translatex(50px);
	    }
	    50%{
		    box-shadow:25px 25px 15px 0 rgba(0,0,239,.2);
            transform:translatey(-50px);
            transform:translatex(-50px);
	    }
    }
    
    h1,
    h3 {
        line-height: 40px;
        animation: float 3s ease-in-out infinite;
        border-radius: 8px;
        background: yellow;
        color: black;
        padding: 8px;
    }
    
    img {
        animation: float .5s infinite alternate;
        border-radius: 75px;
        margin: 30px;
    }

    @media (max-width: 800px) {
        h1,
        h3 {
            font-size: .8em;
            line-height: 1.3em;            
        }
    
        img {
            height: 6em;
        }    
    }
}`;

const Pagina_404 = () => (
  <PageDefault>
    <Erro>
      <div>
        <h1>Encontrada não foi, a página...</h1>
        <img src={babyYoda} alt="Baby Yoda" />
        <h3>Voltar ou digitar novamente você deve :)</h3>
      </div>
    </Erro>
  </PageDefault>
);

export default Pagina_404;
