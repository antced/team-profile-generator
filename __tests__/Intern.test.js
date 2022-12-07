const Intern = require("../lib/Intern")

describe("Intern", () => {
    it("should return an object containing schooproperty when called with new keyword", () => {
        const obj = new Intern("bob",1,"email.com","university");
        expect("school" in obj).toEqual(true);
    })
    // it("should return an error when called without parameters", () => {
    //     const cb = () => new Intern();
    //     const err = new Error("Must have parameters")
    //     expect(cb).toThrowError(err);
    // })
    it("should return an object containing email property when called with new keyword", () => {
        const obj = new Intern("bob",1,"email.com","username");
        expect("email" in obj).toEqual(true);
    })
    it("should return the string Intern", () => {
        const obj = new Intern("bob",1,"email.com","username");
        expect(obj.getRole()).toEqual("Intern");
    })
})