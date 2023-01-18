interface AAA {
    readonly aaa: string;
    bbb: string;
}
const aaaa: AAA = { aaa: "hello", bbb: "world" };
aaaa.aaa = "123"; //속성 실수로 바꾸는 걸 막아준다

type BBB = { [key: string]: number }; //인덱스 시그니처
const bbbb: BBB = { a: 3, b: 4, c: 5 };

type CCC = "Human" | "Mammal" | "Animal"; //참고: interface는 |랑 &가 이 안된다 type으로 할 것
type BBBB = { [key in CCC]: string };
const bbbb2: BBBB = { Human: "3", Mammal: "4", Animal: "5" }; //맵드 타입스
type BBBB2 = { [key in CCC]: CCC };
const bbbb3: BBBB2 = { Human: "Human", Mammal: "Mammal", Animal: "Animal" }; //맵드 타입스

//타입스크립트에서 클래스 사용 방법
class FF {
    //private으로 변수를 사용하는 2가지 방법 -> provate은 클래스 내부에서만 사용할 수 있는 변수를 말한다
    private a: string = "123"; //#보다는 이거를 더 권장 왜냐면 protected랑 비교가 되니까
    #b: number = 2;

    constructor(c: string, d: number = 123) {
        c = "123";
        d = 123;
        console.log(this.a);
        console.log(this.#b);
    }

    method() {}
}

type KK = FF; //클래스의 이름은 타입이 될 수 있다 이때 FF는 클래스를 가리키는게 아니라 인스턴스를 가리키는 것이다
const ff: FF = new FF("123"); //new는 인스턴스를 가리킨다
const gg: typeof FF = FF; //typeof는 type을 가리킨다

interface CCCC {
    // 인터페이스는 JS로 변환했을때 사라지지만 class는 사라지지 않는다
    readonly e: string;
    f: string;
}
abstract class DDDD implements CCCC {
    //class의 형태를 interface로 통제할 수 있다
    private e: string = "123";
    protected f: string = "world";
    public g: string = "wow";

    abstract method(): void;
    method2() {
        console.log(this.e);
        console.log(this.f);
        console.log(this.g);
    }
}
class EEEE extends DDDD {
    method() {
        console.log(this.e); //private는 상속받은 곳에서도 사용할 수 없다.
        console.log(this.f); //protected는 상속받은 곳에서는 사용할 수 있다
        console.log(this.g);
    }
}
new EEEE().e;
new EEEE().f;
new EEEE().g;

//           public     protected      private
//클래스내부       o          o              o
//인스턴스         o         x              x
//상속클래스       o          o              x
