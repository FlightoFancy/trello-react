import { useState } from "react";
import styled from "styled-components";
import { ICard } from "types";
import { Input } from "ui";

interface Props {
  findCard: (id: string) => ICard | undefined;
  cardId: string;
  editCardName: (titleCard: string) => void;
}

export const CardName: React.FC<Props> = ({
  findCard,
  cardId,
  editCardName,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [cardTitle, setCardTitle] = useState("");

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setCardTitle(e.target.value);
  };
  const handleBlur: React.FocusEventHandler<HTMLInputElement> = () => {
    setIsEdit(false);
    editCardName(cardTitle);
  };
  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      setIsEdit(false);
      editCardName(cardTitle);
    }
  };
  const editTitle = () => {
    setIsEdit(true);
  };

  return (
    <Root>
      <span>Название:</span>
      {isEdit ? (
        <Input
          value={cardTitle}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      ) : (
        <>
          <span onClick={editTitle}>{findCard(cardId)?.title}</span>
        </>
      )}
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`;
