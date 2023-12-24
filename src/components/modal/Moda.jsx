import { useForm } from "react-hook-form";
import useAxios from "../../hooks/useAxios";
import useTodo from "../../hooks/useTodo";
import { useEffect } from "react";

/* eslint-disable react/prop-types */
const Moda = ({ todo }) => {
  const [, refetch] = useTodo();
  const axiosPublic = useAxios();
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    refetch();
  }, [refetch]);

  // Watch the values of the checkboxes
  //   const checkedValues = watch(["complete", "ongoing"]);

  const onSubmit = async (data) => {
    try {
      console.log(data);
      const status = data.complete ? "complete" : "ongoing";

      console.log(status);

      await axiosPublic.put(`/api/v1/update-todo-status/${todo._id}`, {
        status,
      });

      refetch();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <dialog id={todo._id} className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">{todo.title}</h3>
          <p className="py-4">{todo.description}</p>

          <div className="space-y-3">
            <p>Date: {todo.due_date}</p>
            <p className="capitalize"> Priority: {todo.priority}</p>
          </div>

          {/* mark */}
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* mark */}
            <section className="flex gap-3 my-4">
              <div>
                <label className="cursor-pointer flex items-center gap-4">
                  <input
                    type="checkbox"
                    name="complete"
                    {...register("complete")}
                    className="checkbox-warning checkbox"
                  />{" "}
                  <p> Mark as completed</p>
                </label>
              </div>
              <div>
                <label className="cursor-pointer flex items-center gap-4">
                  <input
                    type="checkbox"
                    name="ongoing"
                    {...register("ongoing")}
                    className="checkbox-warning checkbox"
                  />{" "}
                  <p>Mark as Ongoing</p>
                </label>
              </div>
            </section>
            {/* Submit button */}
            <div className="flex justify-center">
              <button type="submit" className="btn">
                Save Changes
              </button>
            </div>
          </form>
          <div className="modal-action">
            <form action="" method="dialog">
              <button type="submit" className="btn">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Moda;
