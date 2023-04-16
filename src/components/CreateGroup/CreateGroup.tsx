import { ChangeEvent, useState } from "react";
import { BlackContainer, Box, BoxHeader, ConfirmButton, ContainerButton, Header, InputBox } from "../styles";



type Props = {
    onCreate: (value: boolean) => void
}
export const Create = ({onCreate}: Props) => {

    const [nameGroup, setNameGroup] = useState('')
    const handleCreateGroup = () => {
        if(nameGroup){
            onCreate(false)
        }
        
    }
    const handleSaveGroup = (e: ChangeEvent<HTMLInputElement>) => {
        setNameGroup(e.target.value)
    }

    return (

        <BlackContainer>
            <Header>
                Amigo Secreto
            </Header>
            <Box>
                <BoxHeader>Criar Grupo</BoxHeader>
                <InputBox value={nameGroup} onChange={handleSaveGroup} />
                <ContainerButton style={{justifyContent: "flex-end"}}>
                    <ConfirmButton onClick={handleCreateGroup}>ok</ConfirmButton>
                </ContainerButton>

            </Box>
            
        </BlackContainer>
    );
}