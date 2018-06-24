const { browser, by, element, protractor } = require('protractor');
const EC = protractor.ExpectedConditions;
const fs = require('fs');

class BasePage {
    constructor(url, locatorField, locatorOpenedMenu, locatorInsideElements){
        this.url = url;
        this.locatorField = locatorField;
        this.locatorOpenedMenu = locatorOpenedMenu
        this.locatorInsideElements = locatorInsideElements;
    };

    getURL() {
        browser.get(this.url);
    };

    clickElement() {
        return this.locatorField.click()
        .then(() => browser.wait(EC.visibilityOf(this.locatorOpenedMenu), 5000, 'Element is not visible'));
    };

    createFolder(dirName) {
        this.dirName = dirName || 'constants';
        if (fs.existsSync(`./${this.dirName}`) !== true ) {
            return fs.mkdir(`./${this.dirName}`);
        }
    };

    createFile_opening(fileName) {
        this.fileName = fileName || 'test_constant';
        // this.dirName = this.createFolder.dirName;
        return fs.writeFile(`./${this.dirName}/${this.fileName}.js`, //path to the file
                            `const ${this.fileName.toUpperCase()} = {\n`, // content of the file openning
                            err => { 
                                if (err) throw err;
                                console.log('File opening created')
                            });
    };

    createFile_body(fileName, text) {
        this.fileName = fileName || 'test_constant';
        this.text = text;
        return fs.appendFile(`./${this.dirName}/${this.fileName}.js`,  //path to the file
                            `\t${this.text.replace(/\W/g, '_').toUpperCase()} : '${this.text}',\n`, // content of the file body
                            err => { 
                                if (err) throw err;
                            });
    };

    createFile_closing(fileName) {
        this.fileName = fileName || 'test_constant';
        return fs.appendFile(`./${this.dirName}/${this.fileName}.js`, //path to the file
                            `};\n\nmodule.exports = ${this.fileName.toUpperCase()};`, // content of the file closing
                            err => {
                                if (err) throw err;
                                console.log('File closing created.\nFile saved completely!')
                            });
    };
};

class Get_All_Option_From_Drop_List extends BasePage {
    constructor(url, locatorField, locatorOpenedMenu, locatorInsideElements){
        super(url, locatorField, locatorOpenedMenu, locatorInsideElements);
        this.url = url || 'https://www.epam.com/careers';
        this.locatorField = locatorField || element(by.css('.selection'));
        this.locatorOpenedMenu = locatorOpenedMenu || element(by.css('.select-box-results'));
        this.locatorInsideElements = locatorInsideElements || element.all(by.css('.optgroup'));
    };

    write_CONSTANT(fileName, dirName) {
        debugger;
        this.dirName = dirName;
        this.fileName = fileName;
        return this.locatorInsideElements
            .then(items => {
                this.createFolder(this.dirName);
                this.createFile_opening(this.fileName);
                for (let i = 0; i < items.length; i++) {
                    items[i].getText()
                        .then(text => (text !== '') ? this.createFile_body(this.fileName, text) : text )
                        .then(() => {
                            if (i === items.length - 1) { this.createFile_closing(this.fileName) }
                        });
                }
            })
    };
}

module.exports = Get_All_Option_From_Drop_List;