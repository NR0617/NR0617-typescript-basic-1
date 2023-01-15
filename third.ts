type Animal = { breath: true };
type Poyuryu = Animal & { breed: true };
type Human = Poyuryu & { think: true };

const zerocho: Human = { breath: true, breed: true, think: true }; //type을 상속하는 느낌

interface A {
    breath: true;
}
interface B extends Human {
    //확장이 가능하다
    breed: true;
}

const L: B = { breath: true, breed: true, think: true };
const zerocho1: Human = { breath: true, breed: true, think: true };

interface C {
    talk: () => void;
}
interface C {
    eat: () => void;
}
interface C {
    sit: () => void;
}
const m: C = { talk() {}, eat() {}, sit() {}, sleep() {} };
//interface는 서로 합쳐지기 때문에 라이브러리에서 많이 사용한다
interface C {
    sleep: () => void;
}

//void타입을으로 정의되는 함수는 return 값이 없는 함수 -> 단 return undefined는 되고 return null은 안된다
function n(callback: () => void): void {
    return;
    //return undefined;
}

const ooo = n(() => {
    return "3"; //콜백에서 사용되는 void는 리턴값을 사용하지 않겠다는 의미
});

interface Human2 {
    talk: () => void; //메서드로 사용되는 void는 리턴 값을 사용하지 않겠다는 의미
}
const human: Human2 = {
    talk() {
        return "abc";
    },
};

//declare -> 함수를 선언한 다음 구현부를 만들기 싫을 떄 함수 앞에 declare를 선언해주세요, JS에서는 사라짐
declare function forEach(arr: number[], callback: (el: number) => void): void;

let target: number[] = [];
forEach([1, 2, 3], (el) => target.push(el));
forEach([1, 2, 3], (el) => {
    target.push(el);
});

interface AA {
    talk: () => void;
}
const aa: AA = {
    talk() {
        return 3;
    },
};
const bb = aa.talk() as unknown as number; //-> <unknown><number>로 하면 react가 잘 모르니까 as로 쓰세요
