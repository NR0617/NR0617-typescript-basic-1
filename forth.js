"use strict";
function numOrStr(a) {
    a.toFixed(1); //-> as없으면 에러 발생 -> 따라서 unknown일때 빼고는 as를 사용하지 않는데 ->타입가드사용추천
    //타입가드 사용방법
    if (typeof a === "number") {
        a.toFixed(1);
    }
    if (typeof a === "string") {
        a.charAt(3);
    }
    if (typeof a === "boolean") {
        //a.toString();
    }
    if (typeof a === "string") {
        a.split(",");
    }
    else {
        a.toFixed(1);
    }
}
numOrStr("123");
numOrStr(1);
//class 사용할 때
class A {
    aaa() { }
}
class B {
    bbb() { }
}
function aOrB(param) {
    if (param instanceof A) {
        param.aaa();
    }
}
aOrB(new A()); //반드시 인스턴스를 넣어야 한다
aOrB(new B());
function typeCheck(a) {
    if (a.type === "bb" && "talk" in a) {
        a.bbb;
    }
    else if (a.type === "cc" || "ccc" in a) {
        a.ccc;
    }
    else {
        a.ddd;
    }
}
function catOrDog(a) {
    //타입 판별 직접 만들기
    if (a.meow) {
        return false;
    }
    return true;
}
const x = "hello"; //{},Object는 모든 타입(단, null과 undefined는 제외)
const y = "hi";
const xx = "hi";
const yy = { hello: "world" }; //object는 지양, interface, type, class로 쓰자
const z = "hi";
