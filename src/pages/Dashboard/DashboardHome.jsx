import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Task from "./task";
import useAxios from "../../hooks/useAxios";
import toast from "react-hot-toast";
import useTodo from "../../hooks/useTodo";

const DashboardHome = () => {
  const [taskOpen, setTaskOpen] = useState(false);
  const [, refetch] = useTodo();
  // const [task, setTask] = useState([]);

  const handleOpenTaskForm = () => {
    setTaskOpen(!taskOpen);
  };
  //   const [value, onChange] = useState(null)(new Date());

  const axiosPublic = useAxios();

  const {
    register,
    handleSubmit,
    // watch,
    // formState: { errors },
    control,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);

    const res = await axiosPublic.post("/api/v1/create-todo", data);

    console.log(res.data);
    if (res.data.insertedId) {
      toast.success("Todo created");
    }
    refetch();

    reset();
  };

  return (
    <div>
      <div>
        <button onClick={handleOpenTaskForm}>
          {!taskOpen ? "+" : "-"} Add Task
        </button>

        <div>
          {taskOpen && (
            <form
              className="border border-[#80008015] rounded-md mb-5 p-3"
              action=""
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="form-control space-y-2">
                <input
                  type="text"
                  placeholder="Task Name"
                  name="title"
                  {...register("title", { required: true })}
                  className="input input-bordered"
                  required
                />

                <textarea
                  name="description"
                  id=""
                  cols="10"
                  rows="5"
                  {...register("description", { required: true })}
                  className="border outline-none px-4"
                  placeholder="Description"
                ></textarea>

                <div className="flex justify-center">
                  <div>
                    <input
                      className=""
                      {...register("date", { required: true })}
                      type="date"
                      name="date"
                      id=""
                    />
                  </div>
                  <div>
                    <input
                      type="time"
                      {...register("time")}
                      name="time"
                      id=""
                    />
                  </div>
                  <div>
                    <Controller
                      name="priority"
                      control={control}
                      defaultValue=""
                      rules={{ required: true }}
                      render={({ field }) => (
                        <select
                          className="select select-bordered w-full max-w-xs"
                          {...field}
                        >
                          <option disabled value="">
                            Priority Status
                          </option>
                          <option value="High">High</option>
                          <option value="Moderate">Moderate</option>
                          <option value="Low">Low</option>
                        </select>
                      )}
                    />
                  </div>
                </div>

                <input
                  type="submit"
                  value="Add Task"
                  className="btn bg-[#800080]"
                />
              </div>
            </form>
          )}

          <Task></Task>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
