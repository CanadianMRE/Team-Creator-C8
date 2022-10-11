let TeamMember = require('./TeamMember')

class Engineer extends TeamMember {
    constructor(name, id, email, github) {
        super(name, id, email);

        this.github = github;
    }
}
module.exports = Engineer;