let TeamMember = require('./Employee')

class Manager extends TeamMember {
    constructor(name, id, email, officeNum) {
        super(name, id, email);

        this.officeNumber = officeNum;
    }

    getRole() {
        return 'Team Manager';
    }

    getOffice() {
        return this.officeNumber;
    }
}

module.exports = Manager;