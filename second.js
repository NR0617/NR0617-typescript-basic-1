"use strict";
const d = { a: "hello" };
const e = { a: "hello" };
function add(x, y) {
    return x + y;
} //<-타입 이렇게 하면 안되는 이유
//union
const result = add(1, 2);
result.charAt(); //-> result가 number면 에러가 나기 때문에 add의 타입이 처음부터 잘못 지정되었다 -> 수정하세요!
add("1", "2");
add(1, "2");
const a = 1;
//type F = {hello: 'world'} & {zero: 'cho'}; <- union도 됨, 1가지 속성만 있어도 된다
const f = { hello: "world", zero: "cho" };
