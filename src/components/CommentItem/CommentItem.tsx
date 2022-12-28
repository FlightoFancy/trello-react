import { useState } from "react";
import styled from "styled-components";
import { COLORS } from "styles";
import { IComment } from "types";
import { Button, Textarea } from "ui";

interface Props extends IComment {
  removeComment: (id: string) => void;
  userName: string;
  editComment: (commentNewValue: string, id: string) => void;
}

export const CommentItem: React.FC<Props> = ({
  id,
  comment,
  removeComment,
  userName,
  editComment,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [commentValue, setCommentValue] = useState("");

  const handleEditComment = () => {
    setIsEdit(!isEdit);
    editComment(commentValue, id);
  };

  return (
    <Root>
      <div>Автор: {userName}</div>
      <Div>
        {isEdit ? (
          <>
            <Textarea
              value={commentValue}
              rows={2}
              onChange={(e) => setCommentValue(e.target.value)}
              autoFocus
            />
          </>
        ) : (
          <span>{comment}</span>
        )}
      </Div>
      <div>
        <Button onClick={() => handleEditComment()} variant="small">
          изменить
        </Button>
        <Button onClick={() => removeComment(id)} variant="small">
          удалить
        </Button>
      </div>
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
`;
