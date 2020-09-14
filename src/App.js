import React, {useState} from 'react';
import './App.css';

import Header from './components/Header.js'
import Output from './components/Output.js'
import Input from './components/Input.js'
import Form from './components/Form.js'

function App() {

  const [input, setInput] = useState("!No inputs yet") // direction: rtl
  const [output, setOutput] = useState("Enter your name to start the game!")
  const [form, setForm] = useState("")

  return (
    <div className="App">
      <Header />
      <div className="board">
        <Output output={output} />
        <Input input={input} />
      </div>
      <Form form={form} setForm={setForm} input={input} setInput={setInput} setOutput={setOutput} />
    </div>
  )
}

export default App
