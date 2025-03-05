import { createSlice } from "@reduxjs/toolkit";
import { Ilist } from "@/types/List";
import { ITask } from "@/interfaces/Task";

const initialState: Ilist = localStorage.getItem('tasks')
  ? { tasks: JSON.parse(localStorage.getItem('tasks') as string) }
  : {
    tasks: []
  };

const listSlice = createSlice({
  name: "list",
  initialState: initialState,
  reducers: {
    addTask: (state) => {
      const newState = {
        tasks: [
          ...state.tasks,
          {
            id: state.tasks.length,
            description: '',
            done: false
          }
        ]
      };

      localStorage.setItem('tasks', JSON.stringify(newState.tasks));

      return newState;
    },
    deleteTask: (state, actions) => {
      const newState = {
        tasks: [
          ...state.tasks.filter(({ id }: ITask) => id != actions.payload)
        ]
      };

      localStorage.setItem('tasks', JSON.stringify(newState.tasks));

      return newState;
    },
    changeTaskStatus: (state, actions) => {
      const newState = {
        tasks: [
          ...state.tasks.map((task: ITask) => {
            if (task.id === actions.payload) {
              task.done = !task.done;
            }
            return task;
          })
        ]
      };

      localStorage.setItem('tasks', JSON.stringify(newState.tasks));

      state = newState;
    },
    updateTaskDescription: (state, actions) => {
      const newState = {
        tasks: [
          ...state.tasks.map((task: ITask) => {
            if (task.id === actions.payload.id) {
              task.description = actions.payload.input;
            }
            return task;
          })
        ]
      };

      localStorage.setItem('tasks', JSON.stringify(newState.tasks));

      state = newState;
    }
  }
});

export const {
  addTask,
  deleteTask,
  changeTaskStatus,
  updateTaskDescription
} = listSlice.actions;

export default listSlice;