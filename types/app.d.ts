declare function test(a: number): number;
type strOrFunc = (a: number | string) => number;
declare class A {
    b: number;
    test(): () => void;
}
