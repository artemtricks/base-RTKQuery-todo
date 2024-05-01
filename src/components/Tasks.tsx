import { Button, List, Checkbox } from "antd";
import React from "react";
import { TodoTask } from "../types/types";

type Props = {
  tasks: TodoTask[];
};

const Tasks = (props: Props) => {
  const { tasks } = props;
  return (
    <List
      itemLayout="horizontal"
      dataSource={tasks}
      renderItem={(item) => (
        <List.Item key={item.id}>
          <Checkbox style={{ marginRight: 10 }} />
          <List.Item.Meta title={item.title} description={item.description} />
          <Button style={{ marginRight: 10 }}>Редактировать</Button>
          <Button>Удалить</Button>
        </List.Item>
      )}
    />
  );
};

export default Tasks;
