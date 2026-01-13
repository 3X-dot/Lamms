const IMAGE_FOLDER = './Vips/';
const galleryRoot = document.getElementById('gallery-root');

const imageFiles = [
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