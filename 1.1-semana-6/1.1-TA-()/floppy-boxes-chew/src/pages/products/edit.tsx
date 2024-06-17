import { Edit, useForm, useSelect } from "@refinedev/antd";
import MDEditor from "@uiw/react-md-editor";
import { Form, Input, Select } from "antd";

export const ProductEdit = () => {
  const { formProps, saveButtonProps, queryResult, formLoading } = useForm({});

  const blogPostsData = queryResult?.data?.data;

  const { selectProps: categorySelectProps } = useSelect({
    resource: "categories",
    defaultValue: blogPostsData?.category?.id,
    queryOptions: {
      enabled: !!blogPostsData?.category?.id,
    },
  });

  return (
    <Edit saveButtonProps={saveButtonProps} isLoading={formLoading}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label={"Name"}
          name={["name"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Description"}
          name="description"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <MDEditor data-color-mode="light" />
        </Form.Item>
        <Form.Item  
          label={"Price"}
          name="price"
          rules={[
            {
              required: true,
            },
          ]}

          >
            <Input type="number"/>
          </Form.Item>


          <Form.Item  
          label={"Material"}
          name="material"
          rules={[
            {
              required: true,
            },
          ]}

          >
            <Input />
          </Form.Item>

        <Form.Item
          label={"Category"}
          name={["category", "id"]}
          initialValue={formProps?.initialValues?.category?.id}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...categorySelectProps} />
        </Form.Item>

      </Form>
    </Edit>
  );
};
