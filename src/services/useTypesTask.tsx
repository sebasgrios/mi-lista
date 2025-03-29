import { setTypes } from "@/lib/features/type-slice";
import { useAppDispatch } from "@/lib/hooks";
import { useEffect } from "react";

export const useTypesTask = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetch(`${process.env.API_URL}/task/status/types`)
      .then((response) => response.json())
      .then((data) => dispatch(setTypes(data)))
      .catch((error) => console.error("Error fetching task types:", error));
  }, [dispatch]);
};