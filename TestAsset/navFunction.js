module.exports=function(browser){
    browser
    .useXpath()
    .getText(`(//*[@class="QuickLinksstyles__QuickLink-vicnbr-0 dUeczH"])[${i}]`,pageText=>{
        var pageTitle=pageText.value
        var replacePageTitle=pageTitle.replace(/-/g,' ')
        console.log('Page Title is:',replacePageTitle)
        if(pageTitle==="Learn more"){
            browser
                .click(`(//*[@class="QuickLinksstyles__QuickLink-vicnbr-0 dUeczH"])[${i}]`)
                .verify.urlContains('adults-welcome',verification=>{
                    if(verification=true){
                        console.log('CORRECT')
                    }
                    else{
                        console.log('INCORRECT')
                    }
                })
                .api.back()

        }
        else{
            browser
                .click(`(//*[@class="QuickLinksstyles__QuickLink-vicnbr-0 dUeczH"])[${i}]`)
                .verify.visible(`//*[@class="breadcrumbsstyles__Wrapper-sc-15z7ihn-0 fEVsMb"]//*[contains(text(),"${replacePageTitle}")]`,verification=>{
                    if(verification=true){
                        console.log('CORRECT')
                    }
                    else{
                        console.log('INCORRECT')
                    }
                })
                .api.back()


        }
    })}