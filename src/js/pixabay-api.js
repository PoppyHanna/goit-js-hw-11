



// const pic = {
//     formEl: document.querySelector('.search-form'),
//     picEl: document.querySelector('.js-container'),
// };


// pic.formEl.addEventListener('submit', async (event) => {
//     event.preventDefault();

//     const foto = event.target.elements.query.value;
    
//     // searchFoto(foto).then(data => {
//     //     renderFoto(data);
//     // }).catch(error => {
//     //     if (!delayInput.checkValidity() || !selectedStateInput){
//     //     // console.error('Помилка під час пошуку зображень:', error);
//     //     iziToast.error({
//     //         title: 'Error',
//     //         message: 'An error occurred while searching for images',
//     //     });
//     //         return
//     //     };
//     // });

//     try {
//         const data = await searchFoto(foto);
//         renderFoto(data);
//     }
//     catch (error) {
//         console.error('Помилка під час пошуку зображень:', error);
//         iziToast.error({
//             title: 'Error',
//             message: 'An error occurred while searching for images',
//          });
//     }

//     event.target.reset();
// });

// async function searchFoto (userValue) {
//     const BASE_URL = 'https://pixabay.com';
//     const END_POINT = '/api/';
//     const PARAMS = new URLSearchParams({
//         key: "42342437-5c4c341e915bce4954251eee0",
//         q: `${ userValue }`,
//         image_type: "photo",
//         orientation: "horizontal",
//         safesearch: true,
//     });
//     const url = BASE_URL + END_POINT + "?" + PARAMS;

//     const response = await fetch(url);

//         if (!response.ok) {
//             throw new Error('Помилка HTTP: ' + response.status);
//         }
//         return response.json();
    
// }

// // function renderFoto(data) {
// //     // Реалізуйте логіку відображення зображень
// // }



export function searchFoto(userValue) {
    const BASE_URL = 'https://pixabay.com';
    const END_POINT = '/api/';
    const PARAMS = new URLSearchParams({
        key: "42342437-5c4c341e915bce4954251eee0",
        q: userValue,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
    });
    const url = BASE_URL + END_POINT + "?" + PARAMS;

  return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error fetching data: ' + response.status);
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
