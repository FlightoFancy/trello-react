import { useState } from "react";

import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import { ICard } from "types";
import { Button, Textarea } from "ui";

interface Props {
  createCard: (card: ICard) => void;
}

export const AddCard: React.FC<Props> = ({ createCard }) => {
  const [isAddCardFormVisible, setIsAddCardFormVisible] = useState(false);
  const [newCardTitle, setNewCardTitle] = useState("");

  const openForm = () => {
    setIsAddCardFormVisible(true);
  };
  const closeForm = () => {
    setIsAddCardFormVisible(false);
  };
  const addCard = () => {
    if (newCardTitle) {
      const newCard = {
        id: uuidv4(),
        title: newCardTitle,
      };
      createCard(newCard);
      setIsAddCardFormVisible(false);
    }
    setNewCardTitle("");
  };

  return (
    <>
      {isAddCardFormVisible ? (
        <Container>
          <Textarea
            value={newCardTitle}
            placeholder="Введите заголовок карточки"
            autoFocus
            rows={3}
            onChange={(e) => setNewCardTitle(e.target.value)}
          />
          <Button variant="addCard" onClick={addCard}>
            Добавить карточку
          </Button>
          <Button variant="close" onClick={closeForm}>
            &#10006;
          </Button>
        </Container>
      ) : (
        <Button variant="center" onClick={openForm}>
          + Добавить карточку
        </Button>
      )}
    </>
  );
};

const Container = styled.div`
  width: 90%;
  margin: 5px auto;
`;
