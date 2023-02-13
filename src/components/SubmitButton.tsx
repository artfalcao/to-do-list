import styled from "styled-components";
import React from "react";

const StyledSubmitButton = styled.button`
  width: 100%;
  height: 4em;
  background-color: #2727ef;
  color: #fff;
  font-size: 1em;
  font-weight: 500;
  border: none;
  transition: 0.3s;

  :hover {
    border: 1px solid #2727ef;
    background-color: #fff;
    color: #2727ef;
    cursor: pointer;
  }
`;

type submitBtnProps = {
  text: string;
  handleOnClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

function SubmitButton({ text, handleOnClick }: submitBtnProps) {
  return (
    <StyledSubmitButton onClick={handleOnClick}>{text}</StyledSubmitButton>
  );
}

export default SubmitButton;
