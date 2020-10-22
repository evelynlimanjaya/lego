var homePage={}
module.exports={
    before:browser=>{
        homePage=browser.page.legoObject()
        homePage.navigate()
    },
    after:browser=>{
        homePage.end()
    },
    'navigation bar test' : browser => {
        homePage
            .navigation(homePage)
    }
}