## Task 1 — Your First Component

**Topic:** JSX, Components

**Task:**
Create a component called `Greeting` that displays:
- A heading that says “Hello, React!”
- A paragraph that says “This is my first component.”

Export it and render it in `App.tsx`.

## Task 2 — Variables in JSX

**Topic:** JSX Rules, Curly Braces

**Task:**
Create a component called `ProfileCard` that:
- Declares variables for `name`, `age`, and `city`
- Displays all three using `{ }` inside JSX


## Task 3 — Math and Expressions in JSX

**Topic:** JSX Rules, Expressions

**Task:**
Create a component called `Calculator` that:
- Has two variables: `num1 = 15` and `num2 = 4`
- Displays the result of addition, subtraction, multiplication, and division
- Each result on its own line

## Task 4 — Props: Book Card

**Topic:** Props

**Task:**
Create a component called `BookCard` that receives these props:
- `title`
- `author`
- `year`

Use it in `App.tsx` three times with different books.

## Task 5 — Ternary Operator in JSX

**Topic:** JSX Rules, Conditional Expression

**Task:**
Create a component called `PassFail` that:
- Has a variable `score = 72`
- Displays “Pass” if score is 50 or above
- Displays “Fail” if score is below 50
- Also displays the score itself

## Task 6 — Button Click Alert

**Topic:** Event Handling, onClick

**Task:**
Create a component called `AlertButton` that:
- Has a button labelled “Show Message”
- When clicked, shows an alert: “Welcome to React!”
- Uses a named handler function (not an inline arrow function)

## Task 7 — Multiple Buttons

**Topic:** Event Handling, onClick, Functions

**Task:**
Create a component called `ActionButtons` that has three buttons:
- “Say Hello” — alerts “Hello!”
- “Say Goodbye” — alerts “Goodbye!”
- “Show Date” — alerts today’s date using `new Date().toDateString()`

Each button should use its own named handler function.