import { useState } from "react";
import styled from "styled-components";
import { ICard, IComment } from "types";
import { Button, Textarea } from "ui";
import { v4 as uuidv4 } from "uuid";

interface Props {
  createComment: (newComm: IComment) => void;
  cardId: string;
  findCard: (id: string) => ICard | undefined;
  userName: string;
}

export const AddComment: React.FC<Props> = ({
  createComment,
  findCard,
  cardId,
  userName,
}) => {
  const [newComment, setNewComment] = useState("");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (newComment) {
      const newComm = {
        id: uuidv4(),
        cardId: findCard(cardId)?.id,
        comment: newComment,
        author: userName,
      };
      createComment(newComm);
      setNewComment("");
    }
  };

  return (
    <Root>
      <form onSubmit={handleSubmit}>
        <label>
          Комментарии:
          <Textarea
            value={newComment}
            placeholder="Напишите комментарий..."
            rows={3}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <Button type="submit">Сохранить</Button>
        </label>
      </form>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`;
