const Manager = require("../lib/Manager")

describe("Manager", () => {
    it("should return an object containing office property when called with new keyword", () => {
        const obj = new Manager("bob",1,"email.com","Room 1");
        expect("office" in obj).toEqual(true);
    })
    // it("should return an error when called without parameters", () => {
    //     const cb = () => new Manager();
    //     const err = new Error("Must have parameters")
    //     expect(cb).toThrowError(err);
    // })
    it("should return an object containing email property when called with new keyword", () => {
        const obj = new Manager("bob",1,"email.com","username");
        expect("email" in obj).toEqual(true);
    })
    it("should return the string Manager", () => {
        const obj = new Manager("bob",1,"email.com","username");
        expect(obj.getRole()).toEqual("Manager");
    })
})