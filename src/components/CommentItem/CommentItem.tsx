import styled from "styled-components";
import { COLORS } from "styles";
import { IComment } from "types";
import { Button } from "ui";

interface Props extends IComment {
  removeComment: (id: string) => void;
  userName: string;
}

export const CommentItem: React.FC<Props> = ({
  id,
  comment,
  removeComment,
  userName,
}) => {
  return (
    <Root>
      <div>Автор: {userName}</div>
      <Div>
        <span>{comment}</span>
        <Button onClick={() => removeComment(id)} variant="close">
          &#10006;
        </Button>
      </Div>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

const Div = styled.div`
  border: 1px solid ${COLORS.lightgrey};
  background-color: ${COLORS.white};
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
