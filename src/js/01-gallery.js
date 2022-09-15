import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

galleryRef.innerHTML = createImagesMarkup(galleryItems);

galleryRef.addEventListener('click', onImageClick);

function createImagesMarkup(items) {
  return items
    .map(
      item =>
        `<a class="gallery__item" href="${item.original}">
         <img class="gallery__image" src="${item.preview}" alt="${item.description}" title="${item.description}"/>
        </a>`
    )
    .join('');
}

function onImageClick(evt) {
  evt.preventDefault();

  if (!evt.target.classList.contains('gallery__image')) {
    return;
  }

  //   console.dir(evt.target.parentNode.href)
  var gallery = new SimpleLightbox('.gallery a', {
    /*optons*/
    captionPosition: 'bottom',
    captionDelay: 250,
  });
}
