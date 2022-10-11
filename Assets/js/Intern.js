let TeamMember = require('./TeamMember')

class Intern extends TeamMember {
    constructor(name, id, email, school) {
        super(name, id, email, school);

        this.school = school;
    }
}
module.exports = Intern;