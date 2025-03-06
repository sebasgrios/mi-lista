"use client";

import { useEffect, useRef, useState } from "react";
import { useAppDispatch } from "@/lib/hooks";
import { modifyTask } from "@/lib/features/listSlice";
import { ITask } from "@/interfaces/task";
import { Checkbox, TextField } from "@mui/material";
import DeleteTaskButton from "./delete-task";

const Task = ({ id, description, done }: ITask) => {
  const pageHasBeenRender = useRef(false);
  const dispatch = useAppDispatch();

  const [checkbox, setCheckbox] = useState(done);
  const [input, setInput] = useState(description);


  let timeout: NodeJS.Timeout;
  const interval = 500;

  const saveHandler = () => {
    const payload = {
      id,
      description: input,
      done: checkbox
    };

    dispatch(modifyTask(payload));
  };

  useEffect(() => {
    if (pageHasBeenRender.current) {
      timeout = setTimeout(saveHandler, interval);
    }

    pageHasBeenRender.current = true;

    return () => clearTimeout(timeout);
  }, [checkbox, input]);

  return (
    <div className="flex justify-between items-center hover:bg-gray-50 rounded-lg">
      <div className="flex-1 flex justify-start items-center gap-2">
        <Checkbox
          checked={checkbox}
          disableRipple
          onClick={() => {
            clearTimeout(timeout);
            setCheckbox(!checkbox);
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
        {checkbox
          ? <p className="line-through">{input}</p>
          : <TextField
            fullWidth
            variant="standard"
            autoFocus={description.length === 0}
            value={input}
            onChange={event => {
              clearTimeout(timeout);
              setInput(event.target.value);
            }}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                (event.target as HTMLInputElement).blur();

                clearTimeout(timeout);
                saveHandler();
              }
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
      <DeleteTaskButton id={id} />
    </div>
  );
};

export default Task;