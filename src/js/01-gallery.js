import { galleryItems } from './gallery-items.js';

// Change code below this line

const galleryEl = document.querySelector('.gallery');

galleryEl.addEventListener('click', onClickItemGallery);

function createMarkup(galleryItems){
  return galleryItems.map(({preview,original}) => 
  {return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="Image description"
    />
  </a>
</li>`}).join('')
};

galleryEl.insertAdjacentHTML('beforeend', createMarkup(galleryItems));
console.log(galleryEl)
console.log(galleryItems);

function onClickItemGallery(evt){
  evt.preventDefault();
//   if(!evt.target.classList.contains('gallery')){
//     return;
//   }
  console.log(evt.currentTarget);
  console.log(evt.target);
const source = evt.target.dataset.source;
console.log(source);

const instance = basicLightbox.create
(`<img width="1400" height="900" 
src="${source}">`);
instance.show();
  
};




