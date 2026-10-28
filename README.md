<h1 align="center">🚀 TypeScript Learning Series</h1>


## Episode 01 - Setup & Configuration

In this episode, we will set up a TypeScript project from scratch and configure it for development.

### Lessons Covered

- What is TypeScript and how it differs from JavaScript
- How to set up a TypeScript project
- How to configure TypeScript using tsconfig.json
- How to compile TypeScript code to JavaScript
- How to use watch mode for development

---

## Episode 02 - Type Annotations & Type Inference

In this episode, we will learn about Type Annotations & Type Inference.

### Lessons Covered

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

---

## Episode 03 - Base Types Primitives

In this episode, we will learn about the base types in TypeScript.

### Lessons Covered

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

---

## Episode 04 - Arrays, Tuples & Object Types

In this episode, we will learn about the Arrays, Tuples & Object Types.

### Lessons Covered

## Tuple VS. Array VS. Object Type

| Feature | Tuple | Array | Object Type |
| --- | --- | --- | --- |
| Length | Fixed (unless explicit rest flags) | Dynamic (can change sizes) | Fixed keys, arbitrary data sizing |
| Element Types | Can be completely different per slot | Uniform (or a single broad union) | Tied to unique named property keys |
| Access Method | By numerical index (`[0]`) | By numerical index (`[i]`) | By property name (`.key`) |
| Best Used For | Small, ordered, positional pairs | Infinite lists of identical things | Complex data with descriptive labels |


| Type | What it actually means | Real-world example |
| --- | --- | --- |
| `void` | The function completes, but returns no useful data. | `console.log()` |
| `any` | The value could be absolutely anything. Turn off safety rules. | Migrating messy legacy JS code. |
| `never` | The value cannot exist / The code path cannot be reached. | Functions that crash or loop forever. |

---

## Episode 05 - Type Aliases

In this episode, we will learn about the Type Aliases.

### Lessons Covered

- Introduction to Session 05
- Real-World Problem: Why We Need Flexible Types
- What are Union Types? (Syntax & Analogy)
- Common Beginner Mistake: Union Is Not Combined Types
- Type Narrowing Explained with Code Examples
- Common Beginner Mistake: Type Coercion Misunderstanding
- Literal Types: Restricting Values Beyond Primitives
- What are Type Aliases & Why Use Them?
- Practical Example: Signal Status with Type Aliases
- Variable Declarations vs. Type Aliases
- Combining Multiple Type Aliases
- Union of Object Types & Discriminated Unions
- Handling Optional Values: Union Types with Null & Undefined
- Arrays in TypeScript: Mixed Values vs. Homogeneous Unions
- Union (|) vs. Intersection (&)

---

## Episode 06 - Interfaces

In this episode, we will learn about the Interfaces.

### Lessons Covered

- Introduction: Interfaces vs Type Aliases
- Defining an Interface & Object Shape
- Similarities: Interfaces vs Type Aliases
- Key Differences: What Can They Represent?
- Extending Interfaces
- Extending Multiple Interfaces
- Can Interfaces Extend Type Aliases?
- Using Interfaces in Type Aliases (Intersections)
- Optional and Readonly Modifiers
- Using `implements` with Classes
- Compile-time vs Runtime in TypeScript
- When to Choose Interface vs Type Alias
- Practical Example: Combining Both

## Interface VS. Type Alias

| Capability | Interface | Type Alias |
| --- | --- | --- |
| Object shapes | Yes | Yes |
| Unions | Not directly | Yes |
| Literal unions | Not directly | Yes |
| Tuples | Not directly | Yes |
| Function types | Callable interface syntax | Yes |
| Generics | Yes | Yes |
| `extends` | Yes | No; use composition |
| Declaration merging | Yes | No |
| Class `implements` | Common | Compatible object-like aliases can be implemented |
