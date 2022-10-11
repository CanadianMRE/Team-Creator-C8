let TeamMember = require('./Employee')

class Engineer extends TeamMember {
    constructor(name, id, email, github) {
        super(name, id, email);

        this.github = github;
    }

    getGithub() {
        return `https://github.com/${this.github}`;
    }

    getRole() {
        return 'Engineer';
    }
}
module.exports = Engineer;