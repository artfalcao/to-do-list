import React from "react";

export type selectProps = {
  text: string;
  name: string;
  options: Array<Options>;
  value?: string | number;
  handleOnChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export type Options = {
  id: string;
  name: string;
};
