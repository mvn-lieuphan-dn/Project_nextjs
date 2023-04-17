import useAuth from "@app/hooks/useAuth";
import { Form, Input, Button } from "antd";
import { Users } from "../../model/Users.model";
import BlankLayout from "@app/components/layouts/BlankLayout";

export default function LoginPage(): JSX.Element {
  const { login } = useAuth();

  const handleSubmit = (values: Users) => {
    !!values && login(values);
  };

  return (
    <BlankLayout>
      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={handleSubmit}
        autoComplete="off"
      >
        <h1>Login</h1>
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </BlankLayout>
  );
}
