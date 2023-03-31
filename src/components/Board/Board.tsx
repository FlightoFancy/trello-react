import { useState } from "react";

import { ICard, IColumn, IComment } from "types";
import styled from "styled-components";
import { CardModal, Column, Title } from "components";
import { COLORS } from "styles";
import { INITIAL_COLUMNS } from "constants/mock";

interface Props {
  userName: string;
}

export const Board: React.FC<Props> = ({ userName }) => {
  const [cards, setCards] = useState<ICard[]>([]);
  const [comments, setComments] = useState<IComment[]>([]);
  const [isModalActive, setIsModalActive] = useState(false);
  const [cardId, setCardId] = useState("");
  const [columns] = useState<IColumn[]>(INITIAL_COLUMNS);

  const activeCardModal = (isActive: boolean) => {
    setIsModalActive(isActive);
  };

  const openModalCard = (id: string) => {
    setCardId(id);
    setIsModalActive(true);
  };

  const createCard = (newCard: ICard) => {
    setCards([...cards, newCard]);
  };

  const removeCard = (id: string) => {
    setCards(cards.filter((card) => card.id !== id));
    setIsModalActive(false);
  };

  const addDesc = (description: string) => {
    if (description) {
      setCards(
        cards.map((card) => {
          if (card.id === cardId) {
            return {
              ...card,
              description: description,
            };
          }
          return card;
        })
      );
    }
  };

  const editCardName = (titleCard: string) => {
    if (titleCard) {
      setCards(
        cards.map((card) => {
          if (card.id === cardId) {
            return {
              ...card,
              title: titleCard,
            };
          }
          return card;
        })
      );
    }
  };

  const findCard = (id: string) => {
    let card = cards.find((card) => card.id === id);
    if (card) {
      return card;
    }
  };

  const createComment = (newComm: IComment) => {
    setComments([...comments, newComm]);
  };

  const removeComment = (id: string) => {
    setComments(comments.filter((comment) => comment.id !== id));
  };

  const editComment = (commentNewValue: string, id: string) => {
    if (commentNewValue) {
      setComments(
        comments.map((comment) => {
          if (comment.id === id) {
            return {
              ...comment,
              comment: commentNewValue,
            };
          }
          return comment;
        })
      );
    }
  };

  const findCountComments = (id: string) => {
    let filteredComments = comments.filter((comment) => comment.cardId === id);
    if (filteredComments) {
      return filteredComments.length;
    }
  };

  const deleteCard = (id: string) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  return (
    <Container>
      <CardModal
        removeCard={removeCard}
        active={isModalActive}
        setActive={activeCardModal}
        cardId={cardId}
        findCard={findCard}
        addDesc={addDesc}
        editCardName={editCardName}
        createComment={createComment}
        comments={comments}
        removeComment={removeComment}
        editComment={editComment}
        userName={userName}
      />
      {columns.map((column) => (
        <BoardItem key={column.id}>
          <Title titleValue={column.title} name={column.id} />
          <Column
            items={cards.filter((card) => card.columnId === column.id)}
            openModalCard={openModalCard}
            createCard={createCard}
            columnId={column.id}
            findCountComments={findCountComments}
            deleteCard={deleteCard}
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
