// const a: number = 5;
// function add(x: number, y: number): number { return x + y }
// const add2: (x: number, y: number) => number = (x, y) => x + y;
// const obj: { lat: number, lon: number } = { lat: 37.5, lon: 127.5 };

const head = document.querySelector("#head");
if (head) {
    head.innerHTML = "helloWorld";
    console.log(head);
}

type World = "world" | "hell"; //이후 코드에서 타입을 추천해준다 -> 코드를 정교하게 만들때 사용
const a: World = "world";

const b = `hello ${a}`;

//type Greeting = "hello World"
type Greeting = `hello ${World}`; //템플릿 문자열로 type을 넣을 수도 있다

const c: Greeting = "hello hell";

//rest parameter -> 모든 변수를 받는 방법
function rest(a: string, ...args: string[]) {
    console.log(a, args); //1, [ 2, 3]
}

rest("1", "2", "3");

const enum EDirection {
    Up = "3", //순서대로 0, 초기값 3을 지정해 줄 수 있음, 불규칙한 값을 정해줄 수도 있음, 문자열도 넣을 수 있음
    Down = "5", //1 , 순서대로 4
    Left = "4", //2 , 5
    Right = "6", //3 , 6
}

//enum은 자바스크립트로 변환했을때 코드로 남지 않음 -> 남기고 싶으면 객체로 만드세요 -> 어떻게해야할지 잘 모르겠다? 웬만하면 남기세요!
const ODirextion = {
    Up: 0,
    Down: 1,
    Left: 2,
    Right: 3,
} as const;

// 아래처럼 타입을 직접 지정해줘도 된다
// const ODirextion: { Up: 0, Down: 1, Left: 2, Right: 3 } = {
//     Up: 0,
//     Down: 1,
//     Left: 2,
//     Right: 3,
// };

const k = EDirection.Up;
const l = EDirection.Left;

const obj = { a: "123", b: "hello", c: "world" } as const;
type Key = typeof obj[keyof typeof obj];
