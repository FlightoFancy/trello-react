import { useState } from "react";
import { ColumnInputTitle } from "./ColumnInputTitle";
import { ColumnTitle } from "./ColumnTitle";

interface TitleProps {
    name: string;
    titleValue: string;
}

export const Title: React.FC<TitleProps> = ({ name, titleValue }) => {
    const [isEdit, setIsEdit] = useState(false);
    const [value, setValue] = useState(titleValue);

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value);
    }
    const handleBlur: React.FocusEventHandler<HTMLInputElement> = () => {
        setIsEdit(false);
    }
    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === 'Enter') {
            setIsEdit(false);
        }
    }
    const editTitle = () => {
        setIsEdit(true);
    }

    return <>{isEdit ? <ColumnInputTitle name={name} value={value} onChange={handleChange} onBlur={handleBlur} onKeyDown={handleKeyDown} /> : <ColumnTitle title={value} onClick={editTitle} />}</>
}
