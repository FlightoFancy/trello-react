import { Input } from "antd";
import { useAppDispatch, useAppSelector } from "hooks";
import { useState } from "react";
import { editCardName } from "redux/ducks/Card";
import styled from "styled-components";

interface Props {
  cardId: string;
}

export const CardName: React.FC<Props> = ({ cardId }) => {
  const cards = useAppSelector((state) => state.cards.list);

  const findCardTitle = (id: string) => {
    let card = cards.find((card) => card.id === id);
    if (card) {
      return card.title;
    }
  };
  const [isEdit, setIsEdit] = useState(false);
  const [cardTitle, setCardTitle] = useState(findCardTitle(cardId));
  const dispatch = useAppDispatch();

  const handleBlur: React.FocusEventHandler<HTMLInputElement> = () => {
    if (cardTitle) {
      const newTitle = cardTitle;
      const id = cardId;
      dispatch(editCardName({ newTitle, id }));
    }
    setIsEdit(false);
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      if (cardTitle) {
        const newTitle = cardTitle;
        const id = cardId;
        dispatch(editCardName({ newTitle, id }));
        setIsEdit(false);
      }
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
          onChange={(e) => {
            setCardTitle(e.target.value);
          }}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      ) : (
        <>
          <span onClick={editTitle}>{findCardTitle(cardId)}</span>
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
