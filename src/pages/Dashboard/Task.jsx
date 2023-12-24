import { useEffect } from "react";

import Container from "../../components/ui/Container";

import GetTodo from "../../components/todo/GetTodo";
import useTodoOnly from "../../hooks/useTodoOnlyjsx";
import OnGoingList from "../../components/todo/OnGoingList";
import CompletedList from "../../components/todo/CompleteList";

const Task = () => {
  const [, refetch] = useTodoOnly();
  useEffect(() => {
    refetch();
  }, [refetch]);
  return (
    <Container>
      <div className="grid grid-cols-3">
        {/* todo list section */}
        <section className="border  border-dashed border-purple-400 min-h-screen">
          <h2 className="text-5xl">To-do list</h2>
          <GetTodo></GetTodo>
        </section>

        {/* onGoing section */}
        <section className="border text-center border-dashed border-purple-400 min-h-screen">
          <h2 className="text-5xl">Ongoing</h2>
          <OnGoingList></OnGoingList>
        </section>

        {/* complete section */}
        <section className="border text-center border-dashed border-purple-400 min-h-screen">
          <h2 className="text-5xl">Completed</h2>
          <CompletedList></CompletedList>
        </section>
      </div>
    </Container>
  );
};

export default Task;
