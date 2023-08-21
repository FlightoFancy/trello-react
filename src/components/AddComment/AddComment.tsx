import { Button, Form } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useAppDispatch, useAppSelector } from "hooks";
import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { createComment } from "redux/ducks/Comment";
import styled from "styled-components";

interface Props {
  cardId: string;
}
type FieldType = {
  cardComments?: string;
};

interface IFormInput {
  cardComments: string;
}

export const AddComment: React.FC<Props> = ({ cardId }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      cardComments: "",
    },
  });
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const userName = useAppSelector((state) => state.user.user.name);

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    onReset();
    const commentTitle = data.cardComments;
    dispatch(createComment({ commentTitle, userName, cardId }));
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <Root>
      <Form
        onFinish={handleSubmit(onSubmit)}
        onFinishFailed={onFinishFailed}
        form={form}
        name="cardComments"
        initialValues={{ remember: true }}
      >
        <Controller
          name="cardComments"
          control={control}
          render={({ field }) => (
            <Form.Item<FieldType>
              name="cardComments"
              rules={[
                {
                  required: true,
                  message: "Напишите комментарий!",
                },
              ]}
            >
              <TextArea
                placeholder="Напишите комментарий..."
                rows={3}
                {...field}
              />
            </Form.Item>
          )}
        />
        <Button type="primary" htmlType="submit">
          Написать
        </Button>
      </Form>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`;
