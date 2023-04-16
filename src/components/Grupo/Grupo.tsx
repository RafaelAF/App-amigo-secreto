import { ChangeEvent, useState } from "react";
import {  BoxHeader } from "../styles";
import { ConfirmButton } from "../styles";
import { Box } from "../styles";
import { Container, Header } from "../styles";
import { CreateButton, InputHeader, InputUserBox, ModalInputUser, PlusButton, UserGroup } from "./Group";
import '../../types/user'
import { User } from "../../types/user";

import dados from '../../assets/dados.svg'




export const Grupo = () => {

    const [modalInput, setModalInput] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const [atualName, setAtualName] = useState('')
    const [atualEmail, setAtualEmail] = useState('')

    const [users, setUsers] = useState<User[]>([])
    const [editUser, setEditUser] = useState(false)

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
    
    const handleEditUser = () => {
        setEditUser(true)
        
    }
    const handleClose = () => {
        setEditUser(false)
    }
    const handleSort = () => {
        alert('Sorteando')
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
                    <UserGroup onClick={handleEditUser} data-name={elem.name} data-id={elem.id} data-email={elem.email} key={index}>{elem.name}</UserGroup>
                ))}
                
                
            </Box>
            <ConfirmButton onClick={handleSort} style={{position: "fixed", bottom: '40px', left:0}}><img src={dados} /></ConfirmButton>
            <ModalInputUser style={!modalInput ? {display: 'none'} : {display: 'flex'}}>
                <Box style={{marginBottom: '150px'}}>
                    <InputHeader>Nome:</InputHeader>
                    <InputUserBox type="text" value={name} onChange={handleChangeName} />
                    <InputHeader>Email:</InputHeader>
                    <InputUserBox type="email" value={email} onChange={handleChangeEmail} />
                    <CreateButton onClick={handleSaveUser}>ok</CreateButton>
                </Box>
            </ModalInputUser>
            <ModalInputUser style={!editUser ? {display: 'none'} : {display: 'flex'}}>
                <Box style={{marginBottom: '150px'}}>
                    <InputHeader>Nome:</InputHeader>
                    <InputUserBox type="text" value={atualName} onChange={handleChangeName} />
                    <InputHeader>Email:</InputHeader>
                    <InputUserBox type="email" value={atualEmail} onChange={handleChangeEmail} />
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <CreateButton onClick={handleClose}>X</CreateButton>
                        <CreateButton onClick={handleClose}>V</CreateButton>
                    </div>
                </Box>
            </ModalInputUser>
        </Container>
    );
}