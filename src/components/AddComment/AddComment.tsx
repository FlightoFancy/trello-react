import { useState } from "react";
import { ICard, IComment } from "types";
import { Button, Textarea } from "ui";
import { v4 as uuidv4 } from "uuid";

interface Props {
  createComment: (newComm: IComment) => void;
  cardId: string;
  findCard: (id: string) => ICard | undefined;
}

export const AddComment: React.FC<Props> = ({
  createComment,
  findCard,
  cardId,
}) => {
  const [newComment, setNewComment] = useState("");

  const addComment = () => {
    if (newComment) {
      const newComm = {
        id: uuidv4(),
        cardId: findCard(cardId)?.id,
        comment: newComment,
      };
      createComment(newComm);
      setNewComment("");
    }
  };

  return (
    <>
      <span>Комментарии:</span>
      <Textarea
        value={newComment}
        placeholder="Напишите комментарий..."
        rows={3}
        onChange={(e) => setNewComment(e.target.value)}
      />
      <Button onClick={addComment}>Сохранить</Button>
    </>
  );
};
