import { useState } from "react";
import styled from "styled-components";
import { COLORS } from "styles";
import { Button, Input } from "ui";

interface Props {
  showName: (name: string) => void;
}

export const UserModal: React.FC<Props> = ({ showName }) => {
  const [isModalUserOpen, setIsModalUserOpen] = useState(true);
  const [userName, setUserName] = useState("");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (userName) {
      showName(userName);
      localStorage.setItem("userName", userName);
      setIsModalUserOpen(false);
    }
  };

  return (
    <>
      {isModalUserOpen && (
        <Modal>
          <StyledOverlay />
          <ModalContent>
            <form onSubmit={handleSubmit}>
              <label>
                Ваше имя:
                <Input
                  margin="10px 0"
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
                <Button type="submit">Сохранить</Button>
              </label>
            </form>
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
