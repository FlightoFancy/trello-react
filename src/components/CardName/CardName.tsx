import { Input, Form } from "antd";
import { useAppDispatch, useAppSelector } from "hooks";
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

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const newTitle = data.cardNameEdit;
    const id = cardId;
    dispatch(editCardName({ newTitle, id }));
    setIsEdit(false);
    console.log(data);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  // const onSetFieldValue = () => {
  //   form.setFieldValue("cardName", findCardTitle(cardId));
  // };
  // const handleBlur: React.FocusEventHandler<HTMLInputElement> = () => {
  //   if (cardTitle) {
  //     const newTitle = cardTitle;
  //     const id = cardId;F
  //     dispatch(editCardName({ newTitle, id }));
  //   }
  //   setIsEdit(false);
  // };

  // const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
  //   if (e.key === "Enter") {
  //     if (cardTitle) {
  //       const newTitle = cardTitle;
  //       const id = cardId;
  //       dispatch(editCardName({ newTitle, id }));
  //     }
  //     setIsEdit(false);
  //   }
  // };

  const editTitle = () => {
    setIsEdit(true);
    // onSetFieldValue();
  };

  return (
    <Root>
      <span>Название:</span>
      {isEdit ? (
        <Form
          onFinish={handleSubmit(onSubmit)}
          onFinishFailed={onFinishFailed}
          name="EditCardName"
          form={form}
          initialValues={{ remember: true }}
        >
          <Controller
            name="cardNameEdit"
            control={control}
            render={({ field }) => (
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Введите название карточки!",
                  },
                ]}
              >
                <Input {...field} />
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
