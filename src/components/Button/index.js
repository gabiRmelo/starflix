import styled from 'styled-components';

const Button = styled.button`
    color: var(--white);
    border: 4px double var(--white);
    background: var(--background);
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 4px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;

    &:hover,
    &:focus {
        opacity: .5;
        box-shadow: 0 0 30px yellow;
        background: yellow;
        color: black;
    }
`;

export default Button;
