import { useState } from "react";
import { ColumnInputTitle } from "./ColumnInputTitle"
import ColumnTitle from "./ColumnTitle"


interface TitleProps {
    name: string,
    titleValue: string,
}

const Title: React.FC<TitleProps> = ({ name, titleValue }) => {
    const [edit, setEdit] = useState(false);
    const [value, setValue] = useState(titleValue);
   
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value);
        switch (e.target.name){
            case "one": localStorage.setItem("col1",e.target.value);
            break
            case "two": localStorage.setItem("col2",e.target.value);
            break
            case "three": localStorage.setItem("col3",e.target.value);
            break
            case "four": localStorage.setItem("col4",e.target.value);
            break
        }
    }
    const handleBlur: React.FocusEventHandler<HTMLInputElement> = () => {
        setEdit(false);
    }
    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key == 'Enter') {
            setEdit(false);
        }
    }
    const editTitle = () => {
        setEdit(true);
    }

    return <>{!edit ? <ColumnTitle title={value} onClick={editTitle} /> : <ColumnInputTitle name={name} value={value} onChange={handleChange} onBlur={handleBlur} onKeyDown={handleKeyDown} />}</>
}

export { Title }