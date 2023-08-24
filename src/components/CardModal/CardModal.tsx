import { CardInfo } from "components";
import { Button, Modal } from "antd";

interface Props {
  active: boolean;
  setActive: (isActive: boolean) => void;
  cardId: string;
  removeCard: (id: string) => void;
}

export const CardModal: React.FC<Props> = ({
  cardId,
  active,
  setActive,
  removeCard,
}) => {
  const handleCancel = () => {
    setActive(false);
  };

  return (
    <>
      <Modal open={active} onCancel={handleCancel} footer={null}>
        <CardInfo cardId={cardId} />
        <Button danger onClick={() => removeCard(cardId)}>Удалить карточку</Button>
      </Modal>
    </>
  );
};
