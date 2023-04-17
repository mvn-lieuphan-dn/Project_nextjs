// import MainLayout from "@app/components/layouts/MainLayout";
import { Users } from "@app/model/Users.model";
import { Form, Radio, Input, Button } from "antd";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "fb/clientApp";
import BlankLayout from "@layouts/BlankLayout";
import { addData } from "@fb/connectFb";

const position = [
  {
    id: 1,
    value: "Admin",
    label: "Admin",
  },
  {
    id: 2,
    value: "User",
    label: "User",
  },
];

export default function SignupPage(): JSX.Element {
  const handleSubmit = (values: Users) => {
    if (typeof window !== "undefined") {
      createUserWithEmailAndPassword(auth, values.username, values.password)
        .then((userCredential) => {
          console.log(userCredential);

          // Signed in
          addData(values, "Account", userCredential.user.uid);

          // ...
        })
        .catch((error) => {
          const errorCode = error;
          const errorMessage = error.message;
          console.log("errorCode", errorCode);
          console.log("errorMessage", errorMessage);
          // ..
        });
    }
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
        <h1>Signup</h1>
        <Form.Item
          label="username"
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
          label="position"
          name="position"
          rules={[
            {
              required: true,
              message: "Please input your position!",
            },
          ]}
        >
          <Radio.Group options={position} />
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
