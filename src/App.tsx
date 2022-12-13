import Board from "./components/Board";
import styled from "styled-components";

const Container = styled.div`
display: flex;
justify-content: center;
align-items: flex-start;
background-color: #E1F5FE;
max-width: 100%;
min-height: 100vh;
padding: 2em;
`;


function App() {
  return (
    <Container>
   <Board/>
    </Container>
  );
}

export default App;
