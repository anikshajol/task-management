import { useEffect } from "react";

import Moda from "../modal/Moda";
import useOnGoing from "../../hooks/useOnGoing";

const OnGoingList = () => {
  const [onGoing, refetch] = useOnGoing();
  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <div>
      <div className="my-4">
        {onGoing.map((todo) => (
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

export default OnGoingList;
