import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useOnGoing = () => {
  const axiosPublic = useAxios();

  const { data: onGoing = [], refetch } = useQuery({
    queryKey: ["onGoing"],
    queryFn: async () => {
      try {
        const response = await axiosPublic.get("/api/v1/todo-list/ongoing");
        return response.data;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
  });

  return [onGoing, refetch];
};

export default useOnGoing;
