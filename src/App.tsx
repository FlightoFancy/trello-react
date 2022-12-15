import { Board } from "components";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <Board />
    </Container>
  );
}

export default App;

const Container = styled.div`
display: flex;
justify-content: center;
align-items: flex-start;
background-color: #E1F5FE;
max-width: 100%;
min-height: 100vh;
padding: 2em;
`;