//create employee object with name, id, email
const inquirer = require("inquirer");

class employee {
    constructor(name, id, email, officeNumber, role, github, school) {
        this.name = name;
        this.email = email;
        this.id = id;
        this.role = role;
        this.officeNumber = officeNumber;
        this.github = github;
        this.school = school;
    }
    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    getId() {
        return this.id;
    }
    getGithub() {
        return this.github;
    }
    getOffice() {
        return this.officeNumber;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return "Employee";
    }
}

module.exports = employee;