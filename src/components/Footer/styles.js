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

  p, 
  a, 
  img {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 30px;
  }

  @keyframes pulse {
	    0%, 50%, 100% {
		    transform: scale(1);
      }
      25%, 75%{
		    transform: scale(2);
      }
    }
    
  .Heart {
    margin: 20px;
    width: 30px;
    animation: pulse 3s infinite alternate;
  }  
  
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;
