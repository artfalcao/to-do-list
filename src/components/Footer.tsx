import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import styled from "styled-components";

const StyledFooter = styled.footer`
  height: 9em;
  background-color: #2727ff;
  color: #fff;
  padding: 1em;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  .social_list {
    display: flex;
    justify-content: center;
    list-style-type: none;
  }

  .social_list li {
    margin: 0 1em;
  }

  .social_list svg {
    font-size: 2em;
    cursor: pointer;
  }

  .social_list svg :hover {
    color: #fff;
  }

  .copy_right {
    margin-top: 1em;
    font-size: 1em;
    color: #000;
  }

  .copy_right span {
    font-size: 1em;
    font-weight: bold;
    color: #fff;
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <ul className="social_list">
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaLinkedin />
        </li>
      </ul>
      <p className="copy_right">
        <span>toDo-List</span> &copy; 2023{" "}
      </p>
    </StyledFooter>
  );
}

export default Footer;
