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