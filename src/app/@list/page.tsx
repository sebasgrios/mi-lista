"use client";

import { useAppSelector } from "@/lib/hooks";
import AddTaskButton from "@/components/add-task";
import Task from "@/components/task";
import { Divider } from "@mui/material";
import { useEffect } from "react";
import { ITask } from "@/interfaces/Task";

const ListPage = () => {
  const list = useAppSelector(state => state.list.tasks);

  useEffect(() => {
    if (!localStorage.getItem('tasks')) {
      localStorage.setItem('tasks', JSON.stringify([]));
    }
  }, []);

  return (
    <div className="grid grid-cols-12 grid-rows-1 mt-8">
      <div className="col-start-4 col-span-6 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          {list.map(({ id, description, done }: ITask, index: number) =>
            <Task
              key={index}
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