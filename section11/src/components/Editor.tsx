import React, { ChangeEvent, ReactElement, useContext, useState } from "react"
import { useTodoDispatch } from "../App";

interface Props {
    onClickAdd?: (text: string) => void;
}

export default function Editor (props: Props) {
    const dispatch = useTodoDispatch()


    const [text, setText] = useState("")

    const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value)
      }

      const onClickButton = () => {
        // props.onClickAdd(text)
        dispatch.onClickAdd(text)
        setText("")
      }
    
    return (
        <div>
            <input value={text} onChange={onChangeInput}/>
            <button onClick={onClickButton}>추가</button>
        </div>
    )
}