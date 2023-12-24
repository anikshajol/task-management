import useTodo from "../../hooks/useTodo";
import Moda from "../modal/Moda";

const TodoList = () => {
  const [todos] = useTodo();

  return (
    <div>
      <div className="my-4">
        {todos.map((todo) => (
          <div key={todo._id} className="mb-4">
            <div className="form-control">
              <label className="cursor-pointer flex items-center gap-4">
                <input type="checkbox" className="checkbox-warning checkbox" />
                <button
                  className="btn"
                  onClick={() => document.getElementById(todo._id).showModal()}
                >
                  {todo.title}
                </button>
              </label>
              <Moda todo={todo}></Moda>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
