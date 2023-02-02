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

const galleryEl = document.querySelector('ul.gallery');
const itemOfGalleryEl = ({url, alt}) => {
  return `<li class="gallery__item"><img src="${url}", alt="${alt}" width="320" height="200" /></li>`;
};

const markUpListEl = images.map(itemOfGalleryEl).join("");
galleryEl.insertAdjacentHTML('afterbegin', markUpListEl);
galleryEl.style.display = "flex";
galleryEl.style.gap = "16px";
console.log(galleryEl);
