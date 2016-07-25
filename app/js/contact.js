document.getElementById('feedback').addEventListener('submit', function(evt){
  var http = new XMLHttpRequest(), f = this;
  evt.preventDefault();
  http.open("POST", "http://weblamp.tk/contactPortfolio.php", true);
  http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  http.send("feedbackName" + f.feedbackName.value + "&feedbackEmail=" + f.feedbackEmail.value + "&feedbackMessage=" + f.feedbackMessage.value);
  http.onreadystatechange = function() {
    if (http.readyState == 4 && http.status == 200) {
      alert(http.responseText + ', Ваше сообщение получено.\n Я свяжусь с вами в ближайшее время.');    
      f.feedbackMessage.removeAttribute('value'); // очистить поле сообщения (две строки)
      f.feedbackMessage.value='';
    }
  }
  http.onerror = function() {
    alert('Извините, данные не были переданы');
  }
}, false);