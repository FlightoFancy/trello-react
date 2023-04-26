import { CommentItem } from "components";
import { useAppSelector } from "hooks";

interface Props {
  cardId: string;
}
export const CommentList: React.FC<Props> = ({ cardId }) => {
  const comments = useAppSelector((state) => state.comments.list);

  return (
    <>
      {comments
        .filter((comment) => comment.cardId === cardId)
        .map((comment) => (
          <CommentItem key={comment.id} {...comment} />
        ))}
    </>
  );
};
