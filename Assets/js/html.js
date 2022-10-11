let fs = require('fs');

class HTML {
    constructor(teamData, filePath) {
        this.file = filePath;
        this.text = "";
    }

    writeFile() {
        fs.writeFile(this.file, this.text, (err) => {console.log(err)})
    }
}

module.exports = HTML;