"use client";

import { Checkbox, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { useAppDispatch } from "@/lib/hooks";
import { changeTaskStatus, deleteTask, updateTaskDescription } from "@/lib/features/listSlice";
import { useEffect, useState } from "react";

interface ITask {
  id: number;
  description: string;
  done: boolean;
}

const Task = ({ id, description, done }: ITask) => {
  const dispatch = useAppDispatch();

  const [input, setInput] = useState(description);

  useEffect(() => {
    // TOD@ Meter timeout
    console.log('useEffect');

    dispatch(updateTaskDescription({ id, input }));
  }, [dispatch, id, input]);

  return (
    <div className="flex justify-between items-center hover:bg-gray-50 rounded-lg">
      <div className="flex-1 flex justify-start items-center gap-2">
        <Checkbox
          checked={done}
          onClick={() => {
            dispatch(changeTaskStatus(id));
          }}
        />
        {done
          ? <p className="line-through">{description}</p>
          : <input
            className="w-full bg-transparent focus:outline-0"
            autoFocus={description.length === 0}
            value={input}
            onChange={event => {
              setInput(event.target.value);
            }}
          />
        }
      </div>
      <div className="flex justify-end items-center gap-2">
        <IconButton
          aria-label="Eliminar"
          onClick={() => {
            dispatch(deleteTask(id));
          }}
        >
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Task;