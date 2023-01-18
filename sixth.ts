function abc(a: number, b?: number, c?: number) {}
abc(1);
abc(1, 2);
abc(1, 2, 3, 4);

function bcd(...args: number[]) {}
bcd(1);
bcd(1, 2);
bcd(1, 2, 3);
bcd(1, 2, 3, 4);

//제네릭: 지금 타입은 모르겠는데 나중에 정하고 싶을 때 사용하는 것
function add<T extends number | string, K extends string>(x: T, y: K): T {
    return x + y;
}
//add<number>(1, 2);
add(1, 2);
//add<string>("1", "2");
add("1", "2");
add(1, "2");

//리액트에서 제네릭 기본값 주는 방법
const addd = <T = unknown>(x: T, y: T) => ({ x, y });
//const addd  = <T extends unknown>(x: T, y: T) => ({x, y})
