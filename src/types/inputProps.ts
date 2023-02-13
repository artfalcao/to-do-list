import React, { InputHTMLAttributes } from "react";

export type inputProps = {
  type: string;
  text: string;
  name: string;
  placeholder?: string;
  handleOnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};
