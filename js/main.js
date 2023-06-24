const tabItem = document.querySelectorAll('.tabs__btn-item')
const tabCotent = document.querySelectorAll('.tabs__cotent-item')

tabItem.forEach(function(element){
  element.addEventListener('click', open);
});

function open(evt) {
  const tabTarget = evt.currentTarget;
  const button = tabTarget.dataset.button;

  tabItem.forEach(function(item){
    item.classList.remove('tabs__btn-item--active');
  })
  tabTarget.classList.add('tabs__btn-item--active');
  
  tabCotent.forEach(function(item){
    item.classList.remove('tabs__cotent-item--active');
  });
  
  document.querySelector(`#${button}`).classList.add('tabs__cotent-item--active');
}

const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__list');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('menu__list--active');
})

const swiper = new Swiper(".mySwiper", {
  effect: "fade",
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
    pagination: {
      el: ".swiper-pagination",
    },
  });