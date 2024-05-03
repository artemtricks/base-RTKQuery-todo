import { Button, List, Checkbox } from "antd";
import React from "react";
import { TodoTask } from "../types/types";
import axios from "axios";
import {
  useDeleteTodoMutation,
  useGetTodoQuery,
} from "../services/TodoServices";
type Props = {
  tasks: TodoTask[];
};

const Tasks = (props: Props) => {
  // const [items, setItems] = React.useState<null | TodoTask[]>(null);

  // const fetchTodos = async () => {
  //   try {
  //     const response = await axios<React.SetStateAction<TodoTask[] | null>>(
  //       "https://efccf8c1b1d51061.mokky.dev/todos"
  //     );

  //     setItems(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const deleteTodo = React.useCallback(
  //   (id: number) => {
  //     try {
  //       axios.delete(`https://efccf8c1b1d51061.mokky.dev/todos/${id}`);
  //       setItems((prev) => prev?.filter((item) => item.id !== id));
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   },
  //   [setItems]
  // );

  // React.useEffect(() => {
  //   fetchTodos();
  // }, []);
  // const { tasks } = props;
  // const todosItems = !!items && items.length > 0 ? items : [];

  const { isLoading, data } = useGetTodoQuery(null);
  const [deleteTodo] = useDeleteTodoMutation();

  const todosItems: TodoTask[] | [] = !!data && data.length > 0 ? data : [];

  return (
    <List
      itemLayout="horizontal"
      dataSource={todosItems}
      loading={isLoading}
      renderItem={(item) => (
        <List.Item key={item.id}>
          <Checkbox style={{ marginRight: 10 }} />
          <List.Item.Meta title={item.title} description={item.description} />
          <Button style={{ marginRight: 10 }}>Редактировать</Button>
          <Button onClick={() => deleteTodo(item.id)}>Удалить</Button>
        </List.Item>
      )}
    />
  );
};

export default Tasks;
