// Step 1

const library = [
  {
    title: 'Being Him',
    author: 'John Doe',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'Being Her',
    author: 'Jane Doe',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'Being Us',
    author: 'Jane & John Doe',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
]

// Step 2

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

// Step 3

const { title: firstBook } = library[0];

console.log(firstBook);

// Step 4

const libraryStr = JSON.stringify(library);

console.log(libraryStr);