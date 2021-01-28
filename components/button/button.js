import React from 'react';
import styled from 'styled-components';


const Button = styled.button`

    width: 100%;
    padding: 15px;
    border-radius: 5px;
    box-sizing: border-box;
    color: ${({ theme }) => theme.colors.foreground};
    background-color: ${({ theme }) => theme.colors.purple};
  &:disabled{
    
    background-color: ${({ theme }) => theme.colors.CurrentLine};
  }
  &:hover,
  &:focus {
    opacity: .8;
  }
`;

export default Button;