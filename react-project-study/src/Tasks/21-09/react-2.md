## Task 1 — Counter with useState

**Topic:** useState, Events

**Task:**
Create a component called `Counter` that:
- Starts at 0
- Has a button “+ Add” that increases the count by 1
- Has a button “- Remove” that decreases the count by 1
- Displays the current count
- The count text turns red when below 0 and green when above 0


## Task 2 — Score Tracker

**Topic:** useState, Multiple State Variables

**Task:**
Create a component called `ScoreTracker` for a two-player game:
- Player 1 has a score starting at 0
- Player 2 has a score starting at 0
- Each player has a “+ Point” button that adds 1 to their score
- A “Reset” button resets both scores to 0
- Display whose score is higher, or “It’s a tie!” if equal

## Task 3 — Live Name Display

**Topic:** Controlled Inputs, onChange

**Task:**
Create a component called `NameInput` that:
- Has a text input field
- Stores the typed value in state
- Displays below the input: “Hello, [name]!”
- When the input is empty, shows: “Please enter your name.”

## Task 4 — Character Counter

**Topic:** Controlled Inputs, useState, Expression

**Task:**
Create a component called `CharCounter` that:
- Has a `<textarea>` input
- Displays below it: “Characters typed: [count]”
- Displays: “Characters remaining: [100 - count]” (max 100 characters)
- When the count reaches 100, the remaining text turns red