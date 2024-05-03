import Layout from "antd/es/layout/layout";
import React from "react";
import { Button, Form, Input, DatePicker } from "antd";
import axios from "axios";
import { CreateTodo } from "../types/types";
import { useCreateTodoMutation } from "../services/TodoServices";

type Props = {};

const MainForm = () => {
  const [createTodo] = useCreateTodoMutation();
  const onFinish = (values: CreateTodo) => {
    //@ts-ignore
    createTodo({ ...values.task, complited: false });
  };

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  const validateMessages = {
    required: "${label} обязательный параметр!",
  };

  return (
    <Layout style={{ height: "100vh", padding: 20, marginTop: 40 }}>
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        style={{
          maxWidth: 600,
        }}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={["task", "title"]}
          label="Заголовок"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name={["task", "description"]}
          label="Описание"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            ...layout.wrapperCol,
            offset: 8,
          }}
        >
          <Button htmlType="submit">Добавить задачу</Button>
        </Form.Item>
      </Form>
    </Layout>
  );
};

export default MainForm;
