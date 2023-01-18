function abc(a: number, b?: number, c?: number) {}
abc(1);
abc(1, 2);
abc(1, 2, 3, 4);

function bcd(...args: number[]) {}
bcd(1);
bcd(1, 2);
bcd(1, 2, 3);
bcd(1, 2, 3, 4);

//제네릭 사용하는 방법
function add<T>(x: T, y: T): T {
    return x + y;
}
add<number>(1, 2);
add(1, 2);
add<string>("1", "2");
add("1", "2");
add(1, "2");
