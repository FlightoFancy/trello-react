import { useState } from "react";
import { ICard } from "types";
import { Button, Textarea } from "ui";

interface Props {
  addDesc: (description: string) => void;
  cardId: string;
  findCard: (id: string) => ICard | undefined;
}

export const CardInfo: React.FC<Props> = ({ addDesc, cardId, findCard }) => {
  const [cardDesc, setCardDesc] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const cancelEditText = () => {
    setIsEdit(false);
  };

  const handleEditDescription = () => {
    setIsEdit(true);
  };

  const saveDescCard = () => {
    if (cardDesc) {
      addDesc(cardDesc);
      setIsEdit(false);
    }
  };

  return (
    <>
      <span>ID: {cardId}</span>
      <span>Название: {findCard(cardId)?.title}</span>
      <span>Описание:</span>
      {isEdit ? (
        <>
          <Textarea
            value={cardDesc}
            onChange={(e) => setCardDesc(e.target.value)}
            placeholder="Добавить более подробное описание..."
            rows={5}
            autoFocus
          />
          <Button variant="small" onClick={saveDescCard}>
            Сохранить
          </Button>
          <Button variant="small" onClick={cancelEditText}>
            Отменить
          </Button>
        </>
      ) : (
        <div>
          <p>{findCard(cardId)?.description}</p>
          <Button variant="small" onClick={handleEditDescription}>
            Редактировать
          </Button>
        </div>
      )}
    </>
  );
};
