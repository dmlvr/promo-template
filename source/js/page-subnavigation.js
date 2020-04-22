'use strict';

(function () {

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

  navigationMenu.appendChild(ul);

  var menuLinks = document.querySelectorAll('.page-subnavigation__link');

  var onSmoothScrolling = function (index) {
    menuLinks[index].addEventListener('click', function(evt) {
      evt.preventDefault();
      var blockID = menuLinks[index].getAttribute('href');
      document.querySelector(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    });
  }

  for (var y = 0; y < menuLinks.length; y++) {
    onSmoothScrolling(y);
  }

 })();
