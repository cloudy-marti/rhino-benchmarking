
const ELEMS_PER_ARRAY = 100;
const MAX_VALUE = 100;

const INT_ARRAY = new Array(ELEMS_PER_ARRAY).fill(null).map((_,i)=>Math.floor(Math.random()*MAX_VALUE));

function int_test(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; ++i) {
        sum += arr[i];
    }
    return sum;
}

int_test(INT_ARRAY)