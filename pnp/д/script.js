function checkPassword() {
    var password = prompt("Введите пароль:", "");
    if (password == "12345678") {
      window.location.href = "главная.html"; 
    } else {
      alert("Неверный пароль!");
    }
}