import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  border: 3px dashed;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 0 30px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;
  box-shadow: 8px 10px 4px black;
        

  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }
`;
