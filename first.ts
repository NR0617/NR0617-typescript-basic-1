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
