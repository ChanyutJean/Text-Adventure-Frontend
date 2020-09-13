import React, {useEffect, useRef} from 'react'

function Input(props) {
    const inputEnd = useRef("input")

    const scrollToBottom = () => {
        inputEnd.current.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(scrollToBottom, [props.input]);

    return (
        <div className="right">
            {props.input}
            <div ref={inputEnd} />
        </div>
    )
}

export default Input;