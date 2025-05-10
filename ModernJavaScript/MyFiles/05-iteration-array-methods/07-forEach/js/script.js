// high order array methods

const socials = ['Twitter', 'LinkedIn', 'Instagram', 'TikTok'];

//console.log(socials.__proto__);
/*
socials.forEach(function (social)
{ 
  console.log(social);
});
*/

//socials.forEach((item, index, arr) => console.log(`${index} - ${item}`, arr));

function logSocials (social)
{
  console.log(social);
}

//socials.forEach(logSocials)

const socialObjs = [
  {name: 'Twitter', url: 'https://twitter.com'},
  {name: 'LinkedIn', url: 'https://linkedin.com'},
  {name: 'Instagram', url: 'https://instagram.com'},
  {name: 'Tiktok', url: 'https://tiktok.com'},
];

socialObjs.forEach(item => console.log(item.url));