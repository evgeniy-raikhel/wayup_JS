 
 // Циклы

// 3 главных состовляющих любого цикла :
   // - начало
   // - условие
   // - шаг

 // WHILE

// let i = 0;
// while (i < 20) {
//    i++;  //аналогична записи i = i + 1;
//    //i--; аналогична записи i = i - 1;
//    console.log(i);
// }

// DO WHILE
// применяется тогда когда нужно чтобы цикл выполнился хотя бы раз

// let x = 0;
// do {
//    x++;
//    console.log('Hello world');
// } while (x <= 15)

//FOR

// for(let i = 0; i < 5; i++) {
//    console.log(i);
// }

// Objects

/*
model:BMW
country: Germany
year: 2010
color: red
*/

// let carBmw = {
//    model:'BMW',
//    country: 'Germany',
//    year: 2010,
//    color: 'red',  
// };

// let carLada = {
//    model:'Kalina',
//    country: 'Russia',
//    year: 2005,
//    color: 'blue',  
// };

// console.log(carBmw.country); // выводим в консоль значение ключа
// console.log(carLada.country);

// let yearBmw = carBmw.year; //присваиваем переменной значение ключа
// console.log(yearBmw);

// carLada.year = 2010; // меняем значение ключа
// console.log(carLada.year);

// carLada.passengers = 4;  // добавляем новый ключ в объект
// console.log(carLada); // выводим в консоль все данные объекта
// console.log(carLada.passengers);

// Массивы (Array)

// let colors = ['green', 'blue','orange','black','white']; // массив строк
// let results = [337, 455, 6556, 9]; // массив чисел
// let answers = [true, false, true, false, true, false, true]; // массив логических значений
// let objects = [
//    {
//       id: 1,
//       firstName: 'Sergey'
//    },
//    {
//       id: 2,
//       firstName: 'Ivan'
//    },
//    {
//       id: 3,
//       firstName: 'Maria'
//    }
// ]; // массив объектов
// console.log(colors); // выводим в консоль все значения массива
// console.log(colors[0]); // выводим значение переменной массива с индексом 0
// colors[0] = 'pink'; // присваиваем новое значение элементу массива с индексом 0 
// console.log(colors);
// console.log(colors[0]);
// let students = ['Петров',  'Алексеев', 'Иванов', 'Демин','Яблочкин', 'Оленьева', 'Петров', 'Алексеев', 'Иванова', 'Оленьев', 'Яблоков', 'Козлов'];
// console.log(students.length);
// console.log(answers.length);
// console.log(objects.length);

// Functions Функции

let boyName = 'Дмитрий';
let boyYearOld = 20;

if (boyYearOld > 18) {
   console.log(boyName + ' идет в армию ');
} else {
   console.log(boyName + ' продолжает ходить на дискотеки');
}

 boyName = 'Алексей';
 boyYearOld = 17;

if (boyYearOld > 18) {
   console.log(boyName + ' идет в армию ');
} else {
   console.log(boyName + ' продолжает ходить на дискотеки');
}

 boyName = 'Михаил';
 boyYearOld = 24;

if (boyYearOld > 18) {
   console.log(boyName + ' идет в армию ');
} else {
   console.log(boyName + ' продолжает ходить на дискотеки');
}

// новое объявление функции
let showMessage = () => {
   console.log('Это сообщение из тела функции showMessage');
}
showMessage();
showMessage();
// старое объявление функции
function showMessage2() {
    console.log('Это сообщение из тела функции showMessage2');
}

showMessage2();

let chekAge = (name, age) => {
    if (age > 18) {
        console.log(name + ' идет в армию ');
    } else {
        console.log(name + ' продолжает ходить на дискотеки');
   }
}

chekAge('Андрей', 24);
chekAge('Евгений', 18);

// Функция которая возвращает результат суммирования чисел
let sum = (x, y) => {
  return x + y;
}

let result = sum (3, 4);
console.log(result);