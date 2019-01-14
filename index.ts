class Test {
    /** Class member `hello` contains a `string`. */
    hello: string;
    /** Function that runs on class instantiation  */
    constructor() {
        this.hello = "Hello World!"
        console.log(this.hello);
    }
}

/** Instantiate class */
new Test();