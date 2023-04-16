import { ChangeEvent, useState } from 'react'
import  {Box, BoxHeader, EnterButton, FloatButton, Header, InputBox} from '../../components/styles'


type Props = {
    onCreate: (value: boolean) => void
}

export const Inicio = ({onCreate}: Props) => {

    const [groupName, setGroupName] = useState('')


    const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
        setGroupName(e.target.value)
    }

    const handleCheckName = () =>{
        if(groupName == 'Grupo de jovens'){
            console.log('entrei')
        }else{
            alert('Este Grupo não existe')
        }
    }
    const handleCreateGroup = () => {
        const confirmacao = confirm('Criando grupo')
        console.log(confirmacao)
        onCreate(confirmacao)
    }

    return(
        <>
            <Header>
                Amigo Secreto
            </Header>
            <Box>
                <BoxHeader>Nome do Grupo</BoxHeader>
                <InputBox value={groupName} onChange={handleChangeName} />
            </Box>
            <EnterButton onClick={handleCheckName}>
                Entrar
            </EnterButton>
            <FloatButton onClick={handleCreateGroup}>
                +
            </FloatButton>
        </>
    );
}