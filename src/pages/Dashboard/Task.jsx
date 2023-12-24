import { useEffect } from "react";
import TodoList from "../../components/todo/TodoList";
import Container from "../../components/ui/Container";
import useTodo from "../../hooks/useTodo";

const Task = () => {
  const [, refetch] = useTodo();
  useEffect(() => {
    refetch();
  }, [refetch]);
  return (
    <Container>
      <div className="grid grid-cols-3">
        {/* todo list section */}
        <section className="border  border-dashed border-purple-400 min-h-screen">
          <h2 className="text-5xl">To-do list</h2>
          <TodoList></TodoList>
        </section>

        {/* onGoing section */}
        <section className="border text-center border-dashed border-purple-400 min-h-screen">
          <h2 className="text-5xl">Ongoing</h2>
        </section>

        {/* complete section */}
        <section className="border text-center border-dashed border-purple-400 min-h-screen">
          <h2 className="text-5xl">Completed</h2>
        </section>
      </div>
    </Container>
  );
};

export default Task;
