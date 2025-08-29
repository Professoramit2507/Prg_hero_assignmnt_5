1. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll
Ans :
getElementById("id")

Returns a single element with the given id.
Very fast because IDs are unique.


Example:

 const el = document.getElementById("myDiv");

getElementsByClassName("class")


Returns a live HTMLCollection of elements with that class.
You must loop through it to use elements.


Example:

 const items = document.getElementsByClassName("item");
querySelector("selector")


Returns the first element matching a CSS selector (id, class, tag, attribute, etc.).


Example:

 const el = document.querySelector(".container > p");
querySelectorAll("selector")


Returns a static NodeList of all elements matching the CSS selector.
Can be looped with forEach().


Example:

 const buttons = document.querySelectorAll("button.call-btn");



2. How do you create and insert a new element into the DOM?
Steps:
Create the element → document.createElement("tag")


Set content/attributes → element.innerText or element.setAttribute()


Insert into DOM → parent.appendChild(element) or parent.append()


Example:
const newDiv = document.createElement("div");
newDiv.innerText = "Hello, World!";
newDiv.className = "box";
document.body.appendChild(newDiv);


3. What is Event Bubbling and how does it work?
Event Bubbling means that when an event is triggered on an element, it first runs on that element, and then it propagates upward through its parent elements until it reaches the root (document).


Example: Clicking a button inside a <div> triggers:


Button’s click


Div’s click


Body’s click


Document’s click


<div id="parent">
  <button id="child">Click Me</button>
</div>

document.getElementById("parent").addEventListener("click", () => console.log("Parent"));
document.getElementById("child").addEventListener("click", () => console.log("Child"));

Clicking button logs:
Child
Parent


4. What is Event Delegation in JavaScript? Why is it useful?
Event Delegation is a pattern where you attach an event listener to a parent element, and handle events for its child elements using event.target.


Instead of adding separate listeners to each child, you just add one listener to the parent.


Example:
document.getElementById("list").addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    console.log("You clicked:", e.target.innerText);
  }
});

Benefits:
More efficient (fewer listeners in memory).
Works for dynamically added child elements.
Cleaner code.



5. Difference between preventDefault() and stopPropagation()
event.preventDefault()
Stops the default browser behavior of an element.


Example: Prevent a link from navigating:

 document.querySelector("a").addEventListener("click", function(e) {
  e.preventDefault();
  console.log("Link clicked but not opened!");
});


event.stopPropagation()


Stops the event from bubbling up (or down, in case of capturing) in the DOM.


Example: Prevent parent click when child is clicked:

 child.addEventListener("click", function(e) {
  e.stopPropagation();
  console.log("Child only, parent won't trigger");
});

