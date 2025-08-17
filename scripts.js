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
for (let taskIndex = 0; taskIndex < 3; taskIndex++) {
  // taskIndex keeps track of how many new tasks are being added
  // Prompt user for task details
  let title = prompt("Enter task title:");
  let description = prompt("Enter task description:");
  let status = prompt("Enter task status (todo, doing, done):").toLowerCase();

  while (status !== "todo" && status !== "doing" && status !== "done") {
    alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
    status = prompt("Enter task status (todo, doing, done):").toLowerCase();
  }

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
  if (taskIndex === 2) {
    alert(
      "There are enough tasks on your board, please check them in the console"
    );
  }
}

// ---------------------------
// Function to log all tasks
// ---------------------------
// This function logs all tasks to the console with a clear label.
function logAllTasks() {
  console.log("All Tasks:", tasks);
}

// Call the function to log all tasks
logAllTasks();

// ---------------------------
// Function to get completed tasks
// ---------------------------
// This function filters the tasks array and returns only the tasks with status "done".
// It also logs the completed tasks to the console with a clear label.
function getCompletedTasks() {
  // Use filter to create a new array with only completed tasks
  const completedTasks = tasks.filter(function (task) {
    return task.status === "done";
  });
  // Log the completed tasks to the console with a clearer header
  console.log("----- Completed Tasks -----");
  console.log(completedTasks);
}

// Call the function so the user can immediately see completed tasks after the script runs
getCompletedTasks();
