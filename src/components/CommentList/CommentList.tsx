import { CommentItem } from "components";
import { IComment } from "types";

interface Props {
  comments: IComment[];
  cardId: string;
  removeComment: (id: string) => void;
  userName: string;
  editComment: (commentNewValue: string, id: string) => void;
}
export const CommentList: React.FC<Props> = ({
  comments,
  cardId,
  removeComment,
  userName,
  editComment
}) => {
  return (
    <>
      {comments
        .filter((comment) => comment.cardId === cardId)
        .map((comment) => (
          <CommentItem
            key={comment.id}
            removeComment={removeComment}
            userName={userName}
            editComment={editComment}
            {...comment}
          />
        ))}
    </>
  );
};
