const IMAGE_FOLDER = './Vips/';
const galleryRoot = document.getElementById('gallery-root');

const imageFiles = [
    'foto1.jpg',
    'foto2.jpg',
    'foto3.jpg',
    'foto4.jpg',
    'foto5.jpg',
    'foto6.jpg'
];

function initGallery() {
    const fragment = document.createDocumentFragment();

    imageFiles.forEach((fileName, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.style.animationDelay = `${index * 0.1}s`;

        const img = document.createElement('img');
        img.src = `${IMAGE_FOLDER}${fileName}`;
        img.alt = 'Vip Image';
        img.loading = 'lazy';
        
        item.appendChild(img);
        item.addEventListener('click', () => openLightbox(`${IMAGE_FOLDER}${fileName}`));
        fragment.appendChild(item);
    });

    galleryRoot.appendChild(fragment);
}

document.addEventListener('DOMContentLoaded', initGallery);