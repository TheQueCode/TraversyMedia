const post = {
  id: 1,
  title: 'Post One',
  body: 'This is the body.',
};

// Convert obj to JSON string (Stringify)

const str = JSON.stringify(post);


// Convert JSON to obj (Parse)

const obj = JSON.parse(str);


const posts = [
  {
    id: 1,
    title: 'Post One',
    body: 'This is the body.',
  },
  {
    id: 2,
    title: 'Post Two',
    body: 'This is the body.',
  },
  {
    id: 3,
    title: 'Post Three',
    body: 'This is the body.',
  }
];

const str2 = JSON.stringify(posts);


console.log(str2);














