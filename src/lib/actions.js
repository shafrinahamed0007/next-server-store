import { postTask } from "./task";

export const createATask = async (formData) => {
  "use server";

  // const title = formData.get("title");
  // const description = formData.get("description");
  // const prority = formData.get("priority");
  // const status = formData.get("status");
  // const assignedTo = formData.get("assignedTo");

  // const newTaks = { title, description, prority, status, assignedTo };

  const newTask = Object.fromEntries(formData.entries());
  console.log("Addig a task with new tassk: ", newTask);

  await postTask(newTask);
};
