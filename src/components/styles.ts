import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    background-color: #625FE7;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  `;
  export const BlackContainer = styled.div`
  width: 100vw;
  background-color: rgb(43,42,108);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
export const Header = styled.h1`
    width: 100%;
    margin: 0 auto;
    padding: 40px;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-size: 2rem;
`;

export const BoxHeader = styled.h2`
    width: 100%;
    margin: 0 auto;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-size: 1.7rem;

`;

export const Box = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: 25px;
  max-width: 320px;
  margin: 20px auto; 
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-shadow: 2px 10px 10px rgba(0, 0, 0, 0.5);
`;

export const FloatButton = styled.button`
  width: 66px;
  height: 66px;
  border-radius: 50%;
  position: fixed;
  bottom: 40px;
  right: 30px;
  border: 1px solid #fff;
  background-color: #90B9E9;
  box-shadow: 2px 10px 10px rgba(0, 0, 0, 0.5);
  font-size: 3rem;
`;
export const ConfirmButton = styled.button`
  width: 66px;
  height: 66px;
  border-radius: 50%;
  border: 1px solid #fff;
  background-color: #90B9E9;
  box-shadow: 2px 10px 10px rgba(0, 0, 0, 0.5);
  font-size: 3rem;
  margin: 0 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ContainerButton = styled.div`
  width: 100%;
  display: flex;
`;


export const EnterButton = styled.button`
  padding: 15px 25px;
  font-size: 2rem;
  border-radius: 37px;
  width: 221px;
  height: 69px;
  margin: 40px auto 0 auto;
  border: 1px solid #fff;
  background-color: #90B9E9;
  box-shadow: 2px 10px 10px rgba(0, 0, 0, 0.5);
`;

export const InputBox = styled.input`
  margin: 40px auto;
  width: 70%;
  font-size: 2rem;
  padding: 5px;
  font-family: 'Roboto', sans-serif;
  text-align: center;
`;