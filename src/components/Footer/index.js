import React from 'react';
import { FooterBase } from './styles';
import Heart from '../../assets/img/heart.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
          <img className="Heart" src={Heart} alt="Coração Amarelo" />
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
