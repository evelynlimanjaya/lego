var homePage = {}
var useArray = require('../TestAsset/legoArray')
module.exports = {
    beforeEach: browser => {
        homePage = browser.page.legoObject()
        homePage
            .navigate()

    },
    after: browser => {
        homePage
            .end()
    },
    'search bar test': browser => {
        homePage
            .click('@continue')
            .click('@acceptCookie')
        useArray.forEach(test => (
            homePage
                .search(homePage, test)

        ))

    },
    'find a store test': browser => {
        homePage
            .find(homePage, test)

    },
    'support test': browser => {
        homePage
            .miss(homePage)
    },
    'shop by test': browser => {
        homePage
            .shopBy(homePage)

    },
    'wish list test': browser => {
        homePage
            .wishlist(homePage)
    },
    'order limit test': browser => {
        homePage
            .orderLimit(homePage)

    },
    'changing region test': browser => {
        homePage
            .ChangeReg(homePage)
    },
    'lego job test' : browser => {
        homePage
            .jobSearch(homePage)
    },
    'navigation bar test' : browser => {
        homePage
            .navigation(homePage)
    },
    'shipping charge test' : browser => {
        homePage
            .shippingCharge(homePage)
    }
}