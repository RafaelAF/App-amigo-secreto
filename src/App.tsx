
import { useState } from 'react'
import { Inicio } from './components/Inicio/Inicio'
import  {BlackContainer, Container} from './components/styles'
import { Create } from './components/CreateGroup/CreateGroup'
import { Grupo } from './components/Grupo/Grupo'

function App() {

  const [create, setCreate] = useState(false)
  const [use, setUse] = useState(false)

  const handleValueChange = (newValue: boolean) =>  {
    setCreate(newValue)
  }

  const handleSaveGroup = (newValue: boolean) =>  {
    setCreate(newValue)
  }

  const handleInputEntry = (newValue: boolean) =>{
    setUse(newValue)
  }


  return (
    <Container>
      {!create && !use &&
        <Inicio onCreate={handleValueChange} onEntry={handleInputEntry} />
      }
      {create && !use &&
        <Create onCreate={handleSaveGroup}/>
      }

      {!create && use &&
        <Grupo />
      }
    </Container>
  )
}

export default App
