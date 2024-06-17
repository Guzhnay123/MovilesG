import React from 'react';
import {
  DeleteButton,
  EditButton,
  List,
  ShowButton,
  useTable,
} from "@refinedev/antd";
import type { BaseRecord } from "@refinedev/core";
import { Space, Table } from "antd";

// Modelo de datos de empleado
type Employee = {
  id: number;
  name: string;
  email: string;
  position: string;
  department: string;
  salary: number;
};

export const EmployeeList = () => {
  const { tableProps } = useTable({
    syncWithLocation: true,
  });

  // Datos simulados de empleados
  const employees: Employee[] = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      position: "Software Developer",
      department: "Engineering",
      salary: 50000,
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      position: "Marketing Manager",
      department: "Marketing",
      salary: 60000,
    },
    // Agrega más empleados según sea necesario
  ];

  return (
    <List>
      <Table {...tableProps} rowKey="id" dataSource={employees}>
        <Table.Column dataIndex="id" title={"ID"} />
        <Table.Column dataIndex="name" title={"Name"} />
        <Table.Column dataIndex="email" title={"Email"} />
        <Table.Column dataIndex="position" title={"Position"} />
        <Table.Column dataIndex="department" title={"Department"} />
        <Table.Column dataIndex="salary" title={"Salary"} />
        <Table.Column
          title={"Actions"}
          dataIndex="actions"
          render={(_, record: BaseRecord) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record.id} />
              <ShowButton hideText size="small" recordItemId={record.id} />
              <DeleteButton hideText size="small" recordItemId={record.id} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};

