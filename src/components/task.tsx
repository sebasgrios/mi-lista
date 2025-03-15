"use client";

import { useEffect, useRef, useState } from "react";
import { useAppDispatch } from "@/lib/hooks";
import { modifyTask } from "@/lib/features/list-slice";
import { ITask } from "@/interfaces/task";
import Checkbox from "@/components/checkbox";
import TextField from "@/components/textfield";
import DeleteTaskButton from "@/components/delete-task";

const Task = ({ id, description, done }: ITask) => {
  const pageHasBeenRender = useRef(false);
  const dispatch = useAppDispatch();

  const [checkbox, setCheckbox] = useState(done);
  const [input, setInput] = useState(description);

  let timeout: NodeJS.Timeout;
  const interval = 500;

  useEffect(() => {
    if (pageHasBeenRender.current) {
      timeout = setTimeout(saveHandler, interval);
    }

    pageHasBeenRender.current = true;

    return () => clearTimeout(timeout);
  }, [checkbox, input]);

  const saveHandler = () => {
    const payload = {
      id,
      description: input,
      done: checkbox
    };

    dispatch(modifyTask(payload));
  };

  return (
    <div className="flex justify-between items-center hover:bg-gray-50 dark:hover:bg-[#3d3d3d] rounded-lg">
      <div className="flex-1 flex justify-start items-center gap-2">
        <Checkbox
          checked={checkbox}
          onClick={() => {
            clearTimeout(timeout);
            setCheckbox(!checkbox);
          }}
        />
        <TextField
          description={description}
          input={input}
          disable={checkbox}
          onChange={event => {
            clearTimeout(timeout);
            setInput(event.target.value);
          }}
          onKeyDown={event => {
            if (event.key === "Enter") {
              (event.target as HTMLInputElement).blur();

              clearTimeout(timeout);
              saveHandler();
            }
          }}
        />
      </div>
      <DeleteTaskButton id={id} />
    </div>
  );
};

export default Task;