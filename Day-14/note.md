## 📘 JavaScript DOM (Document Object Model)

The DOM (Document Object Model) is a tree-like structure that represents a webpage.
It is the static HTML structure of a webpage, and JavaScript uses the DOM to connect and interact with that HTML file.

🔹 Elements of the DOM
**Document**

The root node of the DOM tree is the document object.
The entire HTML page lives inside the document.
To access any element from the HTML page, we use the document object.

**Node**

Any element inside the DOM tree is called a node.

*Types of Nodes:*
**Element Node**: Examples: <div>, <p>, <a>, <img>.

**Text Node**: 
*Example*:
<p>Hi</p> 
Here “Hi” is the text node.

**Element**-

Elements are the HTML tags themselves.
Example: <h1>, <p>, <img> etc.

**Attribute (Attr)**-

Attributes describe properties of elements.
Examples: src, alt, href, id, class.

## 🔹 Methods to Access the DOM
**1. document.getElementById()** - Used to select an element using its ID.

**2. document.getElementsByTagName()** - Used to select elements using their tag name.

**3. document.getElementsByClassName()** - Used to select elements by their class name.

*Note*:
getElementsByTagName() and getElementsByClassName() return an HTMLCollection, which is live — meaning it updates when the DOM changes.

## 🔹 Query Selectors in JavaScript
JavaScript has two main selector methods:

**document.querySelector()**-
*Uses CSS selectors.

*Returns the first matching element.

**document.querySelectorAll()**-
*Returns a NodeList (static).

*Returns all matching elements.

## 🔹 Creating Elements Dynamically

To create elements dynamically in JavaScript, we use:

document.createElement()

## 🔹 Removing and Replacing Elements
**.remove()**-
Removes the selected element.

**.replaceChildren()**-
Replaces all child elements inside a parent.

## 🔹 Working With Attributes
*.setAttribute(name, value)*
Sets an attribute value.

*.getAttribute(name)*
Gets an attribute value.

## 🔹 children vs childNodes
**childNodes**

Returns all nodes (including text nodes, line breaks).

Returns a NodeList.

**children**

Returns only element nodes.

Returns an HTMLCollection.

## 🔹 Adding Text Inside Elements

To add text inside an element, we use:

.innerText

.innerHTML

.textContent

## 🔹 Events in JavaScript

To create events for an element:

**addEventListener**()-

*Takes two parameters:*

Event name

Callback function

**removeEventListener()**-
*Takes*:

Event name

The same function reference that was used in addEventListener

## 🔹 Common Event Types

"click" – Mouse event triggered on click.

"mouseover" – Mouse enters an element.

"submit" – Form submission event.

"change" – Triggered when an input value changes.

"DOMContentLoaded" – Fires when the HTML document is fully loaded.

## 🔹 Event Object in JavaScript

When an event occurs, JavaScript provides an event object which contains information about the event.

*Common properties:*
event.type

event.target

event.target.value

event.currentTarget

event.target.name

## 🔹 Event Bubbling, Capturing & Delegation
**Event Bubbling**- The event starts from the target element and moves upward.

**Flow**:
*Child → Parent → Grandparent → Document*

**Event Capturing** - The event starts from the top and moves downward.

**Flow**:
*Document → Grandparent → Parent → Child*

**Event Delegation**- We add a single event listener to a parent element, and it can handle events triggered by its children — even if they don’t have their own event listeners.

## 🔹 Stop Propagation - To stop the bubbling or capturing process, we use: event.stopPropagation()