import styled from "styled-components";

export const PlusButton = styled.button`
  width: 66px;
  height: 66px;
  border-radius: 50%;
  position: absolute;
  right: 0;
  bottom: -40px;
  border: 1px solid #fff;
  background-color: #90B9E9;
  box-shadow: 2px 10px 10px rgba(0, 0, 0, 0.5);
  font-size: 3rem;
`;
export const UserGroup = styled.div`
  padding: 5px 15px;
  font-size: 1.5rem;
  border-radius: 37px;
  text-align: center;
  width: 80%;
  height: 39px;
  margin-bottom: 15px;
  /* border: 1px solid #fff; */
  background-color: #90B9E9;
  /* box-shadow: 2px 10px 10px rgba(0, 0, 0, 0.5); */
`;

export const ModalInputUser = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: rgba(43,42,108, 0.5);
  align-items: center;
  padding-top: 50px;
`;

export const InputHeader = styled.h1`
    width: 100%;
    margin: 0 auto;
    padding: 10px 40px;
    text-align: start;
    font-family: 'Roboto', sans-serif;
    font-size: 1.8rem;
`;
export const InputUserBox = styled.input`
  /* margin: 40px auto; */
  width: 70%;
  font-size: 1.8rem;
  padding: 5px;
  font-family: 'Roboto', sans-serif;
  text-align: center;
`;

export const CreateButton = styled.button`
  width: 66px;
  height: 66px;
  border-radius: 50%;
  border: 1px solid #fff;
  background-color: #90B9E9;
  box-shadow: 2px 10px 10px rgba(0, 0, 0, 0.5);
  font-size: 3rem;
  margin: 15px 40px;
  align-self: flex-end;
`;