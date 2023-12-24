import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useTodo = () => {
  const axiosPublic = useAxios();

  const { data: todos = [], refetch } = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      try {
        const response = await axiosPublic.get("/api/v1/todo-list");
        return response.data;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
  });

  return [todos, refetch];
};

export default useTodo;
