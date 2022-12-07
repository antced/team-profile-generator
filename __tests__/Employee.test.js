const Employee = require("../lib/Employee");

describe("Employee", () => {
    it("should return an object containing name property when called with new keyword", () => {
        const obj = new Employee("bob",1,"email.com");
        expect("name" in obj).toEqual(true);
    })
    // it("should return an error when called without parameters", () => {
    //     const cb = () => new Employee();
    //     const err = new Error("Must have parameters")
    //     expect(cb).toThrowError(err);
    // })
    it("should return an object containing email property when called with new keyword", () => {
        const obj = new Employee("bob",1,"email.com","username");
        expect("email" in obj).toEqual(true);
    })
    it("should return the string Employee", () => {
        const obj = new Employee("bob",1,"email.com","username");
        expect(obj.getRole()).toEqual("Employee");
    })
})
