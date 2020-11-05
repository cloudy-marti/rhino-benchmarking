function A(v) {
    return {value: () => v};
}

function B(v) {
    return {value: () => v};
}

const ELEMS_PER_ARRAY = 1000000;
const MAX_VALUE = 100;
const NUMBER_OF_TEST = 1000;

let now_init = Date.now()
const INT_ARRAY = new Array(ELEMS_PER_ARRAY).fill(null).map((_,i)=>Math.floor(Math.random()*MAX_VALUE));
let then_init = Date.now()
let delta = then_init-now_init

print("initialization of int_array done in "+ delta + " milliseconds ...");

let now_obj_init = Date.now()
const OBJ_ARRAY = new Array(ELEMS_PER_ARRAY).fill(null).map((_,i)=>  {//new I(Math.floor(Math.random()*MAX_VALUE)));
    if(i%2===0) {
        return new A(Math.floor(Math.random()*MAX_VALUE))
    } else {
        return new B(Math.floor(Math.random()*MAX_VALUE))
    }
});
let then_obj_init = Date.now()
let delta_obj = then_obj_init - now_obj_init
print("initialization of obj_array done in "+ delta_obj + " milliseconds ...");

function int_test(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; ++i) {
        sum += arr[i];
    }
    return sum;
}

function obj_test(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; ++i) {
        sum += arr[i].value();
    }
    return sum;
}

function launch_bench(func, arr) {
    const tests = Array();
    for(let j = 0; j < NUMBER_OF_TEST; ++j) {
        const now = Date.now();
        func(arr);
        const then = Date.now();
        tests[j] = then - now;
    }
    print("test results with " + tests.length + " tests and " + arr.length + " elements:\n\n" + tests);
    print("average result = " + tests.reduce((a,b) => a+b) / tests.length + " milliseconds");
}

launch_bench(int_test, INT_ARRAY);
launch_bench(obj_test, OBJ_ARRAY);