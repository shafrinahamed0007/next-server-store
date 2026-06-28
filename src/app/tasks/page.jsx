import AddTask from "@/components/AddTask";
import TasksCard from "@/components/TasksCard";
import { createATask } from "@/lib/actions";
import { getTasks } from "@/lib/task";

const TasksPage = async () => {
  const tasks = await getTasks();
  return (
    <div className="container mx-auto">
      <h2>Tasks: {tasks.length}</h2>
      <AddTask createATask = {createATask} />
      <div className="my-5  grid md:grid-cols-2 lg:grid-cols-3 gap-3 pt-8 ">
        {tasks.map((task) => (
          <TasksCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TasksPage;
