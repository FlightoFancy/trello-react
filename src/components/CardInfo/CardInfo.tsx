import { useState } from "react";
import { AddComment, CardName, CommentList } from "components";
import { Button, Textarea } from "ui";
import { useAppDispatch, useAppSelector } from "hooks";
import { addDescription } from "redux/ducks/Card";

interface Props {
  cardId: string;
  userName: string;
}

export const CardInfo: React.FC<Props> = ({ cardId, userName }) => {
  const [cardDesc, setCardDesc] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useAppDispatch();

  const cards = useAppSelector((state) => state.cards.list);

  const cancelEditText = () => {
    setIsEdit(false);
  };

  const handleEditDescription = () => {
    setIsEdit(true);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const description = cardDesc;
    const id = cardId;
    dispatch(addDescription({ description, id }));
    setIsEdit(false);
  };

  const findCardDesc = (id: string) => {
    let card = cards.find((card) => card.id === id);
    if (card) {
      return card.description;
    }
  };

  return (
    <>
      <CardName cardId={cardId} />
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
          <p>{findCardDesc(cardId)}</p>
          <Button variant="small" onClick={handleEditDescription}>
            Редактировать
          </Button>
        </div>
      )}
      <AddComment cardId={cardId} userName={userName} />
      <CommentList cardId={cardId} userName={userName} />
    </>
  );
};
