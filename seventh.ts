//forEach 만들기

interface Arr {
    forEach(callback: (item: number | string) => void): void; //리턴값이 없기 때문에
}

const kkk: Arr = [1, 2, 3];
kkk.forEach((item) => {
    console.log(item);
});
kkk.forEach((item) => {
    console.log(item);
    return "3";
});

const lll: Arr = ["1", "2", "3"];
lll.forEach((item) => {
    console.log(item);
});
lll.forEach((item) => {
    console.log(item);
    return "3";
});

function mm(x: string | number): number {
    return 0;
}
type PP = (x: string) => number | string; //매개변수는 좁은 타입으로 리턴값은 넓은 타입으로 대입이 가능하다
let p: PP = mm;
