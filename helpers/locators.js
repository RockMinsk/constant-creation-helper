const { by, element } = require('protractor');

const LOCATOR = {
    URL : "https://www.epam.com/careers",
    LOCATION : {
        FIELD : element(by.css('.selection')),
        DROP_DOWN_MENU : element(by.css('.select-box-results')),
        ELEM_OF_DROP_DOWN_MENU : element.all(by.css('.optgroup'))
    },
    SKILLS : {
        FIELD : element(by.css('.multi-select-filter')),
        DROP_DOWN_MENU : element(by.css('.multi-select-dropdown')),
        ELEM_OF_DROP_DOWN_MENU : element.all(by.css('.multi-select-dropdown li span'))
    }
}

module.exports = LOCATOR;