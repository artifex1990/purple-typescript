function test(a: number): number {
    return a;
}

type strOrFunc = (a: number | string) => number;
// let f: strOrFunc = test;
// test.apply(undefined, [1,3]);

class A {
    b: number;

    test() {
        return function () {
            // this.b = 1;
        }
    }
}

try {

} catch(e) {
    // console.log(e.message);
}