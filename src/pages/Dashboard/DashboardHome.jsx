import { useState } from "react";
import { useForm } from "react-hook-form";

const DashboardHome = () => {
  const [taskOpen, setTaskOpen] = useState(false);
  const handleOpenTaskForm = () => {
    setTaskOpen(!taskOpen);
  };
  //   const [value, onChange] = useState(null)(new Date());

  const {
    register,
    handleSubmit,
    // watch,
    // formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    reset();
  };

  return (
    <div>
      <h2>dash</h2>

      <div>
        <button onClick={handleOpenTaskForm}>
          {!taskOpen ? "+" : "-"} Add Task
        </button>

        <div>
          {taskOpen && (
            <form action="" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
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
                  cols="20"
                  rows="10"
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
                </div>

                <input
                  type="submit"
                  value="Add Task"
                  className="btn bg-[#800080]"
                />
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
