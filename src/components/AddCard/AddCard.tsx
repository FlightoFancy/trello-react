import { useAppDispatch } from "hooks";
import { useState } from "react";
import { createCard } from "redux/ducks/Card/cardSlice";

import styled from "styled-components";
import { Button, Textarea } from "ui";

interface Props {
  columnId: string;
}

export const AddCard: React.FC<Props> = ({ columnId }) => {
  const [isAddCardFormVisible, setIsAddCardFormVisible] = useState(false);
  const [newCardTitle, setNewCardTitle] = useState("");

  const dispatch = useAppDispatch();

  const openForm = () => {
    setIsAddCardFormVisible(true);
  };

  const closeForm = () => {
    setIsAddCardFormVisible(false);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (newCardTitle) {
      const cardTitle = newCardTitle;
      dispatch(createCard({ cardTitle, columnId }));
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
