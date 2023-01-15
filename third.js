"use strict";
const zerocho = { breath: true, breed: true, think: true }; //type을 상속하는 느낌
const L = { breath: true, breed: true, think: true };
const zerocho1 = { breath: true, breed: true, think: true };
const m = { talk() { }, eat() { }, sit() { }, sleep() { } };
//void타입을으로 정의되는 함수는 return 값이 없는 함수 -> 단 return undefined는 되고 return null은 안된다
function n(callback) {
    return;
    //return undefined;
}
const ooo = n(() => {
    return "3"; //콜백에서 사용되는 void는 리턴값을 사용하지 않겠다는 의미
});
const human = {
    talk() {
        return "abc";
    },
};
let target = [];
forEach([1, 2, 3], (el) => target.push(el));
forEach([1, 2, 3], (el) => {
    target.push(el);
});
const aa = {
    talk() {
        return 3;
    },
};
const bb = aa.talk(); //-> <unknown><number>로 하면 react가 잘 모르니까 as로 쓰세요
