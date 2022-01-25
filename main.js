
// Document Object Model (DOM)

// let html = document.getElementById('html'); // получить элемент по id
// let css = document.getElementById('css');
// let js = document.getElementById('js');

// console.log(html);
// console.log(css);
// console.log(js);

// let p = document.querySelector('.paraghraph');// получить элемент по селектору
// console.log(p);

// let divs = document.querySelectorAll('div'); // получить все элементы с таким селектором
// console.log(divs);

// let div = document.querySelector('div'); // получить первый элемент с таким селектором
// console.log(div);

//  let js = document.getElementById('js');
//  console.log(js.innerHTML); // получаем текст тега с таким id и выводим в консоль
//  js.innerHTML = 'Python'; // меняем текст элемента с таким id
//  console.log(js.innerHTML); // выводим в консоль измененное значение

//let div = document.getElementById('div'); // присваиваем переменной div свойства элемента  с id='div'
// console.log(div); // выводим значение переменной
// console.log(div.className); // узнаём имя класса элемента и выводим в консоль 
// div.className ='div-green'; // присваиваем новое имя класса элементу
// console.log(div.className); // узнаём имя класса элемента и выводим в консоль 
// div.classList.add('div-green'); // добавляем новый класс 
// console.log(div.classList);// выводим список классов
// div.classList.remove('div-red', 'div-green'); // удаляем класcы 
// console.log(div.classList); // выводим список классов

//--------------------------------------------------------------------------------------------------------
// let div = document.getElementById('div'); // присваиваем переменной div свойства элемента  с id='div'
// let btn = document.getElementById('btn'); // присваиваем переменной btn свойства элемента  с id='btn'

// btn.addEventListener('click', () => {
//     //console.log('click');
//     // div.classList.toggle('hide'); // если есть этот класс - удаляет его, если нет этого класса
//                                      // то добавляет его
//        div.style.fontSize = '50px'; // меняем размер шрифта по клику
//        div.style.color = 'red';     //  меняем цвет шрифта по клику                       
// });     

//5----------------------------------------------------------------------------------------------------------

// let btn = document.getElementById('btn'); // присваиваем переменной btn свойства элемента  с id='btn'

// let  showMessage= () => {
//     alert('Ты нажал на кнопку');
// }

// btn.onclick = showMessage;

// let  showMessage1= () => {
//     alert('Ты нажал на кнопку 1');
// }

// let  showMessage2= () => {
//     alert('Ты нажал на кнопку 2');
// }

// btn.addEventListener('click', () => {
//     showMessage1();
//     showMessage2();
// })

// 6-------------------------------------------------------------------------------------------------------
let div = document.querySelector('div');

let  showMessage= () => {
     alert('Hello World!');
 }

//   div.addEventListener('mouseover', showMessage); // при наведении на объект 
 div.addEventListener('mouseout', showMessage); //  при удалении курсора с объекта