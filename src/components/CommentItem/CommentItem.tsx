import styled from "styled-components";
import { COLORS } from "styles";
import { IComment } from "types";
import { Button } from "ui";

interface Props extends IComment {
  removeComment: (id: string) => void;
}

export const CommentItem: React.FC<Props> = ({
  id,
  comment,
  removeComment,
}) => {
  return (
    <Root>
      <span>{comment}</span>
      <Button onClick={() => removeComment(id)} variant="close">
        &#10006;
      </Button>
    </Root>
  );
};

const Root = styled.div`
  border: 1px solid ${COLORS.lightgrey};
  background-color: ${COLORS.white};
  padding: 5px;
  margin: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
