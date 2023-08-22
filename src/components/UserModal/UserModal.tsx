import { useAppDispatch } from "hooks";
import { useState } from "react";
import { createUser } from "redux/ducks/User";
import { Modal, Button, Form, Input } from "antd";
import { useForm, Controller, SubmitHandler } from "react-hook-form";

type FieldType = {
  username?: string;
};

interface IFormInput {
  userName: string;
}

export const UserModal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const { control, handleSubmit } = useForm({
    defaultValues: {
      userName: "",
    },
  });

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const userName = data.userName;
    const isAuth = true;
    dispatch(createUser({ userName, isAuth }));
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal
        title="Авторизация"
        open={isModalOpen}
        closeIcon={false}
        footer={null}
      >
        <Form
          name="userForm"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          onFinish={handleSubmit(onSubmit)}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Controller
            name="userName"
            control={control}
            render={({ field }) => (
              <Form.Item<FieldType>
                label="Имя пользователя:"
                name="username"
                rules={[
                  { required: true, message: "Пожалуйста, введите ваше имя!" },
                ]}
              >
                <Input {...field} />
              </Form.Item>
            )}
          />
          <Form.Item
            wrapperCol={{ md: { offset: 4, span: 16 }, xs: { span: 24 } }}
          >
            <Button type="primary" htmlType="submit" block>
              Сохранить
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
