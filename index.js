//! Callback
//TODO:=================01====================
//Напишіть дві функції
// letMeSeeYourName(callback) - запитує ім'я користувача
//через prompt та викликає callback функцію
//greet(name) - коллбек, що приймає ім'я і логірує в консоль
//Рядок "Привіт <name>"
//Реалізуй перевірку, що prompt не порожній

// function letMeSeeYourName(callback) {
//   const name = prompt("Введіть своє імя");
//   if (name === "") {
//     return alert("Введіть корректне імя");
//   }
//   callback(name);
// }

// function greet(name) {
//   console.log(`Привіт ${name}`);
// }

// letMeSeeYourName(greet);

//TODO:=================02=============================
//Напишіть дві функції
//makeProduct(name, price, callback) - приймає
//ім'я та ціну товару, а також callback.
//Функція створює об'єкт товару, додаючи йому унікальний
//ідентифікатор як id і викликає callback
//Передаючи йому створений об'єкт.
//showProduct(product) - коллбек приймаючий об'єкт
//продукту і логірующий їх у консоль

// function makeProduct(name, price, callback) {
//   const id = Date.now();
//   const product = {
//     id,
//     name,
//     price,
//   };

//   callback(product)
// }

// function showProduct({id,name,price}) {
//     console.log(`Товар з id:${id}, ${name}, ціна: ${price} грн.`);
// }

// makeProduct('iphone', 40000, showProduct)

//TODO:=================03=============================
//Напишіть функцію each(array, callback), яка
//першим параметром приймає масив, а другим - функцію,
//Яка застосовується до кожного елементу масиву.
//Функція each повинна повернути новий масив, елементами
//якого будуть результати виклику callback
//callback функції повинна множити елементи на 2

// const array = [3, 5, 6, 34, 8, 83, 12, 34];

// function each(arr, callback) {
//   let newArray = [];
//   for (const el of arr) {
//     newArray.push(callback(el));
//   }
//   return newArray;
// }

// console.log(each(array, (number) => number * 2));

//TODO:=================04=============================
// make clock

// const refs = {
//   clockItemEl: document.querySelector(".js-clock-items"),
//   startBtn: document.querySelector(".js-button-start"),
//   stopBtn: document.querySelector(".js-button-stop"),
//   clockDate: document.querySelector(".js-clock-date"),
// };

// refs.startBtn.addEventListener("click", () => {
//   startClock();
// });

// refs.stopBtn.addEventListener("click", () => {
//   stopClock();
// });

// const timeZone = (createDate().getTimezoneOffset() / 60) * -1;
// let intervalId = null;

// function showDate() {
//   const daysArray = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//   ];

//   const monthsArray = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];

//   const day = daysArray[createDate().getDay()];
//   const month = monthsArray[createDate().getMonth()];
//   const date = createDate().getDate();
//   const year = createDate().getFullYear();

//   refs.clockDate.innerHTML = `${day}, ${month} ${date}, ${year}`;
// }

// function createDate() {
//   return new Date();
// }

// function startClock() {
//   intervalId = setInterval(() => {
//     const currentTime = Date.now();

//     const { hours, minutes, seconds } = getTimeComponents(currentTime);

//     refs.clockItemEl.querySelector(".js-clock__hours").textContent =
//       addPad(hours);
//     refs.clockItemEl.querySelector(".js-clock__minutes").textContent =
//       addPad(minutes);
//     refs.clockItemEl.querySelector(".js-clock__seconds").textContent =
//       addPad(seconds);
//   }, 1000);
// }

// function stopClock() {
//   clearInterval(intervalId);
// }

// function getTimeComponents(time) {
//   let hours = Math.floor(((time / 1000 / 60 / 60) % 24) + timeZone);
//   const minutes = Math.floor(time / 1000 / 60) % 60;
//   const seconds = Math.floor(time / 1000) % 60;

//   return {
//     hours,
//     minutes,
//     seconds,
//   };
// }

// function addPad(value) {
//   return String(value).padStart(2, 0);
// }

// showDate();

//TODO:====================01==========================
/**
 * Перероби функцію на проміс таким чином, щоб проміс повертав значення
 * через 2 секунди після виклику функції
 */

// function greet() {
//     return 'hello world';
//   }

//   function greet2() {
//     new Promise((resolve, reject) => {
//         setTimeout( () => resolve('hello world'),2000)
//     }).then(console.log)
//   }
//   greet2()

//TODO:====================02==========================
//make a random choice

// const refs = {
//   input: document.querySelector(".js-choice__input"),
//   choiceContainer: document.querySelector(".js-choices__container"),
//   addChoiceBtn: document.querySelector(".js-btn-add__choice"),
//   choiceBtn: document.querySelector(".js-btn__choose"),
//   clearBtn: document.querySelector(".js-btn__clear"),
// };

// let choiceArray = [];

// let choiceIndex = 0;

// refs.addChoiceBtn.addEventListener("click", addChoice);
// refs.choiceBtn.addEventListener("click", selectChoice);
// refs.clearBtn.addEventListener("click", clearChoice);

// function addChoice() {
//   return new Promise((resolve, reject) => {
//     if (!refs.input.value) {
//       reject(new Error("Зробіть вибір"));
//     } else {
//       const div = document.createElement("div");
//       div.className = "choice";

//       div.textContent = refs.input.value;
//       refs.input.value = "";

//       refs.choiceContainer.appendChild(div);

//       choiceArray.push(div);
//       resolve();
//     }
//   }).catch((error) => alert(error.message));
// }

// function selectChoice() {
//   return new Promise((resolve, reject) => {
//     if (choiceArray.length <= 1) {
//       reject(new Error("Додайте ще вибір"));
//     } else {
//       const intervalId = setInterval(() => {
//         heightLiteRandomChoice().catch((error) => {
//           clearInterval(intervalId);
//           reject(error);
//         });
//       }, 150);

//       setTimeout(() => {
//         clearInterval(intervalId);
//         resolve();
//       }, 5000);
//     }
//   }).catch((error) => {
//     alert(error.message);
//   });
// }

// function clearChoice() {
//     return new Promise((resolve, reject) => {
//         choiceArray.forEach((choice) => choice.remove())
//         choiceArray.length = 0;
//         resolve()
//     })
// }

// function heightLiteRandomChoice() {
//   return new Promise((resolve, reject) => {
//     const randomChoiceIndex = Math.floor(Math.random() * choiceArray.length);
//     heightLiteChoice(randomChoiceIndex).then(resolve).catch(reject);
//   });
// }

// function heightLiteChoice(index) {
//   return new Promise((resolve, reject) => {
//     choiceArray[choiceIndex]?.classList.remove("highlighted");
//     choiceArray[index]?.classList.add("highlighted");
//     choiceIndex = index;
//     resolve();
//   });
// }

//TODO:====================03==========================

const BASE_URL = "https://restcountries.com/v3.1";
// фільтрація полів пошуку
const filterParams = "?fields=name,capital,population,flags,languages";

function fetchCountries(name) {
  return fetch(`${BASE_URL}/name/${name}${filterParams}`).then((response) => {
    if (!response.ok) {
      throw new Error("Такої країни не знайдено");
    }
   return response.json();
  });
}

fetchCountries("Uk")
  .then((response) => console.log(response))
  .catch((error) => console.log(error));


