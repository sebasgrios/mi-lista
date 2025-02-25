import AddTaskButton from "@/components/add-task";
import Task from "@/components/task";
import { Divider } from "@mui/material";

const ListItems = [
  {
    id: 0,
    description: "Conseguir madera",
    done: true
  },
  {
    id: 1,
    description: "Conseguir piedra",
    done: false
  },
];

const List = () => {
  return (
    <div className="grid grid-cols-12 grid-rows-1 mt-8">
      <div className="col-start-4 col-span-6 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          {ListItems.map(({ id, description, done }, index) =>
            <Task
              key={index}
              id={id}
              description={description}
              done={done}
            />
          )}
        </div>
        {ListItems.length > 0 && (
          <Divider variant="middle" />
        )}
        <AddTaskButton />
      </div>
    </div>
  );
};

export default List;