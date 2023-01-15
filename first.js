"use strict";
// const a: number = 5;
// function add(x: number, y: number): number { return x + y }
// const add2: (x: number, y: number) => number = (x, y) => x + y;
// const obj: { lat: number, lon: number } = { lat: 37.5, lon: 127.5 };
const head = document.querySelector("#head");
if (head) {
    head.innerHTML = "helloWorld";
    console.log(head);
}
const a = "world";
const b = `hello ${a}`;
const c = "hello hell";
//rest parameter -> 모든 변수를 받는 방법
function rest(a, ...args) {
    console.log(a, args); //1, [ 2, 3]
}
rest("1", "2", "3");
//enum은 자바스크립트로 변환했을때 코드로 남지 않음 -> 남기고 싶으면 객체로 만드세요 -> 어떻게해야할지 잘 모르겠다? 웬만하면 남기세요!
const ODirextion = {
    Up: 0,
    Down: 1,
    Left: 2,
    Right: 3,
};
// 아래처럼 타입을 직접 지정해줘도 된다
// const ODirextion: { Up: 0, Down: 1, Left: 2, Right: 3 } = {
//     Up: 0,
//     Down: 1,
//     Left: 2,
//     Right: 3,
// };
const k = "3" /* EDirection.Up */;
const l = "4" /* EDirection.Left */;
const obj = { a: "123", b: "hello", c: "world" };
