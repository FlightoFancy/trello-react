import { Button, Form, Space } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useAppDispatch } from "hooks";
import { useState } from "react";
import { createCard } from "redux/ducks/Card/cardSlice";
import { useForm, Controller, SubmitHandler } from "react-hook-form";

interface Props {
  columnId: string;
}

interface IFormInput {
  cardName: string;
}

export const AddCard: React.FC<Props> = ({ columnId }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      cardName: "",
    },
  });

  const [isAddCardFormVisible, setIsAddCardFormVisible] = useState(false);

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const cardTitle = data.cardName;
    dispatch(createCard({ cardTitle, columnId }));
    setIsAddCardFormVisible(false);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const openForm = () => {
    setIsAddCardFormVisible(true);
  };

  const closeForm = () => {
    setIsAddCardFormVisible(false);
  };

  return (
    <>
      {isAddCardFormVisible ? (
        <Form
          onFinish={handleSubmit(onSubmit)}
          onFinishFailed={onFinishFailed}
          name="addCardForm"
          initialValues={{ remember: true }}
        >
          <Controller
            name="cardName"
            control={control}
            render={({ field }) => (
              <Form.Item
                name="cardName"
                rules={[
                  {
                    required: true,
                    message: "Введите заголовок карточки!",
                  },
                ]}
              >
                <TextArea
                  placeholder="Введите заголовок карточки"
                  rows={3}
                  {...field}
                />
              </Form.Item>
            )}
          />
          <Space>
            <Button htmlType="submit" type="primary">
              Добавить карточку
            </Button>
            <Button onClick={closeForm}>&#10006;</Button>
          </Space>
        </Form>
      ) : (
        <Button type="primary" onClick={openForm}>
          + Добавить карточку
        </Button>
      )}
    </>
  );
};
