import { useState } from "react"
import Input from "./components/input"

function App() {
  const [password, setPassword] = useState("")
  const [copyText, setCopyText] = useState("Copiar")
  const [passwordSize, setPasswordSize] = useState(12)
  const [showInput, setShowInput] = useState(false)

  const passwordInput = showInput ? passwordSize : 8

  function generate() {
    const characters = "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?"
    let newPassword = ''
    for (let index = 0; index < passwordInput; index++) {
      const position = Math.floor(Math.random() * characters.length)
      newPassword += characters[position]
    }

    setPassword(newPassword)
    setCopyText("Copiar")
  }

  function copyToClipboard() {
    if(copyText === 'Copiar') {
      window.navigator.clipboard.writeText(password)
      setCopyText("Copiado")
    } else {
      setCopyText("Copiar")
    }
    
  }

  return (
    <div className="app">
      <h1>Gerador de Senhas</h1>
      <div>
        <label htmlFor="showInput">Customizar tamanho:</label>
        <input 
          type="checkbox" 
          id="showInput"
          value={showInput}
          onChange={() => setShowInput(currentState => !currentState)}
        />
      </div>
      {showInput && (
        <div>
          <label htmlFor="passwordSize">Tamanho da Senha: </label>
          <Input passwordSize={passwordSize} setPasswordSize={setPasswordSize} showInput={showInput}/>
        </div>
      ) }
      <button onClick={generate}>Gerar senha de {passwordInput} caracteres!</button>
      <button onClick={copyToClipboard}>{copyText}</button>
      <div>{password}</div>
    </div>
  )
}

export default App
