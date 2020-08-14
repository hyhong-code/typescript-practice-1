import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((res) => {
  const todo = res.data as Todo;
  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;
  logTodo(id, title, completed);
});

const logTodo = (
  id: Todo["id"],
  title: Todo["title"],
  completed: Todo["completed"]
) => {
  console.log(`
    The Todo with ID: ${id}
    Has a title of: ${title}
    IS is completed? ${completed}
`);
};
