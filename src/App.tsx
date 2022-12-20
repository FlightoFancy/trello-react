import { useState } from "react";

import { Board, Header, UserModal } from "components";
import styled from "styled-components";

function App() {
  const [name, setName] = useState("");

  const showName = (name: string) => {
    setName(name);
  };

  return (
    <Container>
      <UserModal showName={showName} />
      <Header userName={name} />
      <Board />
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #e1f5fe;
  max-width: 100%;
  min-height: 100vh;
  padding: 2em;
`;
