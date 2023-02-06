import React from 'react';
import { useState, useEffect } from 'react';
import styled from "styled-components";
import { inputProps } from '../types/inputProps';

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: .5em 0;

    label {
        margin-bottom: .6em;
        font-weight: bold;
        font-size: .2em;
    }

    input {
        padding: .5em;
        border-radius: 0;
        border: .8px solid #272424;
        font-size: .3em;
    }

    input::placeholder {
        color: #7b7b7b;
    }
`;

function Input({
    type, 
    text, 
    name, 
    placeholder, 
    handleOnChange, 
    value} : inputProps) {
    
    return (
        <InputContainer>
            <label htmlFor={name}>{text}:</label>
            <input 
                type={type} 
                name={name} 
                id={name} 
                placeholder={placeholder} 
                onChange={handleOnChange}
                value={value}
                />
        </InputContainer>
    )
}

export default Input;