window.onload = function() {
    var telInput = document.getElementById('tel');
    Inputmask("+7 (999) 999-99-99").mask(telInput);
    telInput.addEventListener('input', function() {
      if (this.value.length === 18) {
      }
    });

    

    function setThemeClass() {
      document.documentElement.className = Telegram.WebApp.colorScheme;
  }

  Telegram.WebApp.onEvent('themeChanged', setThemeClass);
  setThemeClass();
    let tg = window.Telegram.WebApp;

    tg.ready();
    tg.expand();


    tg.MainButton.text = "Отправить"; //изменяем текст кнопки 
    tg.MainButton.setText ("Отправить"); //изменяем текст кнопки 
    tg.MainButton.textColor = "#FFFFFF"; //изменяем цвет текста кнопки
    tg.MainButton.color = "#A057EF"; //изменяем цвет бэкграунда кнопки


    function checkInputs() {
      let username = document.getElementById("name").value;
      let usertel = document.getElementById("tel").value;
      let message = document.getElementById("message").value;
      let telRegex = /[\+]{1}[7]{1}\s\([0-9]{3}\)\s[0-9]{3}-[0-9]{2}-[0-9]{2}/;
  
      if (username.length > 2 && telRegex.test(usertel) && message.length > 10) {
          tg.MainButton.show();
      } else {
          tg.MainButton.hide();
      }
  }
  
  setInterval(checkInputs, 300);


    Telegram.WebApp.onEvent("mainButtonClicked", function(){
      let name = document.getElementById("name").value;
      let tel = document.getElementById("tel").value;
      let message = document.getElementById("message").value;
      let data = {
        name: name,
        tel: tel,
        message: message
      }
      tg.sendData(JSON.stringify(data));
      tg.close();
    });
  };