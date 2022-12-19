import { useState } from "react";
import { ICard } from "types";

interface Props {
  addDesc: (description: string) => void;
  cardDetail?: ICard;
}

export const AddDescriptionCard: React.FC<Props> = ({
  addDesc,
  cardDetail,
}) => {
  const [cardDesc, setCardDesc] = useState("");
  const [isActiveButtons, setIsActiveButtons] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isShowButton, setIsShowButton] = useState(true);

  const showButtons = () => {
    setIsActiveButtons(true);
  };
  const cancelEditText = () => {
    setIsActiveButtons(false);
  };
  const showForm = () => {
    setIsEdit(true);
    setIsShowButton(false);
  };
  const saveDescCard = () => {
    addDesc(cardDesc);
    setIsEdit(false);
  };

  return (
    <>
      {cardDetail?.description ? (
        <div>
          <p>{cardDetail?.description}</p>
          {isShowButton && <button onClick={showForm}>Редактировать</button>}
        </div>
      ) : (
        <>{isShowButton && <button onClick={showForm}>Добавить</button>}</>
      )}
      <>
        {isEdit && (
          <>
            <textarea
              onClick={showButtons}
              value={cardDesc}
              onChange={(e) => setCardDesc(e.target.value)}
              placeholder="Добавить более подробное описание..."
              rows={3}
            ></textarea>
            {isActiveButtons && (
              <>
                <button onClick={saveDescCard}>Сохранить</button>
                <button onClick={cancelEditText}>Отменить</button>
              </>
            )}
          </>
        )}
      </>
    </>
  );
};
