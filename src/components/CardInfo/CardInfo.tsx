import { useState } from "react";
import { AddComment, CardName, CommentList } from "components";
import { ICard, IComment } from "types";
import { Button, Textarea } from "ui";

interface Props {
  addDesc: (description: string) => void;
  cardId: string;
  findCard: (id: string) => ICard | undefined;
  editCardName: (titleCard: string) => void;
  createComment: (newComm: IComment) => void;
  comments: IComment[];
  removeComment: (id: string) => void;
  userName: string;
  editComment: (commentNewValue: string, id: string) => void;
}

export const CardInfo: React.FC<Props> = ({
  addDesc,
  cardId,
  findCard,
  editCardName,
  createComment,
  comments,
  removeComment,
  userName,
  editComment,
}) => {
  const [cardDesc, setCardDesc] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const cancelEditText = () => {
    setIsEdit(false);
  };

  const handleEditDescription = () => {
    setIsEdit(true);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    addDesc(cardDesc);
    setIsEdit(false);
  };

  return (
    <>
      <CardName
        editCardName={editCardName}
        findCard={findCard}
        cardId={cardId}
      />
      <span>Описание:</span>
      {isEdit ? (
        <form onSubmit={handleSubmit}>
          <Textarea
            value={cardDesc}
            onChange={(e) => setCardDesc(e.target.value)}
            placeholder="Добавить более подробное описание..."
            rows={5}
            autoFocus
          />
          <Button type="submit" variant="small">
            Сохранить
          </Button>
          <Button type="reset" variant="small" onClick={cancelEditText}>
            Отменить
          </Button>
        </form>
      ) : (
        <div>
          <p>{findCard(cardId)?.description}</p>
          <Button variant="small" onClick={handleEditDescription}>
            Редактировать
          </Button>
        </div>
      )}
      <AddComment
        createComment={createComment}
        cardId={cardId}
        findCard={findCard}
        userName={userName}
      />
      <CommentList
        removeComment={removeComment}
        comments={comments}
        cardId={cardId}
        userName={userName}
        editComment={editComment}
      />
    </>
  );
};
