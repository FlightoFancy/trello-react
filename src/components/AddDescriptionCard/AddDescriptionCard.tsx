import { Dispatch, SetStateAction, useState } from "react";
import { ICard } from "types";

interface AddDescriptionCardProps {
    addDesc: (description: string) => void
    setActiveDesc: Dispatch<SetStateAction<boolean>>
    activeDesc: boolean
    setEdit: Dispatch<SetStateAction<boolean>>
    edit: boolean
    cardDetail: ICard | undefined
}

export const AddDescriptionCard: React.FC<AddDescriptionCardProps> = ({ addDesc, activeDesc, edit, cardDetail }) => {
    const [value, setValue] = useState("")
    const [active, setActive] = useState(false)

    const openText = () => {
        setActive(true)
    }
    const cancel = () => {
        setActive(false)
    }

    return <>
        {cardDetail?.description === undefined ? <>
            {activeDesc &&
                <> <textarea onClick={openText} value={value} onChange={e => setValue(e.target.value)} placeholder="Добавить более подробное описание..." rows={3}></textarea>
                    {active &&
                        <><button onClick={() => addDesc(value)}>Сохранить</button>
                            <button onClick={cancel}>Отменить</button></>
                    }
                </>
            }
        </> : <div>{cardDetail?.description}</div>}

        {edit && <div>{value}</div>}
    </>
}

