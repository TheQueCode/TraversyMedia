// Revisting Section 6

let output;

output = document.all;
output = document.all[10]; //<header>...</header>

output = document.all.length; // 37

output = document.documentElement; // <html>...</html>

output = document.head; // <head>...</head>
output = document.body; // <body>...</body>

// Children in a collection

output = document.head.children; // HTMLCollection(6) [meta, meta, meta, link, link, title, viewport: meta]
output = document.body.children; // HTMLCollection(2) [div.container, script]

// Other properties

output = document.doctype; // <!DOCTYPE html>
output = document.domain; // 127.0.0.1
output = document.URL; // http://127.0.0.1:5500/02-examining-document-object-properties/shopping-list/?item=
output = document.characterSet; // UTF-8
output = document.contentType; // text/html

// Getting forms as a HTML collection

output = document.forms; // HTMLCollection [form#item-form, item-form: form#item-form]
output = document.forms[0]; // <form id="item-form">...</form>
output = document.forms[0].id; // item-form
//output = document.forms[0].id = "new-id"; // new-id
output = document.forms[0].method; // get [Either get or post - if not actively set, get]
output = document.forms[0].action; // http://127.0.0.1:5500/02-examining-document-object-properties/shopping-list/?item= [Action is where the page submits to, if not actively set, it is going to submit to that page]

// Getting links as an HTMLCollection

output = document.links;
output = document.links[0];
output = document.links[0].href;
output = document.links[0].href = 'https://threads.com';
output = document.links[0].id = 'google-link';
output = document.links[0].className = 'google-class';
output = document.links[0].classList; // DOMTokenList ['google-class', value: 'google-class']

// HTMLCollection of images

output = document.images; // HTMLCollection [img]
output = document.images[0]; // <img src="images/note.png" alt>
output = document.images[0].src; // http://127.0.0.1:5500/02-examining-document-object-properties/shopping-list/images/note.png


// HTMLCollection is Array like but not an array. We can access values with indexes but forEach doesn't work

//document.forms.forEach(form => console.log(form)); // ERROR: document.forms.forEach is not a function

const forms = Array.from(document.forms); //**

forms.forEach(item => console.log(item));

// **HTMLCollection must be converted to an array first



console.log(output);


/*
let output;

output = document.all;
output = document.all.length;

output = document.documentElement;

output = document.head;
output = document.body;

output = document.head.children;  
output = document.body.children;

output = document.doctype;
output = document.domain;
output = document.URL;
output = document.characterSet;
output = document.contentType;

output = document.forms;
output = document.forms[0];
output = document.forms[0].id;
output = document.forms[0].method;
output = document.forms[0].action;

// document.forms[0].id = 'new-id';

output = document.links;
output = document.links[0];
output = document.links[0].href;
output = document.links[0].id = 'google-link';
output = document.links[0].className = 'google-class';
output = document.links[0].classList;

output = document.images;
output = document.images[0];
output = document.images[0].src;

// This is an HTML collection - it is array like but not an array. Convert with Array.from();

const forms = Array.from(document.forms);
forms.forEach(form => console.log(form));

console.log(output);
*/