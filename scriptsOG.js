// JSL03

// ---------------------------
// Initial sample tasks array
// ---------------------------
// Start with 3 sample tasks already on the board
let tasks = [
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
    description: "Gain practical experience and collaborate with others",
    status: "done",
  },
];

// ---------------------------
// Track last used task id
// ---------------------------
let lastId = tasks.length; // Start with 3 because there are 3 initial tasks

// ---------------------------
// Allow user to add up to 3 new tasks
// ---------------------------
for (let i = 0; i < 3; i++) {
  // Prompt user for task details
  let title = prompt("Enter task title:");
  let description = prompt("Enter task description:");
  let status = prompt("Enter task status (todo, doing, done):").toLowerCase();

  // Increment lastId for each new task
  lastId++;

  // Create a new task object
  let task = {
    id: lastId,
    title: title,
    description: description,
    status: status,
  };

  // Add the new task to the tasks array
  tasks.push(task);
}

// ---------------------------
// Log all tasks to the console
// ---------------------------
console.log("All Tasks:", tasks);
