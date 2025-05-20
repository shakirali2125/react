import { useState } from 'react'
import Sample from './components/Sample'

function App() {
  const [name, setName] = useState("")
  console.log(name);
  const myname="shakir"

  return (
    
    <>
     <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    <h1>hello</h1>
    <Sample myname={myname} />
    </>
   

   

  )
}

export default App