"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setList } from "@/lib/features/list-slice";
import { ITask } from "@/interfaces/task";
import Task from "@/components/task";
import { Divider } from "@mui/material";
import AddTaskButton from "@/components/add-task";

const ListPage = () => {
  const dispatch = useAppDispatch();
  const list = useAppSelector(state => state.list.tasks);

  useEffect(() => {
    const tasks = localStorage.getItem('tasks');
    if (!tasks) {
      localStorage.setItem('tasks', JSON.stringify([]));
    } else {
      dispatch(setList(tasks));
    }
  }, [dispatch]);

  return (
    <div className="grid grid-cols-12 grid-rows-1 mt-8">
      <div className="col-start-4 col-span-6 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          {list.map(({ id, description, done }: ITask) =>
            <Task
              key={id}
              id={id}
              description={description}
              done={done}
            />
          )}
        </div>
        {list.length > 0 && (
          <Divider variant="middle" />
        )}
        <AddTaskButton />
      </div>
    </div>
  );
};

export default ListPage;