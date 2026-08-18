# ITPEC Pseudo-language Specification Reference

> **Scope**: All ITPEC/PhilNITS Fundamental Information Technology Engineer (FE) exams — both Morning (Subject A) and Afternoon (Subject B).

This document is the authoritative reference used by:
- The PDF vision extraction pipeline (`pdf_vision_extractor.py`)
- The `PseudoCodeViewer` syntax highlighter
- The `AnswerGroupRenderer` for matrix-choice detection
- Any future AI prompt templates that generate or validate pseudo-code

---

## 1. Assignment

```
variable ← expression
```
- The arrow `←` (Unicode U+2190) is the **only** assignment operator.
- Never use `=`, `:=`, or `->` as assignment.

---

## 2. Arithmetic & Modulo

| Operator | Meaning |
|---|---|
| `+` | Addition |
| `-` | Subtraction |
| `×` or `*` | Multiplication |
| `÷` or `/` | Division (real) |
| `div` | Integer division (floor) |
| `mod` | Modulo (remainder) |

---

## 3. Comparison Operators

| Symbol | Meaning |
|---|---|
| `=`  | Equal to |
| `≠`  | Not equal to (U+2260) |
| `>`  | Greater than |
| `<`  | Less than |
| `≥`  | Greater than or equal (U+2265) |
| `≤`  | Less than or equal (U+2264) |

---

## 4. Boolean Operators & Literals

| Token | Meaning |
|---|---|
| `and` | Logical AND |
| `or`  | Logical OR |
| `not` | Logical NOT |
| `true` | Boolean true literal |
| `false` | Boolean false literal |

---

## 5. Type Names

| Type | Description |
|---|---|
| `integer` | Whole number (positive, negative, zero) |
| `real` | Floating-point number |
| `string` | Sequence of characters |
| `boolean` | `true` or `false` |
| `character` | Single character |
| `undefined` | No value / uninitialized |

---

## 6. Array Indexing

- **All arrays are 1-indexed** (first element is `A[1]`, not `A[0]`).
- 1-D array: `array[i]`
- 2-D array: `matrix[i, j]`  (row i, column j)
- Array of arrays: `arr[i][j]`

---

## 7. Control Flow

### 7.1 Conditionals

```
if (condition)
  ...
elseif (condition)
  ...
else
  ...
endif
```

### 7.2 For Loop

```
for (variable from start to end [step s])
  ...
endfor
```
*(Ascending by default; step defaults to 1.)*

### 7.3 While Loop

```
while (condition)
  ...
endwhile
```

### 7.4 Do-While Loop

```
do
  ...
while (condition)
```

---

## 8. Procedures and Functions

```
○ procedureName(paramType: paramName, ...)
  ...
```

- The degree symbol `○` (U+25CB) precedes every procedure/function header.
- Parameters are written as `type: name`.
- Return type is specified before the procedure name: `returnType: procedureName(...)`.

### Example

```
integer: computeGcd(integer: a, integer: b)
  integer: r
  while (b ≠ 0)
    r ← a mod b
    a ← b
    b ← r
  endwhile
  return a
```

---

## 9. Comments

| Style | Syntax |
|---|---|
| Block comment | `/* comment text */` |
| Line comment | `// comment text` |

---

## 10. Variable Declaration

Variables are typically declared at the top of a procedure:
```
integer: i, j, n
real: result
boolean: found
```

---

## 11. Fill-in-the-Blank Questions (Subject B Matrix Format)

When a pseudo-code question has blanks like `___A___`, `___B___`, `___C___`, the answer choices appear in a matrix table. Each choice row provides values for all blanks simultaneously.

In the extraction pipeline, these choices are stored with:
- `blank_a`: value for blank A
- `blank_b`: value for blank B
- `blank_c`: value for blank C
- `text`: `null`

The `AnswerGroupRenderer` detects this and switches to **Matrix Mode** (comparison table).

---

## 12. Common Exam Patterns

### Swap via temporary variable
```
temp ← A[i]
A[i] ← A[j]
A[j] ← temp
```

### Linear search
```
found ← false
i ← 1
while (i ≤ n and not found)
  if (A[i] = target) then
    found ← true
  else
    i ← i + 1
  endif
endwhile
```

### Accumulator pattern
```
sum ← 0
for (i from 1 to n)
  sum ← sum + A[i]
endfor
```

---

*Last updated: 2026-08-17 — aligned with ITPEC FE Exam official notation guide.*
