# Comments in javaScript - 

**Single-line comments**: Begin with // and comment out the rest of the line.

    *example*:
    // This is a single-line comment
    let x = 10; // This also comments out the rest of the line

**Multi-line comments**: Begin with /* and end with */. Everything between these markers is commented out.

    *example*:
    /*
    This is a multi-line comment.
    It can span multiple lines.
    */
    let y = 20;

## how to embed JS in HTML (inline, internal, external) ?

When working with HTML, there are three primary ways to incorporate JavaScript: inline, internal, and external.

Each method has its unique advantages and use cases. In this blog post, we’ll explore these three approaches, complete with examples and key characteristics to help you decide which method best suits your project needs.
When working with HTML, there are three primary ways to incorporate JavaScript: inline, internal, and external.

Each method has its unique advantages and use cases. In this blog post, we’ll explore these three approaches, complete with examples and key characteristics to help you decide which method best suits your project needs.

**Inline JavaScript**- Inline JavaScript involves embedding JavaScript code directly within HTML element attributes. This method is ideal for simple, small scripts or event handlers.

<!DOCTYPE html>
<html>
<head>
  <title>Inline JavaScript Example</title>
</head>
<body>
  <!-- The onclick attribute contains inline JavaScript -->
  <button onclick="alert('Hello from inline JavaScript!');">Click Me</button>
</body>
</html>
In this example, the alert('Hello from inline JavaScript!'); script is directly tied to the button's onclick event attribute. When the button is clicked, the alert message is triggered immediately.

**When to Use Inline JavaScript**- Perfect for small scripts or single event handlers. Useful during the initial stages of development when testing functionality.

**Internal JavaScript**- Internal JavaScript is placed within the HTML document inside <script> tags. This method keeps JavaScript code separate from HTML element attributes while still residing in the same file.

<!DOCTYPE html>
<html>
<head>
  <title>Internal JavaScript Example</title>
  <script>
    // This script is placed in the head of the document
    function greet() {
      alert('Hello from internal JavaScript!');
    }
  </script>
</head>
<body>
  <button onclick="greet();">Click Me</button>
</body>
</html>
Here, the greet() function is defined within the <head> section and is invoked by the button's onclick event. This approach keeps the function logic separate from the HTML elements, enhancing readability.

Key Characteristics -Keeps JavaScript separate from HTML attributes, promoting cleaner code.
All code resides in one HTML file, simplifying deployment for smaller projects.

**External JavaScript** -External JavaScript involves placing JavaScript code in separate .js files, which are then linked to the HTML document using the <script> tag with a src attribute. This method is widely preferred for its maintainability, reusability, and clear separation of concerns.

<!DOCTYPE html>
<html>
<head>
  <title>External JavaScript Example</title>
  <!-- Link to the external JS file -->
  <script src="script.js"></script>
</head>
<body>
  <button onclick="sayHello();">Click Me</button>
</body>
</html>
External JavaScript File (script.js):

function sayHello() {
  alert('Hello from external JavaScript!');
}
In this setup, the sayHello() function is defined in an external script.js file and is called by the button's onclick event in the HTML file. This separation enhances code organization and reusability.

