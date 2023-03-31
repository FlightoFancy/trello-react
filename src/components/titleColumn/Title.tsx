import { useState } from "react";
import { Input } from "ui";

import { ColumnTitle } from "./ColumnTitle";

interface Props {
  name: string;
  titleValue: string;
}

export const Title: React.FC<Props> = ({ name, titleValue }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState(localStorage.getItem(name) || titleValue);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
    localStorage.setItem(name, e.target.value);
  };
  const handleBlur: React.FocusEventHandler<HTMLInputElement> = () => {
    setIsEdit(false);
  };
  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      setIsEdit(false);
    }
  };
  const editTitle = () => {
    setIsEdit(true);
  };

  return (
    <>
      {isEdit ? (
        <Input
          name={name}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      ) : (
        <ColumnTitle title={value} onClick={editTitle} />
      )}
    </>
  );
};
