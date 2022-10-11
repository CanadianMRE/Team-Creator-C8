let TeamMember = require('./TeamMember')

class Manager extends TeamMember {
    constructor(name, id, email, officeNum) {
        super(name, id, email);

        this.officeNumber = officeNum;
    }
}

module.exports = Manager;