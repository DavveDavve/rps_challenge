const { Given, Then, When, After } = require("cucumber");

After(async function() {
    return await this.closeHomePage()
});

Given("I visit the page", async function() { 
    return await this.openHomePage()
});

Then("I should see {string}", async function(content) {
    return await this.pageHasStringContent(content)
});

Then('I should see {string}, {string}, {string}', async function (userWin, computerWin, userDraw) {
    return await this.scoreHasScoreContent(userWin, computerWin, userDraw)
});

Then("I should see a button {string}", async function(content){
    return await this.pageHasButtonContent(content)
});

When("I click on {string}", async function(btn) {
    return await this.clickOnButton(btn)
});