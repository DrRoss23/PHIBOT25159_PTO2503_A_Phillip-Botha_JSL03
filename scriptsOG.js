// JSL03

// Ask the user for the title and description of task 1
const task1Title = prompt("Enter task 1 title:");
const task1Description = prompt("Enter task 1 description:");

// Ask for the status of task 1 and convert it to lowercase
let task1Status = prompt(
  "Enter task 1 status (todo, doing, done):"
).toLowerCase();

// Keep asking until the user enters a valid status for task 1
while (
  task1Status !== "todo" &&
  task1Status !== "doing" &&
  task1Status !== "done"
) {
  alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
  task1Status = prompt(
    "Enter task 1 status (todo, doing, done):"
  ).toLowerCase();
}

// Repeat the same steps for task 2
const task2Title = prompt("Enter task 2 title:");
const task2Description = prompt("Enter task 2 description:");
let task2Status = prompt(
  "Enter task 2 status (todo, doing, done):"
).toLowerCase();

while (
  task2Status !== "todo" &&
  task2Status !== "doing" &&
  task2Status !== "done"
) {
  alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
  task2Status = prompt(
    "Enter task 2 status (todo, doing, done):"
  ).toLowerCase();
}

// Check if task1 is done, and log it if so
if (task1Status === "done") {
  console.log("Title: " + task1Title + ", status: " + task1Status);
}

// Check if task2 is done, and log it if so
if (task2Status === "done") {
  console.log("Title: " + task2Title + ", status: " + task2Status);
}

// If neither task1 nor task2 is done, show a motivational message
if (task1Status !== "done" && task2Status !== "done") {
  console.log("No tasks completed, let's get to work!");

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

// Create an empty array to hold all tasks
let tasks = [];

// Use a loop to allow adding up to 3 tasks
for (let i = 0; i < 3; i++) {
  // Ask user for task details
  let title = prompt("Enter task title:");
  let description = prompt("Enter task description:");
  let status = prompt("Enter task status (todo, doing, done):").toLowerCase();

  // Create a task object with the details
  let task = {
    id: i + 1, // unique id, starts at 1
    title: title,
    description: description,
    status: status
  };

  // Add the task object to the array
  tasks.push(task);
}

// Log all tasks to the console
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
