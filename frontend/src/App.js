import Global from "./styles/Global";
import styled from "styled-components";
import {toast, ToastContainer} from "react-toastify";
import Form from "./components/Form";
import Grid from "./components/Grid";


const Container = styled.div `
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h2``;


function App() {
  return (
    <>
      <Container>
        <Title>USUARIOS</Title>
        <Form/>
        <Grid/>
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT}/>
      <Global/>
    </>

  );
}

export default App;
