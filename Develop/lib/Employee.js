//create employee object with name, id, email
const inquirer = require("inquirer");

class employee {
    constructor(name, id, email) {
        this.name = name;
        this.email = email;
        this.id = id;
        this.role = role;
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
    getRole() {
        return this.role;
    }
}

module.exports = employee;