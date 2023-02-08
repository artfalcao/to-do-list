import React from "react";
import { Link } from 'react-router-dom';

import { GoTasklist } from 'react-icons/go';
import styled from "styled-components";

const StyledHeader = styled.header `
    height: 12vh;
    padding: .5em 1em;
    background-color: #2727ff;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyledNavbar = styled.nav`
    width: 95%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Logo = styled.span`
    width: 8em;
    height: 2.5em;
    font-weight:bold;
    font-size: 1.8em;
    text-align: center;
    color: #fff;
    margin-left: 2em;
    display: flex;
    align-items: center;
    justify-content: space-around;

    svg {
        font-size: 1.5em;
    }
`;

const LinksList = styled.ul`
    width: 40em;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: space-around;

    a {
        font-size: 1em;
        padding: 2em;
        font-weight: 600;
        color: #fff;
    }

    a:hover {
        cursor: pointer;
        text-decoration: underline;
    }   
`;

function Header() {
    return (
        <StyledHeader>
            <StyledNavbar>
                <Link to='/'>
                    <Logo>
                        <GoTasklist/>
                        toDo-List
                    </Logo>
                </Link>
                
                <LinksList>
                    <li><Link to="/newactivity">Add Activity</Link></li>
                    <li><Link to="/activities">Activities</Link></li>
                </LinksList>
            </StyledNavbar>
            
        </StyledHeader>
    );
    
}

export default Header;