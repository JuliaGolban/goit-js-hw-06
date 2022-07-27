const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const listGallery = document.querySelector('.gallery');
console.dir(listGallery);

const imgEl = images
  .map(img => `<li><img src="${img.url}" alt="${img.alt}"></li>`)
  .join('');

listGallery.insertAdjacentHTML('beforeend', imgEl);

console.log(imgEl);

/* ==== add style ====*/
listGallery.style.listStyle = 'none';
listGallery.style.padding = '0';
listGallery.style.margin = '0';
listGallery.style.display = 'flex';
listGallery.style.flexWrap = 'wrap';
listGallery.style.justifyContent = 'center';
listGallery.style.gap = '30px';

const img = document.querySelectorAll('img');
img.forEach(img => {
  img.style.display = 'block';
  img.style.maxWidth = '100%';
  img.style.height = 'auto';
  console.dir(img);
});
