// Even if everything can be solved with just one function using recursion it's splitted up in more parts here

let testModule = `144475`

let modules = `144475
145308
100615
56900
128773
65519
74165
99081
141047
149128
148282
109528
55909
70885
115049
149631
52276
101944
113005
102876
64365
71178
122767
86272
139199
78631
71958
81288
70401
77582
118275
115648
91350
121735
130339
55146
137351
101940
112657
133288
81503
136812
67015
142573
125537
99231
61693
85719
80659
148431
101176
77853
108201
138945
81804
55795
141837
113490
57932
81023
76756
79023
73527
75874
63332
62055
76124
54254
68482
141113
84335
58747
84723
137564
132605
94970
50312
89127
143858
124587
52272
138039
53782
93085
83456
94432
121481
93700
114222
117849
147460
110324
75337
130464
88805
109489
71109
95625
115832
123252`

testModule = testModule.split("\n");
modules = modules.split("\n");

//Global FuelForFuelCounter
let fuelRequiredForFuelTotal = 0

/**
 * 
 * @param {Array} modules
 */

const calculateFuelRequiredTotal = (modules) => {
    let fuelRequiredTotal = null
    for (oneModule of modules) {

        let fuelForModule = calculateFuelForModule(oneModule)
        fuelRequiredTotal += fuelForModule
        
        let fuelForFuel = calculateFuelForFuel(fuelForModule)
        fuelRequiredTotal += fuelRequiredForFuelTotal
        
        // set back global FuelForFuel Counter
        fuelRequiredForFuelTotal = 0

    }
    return fuelRequiredTotal
}

// Calculates Fuel for anything
const calculateFuel = (mass) => {
    fuelRequired = Math.floor(parseInt(mass) / 3) - 2
    return fuelRequired
}

// Calculates the fuel which is required to transport the module itself
const calculateFuelForModule = (massModule) => {
    let fuelRequiredForModule = null
    fuelRequiredForModule =  calculateFuel(massModule)
    return fuelRequiredForModule
} 

// Calculates the fuel which is required to transport the fuel itsef
const calculateFuelForFuel = (fuel) => {
    fuelRequiredForFuel = calculateFuel(fuel)

    if (fuelRequiredForFuel <= 0) {
        return fuelRequiredForFuelTotal
    }

    else {
        fuelRequiredForFuelTotal += fuelRequiredForFuel
        calculateFuelForFuel(fuelRequiredForFuel)
    } 
}


// Testing
console.log("Test 1:", calculateFuelForModule([12]) === 2)
console.log("Test 2:", calculateFuelForModule([14]) === 2)
console.log("Test 3:", calculateFuelForModule([1969]) === 654)
console.log("Test 4:", calculateFuelForModule([100756]) === 33583)

console.log("-".repeat(30))

console.log("Test 5:", calculateFuelRequiredTotal([1969]) === 966)
console.log("Test 6:", calculateFuelRequiredTotal([100756]) === 50346)

console.log("-".repeat(30))

// Solutions
console.log("Fuel required to launch: (Solution II)", calculateFuelRequiredTotal(modules))
