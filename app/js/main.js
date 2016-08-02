// Открытие/закрытие меню на мобильной версии

var leftContainerButton = document.querySelector('.left-container__button');
var leftContainerButtonCross = document.querySelector('.left-container__button i.icon-cross');
var leftContainerButtonMenu = document.querySelector('.left-container__button i.icon-menu');
var leftContainerDescription = document.querySelector('.left-container__description');

leftContainerButton.addEventListener('click', function() {
  if (  leftContainerDescription.style.display == '' ||
        leftContainerDescription.style.display == 'block' ) {
    leftContainerDescription.style.display = 'none';
    leftContainerButtonMenu.style.display = 'inline';
    leftContainerButtonCross.style.display = 'none';
  }
  else {
    leftContainerDescription.style.display = 'block';
    leftContainerButtonMenu.style.display = 'none';
    leftContainerButtonCross.style.display = 'inline';    
  }
});

//Работа меню навигации - самый сложный блок кода

var navigationItems = document.querySelectorAll('.navigation .item');
var navigationAbout = document.querySelector('.navigation .about');
var navigationPortfolio = document.querySelector('.navigation .portfolio');
var navigationFeedback = document.querySelector('.navigation .feedback')

var rightBlock = document.querySelector('.right');
var rightContainer = document.querySelector('.right__container');
var pages = document.querySelectorAll('.right>.right__container>[class^="page"]');
var pageAbout = document.querySelector('.page__about');
var pagePortfolio = document.querySelector('.page__portfolio');
var pageFeedback = document.querySelector('.page__feedback');

for (var i=0; i<navigationItems.length; i++) {
  navigationItems[i].addEventListener('click', function(event) {
    if (!event.target.classList.contains('active')) {
      if (document.documentElement.clientWidth > 960) {
        rightContainer.style.width = rightContainer.offsetWidth + 'px';
        rightBlock.classList.add('js-right--hidden');
        for (var k=0; k<navigationItems.length; k++) {
          navigationItems[k].classList.remove('active');
          if (navigationItems[k] == event.target) {
            navigationItems[k].classList.add('active');
          };
        };

        var currentNavigationItem = event.target;
        rightBlock.addEventListener('transitionend', function(event) {
          for (var j=0; j<pages.length; j++) {
            pages[j].style.display = 'none';
            if (currentNavigationItem == navigationAbout) {
              pageAbout.style.display = 'block';
            };
            if (currentNavigationItem == navigationPortfolio) {
              pagePortfolio.style.display = 'block';
            };
            if (currentNavigationItem == navigationFeedback) {
              pageFeedback.style.display = 'block';
            };
          };
          setTimeout( function() {
            rightBlock.classList.remove('js-right--hidden');
          },100);
          setTimeout(function() {
            rightContainer.style.width = '100%';
          }, 600);

        });
      };
      if (document.documentElement.clientWidth <=960) {
        for (var j=0; j<navigationItems.length; j++) {
          navigationItems[j].classList.remove('active');
          if (navigationItems[j] == event.target) {
            navigationItems[j].classList.add('active');
          };
        };
        for (var j=0; j<pages.length; j++) {
          pages[j].style.display = 'none';
        };
        if (event.target == navigationAbout) {
          pageAbout.style.display = 'block';
        };
        if (event.target == navigationPortfolio) {
          pagePortfolio.style.display = 'block';
        };
        if (event.target == navigationFeedback) {
          pageFeedback.style.display = 'block';
        };
      };
    };

  });
};

//Изменение правой границы body при появлении скроллбара





