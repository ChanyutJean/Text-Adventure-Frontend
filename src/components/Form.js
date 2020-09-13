import React from 'react'
import axios from 'axios'

function Form(props) {

    const handleChange = (event) => {
        props.setForm(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const newInput = props.input === "No inputs yet!" ? props.form : props.input + "\n" + props.form
        props.setInput(newInput)
        props.setForm("")
        axios.post('http://localhost:8080', newInput)
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