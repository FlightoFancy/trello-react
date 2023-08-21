import { Button, Space } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useAppDispatch, useAppSelector } from "hooks";
import { useState } from "react";
import { deleteComment, editComment } from "redux/ducks/Comment";
import styled from "styled-components";
import { COLORS } from "styles";
import { IComment } from "types";

interface Props extends IComment {}

export const CommentItem: React.FC<Props> = ({ id, comment }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [commentValue, setCommentValue] = useState(comment);
  const dispatch = useAppDispatch();
  const userName = useAppSelector((state) => state.user.user.name);

  const handleEditComment = () => {
    setIsEdit(!isEdit);
    if (commentValue) {
      const newTitle = commentValue;
      dispatch(editComment({ newTitle, id }));
    }
  };

  return (
    <Root>
      <Space direction="vertical">
        <div>Автор: {userName}</div>
        {isEdit ? (
          <>
            <TextArea
              value={commentValue}
              rows={2}
              onChange={(e) => setCommentValue(e.target.value)}
              autoFocus
            />
          </>
        ) : (
          <Div>
            <span>{comment}</span>
          </Div>
        )}
        <div>
          <Space>
            <Button onClick={() => handleEditComment()} type="primary">
              изменить
            </Button>
            <Button onClick={() => dispatch(deleteComment(id))}>удалить</Button>
          </Space>
        </div>
      </Space>
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
