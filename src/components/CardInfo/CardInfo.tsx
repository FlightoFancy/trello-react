import { useState } from "react";
import { ICard } from "types";

interface Props {
  addDesc: (description: string) => void;
  cardId: number;
  findCard: (id: number) => ICard | undefined;
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
          <textarea
            value={cardDesc}
            onChange={(e) => setCardDesc(e.target.value)}
            placeholder="Добавить более подробное описание..."
            rows={3}
          ></textarea>
          <button onClick={saveDescCard}>Сохранить</button>
          <button onClick={cancelEditText}>Отменить</button>
        </>
      ) : (
        <div>
          <p>{findCard(cardId)?.description}</p>
          <button onClick={handleEditDescription}>Редактировать</button>
        </div>
      )}
    </>
  );
};
