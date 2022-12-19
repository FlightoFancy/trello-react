import styled from "styled-components";
import { Column, Title } from "components";

export const Board: React.FC = () => {
  return (
    <BoardContainer>
      <BoardItem>
        <Title titleValue="Todo" name="one" />
        <Column />
      </BoardItem>
      <BoardItem>
        <Title titleValue="In progress" name="two" />
        <Column />
      </BoardItem>
      <BoardItem>
        <Title titleValue="Testing" name="three" />
        <Column />
      </BoardItem>
      <BoardItem>
        <Title titleValue="Done" name="four" />
        <Column />
      </BoardItem>
    </BoardContainer>
  );
};

const BoardContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: flex-start;
`;
const BoardItem = styled.div`
  width: 24%;
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  background-color: #90a4ae;
`;
