// JSL03 - JavaScript Task Board Application

// ---------------------------
// Initial sample tasks array
// ---------------------------
// Start with 3 sample tasks already on the board
// Each task is an object with properties: id, title, description, and status
// This array will store all tasks and can be expanded by adding new tasks
let tasks = [
  {
    id: 1, // Unique identifier for this task
    title: "Launch Epic Career", // Short name for the task
    description: "Create a killer Resume", // Detailed explanation of what needs to be done
    status: "todo", // Current state: can be "todo", "doing", or "done"
  },
  {
    id: 2, // Second task with id 2
    title: "Master JavaScript",
    description: "Get comfortable with the fundamentals",
    status: "doing", // This task is currently in progress
  },
  {
    id: 3, // Third task with id 3
    title: "Contribute to Open Source Projects",
    description: "Gain practical experience and collaborate with others",
    status: "done", // This task has been completed
  },
];

// ---------------------------
// Track last used task id
// ---------------------------
// Keep track of the highest ID number used so far
// This ensures each new task gets a unique ID number
// We start with 3 because we already have 3 tasks (ids 1, 2, 3)
let lastId = tasks.length; // Start with 3 because there are 3 initial tasks

// ---------------------------
// Allow user to add up to 3 new tasks
// ---------------------------
// This loop runs exactly 3 times (taskIndex goes from 0 to 2)
// It allows the user to add up to 3 additional tasks to the existing board
for (let taskIndex = 0; taskIndex < 3; taskIndex++) {
  // taskIndex keeps track of how many new tasks are being added
  // taskIndex = 0 means first new task, taskIndex = 1 means second, etc.

  // Prompt user for task details using browser popup dialogs
  // Each prompt() function shows a dialog box and waits for user input
  let title = prompt("Enter task title:");
  let description = prompt("Enter task description:");
  let status = prompt("Enter task status (todo, doing, done):").toLowerCase();

  // Validation loop: keep asking until user enters a valid status
  // This while loop continues as long as the status is NOT one of the three valid options
  while (status !== "todo" && status !== "doing" && status !== "done") {
    // Show error message to user if they entered an invalid status
    alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
    // Ask again for a valid status
    status = prompt("Enter task status (todo, doing, done):").toLowerCase();
  }

  // Increment lastId for each new task
  // This ensures each new task gets a unique ID number
  lastId++;

  // Create a new task object
  // This object has the same structure as the initial tasks
  let task = {
    id: lastId, // Use the incremented ID
    title: title, // User's input for task name
    description: description, // User's input for task details
    status: status, // User's validated status choice
  };

  // Add the new task to the tasks array
  // push() method adds the new task object to the end of the array
  tasks.push(task);

  // Check if this is the last task (when taskIndex equals 2)
  // Show alert after the 3rd and final task is added
  if (taskIndex === 2) {
    alert(
      "There are enough tasks on your board, please check them in the console"
    );
  }
}

// ---------------------------
// Function to log all tasks
// ---------------------------
// This function displays all tasks in the browser's console
// It helps users see everything that's currently on their task board
function logAllTasks() {
  // console.log() prints information to the browser's developer console
  // This shows the complete tasks array with all task objects
  console.log("All Tasks:", tasks);
}

// Call the function to log all tasks
// This runs the function immediately so users can see all tasks right away
logAllTasks();

// ---------------------------
// Function to get completed tasks
// ---------------------------
// This function finds and displays only the tasks that have been finished
// It filters the tasks array and returns only the tasks with status "done"
// It also logs the completed tasks to the console with a clear label
function getCompletedTasks() {
  // Use filter to create a new array with only completed tasks
  // filter() method goes through each task and tests a condition
  // It keeps only the tasks where the condition returns true
  const completedTasks = tasks.filter(function (task) {
    // This function runs for each task in the array
    // It returns true if the task's status equals "done"
    // Only tasks that return true will be included in the new array
    return task.status === "done";
  });

  // Log the completed tasks to the console with a clearer header
  // This makes it easy to identify completed tasks in the console output
  console.log("----- Completed Tasks -----");
  console.log(completedTasks); // Display the filtered array of completed tasks
}

// Call the function so the user can immediately see completed tasks after the script runs
// This executes the function right away to show results in the console
getCompletedTasks();
