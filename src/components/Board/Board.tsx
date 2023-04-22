import { useState } from "react";

import { IColumn } from "types";
import styled from "styled-components";
import { CardModal, Column, Title } from "components";
import { COLORS } from "styles";
import { INITIAL_COLUMNS } from "constants/mock";
import { useAppDispatch, useAppSelector } from "hooks";
import { deleteCard } from "redux/ducks/Card";

export const Board: React.FC = () => {
  const [isModalActive, setIsModalActive] = useState(false);
  const [cardId, setCardId] = useState("");
  const [columns] = useState<IColumn[]>(INITIAL_COLUMNS);

  const dispatch = useAppDispatch();

  const cards = useAppSelector((state) => state.cards.list);

  const activeCardModal = (isActive: boolean) => {
    setIsModalActive(isActive);
  };

  const openModalCard = (id: string) => {
    setCardId(id);
    setIsModalActive(true);
  };

  const removeCardFromPopup = (id: string) => {
    dispatch(deleteCard({ id }));
    setIsModalActive(false);
  };

  return (
    <Container>
      <CardModal
        removeCard={removeCardFromPopup}
        active={isModalActive}
        setActive={activeCardModal}
        cardId={cardId}
      />
      {columns.map((column) => (
        <BoardItem key={column.id}>
          <Title titleValue={column.title} name={column.id} />
          <Column
            items={cards.filter((card) => card.columnId === column.id)}
            openModalCard={openModalCard}
            columnId={column.id}
          />
        </BoardItem>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: flex-start;
`;
const BoardItem = styled.div`
  width: 24%;
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.greyblue};
`;
