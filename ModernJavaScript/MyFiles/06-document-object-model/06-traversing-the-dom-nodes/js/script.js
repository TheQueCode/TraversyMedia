// Revisiting Section 6

// Different Type of DOM Nodes

/*
Element
Attr (Attributes)
Text
CDATASection
EntityReference
Entity
ProcessingInstruction
Comment
Document
DocumentType
DocumentFragment
Notation 
*/

let output;

// child nodes from the parent

const parent = document.querySelector('.parent');

output = parent.childNodes; // NodeList(9) [text, comment, text, div.child, text, div.child, text, div.child, text]

output = parent.childNodes[0]; // #text
output = parent.childNodes[1].textContent; // Children
output = parent.childNodes[3].nodeName; // DIV
output = parent.childNodes[3].textContent; // Child 1
output = parent.childNodes[3].outerHTML; // <div class="child">Child 1</div>
output = parent.childNodes[3].textContent = 'Child One';
output = parent.childNodes[5].style.color = 'red';

output = parent.firstChild; // #text
output = parent.lastChild; // #text

parent.lastChild.textContent = 'Hello';

// Getting Parent nodes from the child

const child = document.querySelector('.child');

output = child.parentNode; // <div class="parent">...</div>
output = child.parentElement; // <div class="parent">...</div>

child.parentNode.style.backgroundColor = '#ccc';
child.parentNode.style.padding = '10px';

// Siblings

const secondItem = document.querySelector('.child:nth-child(2)'); // <div class="child" style="color: red;">Child 2</div>

output = secondItem;
output = secondItem.nextSibling; // #text

console.log(output);

/*
let output;

const parent = document.querySelector('.parent');

output = parent.childNodes;
output = parent.childNodes[0].textContent;
output = parent.childNodes[0].nodeName;

output = parent.childNodes[3].nodeName;
output = parent.childNodes[3].textContent;
output = parent.childNodes[3].outerHTML;

output = parent.childNodes[3].textContent = 'Child One';

output = parent.childNodes[5].style.color = 'red';

output = parent.firstChild;
output = parent.lastChild;

parent.lastChild.textContent = 'Hello';

// Parent nodes

const child = document.querySelector('.child');

output = child.parentNode;
output = child.parentElement;

child.parentNode.style.backgroundColor = '#ccc';
child.parentNode.style.padding = '10px';

// Siblings

const secondItem = document.querySelector('.child:nth-child(2)');

output = secondItem.nextSibling;
output = secondItem.previousSibling;

console.log(output);
*/
