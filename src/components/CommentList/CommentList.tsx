import { CommentItem } from "components";
import { IComment } from "types";

interface Props {
  comments: IComment[];
  cardId: string;
  removeComment: (id: string) => void;
}
export const CommentList: React.FC<Props> = ({
  comments,
  cardId,
  removeComment,
}) => {
  return (
    <>
      {comments
        .filter((item) => item.cardId === cardId)
        .map((comment) => (
          <CommentItem
            key={comment.id}
            removeComment={removeComment}
            {...comment}
          />
        ))}
    </>
  );
};
