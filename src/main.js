import { searchFoto } from './js/pixabay-api.js';
import { renderFoto } from './js/render-functions.js';

// Імпортуємо необхідний плагін
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const form = document.getElementById('search-form');
const gallery = document.querySelector('.js-container');
const loader = document.querySelector('.loader');

// form.addEventListener('submit', async function(event) {
//     event.preventDefault();

//     const query = document.getElementById('search-input').value;
//     if (!query) return;

//     loader.style.display = 'block';
//     gallery.innerHTML = '';

//     try {
//         const data = await searchFoto(query);
//         renderFoto(data);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         iziToast.error({
//             title: 'Error',
//             message: 'An error occurred while searching for images',
//         });
//     }

//     loader.style.display = 'none';
// });

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const query = document.getElementById('search-input').value.trim();
    if (!query) {
        iziToast.warning({
            title: 'Warning',
            message: 'Please enter a search images',
        });
        return;
    }

    loader.style.display = 'block';
    gallery.innerHTML = '';

  searchFoto(query)
        .then(data => {
            if (data.hits.length === 0) {
                iziToast.error({
                    title: 'Error',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                });
            } else {
                renderFoto(data);
            }
        })
        .catch(error => {
            if (gallery.innerHTML === '') {
                console.error('Error fetching data:', error);
                iziToast.error({
                    title: 'Error',
                    message: 'An error occurred while searching for images',
                });
            }
        })
        .finally(() => {
            loader.style.display = 'none';
        });
});