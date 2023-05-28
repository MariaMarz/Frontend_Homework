// Создать кнопку и красный квадрат с размерами 200х200px. При клике на кнопку менять у квадрата цвет заднего фона на зеленый и уменьшать его до размеров 100х100px.
// let btnActive = document.createElement("btn");
// let squareRed = document.createElement("square");
// square.style.width = "200px";
// square.style.height = "200px";
// square.style.backgroundColor = "red";
// document.body.append(btnActive, squareRed)

// btn.addEventListener("click", function() {
//   square.style.backgroundColor = "green";
//   square.style.width = "100px";
//   square.style.height = "100px";
// });

// Создать кнопку и розовый квадрат с размерами 200х200px. При клике на кнопку менять цвет на синий и выводить в консоль обновленный цвет квадрата.
// let btnActive1 = document.createElement("btn");
// let squarePink = document.createElement("square");
// square.style.width = "200px";
//  square.style.height = "200px";
//  square.style.backgroundColor = "pink";
//  document.body.append(btnActive1, squarePink)


//  btn.addEventListener("click", function() {
//     square.style.backgroundColor = "blue";
//     console.log("Цвет квадрата обновлен: " + square.style.backgroundColor);
//   });

  // Создать кнопку и квадрат с размерами 150х150px. При клике на кнопку увеличивать высоту и ширину квадрата на 20px.
//   let btnActive2 = document.createElement("btn");
//    let square1 = document.createElement("square");
//    square.style.width = "150px";
//    square.style.height = "150px";
//    square.style.backgroundColor = "green";
//    document.body.append(btnActive2, square1)

//    btn.addEventListener("click", function() {
//     square.style.width = "170px";
//     square.style.height = "170px";
//    });

   // Создать кнопку и div с классом root. При клике на кнопку в div создается параграф синего цвета. Текст параграфа произвольный.
//   
// const btnParagraph = document.createElement("button")
// const divParagraph = document.createElement("div")
// divParagraph.classList.add("root")
// btnParagraph.style.backgroundColor = "green"
// btnParagraph.innerText = "Create new paragraph"
// divParagraph.style.border = "1px solid black"
// divParagraph.innerText = "Hello World!"
// document.body.append(btnParagraph, divParagraph)
// btnParagraph.addEventListener("click", function() {
//   const newParagraph = document.createElement("p")
//   newParagraph.innerText = "What a wonderful day"
//   divParagraph.append(newParagraph)
// })

// Создать кнопку и div с классом root. При клике на кнопку в div создаются по очереди параграфы синего и зеленого цветов. Первый цвет синий.
const btnParagraph = document.createElement("button")
const divParagraph = document.createElement("div")
divParagraph.classList.add("root")
btnParagraph.style.backgroundColor = "rgb(181, 177, 177)"
btnParagraph.innerText = "Click"
divParagraph.style.border = "1px solid black"
divParagraph.innerText = "Hello World!"
document.body.append(btnParagraph, divParagraph)
let isGreen = true
btnParagraph.addEventListener("click", function() {
  const newParagraph = document.createElement("p")
  newParagraph.innerText = "What a wonderful day!"
  if (isGreen) {
    newParagraph.style.backgroundColor = "green"
    divParagraph.append(newParagraph)
  } else {
    newParagraph.style.backgroundColor = "blue"
    divParagraph.append(newParagraph)
  }
  isGreen = !isGreen
})



  