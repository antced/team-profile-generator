const Engineer = require("../lib/Engineer")

describe("Engineer", () => {
    it("should return an object containing github property when called with new keyword", () => {
        const obj = new Engineer("bob",1,"email.com","username");
        expect("github" in obj).toEqual(true);
    })
    // it("should return an error when called without parameters", () => {
    //     const cb = () => new Engineer();
    //     const err = new Error("Must have parameters")
    //     expect(cb).toThrowError(err);
    // })
    it("should return an object containing email property when called with new keyword", () => {
        const obj = new Engineer("bob",1,"email.com","username");
        expect("email" in obj).toEqual(true);
    })
    it("should return the string Engineer", () => {
        const obj = new Engineer("bob",1,"email.com","username");
        expect(obj.getRole()).toEqual("Engineer");
    })
})