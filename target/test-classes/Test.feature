@Tag1
Feature:_Login Test
This features talks about the positive and negative login scenario's
@Tag2
Scenario:_Sucessful Login scenario
Given I am able to access magento webpage
When I update the username as "natarajan.ramanathan93@gmail.com"
And I update the password as "Welcome123"
And I click on the login button
Then I should find the magento id as "ID: MAG003417822"

@Tag3
Scenario:_Invalid login
Given I am able to access magento webpage
When I update the username as "natarajan.ramanathan93@gmail.com"
And I update the password as "Welcome3"
And I click on the login button
Then I should see the error message as "Invalid login or password."