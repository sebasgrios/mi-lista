"use client";

import { useEffect, useState } from "react";
import { useAppDispatch } from "@/lib/hooks";
import { changeTaskStatus, deleteTask, updateTaskDescription } from "@/lib/features/listSlice";
import { ITask } from "@/interfaces/Task";
import { Checkbox, IconButton, TextField } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

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
          disableRipple
          onClick={() => {
            dispatch(changeTaskStatus(id));
          }}
          sx={{
            color: "gray",
            borderRadius: "0.5rem",
            "&:hover": {
              color: "black",
              backgroundColor: "transparent"
            },
            "&.Mui-checked": {
              color: "black"
            }
          }}
        />
        {done
          ? <p className="line-through">{description}</p>
          : <TextField
            className="w-full"
            variant="standard"
            autoFocus={description.length === 0}
            value={input}
            onChange={event => {
              setInput(event.target.value);
            }}
            sx={{
              ".MuiInput-underline:before": {
                borderBottom: "0px"
              },
              "&& .MuiInput-underline:hover:before": {
                borderBottom: "1px solid gray"
              },
              ".MuiInput-underline:after": {
                borderBottom: "2px solid black"
              }
            }}
          />
        }
      </div>
      <div className="flex justify-end items-center gap-2">
        <IconButton
          aria-label="Eliminar"
          disableRipple
          onClick={() => {
            dispatch(deleteTask(id));
          }}
          sx={{
            color: "gray",
            borderRadius: "0.5rem",
            "&:hover": {
              color: "black",
              backgroundColor: "transparent"
            }
          }}
        >
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Task;