const data = [
    {
        name:"John",
        age: 23
    },
    {
        name:"Mike",
        age: 25
    },
    {
        name:"Vik",
        age: 32
    },
    {
        name:"Charlie",
        age: 28
    },
    {
        name:"Sierra",
        age: 21
    },
    {
        name:"Steve",
        age: 23
    },
    {
        name:"Paul",
        age: 24
    },
    {
        name:"Logan",
        age: 31
    }
];

const info = document.querySelector("#info");
console.log(data.map((la) => la.name));
const squadList = data.map((squad) => {
    return `<div> ${squad.name} is ${squad.age} years old </div>`
})
console.log(squadList.join("\n"));

info.innerHTML = squadList.join("\n");