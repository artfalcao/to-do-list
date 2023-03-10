import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { selectProps } from "../types/selectProps";

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em 0.5em;

  label {
    margin-bottom: 0.6em;
    font-weight: bold;
    font-size: 1.1em;
  }

  select {
    padding: 0.7em;
    border-radius: 0;
    border: none;
    font-size: 1em;
  }

  option {
    box-sizing: border-box;
  }
`;

function Select({ text, name, options, value, handleOnChange }: selectProps) {
  return (
    <SelectContainer>
      <label htmlFor={name}>{text}:</label>
      <select name={name} id={name} value={value} onChange={handleOnChange}>
        <option>Select one option</option>
        {options.map((option) => (
          <option value={option.id} key={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </SelectContainer>
  );
}

export default Select;
