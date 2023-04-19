import MainLayout from "@app/components/layouts/MainLayout";
import { Form, Radio, Button } from "antd";

const permission = [
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

export default function UpdateProfiles() {
  const handleSubmit = (values: string) => {
    console.log(values);
  };

  return (
    <MainLayout>
      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={handleSubmit}
        autoComplete="off"
      >
        <h1>Update</h1>
        <Form.Item
          label="permission"
          name="permission"
          rules={[
            {
              required: true,
              message: "Please input your permission!",
            },
          ]}
        >
          <Radio.Group options={permission} />
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
    </MainLayout>
  );
}
