import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    background-color: #2727ff;
    color: #fff;
    padding: 1em;
    text-align: center;

    .social_list {
        display: flex;
        justify-content: center;
        list-style-type: none;
    }

    .social_list li {
        margin: 0 0.5em;
    }

    .social_list svg {
        font-size: .8em;
        padding: 0.15em;
        cursor: pointer;
    }

    .social_list svg :hover {
        color: #fff;
    }

    .copy_right {
        font-size: .1em;
        color: #000;
    }

    .copy_right span {
        font-size: .5em;
        font-weight: bold;
        color: #fff;
    }
`;

function Footer() {
    return (
        <StyledFooter>
            <ul className= "social_list">
                <li><FaFacebook /></li>
                <li><FaInstagram /></li>
                <li><FaLinkedin /></li>
            </ul>
            <p className="copy_right"><span>toDo-List</span> &copy; 2023 </p>
        </StyledFooter>
    )
}

export default Footer