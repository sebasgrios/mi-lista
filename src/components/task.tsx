"use client";

import { Checkbox, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

interface ITask {
  id: number;
  description: string;
  done: boolean;
}

const Task = ({ id, description, done }: ITask) => {
  return (
    <div className="flex justify-between items-center hover:bg-gray-50 rounded-lg">
      <div className="flex-1 flex justify-start items-center gap-2">
        <Checkbox
          checked={done}
          onClick={() => {
            console.log(`Cambiar estado de la tarea ${id}`);
          }}
        />
        {done
          ? <p className="line-through">{description}</p>
          : <input
            className="w-full bg-transparent focus:outline-0"
            autoFocus={description.length === 0}
            value={description}
            onChange={event => {
              console.log(`Cambiar descripción de la tarea ${id} a: ${event.target.value}`);
            }}
          />
        }
      </div>
      <div className="flex justify-end items-center gap-2">
        <IconButton
          aria-label="Eliminar"
          onClick={() => {
            console.log(`Eliminar la tarea ${id}`);
          }}
        >
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Task;