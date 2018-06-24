let test = require('./dropdownMenu');

describe("Create constants", () => {

    beforeAll(() => {
        // change values if you will use helper for SPA
        browser.waitForAngularEnabled(false);
        browser.ignoreSynchronization = true;
    });

    it("constants for all elements inside the drop-down menu", async () => {
        await test.getURL();
        await test.clickElement();
        await test.write_CONSTANT('country');
    });
});