



// function renderFoto(data) {
//     const gallery = document.querySelector('.js-container');
//     gallery.innerHTML = '';

//     data.hits.forEach(image => {
//         const imgElement = document.createElement('img');
//         imgElement.src = image.webformatURL;
//         imgElement.alt = image.tags;

//         const link = document.createElement('a');
//         link.href = image.largeImageURL;
//         link.appendChild(imgElement);

//         gallery.appendChild(link);
//     });

//     new SimpleLightbox('.js-container a');
// }


export function renderFoto(data) {
    const gallery = document.querySelector('.js-container');
    const fragment = document.createDocumentFragment();

    data.hits.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.webformatURL;
        imgElement.alt = image.tags;
        fragment.appendChild(imgElement);
    });

    gallery.appendChild(fragment);

    // Initialize SimpleLightbox
    const lightbox = new SimpleLightbox('.js-container img');
    lightbox.refresh();
}
