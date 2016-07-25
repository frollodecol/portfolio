// Открытие/закрытие меню на мобильной версии

var leftContainerButton = document.querySelector('.left-container__button');
var leftContainerButtonCross = document.querySelector('.left-container__button i.icon-cross');
var leftContainerButtonMenu = document.querySelector('.left-container__button i.icon-menu');
var leftContainerDescription = document.querySelector('.left-container__description');

leftContainerButton.addEventListener('click', function() {
  if (leftContainerDescription.style.display == 'none') {
    leftContainerDescription.style.display = 'block';
    leftContainerButtonMenu.style.display = 'none';
    leftContainerButtonCross.style.display = 'inline';
  }
  else {
    leftContainerDescription.style.display = 'none';
    leftContainerButtonMenu.style.display = 'inline';
    leftContainerButtonCross.style.display = 'none';    
  }
});

//Открытие/закрытие дополнительной информации обо мне

var aboutPageAdditionalShow = document.querySelector('.right .page__about .additional-show');
var aboutPageAdditionalHide = document.querySelector('.right .page__about .additional-hide');
var aboutPageAdditional = document.querySelector('.additional');

aboutPageAdditionalShow.addEventListener('click', function() {
  if (aboutPageAdditional.style.display == '' || aboutPageAdditional.style.display == 'none') {
    aboutPageAdditional.style.display = 'block';
  }
});
aboutPageAdditionalHide.addEventListener('click', function() {
  if (aboutPageAdditional.style.display == 'block') {
    aboutPageAdditional.style.display = 'none';
  }  
});

//Самая сложная часть кода - переключение менюшек

var pageAbout = document.querySelector('.right .page__about');
var pagePortfolio = document.querySelector('.right .page__portfolio');
var pageForCustomer = document.querySelector('.right .page__for-customer');

var navigationAbout = document.querySelector('.navigation .about');
var navigationPortfolio = document.querySelector('.navigation .portfolio');
var navigationForCustomer = document.querySelector('.navigation .for-customer');
var navigationItems = document.querySelectorAll('.navigation .item');

navigationAbout.addEventListener('click', function() {
  if (pageAbout.style.display == 'none' || pageAbout.style.display =='') {
    pagePortfolio.style.display = 'none';
    pageForCustomer.style.display = 'none';
    pageAbout.style.display = 'block';
    for (var i=0; i<navigationItems.length; i++) {
      navigationItems[i].classList.remove('active');
    }
    navigationAbout.classList.add('active');
  }
});

navigationPortfolio.addEventListener('click', function() {
  if (pagePortfolio.style.display == 'none' || pagePortfolio.style.display =='') {
    pageAbout.style.display = 'none';
    pageForCustomer.style.display = 'none';
    pagePortfolio.style.display = 'block';
    for (var i=0; i<navigationItems.length; i++) {
      navigationItems[i].classList.remove('active');
    }
    navigationPortfolio.classList.add('active');
  }
});

navigationForCustomer.addEventListener('click', function() {
  if (pageForCustomer.style.display == 'none' || pageForCustomer.style.display =='') {
    pageAbout.style.display = 'none';
    pagePortfolio.style.display = 'none';
    pageForCustomer.style.display = 'block';
    for (var i=0; i<navigationItems.length; i++) {
      navigationItems[i].classList.remove('active');
    }
    navigationForCustomer.classList.add('active');
  }
});

//Всплывающее окошко формы обратной связи

var navigationFeedback = document.querySelector('.navigation .feedback');
var popup = document.querySelector('.popup');
var popupShadow = document.querySelector('.popup__shadow');

navigationFeedback.addEventListener('click', function() {
  popup.style.display = 'flex';
  setTimeout( function() {
    if (popup.style.display == 'flex') {
    popup.style.opacity = '1';
    }
  }, 50)

});
popupShadow.addEventListener('click', function() {
  popup.style.opacity = '0';
  setTimeout(function() {
    popup.style.display = 'none';
  }, 1000)
});










