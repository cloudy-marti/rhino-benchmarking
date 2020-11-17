function A(v) {
    return {value: () => v};
}

function B(v) {
    return {value: () => v};
}

const ELEMS_PER_ARRAY = 100;
const MAX_VALUE = 100;

const OBJ_ARRAY = new Array(ELEMS_PER_ARRAY).fill(null).map((_,i)=>  {
    if(i%2===0) {
        return new A(Math.floor(Math.random()*MAX_VALUE))
    } else {
        return new B(Math.floor(Math.random()*MAX_VALUE))
    }
});

function obj_test(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; ++i) {
        sum += arr[i].value();
    }
    return sum;
}

obj_test(OBJ_ARRAY)