// Import required modules
const fs = require('fs');

// Function to be executed periodically
function myTask(cb) {
  // Perform your task here
//   console.log('Running my task...');
    cb();
  // Example: Write to a file
  fs.appendFile('dispose_log.txt', 'Task executed at ' + new Date() + '\n', (err) => {
    if (err) throw err;
    // console.log('Task logged to file');
  });
}


const executeDisposeScript = (cb, interval=5000) => {
    console.log('dispose script initiated...');
    setInterval(() => myTask(cb), interval);
}

module.exports = executeDisposeScript;