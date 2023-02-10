import React from 'react';
import { Link } from 'react-router-dom'

import styled from 'styled-components';

const StyledButton = styled.button`
    width: 8em;
    height: 2em;
    padding: .5em;
    font-size: 1.5em;
    font-weight: 500;
    background-color: #2727ff;
    color: #fff;
    transition: 0.3s;
    border: none;

    .link {
        color: #fff;
        display: block;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .link:hover{
        color: #2727ff;
    }

    :hover{
        cursor: pointer;
        background-color: white;
        border: 2px solid #2727ff;
        color: #2727ff;
    }
`;

type LinkBtnProps = {
    text : string;
    to : string;
}

function LinkButton ({ to, text} : LinkBtnProps) {
    return (
        <StyledButton>
            <Link className="link" to={to}>
                {text}
            </Link>
        </StyledButton>   
    )
}

export default LinkButton;