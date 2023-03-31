import { useState } from "react";

import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import { ICard } from "types";
import { Button, Textarea } from "ui";

interface Props {
  createCard: (card: ICard) => void;
  columnId: string;
}

export const AddCard: React.FC<Props> = ({ createCard, columnId }) => {
  const [isAddCardFormVisible, setIsAddCardFormVisible] = useState(false);
  const [newCardTitle, setNewCardTitle] = useState("");

  const openForm = () => {
    setIsAddCardFormVisible(true);
  };

  const closeForm = () => {
    setIsAddCardFormVisible(false);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (newCardTitle) {
      const newCard = {
        id: uuidv4(),
        title: newCardTitle,
        columnId: columnId,
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
          <form onSubmit={handleSubmit}>
            <Textarea
              value={newCardTitle}
              placeholder="Введите заголовок карточки"
              autoFocus
              rows={3}
              onChange={(e) => setNewCardTitle(e.target.value)}
            />
            <Button type="submit" variant="addCard">
              Добавить карточку
            </Button>
            <Button type="reset" variant="close" onClick={closeForm}>
              &#10006;
            </Button>
          </form>
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
