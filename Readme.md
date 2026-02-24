1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

ans: getElementById selects single element using its unique id and getElementsByClassName selects elements using a class name on the other hand QuerySelector selects the first element that matches a CSS selector. those are the main difference they has.

2. How do you create and insert a new element into the DOM?

ans: At first create the element using the document object,then add content (text or HTML) or attributes to the new element,then insert it into the page by appending it to an existing parent element.

3. What is Event Bubbling? And how does it work?

ans: Event bubbling is a process where an event starts from the target element to upward through its parent elements in the dom. it works by clicking. it happens first on its element then go to its parenst then to the grandparent until it reaches to the document root.

4. What is Event Delegation in JavaScript? Why is it useful?

ans: Event delegation is adding one event listener to a parent element instead of adding many listeners to child elements andd it is useful because its saves memory,improves performance., clean code.

5. What is the difference between preventDefault() and stopPropagation() methods?

ans: preventDefault() its stops the browser’s default action and stopPropagation() stops the event from moving up bubbling to parent elements.