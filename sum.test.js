const sum = require("./sum");

//inital test
test("add 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
})

//matcher statements
//to equal recursively checks every field of an array/object to compare exact equality
test("object assignments", () => {
    const data = {one: 1};
    data["two"] = 2;

    expect(data).toEqual({one: 1, two: 2});
})

//test not equals
test("adding positive numbers is not zero", () => {
    for(let a = 1; a < 10; a++){
        for(let b = 1; b < 10; b++){
            expect(a + b).not.toBe(0);
        }
    }
})

//test truthy/falsey values
test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });
  
test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
});

//more matching operators
test("2+2", () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);

    //toBe and toEqual are the same for numbers.
    expect(value).toBe(4);
    expect(value).toEqual(4);
})

test("floating point arithmetic", () => {
    const value = 0.1 + 0.2;
    //value equals 0.30...04 due to floating point maths
    
    // this would fail without the .not
    expect(value).not.toBe(0.3);

    // Expected: 0.3
    // Received: 0.30000000000000004
    
    // this will pass
    expect(value).toBeCloseTo(0.3);
})

//string matching using REGEX
test("there is no I in team", () => {
    expect("team").not.toMatch(/I/);
});

test("but there is a stop in Christoph", () => {
    expect("Christoph").toMatch(/stop/);
});

//arrays
const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk'
];

test("shopping list has milk in it", () => {
    expect(shoppingList).toContain("milk");
})

function errorThrower(){
    throw new Error("This is the error we want to throw.");
}

test("error throwing", () => {
    expect(() => errorThrower()).toThrow();
    expect(() => errorThrower()).toThrow(Error);

    //we can match on what error we expect to throw.
    expect(() => errorThrower()).toThrow("This is the error we want to throw.");
    expect(() => errorThrower()).toThrow(/error/);


})