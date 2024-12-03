// Variables for stopwatch time tracking
let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

// Function to update the time display
function updateTimeDisplay() {
    const timeDisplay = document.getElementById('time-display');
    // Format the time as HH:MM:SS
    timeDisplay.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}

// Function to format time to always show two digits
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// Function to start or stop the stopwatch
function startStop() {
    if (isRunning) {
        // Stop the stopwatch
        clearInterval(timer);
        document.getElementById('startStopButton').textContent = 'Start';
    } else {
        // Start the stopwatch
        timer = setInterval(() => {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
                if (minutes === 60) {
                    minutes = 0;
                    hours++;
                }
            }
            updateTimeDisplay();
        }, 1000); // Update every second (1000ms)
        document.getElementById('startStopButton').textContent = 'Stop';
    }
    isRunning = !isRunning; // Toggle isRunning state
}

// Function to reset the stopwatch
function reset() {
    clearInterval(timer); // Stop the stopwatch if running
    isRunning = false; // Reset running state
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateTimeDisplay(); // Reset the display to 00:00:00
    document.getElementById('startStopButton').textContent = 'Start'; // Reset button text
}
