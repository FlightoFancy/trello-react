import { useAppDispatch, useAppSelector } from "hooks";
import { useState } from "react";
import { createComment } from "redux/ducks/Comment";
import styled from "styled-components";
import { Button, Textarea } from "ui";

interface Props {
  cardId: string;
}

export const AddComment: React.FC<Props> = ({ cardId }) => {
  const [newComment, setNewComment] = useState("");

  const dispatch = useAppDispatch();
  const userName = useAppSelector((state) => state.user.user.name);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (newComment) {
      const commentTitle = newComment;
      dispatch(createComment({ commentTitle, userName, cardId }));
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
  margin: 20px 0;
`;
