import { useState } from "react";
import { IColumn } from "types";
import { CardModal, Column, Title } from "components";
import { INITIAL_COLUMNS } from "constants/mock";
import { useAppDispatch, useAppSelector } from "hooks";
import { deleteCard } from "redux/ducks/Card";
import { Col, Row, Space } from "antd";

export const Board: React.FC = () => {
  const [isModalActive, setIsModalActive] = useState(false);
  const [cardId, setCardId] = useState("");
  const [columns] = useState<IColumn[]>(INITIAL_COLUMNS);

  const dispatch = useAppDispatch();

  const cards = useAppSelector((state) => state.cards.list);

  const activeCardModal = (isActive: boolean) => {
    setIsModalActive(isActive);
  };

  const openModalCard = (id: string) => {
    setCardId(id);
    setIsModalActive(true);
  };

  const removeCardFromPopup = (id: string) => {
    dispatch(deleteCard({ id }));
    setIsModalActive(false);
  };

  return (
    <Row justify="center" gutter={[{ xs: 24, sm: 45, md: 20, lg: 50 }, 20]}>
      <CardModal
        removeCard={removeCardFromPopup}
        active={isModalActive}
        setActive={activeCardModal}
        cardId={cardId}
      />
      {columns.map((column) => (
        <Col sm={12} md={8} lg={6} key={column.id}>
          <Space>
            <Space direction="vertical">
              <Title titleValue={column.title} name={column.id} />
              <Column
                items={cards.filter((card) => card.columnId === column.id)}
                openModalCard={openModalCard}
                columnId={column.id}
              />
            </Space>
          </Space>
        </Col>
      ))}
    </Row>
  );
};
