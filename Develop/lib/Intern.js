const employee = require("./Employee");

class intern extends employee {
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
        return "intern";
    };
};

module.exports = intern;