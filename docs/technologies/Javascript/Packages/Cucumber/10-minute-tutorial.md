---
id: Cucumber: 10 Minute Tutorial
tags:
  - javascript
  - testing
  - behavior-driven-development
  - tutorial
---

# 10-Minute Tutorial

## Creating an Empty Cucumber Project
Start by creating an empty Node.js project.
```sh
mkdir hellocucumber
cd hellocucumber
npm init --yes
```

Install Cucumber as a dev dependency:
```sh
npm install --save-dev @cucumber/cucumber
```

Add the test command to `package.json`:
```json
{
    "name": "hellocucumber",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
        "test": "cucumber-js"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "devDependencies": {
        "@cucumber/cucumber": "^11.1.1"
    }
}
```

Prepare the file structure:
```sh
mkdir features
mkdir features/step_definitions
```

Create a file called `cucumber.json` at the root of the project. Add the following:
```json
{
    "default": {
        "formatOptions": {
            "snippetInterface": "synchronous"
        }
    }
}
```

Create a file called `features/step_definitions/stepdefs.js` with the following content:
```js
const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
```

## Verify your Installation
To make sure everything is working properly, run the tests.
```sh
npm test
```
You should see the following output:
```sh
0 scenarios
0 steps
0m00.000s
```

## Write a Scenario
BDD is done in Cucumber with concrete examples that specify what we want the software to do. These scenarios are written before production code. The start of their life is called an executable specification. As production code is written, scenarios take the role as living documentation and automated tests.

Any example is called a scenario. Scenarios are defined in `.feature` files, which are stored in the `features` directory (or sub-directory)

Here is an example that `Sunday isn't Friday`

Create a file called `features/is_it_friday_yet.feature`
```
Feature: Is it Friday yet?
  Everybody wants to know when it's Friday

  Scenario: Sunday isn't Friday
    Given today is Sunday
    When I ask whether it's Friday yet
    Then I should be told "Nope"
```

The lines...
- First Line: The name of the Scenario (Should be similar to the file name)
- Second Line: The description of the scenario.
- Fourth Line: The Scenario.
- Remaining Lines: These are the steps of the scenario, which will be executed by Cucumber.

Ask cucumber to execute the scenario:
```sh
npm test
```

Cucumber will let you know that there is one undefined scenario and three undefined steps. It will also suggest snippets to define these steps:
```sh
UUU

Warnings:

1) Scenario: Sunday is not Friday # features/is_it_friday_yet.feature:4
   ? Given today is Sunday
       Undefined. Implement with the following snippet:

         Given('today is Sunday', function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });

   ? When I ask whether it's Friday yet
       Undefined. Implement with the following snippet:

         When('I ask whether it\'s Friday yet', function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });

   ? Then I should be told "Nope"
       Undefined. Implement with the following snippet:

         Then('I should be told {string}', function (string) {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });


1 scenario (1 undefined)
3 steps (3 undefined)
0m00.000s
```
For now, copy each of thes three snupped and paste them into `features/step_definitions/stepdefs.js

## See Scenario reported as pending
Running cucumber again:
```sh
P--

Warnings:

1) Scenario: Sunday is not Friday # features/is_it_friday_yet.feature:4
   ? Given today is Sunday # features/step_definitions/stepdefs.js:3
       Pending
   - When I ask whether it's Friday yet # features/step_definitions/stepdefs.js:8
   - Then I should be told "Nope" # features/step_definitions/stepdefs.js:13

1 Scenario (1 pending)
3 steps (1 pending, 2 skipped)
0m00.001s
```
Being marked as pending means they need to do something useful. 

## See scenario reported as failing
Then, do what the comments in each step definition is telling us to do.

Change the step definitions to this:
```js
const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

function isItFriday(today) {
  // We'll leave the implementation blank for now
}

Given('today is Sunday', function () {
  this.today = 'Sunday';
});

When('I ask whether it\'s Friday yet', function () {
  this.actualAnswer = isItFriday(this.today);
});

Then('I should be told {string}', function (expectedAnswer) {
  assert.strictEqual(this.actualAnswer, expectedAnswer);
});
```

Then run cucumber again
```sh
..F

Failures:

1) Scenario: Sunday is not Friday # features/is_it_friday_yet.feature:4
   ✔ Given today is Sunday # features/step_definitions/stepdefs.js:8
   ✔ When I ask whether it's Friday yet # features/step_definitions/stepdefs.js:12
   ✖ Then I should be told "Nope" # features/step_definitions/stepdefs.js:16
       AssertionError [ERR_ASSERTION]: undefined == 'Nope'
           at World.<anonymous> (/private/tmp/tutorial/hellocucumber/features/step_definitions/stepdefs.js:17:10)

1 Scenario (1 failed)
3 steps (1 failed, 2 passed)
```
Two tests should be passing, but the last one will fail.

## See scenario reported as passing
Do the bare minimum t make the scenario pass
```js
function isItFriday(today) {
    return 'Nope';
}
```
Running cucumber again:
```sh
...

1 scenario (1 passed)
3 steps (3 passed)
0m00.003s
```

## Add another failing test
The next thing to do would be to get the correct return when it is Friday. Update the `is_it_friday_yet.feature`
```
Feature: Is it Friday yet?
  Everybody wants to know when it's Friday

  Scenario: Sunday isn't Friday
    Given today is Sunday
    When I ask whether it's Friday yet
    Then I should be told "Nope"

  Scenario: Friday is Friday
    Given today is Friday
    When I ask whether it's Friday yet
    Then I should be told "TGIF"
```
Add a step definition to set `today` to Friday
```js
Given("today is Friday", function () {
  this.today = "Friday";
});
```
Running the test will cause it to fail:
```
.....F

Failures:

1) Scenario: Friday is Friday # features/is_it_friday_yet.feature:9
   ✔ Given today is Friday # features/step_definitions/stepdefs.js:8
   ✔ When I ask whether it's Friday yet # features/step_definitions/stepdefs.js:16
   ✖ Then I should be told "TGIF" # features/step_definitions/stepdefs.js:20
       AssertionError [ERR_ASSERTION]: 'Nope' == 'TGIF'
           + expected - actual

           -Nope
           +TGIF

           at World.<anonymous> (/private/tmp/tutorial/hellocucumber/features/step_definitions/stepdefs.js:21:10)

2 scenarios (1 failed, 1 passed)
6 steps (1 failed, 5 passed)
```

## Make it Pass
Update the statement to actually evaluate if today is Friday.
```js
function isItFriday(today) {
  if (today === "Friday") {
    return "TGIF";
  } else {
    return "Nope";
  }
}
```
Running the test suite:
```
......
2 scenarios (2 passed)
6 steps (6 passed)
0m00.002s
```

## Using variables and examples
Update the scenario to use variables and evaluate numerous possibilities.
Update the `is_it_friday_yet.feature` file. Note the difference between `Scenario` and `Scenario Outline`
```
Feature: Is it Friday yet?
  Everybody wants to know when it's Friday

  Scenario Outline: Today is or is not Friday
    Given today is "<day>"
    When I ask whether it's Friday yet
    Then I should be told "<answer>"

  Examples:
    | day            | answer |
    | Friday         | TGIF   |
    | Sunday         | Nope   |
    | anything else! | Nope   |
```

Replace the step definitions for `today is Sunday` and `today is Friday` with one step definition that takes the value of day as a string.
```js
const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

function isItFriday(today) {
  if (today === "Friday") {
    return "TGIF";
  } else {
    return "Nope";
  }
}

Given('today is {string}', function (givenDay) {
  this.today = givenDay;
});

When('I ask whether it\'s Friday yet', function () {
  this.actualAnswer = isItFriday(this.today);
});

Then('I should be told {string}', function (expectedAnswer) {
  assert.strictEqual(this.actualAnswer, expectedAnswer);
});
```
Running cucumber again:
```
.........

3 scenarios (3 passed)
9 steps (9 passed)
0m00.001s
```