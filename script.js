
// Time
function updateTime() {
    var ntptime = new Date().toLocaleString();
    var timeT = document.querySelector("#timetext");
    timeT.innerHTML = ntptime;
}

updateTime();
setInterval(updateTime, 1000);

var welcomeScreen = document.querySelector("#welcome")

// Opens/closes
var welcomeScreenClose = document.querySelector("#welcomeclose")

var welcomeScreenOpen = document.querySelector("#welcomeopen")

// Open/close event listenrs
welcomeScreenClose.addEventListener("click", function() {
  closeWindow(welcomeScreen);
});

welcomeScreenOpen.addEventListener("click", function() {
  openWindow(welcomeScreen);
});


// Open Window
function openWindow(element) {
  element.style.display = "block"
}

// Close window
function closeWindow(element) {
    element.style.display = "none"
}


// Drag
dragElement(document.getElementById("welcome"));

function dragElement(element) {

  var initialX = 0;
  var initialY = 0;
  var currentX = 0;
  var currentY = 0;

  if (document.getElementById(element.id + "header")) {

    document.getElementById(element.id + "header").onmousedown = startDragging;
  } else {

    // Drag the window by holding down anywhere
    element.onmousedown = startDragging;
  }

  // Event listeners
  function startDragging(e) {
    e = e || window.event;
    e.preventDefault();
    initialX = e.clientX;
    initialY = e.clientY;

    document.onmouseup = stopDragging;
    document.onmousemove = dragElement;
  }

  function dragElement(e) {
    e = e || window.event;
    e.preventDefault();
    // New cursor possiton
    currentX = initialX - e.clientX;
    currentY = initialY - e.clientY;
    initialX = e.clientX;
    initialY = e.clientY;
    // Step 11: Update the element's new position by modifying its `top` and `left` CSS properties.
    element.style.top = (element.offsetTop - currentY) + "px";
    element.style.left = (element.offsetLeft - currentX) + "px";
  }

  // Step 12: Define the `stopDragging` function to stop tracking mouse movement by removing the event listeners.
  function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}