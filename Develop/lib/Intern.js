const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school){

        super(name, id, email);
        this.school = school;   
    };

    //returns school
    getSchool() {
        return this.school;
    };

    //returns role
    getRole() {
        return "Intern";
    };
};

module.exports = Intern;