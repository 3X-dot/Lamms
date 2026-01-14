const VIP_FOLDER = './Vips/';
const PNG_FOLDER = './PNG/';
const galleryRoot = document.getElementById('gallery-root');

const vipFiles = [
    '1b31c658-2f0d-41d7-95a6-98cd1407112e.png',
    '3682f1ff-92a3-42e8-9ed0-fb5236a3e8d9.png',
    'A_digital_2D_badge_showcases_the_ranking_or_tier_n.png',
    'A_digital_badge_emblem_in_the_image_represents_the.png',
    'A_digital_emblem_badge_in_the_image_displays_the_w.png',
    'A_digital_emblem_badge_labeled__BETA__showcases_a_.png',
    'A_digital_emblem_badge_represents_the__OMEGA__rank.png',
    'A_digital_emblem_design_for_the__DIAMANTE__rank_is.png',
    'co-owner.png',
    'moderador v2.png',
    'moderador.png',
    'owner v2.png',
    'owner v3.png',
    'owner.png',
    'secreteria aux.png',
    'secreteria offcial.png',
    'staff manager.png',
    'VRChat_2026-01-06_02-57-01.756_1080x1920.jpg',
    'VRChat_2026-01-06_03-15-41.210_1080x1920.jpg',
    'VRChat_2026-01-10_17-19-22.949_7680x4320.png',
    'VRChat_2026-01-10_17-25-05.666_7680x4320.png'
];

const pngFiles = [
    '1.png', '2.jpg', '3.jpg', '4.png', '5.png', '6.jpg', '7.png', '8.jpg', '9.png',
    '10.png', '11.png', '12.png', '13.png', '14.png', '15.png', '16.jpg', '17.png',
    '18.png', '19.jpg', '20.jpg', '21.png', '22.png', '23.png', '24.png', '25.jpg',
    '26.png', '27.png', '28.png', '29.png', '30.png', '31.png', '32.jpg', '33.jpg'
];

function createGalleryItem(folder, fileName, index) {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.style.animationDelay = `${index * 0.05}s`;

    const img = document.createElement('img');
    img.src = `${folder}${fileName}`;
    img.alt = 'Gallery Image';
    img.loading = 'lazy';

    item.appendChild(img);
    item.addEventListener('click', () => openLightbox(`${folder}${fileName}`));
    return item;
}

function initGallery() {
    const fragment = document.createDocumentFragment();

    vipFiles.forEach((file, i) => fragment.appendChild(createGalleryItem(VIP_FOLDER, file, i)));
    pngFiles.forEach((file, i) => fragment.appendChild(createGalleryItem(PNG_FOLDER, file, i + vipFiles.length)));

    galleryRoot.appendChild(fragment);
}

document.addEventListener('DOMContentLoaded', initGallery);