import React from 'react'
import styled from 'styled-components'


const InputBase = styled.input`

    width: 100%;
    padding: 15px;
    border-radius: 5px;
    box-sizing: border-box;
    margin: 10px 0 20px 0;
    color: ${({ theme }) => theme.colors.foreground};
    border: 1px solid ${({ theme }) => theme.colors.purple};
    background-color: ${({ theme }) => theme.colors.background};

`;

export default function Input(props){
    return(
        <InputBase
        placeholder={props.placeholder}
        onChange={props.onChange}
        >
        </InputBase>
    )
}