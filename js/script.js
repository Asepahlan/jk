// js/script.js

const images = document.querySelectorAll('.hero img');
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function changeBackground() {
    // Menghapus kelas 'active' dari gambar saat ini
    images[currentIndex].classList.remove('active');

    // Update index untuk gambar berikutnya
    currentIndex = (currentIndex + 1) % images.length;

    // Menambahkan kelas 'active' ke gambar berikutnya
    images[currentIndex].classList.add('active');
}

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

// Ganti gambar setiap 5 detik
setInterval(changeBackground, 5000);

// Set gambar pertama saat halaman dimuat
window.onload = () => {
    images[currentIndex].classList.add('active');
};

setInterval(nextSlide, 6000); // Ganti slide setiap 6 detik
showSlide(currentIndex);


// Tampilan Karir js
// Load layout from layout.html
fetch('../layout.html')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(data => {
        document.getElementById('layout-container').innerHTML = data;
    })
    .catch(error => console.error('Error loading layout:', error));

// Load footer from footer.html
fetch('../footer.html')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(data => {
        document.getElementById('footer-container').innerHTML = data;
    })
    .catch(error => console.error('Error loading footer:', error));

// Contoh fungsi untuk menampilkan alert saat mengklik misi
document.querySelectorAll('.list-unstyled li').forEach(item => {
    item.addEventListener('click', () => {
        alert('Anda mengklik misi: ' + item.textContent);
    });
});
