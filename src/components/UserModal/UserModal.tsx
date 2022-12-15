import { useState } from "react";
import styled from "styled-components";
import { IUser } from "types";

export const UserModal: React.FC = () => {
    const [isModalUserOpen, setIsModalUserOpen] = useState(true);
    const [name, setName] = useState("");
    const [, setFullname] = useState<IUser>();

    const saveName = () => {
        if (name) {
            setFullname({ fullName: name })
            setIsModalUserOpen(false)
        }
    }

    return <>
        {isModalUserOpen && <Modal>
            <StyledOverlay />
            <ModalContent>
                <label>Ваше имя: </label>
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
                <br />
                <button onClick={saveName}>Сохранить</button>
            </ModalContent>
        </Modal>}
    </>
}

const Modal = styled.div`
width: 100vw;
height: 100vh;
top: 0;
left: 0;
right: 0;
bottom: 0;
position: fixed;
`
const ModalContent = styled.div`
position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    line-height: 1.4;
    background: #f1f1f1;
    padding: 14px 28px;
    border-radius: 3px;
    max-width: 600px;
    min-width: 300px;
    display:flex;
    flex-direction: column
`
const StyledOverlay = styled(Modal)`
background: rgba(49,49,49,0.8);
`
