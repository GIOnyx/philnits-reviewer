import { SubjectAQuestion } from '../../types/exam';

export const SEED_SUBJECT_A_QUESTIONS: SubjectAQuestion[] = [
  {
    "id": "2019S_FE_AM_1",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2019,
    "questionText": "For logical variables *p* and *q*, which of the following is a logical expression that evaluates to true for any values *p* and *q*?",
    "options": [
      "$\\overline{p} + (p \\cdot q)$",
      "$(p \\cdot q) + (\\overline{p} + (p \\cdot \\overline{q}))$",
      "$(p \\cdot \\overline{q}) \\cdot (\\overline{p} + q)$",
      "$((\\overline{p}\\cdot q)\\cdot(p \\cdot q))\\cdot\\overline{q}$"
    ],
    "correctIndex": 1,
    "explanation": "### We can evaluate if logical expressions will always be true(1) by simplifying them.\n\n### Simplifying $\\overline{p} + (p \\cdot q)$\n1. $\\overline{p} + (p \\cdot q)=(\\overline{p}+p)\\cdot(\\overline{p}+q)$     by distributive law\n2. $\\overline{p}+p=1$                                   by inverse law\n3. $1\\cdot(\\overline{p}+q)=(\\overline{p}+q)$                   by identity law\n\n### Simplifying $(p \\cdot q) + (\\overline{p} + (p \\cdot \\overline{q}))$\n1. $\\overline{p} + (p \\cdot \\overline{q})=(\\overline{p}+p)\\cdot(\\overline{p}+\\overline{q})$     by distributive law\n2. $(\\overline{p}+p) = 1$                                by inverse law\n3. $1+(\\overline{p}+\\overline{q})=\\overline{p}+\\overline{q}$                    by identity law\n4. $(p\\cdot q)+\\overline{p}+\\overline{q}=((p\\cdot q)+\\overline{p})+\\overline{q}$     by associative law\n5. $(p\\cdot q)+\\overline{p}=(p+\\overline{p})\\cdot(q+\\overline{p})$      by distributive law\n6. $(p+\\overline{p}) = 1$                                 by inverse law\n7. $1\\cdot(q+\\overline{p})=q+\\overline{p}$                      by identity law\n8. $q+\\overline{p}+\\overline{q}=\\overline{p}+1$                       by inverse law\n9. $\\overline{p}+1=1$                                    by null law\n**expression will always be true**\n\n### Simplifying $(p \\cdot \\overline{q}) \\cdot (\\overline{p} + q)$\n1. $(p \\cdot \\overline{q})\\cdot(\\overline{p} + q)=p\\cdot\\overline{p}\\cdot\\overline{q}+p\\cdot q\\cdot\\overline{q}$    by distributive law\n2. $p\\cdot\\overline{p}\\cdot\\overline{q}+p\\cdot q\\cdot\\overline{q}=0\\cdot\\overline{q}+p\\cdot 0$    by inverse law\n3. $0\\cdot\\overline{q}+p\\cdot 0=0+0=0$                      by null law\n**expression will always be false**\n\n### Simplifying $((\\overline{p}\\cdot q)\\cdot(p \\cdot q))\\cdot\\overline{q}$\n1. $((\\overline{p}\\cdot q)\\cdot(p \\cdot q))\\cdot\\overline{q}=\\overline{p}\\cdot q\\cdot p\\cdot q\\cdot\\overline{q}$      by associative law\n2. $\\overline{p}\\cdot q\\cdot p\\cdot q\\cdot\\overline{q}=\\overline{p}\\cdot p\\cdot q\\cdot q\\cdot\\overline{q}$         by commutative law\n3. $\\overline{p}\\cdot p\\cdot q\\cdot q\\cdot\\overline{q}=\\overline{p}\\cdot p\\cdot q\\cdot\\overline{q}$             by  idempotent law\n4. $\\overline{p}\\cdot p\\cdot q\\cdot\\overline{q}=0\\cdot 0$                          by inverse law",
    "difficultyWeight": 1
  },
  {
    "id": "2019A_FE_AM_2",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2019,
    "questionText": "What is the Hamming distance of bit strings 10101 and 11110?",
    "options": [
      "0",
      "2",
      "3",
      "5"
    ],
    "correctIndex": 2,
    "explanation": "### Hamming distance\n\nA metric for comparing two binary data strings. While comparing two binary strings of equal length, Hamming distance is the number of bit positions in which the two bits are different.\n\n### Calculating Hamming distance\n\nIn order to calculate the Hamming distance between two strings, and , we perform their XOR operation, (a⊕b), and then count the total number of 1s in the resultant string.\n\n##### Example\n\n101 ⊕ 111 = 010, d(011, 111) = 1\n\n011 ⊕ 101 = 110, d(011, 101) = 2\n\n010 ⊕ 101 = 111, d(010, 101) = 3\n\n##### Therefore\n\n10101 ⊕ 11110 = 01011, d(10101, 11110) = 3",
    "difficultyWeight": 1
  },
  {
    "id": "2019A_FE_AM_3",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2019,
    "questionText": "A candy box contains four flavors of candies: 6 lemon-flavored, 12 strawberry-flavored, 8 orange-flavored, and 4 grape-flavored. When a candy is chosen from the box, what is the probability that it is either lemon- or orange-flavored?",
    "options": [
      "$4\\over{9}$",
      "$7\\over{15}$",
      "$6\\over{11}$",
      "$7\\over{8}$"
    ],
    "correctIndex": 1,
    "explanation": "### Total number of candies\n\n6 lemon + 12 strawberry + 8 orange + 4 grape = 30 total candies\n\n### Finding probability of choosing a lemon OR orange-flavored candy\n\n$6over{30}$+$8over{30}$=$14over{30}$=$7over{15}$",
    "difficultyWeight": 1
  },
  {
    "id": "2019A_FE_AM_4",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2019,
    "questionText": "A vehicle travels along a circle in the figure below. Two sensors L and R are attached to the left and right rear wheels, whose revolution speeds are independently controlled. Sensors L and R are photo reflective sensors, whose values change according to the ratio of black and white regions they pass over. If the ratio increases, the sensor value decreases, and if the ratio decreases, the sensor value increases. Which of the following is an appropriate control for ensuring that the vehicle travels along the black outline of the circle? Here, if the values of the two sensors match, the revolution speeds of the motors return to the initial speed.\n\n![Image](Files/Pasted%20image%2020241019175703.png)\n\n![Image](Files/Pasted%20image%2020241019180752.png)",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correctIndex": 1,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2019A_FE_AM_5",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2019,
    "questionText": "What is the result after evaluation of the following postfix expression? Here, symbols +, -, x, and ÷ represent the arithmetic operators of addition, subtraction, multiplication, and division, respectively.\n\n5 4 6 + x 4 9 3 ÷ + x",
    "options": [
      "98",
      "154",
      "238",
      "350"
    ],
    "correctIndex": 3,
    "explanation": "### Solving postfix expression 5 4 6 + x 4 9 3 ÷ + x\n\n**1. push 5 to stack**\n\n| 5   |\n| --- |\n\n**2. push 4 to stack**\n\n| 4   |\n| --- |\n| 5   |\n\n**3. push 6 to stack**\n\n| 6   |\n| --- |\n| 4   |\n| 5   |\n\n**4. add 4 and 6**\n\n| 4 + 6 = 10 |\n| ---------- |\n| 5          |\n\n**5. multiply 10 and 5**\n\n| 5 x 10 = 50 |\n| ----------- |\n\n**6. push 4 to stack**\n\n| 4   |\n| --- |\n| 50  |\n\n**7. push 9 to stack**\n\n| 9   |\n| --- |\n| 4   |\n| 50  |\n\n**8. push 3 to stack**\n\n| 3   |\n| --- |\n| 9   |\n| 4   |\n| 50  |\n\n**9. divide 9 and 3**\n\n| 9 / 3 = 3 |\n| --------- |\n| 4         |\n| 50        |\n\n**10. add 4 and 3**\n\n| 4 + 3 = 7 |\n| --------- |\n| 50        |\n\n**11. multiply 50 and 7**\n\n| 50 x 7 = 350 |\n| ------------ |",
    "difficultyWeight": 1
  },
  {
    "id": "2019A_FE_AM_6",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2019,
    "questionText": "Two stack operations are defined:\nPUSH n: Pushes a data (integer value n) to the stack.\nPOP: Pops a data from the stack.\nFor an empty stack, which of the following is the result of performing stack operations in the sequence below? PUSH 1 → PUSH 5 → POP → PUSH 7 → PUSH 6 → PUSH 4 → POP → POP → PUSH 3\n\n![Image](Files/Pasted%20image%2020241020164843.png)",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correctIndex": 2,
    "explanation": "### Visualizing the stack operations\n\n**1. PUSH 1**\n\n|     |\n| --- |\n| 1   |\n\n**2. PUSH 5**\n\n|     |\n| --- |\n| 5   |\n| 1   |\n\n**3. POP**\n\n|     |\n| --- |\n| 1   |\n\n**4. PUSH 7**\n\n|     |\n| --- |\n| 7   |\n| 1   |\n\n**5. PUSH 6**\n\n|     |\n| --- |\n| 6   |\n| 7   |\n| 1   |\n\n**6. PUSH 4**\n\n|     |\n| --- |\n| 4   |\n| 6   |\n| 7   |\n| 1   |\n\n**7. POP**\n\n|     |\n| --- |\n| 6   |\n| 7   |\n| 1   |\n\n**8. POP**\n\n|     |\n| --- |\n| 7   |\n| 1   |\n\n**9. PUSH 3**\n\n|     |\n| --- |\n| 3   |\n| 7   |\n| 1   |",
    "difficultyWeight": 1
  },
  {
    "id": "2019A_FE_AM_7",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2019,
    "questionText": "In a table search, which of the following is a characteristic of the search technique known as hashing?",
    "options": [
      "It is a method in which a collision between storage locations of data does not occur.",
      "It is a search technique that uses a binary tree.",
      "The storage locations of data are determined based on the function values of their keys.",
      "The time required to perform the search is approximately proportional to the size of the entire table."
    ],
    "correctIndex": 2,
    "explanation": "### What is Hash Table?\n\n- A Hash table is defined as a data structure used to insert, look up, and remove key-value pairs quickly. It operates on the [hashing concept](https://www.geeksforgeeks.org/what-is-hashing/), where each key is translated by a hash function into a distinct index in an array. The index functions as a storage location for the matching value. In simple words, it maps the keys with the value.",
    "difficultyWeight": 1
  },
  {
    "id": "2019A_FE_AM_8",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2019,
    "questionText": "The binary search algorithm is used to search for a given item when items are sorted. If the number of items is 1 million, which of the following is the closest to the maximum number of comparisons required to find the item?",
    "options": [
      "15",
      "20",
      "25",
      "30"
    ],
    "correctIndex": 1,
    "explanation": "### Calculating time complexity of binary search algorithm\n\n**Time complexity of binary search**\n$O_{{log_{2}n}}$\nSearching 1 million items means n = 1,000,000\n\n\n$\frac{log_{10}(1,000,000)}{log_{10}(2)}=log_{2}(1,000,000)$\n\n$log_{10}(1,000,000)=6$\n\n$log_{10}(2)approx0.301$\n\n$\frac{6}{0.301}=19.93approx20$",
    "difficultyWeight": 1
  },
  {
    "id": "2019A_FE_AM_9",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2019,
    "questionText": "In object-oriented programming, which of the following is an explanation of overriding that achieves polymorphism?",
    "options": [
      "A feature that allows a class to provide a specific implementation of a method that is already provided by one of its super classes",
      "Creating a class through abstraction by collecting common properties of multiple classes",
      "Defining multiple methods in a class that have the same name, but differ in terms of the number of arguments, argument types, or argument order",
      "Hiding internal contracts and structures of an object from its external specification"
    ],
    "correctIndex": 0,
    "explanation": "### What is polymorphism?\n\n- Polymorphism is a feature of object-oriented programming languages that allows a specific routine to use variables of different types at different times. It is the ability of a programming language to present the same interface for several different underlying data types and different objects to respond in a unique way to the same message.\n- Polymorphism describes the concept that you can access objects of different types through the same interface.",
    "difficultyWeight": 1
  },
  {
    "id": "2019A_FE_AM_10",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2019,
    "questionText": "A CPU has a clock frequency of 2.0 GHz. When the instructions consist of three types, as shown in the table below, what is the approximate CPU performance in MIPS?\n\n|     Time      | Execution Time (clocks) | Frequency of appearance ($%$) |\n| :-----------: | :---------------------: | :----------------------------: |\n| Instruction 1 |           15            |               40               |\n| Instruction 2 |           10            |               20               |\n| Instruction 3 |           10            |               40               |",
    "options": [
      "16.7",
      "120",
      "167",
      "200"
    ],
    "correctIndex": 2,
    "explanation": "### Finding clock frequency\n\nThe clock frequency is given as 2.0 GHz, which is equal to $2.0\times 10^9$ cycles per second.\n\n### Average cycles per instruction\n\nTo find the average CPI, we will multiply each instruction’s clock cycles by its frequency of appearance (as a decimal), then sum them:\n$CPI_{avg}=(15\times.40)+(10\times.20)+(10\times.40)=6+2+4=12$\n\n### Calculate MIPS\n\n$MIPS=\frac{2.0\times10^9}{12\times10^6}=\frac{2}{12}\times 10^3=0.1667\times 10^3=166.67approx 167MIPS$",
    "difficultyWeight": 1
  },
  {
    "id": "2019S_FE_AM_1",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2019,
    "questionText": "For an eight-bit integer x represented in two’s complement format, which of the following yields the value of 5x? Here, the overflow or underflow can be ignored in this multiplication.",
    "options": [
      "Shift x to the left by 1 bit, then add the initial value of x to it.",
      "Shift x to the left by 2 bits, then add the initial value of x to it.",
      "Shift x to the right arithmetically by 1 bit, then subtract the initial value of x from it.",
      "Shift x to the right arithmetically by 2 bits, then subtract the initial value of x from it."
    ],
    "correctIndex": 1,
    "explanation": "## **Explanation:**\n\nTo multiply an integer by 5, we can break it down as:\n#### $5x=4x+x$\n\n- Shifting **x** to the left by 2 bits gives **4x** (since left-shifting by 2 bits is equivalent to multiplying by $2^2$ which is equal to 4).\n- Adding the original **x** to this gives **4x + x = 5x**.\n\n### Overview of other options:\n\n- **a)** Shifting **x** left by 1 bit gives **2x**, and adding **x** gives **3x**, not **5x**.\n- **c)** Shifting **x** right arithmetically by 1 bit divides it by 2 (rounding towards negative), and subtracting **x** gives something unrelated to **5x**.\n- **d)** Shifting **x** right arithmetically by 2 bits divides it by 4, and subtracting **x** gives something unrelated to **5x**.",
    "difficultyWeight": 1
  },
  {
    "id": "2019S_FE_AM_2",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2019,
    "questionText": "How many four-digit decimal numbers are made from four (4) different digits between 0 and 9? Here, a four-digit decimal number has a non-zero leading digit.",
    "options": [
      "4320",
      "4436",
      "4536",
      "5040"
    ],
    "correctIndex": 2,
    "explanation": "## **Explanation:**\n\nWe need to calculate how many **four-digit decimal numbers** can be made from **four different digits** between 0 and 9, ensuring that the **leading digit is non-zero**.\n\n1. **First digit**: The leading digit must be from 1 to 9 (9 choices).\n2. **Second digit**: This can be any of the 9 remaining digits (including 0 but excluding the first digit).\n3. **Third digit**: This can be any of the remaining 8 digits.\n4. **Fourth digit**: This can be any of the remaining 7 digits.\n\nSo, the total number of possible four-digit numbers is:\n#### $9~\times~9~\times~8~\times~7=4536$",
    "difficultyWeight": 1
  },
  {
    "id": "2019S_FE_AM_3",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2019,
    "questionText": "What is the value of the postfix expression below when variables A, B, C, and D have values 4, 3, 5, and 6, respectively? Here, symbols ‘$+$’, ‘$-$’, ‘$\times$’, and ‘$/$’ represent the arithmetic operators of addition, subtraction, multiplication, and division, respectively.\n\n![Image](Files/Pasted%20image%2020241020100735.png)",
    "options": [
      "-3",
      "0",
      "3",
      "40/3"
    ],
    "correctIndex": 1,
    "explanation": "## **Explanation:**\n\nIf the arithmetic expression is in **postfix notation**, then the operators come **after** the operands. Find 2 operands that has an operator **after** them. Then perform the operation according to the operator. Repeat until you get the result. In this problem, substitute the variables with their respective values first before solving the expression.\n\n![Image](Files/Pasted%20image%2020241020102836.png)\n\nAfter performing the operations correctly, we get 0 as our answer, so the answer to the question is **b)**.",
    "difficultyWeight": 1
  },
  {
    "id": "2019S_FE_AM_4",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2019,
    "questionText": "Which of the following is an appropriate explanation of the feedback control?",
    "options": [
      "It performs a control in a predetermined order.",
      "It performs a control so that the output matches the target.",
      "It performs a control to avoid external disturbances to the output.",
      "It performs a control without using the output."
    ],
    "correctIndex": 1,
    "explanation": "## **Explanation:**\n\n**Feedback control** is a process where the output of a system is measured, and adjustments are made to ensure that the output remains aligned with the desired target or set point. The feedback loop uses the difference between the actual output and the target to adjust the system's behavior.\n\n### Overview of other options:\n\n- **a)** Performing control in a predetermined order describes **open-loop control**, not feedback control.\n- **c)** Controlling to avoid external disturbances may describe a type of feedback control but is not a complete or precise explanation.\n- **d)** Performing control without using the output refers to **open-loop control**, where feedback from the output is not used to adjust the system.",
    "difficultyWeight": 1
  },
  {
    "id": "2019S_FE_AM_5",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2019,
    "questionText": "Which of the following is a binary search tree?\n\n![Image](Files/Pasted%20image%2020241020103659.png)",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correctIndex": 1,
    "explanation": "## **Explanation:**\n\nA **binary search tree (BST)** is a type of binary tree where:\n\n1. Each node has at most two children.\n2. For any given node:\n    - The **left child** contains a value **less than** the value of the node.\n    - The **right child** contains a value **greater than** the value of the node.\n3. This property applies recursively to all nodes in the tree.\n\n### Overview of other options:\n\n- **a)** The right child of the node containing the element 15 is contains an element that is lesser than its parent which violates the rules of a BST.\n- **c)** The right child of the node containing the element 16 is contains an element that is lesser than its parent which violates the rules of a BST.\n- **d)** The right child of the node containing the element 20 is contains an element that is lesser than its parent which violates the rules of a BST.\n\n![Image](Files/Pasted%20image%2020241020103710.png)",
    "difficultyWeight": 1
  },
  {
    "id": "2019S_FE_AM_6",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2019,
    "questionText": "When the procedure described below is executed in sequence for an empty stack and empty queue, what is the value assigned to variable x? Here, the functions used in the procedure are defined as follows:\n\n[Function definitions]\n\n\tpush(y): pushes data y onto the top of the stack.\n\n\tpop(): removes the data from the top of the stack and returns it as the function value.\n\n\tenq(y): inserts data y at the tail of the queue.\n\n\tdeq(): removes the data from the head of the queue and returns it as the function value.\n\n[Procedure]\n\n\tpush(a)\n\tpush(b)\n\tenq(pop())\n\tenq(c)\n\tpush(d)\n\tpush(deq())\n\tx ← pop()",
    "options": [
      "'a'",
      "'b'",
      "'c'",
      "'d'"
    ],
    "correctIndex": 1,
    "explanation": "## **Explanation:**\n\n### Initial conditions:\n\n- **Stack**: empty\n- **Queue**: empty\n\n### Procedure:\n\n1. **push(a)**: Pushes **'a'** onto the stack.\n    **Stack**: `['a']`\n    **Queue**: `[]`\n\n2. **push(b)**: Pushes **'b'** onto the stack.\n    **Stack**: `['a', 'b']`\n    **Queue**: `[]`\n\n3. **enq(pop())**: Pops the top element from the stack (**'b'**) and enqueues it into the queue.\n    **Stack**: `['a']`\n    **Queue**: `['b']`\n\n4. **enq(c)**: Enqueues **'c'** into the queue.\n    **Stack**: `['a']`\n    **Queue**: `['b', 'c']`\n\n5. **push(d)**: Pushes **'d'** onto the stack.\n    **Stack**: `['a', 'd']`\n    **Queue**: `['b', 'c']`\n\n6. **push(deq())**: Dequeues the front element of the queue (**'b'**) and pushes it onto the stack.\n    **Stack**: `['a', 'd', 'b']`\n    **Queue**: `['c']`\n\n7. **x ← pop()**: Pops the top element from the stack (**'b'**) and assigns it to **x**.\n    **Stack**: `['a', 'd']`\n    **Queue**: `['c']`\n\nThe value of x is 'b'. Therefore the answer to the question is **b)**.",
    "difficultyWeight": 1
  },
  {
    "id": "2019S_FE_AM_7",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2019,
    "questionText": "For a function f(x, y) defined below, what is the value of f(775, 527)? Here, x mod y represents the remainder after division of x by y.\n\n\tf(x, y): if y = 0 then return x else return f(y, x mod y)",
    "options": [
      "0",
      "31",
      "248",
      "527"
    ],
    "correctIndex": 1,
    "explanation": "## **Explanation:**\n\nTo determine the value of the function $f(775,527)$ defined as:\n\n#### $f(x,y)=x~if~y=0,~else~f(y,x~mod  y)$\n\nwe will follow the recursive steps defined in the function.\n\n### Step 1: Initial Call\n\n- $f(775,527)$\n\nSince $527 \neq 0$, we need to evaluate $f(775 mod 527)$.\n\n### Step 2: Calculate $775 mod 527$\n\n$775 div 527 = 1 quad \text{(integer part)}$\n$775 - (1 \times 527) = 775 - 527 = 248$\n\nSo, $775 mod 527 = 248$.\n\nNow, we have:\n\n$f(775, 527) = f(527, 248)$\n\n### Step 3: Second Call\n\n- $f(527,248)$\n\nSince $248 \neq 0$, we evaluate $f(527 mod 248)$.\n\n### Step 4: Calculate $527 mod 248$\n\n$527 div 248 = 2 quad \text{(integer part)}$\n$527 - (2 \times 248) = 527 - 496 = 31$\n\nSo, $527 mod 248 = 31$.\n\nNow, we have:\n\n$f(527, 248) = f(248, 31)$\n\n### Step 5: Third Call\n\n- $f(248, 31)$\n\nSince $31 \neq 0$, we evaluate $f(248 mod 31)$.\n\n### Step 6: Calculate $248 mod 31$\n\n$248 div 31 = 8 quad \text{(integer part)}$\n$248 - (8 \times 31) = 248 - 248 = 0$\n\nSo, $248 mod 31 = 0$.\n\nNow, we have:\n\n$f(248, 31) = f(31, 0)$\n\n### Step 7: Fourth Call\n\n- $f(31, 0)$\n\nSince $y=0$, we return $x$:\n\n$f(31,0)=31$\n\n### Final Result\n\nThus, the value of $f(775,527)$ is **31**.\n\n**Answer: b) 31**",
    "difficultyWeight": 1
  },
  {
    "id": "2019S_FE_AM_8",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2019,
    "questionText": "The flowchart below shows the algorithm of concatenating two character strings in X and Y, with the resulting character string in Z. Which of the following is the appropriate pair of operations to insert in the blanks, A and B? Here, X and Y are character arrays of dimensions m and n, respectively, where the i-th character of each string is stored as the i-th element of the character array.\n\n![Image](Files/Pasted%20image%2020241020111646.png)\n\n![Image](Files/Pasted%20image%2020241020111705.png)",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correctIndex": 0,
    "explanation": "## **Explanation:**\n\nTo correctly fill in the blanks **A** and **B** in the algorithm for concatenating two character strings **X** and **Y** into a resulting character string **Z**, let's break down the operations involved.\n\n### Given Information:\n\n- **X** is a character array of dimension **m**.\n- **Y** is a character array of dimension **n**.\n- The resulting string **Z** will have a total length of **m + n**.\n\n### Flowchart Analysis:\n\n1. **Loop 1** iterates over the characters in **X** from **1** to **m**.\n\n    - In this loop, we need to copy characters from **X** to **Z**. Each character from **X** should be placed in the first part of **Z**.\n    - Thus, the operation should be: **A: X(k) → Z(k)** (where k varies from 1 to m).\n\n2. **Loop 2** iterates over the characters in **Y** from **1** to **n**.\n\n    - In this loop, we need to copy characters from **Y** to **Z** starting after the last character from **X**. Since the first **m** positions in **Z** are filled by **X**, the characters from **Y** should start from position **m + 1** in **Z**.\n    - Thus, the operation should be: **B: Y(k) → Z(m + k)** (where k varies from 1 to n).\n\n### **Conclusion:**\n\nBased on the analysis, the appropriate operations to insert in the blanks **A** and **B** are:\n\n- **A**: **X(k) → Z(k)**\n- **B**: **Y(k) → Z(m + k)**\n\n### **Final Answer:**\n\nThe correct pair of operations is:\n**a)** $X(k)→Z(k)$ and $Y(k)→Z(m+k)$\n**Answer: a)**\n\n![Image](Files/Pasted%20image%2020241020111719.png)",
    "difficultyWeight": 1
  },
  {
    "id": "2019S_FE_AM_9",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2019,
    "questionText": "For a processor running at 50 MIPS, what is the average execution time per instruction?",
    "options": [
      "20 ns",
      "50 ns",
      "2 $\\mu$s",
      "5 $\\mu$s"
    ],
    "correctIndex": 0,
    "explanation": "## **Explanation:**\n\nTo calculate the average execution time per instruction for a processor running at 50 MIPS (Million Instructions Per Second), we can use the following formula:\n\n#### $Execution~Time~per~Instruction=\frac{1}{\text{MIPS}}$\n\n### Step 1: Convert MIPS to Execution Time\n\nGiven that the processor runs at 50 MIPS, we can calculate the execution time as follows:\n\n$\text{Execution Time per Instruction} = \frac{1}{50 \text{ MIPS}} = \frac{1}{50 \times 10^6} \text{ seconds}$\n\n### Step 2: Calculate Execution Time\n\nNow, calculate the execution time:\n\n$\text{Execution Time per Instruction} = \frac{1}{50,000,000} = 20 \text{ ns}$\n\n### Final Answer\n\nThus, the average execution time per instruction is **20 ns**.\n\n**Answer: a) 20 ns**",
    "difficultyWeight": 1
  },
  {
    "id": "2019S_FE_AM_10",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2019,
    "questionText": "Which of the following is an appropriate characteristic of SRAM compared to DRAM? Here, SRAM and DRAM are compared in products manufactured in the same or similar semiconductor geometric process.",
    "options": [
      "SRAM consumes more power, particularly when idle, compared to DRAM.",
      "SRAM is non-volatile, whereas DRAM is volatile.",
      "SRAM needs to be refreshed, whereas DRAM does not.",
      "SRAM uses more transistors in a memory cell compared to DRAM."
    ],
    "correctIndex": 3,
    "explanation": "## **Explanation:**\n\n- **SRAM (Static Random Access Memory)** uses **six transistors** (6T) to store a single bit of data. This design allows SRAM to maintain data without needing to refresh it, making it faster and more stable than DRAM.\n- **DRAM (Dynamic Random Access Memory)**, on the other hand, typically uses **one transistor and one capacitor** (1T1C) to store each bit. This design is simpler and allows DRAM to have a higher density and lower cost per bit compared to SRAM.\n\n### Overview of Other Options:\n\n- **a)** **SRAM consumes more power, particularly when idle, compared to DRAM.** This is incorrect; SRAM generally consumes less power when active but can consume more power during idle states.\n- **b)** **SRAM is non-volatile, whereas DRAM is volatile.** This is incorrect; both SRAM and DRAM are volatile memory types, meaning they lose their stored data when power is turned off.\n- **c)** **SRAM needs to be refreshed, whereas DRAM does not.** This is incorrect; DRAM requires periodic refreshing to maintain data, while SRAM does not require refreshing.\n\nTherefore, the answer is **d)**.",
    "difficultyWeight": 1
  },
  {
    "id": "2019S_FE_AM_11",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2019,
    "questionText": "In a memory system that has a cache memory, which of the following causes an increase in the average memory access time?",
    "options": [
      "A decrease in the access time to the cache memory",
      "A decrease in the cache hit rate",
      "A decrease in the cache miss penalty",
      "A decrease in the cache miss rate"
    ],
    "correctIndex": 1,
    "explanation": "## **Explanation:**\n\n- The **average memory access time** (AMAT) is calculated using the formula:  \n    $\text{Average~Memory~Access~time} = \text{Hit time} + (\text{Miss rate} \times \text{Miss penalty})$\n    \n- A **decrease in the cache hit rate** means that fewer memory accesses are satisfied by the cache. As a result, more accesses will require fetching data from the slower main memory, increasing the average memory access time.\n\n### Overview of Other Options:\n\n- **a)** **A decrease in the access time to the cache memory.** This would decrease the average memory access time since faster cache access improves the overall performance.\n- **c)** **A decrease in the cache miss penalty.** This would also decrease the average memory access time, as it reduces the time taken to retrieve data from main memory when a cache miss occurs.\n- **d)** **A decrease in the cache miss rate.** This would lead to a decrease in average memory access time since fewer misses mean that most accesses are satisfied by the cache.",
    "difficultyWeight": 1
  },
  {
    "id": "2019S_FE_AM_12",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2019,
    "questionText": "There exists a storage system in which one (1) block is composed of eight (8) sectors of 500 bytes each, and the storage area is block-wise allocated to the files. When a 2,000-byte file and 9,000-byte file are to be saved, what is the total number of sectors that is allocated to these two (2) files? Here, the sectors that are occupied by the directory information and other such management information can be ignored.",
    "options": [
      "22",
      "26",
      "28",
      "32"
    ],
    "correctIndex": 3,
    "explanation": "## **Explanation:**\n\n### Storage System Details:\n\n- **1 block** = **8 sectors**\n- **1 sector** = **500 bytes**\n- Therefore, **1 block** = $8 \text{ sectors} \times 500 \text{ bytes/sector} = 4,000 \text{ bytes}$\n\n### File Allocations:\n\n1. **2,000-byte file:**\n    \n    - $\text{Sectors needed} = lceil \frac{2000 \text{ bytes}}{500 \text{ bytes/sector}} \rceil = lceil 4 \rceil = 4 \text{ sectors}$\n\tSince 4 sectors are needed, you need 1 block which houses 8 sectors. Therefore, in a 2000-byte file, 8 sectors are allocated even if the file doesn't use all sectors.\n2. **9,000-byte file:**\n    \n    - $\text{Sectors needed} = lceil \frac{9000 \text{ bytes}}{500 \text{ bytes/sector}} \rceil = lceil 18 \rceil = 18 \text{ sectors}$\n    Since 18 sectors are needed, you need 3 blocks which houses 24 sectors, Therefore, in a 9000-byte file, 24 sectors are allocated even if the file doesn't use all sectors.\n\n### **Conclusion:**\n\nSo 8 + 24 = 32 sectors are allocated to these 2 files.\nTherefore, the answer is **d)**.",
    "difficultyWeight": 1
  },
  {
    "id": "2019S_FE_AM_13",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2019,
    "questionText": "Which of the following is an appropriate description concerning the recording method of RAID5?",
    "options": [
      "It distributes the data over multiple hard disk drives, writes the data in units of bits, and writes the ECC (Error Correction Codes) on multiple hard disk drives.",
      "It distributes the data over multiple hard disk drives, writes the data in units of blocks, and distributes and writes the parity on multiple hard disk drives.",
      "It distributes the data over multiple hard disk drives, writes the data in units of bytes, and writes the parity on one (1) hard disk drive.",
      "It writes the same data on two (2) hard disk drives to create a mirror disk."
    ],
    "correctIndex": 1,
    "explanation": "## **Explanation:**\n\n- **RAID 5** is a type of **redundant array of independent disks (RAID)** that provides data redundancy and improved performance.\n- In RAID 5:\n    - **Data is striped across multiple drives** in units called blocks. This means that data is divided into blocks and written across several disks.\n    - **Parity information** (used for error recovery) is also distributed across all drives. This allows for the recovery of data in case one of the drives fails without the need for a complete mirror of the data, making RAID 5 efficient in terms of storage utilization.\n\n### Overview of Other Options:\n\n- **a)** **It distributes the data over multiple hard disk drives, writes the data in units of bits, and writes the ECC (Error Correction Codes) on multiple hard disk drives.**  \n    This is incorrect as RAID 5 does not write in units of bits but in blocks, and it specifically uses parity rather than ECC.\n    \n- **c)** **It distributes the data over multiple hard disk drives, writes the data in units of bytes, and writes the parity on one (1) hard disk drive.**  \n    This is incorrect; RAID 5 writes data in blocks and distributes the parity across multiple drives, not just one.\n    \n- **d)** **It writes the same data on two (2) hard disk drives to create a mirror disk.**  \n    This describes **RAID 1**, which is a mirroring method, rather than RAID 5.\n    \n\nThus, **b)** is the correct description of RAID 5.",
    "difficultyWeight": 1
  },
  {
    "id": "2019S_FE_AM_14",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2019,
    "questionText": "Which of the following is the most appropriate description of a dual system?",
    "options": [
      "It loads the online processing program of the active system on to a backup system and sets it to a standby status. In the event of a failure in the active system, it immediately switches to the backup system and continues the processing.",
      "It prepares a duplicate processor, memory, communication channel, and power supply system and continues the processing even in the event of a failure in any of the devices.",
      "It provides a duplicate system for performing the same processing and checks the accuracy of the processing by collating the processing results. In the event of a failure in either system, it continues the processing by the degraded operation.",
      "It provides an active system for performing online processing and keeps a backup system on standby while batch processing is being performed. In the event of a failure in the active system, it switches to the backup system and continues the online processing"
    ],
    "correctIndex": 2,
    "explanation": "## **Explanation:**\n\n- A **dual system** a system configuration in which two CPUs perform the same processing and compare the processing results to each other. This configuration is applied when the process is not allowed to stop, even for a moment. If one CPU fails, the system cuts off the failed CPU and continues processing on the other CPU.\n\n### Overview of Other Options:\n\n- **a)** This describes a **hot standby system**. In this setup, a backup system is kept ready to take over the operations of an active system in the event of a failure. It emphasizes immediate availability without active processing of results by the backup system, which is common in hot standby configurations.\n\n- **b)** This describes a **fault-tolerant system** or **redundant system**. In this configuration, all components (processors, memory, etc.) are duplicated to ensure that the system continues functioning even if one component fails. The focus here is on hardware redundancy rather than system-level redundancy or active verification of outputs.\n    \n- **d)** This describes a **duplex system**. In this arrangement, one system is actively processing while another is on standby, ready to take over if the active system fails. The term 'duplex' is often associated with maintaining two systems that can alternate tasks but doesn't necessarily focus on cross-checking outputs like a dual system does.\n    \n\nThus, **c)** is the correct and most suitable description of a dual system.",
    "difficultyWeight": 1
  },
  {
    "id": "2019S_FE_AM_15",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2019,
    "questionText": "A system has devices with availability R, connected as shown in the figure below. Which of the following is the expression that represents the availability of the entire system? Here, a parallel connection only requires either of the two devices to be functional, whereas a series connection requires both the devices to be functional.\n\n![Image](Files/Pasted%20image%2020241020124140.png)",
    "options": [
      "$(1- (1-R)^2 )^2$",
      "$(1- (1-R^2))^2$",
      "$1- (1-R)^4$",
      "$1- (1-R^2)^2$"
    ],
    "correctIndex": 0,
    "explanation": "## **Explanation:**\n\n1. **Parallel Connection**:\n    - For two devices in parallel, the availability is given by the formula: \n\t    $A_{\text{parallel}} = 1 - (1 - R)^2$\n    \n    This formula means the system remains available as long as at least one of the devices is functional.\n    \n2. **Series Connection**:\n    \n    - For two devices in series, the availability is simply the product of their availabilities: \n\t    $A_{\text{series}} = R \times R = R^2$\n\n### Combining the Configurations\n\nSince the two parallel devices are connected in a series, we can denote:\n\n- Let $A_{\text{parallel}}$ be the availability of the first parallel configuration (which consists of two devices).\n- The overall availability of the series connection with the result from the parallel configuration is: $A_{\text{total}} = A_{\text{parallel}}^2 = left(1 - (1 - R)^2\right)^2$\n\n### **Conclusion**\n\nThe most appropriate expression representing the availability of the entire system with the described configuration is:\n\n**a)** $(1- (1-R)^2 )^2$ \n\nThis corresponds to the availability of the two parallel devices squared.",
    "difficultyWeight": 1
  },
  {
    "id": "2019S_FE_AM_16",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2019,
    "questionText": "Which of the following is an appropriate explanation of paging?",
    "options": [
      "A method of memory management in which multiple records are read and written as a block on an auxiliary storage",
      "A method of memory management in which the main memory is divided into multiple areas so that reading and writing can be performed simultaneously",
      "A method of memory management in which the programs are relocated for execution in a different area of the main memory",
      "A method of memory management in which the virtual memory space and real memory space are divided into fixed-length blocks for management"
    ],
    "correctIndex": 3,
    "explanation": "## **Explanation:**\n\n- **Paging** is a memory management scheme that eliminates the need for contiguous allocation of physical memory and thus eliminates the problems of fitting varying sized memory chunks onto the backing store.\n- In this method, both the **virtual memory** (used by processes) and **physical memory** (actual RAM) are divided into fixed-size blocks called **pages** (for virtual memory) and **frames** (for physical memory).\n- When a program is executed, its pages can be loaded into any available memory frames, which helps in utilizing memory more efficiently and allows for easier management of memory allocation.\n\n### Overview of Other Options:\n\n- **a)** **A method of memory management in which multiple records are read and written as a block on auxiliary storage.**\n    \n    - This describes **block storage** or **batch processing**, not specifically paging.\n- **b)** **A method of memory management in which the main memory is divided into multiple areas so that reading and writing can be performed simultaneously.**\n    \n    - This is a more general description of memory segmentation or parallel processing rather than paging.\n- **c)** **A method of memory management in which the programs are relocated for execution in a different area of the main memory.**\n    \n    - This refers to **memory relocation** or **dynamic loading**, which is not specifically the definition of paging.\n\nThus, option **d** accurately describes the concept of paging in memory management.",
    "difficultyWeight": 1
  },
  {
    "id": "2019S_FE_AM_17",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2019,
    "questionText": "Which of the following is a method that performs data transfer between the main memory and a low-speed output device via a high-speed auxiliary storage device to increase the throughput of the entire system?",
    "options": [
      "Blocking",
      "Paging",
      "Spooling",
      "Swapping"
    ],
    "correctIndex": 2,
    "explanation": "## **Explanation:**\n\n- **Spooling** (Simultaneous Peripheral Operation On-Line) is a process that allows data to be temporarily stored in a high-speed storage area (such as a disk) before being sent to a slower output device (like a printer).\n- This technique enables the system to continue processing other tasks while the data is being transferred, effectively improving the overall throughput and efficiency of the system by allowing I/O operations to occur concurrently with computation.\n\n### Overview of Other Options:\n\n- **a)** **Blocking**: This typically refers to a method of grouping data into blocks for more efficient storage and transfer but does not directly involve the transfer process between devices as described.\n    \n- **b)** **Paging**: This is a memory management scheme that involves dividing memory into fixed-size pages and does not involve data transfer between a high-speed storage device and output devices.\n    \n- **d)** **Swapping**: This refers to the process of moving data between main memory and disk storage to free up memory but does not specifically relate to output devices or the auxiliary storage acting as a buffer for data transfer to slow devices.\n    \n\nThus, **c) Spooling** is the correct answer as it directly addresses the data transfer method described in your question.",
    "difficultyWeight": 1
  },
  {
    "id": "2019S_FE_AM_18",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2019,
    "questionText": "In the figure below, data are sent continuously for T seconds from the send task to the receive task. When the volume of the data sent per second is S and volume of the data received per second is R, which of the following is an appropriate relational expression for buffer size L for a buffer that does not overflow? Here, the transmission speed for the send task is faster than the transmission speed for the receive task, and there is sufficient time between the transmissions.\n\n![Image](Files/Pasted%20image%2020241020124140.png)",
    "options": [
      "$L<(R-S)\\times T$",
      "$L<(S-R)\\times T$",
      "$L\\geq(R-S)\\times T$",
      "$L\\geq(S-R)\\times T$"
    ],
    "correctIndex": 3,
    "explanation": "## **Explanation:**\n\nTo determine the appropriate relational expression for buffer size $L$ for a buffer that does not overflow, we need to analyze the data transmission dynamics between the send and receive tasks over a time period $T$.\n\n### Given:\n\n- **Volume of data sent per second**: $S$\n- **Volume of data received per second**: $R$\n- **Transmission speed for the send task is faster than for the receive task**: $S>R$\n\n### Explanation:\n\nSince the send task transmits data at a faster rate than the receive task (i.e., $S>R$), this means that there will be a backlog of data that needs to be buffered since the send task will continually produce more data than the receive task can handle.\n\n1. **Net Data Sent in $T$ Seconds**:\n    \n    - In $T$seconds, the send task will send: $\text{Total Sent} = S \times T$\n2. **Net Data Received in $T$ Seconds**:\n    \n    - In the same $T$ seconds, the receive task will receive: $\text{Total Received} = R \times T$\n3. **Net Data That Needs to Be Buffered**:\n    \n    - The amount of data that needs to be buffered (the difference between sent and received) is: $\text{Data to Buffer} = \text{Total Sent} - \text{Total Received} = (S \times T) - (R \times T) = (S - R) \times T$\n\n### Buffer Size Requirement:\n\nFor the buffer to not overflow, the buffer size $L$ must be at least equal to the amount of data that needs to be buffered:\n\n$L geq (S - R) \times T$\n\n### **Conclusion:**\n\nThus, the appropriate relational expression for buffer size $L$ is:\n\n**d)** $L geq (S - R) \times T$\n\nThis means the buffer size must accommodate the excess data sent by the send task over the data received by the receive task within the specified time period $T$.",
    "difficultyWeight": 1
  },
  {
    "id": "2019S_FE_AM_19",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2019,
    "questionText": "On a virtual memory computer, the number of pages that can be allocated to the real memory is three (3), and the two (2) algorithms of FIFO and LRU are used for selecting the page to be removed. When a page reference string shown below accesses the three (3) pages, which of the following is an appropriate combination of the number of page replacement operations? Here, the three (3) pages are initially empty and filling of an empty page is not considered as a page replacement operation.\n\n\t1, 3, 2, 1, 4, 5, 2, 3, 4, 5\n\n![Image](Files/Pasted%20image%2020241020141213.png)",
    "options": [
      "FIFO = 3, LRU = 2",
      "FIFO = 3, LRU = 6",
      "FIFO = 4, LRU = 3",
      "FIFO = 5, LRU = 4"
    ],
    "correctIndex": 1,
    "explanation": "## **Explanation:**\n\nTo determine the number of **page replacement operations** for both **FIFO** (First-In-First-Out) and **LRU** (Least Recently Used) algorithms, let's go step by step through the **page reference string**:\n\n**Page reference string**: `1, 3, 2, 1, 4, 5, 2, 3, 4, 5`\n\n### Given:\n\n- The number of pages that can be allocated to real memory is **3**.\n- Initially, the memory is empty, so the first three accesses are just page fills, not page replacements.\n- We need to calculate the number of page replacements using both **FIFO** and **LRU**.\n\n### FIFO (First-In-First-Out)\n\n1. **1**: (Page fill, memory: `[1]`)\n2. **3**: (Page fill, memory: `[1, 3]`)\n3. **2**: (Page fill, memory: `[1, 3, 2]`)\n4. **1**: (Page hit, no replacement, memory: `[1, 3, 2]`)\n5. **4**: (Page replacement, replace `1`, memory: `[4, 3, 2]`)\n6. **5**: (Page replacement, replace `3`, memory: `[4, 5, 2]`)\n7. **2**: (Page hit, no replacement, memory: `[4, 5, 2]`)\n8. **3**: (Page replacement, replace `2`, memory: `[4, 5, 3]`)\n9. **4**: (Page hit, no replacement, memory: `[4, 5, 3]`)\n10. **5**: (Page hit, no replacement, memory: `[4, 5, 3]`)\n\n- **Total page replacements (FIFO)**: **3**\n\n### LRU (Least Recently Used)\n\n1. **1**: (Page fill, memory: `[1]`)\n2. **3**: (Page fill, memory: `[1, 3]`)\n3. **2**: (Page fill, memory: `[1, 3, 2]`)\n4. **1**: (Page hit, memory: `[1, 3, 2]`)\n5. **4**: (Page replacement, replace `3` (least recently used), memory: `[1, 4, 2]`)\n6. **5**: (Page replacement, replace `2` (least recently used), memory: `[1, 4, 5]`)\n7. **2**: (Page replacement, replace `1` (least recently used), memory: `[2, 4, 5]`)\n8. **3**: (Page replacement, replace `4` (least recently used), memory: `[2, 3, 5]`)\n9. **4**: (Page replacement, replace `5`, memory: `[2, 3, 4]`)\n10. **5**: (Page replacement, replace `2`, memory: `[5, 3, 4]`)\n\n- **Total page replacements (LRU)**: **6**\n\n### **Conclusion:**\n\nThe correct combination is:\n\n**b)** **FIFO = 3, LRU = 6**",
    "difficultyWeight": 1
  },
  {
    "id": "2019S_FE_AM_20",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2019,
    "questionText": "A real-time OS performs preemptive scheduling on a priority basis and schedules two (2) tasks A and B. When A has a higher priority than B, which of the following is an appropriate task management by the real-time OS?",
    "options": [
      "When A is launched during the execution of B, B is assigned a 'ready' status and A is executed.",
      "When A is launched during the execution of B, B is assigned a 'waiting' status and A is executed.",
      "When B is launched during the execution of A, A is assigned a 'ready' status and B is executed.",
      "When B is launched during the execution of A, A is assigned a 'waiting' status and B is executed."
    ],
    "correctIndex": 0,
    "explanation": "## **Explanation:**\n\nIn a **preemptive scheduling** system, tasks with **higher priority** can interrupt or 'preempt' the execution of lower-priority tasks. Here’s the breakdown:\n\n- **Task A** has **higher priority** than Task B.\n- If **Task A is launched while Task B is executing**, the **real-time OS** will **pause** Task B, assigning it to a **'ready' status**.\n- The system will then immediately switch to executing the **higher-priority Task A**.\n- Once Task A is done, Task B can resume execution from where it was paused.\n\n### Other Options:\n\n- **b)** Incorrect: B should be assigned a **'ready' status**, not a **'waiting' status**. A **waiting status** is typically used when a task is waiting for an event or resource.\n- **c)** Incorrect: Task B, being of **lower priority**, should not preempt Task A. Instead, Task A continues execution.\n- **d)** Incorrect: Similar to c, Task A would not enter a **waiting status** for Task B, as A has a higher priority.\n\nIn **preemptive scheduling**, the higher-priority task always preempts the lower-priority one. Therefore, the answer is **a)**.",
    "difficultyWeight": 1
  },
  {
    "id": "2019S_FE_AM_21",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2019,
    "questionText": "Which of the following is an appropriate explanation of the function of an actuator?",
    "options": [
      "It changes an analog electrical signal into a digital electrical signal, which a computer can process.",
      "It changes an electrical control signal that is supplied by a computer into a mechanical motion.",
      "It identifies a physical quantity and changes it into an electrical signal.",
      "It is used in devices such as a keyboard or touch panel to enter data in a computer."
    ],
    "correctIndex": 1,
    "explanation": "## **Explanation:**\n\nAn **actuator** is a device that converts an **electrical control signal** into a form of **mechanical motion**. It is commonly used in control systems to perform physical tasks, such as moving a robotic arm, opening a valve, or controlling a motor.\n\n### Other Options:\n\n- **a)** Incorrect: This describes an **analog-to-digital converter (ADC)**, not an actuator.\n- **c)** Incorrect: This describes a **sensor**, which converts a physical quantity (e.g., temperature, pressure) into an electrical signal.\n- **d)** Incorrect: This describes an **input device**, such as a keyboard or touch panel, which is used for entering data into a computer.\n\nAn actuator works in the opposite direction of a sensor—it takes electrical input and converts it into physical action. Therefore, the answer is **b)**.",
    "difficultyWeight": 1
  },
  {
    "id": "2019S_FE_AM_22",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2019,
    "questionText": "Which of the following is an appropriate example of utilizing an RFID?",
    "options": [
      "Close range transmission of data using infrared rays",
      "Identification and management of personnel or items by using a very small wireless chip",
      "Input of information by using a reader to read a digital code that is printed on a paper",
      "Transmission of audio data between a cellphone and headphones"
    ],
    "correctIndex": 1,
    "explanation": "## **Explanation:**\n\n**RFID (Radio Frequency Identification)** is a technology that uses **radio waves** to identify and manage objects, people, or animals. It typically involves a **small wireless chip (RFID tag)** that contains data, which can be read by an **RFID reader**. This technology is commonly used in areas such as inventory management, access control, and tracking.\n\n### Other Options:\n\n- **a)** Incorrect: This describes **infrared communication**, not RFID. Infrared is used for short-range data transmission, but RFID uses radio waves, not infrared rays.\n- **c)** Incorrect: This describes the use of **barcodes** or **QR codes**. These require optical scanning and are not related to RFID.\n- **d)** Incorrect: This describes **Bluetooth or other wireless audio transmission technologies**, not RFID. RFID is not typically used for transmitting audio data.\n\nRFID is primarily used for identification and tracking, not for data transmission like Bluetooth or infrared. Therefore, the answer is **b)**.",
    "difficultyWeight": 1
  },
  {
    "id": "2019S_FE_AM_23",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2019,
    "questionText": "Which of the following is a logical expression that is equivalent to the logic circuit shown below?\n\n![Image](Files/Pasted%20image%2020241020145017.png)",
    "options": [
      "A AND B",
      "A AND (A OR B)",
      "A OR B",
      "B AND (A OR B)"
    ],
    "correctIndex": 2,
    "explanation": "## **Explanation:**\n\nThe logic circuit can be expressed as:\n\n$(AB) + (A + B)$\n\nThis can be simplified step-by-step:\n\n1. **Distribute** the terms:\n    - The term $(A+B)$ covers all cases where either $A$ or $B$ is true, so it essentially dominates the expression (AB)(AB)(AB) because any condition satisfied by $AB$ is also satisfied by $A+B$.\n2. Thus, the simplified expression is:\n\n$A+B$\n\nTherefore, the logical expression simplifies to:\n\n**c)** **A OR B**",
    "difficultyWeight": 1
  },
  {
    "id": "2019S_FE_AM_24",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2019,
    "questionText": "For a given data, the check digit is calculated with the method below and is appended to the original data. When the given data are 7394, what is the result? Here, the weight is 1234 and base number is 11.\n\n\t(1) For each digit of the data, calculate the product with the digit at the same radix of the weight; then calculate the sum of the products.\n\t(2) Calculate the remainder of dividing the sum by the base number.\n\t(3) Subtract the remainder from the base number; then take the one’s place of the result as the check digit.",
    "options": [
      "73940",
      "73941",
      "73944",
      "73947"
    ],
    "correctIndex": 0,
    "explanation": "## **Explanation:**\n\nTo find the check digit for the given decimal data 7394 using the specified method, we will follow the steps outlined:\n\n#### Given:\n- Data: **7394**\n- Weight: **1234**\n- Base Number: **11**\n\n### 1. Calculate the sum of products\nFor each digit of the data, we calculate the product with the corresponding weight:\n\n#### $7~cdot~1 = 7$\n#### $3~cdot~2 = 6$\n#### $9~cdot~3 = 27$\n#### $4~cdot~4 = 16$\n\nSum the products\n#### $7+6+27+16=56$\n\n### 2. Calculate the remainder\nNow we calculate the remainder when the sum is divided by the base number (11):\n#### $56~\text{mod}~11 =1$\n\n### 3. Calculate the check digit\nNext, we subtract the remainder from the base number and take the last digit of the result:\n#### $11-1=10$\n\nThe last digit of 10 is 0, which means the check digit is 0.\n\n### **Conclusion:**\nAppending the check digit to the original data gives:\n#### $7394~\text{becomes}~73940$\n\nTherefore, the answer is **a)**.",
    "difficultyWeight": 1
  },
  {
    "id": "2019S_FE_AM_25",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2019,
    "questionText": "In 3D computer graphics, which of the following is an explanation of hidden-line removal or hidden-surface removal in rendering?",
    "options": [
      "By analyzing the position of the light source and how much light hits the target object, its color and brightness are determined.",
      "For the generated image, only the portion that fits the computer display is rendered.",
      "For the target object, only the portion that is viewable from a specified viewpoint is rendered.",
      "Using a wireframe model with translucency, not only the surface but also the inside of the target object is rendered."
    ],
    "correctIndex": 2,
    "explanation": "## **Explanation:**\n\n**Hidden-line removal** or **hidden-surface removal** refers to the process in **3D computer graphics** where only the visible parts of an object from a certain viewpoint are rendered. This technique ensures that any surfaces or lines that are obscured by other parts of the object or other objects are not drawn, improving the realism of the rendered scene by showing only what would be visible to the viewer.\n\n### Other Options:\n\n- **a)** Incorrect: This describes **lighting and shading**, where light interaction with an object determines its appearance, such as brightness and color, but it is not related to hidden-line or hidden-surface removal.\n- **b)** Incorrect: This describes **clipping**, which ensures that only the part of the scene that fits within the viewable area (such as the display) is rendered.\n- **d)** Incorrect: This describes **rendering a translucent or wireframe model**, where both the surface and the internal structure can be viewed, but this is not related to hiding non-visible parts.\n\nHidden-line or hidden-surface removal is essential for rendering realistic 3D scenes, ensuring only visible elements from the specified viewpoint are displayed. Therefore, the answer is **c)**.",
    "difficultyWeight": 1
  },
  {
    "id": "2019S_FE_AM_26",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2019,
    "questionText": "An employee works for a department, which can be located in multiple regions. Three tables EMP, DEPT, and DEPT_LOCS are created as shown below for recording the employee, department, and department location data, respectively.\n\n![Image](Files/Pasted%20image%2020241020151447.png)\n\n![Image](Files/Pasted%20image%2020241020151505.png)",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correctIndex": 1,
    "explanation": "## **Explanation:**\n\nThe SQL query operates as follows:\n\n1. **Subquery 1 (`SELECT DNO FROM DEPT`)**: This part retrieves all department numbers (DNO) from the **DEPT** table, essentially fetching the list of all departments.\n\n2. **Subquery 2 (`SELECT DNO FROM DEPT_LOCS WHERE Region=’L2’)**: This part retrieves the department numbers (DNO) for departments located in the **L2** region from the **DEPT_LOCS** table.\n\n3. **MINUS Operator**: The `MINUS` operator is used to exclude department numbers from Subquery 1 that are also present in Subquery 2. This results in the department numbers that are **not** located in region **L2**.\n\n4. **Main Query**: The outer query selects the employee names (`EName`) and their corresponding salaries from the **EMP** table, where the department number (`DNO`) of the employee matches the department numbers retrieved by the `MINUS` operation (i.e., departments that are not located in region **L2**).\n\nGiven this process, the SQL query will return the employees who work for departments that are **not located in region L2**. Based on the table data:\n\n- **John Bate** (20000) and **Sadat Hossain** (50000) are associated with departments that are not located in region **L2**.\n\nTherefore, the answer is **b)**.",
    "difficultyWeight": 1
  },
  {
    "id": "2019S_FE_AM_27",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2019,
    "questionText": "In an SQL statement, which of the following is a constraint that is specified with FOREIGN KEY and REFERENCES?",
    "options": [
      "Assertion",
      "Check constraint",
      "Key constraint",
      "Referential constraint"
    ],
    "correctIndex": 3,
    "explanation": "## **Explanation:**\n\nIn SQL, when you define a **FOREIGN KEY** that references another table, it creates a **referential constraint**. This constraint ensures that the values in the foreign key column of a table must correspond to existing values in the primary key column of the referenced table. It maintains the **referential integrity** between two related tables.\n\n### Other Options:\n\n- **a) Assertion**: Assertions are more general constraints that ensure certain conditions are always true in a database, but they are not specifically tied to foreign key constraints.\n- **b) Check constraint**: A **CHECK constraint** ensures that the values in a column satisfy a specified condition but is not directly related to foreign key relationships.\n- **c) Key constraint**: A **key constraint** (like a primary or unique key) ensures uniqueness in a column or combination of columns but is different from a foreign key.\n\nThus, **referential constraint** is the correct term used for constraints defined using **FOREIGN KEY** and **REFERENCES**.",
    "difficultyWeight": 1
  },
  {
    "id": "2019S_FE_AM_28",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2019,
    "questionText": "In a client/server system, which of the following is the mechanism that reduces the network load between the client and server by placing the frequently used commands on the DBMS on the server in advance?",
    "options": [
      "Group commitment",
      "Multithreading of server processes",
      "Stored procedure",
      "Two-phase commitment"
    ],
    "correctIndex": 2,
    "explanation": "## **Explanation:**\n\nA **stored procedure** is a set of SQL statements that can be stored and executed on the database server. By placing frequently used commands on the DBMS (Database Management System) server, stored procedures help reduce the amount of data that needs to be sent over the network between the client and server.\n\n### Other Options:\n\n- **a) Group commitment**: This is a method used to improve the performance of transactions by grouping multiple transactions together for committing, but it does not specifically focus on reducing network load.\n- **b) Multithreading of server processes**: This technique allows the server to handle multiple requests simultaneously, improving performance but not specifically addressing network load reduction.\n- **d) Two-phase commitment**: This is a protocol used to ensure that all parts of a distributed transaction are completed successfully, but it does not relate to pre-storing commands on the server.\n\nThus, **stored procedures** are specifically designed to minimize network traffic by executing commands directly on the server.",
    "difficultyWeight": 1
  },
  {
    "id": "2019S_FE_AM_29",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2019,
    "questionText": "Which of the following is a characteristic to guarantee that the result of an update transaction is either performed completely or canceled as if nothing happened?",
    "options": [
      "Atomicity",
      "Consistency",
      "Durability",
      "Isolation"
    ],
    "correctIndex": 0,
    "explanation": "## **Explanation:**\n\n**Atomicity** is one of the key properties of a transaction in database systems, often summarized as part of the ACID (Atomicity, Consistency, Isolation, Durability) principles. It ensures that a transaction is treated as a single, indivisible unit of work. This means that either all operations within the transaction are completed successfully, or none of them are applied to the database, effectively rolling back any changes if an error occurs.\n\n### Other Options:\n\n- **b) Consistency**: This ensures that a transaction brings the database from one valid state to another, maintaining all predefined rules and constraints. It does not specifically guarantee the all-or-nothing property of an update.\n- **c) Durability**: This guarantees that once a transaction has been committed, its effects are permanent, even in the event of a system failure. It does not relate to whether the transaction is completed or canceled.\n- **d) Isolation**: This property ensures that transactions are executed in isolation from one another, meaning the operations of one transaction do not affect those of another. It does not guarantee that a transaction is completed or canceled.\n\nThus, **atomicity** is the characteristic that ensures the all-or-nothing nature of transactions.",
    "difficultyWeight": 1
  },
  {
    "id": "2019S_FE_AM_30",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2019,
    "questionText": "Which of the following is the process that is executed periodically to prevent reducing the access efficiency of the database?",
    "options": [
      "Backup",
      "Database dump",
      "Reorganization",
      "Roll back"
    ],
    "correctIndex": 2,
    "explanation": "## **Explanation:**\n\n**Reorganization** is the process executed periodically to optimize the structure of the database. Over time, as data is inserted, updated, and deleted, the organization of the data can become fragmented, leading to decreased access efficiency. Reorganization helps to improve the physical layout of the data, reduce fragmentation, and enhance performance by ensuring that related data is stored closer together, which can speed up access times.\n\n### Other Options:\n\n- **a) Backup**: This involves creating copies of the database to safeguard against data loss, but it does not directly address access efficiency.\n- **b) Database dump**: This is a method of exporting the entire database to a file for backup or migration, not focused on improving access efficiency.\n- **d) Roll back**: This refers to reverting the database to a previous state in case of an error, which does not pertain to maintenance for efficiency.\n\nThus, **reorganization** is specifically aimed at preventing reduced access efficiency in a database.",
    "difficultyWeight": 1
  },
  {
    "id": "2019S_FE_AM_31",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2019,
    "questionText": "In IPv4, which of following describes the NAT function of a router that connects some computers to the Internet?",
    "options": [
      "It caches the Internet access to speed up the connections when revisiting the same websites.",
      "It converts between private and global IP addresses.",
      "It inspects the IP packets in a transmission to detect possible attacks and intrusions from the Internet.",
      "It only passes the IP packets intended for specific terminals."
    ],
    "correctIndex": 1,
    "explanation": "**Network Address Translation (NAT)** is a function performed by routers that allows multiple devices on a local network to share a single public IP address for accessing the Internet. NAT translates the private IP addresses of the devices on the local network to a public IP address when they send data out to the Internet. When responses are received, NAT translates the public IP address back to the appropriate private IP address, ensuring that the data reaches the correct device on the local network.\n\n### Other Options:\n\n- **a)** Caching is not a function of NAT; it relates more to web proxies or caching servers that store frequently accessed web content to improve loading times.\n- **c)** Inspecting IP packets for attacks relates to security functions such as a firewall, not specifically to NAT.\n- **d)** While NAT does manage the flow of packets, it does not limit traffic to specific terminals; instead, it enables all devices behind the NAT to share the same public IP address.\n\nThus, **option b** accurately describes the primary function of NAT in a router.",
    "difficultyWeight": 1
  },
  {
    "id": "2019S_FE_AM_32",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2019,
    "questionText": "Which of the following is a feature of a switching hub (layer 2 switch) network device?",
    "options": [
      "It breaks a received packet into smaller pieces (fragments) in the network layer.",
      "It dynamically allocates an IP address for a terminal connected to its LAN port.",
      "It forwards a received packet only to its LAN port connected to a device with the packet’s destination MAC address.",
      "It forwards a received packet to all its LAN ports (broadcast)."
    ],
    "correctIndex": 2,
    "explanation": "A **switching hub** (or Layer 2 switch) operates primarily at the Data Link layer of the OSI model. Its main function is to receive data packets and intelligently forward them to the appropriate destination device based on the **MAC address**. By doing this, it reduces unnecessary traffic on the network and improves overall efficiency.\n\n### Other Options:\n\n- **a)** Fragmentation of packets is a function of Layer 3 devices (routers), which handle IP packets, not Layer 2 switches.\n- **b)** Dynamically allocating an IP address is a function of a DHCP server, not a switching hub.\n- **d)** Forwarding a packet to all LAN ports is characteristic of a hub, not a switching hub. A switch only sends packets to the specific port corresponding to the destination MAC address, rather than broadcasting to all ports.\n\nTherefore, **option c** accurately describes a feature of a switching hub.",
    "difficultyWeight": 1
  },
  {
    "id": "2019S_FE_AM_33",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2019,
    "questionText": "Which of the following is the network routing and addressing mechanism that is used in IPv6 but not in IPv4?",
    "options": [
      "Anycast",
      "Broadcast",
      "Multicast",
      "Unicast"
    ],
    "correctIndex": 0,
    "explanation": "**Anycast** is a network addressing and routing mechanism that is used in **IPv6** but not in **IPv4**. It allows for a single address to be assigned to multiple interfaces (typically on different devices), and the network will route packets to the nearest interface (in terms of routing distance) that has that address.\n\n### Other Options:\n\n- **b)** **Broadcast** is used in IPv4 to send packets to all devices on a network segment, but it is not used in IPv6. IPv6 does not support broadcast; instead, it relies on multicast for similar purposes.\n- **c)** **Multicast** is available in both IPv4 and IPv6 and allows packets to be sent to multiple specific devices at once.\n- **d)** **Unicast** is also used in both IPv4 and IPv6 and refers to a one-to-one communication between a sender and a receiver.\n\nThus, **option a (Anycast)** is the only mechanism that is uniquely associated with IPv6.",
    "difficultyWeight": 1
  },
  {
    "id": "2019S_FE_AM_34",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2019,
    "questionText": "In an IPv4 network with subnet mask 255.255.255.224, what is the maximum number of host addresses assigned?",
    "options": [
      "14",
      "20",
      "26",
      "30"
    ],
    "correctIndex": 3,
    "explanation": "- The subnet mask **255.255.255.224** corresponds to a **/27** prefix, which means there are **27 bits** for the network portion and **5 bits** for the host portion.\n- To calculate the maximum number of host addresses:\n    - Use the formula: **$2^n - 2$**, where **n** is the number of bits for the host.\n    - Here, **n = 5**: $2^5 - 2 = 32 - 2 = 30$\n    - The subtraction of 2 accounts for the network address and the broadcast address, which cannot be assigned to hosts.\nTherefore, the answer is **d)**.",
    "difficultyWeight": 1
  },
  {
    "id": "2019S_FE_AM_35",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2019,
    "questionText": "Which of the following is a protocol that uses TCP as its transport layer protocol?",
    "options": [
      "DHCP",
      "SNMP",
      "TELNET",
      "TFTP"
    ],
    "correctIndex": 2,
    "explanation": "- **TELNET**: This is a network protocol that allows for command-line interface access to remote computers. It uses **TCP** as its transport layer protocol to ensure reliable communication.\n\n### Overview of Other Options:\n\n- **a) DHCP (Dynamic Host Configuration Protocol)**: This protocol uses **UDP** (User Datagram Protocol) rather than TCP.\n- **b) SNMP (Simple Network Management Protocol)**: SNMP typically operates over **UDP**, although there is a version (SNMPv3) that can use TCP.\n- **d) TFTP (Trivial File Transfer Protocol)**: This protocol also uses **UDP** as its transport layer protocol, not TCP.\n\nThus, the only option that uses **TCP** as its transport layer protocol is **TELNET**.",
    "difficultyWeight": 1
  },
  {
    "id": "2019S_FE_AM_36",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2019,
    "questionText": "The IP address of Server X prepared by an attacker was stored in a DNS cache server of Company B as the IP address corresponding to the FQDN of the web server of Company A. Which of the following users will be unintentionally guided to Server X because of this attack? Here, each employee of Company A and Company B performs name resolution by using the DNS cache server of his/her own company.",
    "options": [
      "An employee of Company A who wishes to access the web server of Company A",
      "An employee of Company A who wishes to access the web server of Company B",
      "An employee of Company B who wishes to access the web server of Company A",
      "An employee of Company B who wishes to access the web server of Company B"
    ],
    "correctIndex": 2,
    "explanation": "In this scenario, the attacker has manipulated the DNS cache server of Company B to store the IP address of Server X as the corresponding IP for the Fully Qualified Domain Name (FQDN) of the web server of Company A. As a result:\n\n- When an employee of **Company B** attempts to access the web server of **Company A**, their request will resolve to the IP address of Server X instead of the legitimate server.\n\n### Overview of Other Options:\n\n- **a) An employee of Company A who wishes to access the web server of Company A**: This employee uses their own DNS cache server, which is not affected by the attack on Company B's DNS cache.\n- **b) An employee of Company A who wishes to access the web server of Company B**: This employee also uses their own DNS server, which is unaffected by the attack.\n- **d) An employee of Company B who wishes to access the web server of Company B**: This request resolves correctly as it points to the server of Company B, unaffected by the attack.\n\nThus, the employee of Company B attempting to access the web server of Company A will be misled to Server X due to the DNS cache poisoning attack.",
    "difficultyWeight": 1
  },
  {
    "id": "2019S_FE_AM_37",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2019,
    "questionText": "Which of the following is a description of a directory traversal attack?",
    "options": [
      "An attacker enters data consisting of database command statements as the input data for a web application and forces the execution of SQL statements that are not intended by the administrator.",
      "An attacker guides a user to a web site, where a defect in the escape processing of the HTML output by a web application is exploited, and forces the execution of a malicious script on the user’s web browser.",
      "An attacker illegally obtains the session ID for a user, who has logged into a session managed by the session ID, and accesses the server by spoofing the identity of the user.",
      "An attacker specifies a file by using the path name and illegally views a file that is not intended for viewing by the administrator."
    ],
    "correctIndex": 3,
    "explanation": "A **directory traversal attack** (also known as path traversal attack) occurs when an attacker exploits insufficient security validation in a web application to gain access to files and directories stored outside the intended directory. By manipulating the file path, attackers can specify arbitrary paths, allowing them to access sensitive files that should not be accessible, such as configuration files or password files.\n\n### Overview of Other Options:\n\n- **a)** Describes **SQL injection**, where an attacker inputs SQL statements to manipulate a database.\n- **b)** Describes **Cross-Site Scripting (XSS)**, where an attacker injects malicious scripts into web pages viewed by users.\n- **c)** Describes **Session hijacking**, where an attacker steals or predicts a valid session ID to impersonate a user.\n\nThus, option **d** is the closest description of a directory traversal attack.",
    "difficultyWeight": 1
  },
  {
    "id": "2019S_FE_AM_38",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2019,
    "questionText": "Which of the following is a description of a brute force attack by which an attempt is made to find the key of private key cryptography?",
    "options": [
      "Finding the key by observing the ciphertext change when the plaintext is changed by a certain amount",
      "Finding the key by testing all key combinations sequentially when a set of plaintext and ciphertext is given",
      "Finding the key by using as a clue the algebraic expression representing the relationship between the plaintext, ciphertext, and key",
      "Finding the key by using as a clue the statistical correlation between a part of the information of the plaintext and part of the information of the ciphertext"
    ],
    "correctIndex": 1,
    "explanation": "A **brute force attack** on private key cryptography involves systematically trying every possible key combination until the correct key is found. This method does not rely on any knowledge about the plaintext or ciphertext beyond what is required to confirm whether a guessed key produces the correct decryption.\n\n### Overview of Other Options:\n\n- **a)** Describes a method related to **differential cryptanalysis**, where changes in plaintext lead to changes in ciphertext.\n- **c)** Describes a method related to **algebraic attacks**, where the attacker uses mathematical relationships to derive the key.\n- **d)** Describes a method related to **statistical attacks**, where the attacker exploits patterns in plaintext and ciphertext to determine the key.\n\nThus, option **b** is the most accurate description of a brute force attack.",
    "difficultyWeight": 1
  },
  {
    "id": "2019S_FE_AM_39",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2019,
    "questionText": "Which of the following is an explanation of the time stamp service in information security?",
    "options": [
      "It is a service that authenticates biometric information, such as fingerprint, voice print, vein patterns, retina, and iris, by using the date and time when the information is registered in the authentication system.",
      "It is a service that certifies that electronic data certainly exist on a particular date and time and that the data have not been falsified since that date and time.",
      "It is a service that securely notifies that the date and time information is not falsified midway for setting the clock of the PCs and servers on the network.",
      "It is a web service that securely displays the global date and time information used in the official records by using encrypted communication."
    ],
    "correctIndex": 1,
    "explanation": "The **time stamp service** in information security is designed to provide proof of the existence of electronic data at a specific moment in time and to ensure that the data has not been altered since that time. This service is crucial for maintaining the integrity and authenticity of digital documents, making it vital in legal and compliance contexts.\n\n### Overview of Other Options:\n\n- **a)** Describes a service related to **biometric authentication**, not specifically time stamps.\n- **c)** Refers to a clock synchronization service, which ensures accurate timekeeping across devices but does not provide evidence of data existence or integrity.\n- **d)** Describes a web service for displaying time, but it does not pertain to the authentication or certification of data existence.\n\nThus, option **b** accurately captures the purpose and function of the time stamp service in information security.",
    "difficultyWeight": 1
  },
  {
    "id": "2019S_FE_AM_40",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2019,
    "questionText": "Which of the following is an encryption algorithm for public key cryptography?",
    "options": [
      "AES",
      "KCipher-2",
      "RSA",
      "SHA-256"
    ],
    "correctIndex": 2,
    "explanation": "**RSA (Rivest-Shamir-Adleman)** is a widely used public key cryptography algorithm that enables secure data transmission. It uses a pair of keys: a public key for encryption and a private key for decryption. RSA is commonly employed for secure communications and digital signatures.\n\n### Overview of Other Options:\n\n- **a) AES (Advanced Encryption Standard)**: A symmetric encryption algorithm, meaning it uses the same key for both encryption and decryption.\n- **b) KCipher-2**: A symmetric encryption algorithm used for securing data, not a public key algorithm.\n- **d) SHA-256 (Secure Hash Algorithm 256-bit)**: A cryptographic hash function, not an encryption algorithm. It is used to generate a fixed-size hash value from input data, primarily for integrity verification.\n\nThus, RSA is the only option that is specifically designed for public key cryptography.",
    "difficultyWeight": 1
  },
  {
    "id": "2019S_FE_AM_41",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2019,
    "questionText": "Which of the following is a security attack that prevents users from accessing their accounts?",
    "options": [
      "Brute force",
      "Denial of Service",
      "Man in the middle",
      "Sniffing"
    ],
    "correctIndex": 1,
    "explanation": "A **Denial of Service (DoS)** attack aims to make a system or service unavailable to its intended users, effectively preventing them from accessing their accounts. This can be achieved by overwhelming the server with requests, causing legitimate users to be unable to access the service.\n\n### Overview of Other Options:\n\n- **a) Brute Force**: This attack involves attempting to guess passwords or encryption keys by trying all possible combinations until the correct one is found. It does not inherently prevent access; instead, it attempts to gain access.\n- **c) Man in the Middle**: This attack occurs when an attacker intercepts communication between two parties, allowing them to eavesdrop or alter the communication. It does not directly prevent users from accessing their accounts but compromises the security of their communication.\n- **d) Sniffing**: This is the act of capturing network traffic to intercept data packets, often used to gather information like passwords. It doesn't prevent access but can lead to unauthorized access if sensitive information is obtained.\n\nThus, the most appropriate option for an attack that prevents users from accessing their accounts is the **Denial of Service** attack.",
    "difficultyWeight": 1
  },
  {
    "id": "2019S_FE_AM_42",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2019,
    "questionText": "Which of the following is an appropriate description of a botnet?",
    "options": [
      "A collection of internet-connected devices, including IoT devices, infected and controlled by a common type of malware",
      "A scalable and reliable network of self-driving vehicles communicating with each other to avoid accidents/collisions",
      "A set of honeypots designed to detect and analyze malicious activities by hackers to secure the production systems in the future",
      "A wireless network for industrial robots created for collaborative manufacturing in a factory to ensure quality at all levels"
    ],
    "correctIndex": 0,
    "explanation": "A **botnet** refers to a network of compromised computers and devices that are controlled remotely by an attacker. These devices, often referred to as 'bots' or 'zombies,' can include a variety of internet-connected devices, including personal computers, servers, and Internet of Things (IoT) devices. Botnets are typically used to perform various malicious activities, such as launching Distributed Denial of Service (DDoS) attacks, stealing personal information, or sending spam.\n\n### Overview of Other Options:\n\n- **b) A scalable and reliable network of self-driving vehicles communicating with each other to avoid accidents/collisions**: This describes a network of autonomous vehicles, not a botnet.\n- **c) A set of honeypots designed to detect and analyze malicious activities by hackers to secure the production systems in the future**: Honeypots are decoy systems used to attract and analyze attacks, which is different from a botnet.\n- **d) A wireless network for industrial robots created for collaborative manufacturing in a factory to ensure quality at all levels**: This describes a specific application of robotics and IoT in manufacturing, not a botnet.\n\nTherefore, the most appropriate description of a botnet is **a)**.",
    "difficultyWeight": 1
  },
  {
    "id": "2019S_FE_AM_43",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2019,
    "questionText": "An attacker captures unencrypted network traffic with a tool and later analyzes it offline to learn about the information contained in those transmissions. Which of the following is this attack?",
    "options": [
      "Buffer overflow attack",
      "Phishing attack",
      "Smurf attack",
      "Sniffing attack"
    ],
    "correctIndex": 3,
    "explanation": "A **sniffing attack** involves capturing and analyzing network traffic as it travels across a network. Attackers use tools called packet sniffers to intercept unencrypted data packets, which may contain sensitive information such as usernames, passwords, and other confidential data. Once the attacker has captured this data, they can analyze it offline to extract useful information.\n\n### Overview of Other Options:\n\n- **a) Buffer overflow attack**: This attack exploits vulnerabilities in a program by overflowing a buffer to execute arbitrary code or crash the program.\n- **b) Phishing attack**: This is a social engineering attack where attackers impersonate legitimate entities to trick users into providing sensitive information, typically via email or fraudulent websites.\n- **c) Smurf attack**: This is a type of DDoS attack where an attacker sends ICMP echo requests to a network's broadcast address, causing all devices on the network to respond to a targeted victim, overwhelming it with traffic.\n\nTherefore, the appropriate classification for the described scenario is **d) Sniffing attack**.",
    "difficultyWeight": 1
  },
  {
    "id": "2019S_FE_AM_44",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2019,
    "questionText": "Which of the following is the technique of actually attempting an attack and intrusion on a system to detect the security-related vulnerabilities of a computer or network?",
    "options": [
      "Penetration test",
      "Regression test",
      "Software inspection",
      "Walk-through"
    ],
    "correctIndex": 0,
    "explanation": "A **penetration test** (or pen test) is a simulated cyber attack against a computer system, network, or web application to identify security vulnerabilities that an attacker could exploit. The goal is to assess the security posture of the system and provide recommendations for improving security measures.\n\n### Overview of Other Options:\n\n- **b) Regression test**: This is a type of software testing that ensures that recent changes or updates to a program do not negatively affect its existing functionality.\n- **c) Software inspection**: This is a formal process of examining software artifacts (like requirements, design, or code) to identify defects, ensure quality, and improve the development process.\n- **d) Walk-through**: This is a review process in software development where a developer explains the logic of their code to peers or stakeholders to gather feedback and identify potential issues.\n\nTherefore, the appropriate classification for the technique described is **a) Penetration test**.",
    "difficultyWeight": 1
  },
  {
    "id": "2019S_FE_AM_45",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2019,
    "questionText": "As shown in the figure below, an application on a client accesses the data of the database on a server via database connection programs. Which of the following is a measure for preventing the leakage of the commands and execution results transmitted between the application and database?\n\n![Image](Files/Pasted%20image%2020241020162048.png)",
    "options": [
      "Changing the port number from its initial value that the database connection programs use for communication in the database management system",
      "Encrypting the communication between the database connection programs",
      "Restricting the IP addresses of the clients that can access the database connection program on the server to only those that are required",
      "Setting a password for starting or stopping the database connection program on the server"
    ],
    "correctIndex": 1,
    "explanation": "**Encrypting the communication between the database connection programs** is the most effective measure to prevent the leakage of commands and execution results transmitted between the application and the database. Encryption ensures that any data intercepted by an attacker while it is being transmitted is unreadable without the decryption key, thereby protecting sensitive information from unauthorized access.\n\n### Overview of Other Options:\n\n- **a) Changing the port number from its initial value that the database connection programs use for communication in the database management system**: While this may reduce the likelihood of automated attacks, it does not secure the data being transmitted.\n- **c) Restricting the IP addresses of the clients that can access the database connection program on the server to only those that are required**: This enhances security by limiting access but does not protect the data in transit.\n- **d) Setting a password for starting or stopping the database connection program on the server**: This measure protects the database connection program itself but does not address the protection of data during transmission.\n\nIn summary, encryption is the key measure for ensuring the confidentiality and integrity of data exchanged between the client application and the database server.",
    "difficultyWeight": 1
  },
  {
    "id": "2019S_FE_AM_46",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2019,
    "questionText": "In the UML class diagram, which of the following represents the relationship between the classes as shown in the figure below?\n\n![Image](Files/Pasted%20image%2020241020162314.png)",
    "options": [
      "Aggregation",
      "Association",
      "Composition",
      "Generalization"
    ],
    "correctIndex": 3,
    "explanation": "## **Explanation:**\n\n- **Generalization** is a relationship where one class (the child) inherits the properties and behaviors of another class (the parent). It represents an 'is-a' relationship.\n- In UML, this is depicted with a hollow triangle pointing towards the parent class from the child class.\n\n### Other Options Overview:\n\n- **Aggregation**: Represents a whole-part relationship but implies that the part can exist independently of the whole. It's often depicted with an empty diamond.\n- **Association**: Represents a relationship between two classes without implying ownership. It's shown with a solid line.\n- **Composition**: A stronger form of aggregation where the part cannot exist without the whole. It's depicted with a filled diamond.",
    "difficultyWeight": 1
  },
  {
    "id": "2019S_FE_AM_47",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2019,
    "questionText": "Which of the following is an explanation of encapsulation in object orientation?",
    "options": [
      "Abstraction and sorting of several objects that have the same nature",
      "Combination of the data and procedures that operate the data into a single object, and their concealment from outside the object",
      "Extraction of the nature shared between classes and creation of a base class",
      "Inheritance of the nature of a base class by a subclass"
    ],
    "correctIndex": 1,
    "explanation": "## **Explanation:**\n\n**Encapsulation** is a fundamental principle of object-oriented programming that combines data (attributes) and methods (functions) into a single unit or class. It restricts direct access to some of the object's components, which is a means of preventing unintended interference and misuse of the methods and data.\n\n### Other Options Overview:\n\n- **a) Abstraction and sorting of several objects that have the same nature**: This refers more to the concept of grouping similar objects but does not capture the essence of encapsulation.\n- **c) Extraction of the nature shared between classes and creation of a base class**: This describes the process of **generalization** or **abstraction**, which focuses on shared characteristics, not encapsulation.\n- **d) Inheritance of the nature of a base class by a subclass**: This describes **inheritance**, which allows a subclass to inherit properties and methods from a parent class, but is distinct from encapsulation.",
    "difficultyWeight": 1
  },
  {
    "id": "2019S_FE_AM_48",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2019,
    "questionText": "Which of the following can generally be called a subclass of an 'automobile' based on the concept of object orientation?",
    "options": [
      "Engine",
      "Manufacturing number",
      "Tire",
      "Truck"
    ],
    "correctIndex": 3,
    "explanation": "## **Explanation:**\n\nIn object-oriented programming, a **subclass** is a class that derives from another class (the superclass) and inherits its properties and behaviors. In this case, 'automobile' serves as the superclass, and 'truck' is a specific type of automobile, making it a valid subclass.\n\n### Other Options Overview:\n\n- **a) Engine**: While an engine is a critical component of an automobile, it is not a subclass; it's more of a part or attribute of the automobile.\n- **b) Manufacturing number**: This is an identifier and not a subclass or type of automobile.\n- **c) Tire**: Like the engine, a tire is a part of an automobile and does not qualify as a subclass.",
    "difficultyWeight": 1
  },
  {
    "id": "2019S_FE_AM_49",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2019,
    "questionText": "In the flowchart below, what is the minimum number of test cases that satisfies the decision condition coverage (branch coverage)?\n\n![Image](Files/Pasted%20image%2020241020163005.png)",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctIndex": 1,
    "explanation": "## **Explanation:**\n\nTo satisfy the **decision condition coverage** (also known as branch coverage), each decision point in the flowchart must evaluate to both true and false at least once.\n\nIn this case, we have two conditions:\n\n1. **X > 1**\n2. **A = 2 or B = 0**\n\n### Test Cases:\n\n1. **Test Case 1**:\n    \n    - **X = 2** (True for X > 1)\n    - **A = 2**, **B = 1** (True for A = 2)\n    - Outcome: This test case would evaluate the first condition as True and the second condition as True.\n2. **Test Case 2**:\n    \n    - **X = 0** (False for X > 1)\n    - **A = 1**, **B = 0** (True for B = 0)\n    - Outcome: This test case would evaluate the first condition as False and the second condition as True.\n\n### Coverage Achieved:\n\n- **First Test Case**: Covers the True branch for both conditions.\n- **Second Test Case**: Covers the False branch for the first condition and the True branch for the second condition.\n\nTo cover all branches, we would ideally need more test cases, but to meet the minimum requirement for decision condition coverage, **2 test cases are sufficient**.",
    "difficultyWeight": 1
  },
  {
    "id": "2019S_FE_AM_50",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2019,
    "questionText": "Among the software development activities, which of the following corresponds to refactoring, which is also emphasized in agile development?",
    "options": [
      "To improve the maintainability of a software, the internal structure of a program is changed without any change in the external specifications.",
      "To improve the quality of a software, two (2) programmers cooperate with each other and perform coding of one (1) program.",
      "To obtain feedback from the users, a prototype of the software to be provided is created at an early stage.",
      "To promptly develop a software to be operated, test cases are set in advance, and then the program is coded."
    ],
    "correctIndex": 0,
    "explanation": "## **Explanation:**\n\n**Refactoring** is a process in software development where the internal structure of the code is improved without altering its external behavior or functionality. The goal is to make the code cleaner, more efficient, and easier to maintain, which aligns with agile development principles that emphasize adaptability and continuous improvement.\n\n### Other Options Overview:\n\n- **b)** This describes **pair programming**, a practice in agile development but not specifically refactoring.\n- **c)** This refers to **prototyping**, which is a technique used to gather user feedback but not related to refactoring.\n- **d)** This describes **test-driven development (TDD)**, where tests are created before coding, not refactoring.",
    "difficultyWeight": 1
  },
  {
    "id": "2019S_FE_AM_51",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2019,
    "questionText": "Which of the following is an appropriate explanation of the PERT diagram as shown in the figure below?\n\n![Image](Files/Pasted%20image%2020241020163736.png)",
    "options": [
      "The critical path is A - C - G",
      "This project needs at least 11 days",
      "When the activity F becomes unnecessary, the project will end 1 day earlier",
      "When the activity H has a delay of 2 days, it will cause the project to be delayed by 2 days"
    ],
    "correctIndex": 2,
    "explanation": "## **Explanation:**\n\nThe **Critical Path** is the longest stretch of dependent activities and is crucial for determining the project's duration. Any delay in the activities on the critical path will result in a delay in the overall project completion. The critical path of this diagram is B - F - G as the sum of its values is 12 days. Removing F out of the equation will transfer the critical path to B - D - H whose sum of its values is equal to 11 days. Therefore, the project will end 1 day earlier.\n\n### Other Options Overview:\n\n- **a)** This is incorrect. The path of A - C - G only takes 8 days to complete whereas the path B - F - G takes 12 days, the longest time it takes to complete, which makes it a critical path.\n- b)** This is incorrect. Since the critical path B - F - G takes 12 days to complete, the entire project takes 12 days to complete as opposed to 11.\n- **d)** This is incorrect. If activity H has a delay of 2 days, the path B - D - H would certainly become the critical path of the project as it will take 13 days instead for the project to complete. However, the project would only be delayed by 1 day as the former critical path B - F - G only takes 12 days to complete.",
    "difficultyWeight": 1
  },
  {
    "id": "2019S_FE_AM_52",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2019,
    "questionText": "By using the triangular distribution formula of the three-point estimation technique, which of the following is the expected duration (in days) required for an activity? The estimations are as shown below. Conditions - Estimations for the activity duration\n\nCase 1: Two (2) days. If an experienced employee is assigned for this activity.\n\nCase 2: Four (4) days. If a general employee is assigned for this activity.\n\nCase3: Twelve (12) days. If an unexperienced employee is assigned for this activity.",
    "options": [
      "4",
      "5",
      "6",
      "7"
    ],
    "correctIndex": 2,
    "explanation": "## **Explanation:**\n\nTo calculate the expected duration using the **triangular distribution** formula, we use the following formula:\n\n$\text{Expected Duration} = \frac{(O + M + P)}{3}​$\n\nWhere:\n\n- OOO = Optimistic time (minimum duration)\n- MMM = Most likely time (most probable duration)\n- PPP = Pessimistic time (maximum duration)\n\nFrom the conditions provided:\n\n- Case 1 (Optimistic): 2 days\n- Case 2 (Most Likely): 4 days\n- Case 3 (Pessimistic): 12 days\n\nPlugging in these values:\n\n$\text{Expected Duration} = \frac{(2 + 4 + 12)}{3} = \frac{18}{3} = 6 \text{ days}$\n\nTherefore, the answer is **c)**.",
    "difficultyWeight": 1
  },
  {
    "id": "2019S_FE_AM_53",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2019,
    "questionText": "A project is planned to complete in 12 months and the budget for the completion of the project is $100,000. After six months, it is found that $60,000 are spent, but only 40% of the work is completed. If the Cost Performance Index (CPI) is not changed, what is the estimated amount (in dollars) required to complete the remaining tasks of the project?",
    "options": [
      "40,000",
      "60,000",
      "90,000",
      "150,000"
    ],
    "correctIndex": 2,
    "explanation": "## **Explanation:**\n\nTo estimate the amount required to complete the remaining tasks of the project, we can use the **Cost Performance Index (CPI)**. The CPI is calculated using the following formula:\n\n$CPI = \frac{EV}{AC}​$\n\nWhere:\n\n- **EV** = Earned Value (value of work performed)\n- **AC** = Actual Cost (cost incurred)\n\n### Given:\n\n- **Total Budget** = $100,000 (Planned Value)\n- **Project Duration** = 12 months\n- **Actual Cost (AC)** after 6 months = $60,000\n- **Percentage of work completed** = 40%\n\n### Step 1: Calculate Earned Value (EV)\n\nThe Earned Value (EV) can be calculated as follows:\n\n$EV = \text{Percentage of work completed} \times \text{Total Budget}$ \n$EV = 0.4 \times 100,000 = 40,000$\n\n### Step 2: Calculate CPI\n\nNow, we can calculate the Cost Performance Index (CPI):\n\n$CPI = \frac{EV}{AC} = \frac{40,000}{60,000} = \frac{2}{3} approx 0.67$\n\n### Step 3: Estimate Total Cost at Completion (EAC)\n\nWe can estimate the total cost at completion (EAC) using the formula:\n\n$EAC = \frac{BAC}{CPI}$\n\nWhere **BAC** is the Budget at Completion, which is $100,000:\n\n$EAC = \frac{100,000}{0.67} approx 149,253$\n\n### Step 4: Calculate Amount Required to Complete Remaining Tasks\n\nNow, to find the estimated amount required to complete the remaining tasks, we can use the formula:\n\n$\text{Amount Required} = EAC - AC$ \n$\text{Amount Required} = 149,253 - 60,000 approx 89,253$\n\n### **Conclusion:**\n\nThe estimated amount required to complete the remaining tasks of the project is approximately **90,000**. Therefore, the answer is **c)**.",
    "difficultyWeight": 1
  },
  {
    "id": "2019S_FE_AM_54",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2019,
    "questionText": "Which of the following is an appropriate cost estimation technique that estimates the cost of an activity or project using the historical data from a similar project?",
    "options": [
      "Analogous estimating",
      "Bottom-up estimating",
      "Function point method",
      "Parametric estimating"
    ],
    "correctIndex": 0,
    "explanation": "## **Explanation:**\n\n**Analogous Estimating**: This technique uses the costs of similar past projects to estimate the costs of the current project. It is useful when there is limited detailed information about the project at hand but sufficient historical data is available.\n\n### Overview of Other Options\n\n- **b) Bottom-up estimating**: This method involves estimating the cost of each component or activity individually and then aggregating them to get the total project cost. It is usually more detailed and time-consuming.\n- **c) Function point method**: This technique is specifically used in software development to estimate the size of the software project based on its functionality. It's not typically a direct cost estimation technique.\n- **d) Parametric estimating**: This method uses statistical relationships between historical data and other variables (like cost per square foot) to calculate an estimate. It requires relevant parameters but is distinct from using historical project data directly.\n\nThus, **analogous estimating** is the correct choice for the given question.",
    "difficultyWeight": 1
  },
  {
    "id": "2019S_FE_AM_55",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2019,
    "questionText": "Which of the following is the most appropriate description concerning a backup method for data in a new system?",
    "options": [
      "In consideration of a possible increase in the response time in the business processes, the backup schedule is adjusted so that it does not overlap with the business processes",
      "To save the backup data for a long period of time, a random-access medium is used",
      "To shorten the time taken for recovery from the backup data, a differential backup is used",
      "To shorten the time taken for the backup process, the backup data are placed in the same storage medium as the source data"
    ],
    "correctIndex": 0,
    "explanation": "## **Explanation:**\n\nThis option highlights the importance of scheduling backups during off-peak times to avoid impacting business operations, which is a critical consideration in backup strategies.\n\n### Overview of Other Options:\n\n- **b)** Random-access media are useful but are not specifically linked to the overall performance or operational considerations during backups.\n- **c)** Differential backups speeds up the backup process, not recovery.\n- **d)** Storing backups on the same medium as source data is generally not recommended due to increased risk.",
    "difficultyWeight": 1
  },
  {
    "id": "2019S_FE_AM_56",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2019,
    "questionText": "For servers, the total cost of ownership (TCO) is calculated over a period of 5-years. The purchase price of the servers is $120,500 and the other annual costs are listed as below.\n\n![Image](Files/Pasted%20image%2020241020171327.png)\n\nWhat is the TCO of the servers (in dollars)?",
    "options": [
      "28,100",
      "120,500",
      "140,500",
      "622,500"
    ],
    "correctIndex": 2,
    "explanation": "## **Explanation:**\n\nTo calculate the **Total Cost of Ownership (TCO)** of the servers over a period of 5 years, we need to consider both the **purchase price** and the **annual costs** incurred each year.\n\n### Given:\n\n- **Purchase Price of Servers:** $120,500\n- **Annual Costs:**\n    - Insurance: $2,030\n    - Maintenance: $1,000\n    - Repair (average): $700\n    - Registration: $270\n\n### Step 1: Calculate Total Annual Costs\n\n$\text{Total Annual Cost} = \text{Insurance} + \text{Maintenance} + \text{Repair} + \text{Registration}$\n$\text{Total Annual Cost} = 2,030 + 1,000 + 700 + 270 = 4,000$\n\n### Step 2: Calculate Total Costs Over 5 Years\n\n$\text{Total Costs Over 5 Years} = \text{Purchase Price} + (\text{Total Annual Cost} \times 5)$\n$\text{Total Costs Over 5 Years} = 120,500 + (4,000 \times 5) = 120,500 + 20,000 = 140,500$\n\n### **Conclusion:**\n\nThe **Total Cost of Ownership (TCO)** of the servers over 5 years is **$140,500**. Therefore, the answer is **c)**.",
    "difficultyWeight": 1
  },
  {
    "id": "2019S_FE_AM_57",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2019,
    "questionText": "In ITIL, the reduction in the index value expressing the maintainability is cited as an example of a KPI (Key Performance Index) in availability management. Which of the following corresponds to such an index?",
    "options": [
      "Mean time between failures",
      "Mean time between service incidents",
      "Mean time to restore service",
      "Number of interruptions in a certain period"
    ],
    "correctIndex": 2,
    "explanation": "## **Explanation:**\n\n**Mean time to restore service (MTRS)** is a key performance indicator (KPI) in availability management, particularly in the context of maintainability. This metric measures the average time taken to restore service after a failure has occurred. It directly relates to how quickly an organization can respond to and recover from incidents, which is crucial for maintaining service availability.\n\nThe reduction in MTRS indicates improved maintainability, as it reflects the efficiency and effectiveness of the incident response and recovery processes. If the MTRS decreases over time, it suggests that the organization has implemented better practices, tools, or resources to resolve issues more quickly, thereby enhancing overall service availability.\n\n### Overview of Other Options\n\n- **a) Mean time between failures (MTBF)**: This metric measures the average time between system failures. It focuses more on reliability than maintainability.\n    \n- **b) Mean time between service incidents**: This metric indicates how often incidents occur, but it does not directly measure the time taken to recover from those incidents.\n    \n- **d) Number of interruptions in a certain period**: This simply counts the number of service interruptions and does not provide insight into the time required to restore service.\n    \n\nOverall, MTRS is the most relevant KPI for assessing maintainability in availability management.",
    "difficultyWeight": 1
  },
  {
    "id": "2019S_FE_AM_58",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2019,
    "questionText": "Which of the following is the system audit implementation structure that should be avoided from the standpoint of independence of the system auditors?",
    "options": [
      "A person, who five (5) years ago was transferred to the audit department from a development manager position in the information systems department, audits the status of the Internet usage in the marketing department",
      "A person in the audit department audits the status of the personal information management in the external contractor to whom personal information handling is outsourced",
      "A person in the general affairs department, who is appointed as a member of the audit team, audits the status of the entrance and exit control in the general affairs department, together with the other members",
      "A person in the legal department, in response to a request by the audit department, cooperates with the auditors in auditing of the validity of the outsourcing contracts"
    ],
    "correctIndex": 2,
    "explanation": "## **Explanation:**\n\nIn this scenario, the individual from the **general affairs department** auditing their own department raises significant **independence concerns**. Auditing one's own department can create a conflict of interest and compromise the objectivity of the audit. This situation may lead to:\n\n- **Bias**: The auditor might have a personal stake in the outcome and may unconsciously (or consciously) overlook issues or fail to report them accurately.\n- **Lack of Objectivity**: The auditor may not be able to provide an unbiased perspective when assessing processes or controls they are directly involved with.\n- **Credibility Issues**: Stakeholders may question the findings and conclusions of the audit if they know the auditor is part of the same department, leading to potential distrust in the audit process.\n\n### Overview of Other Options\n\n- **a)** A person, who five (5) years ago was transferred to the audit department from a development manager position in the information systems department, audits the status of the Internet usage in the marketing department: Although there may be some residual connections, the auditor is now in the audit department, which helps to establish some independence.\n    \n- **b)** A person in the audit department audits the status of the personal information management in the external contractor to whom personal information handling is outsourced: This is acceptable as the auditor is from the audit department and assessing an external entity, ensuring independence.\n    \n- **d)** A person in the legal department, in response to a request by the audit department, cooperates with the auditors in auditing the validity of the outsourcing contracts: This collaboration is acceptable as it does not involve the legal department conducting the audit but rather providing necessary expertise, preserving the independence of the audit process.",
    "difficultyWeight": 1
  },
  {
    "id": "2019S_FE_AM_59",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2019,
    "questionText": "Which of the following is an appropriate activity that is undertaken by a system auditor who audits access control?",
    "options": [
      "Confirmation of the management status of the access control concerning the data",
      "Creation and storage of a management table for the access control concerning the software",
      "Establishment of a management policy for the access control concerning the network",
      "Implementation of the operations management for the access control concerning the hardware"
    ],
    "correctIndex": 0,
    "explanation": "## **Explanation:**\n\nAuditing access control primarily involves evaluating how access to systems and data is managed, ensuring that only authorized users have access to specific resources. The auditor's role is to assess the effectiveness of existing access control measures and their alignment with organizational policies and compliance requirements.\n\n**Confirmation of the management status of access control concerning data** means that the auditor verifies and evaluates how access rights and permissions are granted, monitored, and reviewed for data access. This involves checking whether:\n\n- Access controls are properly defined and documented.\n- User permissions align with their job roles.\n- There are processes for regular review of access rights.\n- Any changes to access rights are appropriately authorized and recorded.\n\n### Overview of Other Options\n\n- **b)** Creation and storage of a management table for the access control concerning the software: This activity is more of a management function than an auditing function. The auditor should evaluate such tables rather than create them.\n    \n- **c)** Establishment of a management policy for the access control concerning the network: This is typically a responsibility of management or IT security professionals rather than the auditor. The auditor reviews existing policies rather than creating them.\n    \n- **d)** Implementation of the operations management for the access control concerning the hardware: Like option **c**, this falls under the domain of management or operational roles. The auditor assesses the implementation and effectiveness of such controls instead of executing them.\n\nIn summary, option **a** is the correct activity for a system auditor auditing access control, as it focuses on verifying the effectiveness and management of access controls regarding data, which is a critical component of an auditor's responsibilities.",
    "difficultyWeight": 1
  },
  {
    "id": "2019S_FE_AM_60",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2019,
    "questionText": "Which of the following is subject to system audits that evaluate and verify the internal control related to IT?",
    "options": [
      "The methods for ensuring accuracy in the processes of input and update of a database performed by the sales department",
      "The process for the creation of a mid-term business plan by the business planning department",
      "The results of the employee personnel evaluations by the personnel department",
      "The status of the production equipment review conducted by the manufacturing department for the purpose of reducing defects"
    ],
    "correctIndex": 0,
    "explanation": "## **Explanation:**\n\nSystem audits related to IT focus on evaluating the effectiveness and efficiency of controls over IT systems and processes. This includes ensuring that data is accurately inputted, processed, and updated in databases, as well as verifying the integrity and security of that data.\n\nIn this case, the methods used by the sales department to ensure accuracy in database input and updates are critical for:\n\n- **Data Integrity**: Ensuring that the data entered into the system is correct and reliable.\n- **Process Control**: Verifying that there are adequate controls and procedures in place to prevent errors during data entry and updates.\n- **Compliance**: Making sure that the processes adhere to organizational policies and regulatory requirements.\n\n### Overview of Other Options\n\n- **b)** The process for the creation of a mid-term business plan by the business planning department: This activity is more focused on strategic planning and is less directly related to IT controls.\n    \n- **c)** The results of the employee personnel evaluations by the personnel department: While this may involve IT systems, the evaluations themselves are not primarily focused on internal controls related to IT.\n    \n- **d)** The status of the production equipment review conducted by the manufacturing department for the purpose of reducing defects: This pertains to operational controls in manufacturing rather than IT-related internal controls.\n    \nIn summary, option **a** is the correct choice because it specifically addresses the internal controls related to IT processes, particularly regarding data accuracy in database management, which is a key focus area for system audits.",
    "difficultyWeight": 1
  },
  {
    "id": "2019S_FE_AM_61",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2019,
    "questionText": "Which of the following is a case that enables the customer support operations at a call center to improve the quality by applying a pattern recognition function or machine learning function to the accumulated data?",
    "options": [
      "Deriving the most appropriate response in real time from the related materials and all the previous support history according to the content of the inquiry made by a customer",
      "Displaying the digital content of a response manual or basic customer information on a pop-up window of a screen for responding to the requests from the operators",
      "Repeatedly providing a roll play training to new operators from an experienced operator who serves as a lecturer by using the response manual as the teaching material",
      "Transferring a phone call or the relevant support screen to an experienced operator or a dedicated staff when the operator who is responding to a customer over the phone is unable to provide an answer"
    ],
    "correctIndex": 0,
    "explanation": "## **Explanation:**\n\nThis option illustrates how a pattern recognition or machine learning function can analyze accumulated data to provide real-time, context-sensitive responses. By leveraging historical support data and the specifics of the current inquiry, the system can suggest the best possible responses to customer inquiries. This enhances the quality of customer support by ensuring operators have immediate access to relevant information, which can lead to quicker and more accurate resolutions.\n\n### Overview of Other Options\n\n- **b)** Displaying the digital content of a response manual or basic customer information on a pop-up window of a screen for responding to the requests from the operators: While this option supports operators by providing access to information, it does not involve pattern recognition or machine learning. It is more about presenting static information rather than analyzing data to derive responses.\n    \n- **c)** Repeatedly providing a role-play training to new operators from an experienced operator who serves as a lecturer by using the response manual as the teaching material: This option focuses on training rather than leveraging accumulated data for improved customer support quality. While valuable, it does not utilize machine learning or pattern recognition techniques.\n    \n- **d)** Transferring a phone call or the relevant support screen to an experienced operator or a dedicated staff when the operator who is responding to a customer over the phone is unable to provide an answer: This is a traditional escalation process that ensures customers receive help but does not improve the quality of support through data analysis or machine learning.\n    \n\nIn summary, option **a** is the most aligned with using machine learning and pattern recognition to enhance customer support quality by providing real-time, tailored responses based on historical data.",
    "difficultyWeight": 1
  },
  {
    "id": "2019S_FE_AM_62",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2019,
    "questionText": "When an UML is used for business modeling, which of the following is the diagram that can represent a workflow such as the execution sequence of the business processes and branching based on conditions?",
    "options": [
      "Activity diagram",
      "Class diagram",
      "Component diagram",
      "Object diagram"
    ],
    "correctIndex": 0,
    "explanation": "## **Explanation:**\n\nIn UML, an activity diagram **provides a view of the behavior of a system by describing the sequence of actions in a process**. It visualizes the flow of activities and decisions in a process, showcasing how different tasks are carried out, including branching based on conditions (e.g., decision points).\n\n### Overview of Other Options\n\n- **b) Class Diagram**: This diagram is used to model the static structure of a system by showing classes, their attributes, operations, and the relationships among objects. It does not represent workflows or the sequence of processes.\n    \n- **c) Component Diagram**: This type of diagram focuses on the physical components of a system, such as software modules, and how they interact. While it can show relationships, it is not used for detailing workflows or process sequences.\n    \n- **d) Object Diagram**: This diagram provides a snapshot of the instances of classes at a particular moment in time. It illustrates the relationships between objects but does not depict the flow of processes or workflows.\n    \n\nIn summary, the **activity diagram** is the most appropriate UML diagram for modeling workflows, execution sequences, and branching in business processes.",
    "difficultyWeight": 1
  },
  {
    "id": "2019S_FE_AM_63",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2019,
    "questionText": "Which of the following is a description of the SOA?",
    "options": [
      "A concept of constructing a system by considering the software functions as components called services and combining them",
      "A concept of improving the sales efficiency and quality by using IT for the sales activities to increase the sales and profits as well as to improve customer satisfaction",
      "A concept of re-designing the business processes to innovatively improve the cost, quality, service, and speed",
      "Outsourcing the in-house operations other than those of the core businesses to concentrate the management resources on the core businesses"
    ],
    "correctIndex": 0,
    "explanation": "## **Explanation:**\n\n**Service-Oriented Architecture (SOA)** is a design paradigm that focuses on organizing and utilizing software functions as distinct, interoperable services. In SOA, these services can communicate with each other over a network, enabling systems to be constructed by combining existing services. This approach promotes reusability, scalability, and flexibility in software development, as services can be developed independently and integrated into various applications.\n\n### Overview of Other Options\n\n- **b)** A concept of improving the sales efficiency and quality by using IT for the sales activities to increase the sales and profits as well as to improve customer satisfaction: This description aligns more closely with concepts like **Sales Force Automation (SFA)** or Customer Relationship Management (CRM) systems rather than SOA.\n    \n- **c)** A concept of re-designing the business processes to innovatively improve the cost, quality, service, and speed: This option describes **Business Process Reengineering (BPR)**, which focuses on improving organizational processes rather than the architectural framework of software systems.\n    \n- **d)** Outsourcing the in-house operations other than those of the core businesses to concentrate the management resources on the core businesses: This describes **outsourcing** rather than SOA. While outsourcing involves delegating non-core functions to third parties, it is not related to the architectural principles of software design.\n    \n\nIn summary, option **a** accurately defines SOA as a framework for building systems based on services, emphasizing the modular and combinatory nature of software components.",
    "difficultyWeight": 1
  },
  {
    "id": "2019S_FE_AM_64",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2019,
    "questionText": "Which of the following is a scheme where the user establishes a connection to the system of a service provider via the Internet and makes online use of only the necessary functions of the applications provided by the service provider at the necessary time?",
    "options": [
      "ERP",
      "SaaS",
      "SCM",
      "XBRL"
    ],
    "correctIndex": 1,
    "explanation": "## **Explanation:**\n\n**SaaS (Software as a Service)** is a cloud computing model where users connect to applications hosted by a service provider over the Internet. In this model, users can access and utilize only the necessary functions of the applications on a pay-per-use or subscription basis. SaaS eliminates the need for local installation and maintenance of software, allowing for flexibility and scalability in accessing software applications as needed.\n\n### Overview of Other Options\n\n- **a) ERP (Enterprise Resource Planning)**: This is a type of software used to manage and integrate the essential parts of a business. While ERP systems can be delivered as SaaS, ERP itself is not a service model but rather a type of application.\n    \n- **c) SCM (Supply Chain Management)**: SCM refers to the management of the flow of goods and services and includes all processes that transform raw materials into final products. Like ERP, SCM can be implemented as a SaaS solution but is not a scheme itself.\n    \n- **d) XBRL (eXtensible Business Reporting Language)**: This is a language for the electronic communication of business and financial data. It is primarily used for reporting purposes and does not pertain to a service delivery model like SaaS.\n    \n\nIn summary, **SaaS** is the most accurate option that describes a scheme where users connect to a service provider's system over the Internet to access only the necessary functions of applications as needed.",
    "difficultyWeight": 1
  },
  {
    "id": "2019S_FE_AM_65",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2019,
    "questionText": "A company chooses products and services that are acknowledged as actively addressing environmental concerns. What is this initiative called?",
    "options": [
      "CSR",
      "Environmental assessment",
      "Green procurement",
      "Macro environment analysis"
    ],
    "correctIndex": 2,
    "explanation": "## **Explanation:**\n\n**Green Procurement** refers to the process of selecting products and services that have a reduced environmental impact throughout their life cycle. This initiative involves sourcing environmentally friendly products and services that minimize waste, conserve resources, and contribute to sustainable practices. Companies that engage in green procurement actively consider environmental criteria in their purchasing decisions, aiming to support sustainability and reduce their ecological footprint.\n\n### Overview of Other Options\n\n- **a) CSR (Corporate Social Responsibility)**: This is a broader concept that encompasses a company's initiatives to operate ethically and contribute positively to society, including environmental, social, and economic responsibilities. While green procurement can be a part of a company's CSR strategy, CSR itself is not limited to environmentally focused initiatives.\n    \n- **b) Environmental Assessment**: This is a process used to evaluate the potential environmental impacts of a proposed project or action. While it involves considering environmental factors, it does not specifically refer to the selection of products and services.\n    \n- **d) Macro Environment Analysis**: This involves examining external factors that can impact an organization, such as economic, political, social, and technological trends. It is not specifically focused on environmental concerns or the procurement of goods and services.\n    \n\nIn summary, **green procurement** is the most precise term for the initiative where a company chooses products and services aimed at addressing environmental concerns.",
    "difficultyWeight": 1
  },
  {
    "id": "2020A_FE_AM_1",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2020,
    "questionText": "When the decimal arithmetic expression, $\\frac{7}{32}$, is evaluated, which of the following represents the result in binary?",
    "options": [
      "0.001011",
      "0.001101",
      "0.00111",
      "0.0111"
    ],
    "correctIndex": 2,
    "explanation": "## Usual Method\n### Step 1: Divide 7 by 32\n\n$\frac{7}{32} = 0.21875$\n\n### Step 2: Convert 0.21875 to binary.\n\n$0.21875 \times 2 = 0.4375$ (integer is 0).\n$0.4375 \times 2 = 0.875$ (integer is 0).\n$0.875 \times 2 = 1.75$ (integer is 1).\n$0.75 \times 2 = 1.5$ (integer is 1).\n$0.5 \times 2 = 1.0$ (integer is 1, and we stop since the fraction is now 0).\n\n### Step 3: Put it together from top to bottom\n\n$0.00111$ (**final answer**)\n\n## Shifting Method (only applicable to powers of 2)\n### Step 1: Check if the denominator is a power of 2.\n\n$32 = 2^{5}$ (32 is a power of 2, so the shifting method is applicable)\n### Step 2: Write the numerator in binary.\n\n$7 = 111$\n### Step 3: Shifting the binary representation\n#### How shifting works\n- The shifting method is only **applicable** if the following conditions are met:\n\t- The *denominator* is a ***power of 2***. If the question here were was $\frac{7}{27}$, the shifting method cannot be used since 27 is not a power of 2.\n\t- During only ***multiplication*** and ***division*** operations. So for questions that require the addition or subtraction of decimal no. the shifting method cannot be used to convert that decimal no. to binary.\n- If **multiplication**, you have to ***left-shift***. If **division**, you have to ***right-shift***.\n- The amount of shifting to be done is dependent on $2^{n}$, $n$ here is $5$, so we have to shift 5 times here. In this case, we ***right-shift*** because the operation used was **division**.\n\n$111$ (***right-shift*** **5** times) -> $00111$\n- Since the decimal conversion wasn't a whole no. then we add $0.$ to obtain the final result.\n$00111$ -> $0.00111$\n- Therefore, the final answer is $0.00111$.",
    "difficultyWeight": 1
  },
  {
    "id": "2020A_FE_AM_2",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2020,
    "questionText": "![Image](Files/Pasted%20image%2020241019112353.png)",
    "options": [
      "$(p \\cdot (\\overline{p} + q)) \\cdot \\overline{q}$",
      "$(p \\cdot \\overline{q}) \\cdot (\\overline{p} + \\overline{q})$",
      "$p + (p \\cdot q)$",
      "$\\overline{p} + (p \\cdot \\overline{q}) + q$"
    ],
    "correctIndex": 0,
    "explanation": "### Step 1: Simplify the innermost part.\n\n$overline{p} + q$\n- The value of this expression is **TRUE** whenever $p$ is **FALSE** and $q$ is **TRUE**.\n\n### Step 2: Evaluate the left-most expression.\n\n$p cdot (overline{p} + q)$\n- The value of this expression is **TRUE** when $p$ is **TRUE** and $overline{p} + q$ is also **TRUE**.\n- However, if $p$ is **TRUE**, then $overline{p} + q$ depends only on $q$. If $q$ is **FALSE**, the whole expression $(p cdot (overline{p} + q)) cdot overline{q}$ becomes FALSE.\n\n### Step 3: Evaluate the whole expression.\n\n$(p cdot (overline{p} + q)) cdot overline{q}$\n- $overline{q}$ is **TRUE** if $q$ is **FALSE**.\n- For the whole expression to be **TRUE**, $p cdot (overline{p} + q)$ must be **TRUE** and $overline{q}$ must also be **TRUE**.\n- This means $q$ must be **FALSE**. But if $q$ is **FALSE**, the entire expression also becomes **FALSE**.\n- If $p$ is **FALSE**, then the $p cdot (overline{p} + q)$ expression is **FALSE** as well.\n- Therefore, this expression always evaluates to **FALSE**, regardless of the truth values of $p$ and $q$.\n\nTherefore it's a **contradiction**.",
    "difficultyWeight": 1
  },
  {
    "id": "2020A_FE_AM_3",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2020,
    "questionText": "A factory manufactures the same products on two production lines, A and B. Line A manufactures $60$% of all products, and B manufactures the remaining $40$%. Defect rates of products manufactured in A and in B are $2$% and $1$%, respectively. When a product was randomly chosen for inspection among the products manufactured in this factory, it was found to be defective. What is the percentage of probability that the product was manufactured in Line A?",
    "options": [
      "40",
      "50",
      "60",
      "75"
    ],
    "correctIndex": 3,
    "explanation": "### Step 1: Calculate the total defective products for each line.\n\nLine A: $60% \times 2% = 1.2%$ of total products\n- Line A has a total of $1.2%$ of defective products.\nLine B: $40% \times 1% = 0.4%$ of total products\n- Line B has a total of $0.4%$ of defective products.\n\n### Step 2: Combine both to calculate the total percentage of defective products.\n\nTotal defects = $1.2% + 0.4% = 1.6%$ of total products\n- $1.6%$ of all products are defective.\n\n### Step 3: Find the proportion of defective products from Line A.\n\n$\frac{Defects from A}{Total defects} = \frac{1.2}{1.6} = 0.75$\n- Therefore, there's a $75%$ chance of probability that the product was manufactured in A.",
    "difficultyWeight": 1
  },
  {
    "id": "2020A_FE_AM_4",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2020,
    "questionText": "For an $8$-bit code with the most significant bit as its parity bit, which of the following is used to obtain the lower seven ($7$) bits other than parity?",
    "options": [
      "Perform a bitwise AND operation with $0$F in hexadecimal",
      "Perform a bitwise AND operation with $7$F in hexadecimal",
      "Perform a bitwise OR operation with $0$F in hexadecimal",
      "Perform a bitwise XOR (exclusive OR) operation with FF in hexadecimal"
    ],
    "correctIndex": 1,
    "explanation": "### Illustration\n![Image](Files/Pasted%20image%2020241019155644.png)\n\n- Therefore, the correct answer is b).",
    "difficultyWeight": 1
  },
  {
    "id": "2020A_FE_AM_5",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2020,
    "questionText": "In machine learning, which of the following is an appropriate explanation of supervised learning?",
    "options": [
      "Clusterizing input data according to the statistical features or specific conditions of the data without any explicit processing beforehand",
      "Learning to achieve the highest score from rating good and bad aspects of individual actions",
      "Predicting a subsequent user action from the frequency of appearances of behavioral data accumulated from computer users",
      "Training by feeding input data and their correct output so that the response to unknown data is improved"
    ],
    "correctIndex": 3,
    "explanation": "### Explanation:\n\n- In supervised learning, the machine is trained on a labeled dataset, where each training example consists of an input paired with a correct output (label). The goal for the machine is to map inputs to outputs such that when the machine encounters new unseen data, it can make accurate predictions.",
    "difficultyWeight": 1
  },
  {
    "id": "2020A_FE_AM_6",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2020,
    "questionText": "![Image](Files/Pasted%20image%2020241021154848.png)",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correctIndex": 1,
    "explanation": "### Explanation:\n\n- Each node in a BST has at most **two children**, a *left* child and a *right* child. The *left* child contains values **less than** the *parent* node, and the *right* child contains values **greater than** the parent node.",
    "difficultyWeight": 1
  },
  {
    "id": "2020A_FE_AM_7",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2020,
    "questionText": "Which of the following is a description of quicksort algorithm?",
    "options": [
      "It repeats the process of comparing and swapping each pair of adjacent elements so that smaller elements are gradually moved towards the end.",
      "It repeats the process of finding the minimum element of the data, followed by its removal.",
      "It repeats the process of inserting each element of data into the correct position of a sorted sequence.",
      "It repeats the process of selecting an element as a pivot and partitions the data so that smaller elements appear before the pivot, and larger elements appear afterwards."
    ],
    "correctIndex": 3,
    "explanation": "### Explanation:\n\n- ***Quicksort*** is a sorting algorithm that picks an element as a pivot and partitions the given array around the picked pivot by placing the pivot in its correct position in the sorted array.",
    "difficultyWeight": 1
  },
  {
    "id": "2020A_FE_AM_8",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2020,
    "questionText": "![Image](Files/Pasted%20image%2020241021170001.png)",
    "options": [
      "4",
      "9",
      "10",
      "11"
    ],
    "correctIndex": 3,
    "explanation": "### Step 1: Setup the variables.\n\nA (L) = $876$\nB (S) = $204$\n\n### Step 2: Understanding the Process.\n\nHow does the *Euclidean* algorithm work based on the illustration?\n- **Condition 1:** If $L > S$, subtract $S$ from $L$.\n- **Condition 2:** If $L < S$, subtract $L$ from $S$.\n- **Condition 3:** If $L = S$, terminate the process.\nHence, the algorithm terminates once $L$ is equal to $S$.\n\n### Step 3: Commence the algorithm.\n\n- **First comparison**:\n    - $L = 876$ | $S = 204$\n    - $L > S$, so subtract $S$ from $L$. $L = 876 - 204 = 672$.\n- **Second comparison**:\n    - $L = 672$ | $S = 204$\n    - $L > S$, so subtract $S$ from $L$. $L = 672 - 204 = 468$.\n- **Third comparison**:\n    - $L = 468$ | $S = 204$\n    - $L > S$, so subtract $S$ from $L$. $L = 468 - 204 = 264$.\n- **Fourth comparison**:\n    - $L = 264$ | $S = 204$\n    - $L > S$, so subtract $S$ from $L$. $L = 264 - 204 = 60$.\n- **Fifth comparison**:\n    - $L = 60$ | $S = 204$\n    - $L < S$, so subtract $L$ from $S$, $S = 204 - 60 = 144$\n- **Sixth comparison**:\n    - $L = 60$ | $S = 144$\n    - $L < S$, so subtract $L$ from $S$, $S = 144 - 60 = 84$\n- **Seventh comparison**:\n    - $L = 60$ | $S = 84$\n    - $L < S$, so subtract $L$ from $S$. $S = 84 - 60 = 24$.\n- **Eighth comparison**:\n    - $L = 60$ | $S = 24$\n    - $L > S$, so subtract $S$ from $L$. $L = 60 - 24 = 36$.\n- **Ninth comparison**:\n    - $L = 36$ | $S = 24$\n    - $L > S$, so subtract $S$ from $L$. $L = 36 - 24 = 12$.\n- **Tenth comparison**:\n    - $L = 12$ | $S = 24$\n    - $L < S$, so subtract $L$ from $S$. $S = 24 - 12 = 12$.\n- **Eleventh comparison**:\n    - $L = 12$ | $S = 12$\n    - $L == S$, so the algorithm terminates.\nTherefore, there's exactly $11$ comparisons needed to obtain the result.",
    "difficultyWeight": 1
  },
  {
    "id": "2020A_FE_AM_9",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2020,
    "questionText": "![Image](Files/Pasted%20image%2020241022151351.png)",
    "options": [
      "[1, 2, 3, 1, 2, 3]",
      "[1, 2, 3, 3, 2, 1]",
      "[3, 2, 1, 1, 2, 3]",
      "[3, 2, 1, 3, 2, 1]"
    ],
    "correctIndex": 0,
    "explanation": "### Understanding the Process:\n\n![Image](Files/Pasted%20image%2020241022151441.png)",
    "difficultyWeight": 1
  },
  {
    "id": "2020A_FE_AM_10",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2020,
    "questionText": "![Image](Files/Pasted%20image%2020241022151952.png)",
    "options": [
      "315",
      "360",
      "1215",
      "1260"
    ],
    "correctIndex": 1,
    "explanation": "### Step 1: Identify what type of cache access it is.\n\n**Simultaneous Cache Access**: The CPU accesses both the cache and the main memory at the ***same time*** (parallel).\n**Hierarchical Cache Access**: The CPU first accesses the cache memory.\n- Based on the first sentence, we can directly see that it's a **Hierarchical Cache Access**.\n\n### Step 2: Calculate the Hit Ratio\n\nHit ratio $= 1 -$ Miss ratio\n$1 - 0.2 = 0.8$ | **Hit ratio** $= 0.8$\n\n### Step 3: Apply the formula.\n\nFormula: Average Access Time = (Hit Ratio x Cache Access Time) + (Miss Ratio x Main Memory Access Time)\n$= (0.8 cdot 75) + (0.2 cdot 1500) = 360$",
    "difficultyWeight": 1
  },
  {
    "id": "2020A_FE_AM_11",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2020,
    "questionText": "Which of the following causes an external interrupt?",
    "options": [
      "Notification of elapsed time by a timer",
      "The execution of a division-by-zero instruction",
      "The execution of a non-existent operation code",
      "The occurrence of a page fault"
    ],
    "correctIndex": 0,
    "explanation": "### Explanation:\n\n- **External interrupts** are caused by events originating outside the CPU, such as hardware signals (e.g., timers, input/output devices).\n- **Internal interrupts** (or exceptions) are generated by the processor itself, typically due to errors or unusual conditions during program execution.",
    "difficultyWeight": 1
  },
  {
    "id": "2020A_FE_AM_12",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2020,
    "questionText": "Which of the following is an appropriate explanation of a device driver?",
    "options": [
      "Software to control peripheral devices that are connected to a PC",
      "Software to install an application on a PC",
      "Software to invade another PC and cause damage",
      "Software to register the operation procedures for a keyboard or other devices and to automate this operation"
    ],
    "correctIndex": 0,
    "explanation": "### Explanation:\n\n- A device driver is a special kind of software program that controls a specific hardware attached to a computer.",
    "difficultyWeight": 1
  },
  {
    "id": "2020A_FE_AM_13",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2020,
    "questionText": "ECC is used for error detection and correction in memory. When n+2 redundant bits are required for a data bus having a width of 2n bits, what is the number of redundant bits that are required for a data bus having a width of 128 bits?",
    "options": [
      "3",
      "8",
      "9",
      "10"
    ],
    "correctIndex": 2,
    "explanation": "### Step 1: Express 128 as a power of 2.\n\nData bits $= 128$\n$128 = 2^{7}$\n\n### Step 2: Apply the formula provided.\n\nNumber of redundant bits $= n + 2$\n$= 7 + 2 = 9$",
    "difficultyWeight": 1
  },
  {
    "id": "2020A_FE_AM_14",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2020,
    "questionText": "In a web system, which of the following is an appropriate benefit of a web server and an application (AP) server being placed on different physical servers?",
    "options": [
      "Because the business logic that accompanies an access to data is placed in a program on the web server, the program on the AP server does not need to be changed in association with a change in the business logic.",
      "Because the difference between the character coding scheme of the web browser and that of the AP server is absorbed by the web server, garbled (or unreadable) characters do not appear.",
      "Because the execution environment of the client is implemented on the web server, the client and the AP server do not need to exchange screen data for each request, and only a small amount of data communication is required.",
      "Processing can be distributed according to the type of request from a client in such a way that a request for static content having a light load is processed by the web server, and a request for dynamic content having a heavy load is processed by the AP server."
    ],
    "correctIndex": 3,
    "explanation": "### Explanation:\n\na) **Incorrect**\n- Business logic is usually handled by the **application server**, not the web server. Changing business logic would require updates on the AP server, not the web server.\n\nb) **Incorrect**\n- Encoding issues are usually addressed in the software, not in server separation.\n\nc) **Incorrect**\n- The **web server** doesn't run the execution environment of the client (typically a browser). The separation of the web and application servers doesn't reduce client-server communication, as data still needs to be exchanged.\n\nd) **Correct**\n- Separating the web server and AP server allows for load balancing:\n\t- **Static content** (HTML, CSS, images) is handled by the **web server**.\n\t- **Dynamic content** (database queries or business logic) is processed by the application server.\n\nOption 'd' highlights the primary benefit of separating web and application servers, which is the ability to optimize and distribute processing load efficiently between static and dynamic content.",
    "difficultyWeight": 1
  },
  {
    "id": "2020A_FE_AM_15",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2020,
    "questionText": "Which of the following achieves data redundancy via mirroring?",
    "options": [
      "RAID 0",
      "RAID 1",
      "RAID 5",
      "RAID 6"
    ],
    "correctIndex": 1,
    "explanation": "### Explanation:\n\n- **a) RAID 0**: This does **not** provide redundancy. Instead, it uses **striping**, where data is split across multiple disks. It improves performance but offers no fault tolerance—if one disk fails, all data is lost.\n\n- **c) RAID 5**: This uses **striping with parity**, which provides fault tolerance by distributing parity information across the drives. RAID 5 can tolerate one drive failure but does not use mirroring.\n\n- **d) RAID 6**: Similar to RAID 5, RAID 6 uses **striping with double parity**, allowing it to tolerate two simultaneous drive failures. However, it does not use mirroring.\n\n**a) Incorrect**\n- RAID 0 uses **striping**, where data is split across multiple disks. It improves performance but offers no fault tolerance—if one disk fails, all data is lost.\n\n**c) Incorrect**\n- RAID 5 uses **striping with parity**, which provides fault tolerance by distributing parity information across the drives. RAID 5 can tolerate one drive failure.\n\n**d) Incorrect**\n- RAID 6 uses **striping with double parity**, allowing it to tolerate two simultaneous drive failures.\n\n**b) Correct**\n- RAID 1 uses **mirroring**, where all data is written to two (or more) drives simultaneously. This creates an exact copy (mirror) of the data on multiple drives, ensuring redundancy. If one drive fails, the data can still be retrieved from the other mirrored drive(s).",
    "difficultyWeight": 1
  },
  {
    "id": "2020A_FE_AM_16",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2020,
    "questionText": "Which of the following is an appropriate description of the dispatcher in an operating system?",
    "options": [
      "A function in which multiple tasks appear to be running simultaneously on a single processor",
      "The allocation of the right to use a processor for a ready process",
      "The context that is the information required for process execution",
      "The determination of the order of execution for each process"
    ],
    "correctIndex": 1,
    "explanation": "### Explanation:\n\n**a) Incorrect**\n- The process described is **multitasking**, where the operating system switches between tasks quickly to give the appearance of simultaneous execution.\n\n**c) Incorrect**\n- This refers to the **process control block (PCB)**, which holds the state and context information of a process.\n\n**d) Incorrect**\n- This refers to **scheduling**, which simply executes the decisions made by the scheduler.\n\n**b) Correct**\n- The ***dispatcher*** is responsible for the actual handover of CPU control from one process to another, allocating the processor to a process that is ready to run.",
    "difficultyWeight": 1
  },
  {
    "id": "2020A_FE_AM_17",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2020,
    "questionText": "Among the processes that are performed by a compiler for a procedural language, which of the following is the process that is performed first?",
    "options": [
      "Lexical analysis",
      "Optimization",
      "Semantic analysis",
      "Syntactic analysis (parsing)"
    ],
    "correctIndex": 0,
    "explanation": "### Explanation:\n\nb) **Incorrect**\n- This phase occurs much later in the compilation process.\n\nc) **Incorrect**\n- This phase follows syntactic analysis.\n\nd) **Incorrect**\n- This phase comes after lexical analysis (second phase).\n\na) **Correct**\n- This phase is first step in the compilation process, where the compiler reads the source code and converts it into tokens.",
    "difficultyWeight": 1
  },
  {
    "id": "2020A_FE_AM_18",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2020,
    "questionText": "![Image](Files/Pasted%20image%2020241023183937.png)",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correctIndex": 2,
    "explanation": "### Step 1: Break down the problem.\n\n- **Task A** has **high priority**.\n- **Task B** has **medium priority**.\n- **Task C** has **low priority**.\n\t- Each task alternates between **CPU** and **I/O operations**.\n\t- The total execution window we are concerned with is from $3$ ms to $10$ ms ($7$ ms total).\n\n### Step 2: Review the Task Information\n\n![Image](Files/Pasted%20image%2020241023184645.png)\n- Task **A**, **B**, and **C** start simultaneously at $3$ ms. Our goal is to determine which scheduling diagram correctly represents the process execution.\n### Step 3: Apply the concept of Priority Based Scheduling\n\nIn **priority scheduling**, the task with the highest priority gets the CPU whenever it is available. If a task is doing I/O, the CPU is allocated to the next highest-priority task that is ready for CPU execution.\n\n- **Task A (High priority)**:\n\t- Starts at $3$ ms with $2$ ms of CPU time, so it will run from **3 ms to 5 ms**.\n\t- It will then need I/O for $2$ ms (from **5 ms to 7 ms**), during which the CPU is free for another task.\n- **Task B (Medium priority)**:\n\t- While Task A is doing I/O (from **5 ms to 7 ms**), Task B can start its CPU execution since it has the next highest priority.\n\t- Task B needs $3$ ms of CPU, but since it can only execute for $2$ ms before Task A is ready to reclaim the CPU, Task B will run from **5 ms to 7 ms**.\n\t- Task B will now be interrupted to let Task A finish its CPU burst.\n- **Task A resumes**:\n\t- At **7 ms**, Task A finishes its I/O and reclaims the CPU for its final $2$ ms burst. Task A completes at **9 ms**.\n- **Task B resumes**:\n\t- After Task A finishes at $9$ ms, Task B will resume and complete its final $1$ ms of CPU time (since it only ran for 2 ms earlier).\n\t- Task B completes at **10 ms**.\n- **Task C (Low priority)**:\n\t- Task C can only start its execution once both higher-priority tasks are either in I/O or completed.\n\t- Task C will start at **7 ms**, as Task A is doing I/O and Task B is running.\n\t- Task C performs $2$ ms of CPU from **7 ms to 9 ms**, and then will need I/O. However, Task A resumes and finishes before Task C gets a chance to proceed further.\n\n### Step 4: Summarize and Conclude\n\nSummary:\n- **From 3 ms to 5 ms**: Task A executes on the CPU.\n- **From 5 ms to 7 ms**: Task B executes on the CPU while Task A is doing I/O.\n- **At 7 ms**: Task A resumes and completes its remaining CPU execution (from 7 ms to 9 ms).\n- **From 7 ms to 9 ms**: Task C starts executing but is interrupted for I/O after 2 ms.\n- **At 9 ms**: Task B completes its remaining 1 ms of CPU time.\n\nTherefore, the correct answer is option c because:\n- **Task A** runs from **3 to 5 ms (CPU)** and **7 to 9 ms (CPU)**.\n- **Task B** runs from **5 to 7 ms (CPU)** and finishes from **9 to 10 ms**.\n- **Task C** runs from **7 to 9 ms** and is **then interrupted for I/O**.",
    "difficultyWeight": 1
  },
  {
    "id": "2020A_FE_AM_19",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2020,
    "questionText": "Which of the following represents appropriate handling for open source software according to OSI's definition?",
    "options": [
      "For open- source software that is created for a specific industry, the scope of publishing of the source code can be limited to that industry.",
      "If open- source software is to be modified for uses such as internal use by a company without being redistributed, the modified part of the source code does not have to be published.",
      "When open- source software is modified and redistributed, the same license as the original software must be used for distribution so that the distribution conditions are remain the same as the original software.",
      "When open- source software is redistributed by a third party as a product, the developer of the open- source software can charge a license fee to the third party."
    ],
    "correctIndex": 2,
    "explanation": "### Definition:\n\nThe Open Source Initiative (OSI) defines open-source software as software that meets certain criteria:\n- **Free redistribution:** The software must be freely redistributable, including the right to sell copies.\n- **Source code availability:** The source code must be made available, allowing users to modify and improve the software.\n- **Derivative works:** Users must be allowed to create derivative works of the software and distribute them.\n- **No discrimination against persons or groups:** The software cannot discriminate against any person or group.\n- **No discrimination against fields of endeavor:** The software cannot be restricted to any particular field of endeavor.\n- **Distribution of license terms:** The license terms must be attached to the software and must allow for redistribution.\n\n### Comparison:\n\na) **Incorrect**\n- It limits the scope of publishing the source code to a specific industry, which violates the principle of \"free redistribution\" and \"no discrimination against fields of endeavor.\"\n\nb) **Incorrect**\n- It suggests that modified parts of the software do not need to be published if they are not being redistributed, which violates the principle of \"source code availability\" and \"derivative works\".\n\nd) **Incorrect**\n- It suggests that the original developer can charge a license fee for redistribution by a third party, which violates the principle of \"free redistribution\".\n\nc) **Correct**\n- It directly addresses the requirement for \"free redistribution\" and ensures that the same conditions for distribution are maintained when the software is modified and redistributed.",
    "difficultyWeight": 1
  },
  {
    "id": "2020A_FE_AM_20",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2020,
    "questionText": "Which of the following is an appropriate description of DRAM?",
    "options": [
      "It is memory that requires a refresh operation, and it is used as the main memory of a PC.",
      "It is non-volatile memory of a NAND type or a NOR type, and it is used as an SSD.",
      "It is non-volatile memory that is capable of erasing and writing data in byte units, and it is used when data need to be retained even when the power supply is turned off.",
      "Its memory cells consist of flip-flops, and it is used for cache memory."
    ],
    "correctIndex": 0,
    "explanation": "### Explanation:\n\nb) **Incorrect**\n- It describes flash memory, which is a type of non-volatile memory used in solid-state drives (SSDs).\n\nc) **Incorrect**\n- It describes NOR flash memory, which is another type of non-volatile memory used in embedded systems and microcontrollers.\n\nd) **Incorrect**\n- It describes SRAM (Static Random Access Memory), which is another type of volatile memory used for cache memory.\n\na) **Correct**\n- DRAM is a type of volatile memory that requires periodic refreshing to retain its data. It is the most common type of main memory used in computers due to its high capacity and relatively low cost.",
    "difficultyWeight": 1
  },
  {
    "id": "2020A_FE_AM_21",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2020,
    "questionText": "Which of the following is a secondary (rechargeable) battery?",
    "options": [
      "Alkaline–manganese dry-cell battery",
      "Fuel cell",
      "Lithium-ion battery",
      "Silver-oxide battery"
    ],
    "correctIndex": 2,
    "explanation": "### Explanation:\n\n- **a) Incorrect**: It's a primary battery, meaning it cannot be recharged.\n- **b) Incorrect**: It's a device that converts chemical energy into electrical energy. While it can generate electricity for extended periods, it's not technically a battery.\n- **d) Incorrect**: It's a primary battery and cannot be recharged.\n- **c) Correct**: It's a secondary battery, meaning it can be recharged multiple times.",
    "difficultyWeight": 1
  },
  {
    "id": "2020A_FE_AM_22",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2020,
    "questionText": "![Image](Files/Pasted%20image%2020241023182339.png)",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correctIndex": 2,
    "explanation": "### Explanation:\n\n**OR Gate Output**: Z = X + Y\n\n**Desired NAND Gate Output**: Z = ¬(X * Y)\n\n**Connecting the NOT Gate**:\n- To convert the OR gate output to a NAND gate output, we need to negate the output of the OR gate.\n- Adding a NOT gate to the output of the OR gate inverts the OR gate’s output, thus achieving Z = ¬(X + Y).\n\n![Image](Files/Pasted%20image%2020241023183403.png)",
    "difficultyWeight": 1
  },
  {
    "id": "2020A_FE_AM_23",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2020,
    "questionText": "Which of the following is an appropriate usage of radio buttons in GUI applications?",
    "options": [
      "To select multiple items from a group of items",
      "To select one item from a group of mutually exclusive items",
      "To select one item from a list or to enter new item into a text box",
      "To select one item from a list that is displayed when a button is pressed"
    ],
    "correctIndex": 1,
    "explanation": "### Explanation:\n\n- **a) Incorrect**: Check boxes are used when multiple selections are allowed.\n- **c) Incorrect**: Combo box or dropdown menu is used to enter new text.\n- **d) Incorrect**: Dropdown menu allows users to choose one item from a list that appears only when the button is pressed.\n- **b) Correct**: Radio buttons are designed for selecting a single option from a group of mutually exclusive choices.",
    "difficultyWeight": 1
  },
  {
    "id": "2020A_FE_AM_24",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2020,
    "questionText": "Which of the following is a method of improving the appearance of a jagged edge of a slanted line to be smoothed on a screen, such as that of an LCD?",
    "options": [
      "Anti-aliasing",
      "Bump mapping",
      "Shading",
      "Texture mapping"
    ],
    "correctIndex": 0,
    "explanation": "### Explanation:\n\n- **b) Incorrect**: Bump mapping is a technique used to create the illusion of surface detail and texture without adding more geometry.\n- **c) Incorrect**: Shading refers to the process of adjusting the color and brightness of surfaces in 3D models to simulate light and shadow, giving a sense of depth and realism.\n- **d) Incorrect**: Texture mapping is the process of applying a 2D image (a texture) onto the surface of a 3D model to add detail like color or patterns.\n- **a) Correct**: Anti-aliasing is a technique used to reduce the appearance of jagged edges (also known as \"aliasing\") on diagonal or curved lines on a digital screen.",
    "difficultyWeight": 1
  },
  {
    "id": "2020A_FE_AM_25",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2020,
    "questionText": "![Image](Files/Pasted%20image%2020241023152758.png)",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correctIndex": 2,
    "explanation": "### Step 1: Understanding Function Dependency\n\nFunctional Dependencies basically work like this:\n- A → B: Knowing A allows us to determine B\n- A → C: Knowing A allows us to determine C\n- CP → Q: Knowing both C and P allows us to determine Q\n- CP → T: Knowing both C and P allows us to determine T\n\n### Step 2: Apply and Compare\n\n- **a) Incorrect**: Knowing A only allows us to derive both B and C.\n- **b) Incorrect**: Knowing A only allows us to derive both B and C. We cannot derive anything with B.\n- **d) Incorrect**: Knowing C and P only allows us to derive both Q and T.\n- **c) Correct**: Knowing A allows us to derive both B and C. Now, knowing C and P allows us to derive both Q and T.\n\nThus, A and P can determine all attributes in the relation.",
    "difficultyWeight": 1
  },
  {
    "id": "2020A_FE_AM_26",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2020,
    "questionText": "![Image](Files/Pasted%20image%2020241023180435.png)",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correctIndex": 3,
    "explanation": "### Understanding the SQL Query Logic:\n\nLet's break down the logic needed for the SQL Query in this problem:\n1. **Goal of the Query**:\n    - We want to retrieve the **Manager_ID** and the **average salary** of the employees reporting directly to each manager. The query must be structured to join the employee table with itself to compare employees and their managers.\n2. **Self-Join (Employees a, Employees b)**:\n    - We are joining the `Employees` table with itself (aliasing as `a` and `b`).\n    - In this case:\n        - `a` represents the **employees** (whose salaries we are averaging).\n        - `b` represents the **managers** of those employees.\n3. **Columns E and F**:\n    - We need to retrieve the **Manager_ID** for each manager and the average salary of their employees.\n4. **Correct Mapping of E and F**:\n    - **E** is the **Manager_ID** (from table `b`, because `b` represents the managers).\n    - **F** is the **Emp_ID** (from table `a`, because `a` represents the employees who report to the managers).\n    - This is based on the `WHERE` condition, which checks if `a.Manager_ID = b.Emp_ID`. This condition matches each employee (`a`) with their manager (`b`).\n5. **Grouping and Ordering**:\n    - We group by the **Manager_ID** (`b.Emp_ID`), as we want to calculate the average salary of the employees for each manager.\n    - We also order the results by **Manager_ID** (`b.Emp_ID`) to display the managers in order.\n\n### Why option d is correct?:\n\n- **E** should be `b.Emp_ID`, which represents the **Manager_ID** in the final output (because `b` is the manager).\n- **F** should be `a.Manager_ID`, which represents the manager's ID in relation to the employee (because `a` is the employee).",
    "difficultyWeight": 1
  },
  {
    "id": "2020A_FE_AM_27",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2020,
    "questionText": "![Image](Files/Pasted%20image%2020241023181132.png)",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correctIndex": 3,
    "explanation": "### Understanding the Relationships and Conditions:\n\nLet's break them down:\n1. **Condition (1): One or more employees belong to a department.**\n    - This implies that a department must have at least one employee, but it can have many employees.\n    - This is reflected by a **1..*** multiplicity on the department side (because each department must have at least one employee, but can have many).\n    - Therefore, the multiplicity in **I** (on the side of 'Department') should be **1..***.\n2. **Condition (2): An employee belongs to only one department.**\n    - This implies that an employee cannot belong to more than one department at the same time (i.e., one-to-one relationship at any given moment).\n    - This is represented by a multiplicity of **1..1** on the employee side in the 'Assignment history' entity. In the context of the 'Assignment history,' each entry will correspond to exactly one employee and exactly one department at a given time.\n3. **Condition (3): The history of departments to which an employee has belonged is recorded as the assignment history.**\n    - This means an employee can have many entries in the assignment history, reflecting multiple departments they have belonged to over time.\n    - Thus, the 'Assignment history' can have multiple entries per employee, making the multiplicity on the employee side **1..*** (because an employee can have multiple assignment records, but each record belongs to one employee at a time).\n    - Therefore, the multiplicity in **II** (on the side of 'Employee') should be **1..***.\n\n### Why option d is correct?:\n\n- **I** (Department side of the assignment history): A department can have one or more employees. Hence, the multiplicity is **1..***.\n- **II** (Employee side of the assignment history): An employee can have multiple assignments in the history (but each assignment relates to exactly one employee). Hence, the multiplicity is **1..***.",
    "difficultyWeight": 1
  },
  {
    "id": "2020A_FE_AM_28",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2020,
    "questionText": "When a failure occurs in a storage unit that stores a database, which of the following is an operation that can recover the database by using backup files and a log?",
    "options": [
      "Archive",
      "Checkpoint dump",
      "Commit",
      "Rollforward"
    ],
    "correctIndex": 3,
    "explanation": "### Explanation:\n\n- **a) Incorrect**: **Archiving** refers to the process of moving data that is no longer actively used to a separate storage location for long-term retention.\n\n- **b) Incorrect**: **Checkpoint dump** is a point-in-time snapshot of the database taken at regular intervals.\n\n- **c) Incorrect**: **Commit** indicates that a transaction has been completed and all changes should be made permanent in the database.\n\n- **d) Correct**: **Rollforward** is a recovery operation used in database management systems to restore a database to a consistent state after a failure.",
    "difficultyWeight": 1
  },
  {
    "id": "2020A_FE_AM_29",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2020,
    "questionText": "Which of the following is an appropriate explanation of the granularity of locks?",
    "options": [
      "When a large number of transactions update the same data, and the granularity is set as large, the number of transactions that can be simultaneously executed increases.",
      "When all data in a table are referenced, and the granularity is set as large, data referenced from other transactions can be undisturbed.",
      "When data are updated, and the granularity is set as large, the waiting times of other transactions increase, and the total throughput declines.",
      "RollfWhen the granularity is set as large, the number of included data increases, and the number of locks that one transaction makes increases.orward"
    ],
    "correctIndex": 2,
    "explanation": "### Explanation:\n\n- **a) Incorrect**: It's incorrect because large granularity actually reduces the number of transactions that can be executed simultaneously. A larger lock scope means that more data is locked, thereby preventing other transactions from accessing it.\n\n- **b) Incorrect**: The statement is misleading. When granularity is large, other transactions cannot access the locked data, causing disturbances rather than undisturbed access.\n\n- **d) Incorrect**: It's incorrect because a larger granularity means that a single lock may cover more data, which reduces the total number of locks needed, not increases it.\n\n- **c) Correct**: **Granularity of locks** refers to the size or scope of the data that a lock controls. When the granularity is set as large, it can lead to increased waiting times for other transactions because they may be blocked from accessing any part of the locked resource until the lock is released.",
    "difficultyWeight": 1
  },
  {
    "id": "2020A_FE_AM_30",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2020,
    "questionText": "Approximately how many seconds is required to transmit a file of $106$ bytes via a $64$-kbit/s communication line? Here, the transmission efficiency of the line is $80$%.",
    "options": [
      "19.6",
      "100",
      "124",
      "156"
    ],
    "correctIndex": 3,
    "explanation": "### Step 1: Convert the file size to bits.\n\nFormula: bytes × bits/byte\n$= 1,000,000 × 8 = 8,000,000$ bits\n\n### Step 2: Calculate the effective transmission speed.\n\nFormula: Effective speed = kbit/s × transmission efficiency\n$= 64 × 0.80 = 51.2$ kbit/s\n\n### Step 3: Convert the kbit/s to bits.\n\n$= 51.2 = 51,200$ bits\n\n### Step 4: Calculate the time to transmit the file.\n\n ![Image](Files/Pasted%20image%2020241023161437.png) \n $\frac{8,000,000}{51,200} = 156.2$ seconds\n\n- Therefore, option d, 156, is correct.",
    "difficultyWeight": 1
  },
  {
    "id": "2020A_FE_AM_31",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2020,
    "questionText": "Which of the following is a device that connects multiple LANs by relaying data through the protocol information of the data link layer of the OSI basic reference model?",
    "options": [
      "Bridge",
      "Gateway",
      "Repeater",
      "Router"
    ],
    "correctIndex": 0,
    "explanation": "### **Explanation:**\n\n**a) Bridge** - Used to connect two or more LAN to create a larger network, operating at the Data Link Layer. It only connects LAN segments that use the same protocol. Think of bridges as a simpler, less efficient version of a switch. If a switch can connect hosts and LAN segments (switch to switch), a bridge can only connect LAN segments, not the hosts. Also keep in mind that **Every switch is a bridge, but bridges are not truly switches.**\n\n### Other Options\n\n**b) Gateway** - Acts as a gate between two networks, allowing for communication even if they use different protocols. So, in a sense, a gateway performs protocol translation or data formatting in order for data to flow between networks easily.\n\n**c) Repeater** - It operates at the physical layer, retransmitting data over longer distances, eliminating signal degradation when traveling from source to destination. It does not care about any protocol information.\n\n**d) Router** - A router directs data packets between networks, determining the best path for the data to travel between networks, operating at the network layer. A router connects LAN to WAN, while a bridge connects LAN to LAN.",
    "difficultyWeight": 1
  },
  {
    "id": "2020A_FE_AM_32",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2020,
    "questionText": "Which of the following is a role played by a DNS in a TCP/IP network?",
    "options": [
      "It assigns an unused IP address from the pool of addresses in response to a request from a PC or a printer.",
      "It associates domain or host names with IP addresses.",
      "It converts private IP addresses used within a company into global IP addresses, and it enables access to the Internet.",
      "It enables a program in a server to be called by only specifying the program name without being aware of the IP address of the server."
    ],
    "correctIndex": 1,
    "explanation": "### **Explanation:**\n\n**b)** **DNS (Domain Name System)** is responsible for translating human-readable domain names (www.wuwatracker.com) into their corresponding IP addresses (104.21.6.165). This allows users to easily access websites using familiar names instead of memorizing an IP address.\n\n### Other Options\n\n**a)** It describes **DHCP (Dynamic Host Configuration Protocol)**, which is responsible for automatically assigning IP addresses to hosts or devices on a network, simplifying network management and preventing conflicts from having similar IP addresses.\n\n**c)** This process describes what **NAT (Network Address Translation)** does, which converts private IP addresses into public IP addresses (and vice versa), allowing internet access to devices using private IPs.\n\n**d)** This describes the Service Discovery protocol. While **DNS (Domain Name System)** resolves domain names to IP addresses, it does **not** provide the ability to call specific programs or services on a server by name. For this, you would need additional protocols or layers of service discovery, which are not part of DNS's core functionality.",
    "difficultyWeight": 1
  },
  {
    "id": "2020A_FE_AM_33",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2020,
    "questionText": "What is the broadcast address of a network to which the IP address 192.168.57.123/22 belongs?",
    "options": [
      "192.168.55.255",
      "192.168.57.255.",
      "192.168.59.255",
      "192.168.63.255"
    ],
    "correctIndex": 2,
    "explanation": "### **Explanation:**\n\n### Step 1: Understand the Subnet Mask\n\nThe CIDR notation `/22` indicates that the subnet mask has 22 bits.\n- **Subnet Mask**: 255.255.252.0\n- In binary: `11111111.11111111.11111100.00000000`\n\n### Step 2: Determine the *Network* Address\n\nTo find the network address, perform a bitwise AND operation between the IP address and the subnet mask.\n- **IP Address**: 192.168.57.123 (binary: `11000000.10101000.00111001.01111011`)\n- **Subnet Mask**: 255.255.252.0 (binary: `11111111.11111111.11111100.00000000`)\n\nBitwise AND of IP address and Subnet Mask\n```\n(192.168.56.0)  11000000.10101000.00111000.00000000\n(255.255.252.0) 11111111.11111111.11111100.00000000\n---------------------------------------------------\n(192.168.56.0)  11000000.10101000.00111000.00000000\n```\nThe network address is **192.168.56.0**.\n\n### Step 3: Calculate the Broadcast Address\n\nWith a `/22` mask, there are **10 bits** for hosts (32 total bits - 22 bits for the network). This means the broadcast address is calculated by adding `2^10 - 1` to the network address:\n- **Host Range**: 192.168.56.0 to 192.168.59.255\n- The broadcast address is the last address in this range: **192.168.59.255**.",
    "difficultyWeight": 1
  },
  {
    "id": "2020A_FE_AM_34",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2020,
    "questionText": "Which of the following is an Internet standard that extends the format of email header fields to handle not only text messages but also audio and image files?",
    "options": [
      "HTML",
      "MHS",
      "MIME",
      "SMTP5"
    ],
    "correctIndex": 2,
    "explanation": "### **Explanation:**\n\n**c) MIME** - **(Multipurpose Internet Mail Extensions)** is a widely used internet standard that extends the original format of email to support the transmission of various media types. MIME allows emails to include non-text content such as images, audio, video, and other file attachments.\n\n### Other Options\n\n**a) HTML** - **(Hypertext Markup Language)** is the standard markup language used for creating web pages and web applications. It structures the content on the web through the use of tags for headings, paragraphs, links, images, and more. It is not designed for email transmission.\n\n**b) MHS** - **(Message Handling System)** was designed to handle message tracking, non-delivery reports, and multi-protocol routing. MHS is more robust but also more complex and slower compared to modern standards. In a way, MHS has similar core goals with SMTP, but MHS is more feature-rich and complex.\n\n> [!TIP]\n> Imagine (MHS) Notion having the same goals as (SMTP) Obsidian. Notion has more features and is more than just a note-taking app, while Obsidian excels at lightweight note-taking without extra layers of complexity. Also, MHS is designed for a different set of protocols compared to SMTP.\n\n**d) SMTP** - **(Simple Mail Transfer Protocol)** is a protocol used for sending and receiving email messages across the internet. It handles the transmission of emails but does not concern itself with the format or content types of the messages being sent. While SMTP lacks the complexity of MHS, it is faster, more efficient, and well-suited for the broader, less formal nature of internet communication.",
    "difficultyWeight": 1
  },
  {
    "id": "2020A_FE_AM_35",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2020,
    "questionText": "Which of the following attacks is classified as DNS cache poisoning?",
    "options": [
      "False domain information is injected into the DNS server that is referenced by a PC, and it leads the user to a fake server.",
      "The version information of the DNS server software is obtained to identify a security hole.",
      "To interrupt the target service, the attacker uses the DNS server as a steppingstone to send a large number of recursive queries.",
      "To obtain internal information, the zone information stored in the DNS server is compiled and transferred."
    ],
    "correctIndex": 0,
    "explanation": "### **Explanation:**\n\n**DNS cache poisoning** occurs when a hacker tricks a DNS resolver into storing incorrect information in its cache. This incorrect information would redirect users or hosts to malicious sites instead of the legitimate ones they intended to visit. The attacker can use this to steal sensitive information, spread malware, or conduct phishing attacks.",
    "difficultyWeight": 1
  },
  {
    "id": "2020A_FE_AM_36",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2020,
    "questionText": "Which of the following is a type of public-key cryptography that utilizes the difficulty of factorizing extremely large numbers into primes?",
    "options": [
      "AES",
      "DH",
      "DSA",
      "RSA"
    ],
    "correctIndex": 3,
    "explanation": "### **Explanation:**\n\n**d) RSA (Rivest–Shamir–Adleman)** - A **public-key encryption algorithm** that relies specifically on the difficulty of breaking down a large number into the two prime numbers that were used to create it.\n\n### Other Options\n\n**a) AES (Advanced Encryption Standard)** - Is a **symmetric encryption algorithm**, which means it uses the same key for both locking and unlocking the data (encrypting and decrypting). It relies on complex mathematical operations like substitution and permutation to securely encrypt data.\n\n**b) DH (Diffie-Hellman)** - Is a method used for **securely exchanging cryptographic keys** over a public channel, so two people can share a secret key without someone else figuring it out. It uses math based on something called **discrete logarithms.**\n\n**c) DSA (Digital Signature Algorithm)** - Is a **digital signature algorithm**, which is used for verifying the authenticity of digital messages or documents. It also relies on the **discrete logarithm problem** for its security.",
    "difficultyWeight": 1
  },
  {
    "id": "2020A_FE_AM_37",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2020,
    "questionText": "Which of the following is appropriate conduct for a white-hat hacker?",
    "options": [
      "Breaking into a system and changing one of the files without permission and reporting the weaknesses to the owner.",
      "Breaking into a system to analyze its vulnerabilities with the owner’s permission and within the prescribed rules of engagement.",
      "Logging into a system to show fellow hackers real-life examples of deleting a file without the owner’s permission.",
      "Looking at secret data on a system with the motivation of personal or financial objectives, protest, or espionage."
    ],
    "correctIndex": 1,
    "explanation": "### **Explanation:**\n\nA White-hat hacker acts ethically and with authorization. They could be testing a system for someone, finding vulnerabilities to help improve security, rather than trying to damage it or take advantage of the vulnerabilities. So, the appropriate conduct for a White-hat hacker would be 'Breaking into a system to analyze its vulnerabilities with the owner’s permission and within the prescribed rules of engagement.'",
    "difficultyWeight": 1
  },
  {
    "id": "2020A_FE_AM_38",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2020,
    "questionText": "Which of the following is an appropriate explanation of an SQL injection attack?",
    "options": [
      "It is an attack in which a command for performing a malicious query or operation is entered in the website where there is a vulnerability in a web application to acquire or falsify data without authorization. ",
      "It is an attack in which a commercial DBMS vulnerability is exploited to search the host database server and cause repeated infections in order to cause a sudden rise in Internet traffic. ",
      "It is an attack in which a malicious script is executed on the visitor’s web browser by sending the malicious code to the website displaying the visitor’s input data. ",
      "It is an attack in which a website visitor is made to view a web page containing an embedded malicious script, and the visitor is then made to perform an unintentional operation on another website."
    ],
    "correctIndex": 0,
    "explanation": "### **Explanation:**\n\nSQL injection exploits vulnerabilities in a web application's input fields, allowing attackers to execute SQL commands to manipulate the database.\n\n### Example Scenario\n\nConsider a website that uses the following query to log in:\n```sql\nSELECT * FROM users WHERE username = 'john' AND password = 'password123';\n```\n\nTypically, you would need to know both the password and the username in order to bypass the authentication check. However, since usernames are easier to guess than passwords, the attacker can instead inject a malicious input into the username field:\n```bash\njohn' OR '1'='1\n```\n\nTransforming the original query into:\n```sql\nSELECT * FROM users WHERE username = 'john' OR '1'='1' AND password = 'password123';\n```\n\n### Breakdown of the Conditions\n\n**First Condition (`username = 'john'`)**\n- If 'john' exists in the database, this condition evaluates to **true**.\n\n**Second Condition (`'1'='1' AND password = 'password123'`)**\n- Here, `'1'='1'` is always **true**.\n- However, for this part of the condition to be **true**, the password also needs to be correct, which is not typically known to the attacker.\n\nSince the query uses an **OR** condition, only one part of the overall condition needs to be true for the query to return results. This means the attacker only needs to know the username of a user, making it easier to gain access to unauthorized accounts.",
    "difficultyWeight": 1
  },
  {
    "id": "2020A_FE_AM_39",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2020,
    "questionText": "Which of the following is an appropriate use of a private key for a digital signature?",
    "options": [
      "The recipient can use the private key to restore an encrypted message to its original status. ",
      "The sender can use the private key to create a signature and attach it to a message, and the recipient can confirm the sender. ",
      "The sender can use the private key to encrypt a message with an attached fixed string, and the recipient can identify sections that are falsified. ",
      "The sender can use the private key to encrypt a message, and the content of the message cannot be understood by unrelated parties."
    ],
    "correctIndex": 1,
    "explanation": "### **Explanation:**\n\n**b)** A **private key** in the context of a digital signature is used by the sender to **create** the signature, which ensures the authenticity of the message. The recipient can then verify the signature using the sender's **public key**, confirming that the message came from the sender and wasn't altered.\n\n### Other Options\n\n**a)** is incorrect because **private keys are not used by the recipient** to decrypt a message. Private keys are typically used by the sender to sign, while **public keys** are used to verify the signature or decrypt messages.\n\n**c)** is incorrect because while private keys can be used to sign data, the process described here (encrypting with a fixed string) is not how private keys function in digital signatures.\n\n**d)** is incorrect because **encrypting a message** is usually done using the **recipient’s public key**, not the sender’s private key. The private key is used for signing, not encrypting messages for confidentiality.",
    "difficultyWeight": 1
  },
  {
    "id": "2020A_FE_AM_40",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2020,
    "questionText": "Which of the following is a characteristic of a worm, as compared with a Trojan horse?",
    "options": [
      "Arbitrarily encrypting files so that they cannot be read normally ",
      "Causing an infection to spread by itself by using the network and removable media ",
      "Performing an unauthorized action as an individual program ",
      "Waiting without performing any activity until a specific condition is established"
    ],
    "correctIndex": 1,
    "explanation": "### **Explanation:**\n\n**b)** A **worm** is a type of malware that can **spread by itself** across networks and through removable media (like USB drives). Unlike a Trojan horse, which requires the user to execute the program, worms exploit vulnerabilities and propagate automatically without user intervention.\n\n### Other Options\n\n**a)** is incorrect because arbitrarily encrypting files is a characteristic of **ransomware**, not a worm.\n\n**c)** is incorrect because performing an unauthorized action as an individual program is characteristic of a **Trojan horse**, which masquerades as legitimate software but performs malicious actions when executed.\n\n**d)** is incorrect because waiting for a specific condition before acting is characteristic of a **logic bomb**, not a worm.",
    "difficultyWeight": 1
  },
  {
    "id": "2020A_FE_AM_41",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2020,
    "questionText": "Which of the following is an appropriate explanation of CSIRT?",
    "options": [
      "It is a generic term for an organization that is established within a company, organization, or government agency, and it receives reports on information security incidents for investigation and response.",
      "It is a generic term for people or an organization whose aim is to achieve a religious or political goal by utilizing IT.",
      "It is an organization that creates technical documents concerning the Internet, and it investigates standardization issues.",
      "It is an organization that defines the IP-address allocation policy. It operates and monitors DNS root servers and coordinates DNS management and other such matters on a global scale."
    ],
    "correctIndex": 0,
    "explanation": "### Explanation:\n\nA **CSIRT** (Computer Security Incident Response Team) is a specialized team responsible for responding to information security incidents, such as breaches, malware attacks, or data leaks. They investigate, mitigate, and help prevent future security issues by handling reports of incidents, analyzing their causes, and providing recommendations for improving security practices.",
    "difficultyWeight": 1
  },
  {
    "id": "2020A_FE_AM_42",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2020,
    "questionText": "There is a network that is divided into three (3) segments (i.e., external segment, DMZ, and internal segment) by one (1) firewall... Which of the following is the most appropriate method of server installation that can protect important data from unauthorized access from the Internet?",
    "options": [
      "Installation of the web server and database server in the internal segment",
      "Installation of the web server and the database server in the DMZ",
      "Installation of the web server in the DMZ and the database server in the internal segment",
      "Installation of the web server in the external segment and the database server in the DMZ"
    ],
    "correctIndex": 2,
    "explanation": "## **Explanation:**\n\nThe scenario requires balancing user accessibility with the protection of sensitive data stored in the server. The **DMZ (Demilitarized Zone)** is a semi-trusted network that is accessible from the **external network**, and the **internal segment** is the most secure part of the network, designed to protect sensitive data from external threats. The **external network** is available to anyone, making it less secure and more likely to face attacks.\n\nThe **web server** is intended for users to access services, so placing it in the **DMZ** would allow it to be reachable from the external network while maintaining a level of security. The DMZ allows the web server to interact with users and restricts direct access to the internal network.\n\nMeanwhile, the **database**, which contains important and sensitive data, should be placed in the **internal segment**, the most secure part of the network. This placement ensures that the database is well-protected from unauthorized access, and only the web server in the DMZ (or other authorized systems) can communicate with it.",
    "difficultyWeight": 1
  },
  {
    "id": "2020A_FE_AM_43",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2020,
    "questionText": "Which of the following is a purpose of using a port scanner during an inspection of a web server?",
    "options": [
      "Detecting the vulnerability of contents by logging in with a valid user ID and directly checking the contents of the web server",
      "Detecting unauthorized use by analyzing the access history of the web server",
      "Ensuring that no unnecessary service is operating by enumerating services on the web server",
      "Ensuring that there is no deviation from the information-security policy by checking the management status of the web-server user IDs with the operator"
    ],
    "correctIndex": 2,
    "explanation": "### Explanation:\n\nA **port scanner** is a tool used to scan and identify open ports on a server. Each port corresponds to a specific service running on the server (e.g., HTTP, FTP, SSH). By scanning the ports, you can determine which services are active, which is very useful in checking if there are unnecessary services that are running.\n\n### Other Options\n\n**a)** is about checking the contents of the web server by logging in.\n\n**b)** is about analyzing access history, not scanning ports.\n\n**d)** is about checking user ID management, which is not something a port scanner does.",
    "difficultyWeight": 1
  },
  {
    "id": "2020A_FE_AM_44",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2020,
    "questionText": "![Image](Files/Pasted%20image%2020241019171543.png)",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correctIndex": 2,
    "explanation": "### **Explanation:**\n\n> [!NOTE] Type of ports (AVAST)\n> ![Image](Files/Pasted%20image%2020241019180010.png)\n\nA PC uses dynamic ports, specifically those in the range of **1024 and higher**, to establish network connections. Port **80** is designated for HTTP (HyperText Transfer Protocol) traffic, which is the default port for web servers. Therefore, when a PC initiates a connection, it will use a source port number of 1024 or higher and a destination port number of 80. Conversely, the web server will have its source port set to 80 for incoming connections, while the destination port will be from the dynamic range for outgoing responses (1024 or higher).",
    "difficultyWeight": 1
  },
  {
    "id": "2020A_FE_AM_45",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2020,
    "questionText": "Which of the following UML diagrams shows the exchange of messages among objects, message transmission, and object lifelines in a time series?",
    "options": [
      "Activity diagram",
      "Communication diagram",
      "Sequence diagram",
      "State-machine diagram"
    ],
    "correctIndex": 2,
    "explanation": "### Explanation:\n\n**c.) Sequence diagram** - shows the order of messages exchanged between objects, including their lifelines and the interactions that occur during a particular scenario. Sequence diagrams are particularly useful for detailing the dynamic behavior of a system.\n\n### Other Options\n\n**a) Activity Diagram**: This diagram models the flow of activities and actions within a system, showing the dynamic aspects but not the time-ordered interactions between objects.\n\n**b) Communication Diagram**: While this diagram also depicts the interactions between objects, it focuses more on the structural organization of the objects rather than the specific sequence of message exchanges.\n\n**d) State-Machine Diagram**: This diagram represents the states of an object and the transitions between those states but does not focus on message exchanges among objects.",
    "difficultyWeight": 1
  },
  {
    "id": "2020A_FE_AM_46",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2020,
    "questionText": "Which of the following is an appropriate relation between a class and an instance in object-oriented programming?",
    "options": [
      "An instance defines the specifications of a class.",
      "An instance is created based on the definition for a class.",
      "Multiple classes correspond to one (1) instance.",
      "Only one (1) instance exists for one (1) class."
    ],
    "correctIndex": 1,
    "explanation": "### Explanation:\n\nIn object-oriented programming (OOP), a **class** acts as a blueprint for creating **instances** (or objects). When you instantiate a class, you're creating an object that has the properties and behaviors defined in the class. For example, if you have a class named Dog, an instance could be a specific dog like `myDog`, which has its own attributes that are defined in the Dog class.\n\n### Other Options\n\n**a) An instance defines the specifications of a class**: This is incorrect because the class defines the specifications, not the instance. An instance is a realization of that specification.\n\n**c) Multiple classes correspond to one (1) instance**: This is incorrect since one instance is created from a single class. A class can have multiple instances, but each instance belongs to only one class.\n\n**d) Only one (1) instance exists for one (1) class**: This is also incorrect. A class can have many instances. For example, the `Dog` class can have instances like `dog1`, `dog2`, etc.",
    "difficultyWeight": 1
  },
  {
    "id": "2020A_FE_AM_47",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2020,
    "questionText": "Which of the following is the type of module coupling that has the weakest degree of coupling in which the exchange of information between modules is performed only using parameters?",
    "options": [
      "Common coupling",
      "Control coupling",
      "Data coupling",
      "Content coupling"
    ],
    "correctIndex": 2,
    "explanation": "### Explanation:\n---\nData coupling is a coupling where modules share data through parameters. Meaning each module only needs to know the data format it receives and not the internal workings of the other module, making it the weakest degree of coupling.\n### Other Options\n\n**a) Common coupling**: This occurs when multiple modules share the same global data. It is considered a strong form of coupling because changes in the global data can affect all modules that use it.\n\n**b) Control coupling**: This type of coupling happens when one module controls the behavior of another by passing control information (e.g., flags). This introduces a level of dependency between the modules.\n\n**d) Content coupling**: This is the strongest form of coupling, where one module directly accesses or modifies the content of another module. This makes the modules highly dependent on each other and is generally to be avoided.",
    "difficultyWeight": 1
  },
  {
    "id": "2020A_FE_AM_48",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2020,
    "questionText": "In the development process, which of the following is an activity that should be performed for software architectural design?",
    "options": [
      "Analyzing the requirements in incremental steps by expressing them in the form of a diagram, etc.",
      "Describing the specifications so that the program is clarified on a line-by-line basis",
      "Obtaining the opinion of the customer and determining the specifications",
      "Transforming the requirements for the software item into an architecture that describes its top-level structure and identifies its software components"
    ],
    "correctIndex": 3,
    "explanation": "## **Explanation:**\n\nIn software architectural design, the main goal is to take the requirements and develop a high-level structure that outlines the key components and how they interact. This ensures the system meets the functional and non-functional requirements.\n\n### Other Options\n\n**a)** Analyzing the requirements in incremental steps by expressing them in the form of a diagram, etc. – This refers more to _requirements analysis_, not architectural design.\n\n**b)** Describing the specifications so that the program is clarified on a line-by-line basis – This is more aligned with _detailed design_ or coding, not the architectural level.\n\n**c)** Obtaining the opinion of the customer and determining the specifications – This is part of the _requirements gathering_ phase, which occurs before architectural design.",
    "difficultyWeight": 1
  },
  {
    "id": "2020A_FE_AM_49",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2020,
    "questionText": "The figure below shows that the cumulative number of bugs reached the target value, when the number of completed test items was X. Which of the following is an appropriate explanation of the situation shown in this figure?\n\n![Image](Files/Pasted%20image%2020241020005721.png)",
    "options": [
      "It indicates that a large number of bugs may still remain internally.",
      "It indicates that desk-checking and simulation were performed satisfactorily prior to testing. ",
      "It indicates that the probability of occurrence of bugs after shipping is low, because the target cumulative number of bugs was reached.",
      "It indicates that a small number of bugs may still remain internally."
    ],
    "correctIndex": 0,
    "explanation": "## **Explanation:**\n\nThe graph shows the cumulative number of bugs reaching the target value after completing a number of test items. Seeing the graph it shows that the curve is still increasing sharply, suggesting more bugs could still exist internally and reaching the target won't guarantee that all bugs have been found. More bugs will be discovered with more testing.\n\n> [!TIP] \n> Just think of it as a game where the more you play, the more bugs you keep finding. Even though you’ve caught the target number of bugs (X), there are still plenty of bugs waiting to be caught because they keep popping up. This means the game isn't really over yet, and there could be many more bugs hiding. That's why **a)** is the right answer—there are still bugs left, even though you’ve reached your target.",
    "difficultyWeight": 1
  },
  {
    "id": "2020A_FE_AM_50",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2020,
    "questionText": "Which of the following is an appropriate description of an extreme programming (XP) practice?",
    "options": [
      "After the code is created, and it is confirmed that it can be integrated, test cases are created.",
      "Integration of the code and testing are continuously repeated.",
      "The code that passed the tests is not refactored until the next iteration.",
      "The customer is responsible for the specification of unit tests."
    ],
    "correctIndex": 1,
    "explanation": "### Explanation:\n\nExtreme Programming (XP) emphasizes continuous integration and testing throughout the development process. This ensures that the software is always in a working state, and issues are identified early. It is very collaborative and encourages continuous communication between the customer and the development team.\n\n> [!TIP] \n> The idea is that everyone works together closely—developers, customers, and testers—so that the software is always moving in the right direction and evolving based on constant feedback.",
    "difficultyWeight": 1
  },
  {
    "id": "2020A_FE_AM_51",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2020,
    "questionText": "According to the 6th edition of the PMBOK Guide, which of the following is an activity for the planning process group in project resource management?",
    "options": [
      "Acquire resources",
      "Control resources",
      "Develop project team",
      "Estimate activity resources"
    ],
    "correctIndex": 3,
    "explanation": "### Explanation:\n\nIn the **Planning Process Group** of **Project Resource Management**, one key activity is to estimate the type and quantity of resources (people, equipment, materials) required to perform project activities. This falls under **\"Estimate Activity Resources\"**, which helps plan and allocate the necessary resources efficiently.",
    "difficultyWeight": 1
  },
  {
    "id": "2020A_FE_AM_52",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2020,
    "questionText": "The activities and milestones of a project are shown in the arrow diagram below. Which of the following is an impact of reducing the duration of activity, D, by 3 days?\n\n![Image](Files/Pasted%20image%2020241020014458.png)",
    "options": [
      "Project duration is not changed.",
      "Project duration is reduced by 1 day.",
      "Project duration is reduced by 2 days",
      "Project duration is reduced by 3 days."
    ],
    "correctIndex": 1,
    "explanation": "### Explanation:\n\nTo determine the impact of reducing the duration of activity **D** by 3 days, we first need to calculate the **critical path** (Longest Path).\n\n### Finding critical path\n\n- Path 1: A → B → E\n  - Duration: 6 + 5 + 4 = 15 days\n- Path 2: C → D → E\n  - Duration: 7 + 5 + 4 = 16 days (**this is the critical path**)\n- Path 3: C → F\n  - Duration: 7 + 6 = 13 days\n\nPath 2 is the longest and determines the project duration.\n### Impact of reducing activity D by 3 days\n\n- Path 2 will be reduced to 13 days\n  - **Path 2**: 7 (C) + 2 (D) + 4 (E) = 13 days.\n\nAfter the reduction, the critical path becomes **Path 1: A → B → E** with 15 days, and the new project duration is reduced by **1 day** (from 16 days to 15 days). Making the answer b) Project duration is reduced by 1 day.",
    "difficultyWeight": 1
  },
  {
    "id": "2020A_FE_AM_53",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2020,
    "questionText": "The functional size of a new system was estimated to be 500 function points (FP). Apart from development, the project requires 10 person-months in total for installation of the system and education of developers. Additionally, for project management, 10% of the total person-months of development, installation, and education is required. How many person-months are required in total for this project? Here, the productivity in development is 10 FPs per person-month.",
    "options": [
      "51",
      "60",
      "65",
      "66"
    ],
    "correctIndex": 3,
    "explanation": "### Explanation:\n\nApart from **development** the project requires 10 person-months for **installation and education**. And another person-months for **project management**, which is 10% of the total person-months from development, installation and education. This means we need to add development, installation and education, and project management person-months to calculate the total.\n\n### Gathered Data\n\n1. Development\n  - The system size is 500 function points (FP), and the productivity is 10 FPs per person-month.\n  - Development person-months = 500 / 10 = 50 person-months\n2. Installation and education\n  - **Given**: 10 person-months.\n3. Project management\n  - Project management effort is **10%** of the total person-months for development, installation, and education.\n  - Total without project management = 50 (development) + 10 (installation and education) = 60 person-months.\n  - Project management = 10% × 60 = 6 person-months\n\n### Total person-months\n\nTotal = 50 (development) + 10 (installation and education) + 6 (project management) = **66** person-months.",
    "difficultyWeight": 1
  },
  {
    "id": "2020A_FE_AM_54",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2020,
    "questionText": "Which of the following is used in quality management to help determine whether a process is stable by using plotted time-series data and limit lines?",
    "options": [
      "Brainstorming",
      "Cause-and-effect diagram",
      "Control chart",
      "Run chart"
    ],
    "correctIndex": 2,
    "explanation": "### Explanation:\n\nA **control chart** is used in quality management to monitor and determine whether a process is stable over time. It displays time-series data and includes upper and lower control limits to track variation. If the data points remain within these limits, the process is considered stable. Control charts help identify any trends or deviations from the norm.\n\n### Other Options:\n\n**a) Brainstorming** – This is a technique used for generating ideas or solutions, not for monitoring process stability.\n\n**b) Cause-and-effect diagram** – Also known as a fishbone diagram, it is used to identify potential causes of problems but does not track process stability over time.\n\n**d) Run chart** – A run chart also plots data over time, but it doesn't have control limits like a control chart, making it less useful for determining process stability.",
    "difficultyWeight": 1
  },
  {
    "id": "2020A_FE_AM_55",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2020,
    "questionText": "Which of the following is an appropriate definition of the total cost of ownership (TCO) in the context of system cost?",
    "options": [
      "It is the total amount of expenses at the time of system installation.",
      "It is the total amount of expenses related to the development of business systems.",
      "It is the total amount of expenses, including those from system installation through operation and maintenance/management.",
      "It is the total amount of operation expenses for systems related to communications and networking."
    ],
    "correctIndex": 2,
    "explanation": "### Explanation:\n\n**Total Cost of Ownership (TCO)** refers to the **total lifetime cost** of a system or asset, including all expenses from its installation, development, ongoing operation, maintenance, and eventual disposal or retirement. TCO provides a comprehensive view of the costs involved in owning and managing a system beyond just the initial purchase or installation.\n\n### Other Options:\n\n**a) It is the total amount of expenses at the time of system installation** – This only considers the cost at the time of installation, but TCO includes all costs over the system's entire life.\n\n**b) It is the total amount of expenses related to the development of business systems** – TCO goes beyond just development costs to include operational and maintenance costs as well.\n\n**d) It is the total amount of operation expenses for systems related to communications and networking** – This is only a subset of TCO, which includes all aspects, not just communication and networking expenses.",
    "difficultyWeight": 1
  },
  {
    "id": "2020A_FE_AM_56",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2020,
    "questionText": "In IT service management, which of the following is an activity that is performed for management of incidents and service requests?",
    "options": [
      "Evaluating if customer satisfaction with the service desk meets the agreed service targets and performing a review for identifying improvement opportunities",
      "Examining measures wherein the amount of free space on a disk is near its threshold",
      "Investigating the impact of changes made to a program",
      "Receiving a failure report from a user and checking to see if it corresponds to a known error"
    ],
    "correctIndex": 3,
    "explanation": "### Explanation:\n\nIn **IT service management**, **incident management** focuses on restoring normal service operation as quickly as possible after a disruption. One of the key activities is receiving failure reports (incidents) from users and determining if they correspond to a **known error** that already has a documented workaround or solution. This is a crucial part of the incident management process to minimize the impact on service.\n\n### Other Options:\n\n**a) Evaluating customer satisfaction and performing reviews** – This is part of **service level management**, which focuses on ensuring service performance aligns with agreed targets, not incident management.\n\n**b) Examining free disk space** – This is part of **capacity management** or **monitoring**, not incident and service request management.\n\n**c) Investigating the impact of changes** – This falls under **change management**, which deals with assessing the impact of changes to the IT environment, not incidents or service requests.",
    "difficultyWeight": 1
  },
  {
    "id": "2020A_FE_AM_57",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2020,
    "questionText": "Which of the following is the most appropriate description about the backup of data on a disk that is connected to a server?",
    "options": [
      "All data are backed up on the day the system commences full operations, and only frequently updated data are backed up thereafter to shorten the work time.",
      "Data distributed and stored in multiple files are backed up when a series of update processes to the files are completed.",
      "Data whose frequency of use are low after a certain period of time are deleted from the current disk, and the data that have been backed up are also deleted.",
      "Important data are backed up by overwriting data on the same media, so that the backup media are not mistaken."
    ],
    "correctIndex": 1,
    "explanation": "### Explanation:\n\nb) suggests that the backup process is conducted after a series of updates, ensuring that the latest version of the files is captured. This strategy helps maintain consistency and ensures that the backup reflects the most current state of the data.\n\n### Other Options:\n\n**a)** This option implies a fixed schedule for backups that may not account for all changes made in between, risking data being out of date.\n\n**c)** While managing data based on usage frequency is a common practice, automatically deleting backed-up data can lead to potential data loss, which is not typically advisable.\n\n**d)** Overwriting important data on the same media is not a recommended practice, as it increases the risk of data loss.",
    "difficultyWeight": 1
  },
  {
    "id": "2020A_FE_AM_58",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2020,
    "questionText": "Which of the following is the most appropriate description about a system auditor?",
    "options": [
      "The entire interview must be conducted by one (1) system auditor, because discrepancies may occur in the record if multiple auditors are involved.",
      "The system auditor must instruct the department being audited to implement improvement measures for deficiencies identified during the interview..",
      "The system auditor must make an effort to obtain documents and records that support the information obtained from the department being audited during the interview.",
      "The system auditor must select interviewees from administrators who have been an auditor within the department being audited."
    ],
    "correctIndex": 2,
    "explanation": "### **Explanation:**\n\nA **system auditor** is a professional responsible for evaluating an organization's information systems, including its software, hardware, data, and processes. The goal of a system auditor is to ensure that systems are functioning effectively, securely, and in compliance with relevant regulations and policies.\n\n### Other Operations\n\n**a)** Having only one auditor is not always necessary. Multiple auditors can help gather more information and provide different views.\n\n**b)** Auditors can identify problems, but it's not their job to order the department to fix them. They recommend changes, but management decides what to do.\n\n**d)** Interviewing only auditors can create bias. It’s better to talk to people in various roles to get a complete picture of the department.",
    "difficultyWeight": 1
  },
  {
    "id": "2020A_FE_AM_59",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2020,
    "questionText": "Which of the following is the most appropriate measure that a management executive must take to secure the appearance of independence for an internal system auditor?",
    "options": [
      "Assigning the system auditor to the internal audit department ",
      "Making it compulsory for the system auditor to undergo continuous learning of IT",
      "Setting up an auditing-skills training system for the system auditor ",
      "Specifying and publishing the knowledge and experience necessary for the system auditor"
    ],
    "correctIndex": 2,
    "explanation": "### **Explanation:**\n\nBy placing the system auditor within the internal audit department, it helps ensure that they can operate independently from other departments they may be auditing, thereby enhancing the credibility and objectivity of their work.\n\n### Other Operations\n\n**b)** This is important for the auditor's professional development but does not directly secure their independence in the auditing process.\n\n**c)** While training is beneficial for skill enhancement, it doesn't ensure that the auditor is perceived as independent in their role.\n\n**d)** Defining qualifications is important for transparency and accountability, but it does not directly address the auditor's independence.",
    "difficultyWeight": 1
  },
  {
    "id": "2020A_FE_AM_60",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2020,
    "questionText": "When software asset management is audited, which of the following activities is the most appropriate?",
    "options": [
      "It is checked to see if compatibility with existing systems is evaluated at the time of installation.",
      "It is checked to see if evidence, such as a software-license certificate, is properly retained. ",
      "It is checked to see if failures are localized via database partitioning or other methods. ",
      "It is checked to see if the organizational and functional structure of the software provider is considered."
    ],
    "correctIndex": 1,
    "explanation": "### **Explanation:**\n\nThis option focuses on verifying that the organization maintains proper documentation of software licenses, which is crucial for ensuring compliance with licensing agreements and avoiding legal issues. Proper retention of software-license certificates demonstrates responsible software asset management.\n\n### Other Operations\n\n**a)** While compatibility checks are important during installation, this activity is more related to system implementation rather than the auditing of software asset management itself.\n\n**c)** This option pertains to system performance and failure management, not directly to software asset management auditing.\n\n**d)** While understanding the provider's structure can be relevant in certain contexts, it is not a primary focus during a software asset management audit.",
    "difficultyWeight": 1
  },
  {
    "id": "2021A_FE_AM_31",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2021,
    "questionText": "Which of the following is an appropriate transmission operation of a node connected to a CSMA/CD LAN?",
    "options": [
      "All nodes are connected in a ring topology, where a special frame is circulated around to control transmission rights. Only the node that has the special frame can transmit data.",
      "Each node is logically ordered, a transmission right is passed along in order, and only the node that has received the right can transmit data.",
      "Each node waits for the medium to be idle before transmitting data. When collision occurs, it waits for a random backoff time before retransmission.",
      "Only the node that has a time slot assigned can transmit data."
    ],
    "correctIndex": 2,
    "explanation": "In a **CSMA/CD (Carrier Sense Multiple Access with Collision Detection)** network, such as Ethernet, the following transmission operation is used:\n\n1. **Carrier Sense**: Each node listens to the communication medium to check if it is idle (i.e., no other device is transmitting).\n\n2. **Multiple Access**: All nodes have equal access to the medium and can transmit whenever they sense that the medium is free.\n\n3. **Collision Detection**: If two nodes transmit simultaneously, a **collision** occurs. Each node detects this collision.\n\n4. **Random Backoff**: After detecting a collision, each node waits for a random backoff time (calculated using a specific algorithm) before attempting to retransmit. This reduces the likelihood of another collision happening immediately.\n\nThis process ensures that multiple devices can share the same communication medium while minimizing the impact of collisions.\n\n### Why the Others Won't Fit\n\n**a) All nodes are connected in a ring topology, where a special frame is circulated around to control transmission rights. Only the node that has the special frame can transmit data.**:\n\n- This describes the **token ring** network, where a special frame called a **token** circulates around the network, and only the node that possesses the token can transmit data. This is not how CSMA/CD operates.\n\n**b) Each node is logically ordered, a transmission right is passed along in order, and only the node that has received the right can transmit data.**:\n\n- This describes **token passing**, used in certain network topologies, but it is not related to CSMA/CD, which does not involve a transmission right being passed around in a logical order.\n\n**d) Only the node that has a time slot assigned can transmit data.**:\n\n- This describes **Time Division Multiple Access (TDMA)**, where each node is assigned specific time slots for transmission. In contrast, CSMA/CD does not use predefined time slots; it is based on listening to the medium and avoiding collisions.",
    "difficultyWeight": 1
  },
  {
    "id": "2021A_FE_AM_32",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2021,
    "questionText": "In a TCP/IP environment, which of the following is a protocol for synchronizing the clocks of multiple computers with that of a time server?",
    "options": [
      "FTP",
      "NNTP",
      "NTP",
      "RTP"
    ],
    "correctIndex": 2,
    "explanation": "**NTP (Network Time Protocol)** is a protocol used to synchronize the clocks of multiple computers to a precise time source, such as a time server or an atomic clock, over a TCP/IP network. NTP ensures that all devices on a network maintain the same time, which is critical for time-sensitive processes, logging, and security functions.\n\n### Why the Others Won't Fit\n\n**a) FTP (File Transfer Protocol)**:\n\n- **FTP** is a protocol used for transferring files between computers on a network, but it is not related to time synchronization.\n\n**b) NNTP (Network News Transfer Protocol)**:\n\n- **NNTP** is a protocol used for reading and posting messages to newsgroups (online forums), and it is not used for synchronizing time.\n\n**d) RTP (Real-Time Transport Protocol)**:\n\n- **RTP** is a protocol used for delivering audio and video over IP networks in real-time. It is not used for clock synchronization.",
    "difficultyWeight": 1
  },
  {
    "id": "2021A_FE_AM_33",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2021,
    "questionText": "Which of the following is an appropriate explanation of DHCP?",
    "options": [
      "It is a protocol for accessing a directory service.",
      "It is a protocol for automatically assigning an IP address.",
      "It is a protocol for converting a private IP address to a global IP address.",
      "It is a protocol for forwarding an e-mail."
    ],
    "correctIndex": 1,
    "explanation": "**DHCP (Dynamic Host Configuration Protocol)** is a protocol used to automatically assign IP addresses to devices on a network. When a device connects to a network, it sends a request to the DHCP server, which then provides the device with an IP address, along with other configuration information such as the subnet mask, default gateway, and DNS server addresses. This process simplifies network management by avoiding the need for manual IP address assignment.\n\n### Why the Others Won't Fit\n\n**a) It is a protocol for accessing a directory service**:\n\n- This describes **LDAP (Lightweight Directory Access Protocol)**, which is used to access and manage directory services, not to assign IP addresses.\n\n**c) It is a protocol for converting a private IP address to a global IP address**:\n\n- This describes **NAT (Network Address Translation)**, which translates private IP addresses to public (global) IP addresses, not the automatic assignment of IP addresses.\n\n**d) It is a protocol for forwarding an e-mail**:\n\n- This describes **SMTP (Simple Mail Transfer Protocol)**, which is used to send and forward emails, not for IP address assignment.",
    "difficultyWeight": 1
  },
  {
    "id": "2021A_FE_AM_34",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2021,
    "questionText": "Which of the following is classified as a web beacon?",
    "options": [
      "A potential error of an application program used for a website",
      "A technique to collect user information, such as access trends, by embedding a small image in a web page",
      "A virus that is downloaded from a website that deletes image files on a PC",
      "An abusive method of using a malicious script that is harmful to both client PC and web server"
    ],
    "correctIndex": 1,
    "explanation": "A **web beacon** is a tracking technology used to monitor user behavior on websites or in emails. It typically consists of a tiny, often invisible image (like a 1x1 pixel) embedded in a web page or email. When a user visits the page or opens the email, the web beacon is loaded from a server, allowing the website owner or marketer to gather information such as:\n\n- Whether the page or email was viewed.\n\n- The time it was viewed.\n\n- The user's IP address and browser information.\n\nThis information helps in analyzing user behavior and access trends without the user being aware of the beacon.\n\n### Why the Others Won't Fit\n\n**a) A potential error of an application program used for a website**:\n\n- This refers to a bug or error in web applications, which is not related to web beacons.\n\n**c) A virus that is downloaded from a website that deletes image files on a PC**:\n\n- This describes a type of malware, but a **web beacon** is not a virus. It's a tool used for tracking user behavior, not for harming the user's system.\n\n**d) An abusive method of using a malicious script that is harmful to both client PC and web server**:\n\n- This describes **cross-site scripting (XSS)** or other malicious scripts, but a web beacon is a legitimate, though sometimes controversial, tracking technique. It does not directly harm the client PC or web server.",
    "difficultyWeight": 1
  },
  {
    "id": "2021A_FE_AM_35",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2021,
    "questionText": "When risk treatment is classified as risk avoidance, risk reduction, risk acceptance, and risk sharing, which of the following risk treatments is risk avoidance?",
    "options": [
      "Applying appropriate controls to lower a risk",
      "Discontinuing some operations that have a risk",
      "Knowingly and objectively not taking any action on a risk",
      "Transferring a risk to other parties"
    ],
    "correctIndex": 1,
    "explanation": "**Risk avoidance** involves completely eliminating the risk by deciding not to engage in the activity that generates it. In this case, **discontinuing some operations that have a risk** is an example of risk avoidance because the organization decides to stop the risky activity altogether, thereby avoiding the potential threat.\n\n### Why the Others Won't Fit\n\n**a) Applying appropriate controls to lower a risk**:\n\n- This describes **risk reduction**, where measures are taken to lower the likelihood or impact of a risk. The risk still exists, but its potential damage is minimized.\n\n**c) Knowingly and objectively not taking any action on a risk**:\n\n- This describes **risk acceptance**, where the risk is acknowledged, but no specific action is taken to mitigate it, often because the risk is deemed acceptable or too costly to address.\n\n**d) Transferring a risk to other parties**:\n\n- This describes **risk sharing (or risk transfer)**, which involves shifting the risk to a third party, such as by purchasing insurance or outsourcing certain operations. The risk remains, but another party bears the responsibility.",
    "difficultyWeight": 1
  },
  {
    "id": "2021A_FE_AM_36",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2021,
    "questionText": "Which of the following is installed into an in-house network or server by an intruder to enter through an access path other than the normal path?",
    "options": [
      "Backdoor",
      "Forensic",
      "Strict routing",
      "Thin client agent"
    ],
    "correctIndex": 0,
    "explanation": "A **backdoor** is a secret or hidden method that allows an intruder to gain unauthorized access to a system, network, or software, bypassing normal security mechanisms. It is typically installed by attackers after they have compromised a system, enabling them to re-enter at any time without needing to go through the usual authentication processes. Backdoors are often used to maintain control over the compromised system while remaining undetected.\n\n### Why the Others Won't Fit\n\n**b) Forensic**:\n\n- **Forensic** refers to the investigation and analysis of digital data, often after a security incident, to understand the attack, recover evidence, or prevent future breaches. It is not related to installing access paths for intruders.\n\n**c) Strict routing**:\n\n- **Strict routing** refers to a type of IP routing where the packet must follow a specific, predetermined path through the network. This is a networking term, not related to unauthorized access paths.\n\n**d) Thin client agent**:\n\n- A **thin client agent** is software used in thin client environments, where client devices rely on a central server to perform most of their computing tasks. This has nothing to do with unauthorized access or backdoor creation.",
    "difficultyWeight": 1
  },
  {
    "id": "2021A_FE_AM_37",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2021,
    "questionText": "Biometric authentication includes a verification method that extracts physical characteristics and another verification method that extracts behavioral characteristics. Which of the following is the method that uses behavioral characteristics?",
    "options": [
      "Performing authentication by extracting characteristics from pen speed and pressure when a signature is provided",
      "Performing authentication by extracting characteristics from the bifurcation angle of the bifurcation point of a blood vessel or from the distance between adjacent bifurcation points",
      "Performing authentication by extracting the characteristic point called minutia from the pattern formed by ridges",
      "Performing authentication by extracting the characteristics of chaotic wrinkles in the eye from the pupil to the outside"
    ],
    "correctIndex": 0,
    "explanation": "**Behavioral characteristics** in biometric authentication are based on the way an individual performs certain actions, such as typing patterns or handwriting. **Option a**, which involves the examination of characteristics from **pen speed and pressure when a signature is provided**, is an example of a behavioral biometric method because it focuses on how the person signs their name, rather than how their handwriting looks like.\n\n### Why the Others Won't Fit\n\n**b) Performing authentication by extracting characteristics from the bifurcation angle of the bifurcation point of a blood vessel or from the distance between adjacent bifurcation points**:\n\n- This describes **vascular pattern recognition**, a **physical characteristic** based on the unique patterns of blood vessels, particularly in the finger or palm. It is not a behavioral trait.\n\n**c) Performing authentication by extracting the characteristic point called minutia from the pattern formed by ridges**:\n\n- This refers to **fingerprint recognition**, which is a **physical biometric** method that relies on the unique patterns of ridges and valleys in a person's fingerprints. It does not involve behavior.\n\n**d) Performing authentication by extracting the characteristics of chaotic wrinkles in the eye from the pupil to the outside**:\n\n- This describes **iris recognition**, which is a **physical characteristic** based on the unique patterns in a person's iris. It is not a behavioral characteristic.",
    "difficultyWeight": 1
  },
  {
    "id": "2021A_FE_AM_38",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2021,
    "questionText": "Which of the following is an encryption method that can be used for encrypting data managed in a database using the same key for encryption and decryption?",
    "options": [
      "AES",
      "PKI",
      "RSA",
      "SHA-256"
    ],
    "correctIndex": 0,
    "explanation": "**AES (Advanced Encryption Standard)** is a **symmetric encryption method**, meaning the same key is used for both encryption and decryption. It is widely used for encrypting data, including data stored in databases, due to its efficiency and security. AES is considered very strong and is commonly used in securing sensitive information.\n\n### Why the Others Won't Fit\n\n**b) PKI (Public Key Infrastructure)**:\n\n- **PKI** is not an encryption method itself, but a framework that uses **asymmetric encryption** (e.g., RSA) to manage public and private keys. Asymmetric encryption uses different keys for encryption and decryption, which is different from what the question is asking.\n\n**c) RSA**:\n\n- **RSA** is an **asymmetric encryption method**, meaning it uses a pair of keys: a public key for encryption and a private key for decryption. It is not suitable for encrypting large amounts of data like in databases, and it does not use the same key for both encryption and decryption.\n\n**d) SHA-256**:\n\n- **SHA-256** is a **hashing algorithm**, not an encryption method. It is used to generate a fixed-size hash value from data, but it does not provide encryption or decryption capabilities.",
    "difficultyWeight": 1
  },
  {
    "id": "2021A_FE_AM_39",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2021,
    "questionText": "A given application only has the functions of retrieving and displaying user information from a database that stores such information. Considering information security management, which of the following is the appropriate database access right assigned to an account that the application uses when it accesses the database? The names and scopes of rights are listed below.\n\n[The names and scopes of rights]\n\nReference right: Permits a record to be selected\n\nUpdate right: Permits a record to be inserted, updated, and dropped\n\nAdministrator right: Permits a table to be displayed, created, altered, and dropped",
    "options": [
      "Administrator right",
      "Reference right",
      "Update right",
      "Update right and reference right"
    ],
    "correctIndex": 1,
    "explanation": "In the question it was stated that **the application only has the functions of retrieving and displaying user information from a database.** With this in mind, the update right and administrator right are immediately out of the question since they have authority to insert, update, and even delete records. Since the reference right only has the ability to select records, it makes sense that it is the appropriate database access right assigned to an account of the application.",
    "difficultyWeight": 1
  },
  {
    "id": "2021A_FE_AM_40",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2021,
    "questionText": "A cybersecurity incident response plan is defined as a set of instructions to aid the cybersecurity team to detect, respond to, and recover from cybersecurity incidents. The cybersecurity incident response plan resolves issues, such as cybercrime, data loss, and service outages that threaten daily work. Which of the following is part of the cybersecurity incident response plan?",
    "options": [
      "Attacking systems with scripts ",
      "Containment",
      "Social engineering activities ",
      "Stealing user credentials"
    ],
    "correctIndex": 1,
    "explanation": "The answer here should be obvious since all of the choices are malicious hacker activities that a cybersecurity team would not carry out, with the exception of **b) containment**.\n\n**Containment** is a key step in a cybersecurity incident response plan. It involves taking immediate action to limit the spread or damage caused by a security breach or cyberattack. This step focuses on isolating affected systems or networks, preventing the incident from escalating further, and minimizing its impact. Containment is crucial for reducing the risk to critical assets and ensuring that the organization can begin the process of recovery.\n\nAccording to [Containment - CyberHoot Cyber Library](https://cyberhoot.com/cybrary/containment/), examples of containing a cybersecurity incident include blocking and logging unauthorized access, blocking [malware](http://www.cyberhoot.com/cybrary/malware) sources, closing specific ports and servers, changing administrator passwords, relocating website home pages, and isolating systems or networks.\n\n### Why the Others Won't Fit\n\n**a) Attacking systems with scripts**:\n- This refers to offensive actions, often used by hackers or in penetration testing, but it is not part of a legitimate incident response plan. The purpose of a response plan is to defend, not attack.\n\n**c) Social engineering activities**:\n- **Social engineering** involves manipulating individuals to gain unauthorized access to systems or sensitive data. This is an attack technique and would not be part of a response plan meant to defend against such attacks.\n\n**d) Stealing user credentials**:\n- Stealing user credentials is a malicious activity carried out by attackers. It would never be part of a cybersecurity incident response plan, as the plan is designed to mitigate and respond to threats, not cause them.",
    "difficultyWeight": 1
  },
  {
    "id": "2021A_FE_AM_41",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2021,
    "questionText": "Between a client and web server, which of the following is used for inspecting the data that is sent from the client to the web server and blocking attacks, such as SQL injections?",
    "options": [
      "Cluster configuration",
      "Load balancing function",
      "SSL-VPN function",
      "WAF"
    ],
    "correctIndex": 3,
    "explanation": "A **WAF (Web Application Firewall)** is a security tool specifically designed to protect web applications by filtering and monitoring HTTP traffic between a client and a web server. It inspects the data sent from the client to the server and can detect and block common attacks such as **SQL injections**, **cross-site scripting (XSS)**, and other web-based threats. A WAF adds an extra layer of defense, helping to prevent malicious traffic from reaching the web server.\n\n### Why the Others Won't Fit\n\n**a) Cluster configuration**:\n\n- A **cluster configuration** refers to a group of servers working together to improve performance, availability, or redundancy. It is not related to inspecting or blocking attacks like SQL injections.\n\n**b) Load balancing function**:\n\n- **Load balancing** distributes incoming traffic across multiple servers to ensure no single server becomes overwhelmed. While it improves performance and availability, it does not inspect or block web-based attacks.\n\n**c) SSL-VPN function**:\n\n- **SSL-VPN (Secure Sockets Layer Virtual Private Network)** is used to securely connect remote users to a network via encryption. It ensures secure communication but is not designed to inspect or block web application attacks like SQL injection.",
    "difficultyWeight": 1
  },
  {
    "id": "2021A_FE_AM_42",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2021,
    "questionText": "Which of the following is an appropriate description of SSH?",
    "options": [
      "It cannot use public key pairs, and it uses a password for authentication.",
      "It helps in securely loading web site pages over HTTPS.",
      "It provides a secure channel for server maintenance over a public network.",
      "Its use is required in the Intranet."
    ],
    "correctIndex": 2,
    "explanation": "**SSH (Secure Shell)** is a cryptographic network protocol used for securely operating network services, especially for remote server maintenance and management, over an unsecured public network. It encrypts data, including authentication credentials and session data, ensuring secure communication between the client and server. SSH can use **public key pairs** or **passwords** for authentication, and it is commonly used for tasks like remote login, file transfer, and command execution on servers.\n\n### Why the Others Won't Fit\n\n**a) It cannot use public key pairs, and it uses a password for authentication**:\n\n- This is incorrect because **SSH** can use both **passwords** and **public/private key pairs** for authentication, with key-based authentication often being considered more secure.\n\n**b) It helps in securely loading web site pages over HTTPS**:\n\n- This describes **HTTPS (HyperText Transfer Protocol Secure)**, which uses **SSL/TLS** to secure web page loading, not **SSH**.\n\n**d) Its use is required in the Intranet**:\n\n- While **SSH** can be used within an **Intranet**, it is not specifically required. SSH is used for secure communication, typically over public networks, though it can be employed in any network environment where secure remote access is needed.",
    "difficultyWeight": 1
  },
  {
    "id": "2021A_FE_AM_43",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2021,
    "questionText": "Which of the following is an appropriate description concerning Sender Policy Framework (SPF) for email communication?",
    "options": [
      "It is a policy of the public relations department to designate a specific person to send emails.",
      "It is an email sent from a spoofed email address without authorization.",
      "It matches the sender mail server IP address with the information from the domain server and accepts or rejects email.",
      "It sends an email to the address of a specific person instead of sending them to multiple email addresses."
    ],
    "correctIndex": 2,
    "explanation": "**Sender Policy Framework (SPF)** is an email authentication protocol that helps prevent email spoofing by verifying whether an email is sent from an authorized mail server for a particular domain. When an email is received, SPF checks the **IP address** of the sending mail server against the list of authorized IP addresses published in the sender domain's **DNS (Domain Name System)** records. If the IP matches, the email is considered legitimate; if not, it may be rejected or flagged as suspicious.\n\n### Why the Others Won't Fit\n\n**a) It is a policy of the public relations department to designate a specific person to send emails**:\n\n- This has nothing to do with **SPF**. It refers to an internal organizational policy, not an email authentication method.\n\n**b) It is an email sent from a spoofed email address without authorization**:\n\n- While **SPF** helps to prevent **email spoofing**, this option describes an outcome that SPF tries to mitigate, not the functionality of SPF itself.\n\n**d) It sends an email to the address of a specific person instead of sending them to multiple email addresses**:\n\n- This describes the act of sending an email to a single recipient, which is unrelated to the **SPF** protocol.",
    "difficultyWeight": 1
  },
  {
    "id": "2021A_FE_AM_44",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2021,
    "questionText": "Which of the following is an appropriate explanation of OP25B for email communication?",
    "options": [
      "Blocking communication to port 25 to reduce mass-scale delivery of spam or junk emails",
      "Blocking emails that are sent to more than 25 recipients at once due to organizational policy",
      "Blocking Simple Mail Transfer Protocol (SMTP) communication except those sent to port 25",
      "Blocklisting email addresses that send spams by monitoring email communication to port 25"
    ],
    "correctIndex": 0,
    "explanation": "## What's so special about port 25?\n\n- Port 25 is the default port used for the Simple Mail Transfer Protocol (SMTP), which is the protocol for sending emails across the Internet. Port 25 is primarily used for sending email messages from a client to a server or between servers. It facilitates the transfer of emails from one mail server to another, playing a critical role in email communication\n\n**OP25B (Outbound Port 25 Blocking)** is a technique invented and used mainly by Internet Service Providers (ISPs) in Japan to block or restrict outbound traffic on **port 25**, the port traditionally used for **SMTP (Simple Mail Transfer Protocol)** communication. Port 25 is often exploited by spammers to send large volumes of unsolicited emails (spam) directly to mail servers. By blocking or filtering traffic on this port, ISPs can reduce the risk of spam originating from infected or compromised devices within their network, helping to prevent mass-scale spam or junk email delivery.\n\n### Why the Others Won't Fit\n\n**b) Blocking emails that are sent to more than 25 recipients at once due to organizational policy**:\n\n- This describes a specific policy that limits the number of recipients for an email, but it is unrelated to **OP25B**, which deals with blocking port 25, not limiting the number of recipients.\n\n**c) Blocking Simple Mail Transfer Protocol (SMTP) communication except those sent to port 25**:\n\n- This is incorrect because **OP25B** is specifically about **blocking or restricting port 25**, not allowing only port 25. In fact, many organizations block port 25 to prevent spam, encouraging the use of more secure ports like **587** for authenticated email communication.\n\n**d) Blocklisting email addresses that send spams by monitoring email communication to port 25**:\n\n- While this describes a method to deal with spam, it is not specifically related to **OP25B**, which focuses on **blocking outbound traffic on port 25** rather than monitoring and blocklisting specific email addresses.",
    "difficultyWeight": 1
  },
  {
    "id": "2021A_FE_AM_45",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2021,
    "questionText": "![Image](Files/Pasted%20image%2020241019123903.png)",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correctIndex": 2,
    "explanation": "- **Generalization:** In UML, a generalization relationship indicates that one class (subclass) is a specialized version of another class (superclass). This is often represented by a hollow triangle pointing from the subclass to the superclass.\n\n- **Option c:** In this diagram, the `Sports car` class is shown as a specialized version of the `Automobile` class.\n\n![Image](Files/Pasted%20image%2020241019124046.png)\n\nThe hollow triangle pointing from `Sports car` to `Automobile` signifies this generalization relationship.\n\n### Why the Others Won't Fit\n\n**a) shows a composition relationship, where one object (Automobile inspection certificate) is part of another object (Automobile).\n\n**b) shows an association relationship, indicating a connection between two classes (Automobile and Driver).\n\n**d) shows an aggregation relationship, where one object (Automobile) is composed of multiple other objects (Tire and Engine).",
    "difficultyWeight": 1
  },
  {
    "id": "2021A_FE_AM_46",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2021,
    "questionText": "![Image](Files/Pasted%20image%2020241019124720.png)",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correctIndex": 3,
    "explanation": "The circle 'O' in the DFD notation used in the example represents **d) Process**.\n\n- **Rectangle:** Represents an external entity, such as a person, organization, or system.\n\n- **Arrow:** Represents a data flow, showing the direction of data movement.\n\n- **Circle:** Represents a process, which transforms data.\n\n- **Open-ended rectangle:** Represents a data store, where data is stored.\n\n![Image](Files/Pasted%20image%2020241019124845.png)",
    "difficultyWeight": 1
  },
  {
    "id": "2021A_FE_AM_47",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2021,
    "questionText": "Which of the following is an appropriate relationship between classes and instances in object orientation?",
    "options": [
      "An instance defines the specifications of a class.",
      "An instance is created based on the definition of a class.",
      "Multiple classes correspond to a single instance.",
      "Only one (1) instance exists for a single class."
    ],
    "correctIndex": 1,
    "explanation": "This option accurately describes the relationship in object-oriented programming (OOP). A class serves as a blueprint or template that defines the properties and behaviors (methods) of objects. An instance, also known as an object, is created using this blueprint, encapsulating the data and functionality defined by the class. Each instance can have its own unique state while adhering to the structure and rules established by the class.\n\n### Why the Others Won't Fit\n\n**a) An instance defines the specifications of a class.**\n\n- This statement is incorrect because it reverses the relationship. A class defines the specifications and behavior that instances will follow, not the other way around.\n\n**c) Multiple classes correspond to a single instance.**\n\n- This is misleading. An instance is typically associated with one specific class. While an instance can inherit characteristics from multiple classes in some programming paradigms (like multiple inheritance), it is still tied to a specific class definition.\n\n**d) Only one (1) instance exists for a single class.**\n\n- This statement is also false. A class can have multiple instances created from it. Each instance represents a unique object that can have different values for its properties while following the same class structure.",
    "difficultyWeight": 1
  },
  {
    "id": "2021A_FE_AM_48",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2021,
    "questionText": "Which of the following is the weakest module coupling?",
    "options": [
      "To implement as many functions as possible with a single module",
      "To pass arguments that control another module's logic when the module is called",
      "To pass only required data items as arguments between two (2) modules",
      "To use a global area to share data items with other modules"
    ],
    "correctIndex": 2,
    "explanation": "According to [kharagpurcollege.ac.in/studyMaterial/173830Lecture-9-Coupling-cohesion, 2nd semester by Alok Haldar.pdf], The coupling is **the degree of interdependence between software modules**. Two modules that are tightly coupled are strongly dependent on each other. Two modules that are loosely coupled are not dependent on each other.\n\n**c) To pass only required data items as arguments between two (2) modules.**\n\n- This option represents the weakest coupling between modules. By passing only the necessary data items, modules remain independent and less affected by changes in each other. This promotes better maintainability, as changes in one module are less likely to impact others, adhering to the principles of modularity.\n\n### Why the Others Won't Fit\n\n**a) To implement as many functions as possible with a single module.**\n\n- This approach typically leads to high coupling because it combines multiple responsibilities within a single module, making it difficult to modify or test independently.\n\n**b) To pass arguments that control another module's logic when the module is called.**\n\n- This creates tighter coupling between the modules, as one module is directly influencing the behavior of another. Changes in the controlling module could necessitate changes in the controlled module.\n\n**d) To use a global area to share data items with other modules.**\n\n- Using global variables for sharing data increases coupling significantly, as multiple modules may depend on the state of these shared variables. This can lead to issues with maintainability and can make it difficult to track data flow within the system.",
    "difficultyWeight": 1
  },
  {
    "id": "2021A_FE_AM_49",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2021,
    "questionText": "Which of the following tests verifies the interfaces between two (2) modules or subsystems?",
    "options": [
      "Acceptance test",
      "Integration test",
      "Operational test",
      "Unit test"
    ],
    "correctIndex": 1,
    "explanation": "Integration testing is specifically designed to verify the interfaces and interactions between two or more modules or subsystems. This type of testing focuses on how different components work together and helps identify issues that may arise when combining them.\n\n### Why the Others Won't Fit\n\n**a) Acceptance test.**\n\n- Acceptance testing is performed to determine whether the system meets the specified requirements and is ready for delivery. It focuses on validating the overall functionality rather than the interfaces between individual modules.\n\n**c) Operational test.**\n\n- Operational testing typically involves assessing the system's performance in a real-world environment and may focus on operational aspects rather than the interactions between modules or subsystems.\n\n**d) Unit test.**\n\n- Unit testing is concerned with verifying the functionality of individual components or modules in isolation. It does not address the interactions or interfaces between multiple modules.",
    "difficultyWeight": 1
  },
  {
    "id": "2021A_FE_AM_50",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2021,
    "questionText": "Which of the following is an appropriate explanation of a comprehensive patent cross license?",
    "options": [
      "An agreement to share the necessary costs for patent registration is concluded.",
      "The source code is published free of charge on the Internet or other places, and anyone may improve and redistribute the software.",
      "The use of patent rights is mutually licensed among companies in the specified fields of technologies or products.",
      "To ensure that a company's patent rights are not violated, the right to stop a counterpart's manufacturing is exercised."
    ],
    "correctIndex": 2,
    "explanation": "This option accurately describes a comprehensive patent cross license. In such agreements, two or more parties grant each other rights to use their respective patents, typically within specified areas of technology or products. This arrangement helps reduce the risk of litigation and fosters collaboration between companies.\n\n### Why the Others Won't Fit\n\n**a) An agreement to share the necessary costs for patent registration is concluded.**\n\n- This explanation does not capture the essence of a cross-license, which primarily focuses on mutual rights to use patents rather than cost-sharing for registration.\n\n**b) The source code is published free of charge on the Internet or other places, and anyone may improve and redistribute the software.**\n\n- This describes open-source licensing rather than a comprehensive patent cross license. Cross licensing is specifically related to patents, not software source code dissemination.\n\n**d) To ensure that a company's patent rights are not violated, the right to stop a counterpart's manufacturing is exercised.**\n\n- This statement refers to enforcing patent rights rather than the concept of a cross license, which is about granting mutual rights to use patents rather than restricting or stopping production.",
    "difficultyWeight": 1
  },
  {
    "id": "2021A_FE_AM_51",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2021,
    "questionText": "Based on the definition of project management process groups in ISO 21500, which of the following is an activity that is to be implemented in the planning process group among the project management processes?",
    "options": [
      "To define scope",
      "To develop a project charter",
      "To identify stakeholders",
      "To perform quality assurance"
    ],
    "correctIndex": 0,
    "explanation": "### Explanation\n\nDefining the scope is a key activity in the planning process group according to ISO 21500. This process involves determining and documenting the specific goals, deliverables, and boundaries of the project, which is essential for creating a clear project plan.\n\n### Why the Others Won't Fit\n\n**b) To develop a project charter.**\n\n- Developing a project charter is part of the initiation process group, not planning. The project charter formally authorizes the project and provides an initial understanding of objectives and stakeholders.\n\n**c) To identify stakeholders.**\n\n- Identifying stakeholders also falls under the initiation process group, as it involves recognizing those who have an interest in the project early on.\n\n**d) To perform quality assurance.**\n\n- Quality assurance is part of the execution or monitoring and controlling process groups, as it involves evaluating whether project activities meet quality standards, rather than planning.",
    "difficultyWeight": 1
  },
  {
    "id": "2021A_FE_AM_52",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2021,
    "questionText": "In project time management, which of the following descriptions is appropriate for 'slack time'?",
    "options": [
      "It is the amount of time between the earliest start time and earliest finish time of an activity or between the latest start time and latest finish time of an activity",
      "It is the amount of time for which a non-critical path activity can be deferred without delaying the project",
      "It is the amount of time that an activity can be deferred without delaying the earliest start time of any succeeding activity or violating a schedule constraint",
      "It is the amount of time that an activity can be delayed past its latest start time or latest finish time"
    ],
    "correctIndex": 1,
    "explanation": "### Explanation\n\nSlack time, also known as 'float,' is the amount of time an activity can be delayed without affecting the start of subsequent activities or the overall project completion date. This definition accurately reflects slack time in project time management.\n\n### Why the Others Won't Fit\n\n**a) It is the amount of time between the earliest start time and earliest finish time of an activity or between the latest start time and latest finish time of an activity.**\n\n- This describes the duration of an activity, not slack time. Slack time specifically refers to how much an activity can be delayed without impacting other activities or the project.\n\n**b) It is the amount of time for which a non-critical path activity can be deferred without delaying the project.**\n\n- While this is close, it limits slack time to non-critical path activities. In reality, slack applies to any activity with float, not just those off the critical path.\n\n**d) It is the amount of time that an activity can be delayed past its latest start time or latest finish time.**\n\n- This statement is incorrect because once an activity is delayed past its latest start or finish time, it affects the project schedule. Slack time refers to how long an activity can be delayed _before_ this happens.",
    "difficultyWeight": 1
  },
  {
    "id": "2021A_FE_AM_53",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2021,
    "questionText": "When the duration for painting a house is estimated, which of the following is an appropriate technique that estimates the duration on the basis of the actual duration of a similar painting job in the past of the same house or other historical data from similar work?",
    "options": [
      "Analogous estimate",
      "Parametric estimate",
      "Reserve analysis",
      "Three-point estimate"
    ],
    "correctIndex": 0,
    "explanation": "### Explanation\n\nAn analogous estimate uses the actual duration of a similar past project or job as a basis for estimating the duration of the current project. In this case, the time it took to paint the same house or another similar house in the past serves as the reference for the new estimate. This technique is commonly used when detailed information is limited and relies on expert judgment and historical data.\n\n### Why the Others Won't Fit\n\n**b) Parametric estimate.**\n\n- A parametric estimate uses statistical relationships between variables (e.g., cost per square foot) to estimate project duration, which is different from relying on direct past experience or historical data of a similar job.\n\n**c) Reserve analysis.**\n\n- Reserve analysis involves adding contingency reserves to the estimate to account for uncertainties, but it does not rely on historical data to estimate the base duration.\n\n**d) Three-point estimate.**\n\n- A three-point estimate uses optimistic, pessimistic, and most likely duration estimates to calculate an expected duration, but it doesn't specifically rely on past similar jobs or historical data.",
    "difficultyWeight": 1
  },
  {
    "id": "2021A_FE_AM_54",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2021,
    "questionText": "In system development, when the relationship between person-months and the duration (months) is represented in the approximate expression shown below, and the total person-month is 4096, how many months does it take?\n\nDuration = 2.5 $\times$ $person-months^\frac{^1}{3}$",
    "options": [
      "16",
      "40",
      "64",
      "160"
    ],
    "correctIndex": 1,
    "explanation": "### Explanation\n\nTo find the duration in months, we are given the formula:\n\nDuration = 2.5 $\times$ $person-months^\frac{^1}{3}$\n\nAnd the total person-months is 4096. Let's calculate the duration step by step:\n\nDuration = 2.5 $\times$ $(4096)^\frac{^1}{3}$\n\n1. First, calculate the cube root of 4096:\n\n $(4096)^\frac{^1}{3}$ = 16\n\n2. Now multiply the result by 2.5:\n\nDuration =  2.5 $\times$ 16 = 40\n\nTherefore, the duration is **40 months**.",
    "difficultyWeight": 1
  },
  {
    "id": "2021A_FE_AM_55",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2021,
    "questionText": "An IT service is provided under the conditions that are described below. What is the maximum downtime in hours that can satisfy the SLA during a service time period of one (1) month? Here, the number of business days in one (1) month is 30, and no maintenance or other scheduled downtime of the service is performed during the service time period.\n\n[Conditions of the SLA]\n- The service time period is from 8:00 AM to 10:00 PM on business days.\n- The availability should be 99.5% or more.",
    "options": [
      "0.3",
      "2.1",
      "3.0",
      "3.6"
    ],
    "correctIndex": 1,
    "explanation": "### Explanation\n\nA service-level agreement (SLA) defines the level of service expected from a vendor, laying out metrics by which service is measured, as well as remedies should service levels not be achieved. It is a critical component of any technology vendor contract.\n\nIn this question it is given in the SLA that the service period is 1 month and that the service time period for this whole month is from 8:00 AM to 10:00 PM, which amounts to 14 hours a day. If the availability of said service should be 99.5%, then the maximum downtime can be calculated using the following formula\n\ndowntime = total hours - minimum required available hours\n\ndowntime = $(30 \times 14) - (0.995)(30 \times 14)$ = 2.1\n\ndowntime = $420 - 417.9$ = 2.1\n\nin this equation, 30 is the number of business days, 14 is the amount of hours per day that the service must be available, and 0.995 is the decimal equivalent of the service availability percentage. The total hours that the service is up in 30 business days is 420, and the required number of hours that the service must be available is 417.9. If you subtract the two then, you get the maximum downtime of the service in horus.",
    "difficultyWeight": 1
  },
  {
    "id": "2021A_FE_AM_56",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2021,
    "questionText": "Which of the following is the main purpose of a migration test for a system?",
    "options": [
      "To confirm that a new system possesses all of the required functions",
      "To confirm that sufficient performance can be derived from the new system using a copy of the actual data from the existing system",
      "To confirm the compatibility of the interface between a program of another existing system and a newly developed program",
      "To confirm the switch procedure from the existing system to the new system and the problems that the switch can cause from the perspective of reliability and efficiency"
    ],
    "correctIndex": 3,
    "explanation": "The primary purpose of a migration test is to ensure a smooth transition from the existing system to the new system. This includes testing the switch procedure and identifying potential issues related to reliability and efficiency during the migration process. It focuses on how well the new system integrates, handles data migration, and how the changeover affects overall operations.\n\n### Why the Others Won't Fit\n\n**To confirm that a new system possesses all of the required functions.**\n\n- This is more aligned with functional testing, which ensures that the system meets its functional requirements.\n\n**To confirm that sufficient performance can be derived from the new system using a copy of the actual data from the existing system.**\n\n- This describes performance testing, which focuses on how well the new system performs under real-world conditions with actual data.\n\n**To confirm the compatibility of the interface between a program of another existing system and a newly developed program.**\n\n- This refers to interface testing, which verifies that the new system can communicate effectively with other existing systems or components.",
    "difficultyWeight": 1
  },
  {
    "id": "2021A_FE_AM_57",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2021,
    "questionText": "In IT service management, which of the following is handled by incident management?",
    "options": [
      "Inquiry regarding the function or usage of the IT service or system",
      "Long delay in an application response",
      "Request for providing the IT service to a new business site",
      "Request for training of recruits on the IT service"
    ],
    "correctIndex": 1,
    "explanation": "Incident management is responsible for handling any disruptions to normal service operations, including issues like long delays in application responses. These are considered incidents because they affect the quality or availability of IT services, and the goal of incident management is to restore normal service operation as quickly as possible.\n\n### Why the Others Won't Fit\n\n**Inquiry regarding the function or usage of the IT service or system.**\n\n- This is typically handled by a **service desk** or **help desk** as a service request, not incident management, since it's more of an inquiry than an issue affecting service performance.\n\n**Request for providing the IT service to a new business site.**\n\n- This would fall under **request fulfillment** or **change management**, as it involves provisioning new services rather than resolving an incident.\n\n**Request for training of recruits on the IT service.**\n\n- This is a service request, not an incident. It would typically be handled through **service request management** rather than incident management.",
    "difficultyWeight": 1
  },
  {
    "id": "2021A_FE_AM_58",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2021,
    "questionText": "When the PDCA methodology is applied to a service management system, which of the following corresponds to Act?",
    "options": [
      "Establishing, documenting, and agreeing the service management system",
      "Implementing and operating the service management system for the design, transition, delivery, and improvement of services",
      "Monitoring, measuring, and reviewing the service management system and services against the policies, objectives, plans, and service requirements, and reporting the results",
      "Taking actions to continually improve the performance of the service management system and services"
    ],
    "correctIndex": 3,
    "explanation": "In the PDCA (Plan-Do-Check-Act) cycle, the 'Act' phase involves taking corrective actions based on the findings from the 'Check' phase to improve processes and performance. This is a continuous improvement step where adjustments are made to ensure the system and services are functioning more effectively and efficiently.\n\n### Why the Others Won't Fit\n\n**Establishing, documenting, and agreeing the service management system.**\n\n- This corresponds to the **Plan** phase, where the framework and objectives of the service management system are established.\n\n**Implementing and operating the service management system for the design, transition, delivery, and improvement of services.**\n\n- This is part of the **Do** phase, where the plans are executed, and the service management system is put into operation.\n\n**Monitoring, measuring, and reviewing the service management system and services against the policies, objectives, plans, and service requirements, and reporting the results.**\n\n- This is the **Check** phase, where the system’s performance is evaluated against the defined goals and objectives to identify any areas of concern.",
    "difficultyWeight": 1
  },
  {
    "id": "2021A_FE_AM_59",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2021,
    "questionText": "In the system design stage, which of the following is the point to be checked during the audit of control for reducing the risk of non-fulfillment of user requirements?",
    "options": [
      "All programming should be performed in accordance with the specified standards and conventions.",
      "The program specifications should be created on the basis of the system design documents.",
      "The test plan should be created on the basis of the system test requirements and must also be approved by the responsible person of the system operations department.",
      "The user department should participate in the review of system design."
    ],
    "correctIndex": 3,
    "explanation": "### Explanation\n\nInvolving the user department in the review of system design is critical to ensuring that the system meets the actual needs and requirements of the users. This reduces the risk of non-fulfillment of user requirements, as it ensures that users validate the system design and provide feedback before implementation begins.\n\n### Why the Others Won't Fit\n\n**a) All programming should be performed in accordance with the specified standards and conventions.**\n- This relates more to code quality and consistency but is not directly about reducing the risk of not meeting user requirements. It would be checked during the development phase, not specifically in the system design stage.\n\n**b) The program specifications should be created on the basis of the system design documents.**\n- While this is an important practice, it pertains to the transition from design to development and doesn't directly address reducing the risk of unmet user requirements during the design stage.\n\n**c) The test plan should be created on the basis of the system test requirements and must also be approved by the responsible person of the system operations department.**\n- This is more relevant to the testing phase and ensuring proper validation, but it does not directly focus on reducing the risk of non-fulfillment of user requirements during the design phase.",
    "difficultyWeight": 1
  },
  {
    "id": "2021A_FE_AM_60",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2021,
    "questionText": "When IT controls are classified into preventive controls and detective controls, which of the following is to be classified as a detective control?",
    "options": [
      "A data entry manual is created, and the persons in charge of data entry are trained.",
      "A data entry screen is designed so that operation errors are unlikely to occur.",
      "Access rights are assigned only to the person in charge of data entry.",
      "Taking actions to continually improve the performance of the service management system and services"
    ],
    "correctIndex": 3,
    "explanation": "### Explanation\n\n**d) An output list resulting from data entry is cross-checked with the input form.**\n\n- This is an example of a **detective control**, as it involves identifying errors or irregularities after they have occurred by comparing the output with the input to verify accuracy. Detective controls are designed to find and report errors, fraud, or other issues that might occur during a process.\n\n### Why the Others Won't Fit\n\n**a) A data entry manual is created, and the persons in charge of data entry are trained.**\n- This is a **preventive control** because it aims to prevent errors by ensuring that employees are trained and informed before performing data entry tasks.\n\n**b) A data entry screen is designed so that operation errors are unlikely to occur.**\n- This is also a **preventive control**, as it is intended to reduce the likelihood of errors occurring during data entry by designing a user-friendly interface.\n\n**c) Access rights are assigned only to the person in charge of data entry.**\n- This is another **preventive control** aimed at preventing unauthorized access or misuse by limiting access rights to only those who need them.",
    "difficultyWeight": 1
  },
  {
    "id": "2021S_FE_AM_01",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2021,
    "questionText": "Which of the following is equivalent to the logic expression below?\n\n$$\n(x+y) cdot (x+z)\n$$\n\nHere, the letters are logic variables; $x+y$, $x cdot y$, and $\bar{x}$ are OR, AND, and NOT operations on the corresponding variables, respectively.",
    "options": [
      "$x\\cdot(y+z)$",
      "$x+y\\cdot z$",
      "$x\\cdot y+y\\cdot z$",
      "$(\\bar{x}+y)\\cdot z$"
    ],
    "correctIndex": 1,
    "explanation": "### Step 1: Refer to Boolean algebra identities\n\n![Image](Files/Pasted%20image%2020241017221750.png)\n\n**Goal:** is to find the most similar form with the given equation\n\n**Answer**: Distributive law is the most similar\n\nThe distributive law states that:\n$A+BC = (A+B)cdot(A+C)$\n\n### Step 2: Apply Distributive Law\n\n**Goal**: Substitute distributive law equation with the actual variables\n\n**Answer**:\n\t$(x+y)cdot(x+z) = ?$      *(original equation)*\n\t$(A+B)cdot(A+C) = A+Bcdot C$\n\n\t$A = x$\n\t$B = y$\n\t$C = z$\n\n$\therefore$ Resulting into the final equation\n$(x+y)cdot(x+z) = \boxed{x+ycdot z}$\n\n### Hence, the answer would be **b)**",
    "difficultyWeight": 1
  },
  {
    "id": "2021S_FE_AM_02",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2021,
    "questionText": "Which of the following is a decimal that is represented as a finite digit octal fraction?",
    "options": [
      "$0.3$",
      "$0.4$",
      "$0.5$",
      "$0.8$"
    ],
    "correctIndex": 2,
    "explanation": "## Testing the waters approach\n\n**NOTE**: This only works for these specific problems, specifically:\n- single digit decimal fractions to any base number\nRefer to the In-Depth Approach for general applications\n\n### Step 1: Multiply all decimal choices by base number\nTo save time, we can do the initial multiplication of each number by the base number, `8`. This is to hope for a choice that immediately gives a terminating number on the first try.\n\n**Condition:** Achieve a result where the fractional part is `0`\n#### a) $0.3cdot 8 = 2.4$\n#### b) $0.4*8 = 3.2$\n#### c) $0.5*8 = 4.0$ !!\n#### d) $0.8*8 = 6.4$\n\nTherefore, we arrive at our answer, `c)`\n\n## In-Depth Approach\n### Step 1: Multiply fractional part by base number\nThis is according to the general conversion process of decimal fractions to any base number\n$$\text{formula} = \text{fractional part} cdot \text{base number}$$\n\nSince we are looking for the `octal fraction`, our `base is 8`, so for letter **a)**\n$0.3 cdot 8 = 2.4$\n\n### Step 2: Separate whole number and fractional number from Step 1\nReferring to Step 1:\n$2.4 \rightarrow 0.4$ , $2$\n\nBreak down uses:\n- **whole number** - for getting the final octal fraction\n- **fractional number** - for continued multiplication\n\n### Step 3: Repeat steps 1 and 2 until fractional number is 0\nIdeally, we create a table to keep track of the process.\n\n|             |                  |  Result   | Fractional |  Whole  |\n| :---------: | :--------------: | :-------: | :--------: | :-----: |\n|   **(1)**   |   $0.3cdot 8$   |   $2.4$   |   $0.4$    |   $2$   |\n| ==**(2)**== | ==$0.4cdot 8$== | ==$3.2$== | ==$0.2$==  | ==$3$== |\n|   **(3)**   |   $0.2cdot 8$   |   $0.8$   |   $0.8$    |   $0$   |\n|   **(4)**   |  $0.8 cdot 8$   |   $6.4$   |   $0.4$    |   $6$   |\n| ==**(5)**== | ==$0.4cdot 8$== | ==$3.2$== | ==$0.2$==  | ==$3$== |\n|     ...     |                  |           |            |         |\n\n**NOTE**: in this case, since we are already looping back, letter **a)** is non-terminating hence, we move on to the next choice.\n\n**IMPORTANT**: to determine a non-terminating fraction, find a step in the conversion table where a step is already similar to a previous step like in this case: `step (2)` and `step (5)`\n\n### Step 4: Repeat process to other choices until finite number\n**HOWEVER**, we can take a shortcut:\n\tif number is part of the previous table/s, it is immediately non-terminating\n#### b) 0.4\n- part of a), non-terminating\n#### d) 0.8\n- part of a), non-terminating\n\nTherefore, leaving us with\n#### c) 0.5\n\nwhich is the answer",
    "difficultyWeight": 1
  },
  {
    "id": "2021S_FE_AM_03",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2021,
    "questionText": "The GCD (Greatest Common Divisor) of two positive integers, $x_0$ and $x_1 (x_0 > x_1)$, is computed by the procedure below. When $x_{0} = 175$ and $x_1 = 77$, how many times should step `(2)` of this procedure be executed before it stops? Here, '$A ← B$ ' indicates that B is substituted for A.\n\n`[`Procedure`]`\n1) $i ← 2$\n2) $x_i ←$ remainder of $x_{i−2}$ divided by $x_{i−1}$\n3) if $x_i = 0$, stop with $x_i−1$ as the GCD\n4) $i ← i + 1$\n5) return to step `(2)`",
    "options": [
      "$3$",
      "$4$",
      "$6$",
      "$7$"
    ],
    "correctIndex": 1,
    "explanation": "### Step 1: Look at step (2) and stop condition\n`step (2)`: $$x_{i} = \frac{x_{i-2}}{x_{i-1}}$$\n\n`stop condition`:  when $x_{i}$ = 0\n\nBasically:\n- keep dividing the remainder before the last (`i-2`) with the last remainder (`i-1`) \n- until the **resulting remainder (`i`) is** `0`\n\n### Step 2: Do the process starting at i = 2\nDo not forget to take note of the given:\n$x_{0} = 175$\n$x_{1} = 77$\n\n| iterations |                          formula                           | $x_{i}$ |\n| :--------: | :--------------------------------------------------------: | :-----: |\n|  **(1)**   | $$\frac{x_{0}}{x_{1}} = \frac{175}{77} = 2 \text{ R } 21$$ |  $21$   |\n|  **(2)**   | $$\frac{x_{1}}{x_{2}} = \frac{77}{21} = 3 \text{ R } 14$$  |  $14$   |\n|  **(3)**   |  $$\frac{x_{2}}{x_{3}} = \frac{21}{14} = 1 \text{ R } 7$$  |   $7$   |\n|  **(4)**   |  $$\frac{x_{3}}{x_{4}} = \frac{14}{7} = 2 \text{ R } 0$$   |   $0$   |\nEnd at the `4th` iteration because $x_{i}$ = 0\n\n### Hence, the answer is b)",
    "difficultyWeight": 1
  },
  {
    "id": "2021S_FE_AM_04",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2021,
    "questionText": "To compare the entrance exams of the current and previous years, a company required many of its employees to take those exams. The correlation coefficient and the regression line were obtained by assigning the scores of the previous year to the x-axis and the scores of the current year to the y-axis. Which of the following can be derived from the results below?\n\n`[`Results`]`\n\tThe correlation coefficient is 0.8.\n\tThe slope of the regression line is 1.1.\n\tThe y-intercept of the regression line is 10.",
    "options": [
      "From the slope and the y-intercept of the regression line, the tendency is to obtain a higher score for the current year than the previous year",
      "From the slope of the regression line and the correlation coefficient, the exam of the current year is of high quality.",
      "From the slope of the regression line, the average score for the current year is 1.1 times that of the previous year.",
      "From the y-intercept of regression line, those who get zero for the current year can get a score as high as 10 for the previous year."
    ],
    "correctIndex": 0,
    "explanation": "### Step 1: Gather important details.\n\n1) correlation coefficient\n2) regression line\n3) scores of previous year = x-axis\n4) scores of current year = y-axis\n\n### Step 2: Interpret details and results.\n\n#### Details\n1) correlation coefficient\n\t- tells us about how related the two variables, `x` and `y` are\n\t- $1$ = perfectly correlated (if x goes up, y goes up, and vice versa)\n\t- $0$ = zero correlation\n\t- $-1$ = perfect negative correlation (if x goes up, y goes down, and vice versa)\n![Image](Files/Pasted%20image%2020241018010152.png)\n\n2) regression line\n\t- tells us the relationship between the two variables\n\t- applied in scenarios where the change of the independent variable (x) changes the dependent variable (y)\n![Image](Files/Pasted%20image%2020241018010951.png)\n\n#### Results\n1) The correlation coefficient is 0.8.\n\t-  based on the description of correlation coefficients this means that the two variables x and y are `near perfect correlation`\n2) The slope of the regression line is 1.1.\n\t- the rate of change per increase of `x` is that for every 1 point in x means 1.1 points in y\n\t- so as the score of the previous year increases, scores of the current year increase more\n\t- `an increasing trend`\n3) The y-intercept of the regression line is 10.\n\t- if `x` = 0, then, the `y`-axis starts at 10\n\t- meaning if someone in the previous year `x` scores 0, it is expected that they would get 10 in the current year `y`\n\n### Step 3: Compare analysis to the choices\n\n#### a) From the slope and the y-intercept of the regression line, the tendency is to obtain a higher score for the current year than the previous year\n- from the analyses of both the slope and y-intercept of the regression line, the statement coincides\n\n#### b) From the slope of the regression line and the correlation coefficient, the exam of the current year is of high quality.\n- high quality isn't defined or studied in the problem, rather, it is the scores that are being compared\n\n#### c) From the slope of the regression line, the average score for the current year is 1.1 times that of the previous year.\n- the slope doesn't talk about the overall average score, instead it talks about each individual score. (1 point of x is 1.1 points for y)\n\n#### d) From the y-intercept of regression line, those who get zero for the current year can get a score as high as 10 for the previous year.\n- the variables are reversed, remember step 2\n\t- current year = y-axis\n\t- previous year = x-axis\n- it should be that if the person's score in the previous year is 0, in the current year that person should get an expected 10 points\n\n### Therefore, the answer is **a)**",
    "difficultyWeight": 1
  },
  {
    "id": "2021S_FE_AM_05",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2021,
    "questionText": "The table below is a state transition table used for character string validation. In this table, '$A$' represents the initial state, and '$E$' represents the failure state. Which of the following is a character string that fails this validation? Here, each character of a string is parsed from the leftmost side, and the symbol '$\triangle$' represents a blank character.\n\n![Image](Files/Pasted%20image%2020241018160540.png)",
    "options": [
      "$+0010$",
      "$-1$",
      "$12.2$",
      "$\\triangle$"
    ],
    "correctIndex": 2,
    "explanation": "## Solution\nWe run through each option to the state transition table.\nAlways go to State A (first row) in the beginning.\n\n**Goal:** Get an option that will go to State E\n\n### Step 1: Run through option a)\nOur string would be: $+0010$\n\nFirst character: `+` = Sign $\rightarrow$ go to state C (3rd row)\nNext character: `0` = Number $\rightarrow$ go to state B (2nd row)\nNext character: `0` = Number $\rightarrow$ go to state B\nNext character: `1` = Number $\rightarrow$ go to state B\nNext character: `0` = Number $\rightarrow$ go to state B\n\n**NOT A FAILURE**\n\n### Step 2: Run through option b)\nOur string would be: $-1$\n\nFirst character: `-` = Sign $\rightarrow$ go to state C\nNext character: `1` = Number $\rightarrow$ go to state B\n\n**NOT A FAILURE**\n\n### Step 3: Run through option c)\nOur string would be: $12.2$\n\nFirst character: `1` = Number $\rightarrow$ go to state B\nNext character: `2` = Number $\rightarrow$ go to state B\nNext character: `.` = Radix point $\rightarrow$ go to state D\nNext character: `2` = Number $\rightarrow$ go to state E\n\n**FAILURE**\n\n### Hence, c) is the answer",
    "difficultyWeight": 1
  },
  {
    "id": "2021S_FE_AM_06",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2021,
    "questionText": "Which of the following is an appropriate description of parity check (vertical parity) that handles transmission errors on a communication line?",
    "options": [
      "A parity check can correct 1-bit and 2-bit errors.",
      "A parity check can detect a 1-bit error.",
      "An odd parity check can detect a 1-bit error, but an even parity check cannot even detect a 1-bit error.",
      "An odd parity check can detect any odd number of bit errors, and an even parity check can detect any even number of bit errors."
    ],
    "correctIndex": 1,
    "explanation": "### Parity Check Definition\n- adds an extra bit named `parity bit`\n- checks if the number of `1 bits` excluding itself\n- two types of `parity bits`:\n\t1) odd - checks if the no. of `1 bits` is odd\n\t2) even - checks if the no. of  `1 bits` is even\n- very simple\n- error prone\n- 1-bit error checker, or precisely:\n> \ta single bit parity check will detect any odd number of errors, but no even number of errors",
    "difficultyWeight": 1
  },
  {
    "id": "2021S_FE_AM_07",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2021,
    "questionText": "When a sequence of data, $A, B, C, D$, arrives in this order, which of the following is a possible sequence that can be produced using a single stack?",
    "options": [
      "$A, D, B, C$",
      "$B, D, A, C$",
      "$C, B, D, A$",
      "$D, C, A, B$"
    ],
    "correctIndex": 2,
    "explanation": "## Solution\n- Iteration through each option, \n- assume that the sequence is generated with the possibility of popping in between each push\n\n### Step 1: Test option a)\n#### (1) Push `A`\n\n|       |\n| :---: |\n|       |\n|       |\n| **A** |\nOutput Sequence: \n\n#### (2) Pop `A`\n\n|     |\n| :-: |\n|     |\n|     |\n|     |\nOutput Sequence: $A$\n\n#### (3) Push `B`\n\n|       |\n| :---: |\n|       |\n|       |\n| **B** |\nOutput Sequence: $A$\n\n#### (4) Push `C`\n\n|       |\n| :---: |\n|       |\n| **C** |\n| **B** |\nOutput Sequence: $A$\n\n#### (5) Push `D`\n\n|       |\n| :---: |\n| **D** |\n| **C** |\n| **B** |\nOutput Sequence: $A$\n\n#### (6) Pop `D`\n\n|       |\n| :---: |\n|       |\n| **C** |\n| **B** |\nOutput Sequence: $A, D$\n\n#### (7) Pop `C`\n\n|       |\n| :---: |\n|       |\n| **C** |\n| **B** |\nOutput Sequence: $A, D, C$\n**WRONG SEQUENCE, NEXT**\n\n### Step 2: Test option b)\nShortcutting some process steps:\n**NOTE:** Popping always pops top value of the stack\n#### (1) Push `A`\n\n|       |\n| :---: |\n|       |\n|       |\n| **A** |\nOutput Sequence: \n\n#### (2) Push and Pop `B`\n\n|           |\n| :-------: |\n|           |\n| ==**B**== |\n|   **A**   |\n$downarrow$\n\n|       |\n| :---: |\n|       |\n|       |\n| **A** |\nOutput Sequence:  $B$\n\n#### (3) Push `C, D` and Pop `D, C`\n\n|           |\n| :-------: |\n| ==**D**== |\n| ==**C**== |\n|   **A**   |\n$downarrow$\n\n|       |\n| :---: |\n|       |\n|       |\n| **A** |\nOutput Sequence:  $B, D, C$\n**WRONG SEQUENCE**\n\n### Step 3: Test option c)\n#### (1) Push `A, B, C` and Pop `C, B`\n\n|       |\n| :---: |\n| **C** |\n| **B** |\n| **A** |\n$downarrow$\n|       |\n| :---: |\n|       |\n|       |\n| **A** |\nOutput Sequence: $C, B$\n\n#### (2) Push `D` and Pop `D, A`\n\n|       |\n| :---: |\n|       |\n| **D** |\n| **A** |\n$downarrow$\n|     |\n| :-: |\n|     |\n|     |\n|     |\nOutput Sequence: $C, B, D, A$\n**CORRECT SEQUENCE**\n\n### Hence, c) is the correct answer",
    "difficultyWeight": 1
  },
  {
    "id": "2021S_FE_AM_08",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2021,
    "questionText": "The in-order traversal of a binary tree is a procedure that visits all nodes of the tree. For a non-empty binary tree `T`, it performs the following operations in order.\n\n1) Recursively performs the in-order traversal of the left subtree of `T`.\n2) Visits the root node of `T`.\n3) Recursively performs the in-order traversal of the right subtree of `T`.\n\nWhich of the following is the ordered sequence of nodes when the in-order traversal is performed on the binary tree below?\n\n![Image](Files/Pasted%20image%2020241018165551.png)",
    "options": [
      "$1, 2, 4, 7, 8, 5, 3, 6, 9$",
      "$6, 9, 3, 1, 5, 2, 8, 4, 7$",
      "$7, 4, 8, 2, 5, 1, 3, 9, 6$",
      "$7, 8, 4, 5, 2, 9, 6, 3, 1$"
    ],
    "correctIndex": 2,
    "explanation": "### Step 1: Start at left-most subtree: `Node 7`\nWe go to leaf node 7:\n- it is a valid subtree (1 node)\n- we cannot go deeper as it has no children\n![Image](Files/Pasted%20image%2020241018170137.png)\n**Sequence:** $7$\n\n### Step 2: Go to parent of `Node 7`: `Node 4`\nAccording to 2nd instruction:\n- go to parent of node T (7) which is node 4\n![Image](Files/Pasted%20image%2020241018170510.png)\n**Sequence:** $7,4$\n\n### WE CAN ALREADY STOP HERE AND ANS. `C)`\n\n## Process Continuation\n### Step 3: Repeat in-order process to right-subtree of `Node 4`: `Node 8`\nWe go to leaf node 8:\n- it is a valid subtree (1 node)\n- we cannot go deeper as it has no **children**\n![Image](Files/Pasted%20image%2020241018170936.png)\n**Sequence:** $7,4,8$\n\n### Step 4: Go back to `Node 4`\n**NOTE:** already visited, do not write in sequence, continue\n\n### Step 5: Go to parent of `Node 4`: `Node 2`\nAccording to 2nd instruction:\n- go to parent of node T (4) which is node 2\n![Image](Files/Pasted%20image%2020241018171307.png)\n**Sequence:** $7,4,8,2$\n\n### Step 6: Repeat in-order process to right-subtree of `Node 2`: `Node 5`\nWe go to leaf node 5:\n- it is a valid subtree (1 node)\n- we cannot go deeper as it has no **children**\n![Image](Files/Pasted%20image%2020241018171815.png)\n**Sequence:** $7,4,8,2,5$\n\n### Step 7: Go to parent of parent of `Node 5`: `Node 1`\n![Image](Files/Pasted%20image%2020241018172540.png)\n**Sequence:** $7,4,8,2,5,1$\n\n### Step 8: Repeat in-order process to right-subtree of `Node 1`: `Node 3`\nCannot go to left-most subtree (no left subtree)\nHence, it becomes the left-most subtree\n![Image](Files/Pasted%20image%2020241018172602.png)\n**Sequence:** $7,4,8,2,5,1,3$\n\n### Step 9: Repeat in-order process to right-subtree of `Node 3`: `Node 6`\n**Sequence:** $7,4,8,2,5,1,3$\n\n### Step 10: Go to left-most subtree of `Node 6`: `Node 9`\nLeaf-node, place itself\n![Image](Files/Pasted%20image%2020241018172634.png)\n**Sequence:** $7,4,8,2,5,1,3,9$\n\n### Step 11: Go to parent of `Node 9`: `Node 6`\n![Image](Files/Pasted%20image%2020241018172652.png)\n**Sequence:** $7,4,8,2,5,1,3,9,6$\n**NO MORE ELEMENTS OR SUBTREES --END--**\n\n### Hence, the answer is c)",
    "difficultyWeight": 1
  },
  {
    "id": "2021S_FE_AM_09",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2021,
    "questionText": "Which of the following explains the objective of a recursive call?",
    "options": [
      "To allow a function to use itself from within its body",
      "To execute processes in an event-driven way rather than in a predetermined order",
      "To retain a function in memory for reuse after its execution",
      "To undo an execution of a process when it fails"
    ],
    "correctIndex": 0,
    "explanation": "### Definition of recursive call\n> A recursive function is a function that calls itself during its execution. The process may repeat several times, outputting the result and the end of each iteration.",
    "difficultyWeight": 1
  },
  {
    "id": "2021S_FE_AM_10",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2021,
    "questionText": "Which of the following is a technology that provides a dynamic user interface without page transition using an asynchronous communication in JavaScript?",
    "options": [
      "Ajax",
      "CSS",
      "RSS",
      "SNS"
    ],
    "correctIndex": 0,
    "explanation": "## Definitions\n### Ajax (ANSWER)\n- **A**synchronous **J**avaScript **A**nd **X**ML.\n- Update a web page without reloading the page\n- Request data from a server - after the page has loaded\n- Receive data from a server - after the page has loaded\n- Send data to a server - in the background\n\n### CSS\n- NOT JAVASCRIPT\n- **C**ascading **S**tyle **S**heets\n- CSS describes how HTML elements are to be displayed on screen, paper, or in other media\n- CSS saves a lot of work. It can control the layout of multiple web pages all at once\n- External stylesheets are stored in CSS files\n\n### RSS\n- NOT JAVASCRIPT\n- **R**eally **S**imple **S**yndication\n- text-based format\n- delivers content from sites that are\n\t- updated on a regular basis,\n\t- such as news sites or blogs\n\n### SNS\n- NOT JAVASCRIPT\n- Social Networking Service(?)",
    "difficultyWeight": 1
  },
  {
    "id": "2021S_FE_AM_11",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2021,
    "questionText": "Which of the following is a special register that contains the address of the next instruction to be fetched?",
    "options": [
      "Accumulator",
      "Program Counter (PC)",
      "Stack Pointer",
      "Timer"
    ],
    "correctIndex": 1,
    "explanation": "## Definitions\n\n### Accumulator\n- type of register for short-term, intermediate storage of arithmetic and logic data\n\n### Program Counter (ANSWER)\n- specialized register \n- indicates the position of the CPU in its instruction sequence \n- holds either the \n\t- ==address of the instruction being executed, ==\n\t- or the address of the next,\n\n### Stack Pointer\n- register in CPU\n- stores the memory address of the last item added to a stack\n\n### Timer\n- a hardware device or a software component \n- measures time or triggers events\n- increases value in a specific period of time",
    "difficultyWeight": 1
  },
  {
    "id": "2021S_FE_AM_12",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2021,
    "questionText": "Which of the following is the performance of a CPU in MIPS when the instruction mix of the CPU is as listed in the table below? Here, the CPU does not use a pipeline architecture.\n\n|          Instruction type          | Instruction execution <br>time in μs | Appearance ratio |\n| :--------------------------------: | :----------------------------------: | :--------------: |\n| Register to register <br>operation |                 0.1                  |       40%        |\n| Register from memory <br>operation |                 0.3                  |       50%        |\n| Unconditional branch <br>operation |                 0.6                  |       10%        |",
    "options": [
      "0.04",
      "0.25",
      "4",
      "25"
    ],
    "correctIndex": 2,
    "explanation": "### Step 1: Select and define details\n\n1) **MIPS**\n   - Million instructions per second\n   - Formula:  \n     $$\n     \text{MIPS} = \frac{1}{\text{average CPI}} \times \frac{\text{clock rate}}{10^6}\n     $$\n   - CPI = cycles per instruction\n2) **Pipeline architecture** - One execution at a time\n\n### Step 2: Find average CPI\n\nFormula based on table:\n\n$$\n\text{average CPI} = sum_{n=1}^{3} (i_n cdot a_n)\n$$\n\nSubstituting values:\n\n$$\n\begin{aligned}\n\text{average CPI} &= (0.1 mu cdot 0.4) + (0.3 mu cdot 0.5) + (0.6 mu cdot 0.1) \\\n&= 0.04 + 0.15 + 0.06 \\\n\text{average CPI} &= 0.25 mu s\nend{aligned}\n$$\n\n### Step 3: Find MIPS\n\n$$\n\begin{aligned}\n\text{MIPS} &= \frac{1}{\text{average CPI}} \times \frac{\text{clock rate}}{10^6} \\\n\text{*Clock rate unspecified (=1)} &= \frac{1}{\text{average CPI}} \times \frac{1}{10^6} \\\n\text{*Convert } mu \text{ to s} &= \frac{1}{0.25mu s} \times \frac{10^6mu s}{s} \times \frac{1}{10^6} \\\n\text{MIPS} &= 4\nend{aligned}\n$$\n\n### Hence, the answer is **c)**",
    "difficultyWeight": 1
  },
  {
    "id": "2021S_FE_AM_13",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2021,
    "questionText": "Which of the following is a computer system or architecture where the CPU sequentially reads and executes the programs that are stored in the main memory?",
    "options": [
      "Addressing system",
      "DMA control architecture",
      "Stored program architecture",
      "Virtual memory system"
    ],
    "correctIndex": 2,
    "explanation": "## Definitions\n### Addressing system\n- computer system\n- refers to the method used by a computer to access memory locations.\n\n### DMA control architecture\n- control architecture\n- Direct Memory Access (DMA)\n- allows peripherals to access the main memory independently of the CPU\n\n### Stored program architecture (ANSWER)\n- computer architecture\n- instructions to be executed are ==stored in the main memory alongside the data==\n- ==CPU sequentially fetches and executes these instructions==\n\n### Virtual memory system\n- computer system\n- allows a computer to use disk storage as an extension of RAM",
    "difficultyWeight": 1
  },
  {
    "id": "2021S_FE_AM_14",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2021,
    "questionText": "Which of the following is an appropriate description of USB 3.0?",
    "options": [
      "It is a serial interface that adopts isochronous transmission that is suitable for audio or video, and has a broadcast transmission mode.",
      "It is a serial interface that has a data transmission mode of 5 Gbit/s that is called super speed.",
      "It is a serialized ATA specification that connects a PC to a peripheral device.",
      "It is an interface that uses four (4) pairs of signal lines transmitting two (2) bits of information in one (1) clock and has a maximum throughput of 1 Gbit/s."
    ],
    "correctIndex": 1,
    "explanation": "## Definition\nUSB 3.0, also known as SuperSpeed USB, is a Universal Serial Bus (USB) data transfer standard that's commonly used to connect external devices to computers: \n\n- **Speed**: 5–20 Gbps. \n- **Compatibility**: backwards compatible with USB 2.0 and USB 1.1 devices. \n- **Symbol**: standard USB trident logo with an 'SS' inscription and a transfer speed capability above the trident. \n- **Ports**: usually blue, while USB 2.0 ports are black or white. \n- **Uses**: connect external devices like thumb drives, network adapters, and high-resolution cameras.\n\n### Option a) - Wrong\n- does support isochronous transfers\n- BUT USB 3.0 also supports other types of data transfers\n\n\n### Option b) - Correct\n- USB 3.0 introduced the 'SuperSpeed' mode\n- maximum data transfer rate of **5 Gbit/s**\n\n### Option c) - Wrong\n- USB 3.0 is not an ATA\n- ATA refers to a different interface used primarily for connecting storage devices like hard drives and SSDs.\n\n### Option d) - Wrong\n- maximum throughput is 1 Gbit/s = WRONG",
    "difficultyWeight": 1
  },
  {
    "id": "2021S_FE_AM_15",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2021,
    "questionText": "Which of the following is the RAID level where the entire stored data is lost when one of the multi-disks is damaged?",
    "options": [
      "RAID 0",
      "RAID 1",
      "RAID 5",
      "RAID 6"
    ],
    "correctIndex": 0,
    "explanation": "## Definitions\n**RAID**\n- Redundant Array of Independent Drives or \n- Redundant Array of Inexpensive Disks\n\n### a) RAID 0 (ANSWER)\n- data is split across disks \n- but no data redundancy\n- good performance\n- but ==if a drive broken, data is permanently lost==\n### b) RAID 1\n- uses mirroring\n- data in one drive is duplicated to another\n- data is not lost on disk failure\n### c) RAID 5\n- stripes data across multiple disks\n- includes parity information\n- can reconstruct data on one disk failure\n### d) RAID 6\n- similar to raid 5\n- double parity\n- adds extra parity info\n- allows loss of two disks before data is compromised",
    "difficultyWeight": 1
  },
  {
    "id": "2021S_FE_AM_16",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2021,
    "questionText": "Which of the following is the approximate availability of a system in percentage when the MTBF is 30 days and the MTTR is 6 hours?",
    "options": [
      "$0.83$",
      "$83.33$",
      "$98.36$",
      "$99.17$"
    ],
    "correctIndex": 3,
    "explanation": "### Step 1: Get important definitions\n\n1) MTBF\n\n- mean time between failure\n\n- aka **uptime**\n\n2) MTTR\n\n- mean time to repair\n\n- aka **downtime**\n\n3) System availability\n\n- in `hours`\n\n- Formula: $$ \text{Availability} = \frac{\text{uptime}}{\text{uptime} + \text{downtime}} cdot 100 $$\n\n### Step 2: Use availability formula\n\n$$ \text{uptime} = 30 \text{ days} = 30 cdot 24 = 720 \text{ hours} $$\n$$ \text{downtime} = 6 \text{ hours} $$\n$$ \text{Availability} = \frac{720}{720 + 6} cdot 100 $$\n$$ \text{Availability} approx \boxed{99.17%} $$\n\n### Hence, the answer is d)",
    "difficultyWeight": 1
  },
  {
    "id": "2021S_FE_AM_17",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2021,
    "questionText": "In the switching procedure of processes in the multiprogramming shown in the figure below, which of the following is an appropriate combination of OS processing from A to C?\n\n![Image](Files/Pasted%20image%2020241018222511.png)",
    "options": [
      "Restoration of the running state | Selection of the process | Saving of the running state",
      "Saving of the running state | Restoration of the running state | Selection of the process",
      "Saving of the running state | Selection of the process | Restoration of the running state",
      "Selection of the process | Restoration of the running state | Saving of the running state"
    ],
    "correctIndex": 2,
    "explanation": "## Explanation\n\nIn the context of process switching the OS must do the following:\n\n1) **Save the current process**: The OS saves the state of the current process into a process control block (PCB).\n\n2) **Load the next process**: The OS loads the PCB of the next process to be executed.\n\n3) **Transfer control**: The OS transfers control to the next process.\n\n### Hence, the answer is c)",
    "difficultyWeight": 1
  },
  {
    "id": "2021S_FE_AM_18",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2021,
    "questionText": "Among the page replacement methods in virtual memory management, which of the following is the LRU control method?",
    "options": [
      "Each page is managed by appending a reference flag and a change flag, and pages without reference or change are replaced with higher priority.",
      "One of the pages in main memory is randomly chosen with the same probability and then replaced.",
      "The page that has been stored in the main memory for the longest time is replaced.",
      "The page that has not been referenced the longest time is replaced."
    ],
    "correctIndex": 3,
    "explanation": "## Explanation\n\n**LRU Control Method**\n\n- least recently used (LRU)\n\n- virtual memory\n\n- a cache replacement policy\n\n- removes the least recently accessed data when a cache reaches its capacity",
    "difficultyWeight": 1
  },
  {
    "id": "2021S_FE_AM_19",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2021,
    "questionText": "Which of the following is an appropriate function of a linker?",
    "options": [
      "To load a load module to the main memory ahead of execution",
      "To monitor the execution of a program and to record the execution results for each step",
      "To perform a resolution of cross references and to create one (1) load module from multiple object modules",
      "To register a created program in a library"
    ],
    "correctIndex": 2,
    "explanation": "## Explanation\n\nA linker, also known as a link editor, is a computer program that performs several functions to combine object files into an executable program:\n\n1) **Combines object files**\n\n- The linker takes object files generated by a compiler and combines them into a single executable file. This process is called file linking.\n\n2) **Assigns memory addresses**\n\n- The linker assigns unique memory addresses to each symbol in the program, including functions and variables.\n\n3) **Resolves references**\n\nThe linker resolves references between object files by assigning definite addresses.\n\n4) **Allocates memory**\n\n- The linker allocates memory for static variables and arranges for the initialization of dynamic variables.\n\n5) **Handles relocations**\n\n- The linker adjusts the addresses of symbols when the executable is loaded into memory. This process allows the program to access the correct memory locations.\n\n6) **Sets up entry point**\n\n- The linker sets up the program's entry point.\n\nIf the linker encounters unresolved references during the linking process, it will produce an error and fail to create the executable file.",
    "difficultyWeight": 1
  },
  {
    "id": "2021S_FE_AM_20",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2021,
    "questionText": "Which of the following is the appropriate explanation of sequence control for controlling industrial devices?",
    "options": [
      "It is based on fuzziness, such as 'slightly more' or 'slightly less.'",
      "It is resistant to unexpected disturbances because it continuously detects the amount of control and reflects it on the control.",
      "It steps through each phase of control one after another according to a predefined order or set of conditions.",
      "It takes corrective action in advance by assuming the occurrence of disturbances when disturbances can be expected."
    ],
    "correctIndex": 2,
    "explanation": "## Definition\n\n**Sequence control**\n\n- a predefined `sequence` of steps to operate a machine\n\n- each step follows the previous one based on a set order of conditions\n\n### Option a)\n\n- describes fuzzy control\n\n### Option b)\n\n- describes feedback control\n\n### Option c) (ANSWER)\n\n- accurate to the definition of sequence control\n\n### Option d)\n\n- describes feedforward control",
    "difficultyWeight": 1
  },
  {
    "id": "2021S_FE_AM_21",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2021,
    "questionText": "The half adder in the diagram below adds two (2) single-digit binary numbers, x and y, and produces z (the first digit of the sum) and c (the carry bit) as outputs. Which of the following is the appropriate combination of gate devices A and B?\n\n![Image](Files/Pasted%20image%2020241018230017.png)",
    "options": [
      "Exclusive logical sum (XOR) | Logical product (AND)",
      "Logical product (AND) | Logical sum (OR)",
      "Negative logical product (NAND) | Negative logical sum (NOR)",
      "Negative logical sum (NOR) | Exclusive logical sum (XOR)"
    ],
    "correctIndex": 0,
    "explanation": "## Explanation\n\nRecall definition of and **adder** circuit\n\n- sum bit becomes 1 ONLY when\n\n- $x$ = 1 and $y$ = 0\n\n- $x$ = 0 and $y$ = 1\n\n- ==XOR==\n\n- carry bit becomes 1 ONLY when\n\n- $x$ and $y$ = 1\n\n- ==AND==\n\n### Truth table of adder\n\n|  x  |  y  |  z  |  c  |\n|:---:|:---:|:---:|:---:|\n| $0$ | $0$ | $0$ | $0$ |\n| $0$ | $1$ | $1$ | $0$ |\n| $1$ | $0$ | $1$ | $0$ |\n| $1$ | $1$ | $0$ | $1$ |",
    "difficultyWeight": 1
  },
  {
    "id": "2021S_FE_AM_22",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2021,
    "questionText": "Which of the following is not an implementation of the function F = A•B + C•D? Here, '•' represents the logic AND operation, and '+' represents the logic OR operation in the expression.\n\na)\n![Image](Files/Pasted%20image%2020241018231214.png)\n\nb)\n![Image](Files/Pasted%20image%2020241018231232.png)\n\nc)\n![Image](Files/Pasted%20image%2020241018231239.png)\n\nd)\n![Image](Files/Pasted%20image%2020241018231249.png)",
    "options": [
      "Circuit diagram A",
      "Circuit diagram B",
      "Circuit diagram C",
      "Circuit diagram D"
    ],
    "correctIndex": 2,
    "explanation": "## Explanation\n\nRecall de Morgan's Law:\n\n1) $overline{A + B} = overline{A} cdot overline{B}$\n\n2) $overline{A cdot B} = overline{A}+overline{B}$\n\n3) $overline{overline{A}} = A$\n\nRecall logic gates:\n\n1) AND $\rightarrow Acdot B$\n\n2) OR $\rightarrow A + B$\n\n3) NAND $\rightarrow overline{A cdot B} = overline{A}+overline{B}$\n\n4) NOR $\rightarrow overline{A + B} = overline{A} cdot overline{B}$\n\n### Translating option a)\n\n1) upper `AND` gate =$A cdot B$\n\n2) lower `AND` gate = $C cdot D$\n\n3) final `OR` gate = $(A cdot B) + (C cdot D)$ = **the same**\n\n### Translating option b)\n\n1) upper `NAND` gate =$(overline{A cdot B})$\n\n2) lower `NAND` gate = $(overline{C cdot D})$\n\n3) final `NAND` gate = $overline{(overline{A cdot B}) cdot (overline{C cdot D})} =(A cdot B) + (C cdot D)$ = **the same**\n\n### Translating option c) (ANSWER)\n\n1) upper `NAND` gate =$(overline{A cdot B})$\n\n2) lower `NAND` gate = $(overline{C cdot D})$\n\n3) final `NOR` gate = $overline{(overline{A cdot B}) + (overline{C cdot D})} =(A cdot B) cdot (C cdot D)$ = **not the same**\n\n### Translating option b)\n\n1) upper `NAND` gate =$(overline{A cdot B})$\n\n2) lower `NAND` gate = $(overline{C cdot D})$\n\n3) final (alternate) `NAND` gate = $overline{(overline{A cdot B}) cdot (overline{C cdot D})} =(A cdot B) + (C cdot D)$ = **the same**",
    "difficultyWeight": 1
  },
  {
    "id": "2021S_FE_AM_23",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2021,
    "questionText": "Which of the following is an appropriate purpose of check digit?",
    "options": [
      "To detect an error that an alphabet or a symbol is contained in a numeric item field",
      "To detect an error that the number of digits of an entered code is incorrect",
      "To detect an error that the value of an entered code is incorrect",
      "To detect an error that the value of an entered data is not within a specified range"
    ],
    "correctIndex": 2,
    "explanation": "## Explanation\n\n**Check digit**\n\n- extra digit added to a numeric or alphanumeric code typically at the end\n\n- help detect errors in the transmission or input of data.\n\n- calculated using the other digits of the code\n\n- used to verify that the code has been entered correctly\n\n- BASICALLY,\n\n- checks codes i.e., Barcode, ID numbers\n\n- detects common errors such as mistypes\n\n## Breakdown\n\n### Option a)\n\n- check digit doesn't validate characters\n\n### Option b)\n\n- doesn't check length of code, only validity\n\n### Option c)\n\n- accurate description\n\n### Option d)\n\n- this is data validation",
    "difficultyWeight": 1
  },
  {
    "id": "2021S_FE_AM_24",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2021,
    "questionText": "Which of the following explains a drawing software?",
    "options": [
      "It can create a picture on a screen using the mouse as a brush that can be saved to a bitmap image file.",
      "It can create a scenario-based content by editing and arranging several materials, such as text, images, video, and sound.",
      "It can create a simple movie from a series of still images by gradually changing the differences among images.",
      "It can create vector graphics composed of lines and curves defined mathematically with geometric characteristics that can then be transformed or combined."
    ],
    "correctIndex": 3,
    "explanation": "## Explanation\n\n**Drawing software**\n\n- also known as a graphics program,\n\n- used to create digital images and graphics in 2D or 3D:\n\n- **Vector graphics**: Drawing programs use vector graphics, which allows users to isolate, move, and scale elements of an image independently.\n\n- **Special effects**: Drawing programs often include special effects for creating illustrations.\n\n- **Popular programs**: Some popular drawing programs include Adobe Illustrator, CorelDRAW, and Macromedia Freehand.\n\n## Breakdown\n\n### Option a)\n\n- describes bitmap or raster graphics software i.e., MS Paint,\n\n- **difference:** bitmap graphics software uses pixels rather than vectors\n\n### Option b)\n\n- describes multimedia software, uses a mix of video, audio, and images\n\n### Option c)\n\n- describes animation software\n\n### Option d) (ANSWER)\n\n- accurate description of drawing software",
    "difficultyWeight": 1
  },
  {
    "id": "2021S_FE_AM_25",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2021,
    "questionText": "Which of the following is an appropriate explanation of a relational database?",
    "options": [
      "Data is represented as a table, and the tables are linked to one another using the column values of these tables.",
      "Each attribute is represented as a pair of the attribute value and the storage location of the record having that value and used as an index.",
      "The relationship among records is represented by a data structure using links that can represent both tree and network structures.",
      "The relationship among records is represented by a data structure using pointers that are limited to representing a tree structure."
    ],
    "correctIndex": 0,
    "explanation": "## Explanation\n\n**Relational Database** (RDB)\n\n- way of structuring information in tables, rows, and columns\n\n- has the ability to establish links or relationships between information by joining tables\n\n## Breakdown\n\n### Option a) (ANSWER)\n\n- accurate description\n\n### Option b)\n\n- more fluid approach, related to NoSQL or key-value databases\n\n### Option c)\n\n- describes graph or hierarchical databases\n\n### Option d)\n\n- describes hierarchical (tree structures)",
    "difficultyWeight": 1
  },
  {
    "id": "2021S_FE_AM_26",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2021,
    "questionText": "Which of the following is performed periodically to prevent a decline in the access efficiency of a database?",
    "options": [
      "Backup",
      "Database dump",
      "Reorganization",
      "Rollback"
    ],
    "correctIndex": 2,
    "explanation": "### Option a)\n- the process of creating a copy (backing up) of an organization's structured data\n- does not help with efficiency\n- focuses on integrity and security of data\n\n### Option b)\n- process of pulling data from a database and saving it as a structured file\n- similar to option a)\n\n### Option c) (ANSWER)\n- process of applying changes to a database's data dictionary to the database itself\n- improve performance, save disk space, and **improve database efficiency**\n\n### Option d)\n- \"undo\" button for database changes\n- eliminates the problematic change and the issues it caused for the infrastructure, application, data, and end users\n- focuses on reliability instead of efficiency",
    "difficultyWeight": 1
  },
  {
    "id": "2021S_FE_AM_27",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2021,
    "questionText": "A student’s ID, name, and class ID are recorded in the Student table. Which of the following SQL returns records of all students whose names start with A?",
    "options": [
      "SELECT * FROM Student WHERE name LIKE '%A';",
      "SELECT * FROM Student WHERE name LIKE '%A_';",
      "SELECT * FROM Student WHERE name LIKE 'A_';",
      "SELECT * FROM Student WHERE name LIKE 'A%';"
    ],
    "correctIndex": 3,
    "explanation": "## Explanation\n\nRecall `SQL`, specifically the `LIKE` operator:\n- used in a `WHERE` clause to search for a specified pattern in a column.\n- Has wildcards:\n  - percent sign `%` represents zero, one, or multiple characters\n    - `%A` - any as long as last character is `A`\n    - **`A%` - any as long as first character is `A`**\n    - `%A%` - any as long as there is a character `A` in between\n  - underscore sign `_` represents one, single character\n    - `A_` - first character is `A` and next/last character is any",
    "difficultyWeight": 1
  },
  {
    "id": "2021S_FE_AM_28",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2021,
    "questionText": "Among the search processes for the 'Sales' table, which of the following is appropriate to set a hash index rather than a B+ tree index? Here, the column in which the index is set is shown inside <>.\n\nSales (form number, sales date, product name, user ID, store number, sales amount)",
    "options": [
      "Searching for sales with a sales amount of 100 dollars or more. \\<sales amount\\>",
      "Searching for sales with the product name bedginning with 'DB'. \\<product name\\>",
      "Searching for sales with the sales date as the current month. \\<sales date\\>",
      "Searching for sales with the user ID as '1001'. \\<user ID\\>"
    ],
    "correctIndex": 3,
    "explanation": "## Explanation\n**Hash Index**\n- typically used for equality searches, where the exact value of a field is known and needed\n- allows for very fast lookups for **specific values** because it directly computes the location of the data using a hash function.\n\n**B+ Trees**\n- data structures\n- used to store vast amounts of data that are too large to fit in the main memory.\n\n### Option a)\n- large range\n- fits for B+ Trees\n\n### Option b)\n- can contain many products\n- fits for B+ Trees\n\n### Option c)\n- can contain a large range of data\n- fits for B+ Trees\n\n### Option d) (ANSWER)\n- specific user\n- fits for hashing",
    "difficultyWeight": 1
  },
  {
    "id": "2021S_FE_AM_29",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2021,
    "questionText": "Which of the following is the appropriate explanation of the key value store that is used in the processing of big data?",
    "options": [
      "It is represented by a two-dimensional table with rows and columns based on the set theory.",
      "It represents the relationship among nodes with the three (3) elements, i.e., 'node,' 'relationship,' and 'property.'",
      "It saves the desired data together with a value that enables this data to be uniquely identified as a pair.",
      "The data for one (1) case is called a 'document,' and the data structure of each document is unrestricted and can be changed whenever data is added."
    ],
    "correctIndex": 2,
    "explanation": "## Explanation\n**Key-value Store**\n- NoSQL database (non-relational)\n- key serves as unique identifier\n- efficient data retrieval by **using the key to access the corresponding value**\n- ideal for applications requiring fast lookups and scalability\n- good for big data",
    "difficultyWeight": 1
  },
  {
    "id": "2021S_FE_AM_30",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2021,
    "questionText": "Which of the following is the response time when a client and server at different locations communicate under the conditions below? Here, the response time is in seconds and starts from the moment the client sends a message until a response is received from the server. 1 MB is 10^6 bytes. The propagation delay between the client and server can be ignored.,\n    ![Image](Files/2021-30.png)",
    "options": [
      "1.4",
      "3.8",
      "5.0",
      "5.8"
    ],
    "correctIndex": 3,
    "explanation": "### Step 1: Get the given\n- Line speed: **8 Mbit/s** (which is **8 × 10^6** bits/s)\n- Transmission efficiency: **60%** (0.6)\n- Message size (upstream): **1 MB** = **8 × 10^6** bits\n- Message size (downstream): **2 MB** = **16 × 10^6** bits\n- Processing time at client side: **0.4 s**\n- Processing time at server side: **0.4 s**\n\n### Step 2: Get effective speed\nEffective Speed = 8 × 10^6 bits/s × 0.6 = **4.8 × 10^6 bits/s**\n\n### Step 3: Get transmission time\nUpstream Time = 8 × 10^6 / 4.8 × 10^6 ≈ **1.67 s**\n\nDownstream Time = 16 × 10^6 / 4.8 × 10^6 ≈ **3.33 s**\n\n### Step 4: Apply formula for response time\nResponse time = Upstream Time + Server PT + Downstream Time + Client PT\n≈ 1.67s + 0.4s + 3.33s + 0.4s\n≈ **5.8s**\n\n### Hence, the answer is **d)**",
    "difficultyWeight": 1
  },
  {
    "id": "2022A_FE_AM_1",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2022,
    "questionText": "For an 8-bit binary integer, which of the following sets the least significant bit to 1 while leaving the other bits unchanged?",
    "options": [
      "Perform bitwise AND operation with 00000001.",
      "Perform bitwise NAND operation with 11111110.",
      "Perform bitwise OR operation with 00000001.",
      "Perform bitwise XOR operation with 00000001."
    ],
    "correctIndex": 2,
    "explanation": "You want to set the least significant bit (LSB) to 1 while leaving the other bits unchanged in an 8-bit binary integer.\n\nThe least significant bit is the rightmost bit in the binary number (position 0).\n\nSuppose we have an 8-bit binary integer that is x = 10110010.\n\na) Perform bitwise AND operation with 00000001.\n\tx           = 10110010\n\t00000001    = 00000001\n\t-----------------------\n\t              00000000\nThis operation clears all bits except the least significant bit. It does not leave the other bits unchanged, so this is incorrect.\n\nb) Perform bitwise NAND operation with 11111110.\n\tx           = 10110010\n\t11111110    = 11111110\n\t-----------------------\n\t              01001101\nThis operation flips all bits except the least significant bit, which is not what we want.\n\nc) Perform bitwise OR operation with 00000001.\n\tx           = 10110010\n\t00000001    = 00000001\n\t-----------------------\n\t              10110011\nThis operation sets the least significant bit to 1 while leaving the rest of the bits unchanged. This is correct.\n\nd) Perform bitwise XOR operation with 00000001.\n\tx           = 10110010\n\t00000001    = 00000001\n\t-----------------------\n\t              10110011\nThis changes the least significant bit if it was 0, but if it was already 1, XOR would change it to 0, which is not what we want. Therefore, this is incorrect for numbers where the LSB is already 1.\n\nConclusion: c) Perform bitwise OR operation with 00000001 is the correct answer because it sets the least significant bit to 1 and leaves the other bits unchanged.",
    "difficultyWeight": 1
  },
  {
    "id": "2022A_FE_AM_2",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2022,
    "questionText": "Which of the following is an appropriate explanation of the loss of significance?",
    "options": [
      "It occurs when the result of an operation exceeds the maximum handle limit and raises an exception.",
      "It occurs when two nearly equal floating-point numbers are subtracted to produce a result of unacceptably reduced significant digits.",
      "It refers to a rounding error that occurs when the part smaller than the least significant digit of the result is rounded off, up, or down in floating-point operations.",
      "It refers to the case when two floating-point numbers are added, but the less significant digits of either one do not affect the result."
    ],
    "correctIndex": 1,
    "explanation": "Loss of significance (also called catastrophic cancellation) happens in numerical computing when subtracting two nearly equal numbers in floating-point arithmetic. This subtraction causes the significant digits in the result to be lost, leaving a result with very few meaningful digits.\n\na) Describes overflow. Overflow occurs when the result of a computation is too large to be represented in the available number of bits. This raises an exception or error in most systems.\n\nc) Describes rounding error, which happens when the exact result of a floating-point operation cannot be represented in a finite number of digits, so the result is rounded. While related to precision, this is not specifically loss of significance.\n\nd) Describes absorption or precision loss due to addition, where adding a very small number to a much larger number results in the small number having no effect due to the limitations of floating-point precision. This is a different phenomenon than loss of significance caused by subtraction.",
    "difficultyWeight": 1
  },
  {
    "id": "2022A_FE_AM_3",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2022,
    "questionText": "When two dice are rolled, what is the probability that the sum of the dice is 5? Here, the two dice are fair and independent.",
    "options": [
      "$\\frac{1}{18}$",
      "$\\frac{1}{12}$",
      "$\\frac{1}{9}$",
      "$\\frac{1}{6}$"
    ],
    "correctIndex": 2,
    "explanation": "To find the probability that the sum of the dice is 5, we can follow these steps:\n\n1. Find the total possible outcomes:\nEach die has 6 faces, so when rolling two dice, the total number of possible outcomes is:\n$6 cdot 6 = 36$\n\n2. Find Favorable Outcomes:\nNow, let's list all the possible pairs of dice that sum to 5:\n- (1, 4)\n- (2, 3)\n- (3, 2)\n- (4, 1)\nSo, there are 4 favorable outcomes where the sum of the two dice is 5.\n\n3. Calculate the Probability:\nThe probability is the ratio of favorable outcomes to the total possible outcomes:\n$P(sum~of~5) = \frac{favorable~outcomes}{total~outcomes} = \frac{4}{36} = \frac{1}{9}$\n\nThe probability that the sum of the two dice is 5 is $\frac{1}{9}$, so the correct answer is: c) $\frac{1}{9}$.",
    "difficultyWeight": 1
  },
  {
    "id": "2022A_FE_AM_4",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2022,
    "questionText": "What is the value of the following arithmetic expression in reverse Polish notation?\n9      2      1      +      -      3      *",
    "options": [
      "0",
      "4",
      "10",
      "18"
    ],
    "correctIndex": 3,
    "explanation": "If the arithmetic expression is in Reverse Polish Notation (RPN), then the operators come after the operands. Find 2 operands that have an operator after them. Then perform the operation according to the operator. Repeat until you get the result.\n\nSince we get 18 as the result of our arithmetic expression, the answer is d) 18.",
    "difficultyWeight": 1
  },
  {
    "id": "2022A_FE_AM_5",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2022,
    "questionText": "What is the Hamming distance of bit strings 10101 and 11110?",
    "options": [
      "0",
      "2",
      "3",
      "5"
    ],
    "correctIndex": 2,
    "explanation": "Hamming distance is a metric used in information theory and coding theory to measure the difference between two strings of equal length. It is defined as the number of positions at which the corresponding symbols (bits) in the two strings are different.\n\nThe Hamming distance between two strings $s_{1}$ and $s_2$ of equal length $n$ is calculated as:\n$d(s_{1},s_{2}) = sum_{i=1}^{n}(s_{1}[i] \neq s_{2}[i])$\nwhere $s_{1}[i]$ and $s_{2}[i]$ are the characters at the $i$-th position of the strings.\n\nTo calculate the Hamming distance of bit strings 10101 and 11110:\n- 1 vs 1 => same\n- 0 vs 1 => different\n- 1 vs 1 => same\n- 0 vs 1 => different\n- 1 vs 0 => different\nThere are 3 different characters between the two bit strings so the Hamming distance is 3. Therefore, the answer is c.",
    "difficultyWeight": 1
  },
  {
    "id": "2022A_FE_AM_6",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2022,
    "questionText": "There are three (3) blue balls and four (4) green balls in a box. When two balls are randomly taken out from the box, what is the probability that both are blue?",
    "options": [
      "$\\frac{2}{49}$",
      "$\\frac{1}{15}$",
      "$\\frac{1}{7}$",
      "$\\frac{9}{49}$"
    ],
    "correctIndex": 2,
    "explanation": "To find the probability of drawing two blue balls from a box containing three blue balls and four green balls, we can use the following steps:\n\n### 1. Determine the total number of balls\n- Number of blue balls: $3$\n- Number of green balls: $4$\n#### $Total~number~of~balls:~3+4=7$\n\n### 2. Calculate the total ways to choose 2 balls from 7\nThe total number of ways to choose 2 balls from 7 is given by the combination formula $\binom{n}{k}$, which represents choosing $k$ items from $n$ items without regard to the order.\n#### $Total~Ways=\binom{7}{2} = \frac{7~cdot~6}{2~cdot~1}=21$\n\n### 3. Calculate the ways to choose 2 blue balls from 3\nNow, we calculate the number of ways to choose 2 blue balls from the 3 available:\n#### $Ways~to~choose~2~blue~balls=\binom{3}{2}=\frac{3~cdot~2}{2~cdot~1} = 3$\n\n### 4. Calculate the probability\nThe probability PPP of both balls being blue is the ratio of the number of favorable outcomes (choosing 2 blue balls) to the total outcomes (choosing any 2 balls):\n#### $P(both~blue)=\frac{Ways~to~choose~2~blue~balls}{Total~Waysto~choose~2~blue~balls}=\frac{3}{21}=\frac{1}{7}$\n\nThe probability that both balls drawn are blue is $\frac{1}{7}$. Therefore, the answer is **c**.",
    "difficultyWeight": 1
  },
  {
    "id": "2022A_FE_AM_7",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2022,
    "questionText": "Five (5) characters, A, C, K, S, and T, are input in this order. When using stacks, what is the minimum number of stacks required to rearrange the characters and output S, T, A, C, and K, in this order? Here, when a pop operation is performed for any stack, the popped character always becomes an output. Also, characters cannot be moved between stacks.",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctIndex": 2,
    "explanation": "To determine the minimum number of stacks required to rearrange the characters A, C, K, S, and T into the output order S, T, A, C, and K using stacks, we need to analyze the properties of stacks and how they operate.\n### Stack Properties:\n1. **LIFO Structure**: Stacks operate on a Last In, First Out (LIFO) principle. This means the last element added to the stack will be the first one to be removed.\n2. **Single Movement**: Once an element is in a stack, it cannot be moved to another stack. It can only be popped from its current stack.\n\nPush A to Stack #1, C to Stack #2, K to Stack #3, S to Stack #1 then T to Stack #2.\nstack1 = [A, S]\nstack2 = [C, T]\nstack3 = [K]\nThen pop in this specific order:\nstack1, stack2, stack1, stack2, stack3\n\nYou should be able to print S, T, A, C, and K in this order.\n\nSince we used a minimum of 3 stacks, the answer is **c**.",
    "difficultyWeight": 1
  },
  {
    "id": "2022A_FE_AM_8",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2022,
    "questionText": "When a two-dimensional array A(5,5) is mapped to computer memory (i.e. a one-dimensional array) in row-major (row-directional) order or column-major (column-directional) order, how many elements occupy the same memory addresses in both cases? Here, the first element A(1,1) is mapped to the same starting memory address in either case.",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "correctIndex": 3,
    "explanation": "In a 5x5 array, the same address means that the row and column of the array index are of equal value. To visualize:\n![Image](Files/Pasted%20image%2020241017231141.png)\n\nThere are 5 same addresses in the 5x5 array. So the answer is **d**.",
    "difficultyWeight": 1
  },
  {
    "id": "2022A_FE_AM_9",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2022,
    "questionText": "Which of the following characterizes the hash method in table search?",
    "options": [
      "It determines the storage location using a function of a key.",
      "It is a method that avoids collisions among storage locations.",
      "It is one of the methods that use a binary tree.",
      "It takes time almost proportional to the table size for searching."
    ],
    "correctIndex": 0,
    "explanation": "Hashing uses a hash function to convert a key into an index in a hash table. The hash function takes the key as input and produces a hash code, which is then used to determine the location where the corresponding value will be stored. Therefore the closest answer is **a**.\n\n**b)** While hashing aims to minimize the number of collisions (when two different keys hash to the same index), it cannot entirely avoid them due to the limited number of available storage locations compared to the potentially infinite number of keys. Instead, hash tables implement strategies (such as chaining or open addressing) to handle collisions when they occur.\n\n**c)** Hashing and binary trees are different data structures used for searching and storing data. Binary trees, particularly binary search trees (BST), organize data in a hierarchical manner and allow for ordered retrieval. Hashing, on the other hand, relies on hash tables and does not use tree structures to store data.\n\n**d)** The average-case time complexity for searching in a well-designed hash table is **constant time**, denoted as $O(1)$, rather than being proportional to the size of the table. However, in the worst case (e.g., when many collisions occur), the time complexity can degrade to $O(n)$, where $n$ is the number of elements stored in the hash table. Nonetheless, a good hash function and collision resolution strategy typically keep search times close to constant.",
    "difficultyWeight": 1
  },
  {
    "id": "2022A_FE_AM_10",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2022,
    "questionText": "Which of the following is a technology used to provide dynamic UI contents without reloading the entire web page by using an asynchronous communication feature of JavaScript?",
    "options": [
      "Ajax",
      "CSS",
      "RSS",
      "SNS"
    ],
    "correctIndex": 0,
    "explanation": "Ajax is a set of web development techniques that allow for asynchronous communication between the client and server. It enables web pages to update dynamically by retrieving data from the server without needing to reload the entire page. Therefore, the answer is **a**.\n\n**b)** Cascading Style Sheets (CSS) is a stylesheet language used for describing the presentation of a document written in HTML or XML. It does not provide any dynamic content loading capabilities or asynchronous communication.\n\n**c)** Really Simple Syndication (RSS) is a web feed format used for delivering regularly changing web content, such as news articles or blog posts. It is not related to dynamic content updates on a web page without reloading.\n\n**d)** Social Networking Service (SNS) refers to platforms and services that enable users to create and share content or participate in social networking. While they may use technologies like Ajax for dynamic content, SNS itself is not a technology for asynchronous communication.",
    "difficultyWeight": 1
  },
  {
    "id": "2022A_FE_AM_11",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2022,
    "questionText": "There is a 32-bit microprocessor with 32-bit external data bus, driven by 64 MHz input clock, and the processor takes 8 input clock cycles to complete 1 bus cycle. What is the theoretical maximum data transfer rate in megabytes per second (MB/s) for the external data bus of the processor?",
    "options": [
      "3",
      "32",
      "256",
      "320"
    ],
    "correctIndex": 1,
    "explanation": "To determine the theoretical maximum data transfer rate for the 32-bit microprocessor with a 32-bit external data bus, we can follow these steps:\n\n### Given:\n- Input Clock Frequency: 64 MHz\n- Clock Cycles per Bus Cycle: 8 cycles\n- Data Bus Width: 32 bits\n\n### Steps to Calculate Maximum Data Transfer Rate:\n\n#### 1. Determine the Bus Cycle Frequency:\n\nBus Cycle Frequency = Input Clock Frequency / Clock Cycles Per Bus Cycle = 64 MHz / 8 = 8 MHz\n\n#### 2. Calculate Data Transfer per Bus Cycle:\n\nData Transfer Per Bus Cycle = 32 bits * 1 byte / 8 bits = 4 bytes\n\n#### 3. Calculate Theoretical Maximum Data Transfer Rate:\n\nData Transfer Rate = Bus Cycle Frequency * Data Transfer Per Bus Cycle = 8 MHz * 4 bytes = 32 MB/s\n\n### Conclusion:\nThe theoretical maximum data transfer rate for the external data bus of the processor is 32 MB/s. Therefore, the answer is b.",
    "difficultyWeight": 1
  },
  {
    "id": "2022A_FE_AM_12",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2022,
    "questionText": "There is a computer that has an average instruction execution time of 20 nanoseconds. What is the performance of this computer in MIPS?",
    "options": [
      "5",
      "10",
      "20",
      "50"
    ],
    "correctIndex": 3,
    "explanation": "To calculate the performance of the computer in MIPS (Million Instructions Per Second), we can use the following formula:\n\nMIPS = 1 / (Average Instruction Time In Seconds * 10^6)\n\n### Given:\n- Average Instruction Execution Time = 20 nanoseconds = 20 * 10^-9 seconds\n\n### Calculate the MIPS:\n\nMIPS = 1 / (20 * 10^-9 secs * 10^6) = 50 MIPS\n\n### Conclusion:\nThe performance of the computer is 50 MIPS. Therefore, the answer is d.",
    "difficultyWeight": 1
  },
  {
    "id": "2022A_FE_AM_13",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2022,
    "questionText": "There is a disk drive that has a capacity of 8 GB. The drive has five (5) platters with two (2) surfaces: 10,000 tracks per surface and 200 sectors per track. How many bytes are in each sector? Here, 1 GB is 1,000,000,000 bytes.",
    "options": [
      "100",
      "200",
      "400",
      "800"
    ],
    "correctIndex": 2,
    "explanation": "To determine how many bytes are in each sector, we can break down the problem using the provided information and perform the following calculations:\n\n### Given:\n- Disk capacity: 8 GB = 8,000,000,000 bytes (since 1 GB = 1,000,000,000 bytes)\n- Number of platters: 5\n- Number of surfaces per platter: 2 (so there are 5 * 2 = 10 surfaces)\n- Number of tracks per surface: 10,000\n- Number of sectors per track: 200\n\n### Step-by-step calculation:\n\n#### 1. Calculate the total number of sectors on the disk:\n\nEach surface has:\n\n10,000 tracks * 200 sectors per track = 2,000,000 sectors per surface\n\nSince there are 10 surfaces:\n\n2,000,000 sectors per surface * 10 surfaces = 20,000,000 sectors\n\n#### 2. Calculate the number of bytes per sector:\n\n8,000,000,000 bytes / 20,000,000 sectors = 400 bytes per sector\n\n### Conclusion:\nEach sector contains 400 bytes. Therefore, the answer is c.",
    "difficultyWeight": 1
  },
  {
    "id": "2022A_FE_AM_14",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2022,
    "questionText": "Which of the following is a memory device that stores programs or data in factories and only has the read operation for the stored programs or data?",
    "options": [
      "DRAM",
      "Flash Memory",
      "Mask ROM",
      "SRAM"
    ],
    "correctIndex": 2,
    "explanation": "Mask ROM is a type of non-volatile memory that is programmed during the manufacturing process (in factories). Once the data or programs are written into Mask ROM, they cannot be altered or erased. The only operation allowed is reading the data. This is typically used for permanent data storage like firmware in devices. Therefore, c is the correct answer.\n\n- DRAM is a type of volatile memory, meaning it requires power to maintain its data. It is used as the main memory in computers and can be both read and written to. DRAM is not pre-programmed and does not store data permanently.\n\n- Flash memory is non-volatile memory, meaning it retains data even when power is removed. It can be read and written to multiple times. It is commonly used in USB drives, SSDs, and memory cards. Flash memory can be rewritten, so it is not limited to the read operation.\n\n- SRAM is another type of volatile memory used in cache memory in computers. It can be read and written to, and it loses data when power is turned off. Like DRAM, it is not factory-programmed.",
    "difficultyWeight": 1
  },
  {
    "id": "2022A_FE_AM_15",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2022,
    "questionText": "An information processing system consists of a database and web server with the specifications shown in the table below:\n\n![Image](Files/Pasted%20image%2020241018163139.png)\n\nWhen the throughput of an entire processing system is determined by the throughput of the server with the lowest throughput, what is the throughput of the entire processing system in TPS (transactions per second)? Here, the throughput of a server is calculated by multiplying the number of transactions in a second with the upper limit of CPU utilization. A database and web server perform the processing independently, and there is one CPU in each server.",
    "options": [
      "160",
      "225",
      "250",
      "385"
    ],
    "correctIndex": 0,
    "explanation": "To calculate the throughput of the database server in transactions per second (TPS), use the following formula:\n\nThroughput (TPS) = 1 / (Processing time per transaction (in seconds)) * CPU utilization\n\nFirst, convert milliseconds to seconds:\n1 ms = 0.001 secs\n\n### Calculate the throughput of the database and the web server:\n\nThroughput (Database) = 1 / (0.005 secs) * 80% = 160 TPS\n\nThroughput (Web Server) = 1 / (0.004 secs) * 90% = 225 TPS\n\n### Conclusion:\nThe throughput of the entire processing system is determined by the server with the lowest throughput, which in this case is the database server with 160 TPS. Therefore, the throughput of the entire processing system is 160 TPS, so the correct answer is: a) 160.",
    "difficultyWeight": 1
  },
  {
    "id": "2022A_FE_AM_16",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2022,
    "questionText": "Which of the following is the approximate availability of the entire system in the figure below? The availability is calculated by rounding off to two decimal places. The numeric value within parentheses is the availability of each device, and the system is available when two or more of the devices connected in parallel are operating in the left part (device 1 to 3) and one or more of the devices connected in parallel is operating in the right part (device 4 to 5).\n![Image](Files/Pasted%20image%2020241018171532.png)",
    "options": [
      "0.65",
      "0.81",
      "0.94",
      "0.99"
    ],
    "correctIndex": 2,
    "explanation": "To solve this problem, we need to calculate the overall system availability based on the given devices and their availability. The system is made up of two parts:\n\n- **Left part (Devices 1, 2, and 3)**: The system is available if **two or more** devices are working.\n- **Right part (Devices 4 and 5)**: The system is available if **one or more** devices are working.\n\n### **Step-by-step process:**\n\n#### **1. Calculate the availability for the left part (Devices 1, 2, and 3):**\nWe first calculate the probability that all three devices fail:\n$P(\text{all fail}) = (1 - 0.9) \times (1 - 0.8) \times (1 - 0.9) = 0.1 \times 0.2 \times 0.1 = 0.002$\n\nNext, we calculate the probability that exactly one device is working (causing the system to fail):\n$P(\text{only Device 1}) = 0.9 \times (1 - 0.8) \times (1 - 0.9) = 0.9 \times 0.2 \times 0.1 = 0.018$\n$P(\text{only Device 2}) = (1 - 0.9) \times 0.8 \times (1 - 0.9) = 0.1 \times 0.8 \times 0.1 = 0.008$\n$P(\text{only Device 3}) = (1 - 0.9) \times (1 - 0.8) \times 0.9 = 0.1 \times 0.2 \times 0.9 = 0.018$\n\nThus, the total probability of failure of two or more devices is:\n$P(\text{left part unavailable}) = 0.002 + 0.018 + 0.008 + 0.018 = 0.046$\nTherefore, the availability of the left part is:\n$P(\text{left part available}) = 1 - 0.046 = 0.954$\n\n#### **2. Calculate the availability for the right part (Devices 4 and 5):**\nFor the right part, the system is available if at least one device is working. The probability that both fail is:\n$P(\text{both fail}) = (1 - 0.9) \times (1 - 0.9) = 0.1 \times 0.1 = 0.01$\nThus, the availability of the right part is:\n$P(\text{right part available}) = 1 - 0.01 = 0.99$\n\n#### **3. Calculate the overall system availability:**\nThe overall system availability is the product of the availabilities of the left and right parts:\n$\text{System availability} = P(\text{left part available}) \times P(\text{right part available}) = 0.954 \times 0.99 = 0.94446$\n\n### **Conclusion:**\nThe system availability is $0.94446$. Since **c** has the closest answer, it is the correct choice.",
    "difficultyWeight": 1
  },
  {
    "id": "2022A_FE_AM_17",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2022,
    "questionText": "On a computer with virtual memory, the number of blocks in real memory is three (3). One of the two (2) algorithms of FIFO and LFU (least frequently used) is used for selecting the page to be removed from real memory. When five (5) pages are referenced in the page-reference sequence shown below as a string, which of the following is an appropriate combination of the number of page fault operations for each algorithm? Here, the three (3) blocks in the real memory are initially empty.\n\n![Image](Files/Pasted%20image%2020241018172126.png)",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correctIndex": 3,
    "explanation": "FIFO (First-In-First-Out)\n- Reference 1: **Page fault** (load 1) - Memory: [1]\n- Reference 3: **Page fault** (load 3) - Memory: [1, 3]\n- Reference 2: **Page fault** (load 2) - Memory: [1, 3, 2]\n- Reference 1: No page fault (1 is already in memory) - Memory: [1, 3, 2]\n- Reference 4: **Page fault** (replace 1 with 4) - Memory: [4, 3, 2]\n- Reference 5: **Page fault** (replace 3 with 5) - Memory: [4, 5, 2]\n- Reference 2: No page fault (2 is already in memory) - Memory: [4, 5, 2]\n- Reference 3: **Page fault** (replace 2 with 3) - Memory: [4, 5, 3]\n- Reference 4: No page fault (4 is already in memory) - Memory: [4, 5, 3]\n- Reference 5: No page fault (5 is already in memory) - Memory: [4, 5, 3]\n\n**Total Page Faults for FIFO**: **6**\n\nLFU (Least Frequently Used)\n- Reference 1: Page fault (load 1) - Memory: [1], Frequency: {1: 1}\n- Reference 3: Page fault (load 3) - Memory: [1, 3], Frequency: {1: 1, 3: 1}\n- Reference 2: Page fault (load 2) - Memory: [1, 3, 2], Frequency: {1: 1, 3: 1, 2: 1}\n- Reference 1: No page fault (1 is already in memory) - Memory: [1, 3, 2], Frequency: {1: 2, 3: 1, 2: 1}\n- Reference 4: Page fault (remove 3, which has the lowest frequency) - Memory: [1, 2, 4], Frequency: {1: 2, 2: 1, 4: 1}\n- Reference 5: Page fault (remove 2, which has the lowest frequency) - Memory: [1, 4, 5], Frequency: {1: 2, 4: 1, 5: 1}\n- Reference 2: Page fault (remove 4, which has the lowest frequency) - Memory: [1, 5, 2], Frequency: {1: 2, 5: 1, 2: 1}\n- Reference 3: Page fault (remove 5, which has the lowest frequency) - Memory: [1, 2, 3], Frequency: {1: 2, 2: 2, 3: 1}\n- Reference 4: Page fault (remove 3, which has the lowest frequency) - Memory: [1, 2, 4], Frequency: {1: 2, 2: 2, 4: 1}\n- Reference 5: Page fault (remove 4, which has the lowest frequency) - Memory: [1, 2, 5], Frequency: {1: 2, 2: 2, 5: 1}\n\n**Total Page Faults for LFU**: **9**\n\nTherefore, the correct answer is **6 and 9**.",
    "difficultyWeight": 1
  },
  {
    "id": "2022A_FE_AM_18",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2022,
    "questionText": "In an OS, task scheduling is performed by the priority order method. The table below shows the priorities for three (3) tasks A to C and the execution sequence and execution time of the CPU and I/O device for the tasks when each task is executed individually. What is the idle time of the CPU in milliseconds from the time when the three (3) tasks are set to the ready state to the time when the execution of all of the tasks is finished? Here, there is one (1) CPU, the CPU consists of one (1) core, there is no I/O contention, and no overhead of the OS is considered. In the table below, the numbers in parentheses indicate the execution time for each operation.\n![Image](Files/Pasted%20image%2020241018191032.png)",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "correctIndex": 1,
    "explanation": "Idle time of the CPU refers to the timeframe where the CPU is not in use. To answer this question, we have to visualize the execution sequence of the Operating System.\n\n![Image](Files/Pasted%20image%2020241018193008.png)\n\nThe CPU has an idle time of 2 + 1 = 3 ms so the answer is **b) 3 ms**.",
    "difficultyWeight": 1
  },
  {
    "id": "2022A_FE_AM_19",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2022,
    "questionText": "Which of the following is the standard API (Application Programming Interface) used by a Java application to access a database?",
    "options": [
      "HTML",
      "Java VM",
      "JDBC",
      "SQL"
    ],
    "correctIndex": 2,
    "explanation": "Java Database Connectivity (JDBC) is the standard API in Java for connecting and executing queries with a database. It provides methods to query and update data in a database. Therefore, the answer is **c) JDBC**.\n\n**a) HTML**: Hypertext Markup Language (HTML) is used for creating and structuring content on the web. It does not provide an interface for database access.\n\n**b) Java VM**: The Java Virtual Machine (JVM) is an environment that allows Java bytecode to be executed. It is not an API for database access.\n\n**d) SQL**: Structured Query Language (SQL) is a language used for managing and manipulating databases. While SQL is often used within JDBC to perform database operations, it is not an API itself.",
    "difficultyWeight": 1
  },
  {
    "id": "2022A_FE_AM_20",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2022,
    "questionText": "A half adder is a logic circuit that performs the addition of two single-bit binary numbers and outputs the sum and carry. The truth table of a half adder is shown in the table below. Which of the following is an appropriate logic diagram of the half adder?\n![Image](Files/Pasted%20image%2020241018200734.png)\n![Image](Files/Pasted%20image%2020241018200748.png)",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correctIndex": 2,
    "explanation": "To design a half adder logic circuit based on the provided truth table, we can summarize the output conditions:\n\n**Sum (S)**: This output is true (1) when exactly one of the inputs (A or B) is true. This can be expressed as the XOR operation:\n$S = A\\oplus B$\n\n**Carry (C)**: This output is true (1) only when both inputs are true. This can be expressed as the AND operation:\n$C = A\\cdot B$\n\nThe logic diagram for a half adder can be constructed using:\n- **XOR Gate** for the Sum (S) output\n- **AND Gate** for the Carry (C) output\n\n### Conclusion:\nThe answer to the question is **c)**.",
    "difficultyWeight": 1
  },
  {
    "id": "2022A_FE_AM_21",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2022,
    "questionText": "By using a sensor that detects changes in shape, the condition of infrastructure such as elevated highways can be monitored and maintained. Which of the following is a sensor that is used for this purpose?",
    "options": [
      "Gyro",
      "Hall Element",
      "Strain Gage",
      "Thermistor"
    ],
    "correctIndex": 2,
    "explanation": "A **strain gage** measures the amount of deformation (strain) in an object when a force is applied. This makes it highly effective for monitoring the structural integrity of infrastructure, as it can detect changes in shape due to stress or strain. Therefore, the answer is **c)**.\n\n**a) Gyro**: A gyroscope measures angular velocity and orientation, which is useful for navigation and stability control but not for detecting changes in shape.\n\n**b) Hall element**: Hall effect sensors detect magnetic fields and are commonly used for position sensing and current measurement but are not designed for monitoring structural changes.\n\n**d) Thermistor**: A thermistor is a temperature-sensitive resistor used to measure temperature changes. While it can monitor thermal conditions, it does not detect changes in shape or deformation.",
    "difficultyWeight": 1
  },
  {
    "id": "2022A_FE_AM_22",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2022,
    "questionText": "Which of the following uses a flip-flop circuit in a memory cell?",
    "options": [
      "DRAM",
      "EEPROM",
      "SDRAM",
      "SRAM"
    ],
    "correctIndex": 3,
    "explanation": "The memory type that uses a flip-flop circuit in its memory cell is: **d) SRAM**\n\n**a) DRAM (Dynamic Random Access Memory)**: DRAM uses capacitors to store bits of data, which must be refreshed periodically to maintain the stored information. It does not use flip-flops.\n\n**b) EEPROM (Electrically Erasable Programmable Read-Only Memory)**: EEPROM uses a different technology for storing data, typically involving floating-gate transistors, but does not utilize flip-flops.\n\n**c) SDRAM (Synchronous Dynamic Random Access Memory)**: SDRAM is a type of DRAM that is synchronized with the system clock but still relies on capacitors for data storage, not flip-flops.",
    "difficultyWeight": 1
  },
  {
    "id": "2022A_FE_AM_23",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2022,
    "questionText": "For a given decimal data, the check digit is calculated with the method below and is appended to the original data. When the given data is 7394, what is the result? Here, the weight is 1234 and the base number is 11. \n- (1) For each digit of the data, calculate the product with the digit at the same radix of the weight and calculate the sum of these products. \n- (2) Calculate the remainder after the division of the sum by the base number. \n- (3) Subtract the remainder from the base number and let the last digit of the result be the check digit.",
    "options": [
      "73940",
      "73941",
      "73944",
      "73947"
    ],
    "correctIndex": 0,
    "explanation": "To find the check digit for the given decimal data 7394 using the specified method, we will follow the steps outlined:\n\n#### **Given:**\n- Data: **7394**\n- Weight: **1234**\n- Base Number: **11**\n\n### **1. Calculate the sum of products**\nFor each digit of the data, we calculate the product with the corresponding weight:\n#### $7~cdot~1 = 7$\n#### $3~cdot~2 = 6$\n#### $9~cdot~3 = 27$\n#### $4~cdot~4 = 16$\n\nSum the products\n#### $7+6+27+16=56$\n### **2. Calculate the remainder**\nNow we calculate the remainder when the sum is divided by the base number (11):\n#### $56~\text{mod}~11 =1$\n### **3. Calculate the check digit**\nNext, we subtract the remainder from the base number and take the last digit of the result:\n#### $11-1=10$\nThe last digit of 10 is 0, which means the check digit is 0.\n\n### **Conclusion:**\nAppending the check digit to the original data gives:\n#### $7394~\text{becomes}~73940$\nTherefore, the answer is **a**).",
    "difficultyWeight": 1
  },
  {
    "id": "2022A_FE_AM_24",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2022,
    "questionText": "Which of the following is the most appropriate explanation of augmented reality (AR)?",
    "options": [
      "By appealing to the five senses through equipment, such as a head-mounted display, a person can experience locations or worlds that do not exist as if they were real.",
      "By constructing a 3D virtual space that is natural to humans and changing the virtual space in accordance with a person’s movement, he or she can feel as if he or she were in that place.",
      "By seamlessly interweaving computer-generated information with the physical world, the viewer can perceive it as an immersive aspect of the real environment.",
      "By viewing a video recorded in the past, the viewer can feel as if he or she were in that era and at that location."
    ],
    "correctIndex": 2,
    "explanation": "**AR** overlays digital content onto the real world, allowing users to interact with both simultaneously. It creates an **immersive experience** by **blending the virtual and physical environments.** Choice **c)** accurately describes **AR** so it is correct.\n\n**a)** Describes a virtual reality (VR) experience more than augmented reality. AR typically overlays digital information onto the real world rather than creating entirely new worlds.\n\n**b)** This description also leans more toward virtual reality. While AR may involve spatial awareness, it doesn't create an entirely separate 3D space; rather, it enhances the existing physical space.\n\n**d)** This statement does not accurately define augmented reality. It describes a viewing experience that is more akin to nostalgia or historical representation rather than the interactive overlay characteristic of AR.",
    "difficultyWeight": 1
  },
  {
    "id": "2022A_FE_AM_25",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2022,
    "questionText": "Which of the following is an appropriate description of the mapping between a relational model and relational database as its implementation?",
    "options": [
      "A domain is mapped to a character type or a character string type.",
      "A relation is mapped to a table.",
      "Attributes and columns are ordered from left to right.",
      "Neither tuples nor rows have duplicates."
    ],
    "correctIndex": 1,
    "explanation": "In relational databases, a **relation** in the relational model is implemented as a **table**. A relation represents a set of tuples, and a table holds rows of data that correspond to those tuples. Therefore, **b)** is correct.\n\n**a)** This is incorrect because a domain in a relational model refers to the set of possible values an attribute can take. It can be mapped to various data types, not just character or string types (it could also be integers, floats, etc.).\n\n**c)** This is incorrect because attributes (columns) in a relation are **unordered**. Their physical placement (left to right) in a table doesn't affect their meaning or the integrity of the relation.\n\n**d)** This is incorrect for rows in a relational database. While in theory, a relation should not have duplicate tuples, many relational databases allow duplicate rows unless constraints like **primary keys** or **unique constraints** are explicitly enforced.",
    "difficultyWeight": 1
  },
  {
    "id": "2022A_FE_AM_26",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2022,
    "questionText": "In a relational database, which of the following is an appropriate purpose for defining a foreign key?",
    "options": [
      "To prevent fragmentation in the record storage area due to the repeated deletion and insertion of records",
      "To provide a constraint to maintain referential consistency between the records of related tables",
      "To restore as many records as possible when they are damaged by failure, based on the mutual relationship between tables",
      "To speed up the searching and updating of related tables by storing them closer together"
    ],
    "correctIndex": 1,
    "explanation": "A foreign key is used to ensure that a relationship between two tables is consistent. It prevents actions that would break the link, such as inserting a record with a foreign key that doesn't exist in the related table or deleting a referenced record. Therefore, the appropriate purpose for defining a foreign key in a relational database is:\n\nb) To provide a constraint to maintain referential consistency between the records of related tables.\n\nExplanation for other options:\n\na) This is incorrect. Preventing fragmentation in the storage area is typically handled by physical database maintenance activities, such as reindexing or database compaction, and is unrelated to the concept of foreign keys.\n\nc) This is incorrect. Restoring records after failure is typically handled by backup and recovery systems, not by foreign key constraints.\n\nd) This is incorrect. While related tables might benefit from optimization techniques (such as indexing), the foreign key constraint itself does not directly speed up searches or updates. Its primary role is to maintain referential integrity, not performance optimization.",
    "difficultyWeight": 1
  },
  {
    "id": "2022A_FE_AM_27",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2022,
    "questionText": "In the process of table implementation, which of the following is an appropriate SQL statement that removes a column in an existing table?\n![Image](Files/Pasted%20image%2020241018205416.png)",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correctIndex": 1,
    "explanation": "The ALTER TABLE command with the DROP COLUMN clause is the standard SQL syntax for removing a column from an existing table. Therefore, the answer is b).\n\nExplanation for other options:\n\na) This is incorrect. SQL does not use the DELETE COLUMN syntax for removing a column.\n\nc) This is incorrect. The UPDATE command is used to modify data in existing rows, not to alter the structure of a table. There is no DELETE COLUMN syntax in SQL.\n\nd) This is incorrect. Similar to option c, the UPDATE command is not used for altering table structure, and DROP COLUMN cannot be used with UPDATE.",
    "difficultyWeight": 1
  },
  {
    "id": "2022A_FE_AM_28",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2022,
    "questionText": "Which of the following is the purpose of setting an index in the columns of the table of a relational database?",
    "options": [
      "To enable efficient access to the storage location of data so that the search speed can be improved",
      "To ensure that no value is duplicated in a column",
      "To match the value of the column of the foreign key with the value of the primary key of another table",
      "To save disk space when a single large table is distributed and saved on several disks"
    ],
    "correctIndex": 0,
    "explanation": "An index is used to improve the performance of data retrieval operations by allowing the database to locate rows more quickly, thus improving the search speed. Since a) accurately describes the purpose of setting an index, it is correct.\n\nExplanation for other options:\n\nb) This is incorrect. While unique constraints or primary keys ensure that no value is duplicated, this is not the purpose of setting an index. An index may be created on unique columns, but it doesn't ensure uniqueness on its own.\n\nc) This is incorrect. Foreign key constraints are used to maintain referential integrity between tables, not indexes. Indexes are primarily focused on speeding up data retrieval.\n\nd) This is incorrect. Indexes typically do not save disk space; they actually consume additional disk space because they store a separate data structure for faster access. Partitioning is the mechanism used to distribute a large table across multiple disks, not indexing.",
    "difficultyWeight": 1
  },
  {
    "id": "2022A_FE_AM_29",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2022,
    "questionText": "In a company, the received-orders are monitored monthly based on the customer file, product file, person-in-charge file, and the current month’s received-orders file. When the items of each file are as shown in the table below, which of the following can be retrieved for the received orders of current month and the three (3) previous months using the four (4) files?\n\n![Image](Files/Pasted%20image%2020241018210603.png)",
    "options": [
      "Customer-wise received orders by product",
      "Customer-wise received orders by the person in charge",
      "Person-in-charge-wise received orders by product",
      "Product-wise received orders by customer"
    ],
    "correctIndex": 1,
    "explanation": "The Customer file links each customer to a specific person-in-charge through the person-in-charge code. The Current month's received orders file provides information on received orders, mapped to the customer through the customer code. By joining these two files, you can retrieve the received orders for the current month and the previous three months, organized by customer and the person-in-charge.\n\nSo, with the data structure presented, you can retrieve the orders for each customer, categorized by the person responsible for them.",
    "difficultyWeight": 1
  },
  {
    "id": "2022A_FE_AM_30",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2022,
    "questionText": "In an IP network consisting of four (4) hosts, two (2) L2 switches, and a router shown below, a packet is transmitted from PC01 to PC03. Which of the following is an appropriate combination of the source and destination addresses of this packet when it leaves Switch1?\n\n![Image](Files/Pasted%20image%2020241018211640.png)\n\n![Image](Files/Pasted%20image%2020241018211703.png)",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correctIndex": 1,
    "explanation": "To determine the appropriate combination of source and destination addresses when a packet is transmitted from PC01 to PC03, we need to analyze the network configuration provided in the diagram.\n\nHere’s the breakdown of the correct address combination when the packet leaves Switch1:\n\n- Source IP: The source IP will remain 192.168.1.31 (PC01's IP address) because the IP addresses do not change as the packet moves between devices.\n- Destination IP: The destination IP will remain 192.168.2.31 (PC03's IP address) because that's where the packet is ultimately heading.\n- Source MAC: The source MAC address will be that of PC01, which is aa:aa:aa:aa:aa.\n- Destination MAC: Since the packet is heading toward the router to reach another subnet, the destination MAC address will be the MAC of the router's Port 01 interface, which is cc:cc:cc:cc:cc.\n\nTherefore, the answer is a) as it has the appropriate combination of the source and destination addresses of the packet when it leaves Switch1.",
    "difficultyWeight": 1
  },
  {
    "id": "2022A_FE_AM_31",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2022,
    "questionText": "Which of the following is a TCP/IP protocol that is used to find the corresponding MAC address from an IP address?",
    "options": [
      "ARP",
      "ICMP",
      "IP",
      "RARP"
    ],
    "correctIndex": 0,
    "explanation": "ARP is used to find the corresponding MAC address for a given IP address in a local network. It operates by sending a request to all devices on the network, asking who owns the specific IP address, and the device with that IP address responds with its MAC address. Therefore, the answer is a).\n\nExplanation for other options:\n\nb) ICMP (Internet Control Message Protocol): Used for sending error messages and operational information, such as with the ping command.\n\nc) IP (Internet Protocol): Responsible for delivering packets from the source host to the destination host based on IP addresses.\n\nd) RARP (Reverse Address Resolution Protocol): Used to find an IP address from a given MAC address, which is the reverse process of ARP. However, it is rarely used now.",
    "difficultyWeight": 1
  },
  {
    "id": "2022A_FE_AM_32",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2022,
    "questionText": "Which of the following is the subnet mask corresponding to an IP address in slash notation, 192.168.22.31/27?",
    "options": [
      "255.255.255.192",
      "255.255.255.224",
      "255.255.255.248",
      "255.255.255.252"
    ],
    "correctIndex": 1,
    "explanation": "The notation /27 indicates that the first 27 bits of the IP address are used for the network portion, and the remaining 5 bits are for the host portion.\n\nA subnet mask represents the network portion with 1's and the host portion with 0's. For a /27 subnet, the subnet mask would be:\n11111111.11111111.11111111.11100000\n\nConverting the binary value 11100000 to decimal gives 224, so the full subnet mask is:\n255.255.255.224\n\nThus, the subnet mask corresponding to 192.168.22.31/27 is 255.255.255.224. Therefore, the answer is b).",
    "difficultyWeight": 1
  },
  {
    "id": "2022A_FE_AM_33",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2022,
    "questionText": "Which of the following protocol supports the congestion control feature?",
    "options": [
      "ARP",
      "ICMP",
      "TCP",
      "UDP"
    ],
    "correctIndex": 2,
    "explanation": "TCP (Transmission Control Protocol) supports congestion control as part of its reliable data transfer mechanism. It adjusts the rate of data transmission based on network conditions to avoid overwhelming the network, using techniques like slow start, congestion avoidance, and fast recovery. Therefore, the answer is c).\n\nExplanation for other options:\n\na) ARP (Address Resolution Protocol): Used to map IP addresses to MAC addresses; does not deal with congestion control.\n\nc) ICMP (Internet Control Message Protocol): Used for sending error messages and operational information, like 'ping,' but doesn't handle congestion control.\n\nd) UDP (User Datagram Protocol): A simpler, connectionless protocol that does not include congestion control mechanisms.",
    "difficultyWeight": 1
  },
  {
    "id": "2022A_FE_AM_34",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2022,
    "questionText": "Which of the following is a global IPv4 address?",
    "options": [
      "10.10.10.10",
      "129.10.9.7",
      "172.16.1.5",
      "192.168.20.3"
    ],
    "correctIndex": 1,
    "explanation": "Global IP addresses are used on the public internet and are unique across the globe, whereas private IP addresses are used within local networks and are not routable on the public internet.\n\n- 10.10.10.10: This belongs to the private IP address range 10.0.0.0 - 10.255.255.255.\n- 172.16.1.5: This is part of the private IP address range 172.16.0.0 - 172.31.255.255.\n- 192.168.20.3: This is part of the private IP address range 192.168.0.0 - 192.168.255.255.\n- 129.10.9.7: This is a public (global) IP address because it does not fall within any of the private IP address ranges.\nTherefore, the answer is b).",
    "difficultyWeight": 1
  },
  {
    "id": "2022A_FE_AM_35",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2022,
    "questionText": "The three properties of information security are confidentiality, integrity, and availability. Which of the following is an attack on integrity?",
    "options": [
      "DDoS",
      "Phishing",
      "Shoulder surfing",
      "Website defacement"
    ],
    "correctIndex": 3,
    "explanation": "Website defacement is an attack on integrity, as it involves unauthorized modification of the content on a website, altering its information or appearance without permission.\n\n- DDoS (Distributed Denial of Service) is an attack on availability, as it aims to overwhelm a system and make it unavailable to users.\n- Phishing is primarily an attack on confidentiality, as it attempts to steal sensitive information like usernames, passwords, or financial details.\n- Shoulder surfing is also an attack on confidentiality, as it involves observing someone's private information without their consent (e.g., by looking over their shoulder).\nSince the question asks which of the choices is an attack on integrity, the answer is d).",
    "difficultyWeight": 1
  },
  {
    "id": "2022A_FE_AM_36",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2022,
    "questionText": "When a system with a database is being developed, a security requirement states that the data must be encrypted with a key before being saved to the database, and the same key is required for decryption when the data is being read. Which of the following is an appropriate algorithm that can be used to satisfy the security requirement?",
    "options": [
      "AES",
      "Diffie-Hellman",
      "RSA",
      "SHA-256"
    ],
    "correctIndex": 0,
    "explanation": "AES (Advanced Encryption Standard) is a symmetric encryption algorithm, meaning the same key is used for both encryption and decryption, which matches the requirement stated (using the same key for both operations).\n\nExplanation for other options:\n\nb) Diffie-Hellman is a key exchange algorithm, used to securely exchange cryptographic keys over a public channel, but it is not used for encrypting and decrypting data directly.\n\nc) RSA is an asymmetric encryption algorithm, which uses a pair of keys (public and private) for encryption and decryption. This does not satisfy the requirement of using the same key for both operations.\n\nd) SHA-256 is a hashing algorithm, used to produce a fixed-length output (hash) from input data. Hashing is a one-way process, and it's not suitable for encrypting and decrypting data.",
    "difficultyWeight": 1
  },
  {
    "id": "2022A_FE_AM_37",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2022,
    "questionText": "Which of the following is a cyber-attack that redirects a victim to a fake website by manipulating DNS to obtain personal information from the victim?",
    "options": [
      "Pharming",
      "Phishing",
      "Spamming",
      "Trojan horse"
    ],
    "correctIndex": 0,
    "explanation": "Pharming is a type of cyber-attack that redirects users to a fake website by altering the DNS (Domain Name System) or exploiting vulnerabilities, even if the correct website address is entered. The goal is to steal personal information, such as login credentials or financial details, by tricking users into believing they are on a legitimate site.\n\nExplanation for other options:\n\nb) Phishing involves tricking victims through deceptive emails or messages into voluntarily clicking a link or entering their information on a fake website.\n\nc) Spamming refers to sending unsolicited messages, usually in bulk, often for advertising purposes.\n\nd) Trojan horse is malicious software disguised as legitimate software, allowing attackers to gain unauthorized access to a victim's system.",
    "difficultyWeight": 1
  },
  {
    "id": "2022A_FE_AM_38",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2022,
    "questionText": "When security risk management processes incorporate the approach of the PDCA (Plan, Do, Check, Act) cycle, which of the following is a process that belongs to Act?",
    "options": [
      "Establish a security policy and develop a security risk management plan.",
      "Implement the security risk management plan.",
      "Maintain and improve the security risk management plan by learning from incidents.",
      "Monitor the security risks as planned in the risk management plan."
    ],
    "correctIndex": 2,
    "explanation": "In the PDCA (Plan, Do, Check, Act) cycle, the stages are defined as follows:\n\n- Plan: Establish objectives, policies, and processes. In this context, it involves establishing a security policy and developing a security risk management plan. (Related to option a)\n\n- Do: Implement what was planned. In this case, it refers to executing the security risk management plan. (Related to option b)\n\n- Check: Monitor and evaluate the results against the plan to ensure that objectives are being met. In this context, it involves monitoring the security risks as planned. (Related to option d)\n\n- Act: Based on the results of the 'Check' phase, take corrective actions to continuously improve. This includes maintaining and improving the plan by learning from incidents and making necessary adjustments. (Related to option c)\n\nThus, the process of maintaining and improving based on feedback belongs to the Act phase.",
    "difficultyWeight": 1
  },
  {
    "id": "2022A_FE_AM_39",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2022,
    "questionText": "Which of the following is the protocol that is used together with HTTP in HTTPS?",
    "options": [
      "SHA",
      "SSH",
      "TLS",
      "VPN"
    ],
    "correctIndex": 2,
    "explanation": "TLS is the protocol that encrypts HTTP traffic to create HTTPS (HTTP Secure). It ensures the security of data transmitted over the internet by providing encryption, authentication, and integrity checks. TLS is a successor to SSL (Secure Sockets Layer) and is widely used in secure communications. Therefore, the answer is c).\n\nExplanation for other options:\n\na) Secure Hash Algorithm (SHA) is a family of cryptographic hash functions used to ensure data integrity. While it plays a role in secure communications, it is not a protocol and does not directly function as the underlying protocol for HTTPS.\n\nb) Secure Shell (SSH) is a protocol used for secure remote login and other secure network services over an unsecured network. Although it provides secure communication, it is not used in conjunction with HTTP to create HTTPS.\n\nd) A Virtual Private Network (VPN) creates a secure connection over a less secure network, such as the internet, but it is not specifically a protocol like TLS. VPNs are used to protect internet traffic from snooping and interference, but they are not directly involved in the encryption of HTTP to form HTTPS.",
    "difficultyWeight": 1
  },
  {
    "id": "2022A_FE_AM_40",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2022,
    "questionText": "Which of the following is an appropriate term associated with the fraudulent action of impersonating an authorized person?",
    "options": [
      "Destruction",
      "Falsification",
      "Spoofing",
      "Tapping"
    ],
    "correctIndex": 2,
    "explanation": "Spoofing is the act of impersonating someone or something to deceive others, often used in the context of technology (e.g., email spoofing, IP spoofing). It specifically refers to impersonating an authorized person or entity, making it the most appropriate term for the given context. Therefore, the answer is c).\n\nExplanation for other options:\n\na) Destruction refers to the act of damaging or destroying something, typically data or property. It does not specifically relate to impersonation.\n\nb) Falsification involves altering or fabricating information or documents to mislead or deceive. While it can involve impersonation, it is a broader term and does not specifically refer to the act of impersonating an authorized person.\n\nd) Tapping generally refers to the interception of communication, such as wiretapping. It is not directly related to impersonation.",
    "difficultyWeight": 1
  },
  {
    "id": "2022A_FE_AM_41",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2022,
    "questionText": "An attacker calls a corporate help desk, masquerading as an employee who has forgotten his password. The help desk staff resets the password to the company default “password1.” The attacker then uses this password to access the company network and information on the server. What is this type of attack called?",
    "options": [
      "Buffer overflow attack",
      "Denial-of-Service attack",
      "Shoulder surfing",
      "Social engineering"
    ],
    "correctIndex": 3,
    "explanation": "**Social engineering** involves manipulating individuals into divulging confidential or personal information that may be used for fraudulent purposes. In this case:\n\n- The attacker pretends to be an employee who has forgotten their password.\n- The help desk staff, without verifying the caller's identity properly, resets the password to a default value.\n- The attacker then uses the reset password to gain unauthorized access to the company network.\n\nThis attack relies on the human element of security rather than exploiting technical vulnerabilities, making it a classic example of social engineering. Therefore, the answer is **d)**.\n\n**a) Buffer overflow attack:** This is a technical exploit where an attacker sends more data to a buffer than it can handle, potentially allowing the attacker to execute arbitrary code.\n\n**b) Denial-of-Service attack:** This attack aims to make a service unavailable to its intended users by overwhelming it with traffic or requests.\n\n**c) Shoulder surfing:** This involves an attacker observing someone as they enter sensitive information, such as a password, typically in a physical setting.",
    "difficultyWeight": 1
  },
  {
    "id": "2022A_FE_AM_42",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2022,
    "questionText": "When a biometric authentication system is introduced, which of the following is the most appropriate point to be taken into account?",
    "options": [
      "Adjusting the device by considering both the probability of incorrectly rejecting an authorized user and that of incorrectly accepting an unauthorized user",
      "Preventing the decrease in the probability of incorrectly rejecting an authorized user by using a product that frequently updates the malware definition file",
      "Requesting an entrusted third party to issue a digital certificate for the person to be authenticated",
      "Setting the appropriate amount of knowledge for authentication to balance the amounts of knowledge that cannot be easily guessed and that can be memorized by a person to be authenticated"
    ],
    "correctIndex": 0,
    "explanation": "In biometric authentication systems, there are two critical performance metrics to consider:\n\n- **False Rejection Rate (FRR):** The probability that an authorized user is incorrectly rejected by the system.\n- **False Acceptance Rate (FAR):** The probability that an unauthorized user is incorrectly accepted by the system.\n\nWhen implementing a biometric system, it's essential to balance these two rates. A system that is too strict may have a high FRR, causing inconvenience to legitimate users, while a system that is too lenient may have a high FAR, compromising security. Therefore, adjusting the system to find an optimal balance between FRR and FAR is crucial for ensuring both security and usability. In conclusion, option **a)** is the right choice.\n\n**b)** While keeping malware definitions updated is important for security, it does not directly relate to the performance metrics of a biometric system.\n\n**c)** Involving a third party for digital certificates is more relevant to digital signature and PKI (Public Key Infrastructure) than to biometric authentication.\n\n**d)** This option relates more to knowledge-based authentication (e.g., passwords) rather than biometrics, where the focus is on physical characteristics.",
    "difficultyWeight": 1
  },
  {
    "id": "2022A_FE_AM_43",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2022,
    "questionText": "Which of the following is the purpose of using a message authentication code?",
    "options": [
      "To check the encryption method of a message",
      "To check the overview of a message",
      "To confirm that there is no falsification of a message",
      "To secure the confidentiality of a message"
    ],
    "correctIndex": 2,
    "explanation": "A **message authentication code** is a short piece of information used to authenticate a message and confirm its integrity and authenticity. When a sender generates a MAC for a message, it involves applying a cryptographic algorithm and a secret key. The MAC ensures that:\n\n- The message has not been altered in transit (integrity).\n- The message is from a legitimate sender who possesses the secret key (authentication).\n\nIf the recipient calculates the MAC on the received message and it matches the MAC sent by the sender, it confirms that the message has not been tampered with and is indeed from the expected sender.\n\n### Brief Overview of Other Options:\n\n- **a)** A MAC does not check the encryption method; it focuses on message integrity and authenticity.\n- **b)** The term 'overview of a message' is vague and not relevant to the function of a MAC.\n- **d)** While a MAC can help protect the integrity of a message, it does not provide confidentiality. Confidentiality is typically ensured through encryption.\n\nIn summary, the correct answer is **c) To confirm that there is no falsification of a message**.",
    "difficultyWeight": 1
  },
  {
    "id": "2022A_FE_AM_44",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2022,
    "questionText": "Which of the following is an explanation of WAF?",
    "options": [
      "It centrally stores and manages operation logs from various systems to quickly detect and analyze an event that can be a security threat.",
      "It is a standard of encryption methods for wireless LAN, certified by the Wi-Fi Alliance, and supports AES encryption.",
      "It is equipped with firewall functions and has antivirus, intrusion detection, and other functions that work together to manage multiple security functions in an integrated manner.",
      "It monitors the accesses to a website, and when it detects a pattern that is likely from an attacker, it blocks those accesses."
    ],
    "correctIndex": 3,
    "explanation": "A **Web Application Firewall (WAF)** is specifically designed to protect web applications by monitoring and filtering HTTP traffic between a web application and the Internet. It analyzes incoming requests to detect and block malicious traffic, including:\n\n- SQL injection\n- Cross-site scripting (XSS)\n- Other types of attacks targeting web applications\n\nBy identifying patterns that match known attack vectors, a WAF can help safeguard web applications from vulnerabilities and threats.\n\n**a)** This description fits a Security Information and Event Management (SIEM) system, which collects and analyzes logs for security threat detection.\n\n**b)** This describes Wi-Fi Protected Access (WPA), a security protocol for wireless LANs.\n\n**c)** This option describes a next-generation firewall (NGFW) or Unified Threat Management (UTM) device, which combines various security functions, but it is not specifically a WAF.\n\nIn summary, the correct answer is **d) It monitors the accesses to a website, and when it detects a pattern that is likely from an attacker, it blocks those accesses.**",
    "difficultyWeight": 1
  },
  {
    "id": "2022A_FE_AM_45",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2022,
    "questionText": "Which of the following is an appropriate description of a UML use case diagram?",
    "options": [
      "It shows the behavior during the object’s life cycle using finite state transitions.",
      "It shows the exchange of messages among objects and objects’ lifelines in a time series.",
      "It shows the flow from one activity to another activity in a system or business process.",
      "It shows the scenarios for how actors, i.e., external users or machines, interact with a system."
    ],
    "correctIndex": 3,
    "explanation": "A UML (Unified Modeling Language) use case diagram is used to represent the functional requirements of a system. It illustrates:\n\n- **Actors:** External entities (users or other systems) that interact with the system.\n- **Use Cases:** Specific functions or scenarios that the system performs in response to the actions of the actors.\n\nThe use case diagram helps in visualizing the relationships between actors and use cases, highlighting what the system does from the user’s perspective.\n\n### Brief Overview of Other Options:\n\n- **a)** This describes a state machine diagram, which models the states and transitions of an object over its life cycle.\n- **b)** This describes a sequence diagram, which illustrates the interactions and message exchanges among objects over time.\n- **c)** This describes an activity diagram, which represents workflows and the flow of control in a system or process.\n\nIn summary, the correct answer is **d) It shows the scenarios for how actors, i.e., external users or machines, interact with a system.**",
    "difficultyWeight": 1
  },
  {
    "id": "2022A_FE_AM_46",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2022,
    "questionText": "In UML 2.0, which of the following is a diagram that represents the interactions between objects in time series?",
    "options": [
      "Activity diagram",
      "Component diagram",
      "Sequence diagram",
      "State transition diagram"
    ],
    "correctIndex": 2,
    "explanation": "A **sequence diagram** is a type of interaction diagram that shows how objects interact in a particular scenario of a use case. It focuses on the order of messages exchanged between objects over time, displaying the sequence of events that occur. The vertical axis represents the different objects (lifelines), while the horizontal axis shows the messages exchanged in a time-ordered fashion.\n\n### Brief Overview of Other Options:\n\n- **a) Activity diagram:** This diagram represents workflows and the flow of control or activities in a system but does not focus specifically on time-ordered interactions.\n- **b) Component diagram:** This diagram shows the organization and dependencies among components in a system, emphasizing the architecture rather than interactions.\n- **d) State transition diagram:** This diagram describes the states of an object and the transitions between those states, focusing on the lifecycle of an object rather than time-based interactions.\n\nIn summary, the correct answer is **c) Sequence diagram.**",
    "difficultyWeight": 1
  },
  {
    "id": "2022A_FE_AM_47",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2022,
    "questionText": "Which of the following is a structural design pattern that allows classes with incompatible interfaces to work together?",
    "options": [
      "Adapter",
      "Factory",
      "Iterator",
      "Singleton"
    ],
    "correctIndex": 0,
    "explanation": "The **Adapter pattern** acts as a bridge between two incompatible interfaces. It allows a class to work with methods or functions that are incompatible by converting the interface of one class into an interface that the client expects. This pattern enables integration of different systems and promotes code reusability.\n\n### Brief Overview of Other Options:\n\n- **b) Factory:** The Factory pattern is a creational design pattern that provides an interface for creating objects without specifying the exact class of the object that will be created.\n- **c) Iterator:** The Iterator pattern is a behavioral design pattern that provides a way to access elements of a collection sequentially without exposing the underlying representation of the collection.\n- **d) Singleton:** The Singleton pattern is a creational design pattern that restricts a class to a single instance and provides a global point of access to that instance.\n\nIn summary, the correct answer is **a) Adapter.**",
    "difficultyWeight": 1
  },
  {
    "id": "2022A_FE_AM_48",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2022,
    "questionText": "Which of the following is the most appropriate description of a stack trace that is used for debugging a program?",
    "options": [
      "A trace of call stack methods/functions/subroutines",
      "Stacking/gathering the traces left by other programs",
      "The traces left in memory from a stack data structure",
      "Tracing stack data structure that is used in the program"
    ],
    "correctIndex": 0,
    "explanation": "A **stack trace** is a report of the active stack frames at a certain point in time during the execution of a program, typically when an exception or error occurs. It provides information about the sequence of method or function calls that led to the current state, allowing developers to trace back through the call stack to identify where an error originated. The stack trace typically includes:\n\n- The names of the methods/functions/subroutines that were called.\n- The order in which they were called.\n- The line numbers in the source code where the calls were made.\n\n### Brief Overview of Other Options:\n\n- **b)** This does not accurately describe a stack trace; it refers to traces from other programs rather than the call stack of the current program.\n- **c)** This description could imply the stack data structure itself but does not relate to the context of debugging.\n- **d)** While it mentions the stack data structure, it does not convey the debugging aspect or the concept of tracking method calls.\n\nIn summary, the correct answer is **a) A trace of call stack methods/functions/subroutines.**",
    "difficultyWeight": 1
  },
  {
    "id": "2022A_FE_AM_49",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2022,
    "questionText": "Among the software development activities, which of the following corresponds to refactoring that is emphasized in agile development?",
    "options": [
      "To improve the maintainability of a program, the internal structure of a program is changed without any change in the external specifications.",
      "To improve the quality of a program, two (2) programmers cooperate and perform the coding of one (1) program.",
      "To obtain feedback from the users, a prototype of the software is created at an early stage.",
      "To promptly develop a program, test cases are set in advance, and then the program is coded."
    ],
    "correctIndex": 0,
    "explanation": "**Refactoring** refers to the process of restructuring existing computer code without changing its external behavior. The goal is to improve the internal structure, readability, and maintainability of the code. In agile development, refactoring is often performed to make the codebase cleaner and easier to work with, enhancing the overall quality of the software without altering what the software does from the user's perspective.\n\n### Brief Overview of Other Options:\n\n- **b)** This describes pair programming, which is a collaborative coding practice rather than refactoring.\n- **c)** This refers to prototyping, a technique for gathering user feedback early in the development process, not specifically related to refactoring.\n- **d)** This describes test-driven development (TDD), where tests are written before the code, which is a separate practice from refactoring.\n\nIn summary, the correct answer is **a) To improve the maintainability of a program, the internal structure of a program is changed without any change in the external specifications.**",
    "difficultyWeight": 1
  },
  {
    "id": "2022A_FE_AM_50",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2022,
    "questionText": "In eXtreme Programming (XP), which of the following is advocated as a practice?",
    "options": [
      "Inspection",
      "Pair programming",
      "Structured design",
      "Use case utilization"
    ],
    "correctIndex": 1,
    "explanation": "**Pair programming** is a core practice in eXtreme Programming (XP) where two programmers work together at one workstation. One programmer, called the 'driver,' writes the code while the other, called the 'observer' or 'navigator,' reviews each line of code as it is written. This practice enhances collaboration, allows for real-time feedback, and helps to improve code quality while also fostering knowledge sharing between team members.\n\n### Brief Overview of Other Options:\n\n- **a) Inspection:** While inspection is a quality assurance practice, it is not specific to eXtreme Programming.\n- **c) Structured design:** This refers to a traditional software design approach, not a specific practice within XP.\n- **d) Use case utilization:** While use cases can be utilized in XP, they are not a primary practice of the methodology.\n\nIn summary, the correct answer is **b) Pair programming.**",
    "difficultyWeight": 1
  },
  {
    "id": "2022A_FE_AM_51",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2022,
    "questionText": "A project consisting of several activities has a single critical path. Which of the following is an appropriate description of critical path activities for the project?",
    "options": [
      "Critical path activities can be performed in parallel.",
      "Critical path activities have a non-zero total float time.",
      "For each critical path activity, the early start date equals the late start date.",
      "The activity with the longest duration in the project is one of the critical path activities."
    ],
    "correctIndex": 2,
    "explanation": "In project management, critical path activities are those that directly impact the overall project duration. The key characteristics of critical path activities include:\n\n- They have zero total float (or slack), meaning any delay in these activities will directly delay the project.\n- The early start date (the earliest time an activity can start) is equal to the late start date (the latest time an activity can start without delaying the project).\n\n### Brief Overview of Other Options:\n\n- **a)** Critical path activities cannot be performed in parallel if they are sequential; they must be completed in a specific order to maintain the critical path.\n- **b)** Critical path activities have zero total float, not non-zero. Non-zero total float indicates that there is flexibility in the schedule, which does not apply to critical path activities.\n- **d)** While an activity with the longest duration may be part of the critical path, it is not necessarily true that it will always be a critical path activity. The critical path is determined by the sequence of dependent activities that dictate the project's total duration, not just the longest activity.\n\nIn summary, the correct answer is **c) For each critical path activity, the early start date equals the late start date.**",
    "difficultyWeight": 1
  },
  {
    "id": "2022A_FE_AM_52",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2022,
    "questionText": "Which of the following is an appropriate description of the Responsibility Assignment Matrix that is used for project human resource management?",
    "options": [
      "Allocating work packages to those who are responsible for project work",
      "Defining the limits of the project sponsor’s responsibilities",
      "Defining the terms of reference of the project",
      "Monitoring the current engagement level of stakeholders"
    ],
    "correctIndex": 0,
    "explanation": "The **Responsibility Assignment Matrix (RAM)** is a tool used in project management to map the relationship between project activities (or work packages) and the individuals or roles responsible for completing them. It clarifies who is responsible, accountable, consulted, and informed (often summarized as RACI) for each task or deliverable within a project. This helps ensure clear ownership of tasks and facilitates communication among team members.\n\n### Brief Overview of Other Options:\n\n- **b)** While defining responsibilities is part of RAM, specifying the limits of a project sponsor’s responsibilities is not its primary function.\n- **c)** Defining the terms of reference of the project is related to project initiation and governance but is not the focus of a RAM.\n- **d)** Monitoring the current engagement level of stakeholders is related to stakeholder management but does not describe the function of a RAM.\n\nIn summary, the correct answer is **a) Allocating work packages to those who are responsible for project work.**",
    "difficultyWeight": 1
  },
  {
    "id": "2022A_FE_AM_53",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2022,
    "questionText": "Which of the following is an appropriate purpose for using a WBS (work breakdown structure) in a software development project?",
    "options": [
      "To clarify the time sequence of activities and understand the critical path that should be intensively managed",
      "To decompose a development task into smaller sub-tasks with a manageable size and organize them into a hierarchical structure",
      "To optimize the total cost when there is a trade-off relationship between the number of days and the costs required for development",
      "To show the schedule of activities by using bars and clarify the start dates and end dates of the activities as well as the progress at the current point"
    ],
    "correctIndex": 1,
    "explanation": "The **Work Breakdown Structure (WBS)** is a key project management tool that breaks down a project into smaller, more manageable components or tasks. This hierarchical decomposition allows for better planning, monitoring, and control of the project. It helps in organizing the work, defining the scope, and establishing a clear structure for assigning responsibilities.\n\n### Brief Overview of Other Options:\n\n- **a)** This describes scheduling and critical path analysis, which are more relevant to the project schedule management rather than the purpose of a WBS.\n- **c)** While cost optimization is important in project management, it is not the primary purpose of a WBS, which focuses on task decomposition.\n- **d)** This describes a Gantt chart, which is used for scheduling activities, showing start and end dates, rather than the hierarchical breakdown of tasks.\n\nIn summary, the correct answer is **b) To decompose a development task into smaller sub-tasks with a manageable size and organize them into a hierarchical structure.**",
    "difficultyWeight": 1
  },
  {
    "id": "2022A_FE_AM_54",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2022,
    "questionText": "Which of the following is an appropriate description for group decision-making techniques used in the estimation process of an activity duration?",
    "options": [
      "The estimates created using these techniques may include contingency reserves, sometimes referred to as time reserves or buffers, in the project schedule to account for schedule uncertainty.",
      "These are team-based approaches, such as brainstorming, the Delphi, or nominal group techniques, which are useful for engaged team members to improve their estimation accuracy and commit to the estimates.",
      "These techniques use statistical relationships between historical data and project parameters to calculate an estimate for project cost, budget, or duration.",
      "Using these techniques, a group of experts, guided by historical information, can provide duration estimate information or recommended maximum activity durations from prior similar projects."
    ],
    "correctIndex": 1,
    "explanation": "Group decision-making techniques in estimation, such as **brainstorming, the Delphi method, and nominal group technique**, are designed to gather input from multiple team members to improve the accuracy of estimates. These collaborative approaches allow team members to share insights, consider diverse perspectives, and reach a consensus on duration estimates, leading to more reliable project planning.\n\n### Brief Overview of Other Options:\n\n- **a)** While contingency reserves may be included in project schedules, this statement does not specifically describe group decision-making techniques.\n- **c)** This describes quantitative estimation methods (like parametric estimating), which are not focused on group decision-making.\n- **d)** This refers to expert judgment and historical data analysis, which may not necessarily involve group decision-making techniques.\n\nIn summary, the correct answer is **b) These are team-based approaches, such as brainstorming, the Delphi, or nominal group techniques, which are useful for engaged team members to improve their estimation accuracy and commit to the estimates.**",
    "difficultyWeight": 1
  },
  {
    "id": "2022A_FE_AM_55",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2022,
    "questionText": "Which of the following is an appropriate meaning of a mission-critical system?",
    "options": [
      "As with an operating system, it is an indispensable system necessary for operating a business system.",
      "It is a system that has a significant impact on corporate activities and society when a failure occurs.",
      "It is a system that is first installed on a trial basis, and if successful, a full-scale installation is implemented.",
      "It is a system where the operating performance is close to the limit."
    ],
    "correctIndex": 1,
    "explanation": "A **mission-critical system** is vital to an organization's operations. If such a system fails, it can lead to severe consequences, including financial loss, damage to reputation, or disruption of essential services. These systems are essential for the ongoing operation and success of the organization and often require high availability and reliability.\n\n### Brief Overview of Other Options:\n\n- **a)** This describes an operating system's role but does not specifically define a mission-critical system.\n- **c)** This refers to a trial installation approach and does not pertain to the definition of mission-critical systems.\n- **d)** While performance limits may be a consideration, it does not capture the essence of what makes a system mission-critical.\n\nIn summary, the correct answer is **b) It is a system that has a significant impact on corporate activities and society when a failure occurs.**",
    "difficultyWeight": 1
  },
  {
    "id": "2022A_FE_AM_56",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2022,
    "questionText": "Which of the following is an appropriate description of the relationship between a record of an incident and a record of a problem in IT service management?",
    "options": [
      "A cross-reference to the incident that triggered the record of the problem is included in the record of the problem.",
      "If known errors have been identified at the time of ending the record of the problem, the record of the incident that triggered the record of the problem is deleted.",
      "One (1) problem record is always associated with one (1) incident record.",
      "Problems are classified and recorded by a different criterion from the classification of incidents."
    ],
    "correctIndex": 0,
    "explanation": "In IT service management, an **incident** is an unplanned interruption or reduction in the quality of an IT service, while a **problem** is the underlying cause of one or more incidents. When a problem record is created, it typically includes a cross-reference to the incident(s) that triggered it, helping to track the relationship between the incidents and the problem being investigated.\n\n### Brief Overview of Other Options:\n\n- **b)** The record of the incident is not deleted when a problem record is created; instead, the incident remains in the records for reference and tracking purposes.\n- **c)** A problem record can be associated with multiple incident records, especially if the same issue affects multiple users or services.\n- **d)** While problems and incidents may be classified differently, they are often related, and their classification criteria are not necessarily distinct.\n\nIn summary, the correct answer is **a) A cross-reference to the incident that triggered the record of the problem is included in the record of the problem.**",
    "difficultyWeight": 1
  },
  {
    "id": "2022A_FE_AM_57",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2022,
    "questionText": "A system is planned to be operational 22 hours per day. However, there are two (2) failures with downtimes of 0.5 hours and 1.5 hours in 100 days. Which of the following is the approximate MTBF of this system during the period in hours?",
    "options": [
      "0.00091",
      "1.0",
      "2.0",
      "1100"
    ],
    "correctIndex": 3,
    "explanation": "## **Explanation:**\n\nTo calculate the Mean Time Between Failures (MTBF) for the system, we can use the formula:\n#### $\text{MTBF}=\frac{\text{Total Opeational Time}}{\text{Number of Failures}}$\n### Given Data:\n\n- Operational hours per day: 22 hours\n- Number of days: 100 days\n- Number of failures: 2\n- Downtime for failures: 0.5 hours and 1.5 hours (though downtime is not needed for MTBF calculation)\n### Steps:\n\n1. **Calculate the total operational time:**\n\t#### $\text{Total Operational Time} = \text{Operational Hours per day}~\times~\text{Number of Days}=\frac{22~hours}{1~cancel{day}}~\times~100~cancel{days}=2200~hours$\n2. **Calculate MTBF:**\n\n\t#### $\text{MTBF}=\frac{\text{Total Opeational Time}}{\text{Number of Failures}} = \frac{2200~\text{hours}}{2}=1100~hours$\n\n### **Conclusion:**\n\nThe approximate MTBF of this system during the period is **d) 1100**.",
    "difficultyWeight": 1
  },
  {
    "id": "2022A_FE_AM_58",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2022,
    "questionText": "When a business continuity plan (BCP) is developed given the possibility of a system failure, which of the following is the item that is implemented as part of business impact analysis?",
    "options": [
      "Collectively educating the concerned persons about the alternate procedures and recovery procedures during an information system failure",
      "Determining the maximum allowable downtime for the information system",
      "Executing a test to verify the effectiveness of BCP",
      "Revising the contents of the BCP given changes in the internal and external environment of the information system"
    ],
    "correctIndex": 1,
    "explanation": "**Business Impact Analysis (BIA)** is a crucial part of the business continuity planning process, focusing on identifying critical business functions and the impact that disruptions can have on those functions. One of the key aspects of BIA is determining the **Maximum Allowable Downtime (MAD)**, which defines how long a system can be down before significantly impacting the organization.\n\n### Brief Overview of Other Options:\n\n- **a)** While educating concerned persons about procedures is important, it is more about training and awareness rather than BIA itself.\n- **c)** Executing tests to verify BCP effectiveness is part of the testing and maintenance phase of BCP, not BIA.\n- **d)** Revising the BCP based on changes is part of the ongoing maintenance and review process but not specifically a part of BIA.\n\nIn summary, the correct answer is **b) Determining the maximum allowable downtime for the information system.**",
    "difficultyWeight": 1
  },
  {
    "id": "2022A_FE_AM_59",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2022,
    "questionText": "Which of the following is the most appropriate purpose for which a system auditor exchanges opinions with an audited department concerning the draft version of an audit report?",
    "options": [
      "To confirm that there are no factual errors in the findings and recommendations to be described in the audit report",
      "To issue the audit report to the audited department before the audit report is submitted to the person who is requesting the audit",
      "To receive the approval of the responsible person of the audited department concerning the recommendations described in the audit report",
      "To substitute with additional auditing activities concerning the part of the audit report for which evidence is insufficient by orally confirming with the audited department"
    ],
    "correctIndex": 0,
    "explanation": "During the audit process, it is essential to ensure the accuracy of the findings and recommendations. By exchanging opinions with the audited department on the draft report, the auditor can verify that the information presented is correct and that there are no misunderstandings or misinterpretations. This step helps to maintain the integrity of the audit process and ensures that the final report reflects an accurate assessment of the department's operations.\n\n### Brief Overview of Other Options:\n\n- **b)** While sharing the draft may happen, the main purpose is not to issue it prior to submission but to ensure accuracy and clarity.\n- **c)** While obtaining approval may be a goal, it is not the primary purpose of discussing the draft; auditors typically seek feedback rather than formal approval.\n- **d)** Substituting additional auditing activities is not appropriate; auditors should gather sufficient evidence before concluding, rather than relying on oral confirmation for parts of the report.\n\nIn summary, the correct answer is **a) To confirm that there are no factual errors in the findings and recommendations to be described in the audit report.**",
    "difficultyWeight": 1
  },
  {
    "id": "2022A_FE_AM_60",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2022,
    "questionText": "Which of the following is the appropriate activity performed by a system auditor who audits access control?",
    "options": [
      "Creating and storing the access control records for the software",
      "Establishing an access control policy for the network",
      "Implementing the access control procedures for hardware",
      "Viewing the access control rules for data"
    ],
    "correctIndex": 3,
    "explanation": "In the context of auditing access control, the system auditor's role involves examining and evaluating the effectiveness of the existing access control measures. This includes reviewing the access control rules that dictate how data can be accessed, by whom, and under what conditions. By viewing these rules, the auditor can assess whether they align with security policies and effectively protect sensitive data from unauthorized access.\n\n### Brief Overview of Other Options:\n\n- **a)** Creating and storing access control records is more of an operational task that falls under the responsibilities of system administrators or IT personnel rather than auditors.\n- **b)** Establishing an access control policy is a governance activity typically performed by management or security personnel, not an auditor.\n- **c)** Implementing access control procedures is also an operational task, focused on executing policies rather than auditing them.\n\nIn summary, the correct answer is **d) Viewing the access control rules for data.**",
    "difficultyWeight": 1
  },
  {
    "id": "2023A_FE_AM_1",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2023,
    "questionText": "In a school class, 13 students play basketball and 19 play football. Among them, 8 students play both. Further, 7 students play neither. How many students are there in the class?",
    "options": [
      "17",
      "31",
      "33",
      "47"
    ],
    "correctIndex": 1,
    "explanation": "### Step 1: Create Venn Diagram with Student Numbers\n\nWe can create a Venn Diagram of all the sports and we firstly add the students in the union `Basketball ∪ Football` then we add the students exclusive to their own sports and subtract the union students from them.\n\n![Image](Files/2023-1.png)\n\n### Step 2: We Add the Students Together\n\n$5 + 8 + 11 + 7 = 31$\n\nSo our final answer is 31.",
    "difficultyWeight": 1
  },
  {
    "id": "2023A_FE_AM_2",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2023,
    "questionText": "$n$ is a binary integer represented in two’s complement. Which of the following operations get the value $7 \\times n$ using only bit shifting and an addition or subtraction operation?",
    "options": [
      "Shift n 2 bits to the left, then add n to the result.",
      "Shift n 2 bits to the left, then subtract n from the result.",
      "Shift n 3 bits to the left, then add n to the result.",
      "Shift n 3 bits to the left, then subtract n from the result"
    ],
    "correctIndex": 3,
    "explanation": "### Short Intro on Bitwise Operators\n\n> **Bitwise Operators**\n> - `<<` Signed Left Shift `x << n` does $x \times 2^{n}$\n> - `>>` Signed Right Shift `x >> n` does $x div 2^{n}$\n\nFor example, `6 << 1 == 12` is visualized like this:\n\n```\n6\n00000110\n \n12\n00001100\n```\n\n### We Check Each Answer By Simulating Their Shifts\n\nRemember, our goal is to get $7 \times n$.\n\nLet's try option d:\n\nIt translates to `n << 3 - 1` which is equal to $x \times 2^3 - 1 equiv x \times 7$ which is our goal, hence d is the answer.",
    "difficultyWeight": 1
  },
  {
    "id": "2023A_FE_AM_3",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2023,
    "questionText": "A parking lot has 10 parking spaces in a row, and 7 cars are parked at random parking spaces. What is the probability that the three empty places are adjacent to each other?",
    "options": [
      "1/90",
      "1/72",
      "1/15",
      "1/12"
    ],
    "correctIndex": 2,
    "explanation": "### Step 1: We Calculate the Total Number of Ways to Arrange 3 Empty Parking Spaces\n\nWe do $\binom{10}{3}$ or $10C3$. This calculates to 120 total ways.\n\n### Step 2: Count the Favorable Combinations\n\nWe can illustrate the parking spaces and count how many ways we can arrange the 3 empty parking spaces to be adjacent:\n\n![Image](Files/2023-3.png)\n\nThere are 8 favorable combinations.\n\n### Step 3: Calculate the Probability\n\nThe probability is $\frac{8}{120}$, which simplifies to $\frac{1}{15}$. The correct answer is c.",
    "difficultyWeight": 1
  },
  {
    "id": "2023A_FE_AM_4",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2023,
    "questionText": "What is the sum of two binary fractions 1.0101 and 1.0111 expressed in decimal form?",
    "options": [
      "2.5",
      "2.75",
      "2.875",
      "2.9375"
    ],
    "correctIndex": 1,
    "explanation": "### We Simply Add Them & Carry the Bits If Necessary\n\n![Image](Files/2023-4.png)\n\nHence, the answer is b.",
    "difficultyWeight": 1
  },
  {
    "id": "2023A_FE_AM_5",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2023,
    "questionText": "Which of the following expressions in postfix notation is equivalent to the expression 2+5×3+4 in infix notation? Here, the operator “×” has higher precedence than “+”.",
    "options": [
      "2 5 3 4 x + +",
      "2 5 + 3 4 x +",
      "2 5 3 + x 4 +",
      "2 5 3 x + 4 +"
    ],
    "correctIndex": 3,
    "explanation": "### Infix vs Prefix vs Postfix\n\nThe equations we're familiar with are infix operations because we put the operator 'in between' the operands.\n\nWe want to convert `2 + 5 × 3 + 4` from infix to postfix.\n\n- This is equivalent to `2 + (5 × 3) + 4`.\n- This means the operators should be AFTER their operands.\n- We still give `×` (multiplication) precedence over `+`.\n\nThe only valid expression that puts `5 3 x` together before addition is:\n\nd) `2 5 3 x + 4 +`\n\nThus, d is the correct answer.",
    "difficultyWeight": 1
  },
  {
    "id": "2023A_FE_AM_6",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2023,
    "questionText": "There is communication data that consists of five characters “A”, “B”, “C”, “D”, and “E” that have different appearance frequencies, and in order to compress the data by using Huffman coding, the code table shown below is created. Which of the following is an appropriate code that should be inserted in the blank?\n![Image](Files/Pasted%20image%2020241017231221.png)",
    "options": [
      "001",
      "010",
      "101",
      "110"
    ],
    "correctIndex": 3,
    "explanation": "![Image](Files/Pasted%20image%2020241017231221.png)\n\n### Video Tutorial on Huffman Coding\n\nIt's a strategy of compressing data for JPEG and MPEG files. There's a process to it so watching this tutorial: [Text Compression with Huffman Coding - YouTube](https://www.youtube.com/watch?v=iiGZ947Tcck) is more helpful than me discussing it\n![Image](Files/2023-6.png)",
    "difficultyWeight": 1
  },
  {
    "id": "2023A_FE_AM_7",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2023,
    "questionText": "When the series of stack operations below is performed on an empty stack, which of the following is the data that is read out by the last READ operation? Here, “PUSH x” is the operation to put data x in the stack, “POP” is used to retrieve data from the stack, and “READ” is used to read data from the top of the stack without removing the original data.\n\nPUSH 2 → READ → PUSH 3 → PUSH 6 → POP → READ → PUSH 4 →READ → PUSH 7 → PUSH 5→ POP → POP → READ",
    "options": [
      "2",
      "3",
      "4",
      "6"
    ],
    "correctIndex": 2,
    "explanation": "### Let's Solve This Step By Step\n\nLet's say our stack grows from left to right, where right is the top-most element.\n\nSo our empty stack is `x = {}`.\n\n1. PUSH 2 `{ 2 }`\n2. READ `{ 2 }` outputs 2\n3. PUSH 3 `{ 2, 3 }`\n4. PUSH 6 `{ 2, 3, 6 }`\n5. POP `{ 2, 3 }`\n6. READ `{ 2, 3 }` outputs 3\n7. PUSH 4 `{ 2, 3, 4 }`\n8. READ `{ 2, 3, 4 }` outputs 4\n9. PUSH 7 `{ 2, 3, 4, 7 }`\n10. PUSH 5 `{ 2, 3, 4, 7, 5 }`\n11. POP `{ 2, 3, 4, 7 }`\n12. POP `{ 2, 3, 4 }`\n13. READ `{ 2, 3, 4 }` outputs 4",
    "difficultyWeight": 1
  },
  {
    "id": "2023A_FE_AM_8",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2023,
    "questionText": "![Image](Files/Pasted%20image%2020241018221346.png)",
    "options": [
      "Left child of 16",
      "Left child of 23",
      "Right child of 3",
      "Right child of 10"
    ],
    "correctIndex": 3,
    "explanation": "### Understanding a Binary Search Tree\n\nRules:\n\n- A parent can only have 2 child nodes.\n- For every parent node, all the children to its left are lesser than the parent's value.\n- Meanwhile, all the children to the parents' right are greater than than the parent's value.\n![Image](Files/Pasted%20image%2020241018221346.png)",
    "difficultyWeight": 1
  },
  {
    "id": "2023A_FE_AM_9",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2023,
    "questionText": "In the table below, there are five items A through E. Each item cannot be divided into smaller pieces. When a knapsack with a maximum volume of 7 units is used for carrying the items, which of the following is a set of items to be packed in the knapsack so that the total price can be maximized?\n\n| Item | Volume | Price |\n| ---- | ------ | ----- |\n| A    | 3      | 4     |\n| B    | 2      | 3     |\n| C    | 3      | 5     |\n| D    | 1      | 2     |\n| E    | 5      | 9     |",
    "options": [
      "A, B, D",
      "A, C, D",
      "B, E",
      "D, E"
    ],
    "correctIndex": 2,
    "explanation": "### Step 1: Find the Price Sum of All The Choices\n\na) A, B, D = 4 + 3 + 2 = 9\nb) A,C,D = 4 + 5 + 2 = 11\nc) B,E = 3 + 9 = 12\nd) D,E = 2 + 9 = 11\n\n### Step 2: Pick the Choice with the Least Items & Highest Sum\n\nAs we can see from our calculations, c) has the highest price (12) while also fulfilling the constraints.\n\nHence, c) is our answer.",
    "difficultyWeight": 1
  },
  {
    "id": "2023A_FE_AM_10",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2023,
    "questionText": "Which of the following is an appropriate description concerning XML?",
    "options": [
      "It is based on HTML and expands its functions.",
      "It requires a dedicated editor for writing XML documents.",
      "It integrates the logical structure and display style of documents.",
      "It enables users to define the attribute information and logical structure of documents by using the user’s own tags."
    ],
    "correctIndex": 3,
    "explanation": "a) It is based on HTML and expands its functions.\n- no, it doesn't necessarily have to expand HTML, it can be like a\n\nconfig file like `beans.xml` for Java.\n\nb) It requires a dedicated editor for writing XML documents.\n\n\n\n- no, you can edit it with any text editor. It's just a plaintext file after all.c) It integrates the logical structure and display style of documents.\n\n- no, XML only cares about the logical structure of its tags, not the display style of documents.\n\n- only HTML can inline CSS to talk about display style of documents.\n\nd) It enables users to define the attribute information and logical structure of documents by using the user’s own tags.\n\n- yes, we, as the user, can define attribute & logical structure (tags)\n\n- this is the correct choice",
    "difficultyWeight": 1
  },
  {
    "id": "2023A_FE_AM_11",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2023,
    "questionText": "In a CPU, which of the following is a special register that contains the address of the next instruction to be fetched?",
    "options": [
      "Accumulator",
      "Index Register",
      "Instruction Register",
      "Program Counter"
    ],
    "correctIndex": 3,
    "explanation": "You might've thought it was Instruction Register, however that register holds the CURRENTLY EXECUTING instruction that is about to be decoded & executed by the ALU.\n\n## Description of the Components\n\n- **Accumulator**: This register holds the intermediate result of arithmetic or logical operations. Like if the calculation depends on the sum of a previous expression, we store the sum in the accumulator first before using it in the next expression.\n\n- **Index Register**: This register holds an offset value for memory addresses for accessing struct data types and arrays.\n\n- **Instruction Register**: This register holds the CURRENT instruction that has just been fetched from memory and is about to be decoded and executed.\n\n- **Program Counter (PC)**: The PC always points to the address of the next instruction in the program. After fetching an instruction, the PC is incremented so that it points to the subsequent instruction, ensuring the CPU executes the program sequentially. In case of jumps or branches, the PC is updated with the target address.",
    "difficultyWeight": 1
  },
  {
    "id": "2023A_FE_AM_12",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2023,
    "questionText": "Which of the following is an appropriate CPU operation associated with cache memory?",
    "options": [
      "When a cache hit occurs, the CPU fetches data from ROM.",
      "When a cache hit occurs, the CPU fetches data from the main memory.",
      "When a cache miss occurs, the CPU fetches data from the cache memory.",
      "When a cache miss occurs, the CPU fetches data from the main memory."
    ],
    "correctIndex": 3,
    "explanation": "## Understanding the Cache (Hit & Miss)\n\nThe cache is used to store data that is frequently used. So if we frequently use an `add()` function, we store it in lower levels of cache so that it is closer to the CPU and faster to read. Reading an instruction or memory address that is in a cache is called a 'Cache Hit'.\n\n![Image](Files/Pasted%20image%2020241019120834.png)\n\nA 'Cache Miss' happens when we do not find it in the next higher level of cache, we look upwards to the next higher level and see if its there. Eventually, going back to the main memory, where our program code resides in. \n\nIn this question, we are currently working in the CPU level with CPU registers (level 0), so if we have a cache miss, this means we did not find something in the Cache Memory (level 1), so we jump another level to Main Memory (level 2).\n\n\nThe other answers do not follow the proper hierarchy and immediately jump multiple levels.",
    "difficultyWeight": 1
  },
  {
    "id": "2023A_FE_AM_13",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2023,
    "questionText": "Which of the following is a computer architecture in which a processor executes the same instruction on multiple data?",
    "options": [
      "MIMD",
      "MISD",
      "SIMD",
      "SISD"
    ],
    "correctIndex": 2,
    "explanation": "### **1. SIMD (Single Instruction, Multiple Data)**:\n\n- **Definition**: SIMD is a parallel computing architecture where **one instruction** is applied to **multiple data** elements at the same time.\n\n- **Example**: Useful for tasks like vector processing or graphics processing, where the same operation (e.g., adding two arrays) needs to be applied to many data points in parallel.\n\n- **Use Case**: Often used in **multimedia applications**, like image processing or video games, where similar operations are performed on large datasets.\n\n### **2. MIMD (Multiple Instruction, Multiple Data)**:\n\n- **Definition**: MIMD is a parallel architecture where **multiple instructions** operate on **multiple data** streams simultaneously. Each processor works independently, executing its own instruction on its own data.\n\n- **Example**: Used in systems with multiple processors or cores, such as multi-core CPUs, where each core can run a different program or task.\n\n- **Use Case**: MIMD is used in **general-purpose multi-core processors** and supercomputers, where different tasks need to run concurrently.\n\n### **3. MISD (Multiple Instruction, Single Data)**:\n\n- **Definition**: MISD is a rare and theoretical architecture where **multiple instructions** operate on **one piece of data**. This means multiple processors work on the same data with different instructions.\n\n- **Example**: It's not widely implemented in practice, but some fault-tolerant systems may use it for error checking by running different algorithms on the same data.\n\n- **Use Case**: Limited real-world use; mostly found in very specialized or research-based systems.\n\n### **4. SISD (Single Instruction, Single Data)**:\n\n- **Definition**: SISD is a traditional, non-parallel computing architecture where **one instruction** is executed on **one piece of data** at a time.\n\n- **Example**: Most **conventional single-core processors** operate in an SISD fashion.\n\n- **Use Case**: Found in simple, sequential processing where parallelism is not required.",
    "difficultyWeight": 1
  },
  {
    "id": "2023A_FE_AM_14",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2023,
    "questionText": "ECC is used for error detection and correction in memory. When n+2 redundant bits are required for a data bus having a width of $2^n$ bits, what is the number of redundant bits that are required for a data bus having a width of 128 bits?",
    "options": [
      "3",
      "8",
      "9",
      "10"
    ],
    "correctIndex": 2,
    "explanation": "## What is ECC?\n\nIt is an acronym for 'Error Code Correction' and it's used to pinpoint error codes by using multiple parity bits laid out the block of bits.\n\n![Imagee](Files/Pasted%20image%2020241019124146.png)\n\nGiven:\n- We need n+2 redundant bits for our data bus\n- Our data bus size formula is $2^n$\n- Our desired data bus size is 128 bits\n\nAsked:\n- How many redundant bits should we allocate for our Data Bus of 128 bits?\n\nSolution:\n1. First, we find n, so we do $2^n = 128$.\n- what power of $2$ allows us to get 128? Yes, it's 7, so $n = 7$.\n2. We can now substitute $n+2$ so that $7 + 2 = 9$, meaning we need $9$ redundant bits for our data bus of size $2^n$.\n3. Our answer is **c) 9**.",
    "difficultyWeight": 1
  },
  {
    "id": "2023A_FE_AM_15",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2023,
    "questionText": "Which of the following is the most appropriate explanation of grid computing?",
    "options": [
      "A computing task is distributed to several computers in the network to attain computational capacity.",
      "Physical devices such as computers or network devices are emulated to circumvent compatibility constraints and attain software portability and flexibility.",
      "Requirements are stated as constraints on response time and/or on the temporal validity of sensory data.",
      "Sensing devices are connected to a network to provide feedback and control through personal mobile devices."
    ],
    "correctIndex": 0,
    "explanation": "When you think of a grid, you think of multiple nodes that connect to one another to create a network.\n\nIn our choices, only 1 word is synonymous or related to 'multiple nodes', which is in *a) 'A computing task is distributed to several computers'*\n\nTherefore, our answer is a).\n\n> [!quote] Grid computing is defined as a distributed architecture of multiple computers connected by networks that work together to accomplish a joint task.\n\n![Image](Files/Pasted%20image%2020241019125026.png)",
    "difficultyWeight": 1
  },
  {
    "id": "2023A_FE_AM_16",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2023,
    "questionText": "Which of the following is an RAID configuration that deploys two parity records to different disk drives enabling two simultaneous disk drive failures in the same RAID group to be recovered?",
    "options": [
      "RAID0",
      "RAID1",
      "RAID5",
      "RAID6"
    ],
    "correctIndex": 3,
    "explanation": "## What is RAID?\n\n> [!info] Redundant Array of Independent Disks\n\n> Lets us use multiple hard disks as redundant disks in case one breaks, the other two still has a copy of the data.\n\n### Raid Levels\n\n> [!tip] The higher the RAID level, the more redundant the storage is & the more resilient it is to failure. It's better for data integrity, but it's slower to save data across all disks.\n\n![Image](Files/Pasted%20image%2020241019125441.png)\n\nThe question requires us to have **TWO disk failures**, so our only possible answer is RAID6 according to the table above.",
    "difficultyWeight": 1
  },
  {
    "id": "2023A_FE_AM_17",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2023,
    "questionText": "Which of the following occurs when a program attempts to access a page that is mapped in the virtual address space but is not located in the main memory? Here, the OS supports paging.",
    "options": [
      "Fatal error",
      "Page fault",
      "Scheduling error",
      "Segmentation fault"
    ],
    "correctIndex": 1,
    "explanation": "## What are their Definitions?\n\n- **Fatal Error**: An irrecoverable error that forces a program to stop.\n\n- **Page Fault**: An event triggered when the program accesses memory not currently in RAM, and the OS retrieves it from disk.\n\n- **Scheduling Error**: A problem in how the OS allocates CPU time to tasks, leading to inefficiency or deadlocks.\n\n- **Segmentation Fault**: A program tries to access illegal or non-existent memory, often leading to a crash.\n\n## What is Paging?\n\nIt's when we separate our memory into blocks and keep track of it in a paging table. This paging table maps the memory address of our main memory to our secondary memory, like when code is saved to main memory & is mapped (via paging) to our main memory to execute.\n\nIf we try to access memory in our main memory that doesn't exist, it will raise a Page Fault and attempt to find the corresponding mapped page in our secondary memory.\n\n## Discussing the Answer\n\nWe might have thought of Segmentation Fault, however that is different. It's when we access memory that DOES EXIST, but we do not have access permissions.\n\n- each program is 'allocated memory' when a program runs - meaning the CPU leases it memory it can borrow and it cannot access others - otherwise it leads to a segmentation fault.\n\nIf the computer did not support paging, accessing invalid memory will cause a Fatal Error and crash the program.\n\nHowever, it does support paging, so a Page Fault is raised instead.\n\nTherefore, our answer is **b) Page fault**.",
    "difficultyWeight": 1
  },
  {
    "id": "2023A_FE_AM_18",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2023,
    "questionText": "Which of the following is an appropriate description concerning the round robin process scheduling method?",
    "options": [
      "CPU resources are allocated to each process in order of priority specified in advance when a particular event occurs.",
      "CPU resources are allocated to each process in order of processing time from shortest to longest.",
      "CPU resources are allocated to the first executable process in the queue when an interval-timer interrupt is generated.",
      "CPU resources are allocated to the process that needs to start immediately when some kind of interrupt is generated."
    ],
    "correctIndex": 2,
    "explanation": "## How does Round Robin Work?\n\nWatch this video: [Scheduling Algorithms - Round Robin Scheduling - YouTube](https://www.youtube.com/watch?v=YzBBJYfwdi8).\n\nNotes:\n\n- we have a set time quantum (window for execution) \n\n- it serves as the amount of time the CPU works on a process before moving on to the next one\n\n- processes aren't scheduled by time to execute or a specific priority, they are just inserted at the tail of a CIRCULAR queue.\n\n- whoever was the first process to be enqueued, it will be the first to execute for the time quantum amount\n\n- if it's not done, the CPU moves to the next process and does the same.\n\n- if it's done, it's dequeued from the queue.\n\n## Discussing the Possible Answers\n\na) CPU resources are allocated to each process in order of priority specified in advance when a particular event occurs. \n\n- we don't have priority in round robin, so this is wrong.\n\nb) CPU resources are allocated to each process in order of processing time from shortest to longest. \n\n- we don't take into account the processing time in round robin, it's first-come, first-serve.\n\nd) CPU resources are allocated to the process that needs to start immediately when some \n\nkind of interrupt is generated. \n\n- the 'process that needs to start immediately' does not fit the first-come, first-serve framework.\n\n- sort of correct, but we can find a better solution to describe Round Robin better\n\n**c) CPU resources are allocated to the first executable process in the queue when an** \n\n**interval-timer interrupt is generated.** \n\n- there we go, we allocate resources to the first executable process (first-come, first-serve) and we have an interval-timer interrupt (time quantum).\n\n- this is our answer.",
    "difficultyWeight": 1
  },
  {
    "id": "2023A_FE_AM_19",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2023,
    "questionText": "Which of the following is an explanation of the function of an archiver that is one of the data management utilities?",
    "options": [
      "Compiling several files into one file or reconstructing the original files in order to perform data backup and distribution",
      "Creating both an area for recording data and an area for managing data on a single hard disk",
      "Keeping data secure through file protection for safeguarding data from unauthorized use and destruction, and also through copy protection for preventing unauthorized copying",
      "Rearranging a file into contiguous areas, to the extent possible, on a hard disk in which fragmentation has occurred"
    ],
    "correctIndex": 0,
    "explanation": "You know how in `.zip` file management tools like 7z and WinRAR, you can select multiple files and click 'Add to archive'? Afterwards, it compresses and groups your files into a single `.zip` file so that it's easier to transfer and compress?\n\nYeah, that's basically what a) is doing. We are 'archiving' files into a single file to be easily moved or compressed into a smaller format, which we can 'Extract' or reconstruct to the originals if we need to.",
    "difficultyWeight": 1
  },
  {
    "id": "2023A_FE_AM_20",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2023,
    "questionText": "Which of the following is a sequential circuit that has two stable states?",
    "options": [
      "Adder circuit",
      "Capacitor",
      "Flip-flop",
      "NAND gate"
    ],
    "correctIndex": 2,
    "explanation": "## What is a Flip-Flop\n\nA flip-flop in digital electronics is a circuit with **two stable states that can be used to store binary data.**\n\nThe stored data can be changed by applying varying inputs.\n\nFlip-flops and latches are fundamental building blocks of digital electronics systems used in computers, communications, and many other types of systems. Both are used as **data storage elements**.\n\n## Why the Others Are Wrong\n\n- **a) Adder circuit**: An adder circuit performs arithmetic operations like addition but does not have stable states. It is a combinational circuit, meaning it doesn't store data but rather computes outputs based on current inputs.\n\n- **b) Capacitor**: A capacitor is a passive electronic component that stores electric charge temporarily, but it does not have defined binary states in the context of a digital circuit like flip-flops do.\n\n- **d) NAND gate**: A NAND gate is a basic logic gate used in digital circuits to perform a logical operation. It's a combinational circuit that produces an output based on its current inputs, but it doesn’t have memory or stable states like a flip-flop.",
    "difficultyWeight": 1
  },
  {
    "id": "2023A_FE_AM_21",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2023,
    "questionText": "Use DeMorgan's Law\n\n![Image](Files/Pasted%20image%2020241019133645.png)\n\nOur original circuit expressed in Boolean Algebra is: $((Bcap C)' cup A)'$",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correctIndex": 2,
    "explanation": "Our original circuit expressed in Boolean Algebra is: $((Bcap C)' cup A)'$. Let's simplify this.\n\n1. $(Bcap C) cap A'$ by DeMorgan's & Double Negation Law\n- double negation happened when we distributed the `'` to $(B cap C)'$ making it $(B cap C)'.$\n\nAs we can see, this is equivalent to answer C.\n\n![Image](Files/Pasted%20image%2020241019134139.png)",
    "difficultyWeight": 1
  },
  {
    "id": "2023A_FE_AM_22",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2023,
    "questionText": "A power supply unit has a rated output power of 500 watts and an efficiency of 80%. In order to obtain an output power of 500 watts from this power supply unit, how many watts is the minimum input power?",
    "options": [
      "100",
      "400",
      "625",
      "900"
    ],
    "correctIndex": 2,
    "explanation": "We can define output power as 'Output Power = Input Power * Efficiency'.\n\nSo in our example, let's see what's given & let's find the solution.\n\nGiven:\n- output power 500W\n- efficiency 80%\n\nAsked:\n- input power\n\nSolution:\n\n1. We can derive the formula for input power by isolating it from our formula.\n\n- (Output Power / Efficiency) = Input Power\n\n2. Now we can substitute the variables into the formula\n- (500 / 0.8) = 625.",
    "difficultyWeight": 1
  },
  {
    "id": "2023A_FE_AM_23",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2023,
    "questionText": "When an order data in the format shown below is entered, which of the following is a data validation method that is performed to determine whether the order date is a business day and whether the date is on or before the date of data entry or after the date of data entry?\n\n![Image](Files/2023-23.jpg)",
    "options": [
      "Duplicate check",
      "Format check",
      "Logical check",
      "Sequence check"
    ],
    "correctIndex": 2,
    "explanation": "## Data Validation Checks\n\nHere's a summary of checks thanks to our AI friend:\n\n### 1. **Duplicate Check**\n- **Purpose**: To ensure that data is not entered more than once, avoiding redundancy.\n- **Example**: A system checks whether a customer’s ID or order number already exists before allowing new entry.\n\n### 2. **Format Check**\n- **Purpose**: To ensure that the data entered follows a specific format or pattern.\n- **Example**: A date field must follow the format \"YYYY-MM-DD\", or a phone number must have a specific number of digits.\n\n### 3. **Range Check**\n- **Purpose**: To verify that data falls within a specified range.\n- **Example**: A temperature field might only accept values between -50°C and 50°C, or a quantity field must be between 1 and 1000.\n\n### 4. **Length Check**\n- **Purpose**: To ensure that data has a specific number of characters.\n- **Example**: A password field requires at least 8 characters, or a ZIP code must have exactly 5 digits.\n\n### 5. **Presence Check**\n- **Purpose**: To ensure that a field has been filled and is not left blank.\n- **Example**: Mandatory fields like a customer’s name or address should not be empty.\n\n### 6. **Logical Check**\n- **Purpose**: Verifies that data makes sense in its context and adheres to logical rules or business constraints.\n- **Example**: Checking that an order date isn't in the future or that a delivery date isn't earlier than the order date.\n\n### 7. **Consistency Check**\n- **Purpose**: To check that data is consistent across different fields or systems.\n- **Example**: The shipping address country must match the customer’s country of residence, or a \"start date\" must precede the \"end date.\"\n\n### 8. **Sequence Check**\n- **Purpose**: To ensure that records are in the correct order.\n- **Example**: In a booking system, flight legs should follow the sequence from the departure city to the destination.\n\n### 9. **Check Digit Validation**\n- **Purpose**: To validate codes using an additional digit calculated based on the others.\n- **Example**: Credit card numbers often have a check digit at the end to verify the accuracy of the number.\n\n### 10. **Type Check**\n- **Purpose**: To ensure that the data entered is of the correct data type (e.g., text, number, date).\n- **Example**: A price field must contain only numeric data, while a name field should not contain numbers.\n\n### 11. **Uniqueness Check**\n- **Purpose**: To ensure that a field contains unique values across records.\n- **Example**: An email address or username should be unique to each user.",
    "difficultyWeight": 1
  },
  {
    "id": "2023A_FE_AM_24",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2023,
    "questionText": "Which of the following is a process in PCM to capture analog values from audio signals at a regular interval?",
    "options": [
      "Encoding",
      "Reverse quantization",
      "Quantization",
      "Sampling"
    ],
    "correctIndex": 3,
    "explanation": "### Key Processes in PCM:\n\nPCM involves three key steps to convert an analog signal (like an audio signal) into a digital signal:\n\n1. **Sampling**:\n\n- The analog signal is sampled at regular intervals. In this step, the continuous analog signal is measured at discrete points in time.\n\n- **Purpose**: To capture the signal’s amplitude (value) at these regular intervals.\n\n2. **Quantization**:\n\n- After sampling, the analog values are rounded to the nearest value within a range of discrete levels. This process introduces a small\n\nerror called 'quantization noise.'\n\n- **Purpose**: To convert the sampled values into a finite set of values for easier digital representation.\n\n3. **Encoding**:\n\n- The quantized values are converted into a binary format (0s and 1s).\n\n- **Purpose**: To represent the data in digital form for storage, transmission, or processing.\n\n## The Answer\n\nd) Sampling matches the description of the question to capture analog signals at regular intervals.\n\nPCM involves three key steps: 1. Sampling, 2. Quantization, 3. Encoding.",
    "difficultyWeight": 1
  },
  {
    "id": "2023A_FE_AM_25",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2023,
    "questionText": "In a DBMS, which of the following is a function that decides the schema?",
    "options": [
      "Definition function",
      "Maintenance function",
      "Recovery function",
      "Security function"
    ],
    "correctIndex": 0,
    "explanation": "a) Definition function: Responsible for defining and managing the database schema, including structure and relationships.\n\nb) Maintenance function: Ensures the smooth operation of the database by updating and optimizing it over time.\n\nc) **Recovery function**: Handles restoring the database to a previous state in case of failure or data loss.\n\nd) **Security function**: Manages access controls, ensuring data integrity and preventing unauthorized access.",
    "difficultyWeight": 1
  },
  {
    "id": "2023A_FE_AM_26",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2023,
    "questionText": "Which of the following is an appropriate method used to remove data redundancy in relational database systems?",
    "options": [
      "Entity-relationship",
      "Functional dependency",
      "Hierarchical",
      "Normalization"
    ],
    "correctIndex": 3,
    "explanation": "a) **Entity-relationship**: A diagrammatic technique to represent entities and relationships between them in a database.\n\nb) **Functional dependency**: A constraint that describes the relationship between attributes in a relational database.\n\nA **functional dependency** exists when one attribute uniquely determines another attribute. For example:\n\n- **EmployeeID → EmployeeName**: This means that each **EmployeeID** uniquely determines the corresponding **EmployeeName**. If you know the **EmployeeID**, you can always determine the **EmployeeName**.\n\n- **DepartmentID → DepartmentName**: This means that for each **DepartmentID**, there is a unique **DepartmentName**. If you know the **DepartmentID**, you can uniquely determine the **DepartmentName**.\n\nc) **Hierarchical**: A database model that organizes data in a tree-like structure, where each record has a single parent.\n\nd) **Normalization**: A process used to structure a relational database to minimize redundancy and dependency by organizing data into related tables.",
    "difficultyWeight": 1
  },
  {
    "id": "2023A_FE_AM_27",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2023,
    "questionText": "Which of the following is the most appropriate description concerning the primary role of an SQL query optimizer?",
    "options": [
      "It determines the most efficient way to execute a query.",
      "It minimizes the number of rows in a result set.",
      "It parses a query and improves it for efficient network transmission.",
      "It stores the results of frequently used queries in a cache."
    ],
    "correctIndex": 0,
    "explanation": "The goal of SQL query optimization is improved database efficiency and performance, minimizing the response time of your queries.",
    "difficultyWeight": 1
  },
  {
    "id": "2023A_FE_AM_28",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2023,
    "questionText": "![Image](Files/Pasted%20image%2020241019161313.png)",
    "options": [
      "StudentNumber HAVING AVG(Score) >= 80",
      "StudentNumber WHERE AVG(Score) >= 80",
      "Subject HAVING AVG(Score) >= 80",
      "Subject WHERE AVG(Score) >= 80"
    ],
    "correctIndex": 0,
    "explanation": "This means, we group all scores of the student by their `StudentNumber`, then we `AVG()` all of it, per student. Afterwards, we use the `HAVING AVG(Score) >= 80` to only show `group, AVG()` rows that have `AVG(Score) >= 80`.\n\n## Aggregate SQL Functions\n\nThe `GROUP BY <attr>` clause selects rows having a common attribute value `<attr>` into a smaller set of rows.\n- **typically used with aggregate functions** \n- for example, `SELECT item_name, SUM(price) FROM items GROUP BY item_name` will sum all the prices of each item, then group the `item_name` column to their corresponding `SUM(price)`.\n\n## Discussing Alternatives\n\nb) is wrong because `WHERE` does not apply to `GROUP BY`, but rather on the initial `SELECT StudentNumber`.\n\nc) is wrong because we are trying to average the `StudentNumber` scores, not the entire `Subject`.\n\nd) is wrong because of the same reason b) is wrong and we are not looking to average the `Subject` scores, but rather the `StudentNumber` scores.",
    "difficultyWeight": 1
  },
  {
    "id": "2023A_FE_AM_29",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2023,
    "questionText": "Which of the following is a file in which values before and after an update of the database are written and saved as the update history of the database?",
    "options": [
      "Backup file",
      "Checkpoint file",
      "Dump file",
      "Log file"
    ],
    "correctIndex": 3,
    "explanation": "## Summary of Choices\n\n### a) Backup file\n\nA backup file is a copy of the database or a subset of its data that is stored separately to **prevent data loss in case of failure, corruption, or accidental deletion**. Backups can be full (containing the entire database) or incremental (containing only changes made since the last backup).\n\n### b) Checkpoint file\n\nA checkpoint file is a **point-in-time snapshot of the database state, created during the database's operation**. It saves the current state of the database to minimize the amount of data that needs to be recovered after a crash, ensuring that only changes made after the checkpoint need to be processed.\n- used to rollback crashes\n\n### c) Dump file\n\nA dump file is a **complete export of the database's contents**, usually in a format suitable for storage or transfer. This can be used to create a backup, migrate data to another database, or analyze the database structure and data.\n\n### d) Log file\n\nA log file **records all changes made to the database, including before and after values of updates**, which provides a history of operations. It is critical for data recovery, allowing the database to be restored to a consistent state in case of a crash or failure.\n- used to rollback data mutations or transactions\n- it contains data like the type of operation & the values",
    "difficultyWeight": 1
  },
  {
    "id": "2023A_FE_AM_30",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2023,
    "questionText": "Which of the following is the most appropriate information for a router to determine the destination of an incoming packet?",
    "options": [
      "Destination IP address",
      "Destination MAC address",
      "Source IP address",
      "Source MAC address"
    ],
    "correctIndex": 0,
    "explanation": "## Justification\n\nWe need to determine the destination, so choices c) and d) for 'Source' metadata is redundant, leaving us with choices a) and b).\n\nWe need to remember that routers mainly operate in the Network Layer (Layer 3) while switches operate in the Data Link Layer (Layer 2).\n- Network Layer uses packets & IP Addresses\n- Data Link Layer uses frames & MAC Addresses\n\nTherefore, since Routers are interested in IP Addresses, the answer is a) Destination IP address to determine the destination of an incoming packet.",
    "difficultyWeight": 1
  },
  {
    "id": "2023A_FE_AM_31",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2023,
    "questionText": "Which of the following is a feature of a switching hub (layer 2 switch) network device?",
    "options": [
      "It breaks a received packet into smaller pieces (fragments) in the network layer.",
      "It dynamically allocates an IP address for a terminal connected to its LAN port.",
      "It forwards a received packet only to its LAN port connected to a device with the packet’s destination MAC address.",
      "It forwards a received packet to all its LAN ports (broadcast)."
    ],
    "correctIndex": 2,
    "explanation": "This is because layer 2 devices deal with MAC Addresses, while layer 3 devices deal with IP Addresses.\n\nd) is wrong because it will only forward the packet to the broadcast MAC address `FFFF.FFFF.FFFF` or `ff:ff:ff:ff:ff:ff` on the specific pretense that\n- it doesn't know the MAC address of the destination (not stored in its MAC table).\n- the packet is meant to be received by all devices in the network.",
    "difficultyWeight": 1
  },
  {
    "id": "2023A_FE_AM_32",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2023,
    "questionText": "When a PC connected to a LAN is starting up, which of the following protocols is used to automatically assign an IP address to the PC?",
    "options": [
      "DHCP",
      "DNS",
      "FTP",
      "PPP"
    ],
    "correctIndex": 0,
    "explanation": "Dynamic Host Configuration Protocol\n\n- its set up on routers to automatically \"lease\" a dynamic IP address to a device - allowing it to use the network.\n- most WiFi networks do this because we don't want people to manually configure static IP addresses for each device that connects.\n\n### Process\n\n1. DHCPDISCOVER\n- the destination is 255.255.255.255\n- the 0.0.0.0 address is the source.\n2. DHCPOFFER\n- the DHCP server sends a list of IP Addresses available to use.\n3. DHCPREQUEST\n- the client sends a request to claim the IP address.\n4. DHCPACK\n- the server confirms the IP Address belongs to the client now.\n- if it's not available anymore, then DHCPNAK\n\n## Definition of Other Answers\n\n### b) DNS (Domain Name System)\n\nDNS is a protocol used to translate human-readable domain names (like [www.example.com](http://www.example.com)) into IP addresses (like 192.168.1.1), which are needed for routing traffic over the internet. It acts as a directory for translating domain names into their corresponding IP addresses.\n\n### c) FTP (File Transfer Protocol)\n\nFTP is a protocol used for transferring files between a client and a server over a network, such as the Internet. It allows users to upload and download files to/from a remote server.\n\n### d) PPP (Point-to-Point Protocol)\n\nPPP is a data link layer protocol used to establish a direct connection between two networking nodes, often over serial links like dial-up connections. It provides features like authentication, encryption, and compression for data transmission.",
    "difficultyWeight": 1
  },
  {
    "id": "2023A_FE_AM_33",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2023,
    "questionText": "In telecommunication, which of the following is a standard for wireless broadband communication for mobile devices and data terminals?",
    "options": [
      "IEEE 802.11",
      "LTE",
      "NFC",
      "UWB"
    ],
    "correctIndex": 1,
    "explanation": "Long Term Evolution\n- used in 4G mobile internet\n\n## Evolution of Mobile Internet\n\n### 1. **2G (Second Generation)**\n\n- **Launched**: Early 1990s\n- **Key Features**: Digital voice communication and basic data services (like SMS and MMS)\n- **Speed**: 14.4 Kbps to 64 Kbps\n- **Technology**: Uses **GSM (Global System for Mobile Communications)** and **CDMA (Code Division Multiple Access)**\n- **Data Services**: Basic internet services like text-based web browsing\n- **Significance**: Transition from analog to digital communications, introduction of text messaging (SMS) and limited mobile internet.\n\n### 2. **3G (Third Generation)**\n\n- **Launched**: Early 2000s\n- **Key Features**: Mobile broadband, faster data speeds for internet access, video calling, and multimedia services\n- **Speed**: 200 Kbps to 42 Mbps (with technologies like HSPA+)\n- **Technology**: Uses **UMTS (Universal Mobile Telecommunications System)** and enhanced data technologies like **HSPA (High-Speed Packet Access)** and **EV-DO (Evolution-Data Optimized)**\n- **Data Services**: Enhanced browsing, mobile apps, video streaming, email, etc.\n- **Significance**: Allowed for smartphones to access the internet more efficiently and for mobile apps and services to develop.\n\n### 3. **4G (Fourth Generation)**\n\n- **Launched**: Late 2000s\n- **Key Features**: High-speed mobile internet, support for HD video streaming, online gaming, and large file transfers\n- **Speed**: 100 Mbps to 1 Gbps (with technologies like LTE Advanced)\n- **Technology**: Uses **LTE (Long-Term Evolution)** and **WiMAX** in some cases\n- **Data Services**: High-speed internet, video streaming, mobile gaming, VoIP (Voice over IP), and advanced applications\n- **Significance**: Made mobile internet much faster and more reliable, enabling services like HD streaming, online gaming, and a more app-centric mobile experience.\n\n> [!tip] This is where LTE is used!\n\n### 4. **5G (Fifth Generation)**\n\n- **Launched**: Late 2010s (still expanding globally)\n- **Key Features**: Extremely fast data speeds, low latency, support for IoT (Internet of Things) devices, real-time services (e.g., autonomous driving), and more efficient handling of network traffic\n- **Speed**: 1 Gbps to 10 Gbps or more\n- **Technology**: Uses **mmWave (millimeter wave)** technology, massive MIMO (Multiple Input Multiple Output), and advanced beamforming techniques\n- **Data Services**: Real-time services like augmented reality (AR), virtual reality (VR), 4K/8K video streaming, smart city infrastructure, autonomous vehicles, etc.\n- **Significance**: Supports a massive increase in connected devices and opens up opportunities for futuristic technologies like smart cities, advanced robotics, and AI-driven applications.",
    "difficultyWeight": 1
  },
  {
    "id": "2023A_FE_AM_34",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2023,
    "questionText": "Which of the following is a multicast IPv4 address?",
    "options": [
      "10.1.1.1",
      "192.0.2.0",
      "203.0.113.4",
      "224.0.0.5"
    ],
    "correctIndex": 3,
    "explanation": "Multicast addresses are used for multicast communication, where a single packet is sent to multiple recipients or hosts that have joined a multicast group.\n\nThese addresses fall within the **Class D IP address range**: `224.0.0.0 - 239.255.255.255`.\n\n![Image](Files/Pasted%20image%2020241019185547.png)\n\n## Other Answers\n\n- **a) 10.1.1.1**: This is a private IP address from the **10.0.0.0/8** range used for private networks, not for multicast.\n- **b) 192.0.2.0**: This is a reserved IP address used for documentation, not multicast.\n- **c) 203.0.113.4**: This is another reserved IP address for documentation purposes.",
    "difficultyWeight": 1
  },
  {
    "id": "2023A_FE_AM_35",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2023,
    "questionText": "Which of the following is a method for embedding a malicious java script code in the content sent to a victim’s web browser from a vulnerable website?",
    "options": [
      "Cross-site request forgery",
      "Cross-site scripting",
      "OGNL injection",
      "SQL injection"
    ],
    "correctIndex": 1,
    "explanation": "Cross-site scripting (XSS) works by manipulating a vulnerable website so that it sends malicious JavaScript to users.\n\nWhen the malicious code executes inside a victim's browser, the attacker can steal cookies, browser data, and even perform actions on behalf of the user.\n\n> One modern example is when you insert user content via `document.getElementById(\"postContainer\").innerHTML = userContent`, and when `userContent` contains malicious JavaScript, it will execute in the browser.",
    "difficultyWeight": 1
  },
  {
    "id": "2023A_FE_AM_36",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2023,
    "questionText": "Mr. A encrypts a message to be sent to Mr. B using an asymmetric key encryption method so that only Mr. B can decrypt the message. Which of the following is(are) the private key(s) used to decrypt the message?",
    "options": [
      "A third party’s",
      "Both Mr. A’s and Mr. B’s",
      "Only Mr. A’s",
      "Only Mr. B’s"
    ],
    "correctIndex": 3,
    "explanation": "Asymmetric encryption works with two keys: a public key and a private key. Mr. A uses Mr. B's public key to encrypt the message, and Mr. B uses his own private key to decrypt it. Therefore, only Mr. B's private key is used to decrypt the message.\n\n![Image](Files/Pasted%20image%2020241019190724.png)",
    "difficultyWeight": 1
  },
  {
    "id": "2023A_FE_AM_37",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2023,
    "questionText": "Which of the following is an attack using a trial-and-error method to obtain confidential information such as a user password or personal identification number (PIN)?",
    "options": [
      "Brute force",
      "Denial of service",
      "Man-in-the-middle",
      "Sniffing"
    ],
    "correctIndex": 0,
    "explanation": "A brute force attack systematically tries every possible combination until the correct one is found. For example, with a 2-digit PIN, a brute force attack tries `00`, `01`, `02`, ..., up to `99`.\n\nOther answers:\n\n- **Denial of service (DoS)** attacks overwhelm systems with requests to make them unavailable.\n- **Man-in-the-middle** attacks intercept and alter communication between two parties.\n- **Sniffing** captures and monitors data traffic but doesn’t actively try to guess passwords.",
    "difficultyWeight": 1
  },
  {
    "id": "2023A_FE_AM_38",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2023,
    "questionText": "When information, such as an e-mail or a document file, is sent and received with a digital signature via the Internet, which of the following is an appropriate combination of security properties that ensure that such information is from the signer and has not been altered or tampered with during transmission?",
    "options": [
      "Atomicity and consistency",
      "Authenticity and integrity",
      "Availability and confidentiality",
      "Durability and isolation"
    ],
    "correctIndex": 1,
    "explanation": "The correct answer is **Authenticity and Integrity**.\n\n- **Authenticity** ensures the message is from the correct sender.\n- **Integrity** ensures the data has not been altered during transmission.\n\nOther answers:\n\n- **Atomicity and Consistency** deal with database transaction properties.\n- **Availability and Confidentiality** are important but not specific to this case.\n- **Durability and Isolation** are more related to transaction properties in databases.",
    "difficultyWeight": 1
  },
  {
    "id": "2023A_FE_AM_39",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2023,
    "questionText": "Which of the following is an example of a behavior of a key logger?",
    "options": [
      "It interrupts the communication between two parties and then collects and falsifies the information being exchanged.",
      "When Internet banking is used, it collects the password entered by the user.",
      "When the user browses movies on a web browser, it arbitrarily displays unintended advertisements for the user.",
      "When the web browser is started, it arbitrarily displays a toolbar that the user has not installed."
    ],
    "correctIndex": 1,
    "explanation": "A **keylogger** is a piece of software or hardware that records every keystroke a user makes, often secretly. It tracks sensitive information like passwords or PINs. For example, when using Internet banking, a keylogger would capture the password entered by the user.\n\nIt is a form of **spyware**, as it monitors user activity without their knowledge.",
    "difficultyWeight": 1
  },
  {
    "id": "2023A_FE_AM_40",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2023,
    "questionText": "Which of the following is a role of a PKI certification authority as a reliable third party?",
    "options": [
      "Adding a digital signature to an e-mail body as requested by a user",
      "Enabling the synchronization of time by returning an accurate time to a user’s request",
      "Issuing a digital certificate that certifies the private key of a user or server",
      "Issuing a digital certificate that certifies the public key of a user or server"
    ],
    "correctIndex": 3,
    "explanation": "Public Key Infrastructure (PKI) is used for secure communications through asymmetric encryption. A **Certification Authority (CA)** is responsible for issuing digital certificates that authenticate the identity of users, devices, or services. These certificates **certify the public key** associated with the user or server.\n\nIn asymmetrical encryption, the private key is kept secret, and only the public key is shared. Therefore, **option d** is correct, as the CA certifies the public key, not the private key.",
    "difficultyWeight": 1
  },
  {
    "id": "2023A_FE_AM_41",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2023,
    "questionText": "![Image](Files/Pasted%20image%2020241019193229.png)",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correctIndex": 1,
    "explanation": "Encryption is used to obscure data so that only authorized parties can access it. In this case, encrypting the communication between the database connection programs ensures that sensitive information is protected during transmission.",
    "difficultyWeight": 1
  },
  {
    "id": "2023A_FE_AM_42",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2023,
    "questionText": "Companies usually provide a means for their mobile workforce to access the corporate network securely over the Internet through insecure channels such as open wireless networks in hotels or coffee shops. Which of the following is the appropriate technology that can be used for this purpose?",
    "options": [
      "DMZ (DeMilitarized Zone)",
      "SNMP (Simple Network Management Protocol)",
      "VoIP (Voice over Internet Protocol)",
      "VPN (Virtual Private Network)"
    ],
    "correctIndex": 3,
    "explanation": "A **VPN (Virtual Private Network)** creates a secure, encrypted connection over the internet, allowing users to access private networks securely even over insecure channels like open Wi-Fi networks.\n\nOther answers:\n\n- **DMZ** is a network area that isolates internal networks from external ones.\n- **SNMP** is used for managing network devices.\n- **VoIP** is for voice communication over the internet.",
    "difficultyWeight": 1
  },
  {
    "id": "2023A_FE_AM_43",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2023,
    "questionText": "Which of the following is a technique that attempts to intrude into the system in order to detect security-related vulnerabilities of the computer or network?",
    "options": [
      "Penetration test",
      "Regression test",
      "Software inspection",
      "Walk-through"
    ],
    "correctIndex": 0,
    "explanation": "A **penetration test** simulates attacks on a system to identify security vulnerabilities and assess potential risks from malicious actors.\n\nOther answers:\n\n- **Regression test** ensures that new code doesn’t break existing functionality.\n- **Software inspection** is a formal review process for finding defects.\n- **Walk-through** is a review process where developers present their work to peers.",
    "difficultyWeight": 1
  },
  {
    "id": "2023A_FE_AM_44",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2023,
    "questionText": "Which of the following is a key that the SSL/TLS certificate of a website contains?",
    "options": [
      "The encrypted private-key of the website",
      "The encrypted public-key of the website",
      "The unencrypted private-key of the website",
      "The unencrypted public-key of the website"
    ],
    "correctIndex": 3,
    "explanation": "An **SSL/TLS certificate** contains the **unencrypted public key** of the website, which is used to establish secure communication between the client and the server.\n\nThe **private key** is never shared in the certificate and is kept secret by the server.\n\nThe public key is made available to anyone connecting to the website to facilitate secure communication.",
    "difficultyWeight": 1
  },
  {
    "id": "2023A_FE_AM_45",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2023,
    "questionText": "Which of the following is a description concerning a decision table that is one of the design techniques used in system development?",
    "options": [
      "It represents a combination of conditions and the corresponding operations.",
      "It represents entities by rectangles and their relationship through connecting lines.",
      "It represents the flow of controls, such as a process or selection, by straight lines or arrows.",
      "It represents the flow of data between an external interface, processes, and data store."
    ],
    "correctIndex": 0,
    "explanation": "A **decision table** is a tool used in system design that represents different conditions and the corresponding actions to be taken for each condition.\n\nOther answers:\n\n- **Entity Relationship Diagrams** represent entities and their relationships.\n- **Flowcharts** represent control flows in processes.\n- **Data Flow Diagrams** represent the flow of data in a system.",
    "difficultyWeight": 1
  },
  {
    "id": "2023A_FE_AM_46",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2023,
    "questionText": "The integration test for software composed of modules arranged in a hierarchical structure is performed from a high-level module. In such a case, which of the following is a test module that is used as a substitute for a low-level module?",
    "options": [
      "Driver",
      "Emulator",
      "Simulator",
      "Stub"
    ],
    "correctIndex": 3,
    "explanation": "### d) Stub\n\nA **test module** that simulates the behavior of a **low-level module** by providing hardcoded responses, allowing testing of higher-level modules in a hierarchical structure without needing the actual implementation of the low-level module.\n\n### Differences between a Stub and a Driver\n\n|Sr.No|Stub|Driver|\n|---|---|---|\n|**1**|It is used for the top down integration testing.|It is used for the bottom up integration testing.|\n|**2**|It is known as a called program.|It is known as the calling program.|\n|**3**|It is used when the lower level modules are not available.|It is used when the higher level modules are not available.|",
    "difficultyWeight": 1
  },
  {
    "id": "2023A_FE_AM_47",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2023,
    "questionText": "Which of the following is the most appropriate feature of polymorphism in object-oriented programming?",
    "options": [
      "Developers are allowed to define classes incrementally by reusing classes defined previously as the basis for new classes.",
      "Only the information required to use a software module is published to the module user.",
      "The processes and data are combined into a single object.",
      "The same message can be interpreted differently by different classes of objects"
    ],
    "correctIndex": 3,
    "explanation": "### d) The same message can be interpreted differently by different classes of objects\n\n**Polymorphism** allows a parent class method to be overridden by child classes, so the same method can behave differently depending on the object type invoking it. This is fundamental in **Object-Oriented Programming (OOP)**.\n\nExample in Java:\n\n```Java\npublic static void main(String[] args) {\n  Employee joe = new Employee(\"Average Joe\");\n  Employee chad = new Manager(\"Chad\");\n\n  joe.introduce(); // Hello, I am Average Joe, an employee!\n  chad.introduce(); // Hello, I am Chad, and I manage a Local Branch.\n}\n\npublic static class Employee {\n  String name;\n  int id;\n  String department = \"General\";\n  Employee(String n) {\n    name = n;\n  }\n  void introduce() {\n    System.out.println(\"Hello, I am \" + name + \", an employee!\");\n  }\n}\n\npublic static class Manager extends Employee {\n  String department = \"Local Branch\";\n  Manager(String n) {\n    super(n);\n  }\n  @Override\n  void introduce() {\n    System.out.println(\"Hello, I am \" + name + \", and I manage a \" + department);\n  }\n}\n```",
    "difficultyWeight": 1
  },
  {
    "id": "2023A_FE_AM_48",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2023,
    "questionText": "Which of the following is approved by the customer when the external design of a system is completed?",
    "options": [
      "Physical database specification",
      "Program flowchart",
      "Screen layout",
      "System development plan"
    ],
    "correctIndex": 3,
    "explanation": "### c) Screen layout\n\nWhen the external design of a system is completed, it typically involves creating the **user interface (UI)** and how the system will interact with the user. The **screen layout** is part of this external design.\n\n### Other Choices\n\n- **a) Physical database specification**: More related to **internal design**.\n- **b) Program flowchart**: More related to **internal design**.\n- **d) System development plan**: An overarching plan for development, not typically **approved by the customer** after external design.",
    "difficultyWeight": 1
  },
  {
    "id": "2023A_FE_AM_49",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2023,
    "questionText": "Which of the following is an appropriate description of an extreme programming (XP) practice?",
    "options": [
      "After the code is created, and it is confirmed that it can be integrated, test cases are created.",
      "Integration of the code and testing are continuously repeated.",
      "The code that passed the tests is not refactored until the next iteration.",
      "The customer is responsible for the specification of unit tests."
    ],
    "correctIndex": 1,
    "explanation": "### b) Integration of the code and testing are continuously repeated.\n\n**Extreme Programming (XP)** is an agile methodology where **continuous integration and testing** are key practices. Code is integrated and tested frequently to catch issues early.\n\n### Why the Other Choices are Incorrect:\n\n- **a) After the code is created, and it is confirmed that it can be integrated, test cases are created**: In XP, tests are written **before** code (Test-Driven Development).\n- **c) The code that passed the tests is not refactored until the next iteration**: Refactoring is done continuously.\n- **d) The customer is responsible for the specification of unit tests**: The customer provides **user stories** but **developers** write unit tests in XP.",
    "difficultyWeight": 1
  },
  {
    "id": "2023A_FE_AM_50",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2023,
    "questionText": "Which of the following is a method that uses a modeling tool to create a design document described with E-R diagrams or other representations from the definition information in an active database?",
    "options": [
      "Concurrent engineering",
      "Forward engineering",
      "Reverse engineering",
      "Social engineering"
    ],
    "correctIndex": 2,
    "explanation": "### c) Reverse engineering\n\n**Reverse engineering** involves analyzing an existing system to uncover its design, source code, or architecture. It is used to extract information from a functioning system.\n\n### Other Terms\n\n- **Forward engineering**: Development from specifications to a system.\n- **Concurrent engineering**: Multiple development phases happen simultaneously.\n- **Social engineering**: Manipulation of individuals to divulge confidential information.",
    "difficultyWeight": 1
  },
  {
    "id": "2023A_FE_AM_51",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2023,
    "questionText": "![Image](Files/Pasted%20image%2020241019202636.png)",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correctIndex": 1,
    "explanation": "To solve this, we need to calculate the number of **one-on-one meetings** that occur when there are **10 members** and then compare that to the number of meetings when there are **12 members** (after adding two members).\n\n### Step 1: Calculate the number of meetings with 10 members\n\nThe number of **one-on-one meetings** between 10 members is a combination problem. The number of ways to choose 2 members from a group of 10 (which is the number of one-on-one meetings) is given by the combination formula:\n\n$\binom{n}{2} = \frac{n(n - 1)}{2}$\n\nWhere (n) is the number of members.\n\nFor 10 members, we can calculate the number of meetings as:\n\n$\binom{10}{2} = \frac{10 \times (10 - 1)}{2} = \frac{10 \times 9}{2} = 45$\n\nSo, with 10 members, there are **45 one-on-one meetings**.\n\n### Step 2: Calculate the number of meetings with 12 members\n\nNow, if 2 more members are added, making it 12 members, we calculate the number of meetings again using the same combination formula:\n\n$\binom{12}{2} = \frac{12 \times (12 - 1)}{2} = \frac{12 \times 11}{2} = 66$\n\nSo, with 12 members, there are **66 one-on-one meetings**.\n\n### Step 3: Calculate the additional meetings\n\nThe additional meetings are the difference between the number of meetings with 12 members and the number of meetings with 10 members:\n\n$\text{Additional meetings} = 66 - 45 = 21$\n\n### Final Answer:\nThere will be **21 additional meetings** if two members are added to the team.",
    "difficultyWeight": 1
  },
  {
    "id": "2023A_FE_AM_52",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2023,
    "questionText": "![Image](Files/Pasted%20image%2020241019203204.png)",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correctIndex": 3,
    "explanation": "This indicates that fewer new bugs are being found per test item, suggesting a stabilizing quality condition.\n\n## What Constitutes Stable Quality?\n\n**A stable quality condition** means that the rate of new bugs being discovered is decreasing as more test items are completed.\n\n> [!tip] When a bug is discovered, making a test documents and stops it, but doesn't remove it from the cumulative calculation.\n > - cumulative means past number of bugs are still being included in the sum.\n > - `[1, 2, 0, 0]` the cumulative sum is still 3, not `0`, despite no more bugs being in the system.\n\n## Other Choices\n\n- **A)** shows a rapid decrease in the cumulative number of bugs, which is unrealistic as bugs are typically discovered throughout the testing process.\n- **B)** shows a continuous increase in the cumulative number of bugs at a relatively constant rate, indicating no improvement in quality.\n- **C)** shows a linear relationship between the number of completed test items and the cumulative number of bugs, suggesting a constant rate of bug discovery, which is not indicative of a stable quality condition.",
    "difficultyWeight": 1
  },
  {
    "id": "2023A_FE_AM_53",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2023,
    "questionText": "![Image](Files/Pasted%20image%2020241019204336.png)",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correctIndex": 1,
    "explanation": "### Step 1: Calculate the total coding effort (in person-days)\n\nWe need to calculate how many person-days are required for coding each type of program and then sum them up:\n\n1. **Input processing**:\n   - Number of programs: 20\n   - Person-days per program: 1\n   $\text{Total for input processing} = 20 \times 1 = 20 \text{ person-days}$\n\n2. **Output processing**:\n   - Number of programs: 10\n   - Person-days per program: 3\n   $\text{Total for output processing} = 10 \times 3 = 30 \text{ person-days}$\n\n3. **Calculation processing**:\n   - Number of programs: 5\n   - Person-days per program: 9\n   $\text{Total for calculation processing} = 5 \times 9 = 45 \text{ person-days}$\n\n#### Total coding effort:\n$\text{Total coding person-days} = 20 + 30 + 45 = 95 \text{ person-days}$\n\n### Step 2: Calculate the design and testing effort\n\nAccording to the problem, design and testing activities require **8 times as many person-days** as coding.\n\n$\text{Design and testing person-days} = 8 \times 95 = 760 \text{ person-days}$\n\n### Step 3: Calculate the total effort\n\nThe total effort required to develop the system is the sum of the coding effort and the design and testing effort:\n\n$\text{Total effort} = 95 \text{ (coding)} + 760 \text{ (design and testing)} = 855 \text{ person-days}$\n\n### Step 4: Calculate the minimum number of staff members\n\nWe need to complete the project in **95 days**, and the total effort is **855 person-days**. To find the number of staff members required, we divide the total effort by the number of days:\n\n$\text{Number of staff members} = \frac{855 \text{ person-days}}{95 \text{ days}} = 9 \text{ staff members}$\n\n### Final Answer:\nThe minimum number of staff members required is **9**. Therefore, the correct answer is **b) 9**.",
    "difficultyWeight": 1
  },
  {
    "id": "2023A_FE_AM_54",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2023,
    "questionText": "![Image](Files/Pasted%20image%2020241019234227.png)",
    "options": [
      "A->B->E->I->L",
      "A->C->D->E->H->K",
      "A->C->F->I->L",
      "A->C->G->J->L"
    ],
    "correctIndex": 3,
    "explanation": "## What is Critical Path in Project Management?\n\nAlso called critical path analysis (CPA), the critical path method (CPM) is a technique where you identify tasks that are necessary for project completion and determine scheduling flexibilities.\n\nA critical path in project management is the **longest sequence of activities that must be finished on time in order for the entire project to be complete**.\n- Any delays in critical tasks will delay the whole project.\n\n## Finding the Answer\n\nBased on the choices, we find the number of days required for all of them, by summing all the numbers for each path.\n\na) $A\to B\to E \to I \to L = 2 + 3 + 1 + 2 + 3 = 11$\n\nb) $A \to C \to D \to E \to H \to K = 2 + 3 + 1 + 1 + 3 + 2 = 12$\n\nc) $A \to C \to F \to I \to L = 2 + 3 + 3 + 2 + 3 = 13$\n\nd) $A \to C \to G \to J \to L = 2 + 3 + 4 + 2 + 3 = 14$\n\nAs we can see, d) takes the longest and is therefore the Critical Path for this Arrow Diagram.",
    "difficultyWeight": 1
  },
  {
    "id": "2023A_FE_AM_55",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2023,
    "questionText": "Which of the following is an appropriate policy for creating an SLA?",
    "options": [
      "Setting a compensation as a penalty for every item that has a service level",
      "Setting a service level for every item that can be taken into consideration",
      "Setting a service level that is maintained into the future without any changes",
      "Setting a service level under the cost and needs of a service provider and its customers"
    ],
    "correctIndex": 3,
    "explanation": "## What is an SLA?\n\nAn **SLA (Service Level Agreement)** is a formal contract between a service provider (or vendor) and a customer that defines the level of service expected from the provider.\n\nIt specifies key service metrics, responsibilities, and guarantees, and typically includes:\n- Response time expectations\n- Availability/uptime commitments\n- Performance standards\n\n## Appropriate Policy for SLA Creation\n\nA well-crafted SLA should reflect the **costs and needs** of both the provider and the customer. This ensures the agreement is feasible for both parties and provides clear expectations.\n\n### Why Other Choices Are Not Correct\n\n- **A)** Compensation as a penalty could be too rigid and does not encourage a productive relationship.\n- **B)** Setting a service level for every item may not be practical and could lead to overly complex SLAs.\n- **C)** While setting a static service level might seem convenient, it’s not feasible in a dynamic environment where requirements and resources can change.\n\n### Final Answer:\nThe correct policy for creating an SLA is **D**: Setting a service level under the cost and needs of a service provider and its customers.",
    "difficultyWeight": 1
  },
  {
    "id": "2023A_FE_AM_56",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2023,
    "questionText": "Which of the following is the most appropriate characteristic of the “big bang” or all-at-once migration method that is one of the system migration methods?",
    "options": [
      "Additional operational costs are incurred because of parallel operations.",
      "An additional application is required for connecting the old and new systems.",
      "The old and new systems operate in parallel, and migration to the new system is performed at a particular point of time.",
      "The problems that occur during migration to the new system have a big impact."
    ],
    "correctIndex": 3,
    "explanation": "## The Big Bang (All-At-Once) Migration Method\nIn the big bang approach, the entire system is migrated from the old to the new system in a single, large-scale operation at a specific point in time. This means that all data, processes, and users are transitioned simultaneously. There is no parallel operation of the old and new systems after migration — the old system is typically shut down entirely.\n\n### Characteristics of Big Bang Migration:\n- **Immediate switch**: The transition happens all at once, meaning that when the migration is complete, users are immediately using the new system.\n- **No parallel running**: Unlike other migration strategies, such as phased migration, the old system is decommissioned once the new system goes live.\n- **High-risk but fast**: Since the entire system is swapped at once, any issues can cause major disruptions. However, it is quicker because there's no prolonged parallel operation.\n- **Lower ongoing operational costs**: Since there is no need to run both systems at the same time, the migration itself can be cheaper in terms of operations, but only if things go smoothly.\n\n### Other Choices\n- **a)** This describes a phased migration where the old and new systems operate simultaneously for a time, which is not the case with the big bang approach.\n- **b)** This might apply to a hybrid migration where two systems need to coexist temporarily.\n- **c)** This describes a phased migration or parallel running strategy, which does not apply to the big bang method.",
    "difficultyWeight": 1
  },
  {
    "id": "2023A_FE_AM_57",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2023,
    "questionText": "In IT service management, which of the following is a problem management activity that is performed proactively?",
    "options": [
      "Analyzing the occurrence trend of incidents and proposing measures that prevent an incident from occurring in the future",
      "Classifying problems that have been detected and recorded, and setting the response priority",
      "Evaluating the effectiveness of a resolution to a critical problem",
      "Monitoring whether an incident occurs again or not for a certain period of time after the problem is resolved"
    ],
    "correctIndex": 0,
    "explanation": "## Proactive Problem Management\nProactive means to do something preemptively without being prompted by some event or reacting to something external (Passive).\n\n### Choices\n- **b)** Classifying problems that have been detected and recorded, and setting the response priority\n- **c)** Evaluating the effectiveness of a resolution to a critical problem\n- **d)** Monitoring whether an incident occurs again or not for a certain period of time after the problem is resolved\n\n### a) Analyzing the occurrence trend of incidents and proposing measures that prevent an incident from occurring in the future\nWe are proactively trying to find a pattern or trend of incidents and preemptively trying to find countermeasures to solve future problems.",
    "difficultyWeight": 1
  },
  {
    "id": "2023A_FE_AM_58",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2023,
    "questionText": "Which of the following is a method that restores the system to its initial state and restarts it when a system failure occurs, that does not accompany preprocessing of a copy before/after an update, and that is also called initial program load?",
    "options": [
      "Cold start",
      "Rollback",
      "Rollforward",
      "Warm start"
    ],
    "correctIndex": 0,
    "explanation": "## Cold Start\nIt happens when the server, container, PC, device, etc. is turned off and it needs to power up & load your application. This matches the question description about 'initial program load'.\n\n### Other Answers\n- **b) Rollback**: Refers to reverting a system to a previous state, not restoring it to an initial state.\n- **c) Rollforward**: Refers to applying changes to move a system forward.\n- **d) Warm start**: Involves reusing existing data structures and caches, but does not restore the system to its initial state.",
    "difficultyWeight": 1
  },
  {
    "id": "2023A_FE_AM_59",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2023,
    "questionText": "Which of the following is an explanation of an audit work paper?",
    "options": [
      "A compilation of the information security promissory letter that is presented to the audited department when the auditor implements an audit",
      "A compilation of the standards and guidelines used by the auditor for implementing an audit",
      "A document that must be disclosed along with the audit report to prove that the auditor has fulfilled his or her obligations with proper attention",
      "An execution record of the auditing procedure by an auditor, and it forms the basis of the audit opinion"
    ],
    "correctIndex": 3,
    "explanation": "## Audit Work Paper\nAn audit work paper is a document that provides a detailed record of the auditing procedures performed by an auditor, along with the evidence gathered during the audit process. These papers are essential for documenting the auditor’s work and supporting the conclusions and opinions expressed in the final audit report. They serve as the foundation of the audit opinion.\n\n### Other Answers\n- **a)** Refers to something unrelated to the audit work paper.\n- **b)** The audit work paper is not about standards and guidelines; it's about execution.\n- **c)** The work paper is confidential and not necessarily disclosed with the audit report.",
    "difficultyWeight": 1
  },
  {
    "id": "2023A_FE_AM_60",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2023,
    "questionText": "Which of the following is an appropriate description concerning a system audit team?",
    "options": [
      "For an audit of the development progress in an information systems department, the audit team consists of members of the information systems department who are familiar with the details of the development.",
      "In order to enable the person requesting the audit to issue improvement instructions on the basis of the audit report, the system audit team reports the audit results to the person requesting the audit.",
      "When an audit of the information system is performed as a part of the business operations audit, the audit team is formed by the members of the user’s department.",
      "When the system audit team accepts the help of an expert, the decisions concerning the range of support, methods, and audit results is the responsibility of the expert."
    ],
    "correctIndex": 1,
    "explanation": "## What is a System Audit Team?\nA system audit team typically consists of diverse professionals with varying skills and expertise. The team ensures comprehensive audit coverage and retains responsibility for the audit process.\n\n### Other Choices\n- **a)** Auditors should not come from the department being audited.\n- **c)** Audit independence is crucial for objectivity.\n- **d)** The audit team retains responsibility for the audit process.",
    "difficultyWeight": 1
  },
  {
    "id": "2024S_FE-A_1",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2024,
    "questionText": "What is the decimal representation of the hexadecimal number 123.4?",
    "options": [
      "83.25",
      "83.5",
      "291.25",
      "291.5"
    ],
    "correctIndex": 2,
    "explanation": "### Step 1: Convert the whole part (123) to decimal.\n\nThe hexadecimal number `123` can be expanded as:\n\n$1 \times 16^2 + 2 \times 16^1 + 3 \times 16^0$\n\n$= 1 \times 256 + 2 \times 16 + 3 \times 1$\n\n$= 256 + 32 + 3 = 291$\n\n### Step 2: Convert the fractional part (0.4) to decimal.\n\nIn hexadecimal, `4` means ( 4 \times 16^{-1} ):\n\n$4 \times \frac{1}{16} = \frac{4}{16} = 0.25$\n\n### Step 3: Add the whole and fractional parts together.\n\n$291 + 0.25 = 291.25$",
    "difficultyWeight": 1
  },
  {
    "id": "2024S_FE-A_2",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2024,
    "questionText": "Five people are sitting at a table in a restaurant. Two of them ordered coffee, and the other three ordered tea. The waiter forgets who ordered what and puts the drinks in a random order for the five persons. What is the probability that every person gets the correct drink?",
    "options": [
      "1/30",
      "1/20",
      "1/10",
      "3/10"
    ],
    "correctIndex": 2,
    "explanation": "### Step 1: List down the given\n\nGiven:\n\n5 people, 2 coffee orders, 3 tea orders\n\n### Step 2: Calculate the probability\n\nTo calculate probability, you must **divide the number of favorable events by the total number of possible events**.\n\nUsing the formula above:\n\n$P = \frac{2}{5} \times \frac{1}{4} = \frac{2}{20} = 0.1$\n\nUsing the values for tea:\n\n$P = \frac{3}{5} \times \frac{2}{4} \times \frac{1}{3} = \frac{6}{60} = \frac{1}{10} = 0.1$",
    "difficultyWeight": 1
  },
  {
    "id": "2024S_FE-A_3",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2024,
    "questionText": "The expression below is represented in postfix (reverse Polish) notation. What is the resulting value of this expression?\n\n100 5 6 2 + * 12 4 / − − 36 −",
    "options": [
      "5",
      "18",
      "21",
      "27"
    ],
    "correctIndex": 3,
    "explanation": "### Step 1: Understanding Postfix Notation\n\nIn postfix notation, the operator appears after the operands.\n\n### Step 2: Using the Stack Implementation\n\n| **String Symbols** | **Stack** |\n|--------------------|----------|\n| 100 | 100 |\n| 5 | 100 5 |\n| 6 | 100 5 6 |\n| 2 | 100 5 6 2 |\n| + | 100 5 (6+2) |\n| * | 100 (5*8) |\n| 12 | 100 (40) 12 |\n| 4 | 100 (40) 12 4 |\n| / | 100 (40) (12/4) |\n| - | 100 (40-3) |\n| - | (100-37) |\n| 36 | 63 36 |\n| - | (63-36) |\n\nThus, the answer is **27**.",
    "difficultyWeight": 1
  },
  {
    "id": "2024S_FE-A_4",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2024,
    "questionText": "Which of the following is an appropriate explanation of feedback control?",
    "options": [
      "It performs control in a predetermined order.",
      "It performs control to keep the output in line with the target value.",
      "It performs control to prevent external disturbances from affecting the output.",
      "It performs control without using the output."
    ],
    "correctIndex": 1,
    "explanation": "### Explanation\n\nFeedback Control refers to **the process of using feedback to monitor and manage the dissemination of information and the outcomes of actions taken to influence it**.",
    "difficultyWeight": 1
  },
  {
    "id": "2024S_FE-A_5",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2024,
    "questionText": "![Image](Files/Pasted%20image%2020241017115416.png)",
    "options": [
      "2, 3, 4, 7, 8, 10, 13, 15, 18",
      "2, 4, 8, 7, 3, 15, 18, 13, 10",
      "10, 3, 2, 7, 4, 8, 13, 18, 15",
      "10, 3, 13, 2, 7, 18, 4, 8, 15"
    ],
    "correctIndex": 1,
    "explanation": "### Step 1: Understanding post-order traversal\n\n**Postorder traversal** follows the Left-Right-Root policy:\n\n- Traverse the left subtree\n- Traverse the right subtree\n- Visit the root node\n ### Step 2: Traversal Process Visualized\n![File](/Files/Drawing%202024-10-17%2011.57.52.png)",
    "difficultyWeight": 1
  },
  {
    "id": "2024S_FE-A_6",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2024,
    "questionText": "![Image](Files/Pasted%20image%2020241017120324.png)",
    "options": [
      "i ≥ 2N – 1",
      "i ≥ 2N + 1",
      "x ≥ 2N – 1",
      "x ≥ 2N + 1"
    ],
    "correctIndex": 1,
    "explanation": "### Step 1: Understanding Flowchart Notation\n\n![Flowchart Legend](Files/Pasted%20image%2020241017120756.png)\n\n### Step 2: Flowchart Breakdown\n\nFrom the flowchart notation legend above, we can see that the expression meant for A is a conditional expression.\n\nNow to break down the process from the problem:\n\n- **Initialization**:\n    - The variable `x` starts at 0 (to store the sum).\n    - The variable `i` starts at 1 (the first odd integer).\n- **Loop**:\n    - The algorithm adds the current odd integer `i` to `x`.\n    - Then, `i` is incremented by 2 to move to the next odd integer.\n- **Termination Condition**:\n    - The loop should stop when we have summed up the first N odd integers.\n    - The N-th odd integer is 2N−1\n    - Therefore, the loop needs to terminate when `i` exceeds 2N−1.\n\n**Reasoning:**\n- The condition to exit the loop must check if `i` has exceeded `2N−1`.\n- The **next odd number** after `2N−1` is `2N+1`.\n- So, when `i` reaches `2N+1`, we know that the loop has summed all the necessary odd numbers and should stop.",
    "difficultyWeight": 1
  },
  {
    "id": "2024S_FE-A_7",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2024,
    "questionText": "How many swaps are required in bubble sort when N elements in the array are already sorted in reverse order?",
    "options": [
      "$N(N-1) ÷ 2$",
      "$N^2  ÷  2$",
      "$N(N-1)$",
      "$N^2$"
    ],
    "correctIndex": 0,
    "explanation": "### Step 1: Understanding the Bubble Sort Algorithm\n\nWhen the array is sorted in reverse order, every adjacent pair of elements is out of order. This means that every comparison will result in a swap.\n\n- In the first pass through the array, bubble sort will compare the first element with the second, the second with the third, and so on, until the last element. This results in `N−1` comparisons and swaps.\n- In the second pass, the largest element (which is now at the end of the array) will not be compared. Thus, there will be `N−2` comparisons and swaps.\n- This pattern continues, leading to:\n    - First pass: `N−1` swaps\n    - Second pass: `N−2` swaps\n    - Third pass: `N−3` swaps\n    - ...\n    - Last pass: `1` swap\n\nGiven this, you can compute the total number of swaps using the formula:\n\n`Total Swaps = (N−1) + (N−2) + (N−3) + … + 1`\n\nor through:\n\n`N(N-1) ÷ 2`.",
    "difficultyWeight": 1
  },
  {
    "id": "2024S_FE-A_8",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2024,
    "questionText": "What is the percentage improvement in total execution time with the 32-bit CPU compared to the 16-bit CPU?",
    "options": [
      "28.57",
      "40",
      "50",
      "71.43"
    ],
    "correctIndex": 0,
    "explanation": "### Step 1: Calculate Total Execution Times\n\n- **32-bit CPU Execution Times**:\n    - **32-bit instructions**: 1 cycle (40% of total instructions)\n    - **16-bit instructions**: 1 cycle (40% of total instructions)\n    - **8-bit instructions**: 1 cycle (20% of total instructions)\n\n    **Total Execution Time for 32-bit CPU:**\n    `T_32 = (0.4 × 1) + (0.4 × 1) + (0.2 × 1) = 1 cycle`\n\n- **16-bit CPU Execution Times**:\n    - **32-bit instructions**: 2 cycles (since it takes 2 cycles to execute a 32-bit instruction)\n    - **16-bit instructions**: 1 cycle (40% of total instructions)\n    - **8-bit instructions**: 1 cycle (20% of total instructions)\n\n    **Total Execution Time for 16-bit CPU:**\n    `T_16 = (0.4 × 2) + (0.4 × 1) + (0.2 × 1) = 1.4 cycles`\n\n### Step 2: Calculate Percentage Improvement\n\n`Percentage Improvement = ((T_16 - T_32) / T_16) × 100`\n\n`Percentage Improvement = ((1.40 - 1.00) / 1.40) × 100 = 28.57%`",
    "difficultyWeight": 1
  },
  {
    "id": "2024S_FE-A_9",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2024,
    "questionText": "What is the calculated result?\n![Image](Files/Pasted%20image%2020241017125728.png)",
    "options": [
      "21.93",
      "26.67",
      "27.92",
      "33.92"
    ],
    "correctIndex": 2,
    "explanation": "### Step 1: Calculate Rotational Latency\n\n![Rotational Latency](Files/Pasted%20image%2020241017130145.png)\n\n### Step 2: Calculate Transfer Time\n\n![Transfer Time](Files/Pasted%20image%2020241017130208.png)\n\n### Step 3: Sum Up All Components\n\n![Final Calculation](Files/Pasted%20image%2020241017130534.png)",
    "difficultyWeight": 1
  },
  {
    "id": "2024S_FE-A_10",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2024,
    "questionText": "Which of the following is the port that can theoretically connect up to 127 peripheral devices, controlled by a PC?",
    "options": [
      "Displayport",
      "HDMI",
      "SATA",
      "USB"
    ],
    "correctIndex": 3,
    "explanation": "### Explanation:\n- **USB (Universal Serial Bus)**: USB can connect multiple devices using a single port. Specifically, USB supports a topology where one USB host can manage up\nto 127 devices through the use of hubs. Each hub can connect multiple devices, effectively expanding the number of peripherals that can be connected to a single USB port.\n### Why the Others Don't Fit:\n- **DisplayPort**: Primarily used for video and audio output, it does not support connecting a large number of peripheral devices in the same way USB does.\n- **HDMI (High-Definition Multimedia Interface)**: Mainly used for transmitting video and audio from a source (like a PC) to a display (like a monitor or TV), and it does not connect multiple peripheral devices.\n- **SATA (Serial Advanced Technology Attachment)**: Used primarily for connecting storage devices such as hard drives and SSDs. It does not support multiple devices in the way that USB does.",
    "difficultyWeight": 1
  },
  {
    "id": "2024S_FE-A_11",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2024,
    "questionText": "Which of the following is the design for securing safety and reliability known as 'foolproof'?",
    "options": [
      "A redundant configuration, such as duplication, can be used so that even when a device failure occurs, the functions of the overall system are not affected.",
      "Even when the user performs an incorrect operation, a problem does not occur in the system.",
      "When a device failure occurs, damage can be minimized by enabling the system to stop safely.",
      "When a device failure occurs, the system runs even if the usable functions are restricted, and the processing efficiency is reduced."
    ],
    "correctIndex": 1,
    "explanation": "### Explanation\n\nA foolproof system is designed in such a way that even if users make mistakes or perform incorrect operations, the system prevents those errors from causing significant problems. It anticipates human errors and ensures that the system remains functional or safe despite such errors. The goal is to make the system 'error-proof' from user mistakes.\n\n**Why the Others Don't Fit:**\n- **(a)** Describes redundancy in system design, which is about reliability, not handling user mistakes.\n- **(c)** Refers to a fail-safe system, which stops safely on failure but doesn't prevent user errors.\n- **(d)** Describes a fault-tolerant system that continues running despite failure, but doesn't focus on user errors.",
    "difficultyWeight": 1
  },
  {
    "id": "2024S_FE-A_12",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2024,
    "questionText": "There is a system where the operating status is continuously monitored. Which of the following is an appropriate sequence of work items in capacity planning that is conducted when a new task is applied to the system after several years of operation?\n\n(i) Evaluate the proposed system configuration, assess its appropriateness, and conduct a review if necessary.\n\n(ii) Consider a proposal for the necessary system configuration based on the system characteristics, including factors such as the number of servers and whether parallel distributed processing is performed.\n\n(iii) Understand the performance information of the hardware or the environment inherent to the system based on the operating status of the system.\n\n(iv) Conduct a meeting with users to gather information about the new task, understand requirements such as the estimated number of processes, and determine the time required for processes.",
    "options": [
      "(iii), (ii), (iv), (i)",
      "(iii), (iv), (ii), (i)",
      "(iv), (ii), (i), (iii)",
      "(iv), (iii), (i), (ii)"
    ],
    "correctIndex": 1,
    "explanation": "### Explanation\n\nBased on the steps in capacity planning, the correct sequence follows:\n1. **Learning the system** → Check performance of the system (iii).\n2. **Learning the problem** → Gather task-related requirements (iv).\n3. **Making a solution** → Propose system configuration (ii).\n4. **Evaluating performance** → Assess appropriateness of configuration (i).\n\nThis eliminates choices (c) and (d) as they begin with gathering task-related information before checking system performance. Choice (a) is also eliminated as it skips gathering task requirements before making a solution.",
    "difficultyWeight": 1
  },
  {
    "id": "2024S_FE-A_13",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2024,
    "questionText": "An operating system adopts the priority scheduling algorithm for scheduling processes. There are five processes A, B, C, D, and E arriving at the same time with estimated running times of 10, 6, 2, 4, and 8 milliseconds, respectively. Their priorities are 3, 5, 2, 1, and 4, where 1 is the highest priority. What is the mean process turnaround time?",
    "options": [
      "14",
      "16",
      "20",
      "22"
    ],
    "correctIndex": 1,
    "explanation": "### Explanation\n\nPriority scheduling executes processes based on priority, where lower numbers have higher priority.\n\n**Turnaround time** = Completion time - Arrival time\n\n| Process | Running time | Priority | Turnaround Time |\n|---------|-------------|----------|----------------|\n| D       | 4           | 1        | 4              |\n| C       | 2           | 2        | 6              |\n| A       | 10          | 3        | 16             |\n| E       | 8           | 4        | 24             |\n| B       | 6           | 5        | 30             |\n\nTotal turnaround time = 80, Mean turnaround time = 80/5 = **16ms**.",
    "difficultyWeight": 1
  },
  {
    "id": "2024S_FE-A_14",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2024,
    "questionText": "![Image](Files/Pasted%20image%2020241017140423.png)",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correctIndex": 3,
    "explanation": "### Explanation\n\nBuffer is a temporary storage for data transfer. To avoid buffer overflow, \nL (buffer size) must be greater than or equal to the accumulated data in the buffer:\n\nL ≧ (S − R) × T\n\n- (S − R) represents the difference between the sending and receiving speeds.\n- T represents time, determining how much data accumulates in the buffer.",
    "difficultyWeight": 1
  },
  {
    "id": "2024S_FE-A_15",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2024,
    "questionText": "Which of the following is the appropriate explanation of ideal hashing used during a data search?",
    "options": [
      "It is advanced search technology that determines the intention of a user’s search request by adding recognition and decision functions to an object that combines data and its processing.",
      "It is data search technology that is fast and highly scalable, in which values converted from data with a specific algorithm are used for storage addresses of the data.",
      "It is technology and techniques for searching a large volume of accumulated data to identify trends, correlations, patterns, and other information required for management and marketing.",
      "It is technology created with the aim of increasing the hit ratio for keyword searches and preventing omissions in searches by using a list of synonyms and equivalent words."
    ],
    "correctIndex": 1,
    "explanation": "### Explanation\n\n**Hashing** is a fast data retrieval technique that converts input into a hash value used as an index in a hash table.\n\n- **(a)** Describes AI-based search intent recognition, unrelated to hashing.\n- **(c)** Refers to data mining, which finds patterns in large datasets, unlike hashing.\n- **(d)** Describes synonym-based search optimization, unrelated to hashing.\n\nHashing focuses on efficiently storing and retrieving data.",
    "difficultyWeight": 1
  },
  {
    "id": "2024S_FE-A_16",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2024,
    "questionText": "![Image](Files/Pasted%20image%2020241017225445.png)",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correctIndex": 3,
    "explanation": "The original circuit consists of:\n\n1. x and y are inputs to a NAND gate. The output of the NAND gate is ​x y, which is the inversion of the AND operation.\n\n2. z goes through a NOT gate before being input to the OR gate. So the value entering the OR gate from z is ​z.\n\n3. The final output function comes from the OR gate, which takes ​x y​ (from the NAND gate) and ​z (from the NOT gate).\n\nThus, the Boolean expression for the original circuit is:\n\nf(x, y, z) = x y + z\n\nNow, take note of these equivalences in circuits:\n\n![Image](Files/Pasted%20image%2020241017225550.png)\n\nThe original circuit is just like this one\n\n![Image](Files/Pasted%20image%2020241017225550.png)\n\nAnd based on the photo, that circuit is just equivalent to this\n\n![Image](Files/Pasted%20image%2020241017225550.png)\n\nAmong the given choices from above, letter D is the right answer as it outputs the same boolean expression as the original circuit which was:\n\nf(x, y, z) = x y + z",
    "difficultyWeight": 1
  },
  {
    "id": "2024S_FE-A_17",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2024,
    "questionText": "In the process of creating animation, which of the following is used to record the natural movement of objects, humans, and animals by using sensors and video cameras?",
    "options": [
      "Key frame method",
      "Morphing",
      "Motion capture",
      "Pixel shader"
    ],
    "correctIndex": 2,
    "explanation": "Motion capture (often abbreviated as \"mocap\") is a technique used in animation and visual effects to record the natural movement of objects, humans, and animals. It involves placing sensors on the subject's body, which capture the movement in real-time. These movements are then used to animate digital characters or objects. Video cameras and sensors are integral to the motion capture process, translating physical actions into digital animations.",
    "difficultyWeight": 1
  },
  {
    "id": "2024S_FE-A_18",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2024,
    "questionText": "Which of the following is a critical step in creating a relational database?",
    "options": [
      "Building a network diagram",
      "Creating entity-relationship diagrams",
      "Designing a flowchart",
      "Programming in C++"
    ],
    "correctIndex": 1,
    "explanation": "Creating entity-relationship diagrams are essential before making a relational database because they define the relationships between entities (tables) in your database. By having a clear visual representation of these relationships, creating the relational database becomes easier.",
    "difficultyWeight": 1
  },
  {
    "id": "2024S_FE-A_19",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2024,
    "questionText": "![Image](Files/Pasted%20image%2020241017231644.png)",
    "options": [
      "A department has many employees, and employees can have multiple dependents.",
      "A department has many employees, where each employee has exactly one dependent.",
      "An employee can have at most one dependent.",
      "An employee can work in two departments."
    ],
    "correctIndex": 0,
    "explanation": "The diagram shows three entities: **Department**, **Employee**, and **Dependent**.\n\nThere is an arrow from **Department** to **Employee**, which suggests a relationship between departments and employees, typically indicating that each department can have multiple employees.\n\nThe arrow from **Employee** to **Dependent** suggests that an employee can have multiple dependents.\n\n**Option A** correctly interprets the E-R model by stating that a department can have many employees, and employees can have multiple dependents, which aligns with the structure shown in the diagram.The other options do not fully capture these relationships:\n\n- **b)** suggests each employee has exactly one dependent, which is incorrect based on the diagram's \"many\" relationship.\n- **c)** incorrectly limits employees to at most one dependent.\n- **d)** does not relate to the diagram, as it introduces a relationship where an employee can work in two departments, which is not shown in the model.",
    "difficultyWeight": 1
  },
  {
    "id": "2024S_FE-A_20",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2024,
    "questionText": "![Image](Files/Pasted%20image%2020241017232054.png)",
    "options": [
      "CatalogID, Price, SpecialPrice",
      "CatalogID, ProductID, Price, SpecialPrice",
      "Price, Special Price",
      "ProductID, Price, SpecialPrice"
    ],
    "correctIndex": 1,
    "explanation": "\n\nSince the fields of Price and SpecialPrice are already given, what needs to be determined are the remaining fields that can be inferred from the ERD.\n\nFrom the figure, we can see that there is an optional many relationship between Catalog and CatalogProduct and between ProductItem and CatalogProduct. In a relational database, the practice for defining a relationship between tables is through a foreign key, which can be mapped to the adjacent table.With this information, we can deduce that the CatalogProduct table should have the fields of CatalogID and ProductID as these can be mapped to the primary keys of the ProductItem and Catalog tables. These serve as the foreign keys in the CatalogProduct table that can be used to form a relationship with the adjacent tables.",
    "difficultyWeight": 1
  },
  {
    "id": "2024S_FE-A_21",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2024,
    "questionText": "![Image](Files/Pasted%20image%2020241018093758.png)",
    "options": [
      "GROUP BY Class, AverageScore ORDER BY Class, Subject",
      "GROUP BY Class, Subject ORDER BY Class, AVG(Score)",
      "GROUP BY Class, Subject ORDER BY Class, Subject",
      "GROUP BY Class, Subject, StudentNumber ORDER BY Class, Subject, AverageScore"
    ],
    "correctIndex": 2,
    "explanation": "The correct answer is **c) GROUP BY Class, Subject ORDER BY Class, Subject** because it fits the logical structure and intent of the SQL query.\n\n- The SQL query intends to calculate the average score for each **Class** and **Subject** combination. To do this, you need to group the data by these two fields.\n- After calculating the averages, the result should be ordered by **Class** and **Subject**, as specified in the query prompt.\n\n### Why the Others Won't Fit\n\n**a) GROUP BY Class, AverageScore ORDER BY Class, Subject**:\n- This is incorrect because **AverageScore** is an alias for the aggregated result (`AVG(Score)`), not a column in the original table. You cannot group by a calculated aggregate like **AverageScore**. SQL requires grouping by fields that are not aggregate functions (such as **Class** and **Subject**).\n\n**b) GROUP BY Class, Subject ORDER BY Class, AVG(Score)**:\n- Although the grouping part is correct, the **ORDER BY AVG(Score)** is problematic. You cannot order by an aggregate function in this context, since the prompt asks for ordering by **Class** and **Subject** (not by the average score). Ordering by **Class** and **Subject** is more logical when sorting the data.\n\n**d) GROUP BY Class, Subject, StudentNumber ORDER BY Class, Subject, AverageScore**:\n- This is incorrect because adding **StudentNumber** in the **GROUP BY** clause would break the purpose of averaging scores by **Class** and **Subject**. By grouping by **StudentNumber**, you would create a group for each student, effectively preventing the `AVG(Score)` from being calculated per **Class** and **Subject**.\n- Additionally, the **ORDER BY AverageScore** is not what the prompt asks for—it requires ordering by **Class** and **Subject**.",
    "difficultyWeight": 1
  },
  {
    "id": "2024S_FE-A_22",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2024,
    "questionText": "Which of the following can change the deadlock state of the transaction back to the normal state?",
    "options": [
      "Commit",
      "Drop",
      "Rollback",
      "Roll Forward"
    ],
    "correctIndex": 2,
    "explanation": "A **deadlock** occurs when two or more transactions are waiting for each other to release resources, and none of them can proceed. To resolve a deadlock, the system must break the cycle of waiting by aborting one or more transactions involved in the deadlock.\n\n- **Rollback** refers to aborting a transaction and undoing any changes it has made. When a transaction involved in a deadlock is rolled back, it releases the resources it was holding, allowing the other transactions to proceed. This effectively resolves the deadlock and returns the system to a normal state.\n\n### Why the Others Won't Fit\n\n**a) Commit**:\n- A **commit** finalizes all changes made by a transaction and permanently saves them to the database. However, in the case of a deadlock, committing is not possible because the transaction is waiting for a resource held by another transaction. Thus, **commit** cannot resolve a deadlock.\n\n**b) Drop**:\n- **Drop** is a command that removes a database object (like a table, index, or view) entirely. It is unrelated to resolving a deadlock situation in transactions. Dropping an object won’t free up resources involved in the deadlock, so this option is incorrect.\n\n**d) Roll Forward**:\n- **Roll Forward** is typically used during recovery after a failure, where committed transactions are applied to the database to bring it to a consistent state. This does not resolve a deadlock because it is related to restoring the database state after a crash, not resolving transactional conflicts.",
    "difficultyWeight": 1
  },
  {
    "id": "2024S_FE-A_23",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2024,
    "questionText": "Which of the following is the network device that makes a forwarding decision on the basis of the destination MAC address in the frame header?",
    "options": [
      "Patch cable",
      "Repeater hub",
      "Router",
      "Switching hub"
    ],
    "correctIndex": 3,
    "explanation": "A **switching hub** (commonly referred to as a **switch**) is a network device that operates at the **data link layer** (Layer 2) of the OSI model. It makes forwarding decisions based on the **destination MAC address** contained in the frame header. When a frame arrives at the switch, the switch examines the MAC address of the destination device and forwards the frame only to the specific port associated with that address, reducing network congestion and improving performance.\n\n### Why the Others Won't Fit\n\n**a) Patch cable**:\n- A **patch cable** is simply a physical medium, typically a twisted pair or fiber optic cable, used to connect devices to a switch, hub, router, or other network components. It does not make any forwarding decisions or interact with MAC addresses. Thus, this is not a network device.\n\n**b) Repeater hub**:\n- A **repeater hub** operates at the **physical layer** (Layer 1) of the OSI model. It does not examine or use MAC addresses. Instead, it broadcasts incoming data to all ports without distinguishing between devices, which results in higher network traffic and collisions. Since it does not make forwarding decisions based on the MAC address, this option is incorrect.\n\n**c) Router**:\n- A **router** operates at the **network layer** (Layer 3) of the OSI model and makes forwarding decisions based on **IP addresses**, not MAC addresses. It routes packets between different networks by examining the destination IP address. While routers play a key role in networking, they do not make forwarding decisions based on MAC addresses, so this option is incorrect.",
    "difficultyWeight": 1
  },
  {
    "id": "2024S_FE-A_24",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2024,
    "questionText": "Which of the following is the broadcast address of the network 192.168.10.0/23?",
    "options": [
      "192.168.10.0",
      "192.168.10.255",
      "192.168.10.511",
      "192.168.11.255"
    ],
    "correctIndex": 3,
    "explanation": "The IP address **192.168.10.0/23** uses a **/23** subnet mask, which means the subnet mask is **255.255.254.0**. This gives the network a range that spans **2 consecutive Class C subnets** (a total of 512 IP addresses). A /23 subnet has **9 host bits**, which allows for 512 IP addresses (2^9 = 512), including network and broadcast addresses.\n\nCalculating the range:\n\n- **192.168.10.0/23** starts at **192.168.10.0** (the network address).\n- The last address in this range is the **broadcast address**. Since a /23 subnet spans 512 addresses, the network range includes addresses from **192.168.10.0** to **192.168.11.255**.\n\n Breakdown of the addresses:\n\n- The **network address** (first address in the range) is **192.168.10.0**.\n- The **last usable address** (the broadcast address) in this range is **192.168.11.255**, which is used to broadcast to all hosts within the network.\n\n### Why the Others Won't Fit\n\n- **a) 192.168.10.0**: This is the **network address**, not the broadcast address. It identifies the network itself and cannot be used as a broadcast address.\n- **b) 192.168.10.255**: This would be the broadcast address for a **/24** subnet (with subnet mask 255.255.255.0), but since we are dealing with a **/23** subnet, the broadcast address covers both 192.168.10.x and 192.168.11.x, making **192.168.11.255** the broadcast address.\n- **c) 192.168.10.511**: This is not a valid address because the maximum possible address in this range would be **192.168.11.255**.",
    "difficultyWeight": 1
  },
  {
    "id": "2024S_FE-A_25",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2024,
    "questionText": "Which of the following is the name of a communication standard that is used in mobile phone networks and has the three characteristics described below?\n\n(1) All communications are processed with a packet switching scheme.\n\n(2) It is possible to use a communication scheme called MIMO that uses multiple antennas.\n\n(3) It has been standardized in the international standardization project 3GPP (3rd Generation Partnership Project).",
    "options": [
      "LTE (Long Term Evolution)",
      "MAC (Media Access Control)",
      "MDM (Mobile Device Management)",
      "VoIP (Voice over Internet Protocol)"
    ],
    "correctIndex": 0,
    "explanation": "**LTE (Long Term Evolution)** is a communication standard used in mobile phone networks that meets all three of the characteristics described:\n\n1. **Packet switching scheme**: LTE uses packet-switched communication for data transfer, which is different from older circuit-switched networks used for voice calls. This allows for more efficient use of network resources, especially for data transmission.\n\n2. **MIMO (Multiple Input Multiple Output)**: LTE supports **MIMO**, a technology that uses multiple antennas at both the transmitter and receiver to improve communication performance. MIMO enhances data throughput and signal reliability, which is a key feature in LTE networks.\n\n3. **Standardized by 3GPP**: LTE has been standardized by the **3rd Generation Partnership Project (3GPP)**, which is a global collaboration between telecommunications organizations that work on mobile telecommunication standards like LTE and 5G.\n\n### Why the Others Won't Fit\n\n**b) MAC (Media Access Control)**:\n- **Media Access Control (MAC)** is a protocol used to control how devices access and transmit data over a network, typically in wired or wireless LANs. It is not specific to mobile networks and does not meet the criteria of being a mobile communication standard that supports MIMO or packet switching in mobile networks.\n\n**c) MDM (Mobile Device Management)**:\n- **Mobile Device Management (MDM)** refers to software solutions used by organizations to manage and secure mobile devices like smartphones and tablets. It has nothing to do with mobile network communication standards and does not involve packet switching or MIMO technology.\n\n**d) VoIP (Voice over Internet Protocol)**:\n- **VoIP** is a technology used to deliver voice communications over IP networks (like the internet), but it is not a mobile network communication standard. While VoIP uses packet switching for voice data, it is not standardized by 3GPP, nor does it typically support MIMO technology.",
    "difficultyWeight": 1
  },
  {
    "id": "2024S_FE-A_26",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2024,
    "questionText": "Which of the following is the network utility that is used to check detailed TCP connection information of the host?",
    "options": [
      "arp",
      "ipconfig",
      "netstat",
      "ping"
    ],
    "correctIndex": 2,
    "explanation": "Netstat (network statistics) is a command-line network utility used to display detailed information about TCP (and other protocol) connections on the host machine. It provides information such as:\n\n- Active TCP and UDP connections.\n- Listening ports.\n- Routing tables.\n- Network interface statistics.\n\nNetstat is particularly useful for troubleshooting network issues and checking the status of connections, including which ports are being used and which connections are established or waiting.\n\n### Why the Others Won't Fit\n\n**a) arp (Address Resolution Protocol)**:\n\n- The arp command is used to view and manage the ARP table, which maps IP addresses to MAC addresses. It is not used to check TCP connection information.\n\n**b) ipconfig**:\n\n- ipconfig is a utility that displays network interface configurations on Windows systems, such as IP addresses, subnet masks, and default gateways. It does not provide information about TCP connections.\n\n**d) ping**:\n\n- Ping is used to test the reachability of a host on an IP network. It sends ICMP echo request packets and measures the time it takes to receive a reply, but it does not provide information about TCP connections.",
    "difficultyWeight": 1
  },
  {
    "id": "2024S_FE-A_27",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2024,
    "questionText": "Which of the following describes a brute force attack aimed at finding the key of symmetric encryption?",
    "options": [
      "Finding the key by observing the ciphertext change when the plaintext is altered by a certain amount",
      "Finding the key by testing all key combinations sequentially when a set of plaintext and ciphertext is given",
      "Finding the key by using the algebraic expression representing the relationship between the plaintext, ciphertext, and key as a clue",
      "Finding the key by using the statistical correlation between a part of the information of the plaintext and part of the information of the ciphertext as a clue"
    ],
    "correctIndex": 1,
    "explanation": "This describes a brute force attack because it involves systematically trying every possible key until the correct one is found. In symmetric encryption, the attacker doesn’t know the key, so the goal is to try every possible combination to decrypt the ciphertext.",
    "difficultyWeight": 1
  },
  {
    "id": "2024S_FE-A_28",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2024,
    "questionText": "Which of the following is a package of unauthorized programs and tools that has functions such as creating a backdoor on a server and hiding the evidence of intrusion inside the server?",
    "options": [
      "RFID",
      "Rootkit",
      "TKIP",
      "Web beacon"
    ],
    "correctIndex": 1,
    "explanation": "A rootkit is a collection of malicious programs and tools designed to allow unauthorized access to a computer system while concealing its presence. It typically has the following characteristics:\n\n- Backdoor creation: Rootkits often include a backdoor that enables an attacker to remotely access the compromised system without the user’s knowledge.\n- Hiding evidence: Rootkits are designed to hide their existence and any traces of intrusion, such as logs or processes, making it difficult for the system owner to detect the attack.\n- Stealth and persistence: Rootkits operate in stealth mode and can sometimes survive system reboots or even reinstallations of the operating system.\n\n### Why the Others Won't Fit\n\n**a) RFID (Radio Frequency Identification)**:\n\n- RFID is a technology used for wireless communication between a reader and a tag using radio waves. It is used for identification and tracking of objects (e.g., in supply chains, passports), not for creating backdoors or hiding evidence of intrusions.\n\n**c) TKIP (Temporal Key Integrity Protocol)**:\n\n- TKIP is an encryption protocol used to secure wireless networks, particularly in older Wi-Fi security standards like WPA. It is unrelated to malicious software or tools for hiding evidence of intrusion.\n\n**d) Web beacon**:\n\n- A web beacon is a small, often invisible image file or script embedded in a web page or email, used to track user activity, such as whether an email was opened or a webpage was visited. It is primarily a tracking tool and does not involve creating backdoors or hiding evidence of intrusions.",
    "difficultyWeight": 1
  },
  {
    "id": "2024S_FE-A_29",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2024,
    "questionText": "Which of the following is a public-key cryptography algorithm whose security depends on the difficulty of factoring extremely large numbers into primes?",
    "options": [
      "AES",
      "DH",
      "DSA",
      "RSA"
    ],
    "correctIndex": 3,
    "explanation": "RSA (Rivest-Shamir-Adleman) is a widely used public-key cryptography algorithm that relies on the mathematical challenge of factoring large numbers into their prime factors. The security of RSA is based on the fact that while multiplying two large prime numbers is computationally simple, factoring their product back into the original primes is extremely difficult, especially when the numbers are very large. This is known as the integer factorization problem, and it is the foundation of RSA's encryption and key exchange mechanisms.\n\n### Why the Others Won't Fit\n\n**a) AES (Advanced Encryption Standard)**:\n\n- AES is a symmetric encryption algorithm, meaning the same key is used for both encryption and decryption. AES relies on complex mathematical transformations for security, but it does not depend on the difficulty of factoring large numbers.\n\n**b) DH (Diffie-Hellman)**:\n\n- Diffie-Hellman is a key exchange protocol that allows two parties to securely exchange cryptographic keys over a public channel. Its security relies on the difficulty of solving the discrete logarithm problem, not on factoring large numbers.\n\n**c) DSA (Digital Signature Algorithm)**:\n\n- DSA is a digital signature algorithm used for verifying the authenticity and integrity of a message. Its security is based on the discrete logarithm problem, not on factoring large numbers into primes.",
    "difficultyWeight": 1
  },
  {
    "id": "2024S_FE-A_30",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2024,
    "questionText": "Which of the following is the name of an attack where manipulation is employed to place a malicious website near the top of the search results on a search engine?",
    "options": [
      "Cross-site scripting",
      "DNS cache poisoning",
      "SEO poisoning",
      "Social engineering"
    ],
    "correctIndex": 2,
    "explanation": "SEO poisoning (Search Engine Optimization poisoning) is a type of attack where malicious actors manipulate search engine algorithms to rank malicious websites highly in search results. The goal is to lure users into visiting these harmful sites by making them appear relevant or popular. Once users visit the compromised sites, they may be exposed to malware, phishing attacks, or other malicious activities.\n\n### Why the Others Won't Fit\n\n**a) Cross-site scripting (XSS)**:\n\n- Cross-site scripting is an attack where an attacker injects malicious scripts into web pages viewed by other users. It exploits vulnerabilities in websites but does not involve manipulating search engine rankings.\n\n**b) DNS cache poisoning**:\n\n- DNS cache poisoning is an attack that corrupts the DNS cache, causing users to be redirected to malicious sites when they try to access legitimate domains. This attack targets DNS servers, not search engine results.\n\n**d) Social engineering**:\n\n- Social engineering is the manipulation of individuals to obtain confidential information or gain unauthorized access. It typically involves human interaction, such as phishing or pretexting, and does not involve search engine manipulation.",
    "difficultyWeight": 1
  },
  {
    "id": "2024S_FE-A-31",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2024,
    "questionText": "Which of the following is an explanation of the timestamp service in information security?",
    "options": [
      "It is a service that authenticates biometric information, such as fingerprints, voice prints, vein patterns, retina, and iris, by using the date and time when the information is registered in the authentication system.",
      "It is a service that certifies that electronic data certainly exists on a particular date and time and that the data has not been modified since that date and time.",
      "It is a service that securely verifies that the date and time information is not falsified midway for setting the clocks of the PCs and servers on the network.",
      "It is a web service that securely displays the global date and time information used in official records by using encrypted communication."
    ],
    "correctIndex": 1,
    "explanation": "A timestamp is the current time of an event that a computer records.\n\nTimestamp Service\n\nIt's a service that checks if a timestamp has been modified or not.\n\n[What is a timestamp?](https://www.techtarget.com/whatis/definition/timestamp)",
    "difficultyWeight": 1
  },
  {
    "id": "2024S_FE-A-32",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2024,
    "questionText": "Which of the following is an appropriate term for an organized and highly skilled team whose mission is to continuously monitor and improve an organization’s security posture while preventing, detecting, analyzing, and responding to cybersecurity incidents, utilizing both technology and well-defined processes and procedures?",
    "options": [
      "Cybersecurity",
      "Incident Management Center (IMC)",
      "Network Operations Center (NOC)",
      "Security Operations Center (SOC)"
    ],
    "correctIndex": 3,
    "explanation": "Cybersecurity\n\nThis is not a team\n\nIncident Management Center (IMC)\n\nThis is to restore normal service operation ASAP, not preventing, analyzing and etc.\n\nNetwork Operations Center (NOC)\n\nThey have a centralized location to monitor the infrastructure 24/7. It is the first line of defense when anything fails.\n\nSecurity Operations Center (SOC)\n\nIt's a centralized function where people continuously monitor, and improve security while preventing any threats.",
    "difficultyWeight": 1
  },
  {
    "id": "2024S_FE-A-33",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2024,
    "questionText": "In an OS where permissions for reading, writing, or executing a file can be independently set as attributes of the file, one bit is allocated for each of these three (3) permissions to determine whether they are allowed or not. When these three bits are configured using an octal value from 0 through 7, the trial results below are obtained. Which of the following is an appropriate trial result?\n\n(1) When 0 is set, reading, writing, and execution can no longer be performed.\n\n(2) When 3 is set, reading and writing can be performed, but execution cannot.\n\n(3) When 7 is set, reading, writing, and execution can be performed.",
    "options": [
      "When 2 is set, reading and execution can be performed.",
      "When 4 is set, only execution can be performed.",
      "When 5 is set, only writing can be performed.",
      "When 6 is set, reading and writing can be performed."
    ],
    "correctIndex": 1,
    "explanation": "![Image](Files/Pasted%20image%2020241017142304.png)",
    "difficultyWeight": 1
  },
  {
    "id": "2024S_FE-A-34",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2024,
    "questionText": "Which of the following are components of a UML2.x (including 2.0 and later versions) state diagram?",
    "options": [
      "Message and Activity",
      "Message and Transition",
      "State and Message",
      "State and Transition"
    ],
    "correctIndex": 3,
    "explanation": "What is UML (Unified Modeling Language)?\n\nUsed to model non-software systems used for the military. Basically like a flowchart and the first version only has 9 diagrams.\n\nUML2\n\nUpdated version and is more powerful and has more diagrams, etc.\n\nState Diagrams\n\n![Image](Files/Pasted%20image%2020241017143653.png)\n\nState and Transition\n\n- The state is the box. If a condition is satisfied, it runs inside.\n- Transitions are the arrows that connects 2 messages together.\n\nA transition may have a trigger, a guard and an effect.\n\n- **Trigger** is the cause of the transition\n- **Guard** is a condition for the trigger to cause its transition\n- **Effect** is behavior that happens when the transition is triggered\n\n![Image](Files/Pasted%20image%2020241017144718.png)\n\nIf nothing sticked, just remember that you're a solider in the military.\n\n**State 1** - You're safe\n\n**Trigger** - Enemy combatant threw a grenade at you\n**Guard** - Holy crap gotta do something\n**Effect** - Throw it back to him\n\n**State 2** - Ez win\n\n**You need a State and a Transition.**",
    "difficultyWeight": 1
  },
  {
    "id": "2024S_FE-A-35",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2024,
    "questionText": "Which of the following represents the appropriate combination of a class and an object in Object Oriented Programming?\n![Image](Files/Pasted%20image%2020241017224508.png)",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correctIndex": 0,
    "explanation": "Class vs Objects\n\n![Image](Files/Pasted%20image%2020241017224949.png)A **Class** is a blueprint for creating objects.\n\nAn **Instance** is a specific object from a class.",
    "difficultyWeight": 1
  },
  {
    "id": "2024S_FE-A-36",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2024,
    "questionText": "Which of the following is the most appropriate description of polymorphism in object-oriented design?",
    "options": [
      "It allows developers to define classes incrementally by reusing classes defined previously as the basis for new classes.",
      "It allows the analyst to focus on the important dimensions while ignoring nonessential dimensions.",
      "It combines processes and data into a single object.",
      "It is the provision of a single interface to entities of different types."
    ],
    "correctIndex": 3,
    "explanation": "What is Polymorphism?\n\nIn short it means \"having multiple forms\"\n\n![Image](Files/Pasted%20image%2020241017232033.png)\n\nYou can think of a person as a father, a husband, an employee. The same person has multiple behaviors, that's **polymorphism.**",
    "difficultyWeight": 1
  },
  {
    "id": "2024S_FE-A-37",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2024,
    "questionText": "There is a program module that is executed only when the integer value of integer x is 25 ≤ 𝑥 < 50. When testing this module using boundary value analysis, which of the following is an appropriate combination of values to be tested?\n\n",
    "options": [
      "24, 25, 49, 50",
      "24, 25, 50, 51",
      "25, 26, 49, 50",
      "25, 26, 50, 51"
    ],
    "correctIndex": 0,
    "explanation": "What is Boundary Value Analysis?\n\nIt's like testing for edge cases where the system might become broken.\nThis kind of testing is seeing if the value goes out of bounds or not.\n\nFrom the example, the range is **25 to 49**.\n\nAnything inside the range is valid.\n26 is valid.\n27 is valid.\n36 is valid.\n47 is valid.\n\nAnything outside is invalid\n24 is invalid.\n99 is invalid.\n\nWhy is b not the answer?\n\n**b) 24, 25, 50, 51**\n\n- Starting with 24, it's invalid.\n- 25 is valid, so we have our starting range.\n- 50 is invalid, soooo where does our range end? We don't know. It could be 49, 48, 34? Who knows?\n\nSimilar to other options, we lack information to make our range, so the answer is **a.) 24, 25, 49, 50**",
    "difficultyWeight": 1
  },
  {
    "id": "2024S_FE-A_38",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2024,
    "questionText": "Which of the following is an appropriate testing type to ensure that the interfaces and linkages between different parts of programs work properly?",
    "options": [
      "Acceptance test",
      "Integration test",
      "Qualification test",
      "Unit test"
    ],
    "correctIndex": 1,
    "explanation": "Acceptance Test\n\nIt ensures it meets business requirements and user needs before the application gets released.\n\nIntegration Test\n\nVerifying modules and interfaces work together.\nSo, for in a **Banking App** the fund transfers and transaction modules should work smoothly together.\n\nQualification Test\n\nIt ensures that the application meets its standards and requirements before it gets released.\n\nUnit Test\n\nIt involves testing whether each component works.\nSo the answer is **Integration Test**",
    "difficultyWeight": 1
  },
  {
    "id": "2024S_FE-A_39",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2024,
    "questionText": "Which of the following is an explanation of the reverse engineering of software?",
    "options": [
      "The entire software is reconstructed after the existing software is analyzed and understood.",
      "The existing software is analyzed, and its specification and structure are clarified.",
      "The internal structure of the software is changed without any change to the externally observed behavior.",
      "The source code is automatically generated from the design information by a development support tool."
    ],
    "correctIndex": 1,
    "explanation": "What is Reverse Engineering?\n\nYou see an amazing website, and you're thinking to yourself. \"Wow, how can I build this exquisite looking website?\"\n\n***Reverse Engineering***\n\nYou try to understand what technologies were used, frameworks, etc.\n\nIf you're given a complete Lego house, try to see what blocks were used, which colors were placed, and where they're placed. This should give you an idea on how it was made.\n\nIt can't be **a)** if you're wondering because we're not going to reconstruct it again.",
    "difficultyWeight": 1
  },
  {
    "id": "2024S_FE-A_40",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2024,
    "questionText": "Which of the following is the appropriate order of the six phases in the SDLC (Software Development Life Cycle) model?",
    "options": [
      "Requirements Analysis -> Design -> Programming -> Deployment -> Testing -> Maintenance",
      "Requirements Analysis -> Design -> Programming -> Testing -> Deployment -> Maintenance",
      "Requirements Analysis -> Design -> Programming -> Testing -> Maintenance -> Deployment",
      "Requirements Analysis -> Programming -> Testing -> Design -> Maintenance -> Deployment"
    ],
    "correctIndex": 1,
    "explanation": "What is this SDLC Model?\n\nVery self explanatory, it's how a software gets developed and what processes you'll do along the way.\n\n1.) you'll need the requirements\n\n2.) Then, you'll need the outline of the software, not program right away, so **d.** is out of the question\n\n3.) Once you have the design (Figma) you can now program yay.\n\n4.) After that you don't deploy. Big no no, you'll have to test it first.\n\n5.) Once everything passes, you can deploy it.\n\n6.) After deploying, you'll just have to maintain it and keep on a look out for future issues.",
    "difficultyWeight": 1
  },
  {
    "id": "2024S_FE-A_41",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2024,
    "questionText": "The activities and milestones of a project are shown in the arrow diagram below. Which of the following is an appropriate description of the project if the duration of activity B is increased by 5 days?\n![Image](Files/Pasted%20image%2020241018212653.png)",
    "options": [
      "The earliest start time of activity G is delayed by 5 days.",
      "The latest start time of activity F is delayed by 5 days.",
      "The project’s minimum completion time does not change.",
      "The project’s minimum completion time is increased by 5 days."
    ],
    "correctIndex": 2,
    "explanation": "### Identify Paths\n\n**First Path:** A -> B -> F -> H\n\n**Second Path:** C -> D -> G -> H\n\n**Third Path:** A -> B -> E -> G -> H\n\n\n### Add All the Days\n\n**First Path:** 10 + 5 + 20 + 15 = 50 days\n\n**Second Path:** 10 + 25 + 15 + 15 = 65 days\n\n**Third Path:** 10 + 5 + 10 + 15 + 15 = 55 days\n\n\n### Add +5 days to Activity B\n**First Path:** 10 + 10 + 20 + 15 = 55 days\n\n**Second Path:** 10 + 25 + 15 + 15 = 65 days\n\n**Third Path:** 10 + 10 + 10 + 15 + 15 = 60 days\n\n\nSo, what can we conclude from this?\n\nBoth the 1st and 3rd path increased by 5 days, but the 2nd path remained the same.\nNo matter how short the other path are, the 2nd path will always be the minimum completion time since it's the longest.\n\n\nJust like in a group work, if you finished your part, but your other group members didn't do it yet, the project is still ongoing. The project will only be finished once everyone finished their parts.",
    "difficultyWeight": 1
  },
  {
    "id": "2024S_FE-A_42",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2024,
    "questionText": "What is the Cost Performance Index (CPI) of the project under the conditions listed below?\n![Image](Files/Pasted%20image%2020241018222309.png)",
    "options": [
      "0.25",
      "0.8",
      "1.0",
      "1.25"
    ],
    "correctIndex": 3,
    "explanation": "### What is a Cost Performance Index (CPI)\nWhen doing projects, it costs money. So you'll need to budget your finds wisely.\nCPI helps track how much this thing costs, or that thing costs and increases the overall chance for a project to be completed within budget.\n\n**Formula for Earned Value = Percent of Work Complete x Project Budget**\n**Formula for CPI = Earned Value / Actual Cost**\n\n**Earned Value** is basically how much work you've done based on the total project duration.\n\nSo far, 1 month has passed by and the duration of the project is 4 months, so we're 25% complete.\nPut that in the **Earned Value** formula and we'll get 25,000.\n\nNow we can get the CPI, so input those numbers in the formula and we'll get 1.25.",
    "difficultyWeight": 1
  },
  {
    "id": "2024S_FE-A_43",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2024,
    "questionText": "In ITIL 2011 edition, which of the following is the appropriate order for the service lifecycle stages?",
    "options": [
      "Service design -> Continual service improvement -> Service strategy -> Service operation -> Service transition",
      "Service design -> Service strategy -> Service operation -> Service transition -> Continual service improvement",
      "Service strategy -> Service design -> Service operation -> Service transition -> Continual service improvement",
      "Service strategy -> Service design -> Service transition -> Service operation -> Continual service improvement"
    ],
    "correctIndex": 3,
    "explanation": "### What is an ITIL?\nIt stands for **Information Technology Infrastructure Library**\n\nso from the name alone it's all about IT, and it has libraries/frameworks which is exactly what it is.\n\nITIL is like a guide for you to follow a process which doesn't necessarily have to be technology specific. These include processes, checklists, etc.\n\n1) First, by just using common sense you need strategy first (the overall plan) before doing anything, so with that you've eliminated half of the options.\n2) Next, you'll need design.\n3) Next is transition. This is moving new services into a live environment. Basically going from development to production.\n4) Next is operation. This is more like `maintenance` from the other management strategies. This is where you'll maintain, handle errors, and overall manage.\n5) Lastly, you have the Continual Service Improvement. This is where you'll identify areas of improvement and how you can optimize your servers and costs.",
    "difficultyWeight": 1
  },
  {
    "id": "2024S_FE-A_44",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2024,
    "questionText": "In IT service management, which of the following is an activity performed for the management of incidents and service requests?",
    "options": [
      "Evaluating if customer satisfaction with the service desk meets the agreed service targets and performing a review to identify improvement opportunities",
      "Examining measures wherein the amount of free space on a disk is near its threshold",
      "Investigating the impact of changes made to a program",
      "Receiving a failure report from a user and checking to see if it corresponds to a known error"
    ],
    "correctIndex": 3,
    "explanation": "### A\nit's not related to incidents.\n\n### B\nThis is talking about disks reaching its capacity.\n\n### C\nOkay, so this sounds kinda right because you may have changed something and caused an error, but it didn't necessarily say that.\n\n### D\nYou get an error, check which kind of error it is and see what you can do with it. This is how you manage incidents.",
    "difficultyWeight": 1
  },
  {
    "id": "2024S_FE-A_45",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2024,
    "questionText": "Which of the following is the most appropriate description concerning an interview conducted by a system auditor?",
    "options": [
      "The administrator of the audited department, who has experience in auditing tasks, is selected as the interviewee.",
      "The entire interview is conducted by one (1) system auditor, as discrepancies may occur in the record if multiple auditors are involved.",
      "The system auditor instructs the audited department to take improvement measures for deficiencies found during the interview.",
      "The system auditor makes an effort to obtain documents and records that support the information obtained from the audited department during the interview."
    ],
    "correctIndex": 3,
    "explanation": "### System Auditor\nSomeone who inspects and approves the security of systems and networks.\n\nSo, when you're an auditor, you need to go to other departments to do some kind of inspection.\n\nA person who has experience may sound like the right answer, but not really because there could be biases due to their position / nepotism.\n\nHaving 1 auditor isn't right too, just having 1 seems biased. Having multiple auditors for transparency is the way.\n\n### Why not c)\nIt may sound right and I even thought this was the answer, but system auditors aren't supposed to instruct people, they are just there to inspect.\n\nSoo the answer is **d)**",
    "difficultyWeight": 1
  },
  {
    "id": "2024S_FE-A_46",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2024,
    "questionText": "Which of the following is a case that enables the customer support operations at a call center to improve quality by applying a pattern recognition function or machine learning function to the accumulated data?",
    "options": [
      "Deriving the most appropriate response in real time from related materials and all the previous support history according to the content of the inquiry made by a customer",
      "Displaying the digital content of a response manual or basic customer information on a pop-up window of a screen for responding to requests from the operators",
      "Repeatedly providing role play training to new operators from an experienced operator who serves as a lecturer by using the response manual as the teaching material",
      "Transferring a phone call or the relevant support screen to an experienced operator or a dedicated staff when the operator who is responding to a customer over the phone is unable to provide an answer"
    ],
    "correctIndex": 0,
    "explanation": "### Machine Learning\nuses data to gradually improve its accuracy\n\nSo, we need to keep feeding it data until it understands a pattern.\n\n**b)** is out of the question because you're just giving it a manual and user information. If it were identifying user information patterns this would be the correct answer.\n\n**c)** is also wrong because it only focuses on newly hires and not the actual interactions between the customers and the operators.\n\n**d)** is just giving the phone to someone else and that's basically almost no interaction.\n\nWhat we really want are actual interactions between the operators and the customers, so **a)** is the answer.",
    "difficultyWeight": 1
  },
  {
    "id": "2024S_FE-A_47",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2024,
    "questionText": "Which of the following is a description of knowledge management?",
    "options": [
      "Conduct business by a flat organizational structure that has as few hierarchical levels as possible for quick decision making.",
      "Conduct business by utilizing its core strength in know-how and technology that are unique to the company and cannot be imitated by others.",
      "Conduct business that enhances overall capabilities to solve problems by sharing knowledge that is scattered throughout the company.",
      "Implement management innovation in the company on the basis of a comparative analysis with companies that have achieved superior performance."
    ],
    "correctIndex": 2,
    "explanation": "### Knowledge Management\nBy using common sense, this is really about managing information within the organization.\n\nFrom that alone, you can think of knowledge being shared across different departments, using that knowledge, applying it, so that everyone can keep up.\n\n**Definition:** collection of methods relating to creating, sharing, using and managing the knowledge and information of an organization.\n\n**Key Word:** Sharing Knowledge",
    "difficultyWeight": 1
  },
  {
    "id": "2024S_FE-A_48",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2024,
    "questionText": "Which of the following is an appropriate description of an RFI?",
    "options": [
      "It is a document describing the basic policy for the system, including a summary of the system, purpose, necessary functions, system requirements, and contract matters.",
      "It is a document that is created after an RFP.",
      "It is a document used by companies looking for the implementation of computerization to request specific system proposals from prospective suppliers such as system vendors.",
      "It is a document used to request information concerning computerization from prospective suppliers such as system vendors."
    ],
    "correctIndex": 3,
    "explanation": "What is an RFI?\nIt simply means Request for Information, from that alone you can see it in the choices.\n\nBut, just think of it as entering into an unfamiliar territory. You have your own company, but have no idea about customer relationship management solutions, so you need an RFI to gain more knowledge about that field.\n\nThe main goal for an RFI is to know which suppliers are best for your needs\n\nYou can ask for their \n- case studies\n- overview about their services and key features\n\nOnce that's finished, you can either go to RFP or RFQ\n\nWhat is an RFP\nRequest for Proposal\n\nThis is more detailed compared to an RFI because you'll be asking for their proposal.\n\nYou can ask for\n- specifications\n- detailed project plan\n- timeline\n\nSo, it's really up to them on how they can meet your specific needs.\n\nWhat is an RFQ\nRequest for Quotation\n\nFrom the name itself, you're just inquiring about the price.\n\nYou can ask\n- how much for 15 licenses for this application\n- how much to implement this service",
    "difficultyWeight": 1
  },
  {
    "id": "2024S_FE-A_49",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2024,
    "questionText": "Which of the following is a strategy that concentrates resources in the segment of a specific customer or specific product in order to achieve specialization?",
    "options": [
      "Challenger strategy",
      "Follower strategy",
      "Leader strategy",
      "Niche strategy"
    ],
    "correctIndex": 3,
    "explanation": "This question is about who is your target audience? Could be anyone.\n\n### Challenger Strategy\nFrom the name itself, you're challenging your competitors, so that's where your market is. If you have a shoe brand, you have the same market as Adidas, Nike, etc.\n\n### Follower Strategy\nFrom the name itself, you're just following your competitors. If your shoe brand is similar to Adidas in every possible way, except for the logo and idk colors, then you're using this strategy.\n\n### Leader Strategy\nFrom the name itself, you're the leader. You basically have no competition and your market is unknown or not developed yet. You're a trend setter. So an example would be a shoe brand that lets you fly?\n\n### Niche Strategy\nFrom the name itself, your market is very specific. This can be a shoe brand for hikers, that's more niche compared to before.",
    "difficultyWeight": 1
  },
  {
    "id": "2024S_FE-A_50",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2024,
    "questionText": "Which of the following is an explanation of core competence that is adopted in business administration?",
    "options": [
      "It refers to a qualitative and quantitative understanding of its products, services, and operations through comparisons with the strongest competitor or advanced companies.",
      "It refers to dramatical improvements in the costs, quality, service, and speed of a company by fundamentally reviewing and radically redesigning its business processes.",
      "It refers to the company’s unique skills, technologies, and other strengths that are superior to other companies, which serve as a source of competitive advantage.",
      "It refers to the management of the allocation of company-wide management resources in an effective and integrated manner so as to achieve an improvement in management efficiency."
    ],
    "correctIndex": 2,
    "explanation": "Business Administration\nmanaging an organization's resources, time and people.\n\nCore Competence of that is how your business has the upper hand. What gives you that competitive edge?\n\nFrom that alone, you might be able to cross out some letters.\n\n**a)** Has nothing to do with that, also it's just trying to understand and compare.\n\n**b)** Sure this is great for the company, but not related to business administration. This is more like redesigning your business model and making adjustments.\n\n**c)** Correct Answer. Clearly shows how your business has the upper hand.\n\n**d)** This is more on resource management.",
    "difficultyWeight": 1
  },
  {
    "id": "2024S_FE-A_51",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2024,
    "questionText": "Which of the following is an appropriate explanation of telemarketing?",
    "options": [
      "It refers to direct marketing that includes calling people at home and asking for donations, opinions, or purchases.",
      "It refers to direct marketing that sells products and services and builds customer relationships over the Internet.",
      "It refers to direct marketing that sends offers, announcements, reminders, or other items to a person at a particular address.",
      "It refers to direct marketing that sends sales alerts, links to website updates, appointments, or delivery reminders to large groups of people."
    ],
    "correctIndex": 0,
    "explanation": "### Telemarketing\nPretty self explanatory. Think of it as Telephone and Marketing combined = Telemarketing\n\nMarketing is when you want other people to know your product, and making sure that they find value in it. It's also to build relationships and gather feedback from them.\n\nIf you selling toilets, you're providing value on how toilets are a necessity and we use them everyday.\n\nTelemarketing is just marketing on the telephone.\n\n### Why not b?\nThis is marketing over the internet not on a telephone, so it's wrong.\n\nThe only difference is the medium used.\n\nEmail marketing uses email\nInternet marketing uses the internet\nTelemarketing uses the telephone",
    "difficultyWeight": 1
  },
  {
    "id": "2024S_FE-A_52",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2024,
    "questionText": "Which of the following is an appropriate explanation of the technology S curve?",
    "options": [
      "It represents the diffusion process of a new technology. It shows that the growth rate of the penetration rate gradually decreases as products applying the technology penetrate the market, by using a frequency distribution curve.",
      "It represents the maturing process of technology. It shows that during the time until the new technology is actually spread, the degree of awareness changes as time passes.",
      "It represents the process of technological progress. It shows that technology advances slowly at the beginning, then advances rapidly, and thereafter, slowly stagnates.",
      "It represents the relationship between production volume and unit cost. It shows the course of reduction in unit cost with an increase in cumulative production volume."
    ],
    "correctIndex": 2,
    "explanation": "### Technology S Curve\nJust like anything in life, over time you'll see some kind of increase.\n\nIf you invest in the stock market (S&P500) average returns are typically increasing over the years (excluding the market crashes).\n\nCompound interest starts slow then all of a sudden after a long time it sky rockets. Like if you were to invest in a ROTH IRA, by 60 years old you'll be able to get millions from just depositing a few hundreds/thousands on your 20s.\n\n![Image](Files/Pasted%20image%2020241021150802.png)\n\nIt the line also looks like some kind of letter C that's lying down.\n\nThe graph below is like the letter S, which is why it's called the **Technology S Curve**\n\nAt first, it's just like compound interest. Building your technology is slow, and hard, but as time goes on it gets easier and you'll start to see massive progress.\n\nAfter a while, once your technology is now developed and has matured, it will reach a stabilization point and slow back down.\n\n![Image](Files/Pasted%20image%2020241021150452.png)",
    "difficultyWeight": 1
  },
  {
    "id": "2024S_FE-A_53",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2024,
    "questionText": "Which of the following is an appropriate computing concept that describes the idea of physical objects, such as devices, vehicles, and buildings, that are connected to the Internet and are able to identify themselves to other devices?",
    "options": [
      "Computer networks",
      "Deep learning",
      "Internet of things",
      "Network topology"
    ],
    "correctIndex": 2,
    "explanation": "### Internet of Things\nIf you at least paid attention in class, you'll know that this is the answer.\n\nBy the name itself, it's really just things/objects that have internet and sensors. These can be our phones, computers, printers, refrigerator (if advanced), etc.\n\nAll those devices can connect to the internet, they can collect data, share data, those stuff.\n\nThey are also capable of sharing data among each other.\n\n### Computer Networks\nWhy not this? This also feels like the answer.\n\nLet's look at its definition first\n**Computer networking** refers to interconnected computing devices that can exchange data and share resources with each other. These networked devices use a system of rules, called communications protocols, to transmit information over physical or wireless technologies.\n\nBoom, where's the physical device there?\n\n### Deep Learning\nThere's no physical device here. It's also focused on algorithms and data analysis.\n\n### Network Topology\nNow we have physical devices, but we're not exactly talking about those physical devices.\n\nWhen we talk about formation in the military, you're not actually talking about each person, you don't know their names, etc. You just know that someone stands over here, 100 people over there in the back, 60 on the right, etc.\n\nNetwork Topology is the same, it's focused on the arrangement of the devices, but it doesn't explain what those object are.",
    "difficultyWeight": 1
  },
  {
    "id": "2024S_FE-A_54",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2024,
    "questionText": "A factory manufactures the three products that are shown in the table below. Which of the following is the maximum possible profit in dollars? Here, there is an upper limit to the monthly demand volume for each product. Also, the factory can only use up to 200 hours per month for the manufacturing process and cannot manufacture more than one products in parallel.\n![Image](Files/Pasted%20image%2020241021153218.png)",
    "options": [
      "26,250",
      "30,000",
      "31,500",
      "33,000"
    ],
    "correctIndex": 3,
    "explanation": "### First find how much units can you produce per hour\nFor Product X, you can produce 1 unit per 6 minutes. That's 10 units per hour.\n60 minutes / 6 minutes = 10 units\n\nFor Product Y, 1 unit per 10 minutes.\n60 minutes / 10 minutes = 6 units\n\nFor Product Z, 1 unit per 15 minutes.\n60 minutes / 15 minutes = 4 units.\n\nOnce you know how many units you'll get per hour, let's turn that into profits.\n### Finding the profits per hour\nThis is simple, just multiply the units by the profit per unit in the table\nProduct X:\n10 units x $18 = $180/hour\n\nProduct Y:\n6 units x $25 = $150/hour\n\nProduct Z:\n4 units x $30 = $120/hour\n\n### Finding maximum production in 1 month\nOnce your done finding the profits in 1 hour, you'll need to find the maximum amount of time you can use the factory in 1 month.\n\n200 hours per month sounds so little, but I guess that's what they only allow.\n\n24 hours = 1 day\n48 hours = 2 days\n\nsoo, multiply the 200 hours by 24 to get the equivalent in days.\n\n200 hours x 24 hours = 8.333333 days or 25/3 days\n\n### Find the profits for each product\nNow we can find the maximum profit for 8.33333 days (25/3).\n\nGoing back to the profits per hour, we can see the Product X has the highest profits per hour, so let's use that first\n\nProduct X:  10 units/hour   |   $180/hour\nProduct Y:    6 units/hour   |   $150/hour\nProduct Z:    4 units/hour   |   $120/hour\n\nRemember we also have a limit of only 1000 units.\n\nIf we only use Product X for the entire 8.3333 days (25/3), we'll product more units than what is given in the table.\n\n10 units x 24 hours x 25/3 days = 2000 units.\n\nFor Product X, we can only have 1000, so we'll divide 25/3 days in half (25/6 days), so we can only produce 1000 units.\n\nNow calculate the profits for Product X\n$180 x 24 hours x 25/6 days = $18,000\n\n---\nWe've reached our quota for Product X, but that only took half of the needed time, we have 4.1666666 days remaining or 25/6 days.\n\nLooking at the profits per hour chart, Product Y gives the second best results, so let's use that.\n\nIf we calculate whether 6 units/hour will go beyond 900 units in 25/6 days, let's calculate first.\n\n6 units x 24 hours x 25/6 days = 600 units\n\nNice, 600 units is less than 900 units, so we can allocate the entire factory with just Product Y, and not needing to touch Product Z.\n\nNow calculate the profits for Product Y\n$150 x 24 hours x 25/6 days = $15,000\n\n### Combine the results\n\nProduct X = $18,000\n\nProduct Y = $15,000\n\nTotal Profits = $33,000",
    "difficultyWeight": 1
  },
  {
    "id": "2024S_FE-A_55",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2024,
    "questionText": "Which of the following is an example of Consumer Generated Media (CGM)?",
    "options": [
      "A website of a company through which the company publishes information about its management and financial status, as well as performance trends for individual investors",
      "A website of a company through which the company transmits information about the characteristics and usage methods of its products to the general consumers",
      "A website of a government organization through which the organization publishes information about its policies and administrative services to the general public",
      "A website such as a blog and SNS, etc. through which an individual transmits information to an unspecified number of people about the evaluation of products, etc. that the person has used"
    ],
    "correctIndex": 3,
    "explanation": "### Consumer Generated Media\nLet's understand what Generated Media is first\nThese are things that are generated, like text, images, videos.\n\nConsumers and users like us who consume data.\n\nFrom that alone, you can eliminate anything non-related to that, like government policies and services.\n\nIt's not about financial statuses, performance trends, government policies, administrative services (letters a - c)\n\nIt's really just people sending to other people their own text messages, videos, images, etc.",
    "difficultyWeight": 1
  },
  {
    "id": "2024S_FE-A_56",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2024,
    "questionText": "Which of the following is the maximum value of Z from the constraints that are shown below?\n\nx + y ≤4\n\nx ≥ 0, y ≥ 0\n\nZ= 3x + 4y",
    "options": [
      "12",
      "14",
      "16",
      "18"
    ],
    "correctIndex": 2,
    "explanation": "Re-arrange so we get the value of y\n\ny ≤ 4 - x\n\nSubstitute y in the Z equation\nZ = 3x + 4(4 - x)\nZ = 3x + 16 - 4x\n\nZ = 16 - x\nSo we get this equation above.\nWe can see that Z decreases as x increases.\nTo maximize Z (from problem specs) we decrease x as much as we can.\n\nFrom the definition, we can see x ≥ 0, so the minimum value is 0.\n\nSo substitute that\n\nZ = 16 - 0\n\nZ = 16",
    "difficultyWeight": 1
  },
  {
    "id": "2024S_FE-A_57",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2024,
    "questionText": "When a company wants to earn a profit of $42,000, which of following is the number of units that the company must sell under the conditions shown in the table below?\n![Image](Files/Pasted%20image%2020241021165541.png)",
    "options": [
      "14,000",
      "18,200",
      "26,000",
      "26,200"
    ],
    "correctIndex": 1,
    "explanation": "Price per unit = $17\n\nFind the Total Fixed costs so just add them all up\n$130,000 + $10,000 = $140,000\n\nFind the Total Variable costs\n\n3 + 4 = 7 dollars/unit\n\nThe goal is $42,000\n\nSo let's calculate the needed units:\n(Fixed Costs + Target Profit) / (Selling Price per Unit - Variable Costs per Unit)\n\n(140000 + 42000) / (17 - 7) = 18,200 units",
    "difficultyWeight": 1
  },
  {
    "id": "2024S_FE-A_58",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2024,
    "questionText": "Which of the following is part of total quality management?",
    "options": [
      "Designing products and services that meet or exceed customers’ expectations",
      "Focusing on the appointment of staff with long-term work experience in a similar environment",
      "Prioritizing central decisions rather than empowerment to ensure the quality of products and services",
      "Promoting the capability of each department to work independently in a competitive manner"
    ],
    "correctIndex": 0,
    "explanation": "It's all about the quality of your product.\n\nAre your customers satisfied? Do they have complaints? Or are they impressed with the craftsmanship, attention to detail, etc. of your product?\n\nBy identifying those key points, you'll be able to adjust the quality of your product if they didn't like it for example, this is Total Quality Management.\n\nIt's constantly improving your product and addresses complaints from your customers. Trying to prevent factory defects, aligning with customer needs, and so on.",
    "difficultyWeight": 1
  },
  {
    "id": "2024S_FE-A_59",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2024,
    "questionText": "When a relation between the list price of a product and the demand for the product is defined as a linear equation, which of the following is the appropriate numerical value to be inserted into blank A below?\n![Image](Files/Pasted%20image%2020241021171831.png)",
    "options": [
      "30,000",
      "35,000",
      "40,000",
      "45,000"
    ],
    "correctIndex": 3,
    "explanation": "To make your life easier just draw it out\n\n$30 = 0\n\n$10 = 60,000 units\n\nyou can find the middle point which is $20, and also finding the mid point of the units. Mid point of 0 and 60,000 is 30,000\n\n$30 = 0\n\n$20 = 30,000 units\n\n$10 = 60,000 units\n\nYou can do the same for $20 and $10, finding the mid points. $15 is the mid point between $20 and $10.\n\nThe mid point between 30,000 and 60,000 is 45,000\nso you now have this.\n\n$30 = 0\n\n$20 = 30,000 units\n\n***$15 = 45,000 units***\n\n$10 = 60,000 units",
    "difficultyWeight": 1
  },
  {
    "id": "2024S_FE-A_60",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2024,
    "questionText": "When OSS that is released under GPL is modified and distributed, which of the following is an appropriate action to comply with the GPL?",
    "options": [
      "A recipient who obtains the derivative work must be strictly prohibited from redistributing copies.",
      "The source code of a separate application that is statically linked to the derivative work does not need to be disclosed.",
      "When the software is modified and distributed, the source code of the distributed copies is made available to the recipients.",
      "When the source code of the derivative work is disclosed, compensation such as related costs cannot be demanded."
    ],
    "correctIndex": 2,
    "explanation": "Open Source-Software, like Linux.\n\nGNU General Public License\nThis is a license giving all users free access to the source code of that software to be seen, run, tested, studied, etc.\n\n**a)** is wrong because the GPL allows everyone to be able to distribute copies of the software as long as the license terms are followed.\n\n**b)** is wrong because if you link an open source to something that can be copyrighted, GPL states that it needs to be disclosed.\n\n**c)** correct because once you made changes in the source code, anyone else will be able to see that.\n\n**d)** is wrong because under the GPL, you can charge for costs if you want to distribute it, but we can't control if they want to distribute that for free.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_1",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "![Image](Files/2025/question_diagrams/2025-1.png)\n\nAs shown in Figure 1, there is a box that generates a single output for two (2) inputs. The \ninput in this box is either “Agree” or “Disagree,” and the output of “Agree” is generated only \nwhen both inputs are “Agree,” while in other cases the output of “Disagree” is generated. \nWhen three (3) inputs are entered into two (2) boxes as shown in Figure 2, which of the \nfollowing is the correct description concerning the output?",
    "options": [
      "The output of “Agree” is generated at all times when one (1) or more inputs are “Agree.”",
      "The output of “Agree” is generated at all times when two (2) or more inputs are “Agree.”",
      "The output of “Disagree” is generated only when two (2) or more inputs are “Disagree.”",
      "The output of “Agree” is generated only when all three (3) inputs are “Agree.”"
    ],
    "correctIndex": 3,
    "explanation": "\n    ## Problem Framing\n    We are looking at a system of cascaded logic boxes. The goal is to determine the condition required to get a final output of \"Agree\".\n    \n    ### Guided Construction: Identifying the \"Gate\"\n    The key is in the definition of the box:\"...the output of 'Agree' is generated only when both inputs are 'Agree'...\"\n    \n    In Computer Science terms, this is the definition of an AND Gate. If we let \"Agree\" = 1 (True) and \"Disagree\" = 0 (False), the box performs the operation:\n    \n    Output = Input_1 cdot Input_2\n    \n    A single \"Disagree\" (False) anywhere in the chain messes up the whole thing and forces the final output to be \"Disagree\".\n\n  Therefore, the final output is \"Agree\" if and only if all three inputs are \"Agree\" (d.).\n    ",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_2",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "Which of the following is the binary result of the multiplication of binary 1011 and binary \n101?",
    "options": [
      "1111",
      "10000",
      "101111",
      "110111"
    ],
    "correctIndex": 3,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_3",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "![Image](Files/2025/question_diagrams/2025-3.png)\n\nThe automation of the inspections performed by a quality controller is considered. By \nproviding as training data 10,000 product images and the results of judgments by the quality \ncontroller about whether each product is defective or not, a machine learning model is created \nto judge whether a product is defective or not. The results of a test judgement by a machine \nlearning model on 100 product images are as shown in the table. When the ratio of the number \nof images that product is judged to be defective by the machine learning model out of the \nimages that product is judged to be defective by the quality controller is deemed to be the \nrecall rate, what is the recall rate in this test judgement? [See Diagram Above]",
    "options": [
      "0.05",
      "0.25",
      "0.50",
      "0.80"
    ],
    "correctIndex": 2,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_4",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "When a six (6)-sided dice with the numbers 1 to 6 is thrown three (3) times, what is the \nprobability of not getting any 1?",
    "options": [
      "1/216",
      "5/72",
      "91/216",
      "125/216"
    ],
    "correctIndex": 3,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_5",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "Which of the following is a term for a list of instructions to a computer that are written in \na human-readable programming language?",
    "options": [
      "PIN code",
      "Source code",
      "Binary code",
      "Character code"
    ],
    "correctIndex": 1,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_6",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "![Image](Files/2025/question_diagrams/2025-6.png)\n\nThe procedure calculateElectricBill receives electricity usage that accepts the units \n(non-negative value) and returns the amount of electricity bills. The pricing structure is given \nas: For the first 100 units, the cost is $10 per unit. Any units exceeding 100 are charged at $15 per unit. Which of the following is an appropriate piece of code to be inserted into the box in the program? \n \n \n[See Diagram above]",
    "options": [
      "(units - 100) × 10 + 100 × 15",
      "(units - 100) × 15 + 100 × 10",
      "units × 15",
      "units × 15 + 100 × 10"
    ],
    "correctIndex": 1,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_7",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "A program uses loops to display results based on whether the cycle numbers are odd or \neven. The execution result of the program is shown below. \n \n0+0+0+0 \n+++++++ \n2+2+2+2 \n+++++++ \n4+4+4+4 \n+++++++ \n6+6+6+6 \n \nWhich of the following is an appropriate combination of pieces of code to be inserted into \n___A___ through ___C___ in the program?  \n \n[Program] \ninteger: i, j \nfor (increase i from 0 to 6 by 1) \n  for (increase j from 0 to 6 by 1) \n    if (____A____) \n      output ____B____ \n    else \n      output ____C____ \n    endif \n  endfor \n  output a new line \nendfor \n \n \nA \nB \nC",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correctIndex": 3,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_8",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "In the data structure called a queue that is suitable for performing first-in first-out (FIFO) \nprocessing, values are stored in the order of “8”, “1”, “6”, and “3”, and then two (2) values \nare removed consecutively. Which of the following is the last value that is removed?",
    "options": [
      "1",
      "3",
      "6",
      "8"
    ],
    "correctIndex": 0,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_9",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "![Image](Files/2025/question_diagrams/2025-9.png)\n\nAs shown in Figure 1, there is a box that generates two (2) numerical values B1 and B2 \nwhen two (2) positive integers A1 and A2 are entered. B1 has the same value as A2, and B2 \nis the remainder of A1 divided by A2. In Figure 2, when two (2) boxes are connected, and 49 \nis entered as A1 and 11 is entered as A2 in the left box, what is the value of B2 generated \nfrom the right box?",
    "options": [
      "1",
      "2",
      "4",
      "5"
    ],
    "correctIndex": 0,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_10",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "Which of the following is an appropriate combination of words that are inserted into\n and \nin the description below concerning the execution sequence of \ninstructions in a computer? \n \nIn a computer, the instructions are executed in the sequence shown below. \n(1) Refer to the program counter. \n(2) \n the instruction. \n(3) Set the program counter to the main memory address of the next instruction. \n(4) \n the instruction. \n(5) Execute processing according to the instruction. \n(6) Return to (1). \n \n \nA \nB",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correctIndex": 1,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_11",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "Which of the following is an appropriate description concerning the primary and \nsecondary cache memory that a CPU is equipped with?",
    "options": [
      "The primary cache memory has larger capacity than the secondary cache memory.",
      "The secondary cache memory is slower than the main memory in writing and reading.",
      "When the CPU reads data, it first accesses the primary cache memory, and then it accesses the secondary cache memory if the data is not available.",
      "All of the data that is required for a process needs to be present on the primary or secondary cache memory when a program starts."
    ],
    "correctIndex": 2,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_12",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "Which of the following is a type of device that is also used as a memory device in IoT \ndevices, and has a lower power consumption and higher impact resistance than an HDD as it \nhas memory media that is made of semiconductors and does not have any moving \ncomponents?",
    "options": [
      "DRM",
      "DVD",
      "HDMI",
      "SSD"
    ],
    "correctIndex": 3,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_13",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "Which of the following is the appropriate description concerning the performance of a \nCPU?",
    "options": [
      "Between a 32-bit CPU and a 64-bit CPU, the length of data that a 64-bit CPU can process at once can be greater.",
      "The smaller the amount of cache memory in a CPU, the higher the processing speed of the CPU.",
      "In CPUs with the same structure, when the clock frequency is decreased, the processing speed increases.",
      "Between a dual core CPU and a quad core CPU, a dual core CPU can execute a greater number of processes simultaneously."
    ],
    "correctIndex": 0,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_14",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "Which of the following is an appropriate characteristic of a dual system?",
    "options": [
      "It provides two (2) sets of systems that perform the same processing and checks the correctness of the processing by comparing the results. If one of the systems fails, it isolates the failed system and continues the processing.",
      "The same two (2) devices are used, so that the processing capability can be increased to double that of a simplex system.",
      "It provides a currently used system for performing online processing and also a backup system that is made on standby while performing batch processing. In the event of a failure in the currently used system, it switches to the backup system, starts the online processing on it, and continues the service.",
      "It connects multiple devices in series and configures them in such a way that the load of each function is distributed among them, so that processing capability is high. But if any one of the devices fails, it becomes unable to provide the service."
    ],
    "correctIndex": 0,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_15",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "Among the changes A through D in a client/server system, which of the following is the \nlist that contains all and only the appropriate changes for reducing the response time? \n \nA: Establishing a high-speed line between the client and the server, and reducing the time \ntaken to transmit data \n\nB: Increasing the number of clients, and reducing the waiting time for users before using \nclients \n\nC: Reducing the time taken for data entry by users on the client’s input screen \n\nD: Making the server high-performance, and reducing the server’s processing time",
    "options": [
      "A, B, C",
      "A, D",
      "B, C",
      "C, D"
    ],
    "correctIndex": 1,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_16",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "![Image](Files/2025/question_diagrams/2025-16.png)\n\nThere is a web system that is composed of two (2) web servers and one (1) database \nserver as shown in the figure. When the availability of each Web server is 0.8 and the \navailability of the Database server is 0.9, which of the following is the availability of this \nsystem rounded off to two (2) decimal places? Here, if at least one (1) of the two (2) Web \nservers are operating and the Database server is operating, it is considered that the system is \noperating. Also, a fault occurs randomly on each server. [See Diagram Above]",
    "options": [
      "0.04",
      "0.58",
      "0.86",
      "0.96"
    ],
    "correctIndex": 2,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_17",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "Which of the following is an appropriate explanation of multitasking?",
    "options": [
      "Several computers connected via a network work together to achieve a high- performance system.",
      "Several processor cores composed of arithmetic circuits and other control circuits are implemented in a single CPU.",
      "The CPU processing time is allocated to several processes in turn so that the processes can be executed concurrently.",
      "The same processing is performed for multiple data items by executing a single instruction."
    ],
    "correctIndex": 2,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_18",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "The types of programs that are running when a PC is started are broadly classified into \nthree (3) categories, namely BIOS (Basic Input Output System), OS, and resident application \nprograms. Which of the following is the order of execution of the programs?",
    "options": [
      "BIOS, OS, resident application programs",
      "OS, BIOS, resident application programs",
      "OS, resident application programs, BIOS",
      "Resident application programs, BIOS, OS"
    ],
    "correctIndex": 0,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_19",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "Multiple files stored on a hard disk are used in work, from Monday to Friday. In order to \nhandle failure of the hard disk, the data is backed up to another hard disk after the end of each \nday’s work. When the backup has following conditions, what is the total time required (in \nminutes) to perform backups of data from Monday to Friday? \n \n[Conditions for backups] \n\n(1) There are 6,000 files used in work, each with a size of 3 Mbytes. \n\n(2) In each day’s work, 1,000 files are modified. Modifications do not change the size of \nthe files. \n\n(3) Files are copied to the other hard disk at a speed of 10 Mbytes/second. One (1) file is \nbacked up at a time; backup continues without interruption. \n\n(4) From Monday to Thursday, only files modified that day are backed up. On Friday, all \nfiles are backed up, whether or not they have been modified.",
    "options": [
      "25",
      "35",
      "50",
      "150"
    ],
    "correctIndex": 2,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_20",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "![Image](Files/2025/question_diagrams/2025-20.png)\n\nSpreadsheet software is to be used to perform a calculation with the monthly sales data \nfor each product shown in the worksheet below. When the expression \n“COUNTIF(B2:D2,>15000)” is entered in cell E2 and then copied to cell E3 and cell E4, \nwhich of the following is the value that is displayed in cell E4? [See Diagram above]",
    "options": [
      "0",
      "1",
      "2",
      "3"
    ],
    "correctIndex": 2,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_21",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "Which of the following is an Open Source Software (OSS) OS that is used in mobile \ndevices such as smartphones and tablets?",
    "options": [
      "Android",
      "iOS",
      "Safari",
      "Windows"
    ],
    "correctIndex": 0,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_22",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "In document creation software, spreadsheet software, and other such software, which of \nthe following is a function that predefines and executes a series of operation procedures?",
    "options": [
      "Autocomplete",
      "Source code",
      "Plug and play",
      "Macro"
    ],
    "correctIndex": 3,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_23",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "Which of the following is a space-saving server where computer components including \nthe CPU, main memory, and storage are installed on a single circuit board and multiple circuit \nboards are mounted in racks?",
    "options": [
      "DNS server",
      "FTP server",
      "Web server",
      "Blade server"
    ],
    "correctIndex": 3,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_24",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "Which of the following is a technology that projects things such as video made with \ncomputer graphics on to buildings, objects, and other such three-dimensional things, and \nproduces a variety of visual effects?",
    "options": [
      "Digital signage",
      "Virtual reality",
      "Projection mapping",
      "Polygon"
    ],
    "correctIndex": 2,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_25",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "Which of the following is a data format that can be used to compress both video and \naudio data?",
    "options": [
      "BMP",
      "GIF",
      "JPEG",
      "MPEG"
    ],
    "correctIndex": 3,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_26",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "![Image](Files/2025/question_diagrams/2025-26.png)\n\nBy joining tables “Employees in charge”, “Regions”, and “Customers” that are managed \nin a relational database, the table A that is shown below is obtained. Which of the following \nis the table “Customers” that is used for the joining? Here, a solid underline indicates a \nprimary key and a dotted underline indicates a foreign key.",
    "options": [
      "Customer code | Customer name | Representative name",
      "Customer code | Customer name | Representative name | Employee code",
      "Customer code | Customer name | Representative name | Region code",
      "Customer code | Customer name | Representative name | Employee code | Region code"
    ],
    "correctIndex": 3,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_27",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "Which of the following is an appropriate purpose of conducting data normalization when \na relational database is constructed?",
    "options": [
      "Providing redundancy to data in order to detect data errors",
      "Eliminating data inconsistencies and duplications in order to make it easy to maintain and manage the data",
      "Unifying the character code of data in order to improve data reliability and storage efficiency",
      "Losslessly compressing data in order to improve access efficiency"
    ],
    "correctIndex": 1,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_28",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "![Image](Files/2025/question_diagrams/2025-28.png)\n\nAn “Employee” table and a “Department” table that are to be managed with a relational \ndatabase were created on the basis of the conditions (i) through (v). Which of the following \nis the most appropriate primary key for the “Employee” table?",
    "options": [
      "“EmployeeNumber”",
      "“EmployeeNumber” and “DepartmentCode”",
      "“EmployeeName”",
      "“DepartmentCode”"
    ],
    "correctIndex": 0,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_29",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "Which of the following is the appropriate description concerning transaction processing?",
    "options": [
      "Commit is the reversion of a database to the status prior to the start of the transaction when a transaction is not processed successfully.",
      "Exclusive control is the confirmation of the content of a database when a transaction is processed successfully.",
      "Rollback ensures that there are no inconsistencies in data when multiple transactions attempt to update data simultaneously.",
      "Log is a file that records transaction history of a database."
    ],
    "correctIndex": 3,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_30",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "Three (3) PCs and an Internet-capable TV (television) set are to be connected to the \nInternet by using a hub and a router that has a firewall function. Which of the following is an \nappropriate connection that enables the firewall function of the router to be used for all the \ntraffic between the devices and the Internet? Here, “FW” in each figure indicates the firewall \nfunction.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correctIndex": 0,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_31",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "Which of the following is the appropriate role of a DNS in a network?",
    "options": [
      "In response to a request from a client for the allocation of an IP address, it allocates an unused IP address from a pool of IP addresses.",
      "It receives a requests for file transfers from clients and transfers files to clients, and stores files that it receives from clients.",
      "It links domain names to IP addresses.",
      "It receives a request for retrieval from an e-mail recipient and transfers e-mail received by a mail server."
    ],
    "correctIndex": 2,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_32",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "Which of the following is an appropriate example of an IPv4 IP address that is assigned \nto a PC?",
    "options": [
      "00.00.11.aa.bb.cc",
      "050-1234-5678",
      "10.123.45.67",
      "http://www.example.co.jp/"
    ],
    "correctIndex": 2,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_33",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "Mr. A sent an e-mail to the three (3) people Mr. P, Mr. Q, and Mr. R. He entered Mr. P’s \ne-mail address in the To field, Mr. Q’s e-mail address in the CC field, and Mr. R’s e-mail \naddress in the BCC field. Which of the following is the appropriate description concerning \nthe three (3) recipients of the e-mail?",
    "options": [
      "Mr. P and Mr. Q can see that the same e-mail was also sent to Mr. R.",
      "Mr. P cannot see that the same e-mail was also sent to Mr. Q.",
      "Mr. Q can see that the same e-mail was also sent to Mr. P.",
      "Mr. R cannot see that the same e-mail was also sent to Mr. P and Mr. Q."
    ],
    "correctIndex": 2,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_34",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "Which of the following is a technology that is used to make voice calls over the Internet \nby two (2) parties using the same application on their smartphones or other devices?",
    "options": [
      "MVNO",
      "NFC",
      "NTP",
      "VoIP"
    ],
    "correctIndex": 3,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_35",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "Among descriptions A through D concerning how to conduct information security \neducation to employees, which of the following contains all and only the appropriate \ndescriptions? \n \nA: \nThe re-education of one who has committed an information security breach includes \npreventive actions to avoid the same fault being repeated. \n\nB: \nOne way to conduct it is to incorporate it in a training program for new employees. \n\nC: \nIt is restricted to employees in the information systems department. \n\nD: It is conducted after an incident or an accident concerning information security as \nwell as on a regular basis.",
    "options": [
      "A, B, D",
      "A, C, D",
      "A, D",
      "B, C"
    ],
    "correctIndex": 0,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_36",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "Among the descriptions A through D of how to handle a contact list that includes \ncustomer names, addresses, and other information, which of the following contains all and \nonly the appropriate descriptions in terms of personal information protection? \n \nA: \nEven if a customer asks to check his/her own registration information, this cannot be \ndisclosed on the grounds of information protection. \n\nB: \nA list of all names and addresses is extracted from the contact list and is sent to all the \ncustomers to have them check for errors. \n\nC: \nA CD-ROM that includes contact list data is to be shredded before it is discarded. \n\nD: Contact list data is to be encrypted when it is stored in a file.",
    "options": [
      "A, C, D",
      "A, D",
      "B, C",
      "C, D"
    ],
    "correctIndex": 3,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_37",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "Among the threats and vulnerabilities in information security, which of the following is a \nvulnerability?",
    "options": [
      "Computer virus",
      "Social engineering",
      "Tapping of communications data",
      "Inappropriate password management"
    ],
    "correctIndex": 3,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_38",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "Which of the following is an appropriate disposal method for media that stores \nconfidential information to ensure that information leakage does not occur?",
    "options": [
      "CDs and DVDs are destroyed and then are disposed of.",
      "A PC is disposed of with its CPU being destroyed.",
      "USB memory is disposed of with its files and folders being deleted.",
      "Paper documentation is not reused as memo paper and is sealed in a confidential envelope and then is disposed of together with general trash."
    ],
    "correctIndex": 0,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_39",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "Which of the following is a term for software that encrypts files on a computer in order \nto make them unusable, and demands money or other valuables in exchange for the \ndecryption key?",
    "options": [
      "Keylogger",
      "Ransomware",
      "Rootkit",
      "Worm"
    ],
    "correctIndex": 1,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_40",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "Which of the following is an appropriate example of biometric authentication?",
    "options": [
      "Authentication with a fingerprint",
      "Authentication with a digital certificate",
      "Authentication with a personal ID card",
      "Authentication with a one-time password"
    ],
    "correctIndex": 0,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_41",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "During the use of a PC in workplace, a message was displayed stating that antivirus \nsoftware had detected a virus. Which of the following is an appropriate action that should be \ntaken immediately?",
    "options": [
      "Reboot of the PC",
      "Notification to the workplace by e-mail from the PC",
      "Disconnection of the PC from networks",
      "Backup of files on the PC"
    ],
    "correctIndex": 2,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_42",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "There is an IoT system that is composed of IoT devices and an IoT server that manages \nthem. Which of the following is the appropriate combination of information security incidents \n(i) through (iii) in this system, and confidentiality, integrity, and availability that are \ncompromised because of the incidents? \n \n[Incident] \n\n(i) An IoT device stopped working because its battery ran out. \n\n\n(ii) Communication between the IoT devices and the IoT server was not encrypted, so an \ninformation leakage occurred. \n\n(iii) Incorrect data was recorded because of a system fault.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correctIndex": 1,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_43",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "In the activities of an organization that runs an ISMS on the basis of the PDCA cycle, \nimprovements and corrective measures are decided from the results of monitoring of the risk \nmanagement activities and other such information. In which process of the PDCA cycle is \nthis activity performed?",
    "options": [
      "P",
      "D",
      "C",
      "A"
    ],
    "correctIndex": 3,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_44",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "When risk treatment in risk management for information security is divided into the four \n(4) categories of risk avoidance, risk sharing, risk mitigation, and risk retention, which of the \nfollowing is the appropriate explanation of risk sharing?",
    "options": [
      "Halting activities that involve risk and fundamentally eliminating risk factors, for example, by not handling personal information",
      "Implementing measures to reduce the probability of risk occurrence and reduce damage, such as distributing a data center over multiple locations that are geographically far away from each other in preparation for a disaster",
      "Reducing damage that may occur when a risk materializes by transferring or distributing risk to a separate organization on the basis of an agreement, such as the purchasing of an insurance policy",
      "If the probability of risk occurrence or the damage in the event of occurrence is considered to be small, recognizing the risk, and then accepting it without taking any particular measures"
    ],
    "correctIndex": 2,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_45",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "Which of the following is an appropriate description concerning user authentication of a \nsystem?",
    "options": [
      "A mechanism that achieves login to multiple servers, applications, and other such things with a single authentication is called challenge-response authentication.",
      "A mechanism that authenticates a user by using fingerprints, voice prints, and other characteristics of a body is called single sign-on.",
      "A code number that is used in order to authenticate a user of an information system is called a PIN.",
      "A method where, instead of the order of specific numbers or characters, the positions in a grid are memorized, and during authentication, a person enters the numbers and characters in the positions that he/she remembers in a grid that is displayed on the screen is called multi-factor authentication."
    ],
    "correctIndex": 2,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_46",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "Mr. A, a participant in system testing, has no access to the design of the internal structure \nof the system or software and prepares input data and output data to be used in verification \nof the transaction functions commonly used in the department. Which of the following is the \ntesting technique that Mr. A is going to implement?",
    "options": [
      "Inspection",
      "Walk-through",
      "Black-box testing",
      "White-box testing"
    ],
    "correctIndex": 2,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_47",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "The processes of system development include system requirements definition, systems \narchitecture design, system integration testing, and software acceptance. Which of the \nfollowing is an activity that is performed in system requirements definition?",
    "options": [
      "The party to which development is outsourced uses the software under the same conditions as the actual production environment in order to determine if it runs correctly.",
      "A system test plan is created, and a test environment is prepared.",
      "The functions and performance required of the system are clarified.",
      "A program is created and test results are reviewed according to the evaluation criteria."
    ],
    "correctIndex": 2,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_48",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "What is the term for revising and changing programs after system development?",
    "options": [
      "Computerization planning",
      "System operation",
      "Software maintenance",
      "Requirements definition"
    ],
    "correctIndex": 2,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_49",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "Which of the following is the most appropriate description concerning the usability of \nRPA software when the quality characteristics of software are classified into portability, \nfunctional suitability, compatibility, usability, reliability, performance efficiency, security, \nand maintainability?",
    "options": [
      "It operates even if the OS of the PC that RPA runs on changes.",
      "Automatic processing is executed at the time and on the conditions that are specified with RPA.",
      "Even if the version of the application software that is the subject of operation by RPA is upgraded, RPA will work with a simple change of the settings.",
      "People who have never used RPA can use it with only simple education."
    ],
    "correctIndex": 3,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_50",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "Which of the following is the most appropriate case example of DevOps in software \ndevelopment?",
    "options": [
      "The developer prepares a prototype of important functions, and evaluates its adequacy by measuring the performance together with the customer.",
      "The developer moves on to the next development phase only after it is judged that the current phase is complete, and handovers the system to the operation side only after the system test where users participating in a system test confirm the operability.",
      "The developer and the operator work in close cooperation and quickly proceed with the implementation and update of functions, etc., by using automation tools and other such tools.",
      "The programs are added one by one while fixed short-period cycles are repeated in order to expand the functions in the development of a system."
    ],
    "correctIndex": 2,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_51",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "A system development project has more defects than the quality targets. In order to clarify \nthe issues to prioritize for resolution, the number of defects for each cause is to be \ninvestigated and shown with a chart. Which of the following is an appropriate chart to use?",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correctIndex": 1,
    "explanation": "\nThe question asks for a chart that does two specific things:\n\n  Shows the number of defects for each cause.\n  \n  Helps prioritize which issues to resolve first.\n\nEssentially, we need a tool that identifies the \"vital few\" from the \"trivial many.\"\n\n### Guided Construction: Analyzing the Options\nThese are the \"Seven Basic Tools of Quality.\" Let's see what each pattern represents:\n\nOption (a): This looks like a skeleton. It maps relationships between an effect and its multiple potential causes.\n  \nQuestion: Does this show \"numbers/counts\" or just \"relationships\"?\n\nOption (b): A bar chart sorted in descending order, overlaid with a cumulative percentage line.\n\nQuestion: If you wanted to see which 20% of causes are creating 80% of your problems (prioritization), which chart is designed exactly for that?\n\nOption (c): A collection of data points on an X-Y axis.\n\nQuestion: Is this used for counting categories, or for seeing if two variables (like \"study time\" and \"test scores\") move together?\n\nOption (d): Rectangles and diamonds with arrows.\n\nQuestion: Does this show statistics, or does it show a step-by-step process flow?\n\n##Correct Answer\nThe correct answer is (b).\n\n### Why (b) is the winner: The Pareto Chart\nThe chart in image (b) is a Pareto Chart.\n\nThe Bars: Represent the frequency (number of defects) for each cause, sorted from most frequent to least frequent.\n\nThe Line: Represents the cumulative total\n\nThe Goal: It follows the 80/20 rule (Pareto Principle). By looking at the highest bars on the left, you immediately know which \"causes\" to prioritize to get the biggest improvement in quality.\n\n### Why the others are eliminated:\n(a) Fishbone (Ishikawa) Diagram: Great for brainstorming what the causes are, but it doesn't quantify them or show which one happens most often.\n\n(c) Scatter Diagram: Used to find correlations between two variables.\n\n(d) Flowchart: Used to visualize a process or algorithm, not to analyze defect data.\n        ",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_52",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "A system development project at a company is becoming delayed. In order to resolve the \ndelay, the project leader proposes to project members that part of the planned work procedure \nbe omitted. The project members are divided into those who think that this cannot be avoided \nand those who are opposed because the quality will decrease. From the perspective of \nensuring quality in a project, which of the following is the most appropriate action for a \nproject leader to take?",
    "options": [
      "Discussing detailed measures against decrease in quality within the project, and building consensus as a project",
      "Deciding whether to accept or reject a proposal with a majority decision by highly skilled people from among the project members",
      "Proceeding as he/she proposed because he/she has the most experience",
      "Replacing project members who cannot agree with his/her proposal"
    ],
    "correctIndex": 0,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_53",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "![Image](Files/2025/question_diagrams/2025-53.png)\n\nIn an arrow diagram that shows system development, if activities A and D are delayed \nfor three (3) days in total, what is the delay in the entire project? \n[See Diagram Above]",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctIndex": 0,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_54",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "In a project team that is required to communicate information on a one-to-one basis, when \nthe members increase from six (6) people to ten (10) people, by how many times does the \nnumber of paths that are required for communicating information increase?",
    "options": [
      "1.5",
      "2.5",
      "3",
      "6"
    ],
    "correctIndex": 2,
    "explanation": "1. Identify the Pattern: \"One-to-One\" = Full Mesh\n    The question specifies communication on a *one-to-one* basis among all members. \n    In technical terms, this describes a Full Mesh Topology or a Complete Graph (Kn).\n    \n    If Person A talks to Person B, that is the same path as B talking to A.\n    Since the order doesn't change the path, this is a Combination problem — n C 2.\n\n    ![Image](Files/2025/solutions/FE_A-54-1.png)\n    ![Image](Files/2025/solutions/FE_A-54-2.png)\n    \n    Answer: c) 3\n",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_55",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "Which of the following is a method that organizes all of the activities to be performed in \nthe project in a hierarchical structure?",
    "options": [
      "CRM",
      "ERP",
      "PPM",
      "WBS"
    ],
    "correctIndex": 3,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_56",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "When a system development project is started, it is foreseen that the progress of the \nproject may be affected by a large number of change requests for specification that come from \nusers during the course of development. Which of the following is the most appropriate \nmeasure for ensuring that there is no deterioration in quality or delay in delivery date?",
    "options": [
      "Declaring to the customer that change requests cannot be accepted after the completion of design",
      "Shortening the test period by skipping tests when a delay occurs during the course of the project",
      "Including in the plan that the implementation of a function will be called off if there are a large number of change requests",
      "Reaching an agreement with the customer on what can be accepted as change requests and how to determine the priority of the accepted change requests"
    ],
    "correctIndex": 3,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_57",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "The processes of project management include project cost management, project \ncommunications management, project resources management, project schedule management, \nand the like. In a system development project, which of the following is the most appropriate \nactivity in project cost management when members are added for implementing a test?",
    "options": [
      "Updating the mailing list, etc. so that information can be efficiently transmitted to the newly participating members",
      "Requesting a vendor to provide training on the testing tool to the newly participating members",
      "Adding tasks to be handled by the newly participating members, and changing the schedule",
      "Estimating the personnel expenses of the newly participating members, and changing the plan"
    ],
    "correctIndex": 3,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_58",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "Which of the following is an appropriate purpose for facility management concerning IT \nsystems?",
    "options": [
      "Optimization of IT service cost",
      "Continuation of a company’s business in the event of a disaster, etc.",
      "Ensuring appropriate security for information assets",
      "Overall maintenance of facilities and the environment for information processing"
    ],
    "correctIndex": 3,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_59",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "Which of the following is the most appropriate activities of a service desk?",
    "options": [
      "Eliminating the root cause of an incident and preventing the recurrence of the incident",
      "Installing updated software in order to prevent the recurrence of an incident",
      "Performing centralized management of changes in a service",
      "Handling and recording inquiries from users"
    ],
    "correctIndex": 3,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_60",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "Which of the following is the most appropriate interface that responds to the query from \na user in an interactive and automated manner?",
    "options": [
      "Recommendation",
      "Chatbot",
      "Escalation",
      "FAQs"
    ],
    "correctIndex": 1,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_61",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "In the PDCA cycle of service level management, which of the following is implemented \nas C (Check)?",
    "options": [
      "Providing services on the basis of the SLA",
      "Preparing a service improvement plan on the basis of the service report and its review results",
      "Agreeing upon the desired service quality on the basis of the service requirements and the service improvement plan, and preparing an SLA",
      "Monitoring and measuring the provided services, and preparing a service report"
    ],
    "correctIndex": 3,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_62",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "Which of the following is the appropriate combination of IT service management and the \ncontent of the SLA for a hosting service A through C below? \n \nA: The time that a server is operational \n\nB: The time taken until a specified member of staff is notified after it is detected that the \namount of free space on a disk has reached a set threshold \n\nC: The time taken until a specified member of staff is notified after an unauthorized \naccess is detected \n",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correctIndex": 0,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_63",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "In a company, which of the following is responsible for the establishment of IT \ngovernance?",
    "options": [
      "Shareholders",
      "Management",
      "System auditor",
      "Head of the systems department"
    ],
    "correctIndex": 1,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_64",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "A food manufacturer is conducting business in accordance with food industry safety \nstandards. As the safety standards are revised, the internal standards of the company are also \nrevised accordingly. Which of the following objectives of internal control corresponds to this \naction?",
    "options": [
      "Effectiveness and efficiency of business",
      "Reliability of financial reporting",
      "Compliance with laws and regulations that are related to business operations",
      "Protection of assets"
    ],
    "correctIndex": 2,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_65",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "Which of the following is the most appropriate objective of an accounting audit?",
    "options": [
      "To check that risks are controlled concerning the accounting system and other such IT, and IT governance is implemented",
      "To check that risk management is implemented effectively concerning information security, including the method of use of the PCs that the accounting department possesses",
      "To check that various kinds of work including accounting service within an organization are implemented rationally and efficiently according to the policy of the organization",
      "To check that processing is performed without impropriety or errors, from the occurrence of various everyday transactions to aggregation into a financial report"
    ],
    "correctIndex": 3,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_66",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "Which of the following is an appropriate way to brainstorm?",
    "options": [
      "Asking participants to present feasible ideas and refrain from generating unrestrained ideas",
      "Proceeding with the session without blaming any member who creates an improved idea that takes advantage of another member’s idea",
      "Proceeding with the session while selecting the ideas that are suitable to the theme",
      "Encouraging the criticism of ideas to pursue quality rather than quantity of ideas"
    ],
    "correctIndex": 1,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_67",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "![Image](Files/2025/question_diagrams/2025-67.png)\n\nA certain product’s sales plan and sales result are shown in the table below. What is the \nratio in percentage of the profit result to the profit plan? Here, the decimal fractions of the \nratio are truncated. \n\nNote: The shaded section is not shown.",
    "options": [
      "77",
      "99",
      "110",
      "129"
    ],
    "correctIndex": 0,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_68",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "If risk assessment is divided into three (3) processes, which of the following is the third \nprocess besides risk identification and risk evaluation?",
    "options": [
      "Risk transfer",
      "Risk avoidance",
      "Risk reduction",
      "Risk analysis"
    ],
    "correctIndex": 3,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_69",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "Which of the following is the most appropriate term that describes the case below? \n \n“In order to achieve continuous growth, a company withdraws from business area A with \nstagnant sales, and puts the management resources into strengthening business area B.”",
    "options": [
      "Business environment",
      "Business strategy",
      "Management vision",
      "Management philosophy"
    ],
    "correctIndex": 1,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_70",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "Which of the following is an expression that calculates operating profit?",
    "options": [
      "(Gross profit) − (Selling, general, and administrative expense)",
      "(Sales) − (Cost of sales)",
      "(Current profits) + (Extraordinary profit) − (Extraordinary loss)",
      "(Current net profit before tax) − (Corporate tax, residential tax, and business tax)"
    ],
    "correctIndex": 0,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_71",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "In order to improve the customer service level of a call center, the complaints received \nfrom customers concerning the response of the call center are classified and tabulated. Which \nof the following is a chart suitable for displaying the number of complaints in a bar chart and \nthe cumulative percentage in a line chart, in descending order of complaints, for determining \nthe priority of improvement?",
    "options": [
      "PERT chart",
      "Control chart",
      "Cause and effect diagram",
      "Pareto chart"
    ],
    "correctIndex": 3,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_72",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "Which of the following is a role that has direct responsibility for technology management, \nsuch as the creation of a technology strategy and the promotion of technology development?",
    "options": [
      "CEO",
      "CFO",
      "COO",
      "CTO"
    ],
    "correctIndex": 3,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_73",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "Which of the following is a corporate activity of compliance promotion?",
    "options": [
      "A mechanism for sharing sales people’s sales know-how, customer information, and negotiation information in the sales department is implemented to improve sales productivity.",
      "A mechanism for sharing customer information and purchasing history among all departments that come into contact with customers is implemented to increase customer satisfaction.",
      "Schedules, documents, messages, and meeting room reservation status are shared with groups such as departments and projects in order to prevent loss of communication.",
      "A code of conduct or a conduct manual based on corporate ethics that aims to follow the law is created, and ethical education is implemented to ensure that employees understand them."
    ],
    "correctIndex": 3,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_74",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "Among information processing standards, which of the following is defined for \ninformation security management?",
    "options": [
      "IEEE 802.3",
      "ISO/IEC 27001",
      "JPEG 2000",
      "MPEG 1"
    ],
    "correctIndex": 1,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_75",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "Which of the following is the most appropriate example of standardization in the \nmanufacturing industry?",
    "options": [
      "Daily workload is balanced, and the types and volume of components taken daily in from the previous process are equalized.",
      "In order to streamline the production process, common components and procedures are used for manufacturing.",
      "In order to improve the speed of a production management program, the optimum algorithm is selected.",
      "Production planning, production processes, and working methods are simplified through a reduction in product types and a review of work details."
    ],
    "correctIndex": 1,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_76",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "According to the ISO 9000 family, quality is defined as the “degree to which a set of \ninherent characteristics fulfills requirements.”  When products are evaluated on the basis of \nthis definition, which of the following is most appropriate as a product with good quality?",
    "options": [
      "A product having no customer complaints and a high level of customer satisfaction",
      "A product that a company produces in-house without outsourcing",
      "A product designed and manufactured using CAD and CAM",
      "A product utilizing materials and components of high quality"
    ],
    "correctIndex": 0,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_77",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "Which of the following is the most appropriate example of enhanced corporate \ngovernance?",
    "options": [
      "Enhancing the labor system in order to empower women",
      "Purchasing another company in order to swiftly deploy business",
      "Increasing the number of highly-independent outside directors",
      "Withdrawing from a business where it is hard to obtain profit"
    ],
    "correctIndex": 2,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_78",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "A piece of software is provided in a form that enables use at a set fee or for a certain \nperiod of time. Which of the following is the most appropriate term to express this form of \nuse?",
    "options": [
      "Activation",
      "Adware",
      "Subscription",
      "Volume license"
    ],
    "correctIndex": 2,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_79",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "![Image](Files/2025/question_diagrams/2025-79.png)\n\nIn order to consider near-term strategies, automobile manufacturer Company A \nidentified its strengths and weaknesses, as well as the opportunities and threats it faces in \nthe external environment. On the basis of the results, which of the following is appropriate \nas measures to leverage the company's strengths and overcome the threats?",
    "options": [
      "Extend the retirement age of skilled workers or implement rehiring",
      "Procure funds at low interest and stockpile large reserves of oil",
      "Conduct research and development and commercialize electric automobiles",
      "Take advantage of brand image to strengthen sales capabilities"
    ],
    "correctIndex": 2,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_80",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "Which of the following is an appropriate description concerning M&A?",
    "options": [
      "The analysis of the flow of business and the chain of value for creating value of products and services provided by a company",
      "The increase in autonomy in business strategy making by dividing a company by business or region",
      "The drastic reform of business processes, and using IT to increase business throughput and cost efficiency",
      "The acceleration of business deployment by fulfilling the functions that the company is lacking from other companies through corporate acquisition, etc."
    ],
    "correctIndex": 3,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_81",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "Which of the following is an appropriate explanation of 3C analysis that is used to \nanalyze a business environment?",
    "options": [
      "The analysis is performed from the three (3) perspectives of the customers, the competitors, and the company.",
      "The analysis is performed from the three (3) perspectives of last purchase date, purchase frequency, and purchase amount.",
      "The analysis is performed by decomposition into the three (3) elements of era, age, and generation.",
      "The analysis is performed by categorization into three (3) groups in descending order of total sales."
    ],
    "correctIndex": 0,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_82",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "Which of the following is an appropriate description concerning a balanced scorecard \n(BSC)?",
    "options": [
      "It is a business management technique that converts a company or organization’s vision and strategy into specific actions from four (4) viewpoints (“financial viewpoint,” “customer viewpoint,” “business process viewpoint,” and “growth and learning viewpoint”).",
      "It is an approach where the corporate activities of providing a product or service to customers are viewed as a chain of activities of procurement, development, manufacturing, sales, and service that adds and builds up value and costs in a sequential manner and produces the final “value” for the customer.",
      "It is a business analysis technique for a company that produces and sells a wide variety of products and is involved in several businesses to determine the products and businesses’ combination that has the most efficient and effective distribution of management resources from a strategic perspective.",
      "It is a business strategy technique for use in the evaluation of strengths, weaknesses, opportunities, and threats in projects, venture businesses, and other such activities by organizations and individuals that perform decision making in order to achieve a target."
    ],
    "correctIndex": 0,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_83",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "Several companies want to collaborate on research and development to develop a new \nbusiness. Which of the following is an appropriate organization that is formed through \ncollaborative investment?",
    "options": [
      "M&A",
      "Cross-license",
      "Joint venture",
      "Spin-off"
    ],
    "correctIndex": 2,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_84",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "Which of the following is the most appropriate example of business improvement \nthrough the implementation of SCM?",
    "options": [
      "Products are now sold over the Internet as well, so increased sales on the basis of expanded sales channels can be anticipated.",
      "The sales information and sales know-how possessed by sales representatives is now managed with a database, so it is possible to share these with the sales department as a whole.",
      "Sales information is now sent to a manufacturer over a network, so the manufacturer can produce and supply products in a timely way.",
      "Sales data from stores are now gathered on a server at headquarters, so sales trends can be analyzed by age and by gender."
    ],
    "correctIndex": 2,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_85",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "A certain bank makes the deployment of highly convenient and advanced services easier \nby publishing the interface specifications for its systems and permitting access from external \nparties who have concluded a contract in advance. Which of the following is the most \nappropriate term to express this initiative?",
    "options": [
      "BPO",
      "RPA",
      "Open API",
      "Technology management"
    ],
    "correctIndex": 2,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_86",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "Which of the following is a system that collects information that is required for sales \nmanagement or inventory control by reading or keying in a product code or a buyer’s \nattribute at the time of a sale?",
    "options": [
      "ETC",
      "GPS",
      "POS",
      "SCM"
    ],
    "correctIndex": 2,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_87",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "Which of the following is the most appropriate description concerning deep learning?",
    "options": [
      "It is a mechanism that integrates information and the workflow between departments that are involved with customers, such as sales, marketing, and after-sales service.",
      "It is a form of education, learning, and training that is implemented by using digital devices such as computers, and communication networks.",
      "It is a mechanism for the knowledge and knowhow possessed by each individual in an organization to be shared and effectively utilized by the organization as a whole.",
      "It is a technology where a computer itself identifies and learns the characteristics of data by analyzing a large volume of data with a model that imitates the neural circuits of a human being."
    ],
    "correctIndex": 3,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_88",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "Which of the following is an appropriate effect of CAD?",
    "options": [
      "Identifying the required volume of material, and placing the optimum order",
      "Automating production processes and removing the need for human work",
      "Managing the series of production processes in an integrated manner",
      "Reusing design data and simplifying the streamlining of work"
    ],
    "correctIndex": 3,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_89",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "Which of the following is the most appropriate term for referring to an automobile that \nhas a function for connecting to the Internet, sends information captured by onboard sensors \nto a server and receives the driving-related information from the server for purposes such as \nsupport for driving?",
    "options": [
      "Car sharing",
      "Car navigation system",
      "Connected car",
      "Electric automobile"
    ],
    "correctIndex": 2,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_90",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "In a manufacturing company, a production system uses electronic tags containing \ninformation such as the part number of a component. The tags are used as a production order \nfrom a post-process to a pre-process and a delivery note from a pre-process to a post-process. \nA system such as this is used in a just in time production system in a supply chain or in-house \nmanufacturing. Which of the following is the appropriate name for a system such as this?",
    "options": [
      "Kanban system",
      "Craft production system",
      "Cell production system",
      "Build-to-stock production system"
    ],
    "correctIndex": 0,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_91",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "Crowdfunding can be classified into loan-based, donation-based, purchase-based, or \ninvestment-based types, depending on the form of funding and the way the compensation is \npaid. In order to start a new business, Company A has decided to raise funds through \ncrowdfunding and pay a part of the profits to the funders as dividends. Which of the following \nis the most appropriate type of crowdfunding used by Company A?",
    "options": [
      "Loan-based crowdfunding",
      "Donation-based crowdfunding",
      "Purchase-based crowdfunding",
      "Investment-based crowdfunding"
    ],
    "correctIndex": 3,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_92",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "As sightseeing guidance, images of buildings from the past and explanatory information \nare displayed on top of the current actual scenery when a smartphone is pointed at a historic \nsite or other such site. Which of the following is the most appropriate term to describe the \nmechanism that is utilized?",
    "options": [
      "AR",
      "GUI",
      "VR",
      "Metaverse"
    ],
    "correctIndex": 0,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_93",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "Which of the following is the most appropriate description concerning DFD?",
    "options": [
      "It represents transitions of the state of a system as time passes and the condition changes.",
      "It represents the relationship and data structure of the entities handled by a system.",
      "It represents the attributes of, operations for and relations between the components that a system is composed of.",
      "It focuses on the flow of data, and represents the relations between the flow and the processing of data."
    ],
    "correctIndex": 3,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_94",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "Which of the following is the most appropriate term for information in large quantities \nand in diverse forms that grows rapidly and is expected to help obtain knowledge useful for \ndecision-making?",
    "options": [
      "Big data",
      "Diversity",
      "Core competence",
      "Crowdfunding"
    ],
    "correctIndex": 0,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_95",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "Which of the following is the most appropriate explanation of the relation between \nbusiness strategy and information systems strategy?",
    "options": [
      "A business strategy and information systems strategy are created independently of each other.",
      "An information systems strategy is created on the basis of a business strategy.",
      "A business strategy is created on the basis of an information systems strategy.",
      "An information systems strategy is the strategy of an IT department, and a business strategy is the strategy of a business planning department."
    ],
    "correctIndex": 1,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_96",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "Which of the following is a term that represents the practical verification of a new \nconcept or idea before development?",
    "options": [
      "CRM",
      "KPI",
      "PoC",
      "SLA"
    ],
    "correctIndex": 2,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_97",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "Which of the following is the appropriate combination of terms or phrases to be inserted \ninto \n through \n in the description below concerning a request for \nproposal? \nA request for proposal concerning system development is a document by which generally \n presents to \n the \n, procurement conditions, etc.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correctIndex": 0,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_98",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "Which of the following is the most appropriate term that refers to the goals for \ndevelopment that must be achieved by 2030 adopted by the United Nations in order to achieve \na sustainable world?",
    "options": [
      "SDGs",
      "SDK",
      "SGA",
      "SGML"
    ],
    "correctIndex": 0,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_99",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "When the software lifecycle is divided into the planning process, the requirements \ndefinition process, the development process, and the operation process, which of the \nfollowing is the process where the system functions that users and stakeholders require are \nclarified and consensus is built on the basis of a computerization plan?",
    "options": [
      "Planning process",
      "Requirements definition process",
      "Development process",
      "Operation process"
    ],
    "correctIndex": 1,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  },
  {
    "id": "2025_FE-A_100",
    "category": "Technology",
    "subdomain": "General",
    "examYear": 2025,
    "questionText": "Which of the following is the most appropriate term to express the change where by using \ndigital technology, a company creates a user experience (UX) and a business model that \nattract customers, expels conventional services in the industry, and as a result destroys the \nexisting structure of an industry?",
    "options": [
      "Digital signage",
      "Digital disruption",
      "Digital divide",
      "Digital transformation"
    ],
    "correctIndex": 1,
    "explanation": "No explanation provided.",
    "difficultyWeight": 1
  }
];
