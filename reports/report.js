$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Test.feature");
formatter.feature({
  "line": 2,
  "name": "_Login Test",
  "description": "This features talks about the positive and negative login scenario\u0027s",
  "id": "-login-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Tag1"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "_Sucessful Login scenario",
  "description": "",
  "id": "-login-test;-sucessful-login-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Tag2"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am able to access magento webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I update the username as \"natarajan.ramanathan93@gmail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I update the password as \"Welcome123\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should find the magento id as \"ID: MAG003417822\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.i_am_able_to_access_magento_webpage()"
});
formatter.result({
  "duration": 66832898311,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "natarajan.ramanathan93@gmail.com",
      "offset": 26
    }
  ],
  "location": "Steps.i_update_the_username_as(String)"
});
formatter.result({
  "duration": 66354089372,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome123",
      "offset": 26
    }
  ],
  "location": "Steps.i_update_the_password_as(String)"
});
formatter.result({
  "duration": 124290844,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_click_on_the_login_button()"
});
formatter.result({
  "duration": 114730620,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ID: MAG003417822",
      "offset": 33
    }
  ],
  "location": "Steps.i_should_find_the_magento_id_as(String)"
});
formatter.result({
  "duration": 7730910458,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "_Invalid login",
  "description": "",
  "id": "-login-test;-invalid-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@Tag3"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I am able to access magento webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I update the username as \"natarajan.ramanathan93@gmail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I update the password as \"Welcome3\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should see the error message as \"Invalid login or password.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.i_am_able_to_access_magento_webpage()"
});
formatter.result({
  "duration": 66220284022,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "natarajan.ramanathan93@gmail.com",
      "offset": 26
    }
  ],
  "location": "Steps.i_update_the_username_as(String)"
});
formatter.result({
  "duration": 30999797067,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome3",
      "offset": 26
    }
  ],
  "location": "Steps.i_update_the_password_as(String)"
});
formatter.result({
  "duration": 110583797,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_click_on_the_login_button()"
});
formatter.result({
  "duration": 5142508126,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid login or password.",
      "offset": 35
    }
  ],
  "location": "Steps.i_should_see_the_error_message_as(String)"
});
formatter.result({
  "duration": 33940787537,
  "status": "passed"
});
});