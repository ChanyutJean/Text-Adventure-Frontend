import React, {useEffect, useRef} from 'react'

function Output(props) {
    const outputEnd = useRef("output")

    const scrollToBottom = () => {
        outputEnd.current.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(scrollToBottom, [props.output]);

    return (
        <div className="left">
            {props.output}
            <div ref={outputEnd} />
        </div>
    )
}

export default Output