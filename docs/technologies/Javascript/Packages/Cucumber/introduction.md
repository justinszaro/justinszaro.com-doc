---
id: Getting Started with Cucumber
tags:
  - javascript
  - testing
  - behavior-driven-development
---

# Getting Started with Cucumber
- Cucumber is a tool that support Behavior-Driven Development (BDD)

## What is Cucumber
- Cucumber reads executable specifications written in plain text and validates that the software does with the specifications say.
- The specifications consist of multiple examples or scenarios.
```txt
Scenario: Breaker guesses a word
  Given the Maker has chosen a word
  When the Breaker makes a guess
  Then the Maker is asked to score
```
- Each scenario is a list of steps.
- Cucumber verifies that the software confirms with the specification and generates a report indicating whether it was a success or a failure.
- In order to execute, they need to follow basic syntax rules called Gherkin.

## What is Gherkin
- Gherkin is a set of grammar rules that Cucumber can understand.
- Gherkin serves multiple purposes:
  - Unambiguous executable specification
  - Automated Testing Using Cucumber
  - Document how the system actually behaves.
- The grammar exists in multiple flavors for different spoken languages.
- Gherkin documents are stored in .feature text files and are normally stored in version control.

## What are step definitions?
- Step Definitions connect Gherkin to programming code. 
- A step definition carries out an action that should be performed by the step. 
- Step Definitions hard-wire the specification to the implementation. 
- These step definitions can be written in multiple languages. Here is a JS example:
```js
When('{maker} starts a game', maker => {
  maker.startGameWithWord({ word: 'whale' })
})
```