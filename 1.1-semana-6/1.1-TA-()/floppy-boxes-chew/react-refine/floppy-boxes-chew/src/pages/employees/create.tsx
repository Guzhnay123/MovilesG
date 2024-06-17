import { Create, useForm } from "@refinedev/antd";
import { Form, Input, Button } from "antd";

// Modelo de datos de empleado
type Employee = {
  id: number;
  name: string;
  email: string;
  position: string;
  department: string;
  salary: number;
};

export const EmployeeCreate = () => {
  const { formProps, saveButtonProps } = useForm<Employee>({});

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Please enter employee name' }]}>
          <Input />
        </Form.Item>
        <Form.Item name="email" label="Email" rules={[{ required: true, message: 'Please enter employee email' }, { type: 'email', message: 'Please enter a valid email address' }]}>
          <Input />
        </Form.Item>
        <Form.Item name="position" label="Position" rules={[{ required: true, message: 'Please enter employee position' }]}>
          <Input />
        </Form.Item>
        <Form.Item name="department" label="Department" rules={[{ required: true, message: 'Please enter employee department' }]}>
          <Input />
        </Form.Item>
        <Form.Item name="salary" label="Salary" rules={[{ required: true, message: 'Please enter employee salary' }, { type: 'number', message: 'Please enter a valid number' }]}>
          <Input type="number" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>
    </Create>
  );
};
