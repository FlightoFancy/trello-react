import { useState } from "react";
import styled from "styled-components";
import { Button, Textarea } from "ui";

interface Props {
  createComment: (newComment: string) => void;
}

export const AddComment: React.FC<Props> = ({ createComment }) => {
  const [newComment, setNewComment] = useState("");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (newComment) {
      createComment(newComment);
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
