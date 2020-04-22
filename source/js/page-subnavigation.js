'use strict';

(function () {

  // Отрисовка навигационного меню

  var navigationMenu = document.querySelector('.page-subnavigation__wrapper');
  var forMenuBlocks = document.querySelectorAll('.promo-section');
  var namesMenuItems = [];
  var namesMenuLinks = [];
  var namesTags = [];

  for (var i = 0; i < forMenuBlocks.length; i++) {
  namesMenuLinks.push(forMenuBlocks[i].attributes.id.textContent);
  namesMenuItems.push(forMenuBlocks[i].children[0].textContent);
  }

  var ul = document.createElement('ul');
  ul.classList.add('page-subnavigation__list');

  for (var j = 0; j < namesMenuItems.length; j++) {
    var li = document.createElement('li');
    li.classList.add('page-subnavigation__item');
    var a = document.createElement('a');
    a.href = '#' + namesMenuLinks[j];
    a.textContent = namesMenuItems[j];
    a.classList.add('page-subnavigation__link')
    li.appendChild(a)
    ul.appendChild(li)
  }

  var liWhereToBuy = document.createElement('li');
  liWhereToBuy.classList.add('page-subnavigation__item');
  var aWhereToBuy = document.createElement('a');
  aWhereToBuy.href = 'https://www.iek.ru/products/where_to_buy/';
  aWhereToBuy.textContent = 'Где купить';
  aWhereToBuy.target = "_blank";
  aWhereToBuy.classList.add('page-subnavigation__link')
  liWhereToBuy.appendChild(aWhereToBuy);
  ul.appendChild(liWhereToBuy);

  navigationMenu.appendChild(ul);

  // Плавное перемещение до якорной ссылки

  var menuLinks = document.querySelectorAll('.page-subnavigation__link');

  var onSmoothScrolling = function (index) {
    menuLinks[index].addEventListener('click', function(evt) {
      var blockID = menuLinks[index].getAttribute('href');
      if (blockID[0] === '#') {
        evt.preventDefault();
        document.querySelector(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
      ul.classList.remove('page-subnavigation__list--active');
      pageSubnavigationToogle.classList.remove('page-subnavigation__toogle--menu-open');
    });
  }

  for (var y = 0; y < menuLinks.length; y++) {
    onSmoothScrolling(y);
  }

  // Работа кнопки в мобильной версии

  var pageSubnavigationToogle = document.querySelector('.page-subnavigation__toogle');

  pageSubnavigationToogle.addEventListener('click', function() {
    ul.classList.toggle('page-subnavigation__list--active');
    pageSubnavigationToogle.classList.toggle('page-subnavigation__toogle--menu-open');
  });

 })();
