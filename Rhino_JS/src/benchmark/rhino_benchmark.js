
// Load the Benchmark library and its dependencies
load('Rhino_JS/src/benchmark/api/platform.js')
load('Rhino_JS/src/benchmark/api/lodash.js')
load('Rhino_JS/src/benchmark/api/benchmark.js')

// These functions simulate two objects returning a value
// (as Rhino does not support class keyword)
function A(v) {
    return {value: () => v};
}

function B(v) {
    return {value: () => v};
}

const ARRAY_SIZE = 1000000;
const MAX_VALUE = 100;
const TEST_NUMBER = 1000;

let INT_ARRAY, OBJ_ARRAY;

// Initialize arrays with either ints or functions A|B
function init() {
    INT_ARRAY = new Array(ARRAY_SIZE).fill(null).map((_, i) => Math.floor(Math.random() * MAX_VALUE));
    OBJ_ARRAY = new Array(ARRAY_SIZE).fill(null).map((_, i) => {
        if (i % 2 === 0) {
            return new A(Math.floor(Math.random() * MAX_VALUE))
        } else {
            return new B(Math.floor(Math.random() * MAX_VALUE))
        }
    });
    print("arrays initialized...")
}

// Initialize Benchmark Suite object
const suite = new Benchmark.Suite('Rhino Benchmark',
    {
        'onStart':init()
    });

suite
    .add('intArray#loop', function() {
        let sum = 0;
        for(let i = 0; i < INT_ARRAY.length; ++i) {
            sum += INT_ARRAY[i];
        }
        return sum;
    }, {
        'minSamples':TEST_NUMBER
    })
    .add('objArray#loop', function () {
        let sum = 0;
        for(let i = 0; i < OBJ_ARRAY.length; ++i) {
            sum += OBJ_ARRAY[i].value();
        }
        return sum;
    }, {
        'minSamples':TEST_NUMBER
    })
    .on("cycle", function (event) {
        print(String(event.target));
        print(event.target.name + ' x ' + (event.target.stats.mean * 1000).toFixed(2) + ' msec (mean time)');
    })
.on("complete", function () {
    print("Test completed")
        print('Fastest is ' + this.filter('fastest').map('name'));
    })
    .run({'async': true});

