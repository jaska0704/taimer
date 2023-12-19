// let arr = [
//     {id: 1, name: "Temur", age: 23, title: "Frontend"},
//     {id: 2, name: "Bobur", age: 26, title: "Backend"},
//     {id: 3, name: "Rashid", age: 30, title: "Flutter"},
//     {id: 4, name: "Jamshid", age: 40, title: "Android"},
//     {id: 5, name: "Islom", age: 29, title: "Ios"},
//     {id: 6, name: "Islom", age: 39, title: "Bios"},
//     {id: 7, name: "Sohibjon", age: 50, title: "Devops"}
// ]

// console.log(arr.filter((item, index, arr) => item.name === "Islom"));

function TrafficLight() {
    const red = document.querySelector(".red");
    const yellow = document.querySelector(".yellow");
    const green = document.querySelector(".green");

    function Red() {
        red.style.backgroundColor = "red";
        yellow.style.backgroundColor = "rgb(93, 99, 92)";
        green.style.backgroundColor = "rgb(93, 99, 92)";
        setTimeout(Yellow, 4000)
    }
    function Yellow() {
        red.style.backgroundColor = "rgb(93, 99, 92)";
        yellow.style.backgroundColor = "yellow";
        green.style.backgroundColor = "rgb(93, 99, 92)";
        setTimeout(Green, 2000)
    }
    function Green() {
        red.style.backgroundColor = "rgb(93, 99, 92)";
        yellow.style.backgroundColor = "rgb(93, 99, 92)";
        green.style.backgroundColor = "green";
        setTimeout(Red, 4000)
    }

    Red();
}

TrafficLight();