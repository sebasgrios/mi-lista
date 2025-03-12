import { createSlice } from "@reduxjs/toolkit";
import { Ilist } from "@/types/list";
import { ITask } from "@/interfaces/task";

const initialState: Ilist = {
  tasks: []
};

const listSlice = createSlice({
  name: "list",
  initialState: initialState,
  reducers: {
    setList: (state, actions) => {
      const tasks = JSON.parse(actions.payload);

      return {
        ...state,
        tasks: [...tasks.filter(
          ({ description }: ITask) => description != ""
        )]
      };
    },
    addTask: (state) => {
      const newTasks = [
        ...state.tasks,
        {
          id: btoa(String(Math.random() * 1000)),
          description: "",
          done: false
        }
      ];

      localStorage.setItem('tasks', JSON.stringify(newTasks));

      return {
        ...state,
        tasks: newTasks
      };
    },
    modifyTask: (state, actions) => {
      const newTasks = [
        ...state.tasks.map((task: ITask) => {
          if (task.id === actions.payload.id) {
            return actions.payload;
          }
          return task;
        })
      ];

      localStorage.setItem('tasks', JSON.stringify(newTasks));

      return {
        ...state,
        tasks: newTasks
      };
    },
    deleteTask: (state, actions) => {
      const newTasks = [
        ...state.tasks.filter(({ id }: ITask) => id != actions.payload)
      ];

      localStorage.setItem('tasks', JSON.stringify(newTasks));

      return {
        ...state,
        tasks: newTasks
      };
    }
  }
});

export const {
  setList,
  addTask,
  deleteTask,
  modifyTask
} = listSlice.actions;

export default listSlice;