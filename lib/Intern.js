const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name,id,email,school) {
        super(name, id, email);
        this.school = school
    }

    getSchool() {
        console.log(this.school);
    }
}

module.exports = Intern;