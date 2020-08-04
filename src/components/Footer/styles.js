import styled from 'styled-components';
import FooterBackground from '../../assets/img/background_00.jpg';


export const FooterBase = styled.footer`
  background-image: url(${FooterBackground});
  background-repeat: no-repeat;
  background-position: right;
  background-color: black;
  background-size: contain;
  height: 100%;
  width: 100vp;
  border-top: 2px solid var(--primary);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: var(--white);
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;
