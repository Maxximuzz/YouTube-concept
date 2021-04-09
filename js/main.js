const swiper = new Swiper('.channel-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 6,
  spaceBetween: 20,
  // Navigation arrows
  navigation: {
    nextEl: '.channel-button-next',
    prevEl: '.channel-button-prev',
  },
});
const searchBtn = documend.querySelector('.mobile-search');
const mobileSearch = document.querySelector('.input-group');
searchBtn.addEventListener('click', () => {
  mobileSearch.classList.toggle('is-open');
});
if (document.documentElement.scrollWidth <= 640) {
  myChannelSlider.destroy();
}