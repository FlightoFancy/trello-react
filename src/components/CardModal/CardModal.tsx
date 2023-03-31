import { useEffect, useRef } from "react";

import { CardInfo } from "components";
import styled from "styled-components";
import { ICard } from "types";
import { Button } from "ui";
import { COLORS } from "styles";

interface Props {
  active: boolean;
  setActive: (isActive: boolean) => void;
  cardId: string;
  removeCard: (id: string) => void;
  findCard: (id: string) => ICard | undefined;
  addDesc: (description: string) => void;
}

export const CardModal: React.FC<Props> = ({
  cardId,
  active,
  setActive,
  removeCard,
  findCard,
  addDesc,
}) => {
  const divRef = useRef<HTMLDivElement>(null);

  const handleKeyDown: React.KeyboardEventHandler<HTMLElement> = (e) => {
    if (e.key === "Escape") {
      setActive(false);
    }
  };

  const closeModal = () => {
    setActive(false);
  };

  useEffect(() => {
    if (divRef.current) {
      divRef.current.focus();
    }
  }, [active]);

  return (
    <>
      {active && (
        <Modal ref={divRef} tabIndex={0} onKeyDown={handleKeyDown}>
          <StyledOverlay />
          <ModalContent>
            <CardInfo addDesc={addDesc} cardId={cardId} findCard={findCard} />
            <Button variant="cross" onClick={closeModal}>
              &#10006;
            </Button>
            <br />
            <Button onClick={() => removeCard(cardId)}>Удалить карточку</Button>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  &:focus {
    outline: none;
  }
`;
const ModalContent = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: 1.4;
  background: ${COLORS.lightgrey};
  padding: 14px 28px;
  border-radius: 3px;
  max-width: 600px;
  min-width: 300px;
  display: flex;
  flex-direction: column;
`;
const StyledOverlay = styled(Modal)`
  background: ${COLORS.darkgrey};
  opacity: 0.8;
`;
