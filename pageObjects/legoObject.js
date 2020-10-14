var ageRange = require('../TestAsset/shopByArray')

var searchCommands = {
    //testing for the search bar
    search: function (browser, data) {
        this
            .maximizeWindow()
            .click('@searchButton')
            .setValue('@searchBar', [data.item, this.api.Keys.ENTER])
            .verify.containsText('@resultText', data.item)

        return this
    },
    //testing to find store
    find: function (browser) {
        this
            .maximizeWindow()
            .click('@continue')
            .click('@acceptCookie')
            .click('@findStore')
            .pause(2000)
            .verify.containsText('@message', 'Most LEGO® Stores are now open. We are complying with local regulations and safety guidelines to keep our visitors and team members safe and healthy. Please check your local store page for current business hours or call the store before you visit. Thank you for your patience and support!')
            // .moveToElement('@cityName',5,5)
            .click('@cityName')
            .setValue('@cityName', ['Boston,MA', this.api.Keys.ENTER])
            .verify.containsText('@storeResult', 'Boston,MA')

        return this
    },
    //for finding a missing lego
    miss: function (browser) {
        this
            .maximizeWindow()
            .click('@continue')
            .click('@acceptCookie')
            .moveToElement('@support', 5, 5)
            .click('@replacement')
            .click('@missingBricks')
            .click('@nextBtn')
            .setValue('@setNumberInput', ['75978', this.api.Keys.ENTER])
        for (let i = 1; i < 5; i++) {
            this
                .useXpath()
                .click(`(//*[@data-cy="brick-item-direct-add-to-bag"])[${i}]`)
        }
        this
            .verify.containsText('@bagNumber', '4')
        return this
    },

    //wishlist test
    wishlist: function (browser) {
        this
            .maximizeWindow()
            .click('@continue')
            .click('@acceptCookie')
            .click('@searchButton')
            .setValue('@searchBar', ['stranger things', this.api.Keys.ENTER])
            .click('@wishBtn')
            .pause(3000)
            .api.url('https://www.lego.com/en-us/account/wishlist')
        this
            .pause(2000)
            .verify.containsText('@title', 'The Upside Down')

        return this
    },
    //shop by test
    shopBy: function (browser) {
        this
            .maximizeWindow()
            .click('@continue')
            .click('@acceptCookie')
        for (let i = 1; i < 6; i++) {
            this
                .useXpath()
                .moveToElement('@shopByBtn', 5, 5)
                .click('@ageBtn')
                .click(`(//*[@class="MegaMenuTwoLevelsstyles__ContentWrapper-sc-17enncn-8 dDPIrd"]//*[@class="sharedstyles__SubMenuItemWithImageText-p0zpyg-14 jKoVzd"])[${i}]`)
                .verify.containsText('@agePageTitle', ageRange[i - 1])


        }
        return this
    },
    orderLimit: function (browser) {
        this
            .click('@continue')
            .click('@acceptCookie')
            .maximizeWindow()
            .click('@searchButton')
            .setValue('@searchBar', ['stranger things', this.api.Keys.ENTER])
            // .api.dismissAlert()
            // this
            .click('@upsideDown')
            .click('@increase')
            .pause(1000)
            .click('@increase')
            .pause(1000)
            .click('@increase')
            .click('@addToBagBtn')
            .pause(2000)
            .verify.containsText('@limitMessage', 'Limit exceeded')
        // .moveToElement('@myBag',5,5)
        // .click('@myBag')
        // .click('@removeBag')


        return this
    },
    ChangeReg: function (browser) {
        this

            .click('@continue')
            .maximizeWindow()
            .click('@acceptCookie')
            .click('@changeRegion')
            .click('@asiaPacific')
            .click('@australia')
            .api.url(result => {
                var pageURL = result.value
                var searchURL = pageURL.search('https://www.lego.com/en-au')
                if (searchURL !== -1) {
                    console.log('region is correct')
                }
                else {
                    console.log('region is incorrect')
                }
            })

    },
    jobSearch: function (browser) {
        this
            .maximizeWindow()
            .click('@continue')
            .click('@acceptCookie')
            .click('@legoJobs')
            .pause(1000)
            .click('@keyWord')
            .setValue('@keyWord', 'QA')
            .setValue('@country', 'USA')
            .setValue('@category', 'Information Technology')
            .click('@submitBtn')
            .getText('@jobResult', function (results) {
                console.log(results.value)
            })
        return this


    },
    navigation: function (browser) {
        this
            .maximizeWindow()
            .click('@continue')
            .click('@acceptCookie')
            .api.elements('@navBtn', result => {
                var navAmount = result.value.length
                for (let i = 1; i < navAmount + 1; i++) {
                    this
                        .useXpath()
                        .getText(`(//*[@class="QuickLinksstyles__QuickLink-vicnbr-0 dUeczH"])[${i}]`, pageText => {
                            var pageTitle = pageText.value
                            var replacePageTitle = pageTitle.replace(/-/g, ' ')
                            console.log('Page Title is:', replacePageTitle)
                            if (pageTitle === "Learn more") {
                                this
                                    .click(`(//*[@class="QuickLinksstyles__QuickLink-vicnbr-0 dUeczH"])[${i}]`)
                                    .verify.urlContains('adults-welcome', verification => {
                                        if (verification = true) {
                                            console.log('CORRECT')
                                        }
                                        else {
                                            console.log('INCORRECT')
                                        }
                                    })
                                    .api.back()
                            }
                            else {
                                this
                                    .click(`(//*[@class="QuickLinksstyles__QuickLink-vicnbr-0 dUeczH"])[${i}]`)
                                    .verify.visible(`//*[@class="breadcrumbsstyles__Wrapper-sc-15z7ihn-0 fEVsMb"]//*[contains(text(),"${replacePageTitle}")]`, verification => {
                                        if (verification = true) {
                                            console.log('CORRECT')
                                        }
                                        else {
                                            console.log('INCORRECT')
                                        }
                                    })
                                    .api.back()
                            }
                        })
                }
            })
    },
    shippingCharge: function (browser) {
        this
            .maximizeWindow()
            .click('@continue')
            .click('@acceptCookie')
            .moveToElement('@myBag', 5, 5)
            .click('@myBag')
            .click('@removeBag')
            .click('@searchButton')
            .setValue('@searchBar', ['Year of the Pig', this.api.Keys.ENTER])
            .moveToElement('@firstItem', 5, 5)
            .click('@firstItem')
            .moveToElement('@searchButton', 5, 5)
            .click('@searchButton')
            .setValue('@searchBar', ['Easter Bunny House', this.api.Keys.ENTER])
            .moveToElement('@firstItem', 5, 5)
            .click('@firstItem')
            .click('@myBag')
            .verify.containsText('@shipping', '4.95')
            .moveToElement('@searchButton', 5, 5)
            .click('@searchButton')
            .setValue('@searchBar', ['halloween hayride', this.api.Keys.ENTER])
            .moveToElement('@firstItem', 5, 5)
            .click('@firstItem')
            .moveToElement('@myBag', 10, 10)
            .pause(1000)
            .click('@myBag')
            .verify.containsText('@shipping', '6.95')
            .moveToElement('@searchButton', 5, 5)
            .click('@searchButton')
            .setValue('@searchBar', ['heartlake city park cafe', this.api.Keys.ENTER])
            .moveToElement('@firstItem', 5, 5)
            .click('@firstItem')
            .moveToElement('@myBag', 5, 5)
            .pause(1000)
            .click('@myBag')
            .verify.containsText('@shipping', 'Free')


        return this
    }
}

module.exports = {
    url: 'https://www.lego.com/en-us',
    commands: [searchCommands],
    elements: {
        //selectors for search test
        acceptCookie: 'button[data-test="cookie-banner-normal-button"]',
        searchButton: '[class="Searchstyles__SearchIcon-qaapd1-6 drKxdC"]',
        searchBar: '[class="Searchstyles__InputField-qaapd1-4 cMDEsj"]',
        resultText: 'div[class="SearchPagestyles__TextWrapper-sc-1d2gqze-2 efyiry"]',
        continue: 'button[data-test="age-gate-grown-up-cta"]',

        //selectors for finding a store  
        findStore: {
            selector: '(//span[@class="UtilityBarstyles__UtilityLinkTextWrapper-sc-1uwh8t8-4 cuVYPG"])[3]',
            locateStrategy: 'xpath'
        },
        message: '[class="c-alert c-alert--info o-media o-media--middle"]',
        cityName: '#search',
        storeResult: '[class="c-header__title u-margin-bottom-md u-type-lg"]',

        //selectors for missing piece lego
        support: {
            selector: '(//span[@class="MainBarstyles__MenuItemLabel-sc-1cg7sjw-9 fSPEDV"])[4]',
            locateStrategy: 'xpath'
        },
        replacement: {
            selector: '(//span[@class="sharedstyles__SubMenuItemWithImageText-p0zpyg-14 jKoVzd"])[7]',
            locateStrategy: 'xpath'
        },

        missingBricks: {
            selector: '(//div[@class="c-btn-wrapper__btn c-btn"])[1]',
            locateStrategy: 'xpath'
        },

        nextBtn: '[class="c-btn  c-btn--primary  c-btn--lg"]',
        setNumberInput: '#setNumber',
        bagNumber: '[class="c-bag__count"]',

        //selectors for order limit test 
        addToBagBtn: 'button[data-test="add-to-bag"]',
        increase: 'button[data-test="quantity-increase"]',
        upsideDown: {
            selector: '(//div[@class="LazyImagestyles__Container-sc-1gcjd00-0 kOAThu ProductImagestyles__ProductLazyImage-sc-1sgp7uc-1 fRBCwF"])[1]',
            locateStrategy: 'xpath'
        },
        limitMessage: '[class="ProductActionsstyles__AddToBagButtonWrapper-sc-18otgdy-8 epwwGc"]',

        //selectors for wishlist test 
        wishBtn: {
            selector: '(//span[@class="Text__BaseText-aa2o0i-0 kWjJIN WishlistButtonstyles__StyledText-d720r1-0 euKzDe"])[1]',
            locateStrategy: 'xpath'
        },
        wishcart: {
            selector: ('//a[contains(text(),"Wish list")]'),
            locateStrategy: 'xpath'
        },
        title: '[class="Productstyles__TextWrapper-sc-1q62u4w-12 eWpVBn"]',

        //selectors for lego jobs test

        legoJobs: {
            selector: '(//*[contains(text(),"LEGO Jobs")])[1]',
            locateStrategy: 'xpath'
        },
        keyWord: '#search-keyword',
        country: '#search-country',
        category: '#search-category',
        submitBtn: '[class="c-btn c-btn--primary js--search-form-submit"]',
        jobResult: '[class="c-list__item c-job-results__job c-job-result js--appended"]',


        //selectors for menu navigation
        shopByBtn: {
            selector: '(//*[@class="MainBarstyles__MenuItemLabel-sc-1cg7sjw-9 fSPEDV"])[2]',
            locateStrategy: 'xpath'
        },
        ageBtn: '[data-analytics-title="age"]',
        ageCategory: {
            selector: '//*[@class="MegaMenuTwoLevelsstyles__ContentWrapper-sc-17enncn-8 dDPIrd"]//*[@class="sharedstyles__SubMenuItemWithImageText-p0zpyg-14 jKoVzd"]',
            locateStrategy: 'xpath'
        },
        agePageTitle: '[class="InPageNavstyles__Container-iyz003-0 kFwSON"]',

        //selectors for change region
        changeRegion: '[data-di-id="di-id-efeb3d41-f51c962b"]',
        asiaPacific: '[data-di-id="di-id-31fdf904-e7c3578f"]',
        australia: '[data-di-id="di-id-849b5f33-7b9d74fb"]',
        navBtn: {
            selector: '//*[@class="QuickLinksstyles__QuickLink-vicnbr-0 dUeczH"]',
            locateStrategy: 'xpath'
        },

        //selectors for shipping charge test
        firstItem: {
            selector: '(//div[@class="ProductLeafListingstyles__ActionRow-sc-19n1otk-1 ksRvDH"])[1]',
            locateStrategy: 'xpath'
        },
        myBag: '[data-test="util-bar-cart"]',
        shipping: '[data-test="shipping-total-price"]',
        removeBag: '[title="Remove from bag"]'
    }
}
