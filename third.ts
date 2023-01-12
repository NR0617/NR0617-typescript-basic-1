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
