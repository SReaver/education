export let forms = () => {
 //Forms
 let forms = document.querySelectorAll(".form");
 forms.forEach((item) => {
  item.addEventListener("submit", function (event) {
   event.preventDefault();
   let statusMessage = document.createElement("div");
   item.appendChild(statusMessage);
   let formData = new FormData(item);

   let clearInput = (form) => {
    for (let i = 0; i < form.elements.length; i++) {
     form.elements[i].value = '';
    }
   };


   fetch("server.php", {
     method: "POST",
     body: formData
    })
    .then((response) => {
     if (response.ok) {
      statusMessage.innerHTML = "";
      let success = document.createElement("img");
      success.src = "img/message-sent.png";
      success.width = 200;
      statusMessage.appendChild(success);
      setTimeout(function () {
       statusMessage.innerHTML = "";
       statusMessage.style = "none";
      }, 5000);
      clearInput(item);
     } else {
      statusMessage.style.cssText = "width:365px; margin-top:20px;padding:10px;background: rgba(216,216,216);border-radius: 4px;font-size:18px;border:1px solid red;color:red;display: flex; align-item:center;";
      let alarm = document.createElement("img");
      alarm.src = "img/warning.svg";
      alarm.width = 80;
      alarm.height = 80;
      let span = document.createElement("span");
      span.textContent = "Your message couldnt be sent. Please try again later.";
      span.style.cssText = "display: flex;align-items: center;";
      statusMessage.appendChild(alarm);
      statusMessage.appendChild(span);
      setTimeout(function () {
       statusMessage.innerHTML = "";
       statusMessage.style = "none";
       span.style = "none";
      }, 5000);
     }

    });
  });

  for (let i = 0; i < item.elements.length; i++) {
   if (item.elements[i].type.toLowerCase() === "email") {
    item.elements[i].addEventListener("keypress", (e) => {
     if (/[а-я]/ig.test(e.key)) {
      e.preventDefault();
     }
    });
   }
   //Проверка на ввод данных в поле даты
   if (item.elements[i].placeholder == "When?") {
    item.elements[i].addEventListener("keypress", (e) => {
     if (/\D/.test(e.key) && e.key != "." && e.key != "/") {
      e.preventDefault();
     }
    });
   }
   //Маска ввода номера телефона
   if (item.elements[i].id === "phone") {
    let word = ['+', '1', '(', '_', '_', '_', ')', '_', '_', '_', '-', '_', '_', '_', '_'];
    item.elements[i].setSelectionRange(word.indexOf('_'), 1);
    item.elements[i].addEventListener("keydown", function (e) {
     let input = item.elements[i];
     let reg = /\d/;
     input.value = word.join('');
     if (reg.test(e.key) && word.indexOf('_') != -1) {
      e.preventDefault();
      e.returnValue = false;
      word[word.indexOf('_')] = e.key;
      input.value = word.join('');
      if (word.indexOf('_') != -1) {
       input.setSelectionRange(word.indexOf('_') + 1, word.indexOf('_'));
      } else {
       input.setSelectionRange(word.length, word.length);
      }

      //далее проверка и действие при нажатии на Backspace
     } else if (e.keyCode == 8) {
      e.preventDefault();
      let pos = this.selectionStart;
      if (word[this.selectionStart - 1] != '-' && word[this.selectionStart - 1] != ')') {
       if (word[this.selectionStart - 1] == '+' || word[this.selectionStart - 1] == '(') {
        e.returnValue = false;
       } else {
        word[this.selectionStart - 1] = '_';
        input.value = word.join('');
        input.setSelectionRange(pos - 1, pos - 1);
       }
      } else {
       word[this.selectionStart - 2] = '_';
       input.value = word.join('');
       input.setSelectionRange(pos - 2, pos - 2);
      }
     } else {
      e.returnValue = false;
     }
    });
   }
  }
 });
}