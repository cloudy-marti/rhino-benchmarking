
function time(ms) {
    return new Date(ms).toISOString().slice(11, -1);
}

function A(v) {
    return {value: () => v};
}

function B(v) {
    return {value: () => v};
}

const ELEMS_PER_ARRAY = 1000000;
const MAX_VALUE = 100;
const NUMBER_OF_TEST = 1000;

let now = Date.now()
const INT_ARRAY = new Array(ELEMS_PER_ARRAY).fill(null).map((_,i)=>Math.floor(Math.random()*MAX_VALUE));
let then = Date.now()
let delta = then-now

print("initialization of int_array done in "+ time(delta) + " milliseconds ...");

now = Date.now()
const OBJ_ARRAY = new Array(ELEMS_PER_ARRAY).fill(null).map((_,i)=>  {
    if(i%2===0) {
        return new A(Math.floor(Math.random()*MAX_VALUE))
    } else {
        return new B(Math.floor(Math.random()*MAX_VALUE))
    }
});
then = Date.now()
delta = then - now
print("initialization of obj_array done in "+ time(delta) + " milliseconds ...")

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
    let now, then;
    for(let j = 0; j < NUMBER_OF_TEST; ++j) {
        now = Date.now();
        func(arr);
        then = Date.now();
        tests[j] = then - now;
    }
    print("Performed " + tests.length + " tests and " + arr.length + " elements.");
    print("average result = " + tests.reduce((a,b) => a+b) / tests.length + " milliseconds");
}

now = Date.now()
launch_bench(int_test, INT_ARRAY);
then = Date.now()
delta = then-now
print("Total int_array benchmark time = " + time(delta))

now = Date.now()
launch_bench(obj_test, OBJ_ARRAY);
then = Date.now()
delta = then-now
print("Total obj_array benchmark time = " + time(delta))