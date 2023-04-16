
import { useState } from 'react'
import { Inicio } from './components/Inicio/Inicio'
import  {BlackContainer, Container} from './components/styles'
import { Create } from './components/Create/Create'
import { Grupo } from './components/Grupo/Grupo'

function App() {

  const [create, setCreate] = useState(false)

  const handleValueChange = (newValue: boolean) =>  {
    setCreate(newValue)
  }

  const handleSaveGroup = (newValue: boolean) =>  {
    setCreate(newValue)
  }


  return (
    <Container>
      {/* {!create &&
        <Inicio onCreate={handleValueChange} />
      }
      {create && 
        <Create onCreate={handleSaveGroup}/>
      } */}

      {!create && 
        <Grupo />
      }
    </Container>
  )
}

export default App
