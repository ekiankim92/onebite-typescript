import React, { ChangeEvent, ReactElement, useState } from "react"

interface Props {
    onClickAdd: (text: string) => void;
}

export default function Editor (props: Props) {
    const [text, setText] = useState("")

    const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value)
      }

      const onClickButton = () => {
        props.onClickAdd(text)
        setText("")
      }
    
    return (
        <div>
            <input value={text} onChange={onChangeInput}/>
            <button onClick={onClickButton}>추가</button>
        </div>
    )
}