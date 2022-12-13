import { Dispatch, SetStateAction, useEffect, useRef } from "react"
import styled from "styled-components"
import { ICard } from "../types/data"
import { getLocalStorageName } from "../utilities/localStorageUtility"


const StyledModal = styled.div`
width: 100vw;
height: 100vh;
top: 0;
left: 0;
right: 0;
bottom: 0;
position: fixed;
&:focus { outline: none; } 
`
const StyledModalContent = styled.div`
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
const StyledOverlay = styled(StyledModal)`
background: rgba(49,49,49,0.8);
`

interface CardModalProps {
    active: boolean
    setActive: Dispatch<SetStateAction<boolean>>
    cardDetail: ICard | undefined,
    removeCard: (id: number | undefined) => void
    children: React.ReactNode
}

const CardModal: React.FC<CardModalProps> = ({ cardDetail, active, setActive,removeCard,children }) => {

    const divRef = useRef<HTMLDivElement>(null)

    const handleKeyDown: React.KeyboardEventHandler<HTMLElement> = (e) => {
        if (e.key == 'Escape') {
            setActive(false);
        }
    }
    const closeModal = () => {
        setActive(false);
    }
    
    useEffect(() => {
        if (divRef.current) {
            divRef.current.focus()
        }
    }, [active]
    )

    return <>
        {active && <StyledModal ref={divRef} tabIndex={0} onKeyDown={handleKeyDown}>
            <StyledOverlay />
            <StyledModalContent >
                <span>ID: {cardDetail?.id}</span>
                <span>Название: {cardDetail?.title}</span>
                <span>Автор : {getLocalStorageName("user")}</span>
                <span>Описание</span>
               {
            children}
                <br/>
                <button onClick={closeModal}>Закрыть</button>
                <br/>
                <button onClick={() =>removeCard(cardDetail?.id)}>Удалить карточку</button>
            </StyledModalContent>
        </StyledModal>}
    </>
}

export { CardModal }