# TypeScript Learning Series

# Episode 01 - Setup & Configuration

In this episode, we will set up a TypeScript project from scratch and configure it for development.

## Lessons Covered

- What is TypeScript and how it differs from JavaScript
- How to set up a TypeScript project
- How to configure TypeScript using tsconfig.json
- How to compile TypeScript code to JavaScript
- How to use watch mode for development

# Episode 02 - Type Annotations & Type Inference

In this episode, we will learn about Type Annotations & Type Inference.

## Lessons Covered

- Type Annotations vs. Type Inference Explained
- How to Write Type Annotations for Variables & Functions
- Return Type Annotations & Array Types
- Compile-time Type Checking (Real-World Analogy)
- How TypeScript Type Inference Works Under the Hood
- Intuitive Real-Life Analogy for Type Inference
- Uninitialized Variables: `let` vs. `const`
- Why Function Parameters Don't Infer (Implicit `any` Danger)
- When to Use Explicit Return Types (API Contracts & Guards)
- Flow Inference & Object Type Inference
- What is Contextual Typing in TypeScript?
- Contextual Typing with DOM Events & Arrays
- Best Practices: When to Annotate vs. When to Infer

# Episode 03 - Base Types Primitives

In this episode, we will learn about the base types in TypeScript.

## Lessons Covered

- Introduction & Why Base Types Matter
- Core Primitives: string, number, and boolean
- Primitive Types vs Wrapper Objects (string vs String)
- null vs undefined & strictNullChecks
- Handling Nullable Types, Optional Chaining & Guards
- bigint and symbol
- The any Type: Pitfalls and Use Cases
- The unknown Type: Safe Alternatives to any
- The void Return Type
- The never Type & Exhaustive Type Checks
- Hands-on Coding Tasks & Challenges
- Summary & Next Steps

## Quick Decision Guide

| Situation | Usually use |
| --- | --- |
| Text string | `string` |
| Normal JavaScript number | `number` |
| `true` / `false` | `boolean` |
| Very large exact integer | `bigint` |
| Unique primitive identity | `symbol` |
| Explicitly absent value | `null` |
| Missing / not provided | `undefined` |
| Unknown external data | `unknown` |
| Function with no useful return | `void` |
| Code path that cannot complete normally | `never` |
| Avoiding type checking | `any` — use sparingly |

## Useful Feature Comparisons

### 1. string VS. String

| Feature | `string` (Lowercase) | `String` (Uppercase) |
| --- | --- | --- |
| Type Category | Primitive | Object (Wrapper) |
| Memory Allocation | Saved directly on the stack (Highly efficient) | Stored on the heap (Higher overhead) |
| Usage Recommendation | Always use this | Avoid entirely for typing |
| Example Declaration | `let name: string = "Alice";` | `let name: String = new String("Alice");` |

### 2. any VS. unknown

| Feature | `any` | `unknown` |
| --- | --- | --- |
| What can be assigned into it? | Anything (strings, objects, functions, etc.) | Anything (strings, objects, functions, etc.) |
| What can it be assigned to? | Any other type (except `never`) | Only to `unknown` or `any` |
| Can you read properties/methods? | Yes, completely unchecked (Highly dangerous) | No, blocked until you prove the type |
| Safety Level | 🔴 Unsafe (Bypasses the compiler) | 🟢 100% Type-Safe |

### 3. void VS. any VS, never

| Type | What it actually means | Real-world example |
| --- | --- | --- |
| `void` | The function completes, but returns no useful data. | `console.log()` |
| `any` | The value could be absolutely anything. Turn off safety rules. | Migrating messy legacy JS code. |
| `never` | The value cannot exist / The code path cannot be reached. | Functions that crash or loop forever. |
