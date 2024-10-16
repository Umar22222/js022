// Fake sharhlar ro'yxati
let reviews = [
    { name: "John Doe", review: "Great product! Highly recommend." },
    { name: "Jane Smith", review: "Good value for the price." }
];

// Funksiya sharhlarni ekranga chiqarish uchun
function displayReviews() {
    const reviewsContainer = document.querySelector('.reviews-container');
    reviewsContainer.innerHTML = ''; // Avvalgi sharhlarni tozalash

    reviews.forEach((review) => {
        const reviewItem = document.createElement('div');
        reviewItem.classList.add('review-item');

        reviewItem.innerHTML = `
            <h4>${review.name}</h4>
            <p>${review.review}</p>
        `;

        reviewsContainer.appendChild(reviewItem);
    });
}

// Sahifa yuklanishi bilan sharhlarni ko'rsatish
document.addEventListener('DOMContentLoaded', displayReviews);

// Sharh qoldirish funksiyasi
document.getElementById('reviewForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const review = document.getElementById('review').value;

    // Yangi sharh qo'shish
    reviews.push({ name, review });

    // Formani tozalash
    document.getElementById('name').value = '';
    document.getElementById('review').value = '';

    // Sharhlarni qayta ko'rsatish
    displayReviews();
});
