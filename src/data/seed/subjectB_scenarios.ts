import { SubjectBScenario } from '../../types/exam';

export const SEED_SUBJECT_B_SCENARIOS: SubjectBScenario[] = [
  {
    scenarioId: 'pm-2024-scen01',
    title: 'Subject B: Array Manipulation & Euclidean GCD Algorithm',
    examYear: 2024,
    domain: 'Algorithms & Data Structures',
    contextMarkdown: `
### Scenario Description
The ITPEC examination Subject B evaluates algorithmic execution and state tracking using the official ITPEC pseudo-programming language standard.

Below is an implementation of the Euclidean algorithm designed to compute the Greatest Common Divisor (GCD) of two positive integers using a iterative loop.

Note that in ITPEC Pseudocode:
- Arrays use **1-based indexing** (\`array[1]\` is the first element).
- Assignment is performed with the leftwards arrow operator (\`←\`).
- Variable types are declared explicitly (\`integer: a, b, temp\`).

#### ITPEC Pseudocode Specification
\`\`\`text
integer: compute_gcd(integer: x, integer: y)
  integer: a, b, r
  a ← x
  b ← y
  while (b ≠ 0)
    r ← a mod b
    a ← b
    b ← r
  endwhile
  return a
\`\`\`
`,
    subQuestions: [
      {
        questionId: 'pm-2024-q1-1',
        questionNumber: 1,
        prompt: 'What value is returned when `compute_gcd(48, 18)` is executed?',
        options: ['2', '6', '12', '18'],
        correctIndex: 1,
        explanation: 'Iteration 1: a=48, b=18 -> r = 48 mod 18 = 12, a=18, b=12. Iteration 2: r = 18 mod 12 = 6, a=12, b=6. Iteration 3: r = 12 mod 6 = 0, a=6, b=0. Loop terminates. Returns a = 6.',
        requiresPseudocode: true,
        pseudocodeBlock: `integer: compute_gcd(integer: x, integer: y)
  integer: a, b, r
  a ← x
  b ← y
  while (b ≠ 0)
    r ← a mod b
    a ← b
    b ← r
  endwhile
  return a`,
        traceTableSpec: {
          variables: ['Step / Iteration', 'a', 'b', 'r (a mod b)'],
          rows: [
            { step: 0, lineNo: 4, expectedValues: { 'Step / Iteration': 'Initial', 'a': 48, 'b': 18, 'r (a mod b)': '-' } },
            { step: 1, lineNo: 6, expectedValues: { 'Step / Iteration': 'Loop 1', 'a': 18, 'b': 12, 'r (a mod b)': 12 } },
            { step: 2, lineNo: 6, expectedValues: { 'Step / Iteration': 'Loop 2', 'a': 12, 'b': 6, 'r (a mod b)': 6 } },
            { step: 3, lineNo: 6, expectedValues: { 'Step / Iteration': 'Loop 3', 'a': 6, 'b': 0, 'r (a mod b)': 0 } }
          ]
        }
      },
      {
        questionId: 'pm-2024-q1-2',
        questionNumber: 2,
        prompt: 'How many iterations of the `while` loop are executed when computing `compute_gcd(105, 35)`?',
        options: ['1 iteration', '2 iterations', '3 iterations', '4 iterations'],
        correctIndex: 0,
        explanation: 'Iteration 1: a=105, b=35 -> r = 105 mod 35 = 0, a=35, b=0. Loop condition (b != 0) is false next check. Exactly 1 iteration is executed.',
        requiresPseudocode: true,
        pseudocodeBlock: `while (b ≠ 0)
  r ← a mod b
  a ← b
  b ← r
endwhile`
      }
    ]
  },
  {
    scenarioId: 'pm-2024-scen02',
    title: 'Subject B: Stack Manipulation & One-Based Array Traversal',
    examYear: 2024,
    domain: 'Data Structures & Memory',
    contextMarkdown: `
### Scenario Description
A Stack data structure is implemented using a 1-based fixed-size array \`stack[1..5]\` and an integer pointer \`top\` initialized to 0.

#### Stack Operations:
- \`push(val)\`: Increments \`top\` by 1 and assigns \`stack[top] ← val\`.
- \`pop()\`: Assigns \`val ← stack[top]\`, decrements \`top\` by 1, and returns \`val\`.

\`\`\`text
integer [1..5]: stack
integer: top ← 0

procedure: test_stack()
  push(10)
  push(20)
  push(30)
  pop()
  push(40)
endprocedure
\`\`\`
`,
    subQuestions: [
      {
        questionId: 'pm-2024-q2-1',
        questionNumber: 1,
        prompt: 'After `test_stack()` completes, what are the contents of `stack[1..3]` and the value of `top`?',
        options: [
          'stack = [10, 20, 40], top = 3',
          'stack = [10, 30, 40], top = 3',
          'stack = [10, 20, 30], top = 4',
          'stack = [40, 20, 10], top = 3'
        ],
        correctIndex: 0,
        explanation: '1. push(10): stack[1]=10, top=1. 2. push(20): stack[2]=20, top=2. 3. push(30): stack[3]=30, top=3. 4. pop(): top=2. 5. push(40): stack[3]=40, top=3. Result: stack[1..3] = [10, 20, 40], top = 3.',
        requiresPseudocode: true,
        pseudocodeBlock: `procedure: test_stack()
  push(10)
  push(20)
  push(30)
  pop()
  push(40)
endprocedure`,
        traceTableSpec: {
          variables: ['Operation', 'top', 'stack[1]', 'stack[2]', 'stack[3]'],
          rows: [
            { step: 1, lineNo: 2, expectedValues: { 'Operation': 'push(10)', 'top': 1, 'stack[1]': 10, 'stack[2]': '-', 'stack[3]': '-' } },
            { step: 2, lineNo: 3, expectedValues: { 'Operation': 'push(20)', 'top': 2, 'stack[1]': 10, 'stack[2]': 20, 'stack[3]': '-' } },
            { step: 3, lineNo: 4, expectedValues: { 'Operation': 'push(30)', 'top': 3, 'stack[1]': 10, 'stack[2]': 20, 'stack[3]': 30 } },
            { step: 4, lineNo: 5, expectedValues: { 'Operation': 'pop()', 'top': 2, 'stack[1]': 10, 'stack[2]': 20, 'stack[3]': 30 } },
            { step: 5, lineNo: 6, expectedValues: { 'Operation': 'push(40)', 'top': 3, 'stack[1]': 10, 'stack[2]': 20, 'stack[3]': 40 } }
          ]
        }
      }
    ]
  }
];
