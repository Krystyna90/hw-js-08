import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const imageGallery = document.querySelector('.gallery');
const imageMaker = createImageGallery(galleryItems);

imageGallery.insertAdjacentHTML('beforeend', imageMaker);

 var lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
            captionDelay: 250,
        captionPosition: 'bottom',
    });

function createImageGallery(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</div>`;
    })
        .join('');
};
