# IT313 Laboratory 2 - Modern JavaScript ES6+

## Problem

This project is an Enrollment Eligibility Checker.

It gets the grades of the students and calculates their average.

If the average is 75 or higher, the student is PASSING.
If the average is below 75, the student is under PROBATION.

## Approach

This project uses two JavaScript files:

- `gradeUtils.js` - contains the functions for the average and passing status.
- `main.js` - contains the student data and creates the final report.

The project uses these JavaScript features:

- const
- Arrow functions
- Template literals
- Destructuring
- Spread operator
- map()
- filter()
- reduce()
- ES modules
- Promises
- async/await
- try/catch

The `getEnrollees()` function uses a Promise to get the student data.

The `map()` is used to process the students.

The `filter()` is used to separate PASSING and PROBATION students.

The `reduce()` is used to get the class average.

## Files

### gradeUtils.js

This file has two functions:

- `computeAverage()` - calculates the average grade.
- `isPassing()` - checks if the student is passing.

### main.js

This is the main file of the program.

It gets the student data, calculates the grades, checks the status, and displays the report.

## How to Run

First, make sure Node.js is installed.

Check Node.js using:

```bash 
node -v

Then run the main program using:
--- node main.js

EXPECTED OUTPUT

=== IT313 Enrollment Eligibility Report ===
Ana Cruz - Average: 87.67 - PASSING
Bea Santos - Average: 65.00 - PROBATION
Cid Ramos - Average: 94.67 - PASSING
Dex Alonzo - Average: 55.00 - PROBATION
Eli Tan - Average: 78.00 - PASSING
Class Average: 76.07
Passing: 3 / 5



Name:  Zoe H. Lampadio
Section:  IT3R2
Course: IT 313 - Mobile Programming