import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useCompletedList = () => {
  const axiosPublic = useAxios();

  const { data: complete = [], refetch } = useQuery({
    queryKey: ["complete"],
    queryFn: async () => {
      try {
        const response = await axiosPublic.get("/api/v1/todo-list/complete");
        return response.data;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
  });

  return [complete, refetch];
};

export default useCompletedList;
