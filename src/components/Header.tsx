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
    justify-content: space-between;
`;

const Logo = styled.span`
    margin-left: 2em;
    color: #fff;
    font-weight:bold;
    font-size:.5em;
    width: 3.5rem;
    height: 1rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const LinksList = styled.ul`
    width: 10em;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-around;

    li {
        height: 100%;
        display: flex;
        align-items: center;
    }

    a {
        padding: 2em;
        font-weight: 500;
        color: #fff;
        font-size: .1em;
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
                        <GoTasklist size={12}/>
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