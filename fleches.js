let currentImageIndex = 0;
const galleryItems = document.querySelectorAll('.gallery-item');
const modalImage = document.getElementById('modalImage');

function openModal(imageUrl) {
    document.getElementById('imageModal').style.display = 'block';
    modalImage.src = imageUrl;
    currentImageIndex = Array.from(galleryItems).findIndex(item => item.querySelector('img').src === imageUrl);
}

function closeModal() {
    document.getElementById('imageModal').style.display = 'none';
}

function changeImage(direction) {
    currentImageIndex += direction;

    if (currentImageIndex < 0) {
        currentImageIndex = galleryItems.length - 1;
    } else if (currentImageIndex >= galleryItems.length) {
        currentImageIndex = 0;
    }

    const newImageUrl = galleryItems[currentImageIndex].querySelector('img').src;
    modalImage.src = newImageUrl;
}

window.onclick = function(event) {
    const modal = document.getElementById('imageModal');
    if (event.target === modal) {
        closeModal();
    }
};


