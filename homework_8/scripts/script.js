//1.
// const numDiv = document.querySelector('.numbers');
// for (let i = 100; i >= 50; i -= 10) {
//   const paragraph = document.createElement('p');
//   paragraph.innerText = i;
//   numDiv.append(paragraph);
// }
// console.log(numDiv)

//2.
// const stringsArray = ['Hello', 'it', 'is', 'me'];
// const containerDiv = document.querySelector('.strings-container');
// for (let i = 0; i < stringsArray.length; i++) {
//   const paragraph = document.createElement('p');
//   paragraph.innerText = stringsArray[i];
//   containerDiv.append(paragraph);
// }

//3.
const products = [
    {
        first_name: "Maria",
        last_name: "Marz",
        age: 31,
    },
    {
        first_name: "Lui",
        last_name: "Pons",
        age: 18,
    },
    {
        first_name: "Ledy",
        last_name: "Gaga",
        age: 38,
    },
    {
        first_name: "Alex",
        last_name: "Velikanov",
        age: 43,
    },
    {
        first_name: "Catalina",
        last_name: "Marz",
        age: 3,
    }
]

const user = document.querySelector(".users_container")
for (let i = 0; i < products.length; i++) {
    const {first_name, last_name,age} = products[i]
    if (products[i].age > 18) {
      console.log(`${first_name} ${last_name} ${age} years old`)
      const pElem3 = document.createElement("p") 
      pElem3.innerText = `${first_name} ${last_name} ${age} years old` 
      user.append(pElem3)
    }
    
}
