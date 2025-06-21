// //1
// let divBtn = document.querySelector(".divBtn");

// divBtn.addEventListener('click', (event) => {
//     console.log(event.type);
//     console.log(event.target);
//     console.log(event.currentTarget);
// });

// //1.1
// document.addEventListener('keydown', event => {
//     console.log(event.key);
//     console.log(event.code);
// });

// // document.addEventListener('keyup', event => {
// // console.log(event);

// // });

// //2
// let testDiv = document.querySelector(".testDiv");
// testDiv.addEventListener('mousedown', (event) => {
//     console.log("You've press mouse");

// });

// testDiv.addEventListener('mouseover', (event) => {
//     console.log("Element has been hovered");

// });

// testDiv.addEventListener('mouseout', (event) => {
//     console.log("Element has been outed");

// });

//3
let box = document.querySelector("#box");
let left = 0;
let up = 0;
let steps = 10;

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        left -= steps;
        box.style.left = left + 'px';
    } else if (event.key === 'ArrowRight') {
        left += steps;
        box.style.left = left + 'px';
    } else if (event.key === 'ArrowUp') {
        up -= steps;
        box.style.top = up + 'px';
    } else if (event.key === 'ArrowDown') {
        up += steps;
        box.style.top = up + 'px';
    }
});