import { useRef, useState } from "react";
import { AddComment, CardName, CommentList } from "components";
import { useAppDispatch, useAppSelector } from "hooks";
import { addDescription } from "redux/ducks/Card";
import { Button, Form, InputRef, Space } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

interface Props {
  cardId: string;
}

interface IFormInput {
  cardDescription: string;
}

export const CardInfo: React.FC<Props> = ({ cardId }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      cardDescription: "",
    },
  });
  const [form] = Form.useForm();
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useAppDispatch();
  const cards = useAppSelector((state) => state.cards.list);
  const textAreaRef = useRef<InputRef>(null);

  const cancelEditText = () => {
    setIsEdit(false);
  };

  const handleEditDescription = () => {
    setIsEdit(true);
    onSetFieldValue();
    setTimeout(() => {
      textAreaRef.current!.focus({
        cursor: "end",
      });
    });
  };

  const findCardDesc = (id: string) => {
    let card = cards.find((card) => card.id === id);
    if (card) {
      return card.description;
    }
  };

  const onSubmit: SubmitHandler<IFormInput> = () => {
    const description = form.getFieldValue("cardDescription");
    const id = cardId;
    if (description) {
      dispatch(addDescription({ description, id }));
      setIsEdit(false);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const onSetFieldValue = () => {
    form.setFieldValue("cardDescription", findCardDesc(cardId));
  };

  const findCardTitle = (id: string) => {
    let card = cards.find((card) => card.id === id);
    if (card) {
      return card.title;
    }
  };

  return (
    <>
      <CardName cardId={cardId} findCardTitle={findCardTitle} />
      <span>Описание:</span>
      {isEdit ? (
        <Form
          onFinish={handleSubmit(onSubmit)}
          onFinishFailed={onFinishFailed}
          name="cardDescription"
          form={form}
          initialValues={{ remember: true }}
        >
          <Space direction="vertical" style={{ display: "flex" }}>
            <Controller
              name="cardDescription"
              control={control}
              render={({ field }) => (
                <Form.Item
                  name="cardDescription"
                  rules={[
                    {
                      required: true,
                      message: "Введите описание карточки!",
                    },
                  ]}
                >
                  <TextArea
                    placeholder="Добавить более подробное описание..."
                    rows={5}
                    {...field}
                    ref={textAreaRef}
                  />
                </Form.Item>
              )}
            />
            <Space>
              <Button type="primary" htmlType="submit">
                Сохранить
              </Button>
              <Button onClick={cancelEditText}>Отменить</Button>
            </Space>
          </Space>
        </Form>
      ) : (
        <div>
          <p>{findCardDesc(cardId)}</p>
          <Button type="primary" onClick={handleEditDescription}>
            Редактировать
          </Button>
        </div>
      )}
      <AddComment cardId={cardId} />
      <CommentList cardId={cardId} />
    </>
  );
};
