import { ChangeEvent, useEffect, useState } from "react";
import { BlackContainer, BoxHeader, InputBox } from "../styles";
import { ConfirmButton } from "../styles";
import { Box } from "../styles";
import { Container, Header } from "../styles";
import { CreateButton, InputHeader, InputUserBox, ModalInputUser, PlusButton, UserGroup } from "./styles";
import '../../types/user'
import { User } from "../../types/user";


export const Grupo = () => {

    const [modalInput, setModalInput] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [users, setUsers] = useState<User[]>([])

    // useEffect(()=>{
    //     if(users){
    //         addUser()
    //     }
    // }, [users])

    const handleAddUser = () => {
        setModalInput(true);
    }
    const handleSaveUser = () =>{
        if (name && email) {
            const newUser: User = {
              name: name,
              email: email,
            };
            setUsers([...users, newUser]);
            setEmail('');
            setName('');
            setModalInput(false);
          }
    }

    const addUser = () =>{
        console.log(users)
    }


    const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

   
    return (
        <Container>
            <Header>Grupo de jovens</Header>
            <Box style={{position: 'relative', marginBottom: '50px'}}>
                <BoxHeader>Adicionar participante</BoxHeader>
                <PlusButton onClick={handleAddUser}>+</PlusButton>
            </Box>
            <Box>
                {users.map((elem, index)=>(
                    <UserGroup key={index}>{elem.name}</UserGroup>
                ))}
                
                
            </Box>
            <ConfirmButton style={{position: "fixed", bottom: '40px', left:0}}></ConfirmButton>
            <ModalInputUser style={!modalInput ? {display: 'none'} : {display: 'flex'}}>
                <Box style={{marginBottom: '150px'}}>
                    <InputHeader>Nome:</InputHeader>
                    <InputUserBox type="text" value={name} onChange={handleChangeName} />
                    <InputHeader>Email:</InputHeader>
                    <InputUserBox type="email" value={email} onChange={handleChangeEmail} />
                    <CreateButton onClick={handleSaveUser}>ok</CreateButton>
                </Box>
            </ModalInputUser>
        </Container>
    );
}