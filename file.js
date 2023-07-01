let login = prompt('кто там?');
let passWord;
if (login ==  'Админ') {
   passWord = prompt('Введите пароль');
   if (passWord == 'Главный') {
    alert('Здравствуйте');
  } else if (passWord === null || passWord === '') {
    alert('Отменено');
  }
  else {
    alert('Неверный пароль');
  }
} 
else  if (login === null || login === ''){
    alert('Досвидания');
}
else {
    alert('Неверный логин');
}







