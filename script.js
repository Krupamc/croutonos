

// Window Taps
var biggestIndex = 1;
var topBar = document.querySelector("#top")
    // Tap listener
function addWindowTapHandling(element) {
  element.addEventListener("mousedown", () =>
    handleWindowTap(element)
  )
}
    //Move to top
function handleWindowTap(element) {
  biggestIndex++; 
  element.style.zIndex = biggestIndex;
}

    //move to top on open
function openWindow(element) {
  element.style.display = "block";
  biggestIndex++;
  element.style.zIndex = biggestIndex;
}
    // Windows YAY
function initializeWindow(elementName) {
  var screen = document.querySelector("#" + elementName)
  addWindowTapHandling(screen)
  //makeClosable(elementName)
  dragElement(screen)
}


// Time
function updateTime() {
    var ntptime = new Date().toLocaleString();
    var timeT = document.querySelector("#timetext");
    timeT.innerHTML = ntptime;
}
updateTime();
setInterval(updateTime, 1000);

//Icons
var selectedIcon = undefined

    // Selected Icons
function selectIcon(element) {
    element.classList.add("selected")
    selectedIcon = element
}

function deselectIcon(element) {
  element.classList.remove("selected");
  selectedIcon = undefined
}

    // Handle the tap
function handleIconTap(element) {
  if (element.classList.contains("selected")) {
    deselectIcon(element)
    openWindow(window)
  } else {
    selectIcon(element)
  }
}

// Windows
var welcomeScreen = document.querySelector("#welcome")
var contactScreen = document.querySelector("#contact")

    // Opens/closes
var welcomeScreenClose = document.querySelector("#welcomeclose")
var contactScreenClose = document.querySelector("#contactclose")

var welcomeScreenOpen = document.querySelector("#welcomeopen")
var contactScreenOpen = document.querySelector("#contactopen")

// Top bar
initializeWindow("welcome");
initializeWindow("contact")


    // close event listenrs
welcomeScreenClose.addEventListener("click", function() {
  closeWindow(welcomeScreen);
});

contactScreenClose.addEventListener("click", function() {
  closeWindow(contactScreen);
});

    // Open event listenrs
welcomeScreenOpen.addEventListener("click", function() {
  openWindow(welcomeScreen);
});

contactScreenOpen.addEventListener("click", function() {
  openWindow(contactScreen);
});


    // Close window
function closeWindow(element) {
    element.style.display = "none"
}


// Drag
dragElement(document.getElementById("welcome"));
dragElement(document.getElementById("contact"));

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