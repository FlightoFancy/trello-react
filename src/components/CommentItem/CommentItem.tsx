import { useAppDispatch } from "hooks";
import { useState } from "react";
import { deleteComment, editComment } from "redux/ducks/Comment";
import styled from "styled-components";
import { COLORS } from "styles";
import { IComment } from "types";
import { Button, Textarea } from "ui";

interface Props extends IComment {
  userName: string;
}

export const CommentItem: React.FC<Props> = ({ id, comment, userName }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [commentValue, setCommentValue] = useState("");
  const dispatch = useAppDispatch();

  const handleEditComment = () => {
    setIsEdit(!isEdit);
    const newTitle = commentValue;
    dispatch(editComment({ newTitle, id }));
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
        <Button onClick={() => dispatch(deleteComment(id))} variant="small">
          удалить
        </Button>
      </div>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 20px 0;
`;

const Div = styled.div`
  border: 1px solid ${COLORS.lightgrey};
  background-color: ${COLORS.white};
  padding: 5px;
`;
