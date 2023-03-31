import { useEffect, useRef } from "react";

import { CardInfo } from "components";
import styled from "styled-components";
import { ICard, IComment } from "types";
import { Button } from "ui";
import { COLORS } from "styles";

interface Props {
  active: boolean;
  setActive: (isActive: boolean) => void;
  cardId: string;
  removeCard: (id: string) => void;
  findCard: (id: string) => ICard | undefined;
  addDesc: (description: string) => void;
  editCardName: (titleCard: string) => void;
  createComment: (newComm: IComment) => void;
  comments: IComment[];
  removeComment: (id: string) => void;
  userName: string;
  editComment: (commentNewValue: string, id: string) => void;
}

export const CardModal: React.FC<Props> = ({
  cardId,
  active,
  setActive,
  removeCard,
  findCard,
  addDesc,
  editCardName,
  createComment,
  comments,
  removeComment,
  userName,
  editComment,
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
            <CardInfo
              createComment={createComment}
              editCardName={editCardName}
              addDesc={addDesc}
              cardId={cardId}
              findCard={findCard}
              comments={comments}
              removeComment={removeComment}
              userName={userName}
              editComment={editComment}
            />
            <Button variant="cross" onClick={closeModal}>
              &#10006;
            </Button>
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
  overflow-y: scroll;
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
  top: 5%;
  left: 50%;
  transform: translate(-50%);
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
