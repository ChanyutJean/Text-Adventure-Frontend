import React, {useState} from 'react'
import axios from 'axios'

function Form(props) {

    const [submitCount, setSubmitCount] = useState(0)

    const handleChange = (event) => {
        props.setForm(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (!props.form.match(/^[A-Za-z0-9]+$/)) {
            alert("Input must only be letters and numbers and must not be empty!")
            return
        }
        if (submitCount > 20000) {
            alert("You are in this game for too long! Refresh to restart.")
            return
        }
        const newInput = (props.input === "!No inputs yet") ? props.form : props.input + "\n" + props.form
        props.setInput(newInput)
        props.setForm("")
        setSubmitCount((prevState) => {return prevState + 1})
        axios.post('https://text-adventure-backend.herokuapp.com/', newInput)
            .then(response => props.setOutput(response.data));
    }
    
    return (
        <form className="form" onSubmit={handleSubmit}>
            <input 
                className="input"
                type="text" 
                placeholder="Input your text here..."
                value={props.form} 
                onChange={handleChange}
            />
            <input className="submit" type="submit" />
        </form>
    )
    
}

export default Form