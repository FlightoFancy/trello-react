import { Input, Form } from "antd";
import { useAppDispatch } from "hooks";
import { useState } from "react";
import { editCardName } from "redux/ducks/Card";
import styled from "styled-components";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

interface Props {
  cardId: string;
  findCardTitle: (id: string) => string | undefined;
}

interface IFormInput {
  cardNameEdit: string;
}

export const CardName: React.FC<Props> = ({ cardId, findCardTitle }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      cardNameEdit: "",
    },
  });
  const [form] = Form.useForm();
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<IFormInput> = () => {
    const newTitle = form.getFieldValue("cardNameEdit");
    const id = cardId;
    if (newTitle) {
      dispatch(editCardName({ newTitle, id }));
      setIsEdit(false);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const editTitle = () => {
    setIsEdit(true);
    form.setFieldValue("cardNameEdit", findCardTitle(cardId));
  };
  return (
    <Root>
      <span>Название:</span>
      {isEdit ? (
        <Form
          onFinish={handleSubmit(onSubmit)}
          onFinishFailed={onFinishFailed}
          name="CardName"
          form={form}
          initialValues={{ remember: true }}
          onBlur={handleSubmit(onSubmit)}
        >
          <Controller
            name="cardNameEdit"
            control={control}
            render={({ field }) => (
              <Form.Item
                name="cardNameEdit"
                rules={[
                  {
                    required: true,
                    message: "Введите название карточки!",
                  },
                ]}
              >
                <Input {...field} autoFocus />
              </Form.Item>
            )}
          />
        </Form>
      ) : (
        <>
          <span onClick={editTitle}>{findCardTitle(cardId)}</span>
        </>
      )}
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`;
