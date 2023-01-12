type D = { a: string };
const d: D = { a: "hello" };
//const d: { d: string } = { d: "hello" }; <- 똑같은 방법

interface E {
    //상속받고 구현하는 자바의 객체치향의 개념이 포함되어 있다 -> 나중에 객체지향 공부하고 사용
    a: string;
}
const e: E = { a: "hello" };

function add(x: string | number, y: string | number): string | number {
    return x + y;
} //<-타입 이렇게 하면 안되는 이유
//union
const result: string | number = add(1, 2);
result.charAt(); //-> result가 number면 에러가 나기 때문에 add의 타입이 처음부터 잘못 지정되었다 -> 수정하세요!
add("1", "2");
add(1, "2");

type K = string & number; //<-이런 거 당연히 안됨
const a: K = 1;

type F = { hello: "world" } & { zero: "cho" }; //intersection은 모든 속성이 다 있어야 한다
//type F = {hello: 'world'} & {zero: 'cho'}; <- union도 됨, 1가지 속성만 있어도 된다

const f: F = { hello: "world", zero: "cho" };
