import TasksCard from "@/components/TasksCard";
import { getTasks } from "@/lib/task";

const TasksPage = async () => {
  const tasks = await getTasks();
  return (
    <div>
      <h2>Tasks: {tasks.length}</h2>
      <div className="my-5  grid md:grid-cols-2 lg:grid-cols-3 gap-3 ">
        {tasks.map((task) => (
          <TasksCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TasksPage;
