# lego
Lego Test: Summary Report 

As a group we decided to test Lego.com retail website.  We identified key features to test and decided which functions were important.  The tests we did are as follows:

Search bar (Passed)
We are testing the major function of the search bar. By entering a keyword, the app is searching for results and our test is to verify the accuracy of the result. We wrote automation scripts for this test. By using an array, we are able to search multiple times with different keywords. The test went well and all assertions ran successfully. The search engine is working well. 
Find a store (Passed)
In the Find a store section, we will verify the 'COVID safety guideline' message, then use the find a store function to search for any lego stores. The test went well and we used automation scripts and we were able to use the find a store feature and have it pull up appropriate results with all of assertions passing.
Support (Passed)
Using the Support section, we are testing the customer service section to find a lego piece. We used automation scripts to run this test. We were able to find specific lego pieces after entering in all the required information and all of our assertions passed.
Shop By (Passed)
In the Shop By test, we test the navigation function of the age category in this section. We used automation scripts to run this test. Each page is redirected to the corresponding age group successfully, and our automation verified the page title as well. The test ran successfully. 
Navigation bar (Passed)
We are testing the navigation bar of "New", "Exclusives", "Offers", "Learn More", "Dots", "Sustainability", "Pick a Brick", "Vip" and make sure they are navigated to the right page. Automation was used to run this test. The automation went through all the menus and verified that it directed to the correct page with all the assertions passing.
Wishlist (Passed)
We are testing the wish list function, if users can use the wish list without logging in. This test used automated scripts by clicking on an item and adding it to the wishlist then clicking on the wishlist to verify that it was added and this was done without logging in to an account. The test went well with all assertions passing.
Order limit (Passed)
Testing if we can exceed the order limit on selected items. This test used automated scripts and clicked on an item and tried to exceed the order limit. We could not go over the order limit and received an exceeded order limit message. All assertions passed.
Shipping charge (Passed)
We used boundary testing for this section. There is a boundary table attached on trello. We also incorporated the search bar in this test. We tested and verified the shipping charge with different cart totals. All assertions passed. 
Lego Jobs section (Passed)
In the jobs section, we are using the search by and the filter to look for jobs. This is done by automation scripts. We specifically look for QA jobs in the USA. We also had our automation print out the job result after the test ran. With some exploratory testing, we are able to search for jobs without using the filter or entering any keywords. 
Change region (Passed)
In this section we are testing the webpage’s ability to change regions. We are using automation scripts for this test. The automation changed the region to australia and verified the new url. It also prints a result whether or not the region is changed.

Issues 
There was a pop up on the website that came up randomly in different places on the website and it affected nearly all of our tests as we ran them.  This is the most challenging of the issues, and still persists and affects our automation.
In every automated test we wrote we had to add two click commands that took care of the accept cookies pop up and the continue to site pop up
We had to add a maximize window in all of our tests because the selectors would be different based on the size of the window.

Overall, we are impressed by the design and function of the website.
