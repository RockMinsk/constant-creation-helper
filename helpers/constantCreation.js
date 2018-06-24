const Test = require('./dropdownMenu');
const EL = require('./locators');

describe("Create constants", () => {

    beforeAll(() => {
        // change values if you will use helper for SPA
        browser.waitForAngularEnabled(false);
        browser.ignoreSynchronization = true;
    });

    it("constants for all elements from the 'Location' drop-down menu", async () => {
        const test = new Test(EL.URL,
                              EL.LOCATION.FIELD,
                              EL.LOCATION.DROP_DOWN_MENU,
                              EL.LOCATION.ELEM_OF_DROP_DOWN_MENU);
        await test.getURL();
        await test.clickElement();
        await test.write_CONSTANT('country');
    });

    it("constants for all elements from the 'Skills' drop-down menu", async () => {
        const test = new Test(EL.URL,
                              EL.SKILLS.FIELD,
                              EL.SKILLS.DROP_DOWN_MENU,
                              EL.SKILLS.ELEM_OF_DROP_DOWN_MENU);
        await test.getURL();
        await test.clickElement();
        await test.write_CONSTANT('skills');
    });

});