import { CommentItem } from "components";
import { IComment } from "types";

interface Props {
  comments: IComment[];
  cardId: string;
  removeComment: (id: string) => void;
  userName: string;
}
export const CommentList: React.FC<Props> = ({
  comments,
  cardId,
  removeComment,
  userName,
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
            {...comment}
          />
        ))}
    </>
  );
};
