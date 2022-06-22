import './_vendor';
import vars from './_vars';
import './_functions';
import './_components';

const btnContainer = document.querySelector('.header .nav__list');

let items = btnContainer.querySelectorAll('a'),
  pageBody = document.querySelector('.page__body'),
  burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
  pageBody.classList.toggle('lock');
});


// activity class

for (var i = 0; i < items.length; i++) {
  items[i].addEventListener("click", function (e) {
    if (!e.target.classList.contains('active')) {
      items.forEach((elem) => {
        elem.classList.remove('active');
      })
      e.target.classList.add('active');
    } else {
    }
  });
}

// Scroll header

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.querySelector('header').classList.add('fixedMenu');
  } else {
    document.querySelector('header').classList.remove('fixedMenu');
  }
}


let itemSubmenu = document.querySelector('.nav > ul > li:nth-child(2)'),
  submenu = document.querySelector('.nav > ul > li:nth-child(2) ul'),
  clientWidth = document.documentElement.clientWidth;

if (clientWidth >= 768) {
  itemSubmenu.addEventListener('mouseover', () => {
    submenu.style.display = 'block';
  })

  itemSubmenu.addEventListener('mouseout', () => {
    submenu.style.display = 'none';
  })

} else {
  itemSubmenu.addEventListener('click', () => {
    submenu.classList.toggle('open');
  })
}


let header = document.querySelector('.header'),
  navMenu = document.querySelector('.nav');

if (clientWidth <= 480) {
  navMenu.append(header.querySelector('.header__btn'));
  header.querySelector('.header__btn').style.cssText = 'position: absolute; top: 20px; left: 15px; margin-right: 0';
}

