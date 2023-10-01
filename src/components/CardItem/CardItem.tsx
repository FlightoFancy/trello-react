import { useAppDispatch, useAppSelector } from "hooks";
import { deleteCard } from "redux/ducks/Card";
import { ICard } from "types";
import { Card, Button, Row, Col } from "antd";
import { CommentOutlined, DeleteOutlined } from "@ant-design/icons";

interface Props extends ICard {
  openModalCard: (id: string) => void;
}

export const CardItem: React.FC<Props> = ({ id, title, openModalCard }) => {
  const dispatch = useAppDispatch();
  const comments = useAppSelector((state) => state.comments.list);

  const findCountComments = (id: string) => {
    let filteredComments = comments.filter((comment) => comment.cardId === id);
    if (filteredComments) {
      return filteredComments.length;
    }
  };
  return (
    <Row align="middle">
      <Col span={19}>
        <Card
          onClick={() => openModalCard(id)}
          size="small"
          title={title}
          hoverable={true}
          style={{ maxWidth: 200 }}
        >
          <span>
            <CommentOutlined rev={undefined} /> {findCountComments(id)}
          </span>
        </Card>
      </Col>
      <Col span={4} offset={1}>
        <Button danger onClick={() => dispatch(deleteCard({ id }))}>
          <DeleteOutlined rev={undefined} />
        </Button>
      </Col>
    </Row>
  );
};
