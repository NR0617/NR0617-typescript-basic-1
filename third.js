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
//cf. declare let c: number;도 가능하다 외부에서 만들어진 애들을 타입선언 할 때 declare를 사용하는 것
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
// any를 쓸 바에 unknown을 쓰자 -> any는 타입 추론을 포기하는 것, unknown을 이후에 직접 타입을 추론해주는 것
const cc = aa.talk();
cc.talk();
//unknown이 주로 사용되는 부분 -> try catch
try {
}
catch (error) {
    error.message;
    //(error as AxiosError)
}
