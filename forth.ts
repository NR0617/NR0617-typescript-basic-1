function numOrStr(a: number | string) {
    (a as number).toFixed(1); //-> as없으면 에러 발생 -> 따라서 unknown일때 빼고는 as를 사용하지 않는데 ->타입가드사용추천

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
    } else {
        a.toFixed(1);
    }
}
numOrStr("123");
numOrStr(1);

//class 사용할 때
class A {
    aaa() {}
}
class B {
    bbb() {}
}
function aOrB(param: A | B) {
    if (param instanceof A) {
        param.aaa();
    }
}

aOrB(new A()); //반드시 인스턴스를 넣어야 한다
aOrB(new B());

//타입 체크를 타입의 값으로 구분 or 속성으로 구분 -> 값으로 더 만이 구분한다. -> 객체에 라벨을 달아둔다고 표현

type BB = { type: "bb"; bbb: string; talk() };
type CC = { type: "cc"; ccc: string };
type DD = { type: "dd"; ddd: string };

function typeCheck(a: BB | CC | DD) {
    if (a.type === "bb" || "talk" in a) {
        a.bbb;
    } else if (a.type === "cc" || "ccc" in a) {
        a.ccc;
    } else {
        a.ddd;
    }
}
