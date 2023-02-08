import React from 'react';
import { useState, useEffect } from 'react';
import styled from "styled-components";
import { inputProps } from '../types/inputProps';

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1em .5em;

    label {
        margin-bottom: .6em;
        font-weight: bold;
        font-size: 1.1em;
    }

    input {
        padding: .5em;
        border-radius: 0;
        border: .8px solid #272424;
        font-size: 1em;
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