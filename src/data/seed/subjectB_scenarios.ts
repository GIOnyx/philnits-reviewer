import { SubjectBScenario } from '../../types/exam';

export const SEED_SUBJECT_B_SCENARIOS: SubjectBScenario[] = [
  {
    "scenarioId": "pm-2024-scen01",
    "title": "Subject B: Array Manipulation & Euclidean GCD Algorithm",
    "examYear": 2024,
    "domain": "Algorithms & Data Structures",
    "contextMarkdown": "\n### Scenario Description\nThe ITPEC examination Subject B evaluates algorithmic execution and state tracking using the official ITPEC pseudo-programming language standard.\n\nBelow is an implementation of the Euclidean algorithm designed to compute the Greatest Common Divisor (GCD) of two positive integers using a iterative loop.\n\nNote that in ITPEC Pseudocode:\n- Arrays use **1-based indexing** (`array[1]` is the first element).\n- Assignment is performed with the leftwards arrow operator (`←`).\n- Variable types are declared explicitly (`integer: a, b, temp`).\n\n#### ITPEC Pseudocode Specification\n```text\ninteger: compute_gcd(integer: x, integer: y)\n  integer: a, b, r\n  a ← x\n  b ← y\n  while (b ≠ 0)\n    r ← a mod b\n    a ← b\n    b ← r\n  endwhile\n  return a\n```\n",
    "subQuestions": [
      {
        "questionId": "pm-2024-q1-1",
        "questionNumber": 1,
        "prompt": "What value is returned when `compute_gcd(48, 18)` is executed?",
        "options": [
          "2",
          "6",
          "12",
          "18"
        ],
        "correctIndex": 1,
        "explanation": "Iteration 1: a=48, b=18 -> r = 48 mod 18 = 12, a=18, b=12. Iteration 2: r = 18 mod 12 = 6, a=12, b=6. Iteration 3: r = 12 mod 6 = 0, a=6, b=0. Loop terminates. Returns a = 6.",
        "requiresPseudocode": true,
        "pseudocodeBlock": "integer: compute_gcd(integer: x, integer: y)\n  integer: a, b, r\n  a ← x\n  b ← y\n  while (b ≠ 0)\n    r ← a mod b\n    a ← b\n    b ← r\n  endwhile\n  return a",
        "traceTableSpec": {
          "variables": [
            "Step / Iteration",
            "a",
            "b",
            "r (a mod b)"
          ],
          "rows": [
            {
              "step": 0,
              "lineNo": 4,
              "expectedValues": {
                "Step / Iteration": "Initial",
                "a": 48,
                "b": 18,
                "r (a mod b)": "-"
              }
            },
            {
              "step": 1,
              "lineNo": 6,
              "expectedValues": {
                "Step / Iteration": "Loop 1",
                "a": 18,
                "b": 12,
                "r (a mod b)": 12
              }
            },
            {
              "step": 2,
              "lineNo": 6,
              "expectedValues": {
                "Step / Iteration": "Loop 2",
                "a": 12,
                "b": 6,
                "r (a mod b)": 6
              }
            },
            {
              "step": 3,
              "lineNo": 6,
              "expectedValues": {
                "Step / Iteration": "Loop 3",
                "a": 6,
                "b": 0,
                "r (a mod b)": 0
              }
            }
          ]
        }
      },
      {
        "questionId": "pm-2024-q1-2",
        "questionNumber": 2,
        "prompt": "How many iterations of the `while` loop are executed when computing `compute_gcd(105, 35)`?",
        "options": [
          "1 iteration",
          "2 iterations",
          "3 iterations",
          "4 iterations"
        ],
        "correctIndex": 0,
        "explanation": "Iteration 1: a=105, b=35 -> r = 105 mod 35 = 0, a=35, b=0. Loop condition (b != 0) is false next check. Exactly 1 iteration is executed.",
        "requiresPseudocode": true,
        "pseudocodeBlock": "while (b ≠ 0)\n  r ← a mod b\n  a ← b\n  b ← r\nendwhile"
      }
    ]
  },
  {
    "scenarioId": "pm-2024-scen02",
    "title": "Subject B: Stack Manipulation & One-Based Array Traversal",
    "examYear": 2024,
    "domain": "Data Structures & Memory",
    "contextMarkdown": "\n### Scenario Description\nA Stack data structure is implemented using a 1-based fixed-size array `stack[1..5]` and an integer pointer `top` initialized to 0.\n\n#### Stack Operations:\n- `push(val)`: Increments `top` by 1 and assigns `stack[top] ← val`.\n- `pop()`: Assigns `val ← stack[top]`, decrements `top` by 1, and returns `val`.\n\n```text\ninteger [1..5]: stack\ninteger: top ← 0\n\nprocedure: test_stack()\n  push(10)\n  push(20)\n  push(30)\n  pop()\n  push(40)\nendprocedure\n```\n",
    "subQuestions": [
      {
        "questionId": "pm-2024-q2-1",
        "questionNumber": 1,
        "prompt": "After `test_stack()` completes, what are the contents of `stack[1..3]` and the value of `top`?",
        "options": [
          "stack = [10, 20, 40], top = 3",
          "stack = [10, 30, 40], top = 3",
          "stack = [10, 20, 30], top = 4",
          "stack = [40, 20, 10], top = 3"
        ],
        "correctIndex": 0,
        "explanation": "1. push(10): stack[1]=10, top=1. 2. push(20): stack[2]=20, top=2. 3. push(30): stack[3]=30, top=3. 4. pop(): top=2. 5. push(40): stack[3]=40, top=3. Result: stack[1..3] = [10, 20, 40], top = 3.",
        "requiresPseudocode": true,
        "pseudocodeBlock": "procedure: test_stack()\n  push(10)\n  push(20)\n  push(30)\n  pop()\n  push(40)\nendprocedure",
        "traceTableSpec": {
          "variables": [
            "Operation",
            "top",
            "stack[1]",
            "stack[2]",
            "stack[3]"
          ],
          "rows": [
            {
              "step": 1,
              "lineNo": 2,
              "expectedValues": {
                "Operation": "push(10)",
                "top": 1,
                "stack[1]": 10,
                "stack[2]": "-",
                "stack[3]": "-"
              }
            },
            {
              "step": 2,
              "lineNo": 3,
              "expectedValues": {
                "Operation": "push(20)",
                "top": 2,
                "stack[1]": 10,
                "stack[2]": 20,
                "stack[3]": "-"
              }
            },
            {
              "step": 3,
              "lineNo": 4,
              "expectedValues": {
                "Operation": "push(30)",
                "top": 3,
                "stack[1]": 10,
                "stack[2]": 20,
                "stack[3]": 30
              }
            },
            {
              "step": 4,
              "lineNo": 5,
              "expectedValues": {
                "Operation": "pop()",
                "top": 2,
                "stack[1]": 10,
                "stack[2]": 20,
                "stack[3]": 30
              }
            },
            {
              "step": 5,
              "lineNo": 6,
              "expectedValues": {
                "Operation": "push(40)",
                "top": 3,
                "stack[1]": 10,
                "stack[2]": 20,
                "stack[3]": 40
              }
            }
          ]
        }
      }
    ]
  },
  {
    "scenarioId": "pm-2023-scen01",
    "title": "Subject B: Recursive State Evaluation (Fibonacci Call Stack)",
    "examYear": 2023,
    "domain": "Algorithms & Data Structures",
    "contextMarkdown": "\n### Scenario Description\nThis Subject B question evaluates recursion mechanics and tracing of call hierarchies in the official ITPEC pseudo-programming language.\n\nBelow is a recursive function `fib(n)` to calculate the Fibonacci series, where `n` is a non-negative integer.\n\n#### ITPEC Pseudocode Specification\n```text\ninteger: fib(integer: n)\n  if (n = 0)\n    return 0\n  endif\n  if (n = 1)\n    return 1\n  endif\n  return fib(n - 1) + fib(n - 2)\nendfunction\n```\n",
    "subQuestions": [
      {
        "questionId": "pm-2023-q1-1",
        "questionNumber": 1,
        "prompt": "What is the value returned when executing `fib(5)`?",
        "options": [
          "3",
          "5",
          "8",
          "13"
        ],
        "correctIndex": 1,
        "explanation": "fib(5) = fib(4) + fib(3) = 3 + 2 = 5. (fib(0)=0, fib(1)=1, fib(2)=1, fib(3)=2, fib(4)=3, fib(5)=5).",
        "requiresPseudocode": true,
        "pseudocodeBlock": "integer: fib(integer: n)\n  if (n = 0) return 0\n  if (n = 1) return 1\n  return fib(n - 1) + fib(n - 2)\nendfunction",
        "traceTableSpec": {
          "variables": [
            "Function Call",
            "n",
            "fib(n-1) value",
            "fib(n-2) value",
            "Returns"
          ],
          "rows": [
            {
              "step": 1,
              "lineNo": 2,
              "expectedValues": {
                "Function Call": "fib(2)",
                "n": 2,
                "fib(n-1) value": 1,
                "fib(n-2) value": 0,
                "Returns": 1
              }
            },
            {
              "step": 2,
              "lineNo": 2,
              "expectedValues": {
                "Function Call": "fib(3)",
                "n": 3,
                "fib(n-1) value": 1,
                "fib(n-2) value": 1,
                "Returns": 2
              }
            },
            {
              "step": 3,
              "lineNo": 2,
              "expectedValues": {
                "Function Call": "fib(4)",
                "n": 4,
                "fib(n-1) value": 2,
                "fib(n-2) value": 1,
                "Returns": 3
              }
            },
            {
              "step": 4,
              "lineNo": 2,
              "expectedValues": {
                "Function Call": "fib(5)",
                "n": 5,
                "fib(n-1) value": 3,
                "fib(n-2) value": 2,
                "Returns": 5
              }
            }
          ]
        }
      }
    ]
  },
  {
    "scenarioId": "pm-2023-scen02",
    "title": "Subject B: Binary Search & Index Tracing",
    "examYear": 2023,
    "domain": "Algorithms & Data Structures",
    "contextMarkdown": "\n### Scenario Description\nBinary search divides a sorted list in half repeatedly to locate a target element.\n\nBelow is a 1-based array implementation of Binary Search in the ITPEC pseudo-language.\n\n#### ITPEC Pseudocode Specification\n```text\ninteger: binary_search(integer [1..7]: arr, integer: target)\n  integer: low ← 1\n  integer: high ← 7\n  integer: mid\n  \n  while (low ≤ high)\n    mid ← (low + high) div 2\n    if (arr[mid] = target)\n      return mid\n    endif\n    if (arr[mid] < target)\n      low ← mid + 1\n    else\n      high ← mid - 1\n    endif\n  endwhile\n  return -1\nendfunction\n```\n",
    "subQuestions": [
      {
        "questionId": "pm-2023-q2-1",
        "questionNumber": 1,
        "prompt": "Given a sorted array arr = [10, 20, 30, 40, 50, 60, 70], trace binary_search(arr, 60). What sequence of mid indices is evaluated?",
        "options": [
          "mid = 4, then mid = 6",
          "mid = 4, then mid = 5",
          "mid = 3, then mid = 6",
          "mid = 4, then mid = 6, then mid = 5"
        ],
        "correctIndex": 0,
        "explanation": "Loop 1: low=1, high=7 -> mid = (1+7) div 2 = 4. arr[4]=40. Target 60 > 40 -> low = mid + 1 = 5. Loop 2: low=5, high=7 -> mid = (5+7) div 2 = 6. arr[6]=60. Match! Returns mid = 6.",
        "requiresPseudocode": true,
        "pseudocodeBlock": "mid ← (low + high) div 2\nif (arr[mid] = target)\n  return mid\nendif\nif (arr[mid] < target)\n  low ← mid + 1\nelse\n  high ← mid - 1\nendif",
        "traceTableSpec": {
          "variables": [
            "Iteration",
            "low",
            "high",
            "mid",
            "arr[mid]",
            "Action"
          ],
          "rows": [
            {
              "step": 1,
              "lineNo": 6,
              "expectedValues": {
                "Iteration": "Loop 1",
                "low": 1,
                "high": 7,
                "mid": 4,
                "arr[mid]": 40,
                "Action": "low ← 5"
              }
            },
            {
              "step": 2,
              "lineNo": 6,
              "expectedValues": {
                "Iteration": "Loop 2",
                "low": 5,
                "high": 7,
                "mid": 6,
                "arr[mid]": 60,
                "Action": "Return 6"
              }
            }
          ]
        }
      }
    ]
  },
  {
    "scenarioId": "ai-gen-b-batch1-1",
    "title": "Subject B: Singly Linked List Node Insertion",
    "examYear": 2023,
    "domain": "Algorithms & Data Structures",
    "contextMarkdown": "### Scenario Description\nConsider the following pseudocode for inserting a new node with value `x` immediately after a given node `p` in a singly linked list. Each node has fields `data` and `next`.\n\ntext\nProcedure insertAfter(p, x)\n    newNode ← allocate()\n    newNode.data ← x\n    newNode.next ← p.next\n    p.next ← newNode\nEnd Procedure\n",
    "subQuestions": [
      {
        "questionId": "ai-gen-b-q1",
        "questionNumber": 1,
        "prompt": "In the `insertAfter` procedure above, what would happen if line 3 (`newNode.next ← p.next`) and line 4 (`p.next ← newNode`) were executed in reverse order?",
        "options": [
          "The new node would be correctly inserted without any issues.",
          "The reference to the rest of the list after `p` would be lost, resulting in a memory leak and a broken list chain.",
          "The value of `x` would be stored in node `p` instead.",
          "An infinite loop would be created in the linked list."
        ],
        "correctIndex": 1,
        "explanation": "If `p.next ← newNode` is executed before saving `p.next` to `newNode.next`, the pointer to the remainder of the linked list is overwritten and lost permanently, breaking the chain.",
        "requiresPseudocode": true,
        "pseudocodeBlock": "Procedure insertAfter(p, x)\n    newNode ← allocate()\n    newNode.data ← x\n    newNode.next ← p.next\n    p.next ← newNode\nEnd Procedure",
        "traceTableSpec": {
          "variables": [
            "p.next",
            "newNode.next",
            "p.next.data"
          ],
          "rows": [
            {
              "step": 1,
              "lineNo": 3,
              "expectedValues": {
                "p.next": "Original",
                "newNode.next": "Original",
                "p.next.data": "Original.data"
              }
            },
            {
              "step": 2,
              "lineNo": 4,
              "expectedValues": {
                "p.next": "newNode",
                "newNode.next": "Original",
                "p.next.data": "x"
              }
            }
          ]
        }
      }
    ]
  },
  {
    "scenarioId": "ai-gen-b-batch1-2",
    "title": "Subject B: Stack Evaluation of Reverse Polish Notation (RPN)",
    "examYear": 2023,
    "domain": "Algorithms & Data Structures",
    "contextMarkdown": "### Scenario Description\nConsider the following pseudocode for evaluating an arithmetic expression given in Reverse Polish Notation (RPN) using a stack.\n\ntext\nFunction evaluateRPN(tokens)\n    stack ← createStack()\n    For each token in tokens\n        If token is a number Then\n            push(stack, token)\n        Else If token is an operator (+, -, *, /) Then\n            operand2 ← pop(stack)\n            operand1 ← pop(stack)\n            result ← apply(operator, operand1, operand2)\n            push(stack, result)\n        End If\n    End For\n    Return pop(stack)\nEnd Function\n",
    "subQuestions": [
      {
        "questionId": "ai-gen-b-q2",
        "questionNumber": 1,
        "prompt": "Evaluate the RPN expression `5 1 2 + 4 * + 3 -` using the stack algorithm. What is the final returned result?",
        "options": [
          "14",
          "16",
          "18",
          "20"
        ],
        "correctIndex": 0,
        "explanation": "Trace: push 5; push 1; push 2; '+' -> 1+2=3, push 3; push 4; '*' -> 3*4=12, push 12; '+' -> 5+12=17, push 17; push 3; '-' -> 17-3=14. Final result is 14.",
        "requiresPseudocode": true,
        "pseudocodeBlock": "Function evaluateRPN(tokens)\n    stack ← createStack()\n    For each token in tokens\n        If token is a number Then\n            push(stack, token)\n        Else If token is an operator Then\n            operand2 ← pop(stack)\n            operand1 ← pop(stack)\n            result ← apply(operator, operand1, operand2)\n            push(stack, result)\n        End If\n    End For\n    Return pop(stack)\nEnd Function",
        "traceTableSpec": {
          "variables": [
            "token",
            "stack (bottom to top)",
            "operand1",
            "operand2",
            "result"
          ],
          "rows": [
            {
              "step": 1,
              "lineNo": 4,
              "expectedValues": {
                "token": "5",
                "stack (bottom to top)": "[5]",
                "operand1": "-",
                "operand2": "-",
                "result": "-"
              }
            },
            {
              "step": 2,
              "lineNo": 4,
              "expectedValues": {
                "token": "2",
                "stack (bottom to top)": "[5, 1, 2]",
                "operand1": "-",
                "operand2": "-",
                "result": "-"
              }
            },
            {
              "step": 3,
              "lineNo": 8,
              "expectedValues": {
                "token": "+",
                "stack (bottom to top)": "[5, 3]",
                "operand1": "1",
                "operand2": "2",
                "result": "3"
              }
            }
          ]
        }
      }
    ]
  },
  {
    "scenarioId": "ai-gen-b-batch1-3",
    "title": "Subject B: Circular Ring-Buffer Queue Operations",
    "examYear": 2023,
    "domain": "Algorithms & Data Structures",
    "contextMarkdown": "### Scenario Description\nConsider a circular ring-buffer queue of fixed capacity `N = 5` implemented with an array `Q[1..5]`, managed by `front` and `rear` pointers.\n\ntext\nProcedure enqueue(x)\n    If (rear mod N) + 1 = front Then\n        Error \"Queue Overflow\"\n    Else\n        rear ← (rear mod N) + 1\n        Q[rear] ← x\n    End If\nEnd Procedure\n",
    "subQuestions": [
      {
        "questionId": "ai-gen-b-q3",
        "questionNumber": 1,
        "prompt": "Given a capacity `N = 5`, `front = 2`, and `rear = 4`, what are the new values of `front` and `rear` after executing `enqueue(10)` followed by `dequeue()`?",
        "options": [
          "front = 2, rear = 5",
          "front = 3, rear = 5",
          "front = 3, rear = 1",
          "front = 2, rear = 1"
        ],
        "correctIndex": 1,
        "explanation": "Initial: front=2, rear=4. Enqueue(10): rear becomes (4 mod 5) + 1 = 5, Q[5]=10. Dequeue(): front becomes (2 mod 5) + 1 = 3. Thus, front = 3, rear = 5.",
        "requiresPseudocode": true,
        "pseudocodeBlock": "Procedure enqueue(x)\n    If (rear mod N) + 1 = front Then\n        Error \"Queue Overflow\"\n    Else\n        rear ← (rear mod N) + 1\n        Q[rear] ← x\n    End If\nEnd Procedure",
        "traceTableSpec": {
          "variables": [
            "Operation",
            "front",
            "rear",
            "Q state"
          ],
          "rows": [
            {
              "step": 1,
              "lineNo": 5,
              "expectedValues": {
                "Operation": "enqueue(10)",
                "front": "2",
                "rear": "5",
                "Q state": "Q[5]=10"
              }
            },
            {
              "step": 2,
              "lineNo": 2,
              "expectedValues": {
                "Operation": "dequeue()",
                "front": "3",
                "rear": "5",
                "Q state": "Q[5]=10"
              }
            }
          ]
        }
      }
    ]
  },
  {
    "scenarioId": "ai-gen-b-batch1-4",
    "title": "Subject B: Binary Search Tree Insertion",
    "examYear": 2023,
    "domain": "Algorithms & Data Structures",
    "contextMarkdown": "### Scenario Description\nConsider the following recursive pseudocode for inserting a value `x` into a Binary Search Tree (BST).\n\ntext\nFunction insertBST(node, x)\n    If node = null Then\n        newNode ← allocate()\n        newNode.data ← x\n        newNode.left ← null\n        newNode.right ← null\n        Return newNode\n    End If\n    If x < node.data Then\n        node.left ← insertBST(node.left, x)\n    Else If x > node.data Then\n        node.right ← insertBST(node.right, x)\n    End If\n    Return node\nEnd Function\n",
    "subQuestions": [
      {
        "questionId": "ai-gen-b-q4",
        "questionNumber": 1,
        "prompt": "Starting with an initially empty BST, the sequence of values `[50, 30, 70, 20, 40, 60, 80]` is inserted using `insertBST`. Which traversal order yields `[20, 30, 40, 50, 60, 70, 80]`?",
        "options": [
          "Pre-order traversal",
          "In-order traversal",
          "Post-order traversal",
          "Level-order traversal"
        ],
        "correctIndex": 1,
        "explanation": "An in-order traversal (Left, Root, Right) of a Binary Search Tree always yields the keys in ascending sorted order, which is [20, 30, 40, 50, 60, 70, 80].",
        "requiresPseudocode": true,
        "pseudocodeBlock": "Function insertBST(node, x)\n    If node = null Then\n        newNode ← allocate()\n        newNode.data ← x\n        Return newNode\n    End If\n    If x < node.data Then\n        node.left ← insertBST(node.left, x)\n    Else If x > node.data Then\n        node.right ← insertBST(node.right, x)\n    End If\n    Return node\nEnd Function",
        "traceTableSpec": {
          "variables": [
            "inserted value",
            "root.data",
            "left subtree",
            "right subtree"
          ],
          "rows": [
            {
              "step": 1,
              "lineNo": 3,
              "expectedValues": {
                "inserted value": "50",
                "root.data": "50",
                "left subtree": "null",
                "right subtree": "null"
              }
            },
            {
              "step": 2,
              "lineNo": 8,
              "expectedValues": {
                "inserted value": "30",
                "root.data": "50",
                "left subtree": "30",
                "right subtree": "null"
              }
            }
          ]
        }
      }
    ]
  },
  {
    "subQuestions": [
      {
        "traceTableSpec": {
          "variables": [
            "j",
            "i",
            "A"
          ],
          "rows": [
            {
              "step": 3,
              "lineNo": 1,
              "expectedValues": {
                "j": 3,
                "i": 1,
                "A": "[2, 1, 7, 6, 8, 5]"
              }
            }
          ]
        },
        "questionId": "SQ1",
        "prompt": "Determine the values of variables i, j, and the array A after the iteration where j = 3.",
        "correctIndex": 0,
        "questionNumber": 1,
        "explanation": "Trace the execution of the pseudocode to find the correct state values.",
        "options": [
          "j = 3, i = 1, A = [2, 1, 7, 6, 8, 5]",
          "j = 4, i = 2, A = [2, 1, 7, 6, 8, 5]",
          "j = 2, i = 0, A = [2, 1, 7, 6, 8, 5]",
          "j = undefined, i = undefined, A = undefined, 1, 7, 6, 8, 5]"
        ]
      }
    ],
    "scenarioId": "SCEN_QS_01",
    "title": "Subject B: Quick Sort partition loop states",
    "domain": "Quick Sort partition loop states",
    "examYear": 2023,
    "contextMarkdown": "### Scenario Description\nTrace the execution logic of the algorithm.\n\n```text\nFUNCTION partition(A, low, high)\n    pivot = A[high]\n    i = low - 1\n    FOR j = low TO high - 1\n        IF A[j] <= pivot THEN\n            i = i + 1\n            swap A[i] with A[j]\n        ENDIF\n    ENDFOR\n    swap A[i + 1] with A[high]\n    RETURN i + 1\nENDFUNCTION\n```"
  },
  {
    "subQuestions": [
      {
        "traceTableSpec": {
          "variables": [
            "i",
            "j",
            "k",
            "B"
          ],
          "rows": [
            {
              "step": 3,
              "lineNo": 1,
              "expectedValues": {
                "i": 2,
                "j": 4,
                "k": 4,
                "B": "[1, 2, 5, 0, 0, 0]"
              }
            }
          ]
        },
        "questionId": "SQ1",
        "prompt": "What are the values of i, j, k, and the array B after 3 elements have been placed into B?",
        "correctIndex": 0,
        "questionNumber": 1,
        "explanation": "Trace the execution of the pseudocode to find the correct state values.",
        "options": [
          "i = 2, j = 4, k = 4, B = [1, 2, 5, 0, 0, 0]",
          "i = 3, j = 5, k = 5, B = [1, 2, 5, 0, 0, 0]",
          "i = 1, j = 3, k = 3, B = [1, 2, 5, 0, 0, 0]",
          "i = undefined, j = undefined, k = undefined, B = undefined, 2, 5, 0, 0, 0]"
        ]
      }
    ],
    "scenarioId": "SCEN_MS_02",
    "title": "Subject B: Merge Sort combining stages",
    "domain": "Merge Sort combining stages",
    "examYear": 2023,
    "contextMarkdown": "### Scenario Description\nTrace the execution logic of the algorithm.\n\n```text\nFUNCTION merge(A, left, mid, right)\n    i = left\n    j = mid + 1\n    k = left\n    WHILE i <= mid AND j <= right\n        IF A[i] <= A[j] THEN\n            B[k] = A[i]; i = i + 1\n        ELSE\n            B[k] = A[j]; j = j + 1\n        ENDIF\n        k = k + 1\n    ENDWHILE\n    // remaining elements handling omitted for brevity\nENDFUNCTION\n```"
  },
  {
    "subQuestions": [
      {
        "traceTableSpec": {
          "variables": [
            "i",
            "minIdx",
            "A"
          ],
          "rows": [
            {
              "step": 1,
              "lineNo": 1,
              "expectedValues": {
                "i": 2,
                "minIdx": 4,
                "A": "[1, 2, 4, 5, 8]"
              }
            }
          ]
        },
        "questionId": "SQ1",
        "prompt": "State the array A after the completion of the outer loop when i = 2.",
        "correctIndex": 0,
        "questionNumber": 1,
        "explanation": "Trace the execution of the pseudocode to find the correct state values.",
        "options": [
          "i = 2, minIdx = 4, A = [1, 2, 4, 5, 8]",
          "i = 3, minIdx = 5, A = [1, 2, 4, 5, 8]",
          "i = 1, minIdx = 3, A = [1, 2, 4, 5, 8]",
          "i = undefined, minIdx = undefined, A = undefined, 2, 4, 5, 8]"
        ]
      }
    ],
    "scenarioId": "SCEN_BS_03",
    "title": "Subject B: Bubble/Selection sort comparisons",
    "domain": "Bubble/Selection sort comparisons",
    "examYear": 2023,
    "contextMarkdown": "### Scenario Description\nTrace the execution logic of the algorithm.\n\n```text\nFOR i = 1 TO n - 1\n    minIdx = i\n    FOR j = i + 1 TO n\n        IF A[j] < A[minIdx] THEN\n            minIdx = j\n        ENDIF\n    ENDFOR\n    swap A[i] with A[minIdx]\nENDFOR\n```"
  },
  {
    "subQuestions": [
      {
        "traceTableSpec": {
          "variables": [
            "key",
            "assignedIndex",
            "hashTable"
          ],
          "rows": [
            {
              "step": 1,
              "lineNo": 1,
              "expectedValues": {
                "key": 3,
                "assignedIndex": 4,
                "hashTable": "[null, null, null, 3, null]"
              }
            },
            {
              "step": 2,
              "lineNo": 1,
              "expectedValues": {
                "key": 8,
                "assignedIndex": 5,
                "hashTable": "[null, null, null, 3, 8]"
              }
            },
            {
              "step": 3,
              "lineNo": 1,
              "expectedValues": {
                "key": 13,
                "assignedIndex": 1,
                "hashTable": "[13, null, null, 3, 8]"
              }
            }
          ]
        },
        "questionId": "SQ1",
        "prompt": "What is the final state of the hashTable after inserting keys 3, 8, and 13 in that order?",
        "correctIndex": 0,
        "questionNumber": 1,
        "explanation": "Trace the execution of the pseudocode to find the correct state values.",
        "options": [
          "key = 3, assignedIndex = 4, hashTable = [null, null, null, 3, null]",
          "key = 4, assignedIndex = 5, hashTable = [null, null, null, 3, null]",
          "key = 2, assignedIndex = 3, hashTable = [null, null, null, 3, null]",
          "key = undefined, assignedIndex = undefined, hashTable = undefined, null, null, 3, null]"
        ]
      }
    ],
    "scenarioId": "SCEN_HT_04",
    "title": "Subject B: Hash Table collision probing index mappings",
    "domain": "Hash Table collision probing index mappings",
    "examYear": 2023,
    "contextMarkdown": "### Scenario Description\nTrace the execution logic of the algorithm.\n\n```text\nFUNCTION insert(hashTable, key)\n    idx = (key MOD 5) + 1\n    WHILE hashTable[idx] IS NOT EMPTY\n        idx = (idx MOD 5) + 1\n    ENDWHILE\n    hashTable[idx] = key\nENDFUNCTION\n```"
  },
  {
    "title": "Huffman Tree Traversal and Character Encoding",
    "subQuestions": [
      {
        "options": [
          "Right, Left, Right",
          "Left, Right, Left",
          "Right, Right, Left",
          "Left, Left, Right"
        ],
        "explanation": "A bit '1' moves to the right child, and a bit '0' moves to the left child. Thus, '1' -> right, '0' -> left, '1' -> right.",
        "questionId": "Q1",
        "prompt": "If the bit string '101' is processed starting from the root, which branch decisions are made?",
        "correctIndex": 0,
        "questionNumber": 1
      }
    ],
    "scenarioId": "SCENARIO-FE-001",
    "domain": "Algorithms & Data Structures",
    "examYear": 2023,
    "contextMarkdown": "Consider a Huffman tree constructed for a set of characters. The function `traverseHuffmanTree` takes the root of the tree and a bit string to decode a character, or outputs the bit string for a given character traversal path using ITPEC pseudocode.\n\n### Algorithm Code\n```text\nfunction decodeCharacter(rootNode, bitString)\n    currentNode = rootNode\n    for each bit in bitString\n        if bit == '0' then\n            currentNode = currentNode.left\n        else\n            currentNode = currentNode.right\n        endif\n    endfor\n    return currentNode.value\nendfunction\n```"
  },
  {
    "title": "Dijkstra's Shortest Path Algorithm Using Priority Queues",
    "subQuestions": [
      {
        "options": [
          "To remove visited vertices from the graph permanently",
          "To update the priority queue so that vertices with newly found shorter distances are processed sooner",
          "To increase the edge weight dynamically when a cycle is detected",
          "To reset the distance array to infinity for all unvisited nodes"
        ],
        "explanation": "The `decreaseKey` operation updates the position of vertex v in the priority queue to reflect its newly discovered shorter shortest path distance.",
        "questionId": "Q1",
        "prompt": "What is the primary purpose of the `decreaseKey` operation in this algorithm?",
        "correctIndex": 0,
        "questionNumber": 1
      }
    ],
    "scenarioId": "SCENARIO-FE-002",
    "domain": "Algorithms & Data Structures",
    "examYear": 2023,
    "contextMarkdown": "The following ITPEC pseudocode snippet represents the core relaxation step in Dijkstra's shortest path algorithm using a priority queue to select the unvisited vertex with the minimum tentative distance.\n\n### Algorithm Code\n```text\nwhile priorityQueue is not empty\n    u = extractMin(priorityQueue)\n    for each neighbor v of u\n        alt = distance[u] + weight(u, v)\n        if alt < distance[v] then\n            distance[v] = alt\n            previous[v] = u\n            decreaseKey(priorityQueue, v, alt)\n        endif\n    endfor\nendwhile\n```"
  },
  {
    "title": "Matrix Multiplication and 2D Array Transformations",
    "subQuestions": [
      {
        "options": [
          "O(N)",
          "O(N log N)",
          "O(N^2)",
          "O(N^3)"
        ],
        "explanation": "There are three nested loops, each running N times, resulting in a time complexity of O(N^3).",
        "questionId": "Q1",
        "prompt": "What is the time complexity order of this standard matrix multiplication algorithm for two N x N matrices?",
        "correctIndex": 0,
        "questionNumber": 1
      }
    ],
    "scenarioId": "SCENARIO-FE-003",
    "domain": "Algorithms & Data Structures",
    "examYear": 2023,
    "contextMarkdown": "Matrix transformations are common in graphics and data processing. The following pseudocode multiplies two square matrices A and B of size N x N.\n\n### Algorithm Code\n```text\nfor i = 1 to N\n    for j = 1 to N\n        C[i][j] = 0\n        for k = 1 to N\n            C[i][j] = C[i][j] + A[i][k] * B[k][j]\n        endfor\n    endfor\nendfor\n```"
  },
  {
    "title": "Huffman Prefix Code Generation Length Optimization",
    "subQuestions": [
      {
        "options": [
          "No code can be a prefix of any other code in the set",
          "All codes must have the exact same bit length",
          "Codes are padded with zeroes until lengths match",
          "The most frequent character must use only '1' bits"
        ],
        "explanation": "The prefix property of Huffman codes guarantees that no code is a prefix of another, allowing unambiguous decoding without explicit delimiters.",
        "questionId": "Q1",
        "prompt": "If character X has a high frequency and is assigned a code length of 2 bits, while character Y has a low frequency and is assigned 4 bits, how does Huffman coding ensure prefix property compliance?",
        "correctIndex": 0,
        "questionNumber": 1
      }
    ],
    "scenarioId": "SCENARIO-FE-004",
    "domain": "Algorithms & Data Structures",
    "examYear": 2023,
    "contextMarkdown": "A data transmission system utilizes Huffman coding to minimize the total number of bits required. Given character frequencies, the tree assigns shorter bit sequences to more frequent characters.\n\n### Algorithm Code\n```text\nfunction calculateTotalBits(frequencies, codeLengths)\n    totalBits = 0\n    for i = 1 to length(frequencies)\n        totalBits = totalBits + frequencies[i] * codeLengths[i]\n    endfor\n    return totalBits\nendfunction\n```"
  },
  {
    "subQuestions": [
      {
        "questionNumber": 1,
        "options": [
          "True",
          "False",
          "S0",
          "S1"
        ],
        "prompt": "What is the return value of checkEvenZeros(\"10101\")?",
        "correctIndex": 0,
        "explanation": "Trace the execution of the pseudocode to find the correct state values.",
        "questionId": "SUBB-001-q1"
      }
    ],
    "scenarioId": "SUBB-001",
    "title": "Subject B: Algorithm Tracing",
    "domain": "Finite State Automata string transitions",
    "examYear": 2023,
    "contextMarkdown": "### Scenario Description\nTrace the execution logic of the algorithm.\n\n```text\nFUNCTION checkEvenZeros(inputString)\n  state = S0\n  FOR i = 0 TO LENGTH(inputString) - 1\n    char = inputString[i]\n    IF state == S0 THEN\n      IF char == '0' THEN state = S1\n      ELSE state = S0\n    ELSE IF state == S1 THEN\n      IF char == '0' THEN state = S0\n      ELSE state = S1\n    ENDIF\n  ENDFOR\n  RETURN (state == S0)\nENDFUNCTION\n```"
  },
  {
    "subQuestions": [
      {
        "questionNumber": 1,
        "options": [
          "sum = 0, cout = 0",
          "sum = 1, cout = 0",
          "sum = 0, cout = 1",
          "sum = 1, cout = 1"
        ],
        "prompt": "What are the values of sum and cout respectively when fullAdder(1, 1, 1) is executed?",
        "correctIndex": 3,
        "explanation": "Trace the execution of the pseudocode to find the correct state values.",
        "questionId": "SUBB-002-q1"
      }
    ],
    "scenarioId": "SUBB-002",
    "title": "Subject B: Algorithm Tracing",
    "domain": "Combinational Full/Half Adders gate truth tables",
    "examYear": 2023,
    "contextMarkdown": "### Scenario Description\nTrace the execution logic of the algorithm.\n\n```text\nFUNCTION halfAdder(A, B)\n  sum = A XOR B\n  carry = A AND B\n  RETURN (sum, carry)\nENDFUNCTION\n\nFUNCTION fullAdder(A, B, Cin)\n  (s1, c1) = halfAdder(A, B)\n  (sum, c2) = halfAdder(s1, Cin)\n  cout = c1 OR c2\n  RETURN (sum, cout)\nENDFUNCTION\n```"
  },
  {
    "subQuestions": [
      {
        "questionNumber": 1,
        "options": [
          "5",
          "10",
          "15",
          "85"
        ],
        "prompt": "If the input 'value' is 85 (Binary 0101 0101), what is the integer value of result1?",
        "correctIndex": 0,
        "explanation": "Trace the execution of the pseudocode to find the correct state values.",
        "questionId": "SUBB-003-q1"
      }
    ],
    "scenarioId": "SUBB-003",
    "title": "Subject B: Algorithm Tracing",
    "domain": "Bitwise logical masking operations",
    "examYear": 2023,
    "contextMarkdown": "### Scenario Description\nTrace the execution logic of the algorithm.\n\n```text\nFUNCTION applyMask(value)\n  mask1 = 15       // Binary 0000 1111\n  mask2 = 170      // Binary 1010 1010\n  result1 = value AND mask1\n  result2 = value OR mask2\n  result3 = result1 XOR result2\n  RETURN result3\nENDFUNCTION\n```"
  },
  {
    "subQuestions": [
      {
        "questionNumber": 1,
        "options": [
          "0",
          "5",
          "10",
          "15"
        ],
        "prompt": "Given the coin sequence [10, 5, 10, 5], what is the final remaining balance (state) returned by processCoins?",
        "correctIndex": 1,
        "explanation": "Trace the execution of the pseudocode to find the correct state values.",
        "questionId": "SUBB-004-q1"
      }
    ],
    "scenarioId": "SUBB-004",
    "title": "Subject B: Algorithm Tracing",
    "domain": "Finite State Automata string transitions",
    "examYear": 2023,
    "contextMarkdown": "### Scenario Description\nTrace the execution logic of the algorithm.\n\n```text\nFUNCTION processCoins(coinSequence)\n  state = 0 // represents accumulated cents\n  FOR i = 0 TO LENGTH(coinSequence) - 1\n    coin = coinSequence[i]\n    IF coin == 5 THEN state = state + 5\n    ELSE IF coin == 10 THEN state = state + 10\n    ENDIF\n    IF state >= 15 THEN\n      state = state - 15\n      // Dispense item\n    ENDIF\n  ENDFOR\n  RETURN state\nENDFUNCTION\n```"
  }
];
