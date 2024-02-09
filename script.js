
let arra = [
  {
    img: "./person-1.jpeg",
    name: "Bertie Yates",
    age: 29,
    para:"its my birthday wish me good luck",
    detail:"Hey everyone, it's my birthday today! 🎉 Another year older, wiser, and full of gratitude. I'm embracing the joy, laughter, and all the wonderful surprises life brings. Thank you for being a part of my journey. Here's to celebrating another year of growth, love, and new adventures!"

  },
  {
    img: "./person-2.jpeg",
    name: "Hester Hogan",
    age: 32,
    para:"its my birthday wish me good luck",
    detail:"Hey everyone, it's my birthday today! 🎉 Another year older, wiser, and full of gratitude. I'm embracing the joy, laughter, and all the wonderful surprises life brings. Thank you for being a part of my journey. Here's to celebrating another year of growth, love, and new adventures!"

  },
  {
    img: "./person-3.jpeg",
    name: "Larry Little",
    age: 36,
    para:"its my birthday wish me good luck",
    detail:"Hey everyone, it's my birthday today! 🎉 Another year older, wiser, and full of gratitude. I'm embracing the joy, laughter, and all the wonderful surprises life brings. Thank you for being a part of my journey. Here's to celebrating another year of growth, love, and new adventures!"
  },
  {
    img: "./person-4.jpeg",
    name: "Sean Walsh",
    age: 34,
    para:"its my birthday wish me good luck",
    detail:"Hey everyone, it's my birthday today! 🎉 Another year older, wiser, and full of gratitude. I'm embracing the joy, laughter, and all the wonderful surprises life brings. Thank you for being a part of my journey. Here's to celebrating another year of growth, love, and new adventures!"

  },
  {
    img: "./person-5.jpeg",
    name: "Lola Gardner",
    age: 26,
    para:"its my birthday wish me good luck",
    detail:"Hey everyone, it's my birthday today! 🎉 Another year older, wiser, and full of gratitude. I'm embracing the joy, laughter, and all the wonderful surprises life brings. Thank you for being a part of my journey. Here's to celebrating another year of growth, love, and new adventures!"
  },
  {
    img: "./person-5.jpeg",
    name: "Lola Gardner",
    age: 26,
    para:"its my birthday wish me good luck",
    detail:"Hey everyone, it's my birthday today! 🎉 Another year older, wiser, and full of gratitude. I'm embracing the joy, laughter, and all the wonderful surprises life brings. Thank you for being a part of my journey. Here's to celebrating another year of growth, love, and new adventures!"
  },
  {
    img: "./person-5.jpeg",
    name: "Lola Gardner",
    age: 26,
    para:"its my birthday wish me good luck",
    detail:"Hey everyone, it's my birthday today! 🎉 Another year older, wiser, and full of gratitude. I'm embracing the joy, laughter, and all the wonderful surprises life brings. Thank you for being a part of my journey. Here's to celebrating another year of growth, love, and new adventures!"
  },
];

const cont = document.getElementById("section");
const conts = document.getElementById("container");

cont.innerHTML += `<h1 id="hb">${arra.length} birthdays today</h1>`;

for (let i = 0; i < arra.length; i++) {
  cont.innerHTML += `
  <div class="per">
    <img class="pic" src="${arra[i].img}" alt="image">
    <div>
      <h1>${arra[i].name}</h1>
      <p>${arra[i].age}</p>
<p id="para">${arra[i].para}.</p>
    </div>
    <div>
    <p id="detail">${arra[i].detail}</p>
    </div>
  </div>`;
}
let clearButton = '<button id="clear">Clear</button>';
cont.innerHTML += clearButton;
let backButton = '<button id="back">Back</button>';

let clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', (e) => {
  arra.length = 0;
  cont.innerHTML = "";
  cont.innerHTML = `<h1 id="hb">${arra.length} birthdays today</h1>`;
  cont.style.height = "24vh";
  conts.style.height = "40rem";
  cont.innerHTML += backButton;
});

let backBtn = document.getElementById('back');
backBtn.addEventListener('click', (e) => {

});















// cont.innerHTML+=` 
// <button id="clear">clear</button>
// `;
// clear.addEventListener("click", () => {
//   conts.style.display = "none";
// });
// let h1 = document.getElementById("heading");
