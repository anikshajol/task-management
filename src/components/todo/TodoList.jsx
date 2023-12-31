import { useEffect } from "react";
import useTodo from "../../hooks/useTodo";
import Moda from "../modal/Moda";

const TodoList = () => {
  const [todos, refetch] = useTodo();
  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <div>
      <div className="my-4">
        {todos.map((todo) => (
          <div key={todo._id} className="mb-4">
            <div className="form-control">
              <button
                className="btn"
                onClick={() => document.getElementById(todo._id).showModal()}
              >
                {todo.title}
              </button>

              <Moda todo={todo}></Moda>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
