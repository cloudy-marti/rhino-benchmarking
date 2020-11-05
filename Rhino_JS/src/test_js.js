   function I(v) {
           return {value: () => v};
       }

    const ELEMS_PER_ARRAY = 1000000;
    const MAX_VALUE = 100;
    const NUMBER_OF_TEST = 1000;

    const INT_ARRAY = new Array(ELEMS_PER_ARRAY).fill(null).map((_,i)=>Math.floor(Math.random()*MAX_VALUE));
    const OBJ_ARRAY = new Array(ELEMS_PER_ARRAY).fill(null).map((_,i)=>new I(Math.floor(Math.random()*MAX_VALUE)));

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
        let j = 0;
        for(let j = 0; j < NUMBER_OF_TEST; ++j) {
            const now = Date.now();
            func(arr);
            const then = Date.now();
            tests[j] = then - now;
        }
        console.log(tests);
        console.log(tests.reduce((a,b) => a+b) / tests.length);
    }

launch_bench(int_test, INT_ARRAY);
launch_bench(obj_test, OBJ_ARRAY);