// JSL03

// Create an empty array to hold all tasks
let tasks = [];

// Example of adding one task object into the array
let task1 = {
  id: 1, // unique id
  title: "Sample Task", // short name of the task
  description: "This is a sample description", // more details
  status: "todo", // current state of the task
};

// Add the task object into the array
tasks.push(task1);

// Log the array to the console so we can see the structure
console.log("All Tasks:", tasks);

const initialTasks = [
  {
    id: 1,
    title: "Launch Epic Career",
    description: "Create a killer Resume",
    status: "todo",
  },
  {
    id: 2,
    title: "Master JavaScript",
    description: "Get comfortable with the fundamentals",
    status: "doing",
  },
  {
    id: 3,
    title: "Contribute to Open Source Projects",
    description:
      "Gain practical experience and collaborate with others in the software development community",
    status: "done",
  },
];
