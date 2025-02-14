---
id: Getting Started with Cypress
tags:
  - javascript
  - testing
  - tests
  - end-to-end testing
  - component testing
---

# Why Cypress

## In a Nutshell
- Cypress is a next generation frontend tool for the modern web. 
- Cypress provides solutions for:
  - End-To-End Testing
  - Component Testing
  - Accessibility Testing
  - UI Coverage
  - etc...

## Products
- Cypress App: A free, open source, locally installed app for writing and running tests.
- Cypress Cloud: A paid service for recording tests, surfacing test results, and providing test analytics.
- UI Coverage: a paid add-on providing a visual overview of test coverage across every page and component of your app, offering clear insights into uncovered areas that everyone can understand. 
- Cypress Accessibility: A paid add-on providing accessibility checks, which helps detect barriers for people with disabilities using your application. 
- Cypress us a robust solution that can improve the quality of our application!
  - First: Cypress helps you setup and start writing tests every day while the application is being built locally. 
  - Next: After building up a suite of test and integrating cypress with your CI Provider, Cypress Cloud can record your test runs surfacing exactly what happened during the test in the Test replay. 
  - Finally: Add on Cypress Accessibility to get continuous feedback on accessibility issues and regressions, and UI Coverage to ensure you've tested every part of your application.

## Features

### Cypress App
- Time Travel: Cypress takes snapshots as your tests run. Hover over commands in the Command Log to see exactly what happened at each step.
- Debuggability: Debug directly from familiar tools like Developer Tools. 
- Automatic Waiting: Never add waits or sleeps for tests. 
  - Cypress automatically waits for commands or assertions before moving on. 
- Spies, Stubs, and Clocks: Verify and control the behavior of functions, server responses, or timers. The same functionality you love from unit testing is right at your fingertips. 
- Network Traffic Control: Easily control, stub, and test edge cases without involving your server. 
- Consistent Results: Our architecture doesn't use Selenium or WebDriver.
- Cross Browser Testing: Run tests within Firefox and Chrome-family browsers (including Edge and Electron) locally and in a Continuous Integration Pipeline.

### Cypress Cloud
- Test Replay: Record to Cypress Cloud and reply the test exactly as executed during the run for zero-configuration debugging using Test Replay.
- Smart Orchestration: Easily parallelize your test suite, rerun failed specs first with Spec Prioritization, and cancel test runs on failures with Auto Cancellation.
- Flake Detection: Discover and Diagnose Unreliable Tests.
- Branch Review: Quickly identify the impact a pull request might have on your test suite. 
- Integrations: Integrate with Github, GitLab, or BitBucket to see test results on every push or pull request.
- Test Analytics: Track test results overtime to identify trends, regressions, or improvements in your test suite.

### UI Coverage
- Visualize Coverage: UI Coverage provides a visual overview of test coverage across every page and component of the app. 
- Results API: Use the UI coverage results API to programmatically access test coverage data and integrate it into your existing workflows. 

### Cypress Accessibility
- Accessibility Checks: Maximize the value of your Cypress tests by instantly adding thousands of accessibility checks with no setup, code changes, or performance penalty.
- Run-Level reports: Get a detailed report about accessibility issues.
- Results API: Use the Results API to programmatically access the Accessibility Results in a CI environment.

## Solutions:

### End-To-End Testing
- Cypress was originally created to run E2E tests on anything that runs within a browser.
```javascript
it('adds todos', () => {
  cy.visit('https://example.cypress.io/')
  cy.get('[data-cy="new-todo"]').type('write tests{enter}')
  // confirm the application is showing one item
  cy.get('[data-cy="todos"]').should('have.length', 1)
})
```

### Component Testing
- Cypress' Component Testing provides a workbench to quickly build and test components from multiple front-end UI libraries.
```javascript
import Button from './Button'

it('uses custom text for the button label', () => {
  cy.mount(<Button>Click me!</Button>)
  // Assert that a button component has the correct text
  cy.get('button').should('contains.text', 'Click me!')
})
```

### Accessibility Testing
- Cypress tests can be written to check the accessibility of the application.
- Plugins can also be used to run broad accessibility standards.
```javascript
it('adds todos', () => {
  cy.visit('https://example.cypress.io/')
  cy.get('img#logo')
    // Assert that an image has the correct alt text
    .should('have.attr', 'alt', 'Cypress Logo')
})
```

### UI Coverage
- Increase release confidence by closing testing gaps in critical app flows. Leverage insights to cover untested areas, reduce incidents, and improve app quality.

### Other
- Cypress can also perform arbitrary HTTP calls, so it can be used for API testing.
```javascript
it('adds a todo', () => {
  cy.request('POST', '/todos', { title: 'Write API Tests' })
    .its('body')
    .should('contain', { title: 'Write API Tests' })
})
```

## Cypress in the Real Word
- Cypress comes with a pretty cool real world example in this [Github Repo](https://github.com/cypress-io/cypress-realworld-app).