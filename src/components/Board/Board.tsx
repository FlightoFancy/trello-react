import { useState } from "react";

import { ICard, IComment } from "types";
import styled from "styled-components";
import { CardModal, Column, Title } from "components";
import { COLORS } from "styles";

interface Props {
  userName: string;
}

export const Board: React.FC<Props> = ({ userName }) => {
  const [cards, setCards] = useState<ICard[]>([]);
  const [comments, setComments] = useState<IComment[]>([]);
  const [isModalActive, setIsModalActive] = useState(false);
  const [cardId, setCardId] = useState("");

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
      <BoardItem>
        <Title titleValue="Todo" name="one" />
        <Column
          items={cards}
          openModalCard={openModalCard}
          createCard={createCard}
          findCountComments={findCountComments}
        />
      </BoardItem>
      <BoardItem>
        <Title titleValue="In progress" name="two" />
      </BoardItem>
      <BoardItem>
        <Title titleValue="Testing" name="three" />
      </BoardItem>
      <BoardItem>
        <Title titleValue="Done" name="four" />
      </BoardItem>
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
