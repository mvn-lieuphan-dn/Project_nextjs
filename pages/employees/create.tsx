import { createEmployees } from "@app/api/profile";
import MainLayout from "@app/components/layouts/MainLayout";
import { Employees } from "@app/model/Employees.model";
import { useMutation } from "@tanstack/react-query";
import { Form, Input, Button } from "antd";

export default function Create() {
  const { mutate: mutateCreate } = useMutation({
    mutationFn: (newEmployee: Employees) => createEmployees(newEmployee),
  });

  const handleSubmit = (values: Employees) => mutateCreate(values);

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
        <h1>Create Employees</h1>
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your name!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        {/* <Form.Item
          label="Salary"
          name="Salary"
          rules={[
            {
              required: true,
              message: "Please input your Salary!",
            },
          ]}
        >
          <Input />
        </Form.Item> */}
        <Form.Item
          label="Job"
          name="job"
          rules={[
            {
              required: true,
              message: "Please input your age!",
            },
          ]}
        >
          <Input />
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
