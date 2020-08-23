import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  border: 3px dashed;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: red;
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
  
  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
    transform: scale(0.8);
    border-radius: 50px;
    box-shadow: 10px 10px whitesmoke;
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }
`;
