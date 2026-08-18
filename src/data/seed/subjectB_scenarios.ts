import { SubjectBScenario } from '../../types/exam';

export const SEED_SUBJECT_B_SCENARIOS: SubjectBScenario[] = [
  {
    "scenarioId": "fe-2026s-q1",
    "title": "Subject B Q1 (2026S): Algorithms & Programming",
    "examYear": 2026,
    "domain": "Algorithms & Programming",
    "contextMarkdown": "Open the embedded PDF at page 4 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2026s-q1-sub1",
        "questionNumber": 1,
        "prompt": "Q1. From the answer group below, select the correct answer to be inserted into _______ in the description. Here, the array index starts at 1. When the program is executed, the output is “ _______ ”.",
        "options": [
          "a) 1, 0",
          "b) 1, 1",
          "c) 1, 2",
          "d) 2, 1",
          "e) 2, 2",
          "f) 2, 3"
        ],
        "correctIndex": 2,
        "explanation": "Official ITPEC Subject B answer for Q1 (2026S) is Option (c).",
        "requiresPseudocode": true,
        "pseudocodeBlock": "integer: x ← 1 \ninteger: y ← 2 \ninteger: z ← 3 \ninteger []: ar ← {0, 0} \ny ← x \nar[x] ← y \nz ← y \nx ← z \nar[2] ← z + ar[1] \noutput ar[1], ar[2] // the values are separated by \", \""
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2026S_FE-B_Questions.pdf",
    "pdfPage": 4
  },
  {
    "scenarioId": "fe-2026s-q2",
    "title": "Subject B Q2 (2026S): Data Structures & Memory",
    "examYear": 2026,
    "domain": "Data Structures & Memory",
    "contextMarkdown": "Open the embedded PDF at page 5 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2026s-q2-sub1",
        "questionNumber": 1,
        "prompt": "Q2. From the answer group below, select the correct combination of answers to be inserted into ____A____ through ____C____ in the description. Function f receives an integer value as argument argval and returns the grade character. The return value of f(92), f(72), and f(-10) are ___A___, ____B____, and “ ___C___,” respectively. Note that the function has a specification bug.",
        "options": [
          "a) a b d",
          "b) a c d",
          "c) a c w",
          "d) b b d",
          "e) b c d",
          "f) b c w"
        ],
        "correctIndex": 3,
        "explanation": "Official ITPEC Subject B answer for Q2 (2026S) is Option (d).",
        "requiresPseudocode": true,
        "pseudocodeBlock": "○ character: f(integer: argval) \n character: retvar ← \"w\" \n if (argval > 90) \n retvar ← \"a\" \n endif \n if (argval > 70) \n retvar ← \"b\" \n elseif (argval > 60) \n retvar ← \"c\" \n elseif (argval ≤ 60) \n retvar ← \"d\" \n endif \n return retvar"
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2026S_FE-B_Questions.pdf",
    "pdfPage": 5
  },
  {
    "scenarioId": "fe-2026s-q3",
    "title": "Subject B Q3 (2026S): Software Engineering",
    "examYear": 2026,
    "domain": "Software Engineering",
    "contextMarkdown": "Open the embedded PDF at page 6 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2026s-q3-sub1",
        "questionNumber": 1,
        "prompt": "Q3. From the answer group below, select the correct answer to be inserted into _________ in the program. Here, the array indexes start at 1. The function distance receives integer arrays S and T of size n as arguments and returns the Manhattan distance of the two vectors that can be computed as $\\sum_{i=1}^{n} |S[i] - T[i]|$. Function abs, which is used by the function distance, returns the absolute value of an integer. Assume that n is 1 or greater.",
        "options": [
          "a) p ← p + abs(S[i] + T[i])",
          "b) p ← p + abs(S[i] − T[i])",
          "c) p ← p − abs(S[i] + T[i])",
          "d) p ← p − abs(S[i] − T[i])"
        ],
        "correctIndex": 1,
        "explanation": "Official ITPEC Subject B answer for Q3 (2026S) is Option (b).",
        "requiresPseudocode": true,
        "pseudocodeBlock": "○ integer: distance(integer []: S, integer []: T, integer: n) \n integer: p ← 0 \n integer: i \n for (increase i from 1 to n by 1) \n _________ \n endfor \n return p"
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2026S_FE-B_Questions.pdf",
    "pdfPage": 6
  },
  {
    "scenarioId": "fe-2026s-q4",
    "title": "Subject B Q4 (2026S): Computer Architecture & OS",
    "examYear": 2026,
    "domain": "Computer Architecture & OS",
    "contextMarkdown": "Open the embedded PDF at page 7 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2026s-q4-sub1",
        "questionNumber": 1,
        "prompt": "Q4. From the answer group below, select the correc t combination of answers to be inserted into ____A____ through ___C___ in the program. The function isHarshad checks whether the given integer n is a Harshad number. The function returns true if the given number is a Harshad number, or false otherwise. A Harshad number, also known as a Niven number, is a positive integer that is divisible by the sum of its digits. For instance, 156 is a Harshad number because the sum of its digits (1 + 5 + 6 = 12) divides it evenly without a remainder (156 ÷ 12 = 13).",
        "options": [
          "a) integer part of (num ÷ 10) num mod 10 sum = n",
          "b) integer part of (num ÷ 10) num mod 10 num mod sum = 0",
          "c) integer part of (num ÷ 10) num mod 10 n mod sum = 0",
          "d) num mod 10 integer part of (num ÷ 10) sum = n",
          "e) num mod 10 integer part of (num ÷ 10) num mod sum = 0",
          "f) num mod 10 integer part of (num ÷ 10) n mod sum = 0"
        ],
        "correctIndex": 5,
        "explanation": "Official ITPEC Subject B answer for Q4 (2026S) is Option (f).",
        "requiresPseudocode": true,
        "pseudocodeBlock": "○ boolean: isHarshad(integer: n) \ninteger: num ← n \ninteger: sum ← 0 \nif (num < 1) \n return false \nendif \nwhile (num > 0) \n sum \n← sum + (____A____) \n num ← (____B____) \nendwhile \nreturn (____C____) // Return true if n is a Harshad number, \n// or false otherwise."
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2026S_FE-B_Questions.pdf",
    "pdfPage": 7
  },
  {
    "scenarioId": "fe-2026s-q5",
    "title": "Subject B Q5 (2026S): Databases & SQL",
    "examYear": 2026,
    "domain": "Databases & SQL",
    "contextMarkdown": "Open the embedded PDF at page 8 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2026s-q5-sub1",
        "questionNumber": 1,
        "prompt": "Q5. From the answer group below, select the correct answer to be inserted into _________ in the description. When the procedure proc1 is called, the output is “ _______ ” in turn.",
        "options": [
          "a) A, B, B, C,",
          "b) A, B, C, C,",
          "c) B, A, C, C,",
          "d) B, C, B, A,",
          "e) B, C, C, A,",
          "f) C, B, A, C,",
          "g) C, B, B, A,",
          "h) C, B, C, A,"
        ],
        "correctIndex": 4,
        "explanation": "Official ITPEC Subject B answer for Q5 (2026S) is Option (e).",
        "requiresPseudocode": true,
        "pseudocodeBlock": "○ proc1() \n proc2() \n proc3() \n output \"A, \" \n \n○ proc2() \n output \"B, \" \n proc3() \n \n○ proc3() \n output \"C, \""
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2026S_FE-B_Questions.pdf",
    "pdfPage": 8
  },
  {
    "scenarioId": "fe-2026s-q6",
    "title": "Subject B Q6 (2026S): Networking & Security",
    "examYear": 2026,
    "domain": "Networking & Security",
    "contextMarkdown": "Open the embedded PDF at page 9 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2026s-q6-sub1",
        "questionNumber": 1,
        "prompt": "Q6. From the answer group below, select the correct combination of answers to be inserted into ____A____ and ____B____ in the program. The quadratic equation $a_1 x^2 + b_1 x + c_1 = 0$ can be formulated as $x^2 + \\frac{b_1}{a_1} x + \\frac{c_1}{a_1} = 0$, where $a_1 \\neq 0$. If we replace $\\frac{b_1}{2 a_1}$ and $\\frac{c_1}{a_1}$ by $b$ and $c$ respectively, it can be further formulated as $x^2 + 2bx + c = 0$, and the roots are as follows: - **Case 1**: if $b^2 - c = 0$, double root $-b$ - **Case 2**: if $b^2 - c > 0$, two real roots $-b \\pm \\sqrt{b^2 - c}$ - **Case 3**: if $b^2 - c < 0$, two imaginary roots $-b \\pm i\\sqrt{c - b^2}$, where $i = \\sqrt{-1}$ The procedure quadEquation takes the coefficients of a quadratic equation in arguments a1, b1, and c1 and uses the above formula to determine and output the roots. Here, a1 is not 0 and function sqrt returns the principal square root of its non-negative argument.",
        "options": [
          "a) −b −sqrt(val)",
          "b) −b sqrt(−val)",
          "c) b −sqrt(val)",
          "d) b sqrt(−val)"
        ],
        "correctIndex": 3,
        "explanation": "Official ITPEC Subject B answer for Q6 (2026S) is Option (d).",
        "requiresPseudocode": true,
        "pseudocodeBlock": "○ quadEquation(real: a1, real: b1, real: c1) \n real: b ← −b1 / (2 × a1) \n real: c ← c1 / a1 \n real: val ← b × b − c \n real: tmp \n if (val \n= 0) \n output \"root1=root2=\", ____A____ \n elseif (val > 0) \n tmp ← sqrt(val) \n output \"root1=\", b + tmp \n output \"root2=\", b − tmp \n else \n tmp ← ____B____ \n output \"root1=\", b, \"+\", tmp, \"i\" \n output \"root2=\", b, \"−\", tmp, \"i\" \n endif"
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2026S_FE-B_Questions.pdf",
    "pdfPage": 9
  },
  {
    "scenarioId": "fe-2026s-q7",
    "title": "Subject B Q7 (2026S): Algorithms & Programming",
    "examYear": 2026,
    "domain": "Algorithms & Programming",
    "contextMarkdown": "Open the embedded PDF at page 10 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2026s-q7-sub1",
        "questionNumber": 1,
        "prompt": "Q7. From the answer group below, select the correc t combination of answers to be inserted into ____A____ and ____B____ in the program. Here, the array index starts at 1. The function linearSearch linearly searches the global array D using the recursive function recursive, and if an element with th e same value as the argument searchKey exists, it returns that element index, otherwise -1 is returned. Assume that the array D has no duplicate elements.",
        "options": [
          "a) 1 index − 1",
          "b) 1 N − 1",
          "c) 1 N − index",
          "d) Index index − 1",
          "e) Index N − 1",
          "f) Index N − index",
          "g) index – 1 index − 1",
          "h) index – 1 N − 1",
          "i) index – 1 N − index"
        ],
        "correctIndex": 3,
        "explanation": "Official ITPEC Subject B answer for Q7 (2026S) is Option (d).",
        "requiresPseudocode": true,
        "pseudocodeBlock": "global: integer []: D ← {3, 4, 2, 5, 9} \nglobal: integer: N ← the number of elements of D \n \n○ integer: linearSearch(integer: searchKey) \n return recursive(searchKey, N) \n \n○ integer: recursive(integer: searchKey, integer: index) \n if (index < 1) \n return −1 \n elseif (D[index] \n= searchKey) \n return ____A____ \n else \n return recursive(searchKey, ____B____) \n endif"
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2026S_FE-B_Questions.pdf",
    "pdfPage": 10
  },
  {
    "scenarioId": "fe-2026s-q8",
    "title": "Subject B Q8 (2026S): Data Structures & Memory",
    "examYear": 2026,
    "domain": "Data Structures & Memory",
    "contextMarkdown": "Open the embedded PDF at page 11 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2026s-q8-sub1",
        "questionNumber": 1,
        "prompt": "Q8. From the answer group below, select the correct combination of answers to be inserted into ____A____ and ____B____ in the program. Here, the array index starts at 0. The program implements a queue that has a fixed capacity and only accepts integers. If the queue is not full, the function enqueue appends the specified valu e to its end and returns true. Otherwise, it returns false. If the queue is not empty, the function dequeue removes an element from the queue and returns its value. Otherwise, it returns undefined. The figure illustrates the working of a queue with capacity to hold up to seven integers. Initially, the queue contains five integers, with front, rear, and count set to 3, 1, and 5, respectively. Then, enqueue(51) and dequeue() are called in that order. index 0 1 2 3 4 5 6 item 34 undefined undefined 17 13 27 19 enqueue(51) is called. index 0 1 2 3 4 5 6 item 34 51 undefined 17 13 27 19 dequeue() is called. index 0 1 2 3 4 5 6 item 34 51 undefined undefined 13 27 19 Figure Queue with capacity of seven",
        "options": [
          "a) < 0 (front + 1) mod capacity",
          "b) < 0 (front − 1) mod capacity",
          "c) > 0 (front + 1) mod capacity",
          "d) > 0 (front − 1) mod capacity",
          "e) < capacity (front + 1) mod capacity",
          "f) < capacity (front − 1) mod capacity",
          "g) > capacity (front + 1) mod capacity",
          "h) > capacity (front − 1) mod capacity"
        ],
        "correctIndex": 4,
        "explanation": "Official ITPEC Subject B answer for Q8 (2026S) is Option (e).",
        "requiresPseudocode": true,
        "pseudocodeBlock": "global: integer: capacity ← 7 /* Capacity of the queue */ \nglobal: integer []: item ← {7 undefined} \nglobal: integer: count ← 0 /* Number of elements in the queue */ \nglobal: integer: front ← 0 /* Index of the front element */ \nglobal: integer: rear ← 0 /* Index of the element next to the rear */ \n \n○ boolean: enqueue(integer: val) \n if (count ____A____) \n item[rear] ← val \n count ← count + 1 \n rear ← (rear + 1) mod capacity \n return true \n else \n return false \n endif \n \n○ integer: dequeue() \n integer val \n if (count > 0) \n val ← item[front] \n item[front] ← undefined \n count ← count − 1 \n front ← ____B____ \n return val \n else \n return undefined \n endif"
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2026S_FE-B_Questions.pdf",
    "pdfPage": 11
  },
  {
    "scenarioId": "fe-2026s-q9",
    "title": "Subject B Q9 (2026S): Software Engineering",
    "examYear": 2026,
    "domain": "Software Engineering",
    "contextMarkdown": "Open the embedded PDF at page 13 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2026s-q9-sub1",
        "questionNumber": 1,
        "prompt": "Q9. From the answer group below, select the correc t combination of answers to be inserted into ____A____ and ____B____ in the program. The function isPerfectBinaryTree checks whether the binary tree with a given root node is perfect. In a perfect binary tree, all the internal nodes have exactly two children, and all leaf nodes are at the same level. The function returns true if the tree is perfect, or false otherwise. The class Node models a node of a binary tree as described in Table 1. A Node-type variable holds a reference to an instance of the class Node. Table 1 Class Node Member variable Type Description Key integer Integer value stored in a node of a binary tree. Left Node A reference to the left child of the node. If the left child does not exist, it is set to undefined. Right Node A reference to the right child of the node. If the right child does not exist, it is set to undefined. Table 2 describes the functions used in the program. Table 2 Functions",
        "options": [
          "a) Option A",
          "b) Option B",
          "c) Option C",
          "d) Option D"
        ],
        "correctIndex": 1,
        "explanation": "Official ITPEC Subject B answer for Q9 (2026S) is Option (b).",
        "requiresPseudocode": true,
        "pseudocodeBlock": "○ boolean: isPerfectBinaryTree(Node: root) \n // The argument root holds a reference to the root node \n // of a binary tree. \n integer: height, size \n height ← getHeight(root) \n size ← getSize(root) \n return ____A____ \n \n○ integer: getHeight(Node: root) \n integer: leftHeight, rightHeight \n if (root is undefined) \n return 0 \n endif \n leftHeight ← getHeight(root.left) \nFunction Return value Description \npow(integer a, \ninteger\u0003b) \ninteger Returns the result of raising a to the power of b \n(i.e., ab). \nmax(integer a, \ninteger b) \ninteger Returns the maximum of the two integers a and b. \n\n rightHeight ← getHeight(root.right) \n return 1 + max(leftHeight, rightHeight) \n \n○ integer: getSize(Node: root) \n if (root is undefined) \n return 0 \n endif \n return ____B____ \n \nAnswer Group \n A B \na) size + 1 = pow(2, height) getSize(root.left) + getSize(root.right) \nb) size + 1 = pow(2, height) getSize(root.left) + getSize(root.right) \n+ 1 \nc) size + 1 = pow(2, height) getSize(root.left) + getSize(root.right) \n− 1 \nd) size = pow(2, height − 1) getSize(root.left) + getSize(root.right) \ne) size = pow(2, height − 1) getSize(root.left) + getSize(root.right) \n+ 1 \nf) size = pow(2, height − 1) getSize(root.left) + getSize(root.right) \n− 1 \ng) size = pow(2, height) getSize(root.left) + getSize(root.right) \nh) size = pow(2, height) getSize(root.left) + getSize(root.right) \n+ 1 \ni) size = pow(2, height) getSize(root.left) + getSize(root.right) \n– 1"
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2026S_FE-B_Questions.pdf",
    "pdfPage": 13
  },
  {
    "scenarioId": "fe-2026s-q10",
    "title": "Subject B Q10 (2026S): Computer Architecture & OS",
    "examYear": 2026,
    "domain": "Computer Architecture & OS",
    "contextMarkdown": "Open the embedded PDF at page 15 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2026s-q10-sub1",
        "questionNumber": 1,
        "prompt": "Q10. From the answer group below, select the correct combination of answers to be inserted into ____A____ through ____C____ in the program. The function mergeTwoSortedList concatenates two linear sort ed linked lists in a sorted order and returns one linear linked list of sorted order. Each element of the linear linked lists is represented by the class ListElement. The table lists the description of the class ListElement. ListElement-type variable holds a reference to an instance of the class ListElement. Here, head1 and head2 represent the headers of the two sorted linked lists, respectively and are of type ListElement. After concatenation of two existing linear linked lists, the function returns a lin ear linked list headed with result, which is of type ListElement. Both the input linked lists and returne d linked list are sorted in ascending order of the member variable val. Table Explanation of the member variables of the class ListElement Member variable Type Description val integer The value of an element. next ListElement Reference to the instance that holds the next element in the list. If no next element exists, the status is undefined.",
        "options": [
          "a) head1.next is undefined head1.next head2.next",
          "b) head1.next is undefined head2.next head1.next",
          "c) head1.val ≤ head2.val head1.next head2.next",
          "d) head1.val ≤ head2.val head2.next head1.next",
          "e) head1.val = head2.val head1.next head2.next",
          "f) head1.val = head2.val head2.next head1.next",
          "g) head1.val ≥ head2.val head1.next head2.next",
          "h) head1.val ≥ head2.val head2.next head1.next"
        ],
        "correctIndex": 2,
        "explanation": "Official ITPEC Subject B answer for Q10 (2026S) is Option (c).",
        "requiresPseudocode": true,
        "pseudocodeBlock": "○ ListElement: mergeTwoSortedList(ListElement: head1, \n ListElement: head2) \n ListElement: result \n if (head1 is undefined) \n return head2 \n elseif (head2 is undefined) \n return head1\n \n endif \n if (____A____) \n result ← head1 \n result.next ← mergeTwoSortedList(____B____, head2) \n else \n result ← head2 \n result.next ← mergeTwoSortedList(head1, ____C____) \n endif \n return result"
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2026S_FE-B_Questions.pdf",
    "pdfPage": 15
  },
  {
    "scenarioId": "fe-2026s-q11",
    "title": "Subject B Q11 (2026S): Databases & SQL",
    "examYear": 2026,
    "domain": "Databases & SQL",
    "contextMarkdown": "Open the embedded PDF at page 17 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2026s-q11-sub1",
        "questionNumber": 1,
        "prompt": "Q11. From the answer group below, select the correc t combination of answers to be inserted into ____A____ and ____B____ in the program. Here, the array indexes start at 1. Counting Sort is a non-c omparison-based sorting algorithm. It is suitable for sorting a collection of objects according to keys that are small positive integers by means of counting the occurrences of key values in all data and then using those counts to place the values in their correct sorted positions. The function countSort below describes a simple variant of counting sort algorithm. The function countSort receives 2 arguments as follows: arr, the array of small positive integers to be sorted, and M, the max value for the range of the array (from 1 to M), and returns the sorted array. Element count[k] of local array count holds the frequency of key value k in the range 1 to M. For instance, when the function countSort is called as countSort({3, 6, 1, 5, 3, 4, 5}, 6), the value of array count is {1, 0, 2, 1, 2, 1}, and the function returns {1, 3, 3, 4, 5, 5, 6}.",
        "options": [
          "a) count[i] > 0 i ← i + 1",
          "b) count[i] > 0 i ← j + 1",
          "c) count[i] > 0 i ← k + 1",
          "d) count[k] > 0 i ← i + 1",
          "e) count[k] > 0 i ← j + 1",
          "f) count[k] > 0 i ← k + 1"
        ],
        "correctIndex": 3,
        "explanation": "Official ITPEC Subject B answer for Q11 (2026S) is Option (d).",
        "requiresPseudocode": true,
        "pseudocodeBlock": "○ integer []: countSort(integer []: arr, integer M) \n integer []: count ← {M zeros} \n integer: i, j, k \n integer: n ← the number of elements of arr \n integer []: result ← {n zeros} \n \n // counting each element of arr \n for (increase i from 1 to n by 1) \n k ← arr[i] \n count[k] ← count[k] + 1 \n endfor \n \n // forming array result from each key value and its count \n i ← 1 \n for (increase k from 1 to M by 1) \n if (____A____) \n for (increase j from 1 to count[k] by 1) \n result[i] ← k \n ____B____ \n endfor \n endif \n endfor \n return result // sorted array"
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2026S_FE-B_Questions.pdf",
    "pdfPage": 17
  },
  {
    "scenarioId": "fe-2026s-q12",
    "title": "Subject B Q12 (2026S): Networking & Security",
    "examYear": 2026,
    "domain": "Networking & Security",
    "contextMarkdown": "Open the embedded PDF at page 19 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2026s-q12-sub1",
        "questionNumber": 1,
        "prompt": "Q12. From the answer group below, select the correct combination of answers to be inserted into ____A____ and ____B____ in the program. Here, the array indexes start at 1. The function isIsomorphic compares the two character arrays s1 and s2 that are given as arguments. Both s1 and s2 have one or more elements. Two character arrays are considered isomorphic if the characters in s1 can be consistently replaced to obtain s2 without changing the order of ch aracters. Each character in s1 must map to exactly one character in s2, and no two characters in s1 may map to the same character in s2. A character may map to itself. If s1 and s2 do not have the same number of elements, the function returns false. Otherwise, it returns true if s1 and s2 are isomorphic and false if they are not. The table lists examples of s1 and s2 given to the function isIsomorphic and the return values. Table Examples of s1 and s2 given to the function isIsomorphic and the return values s1 s2 Return Value {\"e\", \"g\", \"g\"} {\"a\", \"d\", \"d\"} true {\"f\", \"o\", \"o\"} {\"b\", \"a\", \"r\"} false {\"p\", \"a\", \"p\", \"e\", \"r\"} {\"t\", \"i\", \"t\", \"l\", \"e\"} true {\"a\", \"b\"} {\"c\", \"c\"} false",
        "options": [
          "a) s1[i] = s2[j] s1[i] ≠ s2[j]",
          "b) s1[i] ≠ s2[j] s1[i] = s2[j]",
          "c) s2[i] = s2[j] s2[i] ≠ s2[j]",
          "d) s2[i] ≠ s2[j] s2[i] = s2[j]"
        ],
        "correctIndex": 3,
        "explanation": "Official ITPEC Subject B answer for Q12 (2026S) is Option (d).",
        "requiresPseudocode": true,
        "pseudocodeBlock": "○ boolean: isIsomorphic(character []: s1, character []: s2) \n integer: len, i, j \n len \n← number of elements in s1 \n if (number of elements in s2 ≠ len) \n return false \n endif \n for (increase i from 1 to (len − 1) by 1) \n for (increase j from (i + 1) to len by 1) \n if ((s1[i] = s1[j] and ____A____) \n or (s1[i] ≠ s1[j] and ___B___)) \n return false \n endif \n endfor \n endfor \n return true \n\u0003"
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2026S_FE-B_Questions.pdf",
    "pdfPage": 19
  },
  {
    "scenarioId": "fe-2026s-q13",
    "title": "Subject B Q13 (2026S): Algorithms & Programming",
    "examYear": 2026,
    "domain": "Algorithms & Programming",
    "contextMarkdown": "Open the embedded PDF at page 21 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2026s-q13-sub1",
        "questionNumber": 1,
        "prompt": "Q13. From the answer group below, select the correct answer to be inserted into _________ in the program. Here, the array indexes start at 1. The function extractEmails receives text as an argument, extracts email addresses from the text, and returns all collected email addresses. Here, a string in the format “name@domain” is considered to be an email address, where “name” and “domain” comprise only alphanumeric characters and the characters “.” (dot), “_” (underscore), and “-” (hyphen-minus). The table shows the descri ption of the functions used in the function extractEmails. Table Functions used in the function extractEmails Function Return value Description findSubstring( string: str, string: substr, integer: start) integer Returns the position of the first occurrence of the substring substr in the string str, starting from the position start. If the substring is not found, it returns 0. getChar(string: str, integer: index) character Returns the character at the position specified by index in the string str. length(string: str) integer Returns the length of the string str. extractEmails(\"Contact us at john.doe@example.com or jane_smith@test.org for support.\") returns {\"john.doe@example.com\", \"jane_smith@test.org\"}. In addition, extractEmails(\"a@b@c\") returns {\"a@b\", \"b@c\"}.",
        "options": [
          "a) decrease i from atIndex − 1 to index",
          "b) decrease i from atIndex to index",
          "c) increase i from index to atIndex",
          "d) increase i from index to atIndex − 1"
        ],
        "correctIndex": 0,
        "explanation": "Official ITPEC Subject B answer for Q13 (2026S) is Option (a).",
        "requiresPseudocode": true,
        "pseudocodeBlock": "○ string []: extractEmails(string: txt) \n character []: validChars ← {alphanumeric characters, \".\", \"_\", \"-\"} \n string []: results ← {} \n integer: index ← 1 \n integer: atIndex, i, count \n string: candidate \n while (true) \n atIndex \n← findSubstring(txt, \"@\", index) \n if (atIndex = 0) \n exit the while block \n endif \n candidate ← \"\" \n for (_________ by 1) \n if (getChar(txt, i) exists in validChars) \n prepend getChar(txt, i) to candidate \n else \n exit the for block \n\n endif \n endfor \n count ← 0 \n if (length(candidate) > 0) \n append \"@\" to candidate \n for (increase i from atIndex + 1 to length(txt) by 1) \n if (getChar(txt, i) exists in validChars) \n append getChar(txt, i) to candidate \n count ← count + 1 \n else \n exit the for block \n endif \n endfor \n if (count > 0) \n append the value of candidate at the end of results \n endif \n endif \n index \n← atIndex + 1 \n endwhile \n return results"
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2026S_FE-B_Questions.pdf",
    "pdfPage": 21
  },
  {
    "scenarioId": "fe-2026s-q14",
    "title": "Subject B Q14 (2026S): Data Structures & Memory",
    "examYear": 2026,
    "domain": "Data Structures & Memory",
    "contextMarkdown": "Open the embedded PDF at page 23 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2026s-q14-sub1",
        "questionNumber": 1,
        "prompt": "Q14. From the answer group below, select the correct combination of answers to be inserted into ____A____ and ____B____ in the program. Here, the array indexes start at 1. Percentile is a statistical measure used to describe the position of a particular value in a dataset relative to the remainder of the values. In education, percentiles are commonly used to rank students’ performance. For instance, if a student is in the 90th percentile, it implies the score of the student is higher than 90% of the other students. To calculate percentile of a student, use the following formula: $$\\text{Percentile} = \\frac{\\text{number of students with scores less than target}}{\\text{total number of students} - 1} \\times 100$$ For instance, if the scores of five students are given as an array {30, 60, 80, 72, 15}, then the percentile array for each student will be {25, 50, 100, 75, 0}. This implies that the number of students with scores less than 30 is 1; thus, the percentile for the first student is (1 ÷ (5 - 1) × 100) = 25, the number of students with scores less than 60 is 2, and the percentile for the second student is (2 ÷ (5 - 1) × 100) = 50. The same applies thereafter. The function calculatePercentile receives the scores of each student in the argument arr and calculates and returns the percentile of each student. Assume that the argument arr contains two or more numbers between 0 and 100.",
        "options": [
          "a) i ((count – 1) / (n − 1)) × 100",
          "b) i (count / (n − 1)) × 100",
          "c) i − 1 ((count – 1) / (n − 1)) × 100",
          "d) i − 1 (count / (n − 1)) × 100",
          "e) n ((count – 1) / (n − 1)) × 100",
          "f) n (count / (n − 1)) × 100"
        ],
        "correctIndex": 5,
        "explanation": "Official ITPEC Subject B answer for Q14 (2026S) is Option (f).",
        "requiresPseudocode": true,
        "pseudocodeBlock": "○ real []: calculatePercentile(integer []: arr) \n integer: n ← the number of elements of arr \n real []: percentiles ← {n zeros} \n integer: i, j, count \n for (increase i from 1 to n by 1) \n count \n← 0 \n for (increase j from 1 to ____A____ by 1) \n if (arr[i] > arr[j]) \n count ← count + 1 \n endif \n endfor \n percentiles[i] ← ____B____ \n endfor \n return percentiles"
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2026S_FE-B_Questions.pdf",
    "pdfPage": 23
  },
  {
    "scenarioId": "fe-2026s-q15",
    "title": "Subject B Q15 (2026S): Software Engineering",
    "examYear": 2026,
    "domain": "Software Engineering",
    "contextMarkdown": "Open the embedded PDF at page 25 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2026s-q15-sub1",
        "questionNumber": 1,
        "prompt": "Q15. From the answer group below, select the correct combination of answers to be inserted into ____A____ and ____B____ in the description. Bag of Words is a representation of text that describes the occurrence of words in a document. It is a feature extraction method in text mini ng. From a document collection (or corpus), a feature vector for each document can be created by considering the count of each word in that document. The following are two documents that construct a text corpus: document-I: John likes to watch movies. Mary likes movies too. document-II: Mary also likes to watch football games. Here, the word sequence, defined by the uni que words (ignoring case and punctuation) in the documents, is as follows: {John, Mary, likes, to, watch, movies, too, also, football, games} Now, feature vectors for document-I and document-II can be created using the unique words. Feature Vector for document-I = {1, 1, 2, 1, 1, 2, 1, 0, 0, 0} Feature Vector for document-II = {0, 1, 1, 1, 1, 0, 0, 1, 1, 1} Again, two new text documents and the corresponding word sequence are given below: document-III: He is a good boy. An honest boy is good. document-IV: He is an honest boy. The good boy is honest. Here, the word sequence for those two documents is {He, is, a, an, good, boy, honest, the}. Then, the Feature Vectors for document-III and document-IV will be ____A____ and ____B____, respectively.",
        "options": [
          "a) {1, 1, 1, 1, 2, 2, 1, 0} {1, 1, 0, 1, 1, 2, 2, 1}",
          "b) {1, 1, 1, 1, 2, 2, 1, 0} {1, 2, 0, 1, 1, 1, 1, 1}",
          "c) {1, 1, 1, 1, 2, 2, 1, 0} {1, 2, 0, 1, 1, 2, 2, 1}",
          "d) {1, 2, 1, 1, 1, 1, 1, 0} {1, 1, 0, 1, 1, 2, 2, 1}",
          "e) {1, 2, 1, 1, 1, 1, 1, 0} {1, 2, 0, 1, 1, 1, 1, 1}",
          "f) {1, 2, 1, 1, 1, 1, 1, 0} {1, 2, 0, 1, 1, 2, 2, 1}",
          "g) {1, 2, 1, 1, 2, 2, 1, 0} {1, 1, 0, 1, 1, 2, 2, 1}",
          "h) {1, 2, 1, 1, 2, 2, 1, 0} {1, 2, 0, 1, 1, 1, 1, 1}",
          "i) {1, 2, 1, 1, 2, 2, 1, 0} {1, 2, 0, 1, 1, 2, 2, 1}"
        ],
        "correctIndex": 8,
        "explanation": "Official ITPEC Subject B answer for Q15 (2026S) is Option (i).",
        "requiresPseudocode": false
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2026S_FE-B_Questions.pdf",
    "pdfPage": 25
  },
  {
    "scenarioId": "fe-2026s-q16",
    "title": "Subject B Q16 (2026S): Computer Architecture & OS",
    "examYear": 2026,
    "domain": "Computer Architecture & OS",
    "contextMarkdown": "Open the embedded PDF at page 26 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2026s-q16-sub1",
        "questionNumber": 1,
        "prompt": "Q16. From the answer group below, select the correct answer to be inserted into _________ in the program. The same answer goes into both blanks _________. Here, the array index starts at 1. The program converts the code point of a Unicode character to a 2-byte UTF-8 encoding. In this question, “ (16)” after a numerical value indicates a hexadecimal value. Each Unicode character is given an integer value that is kno wn as a code point. A character with a code point that ranges from 80(16) to 7FF(16) is encoded to a 2-byte value as below. Let the bit pattern with a 2-byte length be: 110xxxxx 10xxxxxx. The underlined 11 “x” positions in the bit pattern store the 11-bit code point. The code point is justified to the right, and 0 is stored in any leftover “ x” positions. This 2-byte value is the encoded result. For instance, when the code point AE (16) for Registered Sign character “®” is represented in binary, it is 10101110. When this is stored right-justified in the “ x” positions in the bit pattern above, it is 110xxx10 10101110. When 0 is stored in the three leftover “ x” positions, the UTF-8 encoding for Registered Sign character “®” 11000010 10101110 is obtained. In decimal form, this corresponds to {194, 174}. The function encode converts a Unicode code point that is passed as an argument to UTF-8 encoding, and returns an integer array that stores it one byte per element from the start of the array. It is assumed that only an integer value that ranges from 80 (16) to 7FF(16) is passed to encode as an argument.",
        "options": [
          "a) 2",
          "b) 32",
          "c) 64",
          "d) 256",
          "e) utf8Bytes[1]",
          "f) utf8Bytes[2]"
        ],
        "correctIndex": 2,
        "explanation": "Official ITPEC Subject B answer for Q16 (2026S) is Option (c).",
        "requiresPseudocode": true,
        "pseudocodeBlock": "○ integer []: encode(integer: codePoint) \n /* the initial value of utf8Bytes is the value when “x”s in the bit pattern are replaced \n with 0, divided into two 8-bit blocks, and each deemed to be binary */ \n integer []: utf8Bytes ← {192, 128} \n utf8Bytes[2] ← utf8Bytes[2] + (codePoint mod _________) \n utf8Bytes[1] ← utf8Bytes[1] + integer part of (codePoint ÷ _________) \n return utf8Bytes"
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2026S_FE-B_Questions.pdf",
    "pdfPage": 26
  },
  {
    "scenarioId": "fe-2026s-q17",
    "title": "Subject B Q17 (2026S): Databases & SQL",
    "examYear": 2026,
    "domain": "Databases & SQL",
    "contextMarkdown": "Open the embedded PDF at page 28 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2026s-q17-sub1",
        "questionNumber": 1,
        "prompt": "Q17. From the answer group below, select the most appropriate combination of answers to be inserted into ____A____ and ____B____ in the description. Company P conducts training sessions for junior s ecurity analysts within its security team. As part of this training activity, the team reviews simulated authentication log data and discusses how different password attack techniques may manifest in real-world systems. The purpose of this exercise is to help analysts accurately identify attack patterns, understand attacker behavior, and evaluate the defensive controls that are effective against each type of attack. During the exercise, the team focuses on th ree major password attack techniques, understanding that their visibility in authentication logs varies as summarized in Table 1. Table 1 Major password attack techniques Type Characteristics brute force attack Repeatedly attempting numerous different passwords against a single user account. It typically generates several failed authentication attempts for the same username within a short period of time.. credential stuffing attack Attempting to log in using previously compromised username- password pairs. This often results in authentication attempts against numerous different user accounts, with some attempts succeeding. offline password cracking Attempting to recover passwords by cracking stolen password hashes offline, without interacting with the authentication system. This attack does not generate authenticat ion logs at an authentication server. As part of the training, the security team rev iews multiple sample authentication logs recorded at an authentication server, as summ arized in Tables 2 and 3. The participants analyze the authentication patterns observed in both tables and determine the correspondence of each pattern corresponds to the password attack techniques listed in Table 1. Table 2 Sample authentication logs (Pattern A) Timestamp Source IP Username Event Result / Reason 2025-03-12 11:30:00 203.0.113.30 admin auth_fail InvalidPassword 2025-03-12 11:32:00 203.0.113.30 admin auth_fail InvalidPassword 2025-03-12 11:34:00 203.0.113.30 admin auth_fail InvalidPassword 2025-03-12 11:36:00 203.0.113.30 admin auth_fail InvalidPassword 2025-03-12 11:38:00 203.0.113.30 admin auth_fail InvalidPassword 2025-03-12 11:40:00 203.0.113.30 admin auth_fail InvalidPassword Table 3 Sample authentication logs (Pattern B) Timestamp Source IP Username Event Result / Reason 2025-03-12 11:05:00 198.51.100.45 john.smith auth_fail InvalidPassword 2025-03-12 11:07:30 198.51.100.45 emma.jones auth_success Authenticated 2025-03-12 11:10:00 198.51.100.45 michael.brown auth_fail InvalidPassword 2025-03-12 11:12:40 198.51.100.45 sarah.miller auth_fail InvalidPassword 2025-03-12 11:15:10 198.51.100.45 kevin.wilson auth_fail InvalidPassword 2025-03-12 11:17:50 198.51.100.45 olivia.davis auth_success Authenticated Based on this analysis, they conclude that the pattern observed in Table 2 is categorized as ____A____, and that observed in Table 3 is categorized as ____B____, as summarized in Table 1.",
        "options": [
          "a) brute force attack credential stuffing attack",
          "b) brute force attack offline password cracking",
          "c) credential stuffing attack brute force attack",
          "d) credential stuffing attack offline password cracking",
          "e) offline password cracking brute force attack",
          "f) offline password cracking credential stuffing attack"
        ],
        "correctIndex": 0,
        "explanation": "Official ITPEC Subject B answer for Q17 (2026S) is Option (a).",
        "requiresPseudocode": false
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2026S_FE-B_Questions.pdf",
    "pdfPage": 28
  },
  {
    "scenarioId": "fe-2026s-q18",
    "title": "Subject B Q18 (2026S): Networking & Security",
    "examYear": 2026,
    "domain": "Networking & Security",
    "contextMarkdown": "Open the embedded PDF at page 31 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2026s-q18-sub1",
        "questionNumber": 1,
        "prompt": "Q18. From the answer group below, select the most appropriate combination of answers to be inserted into ____A____ and ____B____ in the description. A research laboratory at University Q plans to introduce a cloud-based database to centrally store and manage data for one of its research projects. This database will be used by professors, researchers, students, and administrative staff participating in the project. Table 1 summarizes the data types, descriptions, a nd the roles and permitted operations for each user group. Table 1 Data Types and User Requirements (Excerpt) Data Type Description User Roles Research Proposals Detailed research plans and objectives - Professors and Researchers create and edit project proposals. - Students can view the proposals to understand the project objectives. - Administrative staff are not permitted to access this data. Experimental Data Raw and processed experimental results - To maintain data integrity, only Researchers are allowed to create and modify data. - Professors and Students review the data to understand experiment results and research progress. - Administrative staff are not permitted to access this data. The system administrator at University Q, who is responsible for introducing the database, reviewed the data types and user roles with the information security officer of the university. According to the information security policy of University Q, users must be granted only the permissions necessary for their roles to mi nimize potential damage in the event of account compromise. Based on this policy, the syst em administrator created user groups and configured access permissions for each content ty pe. Table 2 lists the resulting access right assignments for the database. Table 2 Access Right Assignments (Excerpt) Data Type Professors Researchers Students Administrative Staff Research Proposals (-) Experimental Data (-) Note: R: Read-only (viewing allowed) RW: Read and Write (includes creating and modifying) (-): Not allowed (no access)",
        "options": [
          "a) R RW R R RW R",
          "b) R RW R RW RW (-)",
          "c) RW RW R R RW R",
          "d) RW RW R RW RW (-)",
          "e) RW RW (-) R RW R",
          "f) RW RW (-) RW RW (-) A B"
        ],
        "correctIndex": 2,
        "explanation": "Official ITPEC Subject B answer for Q18 (2026S) is Option (c).",
        "requiresPseudocode": false
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2026S_FE-B_Questions.pdf",
    "pdfPage": 31
  },
  {
    "scenarioId": "fe-2026s-q19",
    "title": "Subject B Q19 (2026S): Algorithms & Programming",
    "examYear": 2026,
    "domain": "Algorithms & Programming",
    "contextMarkdown": "Open the embedded PDF at page 33 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2026s-q19-sub1",
        "questionNumber": 1,
        "prompt": "Q19. From the answer group below, select the most appropriate combination of answers to be inserted into ____A____ and ____B____ in the description. Company R is an e-commerce company that sells smartphone accessories through its website. In response to the increasing prevalence of SQL injection attacks in recent years, Company R decided to conduct a security training program for its security analysts, focusing specifically on SQL injection vulnerabilities. [Explanation of SQL Behavior] As part of the training, an explanation was provided to help the security analysts understand the working mechanism of SQL statements. In typical web applications, authentication is performed by constructing an SQL statemen t based on a predefined template. The application inserts the user-provided username and the hashed value of the user-provided password into the template and submits the resulting SQL statement to the database to check whether a matching record exists. An example of such an SQL query template is shown in figure given below. Note: The SQL query constructed from this template is executed by the database engine as a single SQL statement. Line breaks in the figure are included solely for readability. Figure SQL Query Template for Authentication If user input is incorporated into an SQL statement without proper handling, the structure of the SQL query may be altered, enabling attacks such as SQL injection. For instance, SQL syntax elements included in the input may be interpreted by the database. One common element is “--”, which starts a comment; any text that follows “--” is ignored by the database engine, effectively disabling the remaini ng part of the SQL statement, including the password check. [Hands-on Verification] The security analysts participated in a hands -on lab using a dedicated training server. They submitted crafted input values through the application’s authentication form. The application processed these inputs, inserted the username and the hashed password value into the SQL template shown in the figure above, generated a complete SQL statement, and executed it against the database. SELECT * FROM users WHERE username = '<input_username>' AND password = '<hashed_input_password>' The database contained a preregistered admin user with a hashed password that was not disclosed to the participants. They tested several input values for <input_username> while leaving the password input field empty in th e authentication form to determine whether authentication could be bypassed, and summarized the results in table given below. Table Evaluation Results Input Values for <input_username> Authentication Bypass Results Admin Fail admin'\u0003-- ____A____ admin' AND '1'='2' -- ____B____ Answer Group A B a) Fail Fail b) Fail Success c) Success Fail d) Success Success",
        "options": [
          "a) Option A",
          "b) Option B",
          "c) Option C",
          "d) Option D"
        ],
        "correctIndex": 2,
        "explanation": "Official ITPEC Subject B answer for Q19 (2026S) is Option (c).",
        "requiresPseudocode": false
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2026S_FE-B_Questions.pdf",
    "pdfPage": 33
  },
  {
    "scenarioId": "fe-2026s-q20",
    "title": "Subject B Q20 (2026S): Data Structures & Memory",
    "examYear": 2026,
    "domain": "Data Structures & Memory",
    "contextMarkdown": "Open the embedded PDF at page 35 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2026s-q20-sub1",
        "questionNumber": 1,
        "prompt": "Q20. From the answer group below, select the most appropriate answer to be inserted into _________ in the description. Company S had recently released a photo edit ing application named Application Y for mobile platforms. As storage for users to upload the photos they wish to process, Application Y utilizes a cloud storage service. The cloud storage service exposes REST API endpoints that accept requests from REST client. Application Y makes direct REST API calls to the cloud storage service, and the access tokens required to invoke these APIs are embedded directly within the application logic. Figure 1 shows the portion of the Application Y architecture related to access to the cloud storage service. Other components are omitted for simplicity. Note: * indicates the location where the access token used to invoke REST API calls is stored Figure 1 Application Y architecture related to access to the backend storage service A security researcher discovered that the access token embedded in Application Y could be extracted from Application Y. The researcher was able to invoke the REST API directly and access the storage service using the extracted token. The developer team of Company S proposed the following for architectures to prevent future exposure of storage access tokens. REST API Call (HTTPS) Application Logic Cloud Storage Service (REST API Endpoint) Application Y User Interface Storage Access Client (REST client) REST API Call (HTTPS) * Architecture One: Use a Secure Vault to manage access tokens. In this architecture, access tokens are stored in a Secure Vault, which is a digital safe for protecting sensitive data such as API access tokens. When Application Y needs to access the storage service, it retrieves a temporary token from the S ecure Vault and uses the token to make REST API calls directly to the cloud storage service over HTTPS. Note: * indicates the location where the access token used to invoke REST API calls is stored Figure 2 Architecture One Architecture Two: Use a VPN to secure communication. In this architecture, Application Y establishes a VPN connection to the cloud environment. All REST API calls from Application Y to the cloud storage service are transmitted through the VPN. The client application continues to use an access token to invoke the REST APIs of the storage service. Note: * indicates the location where the access token used to invoke REST API calls is stored Figure 3 Architecture Two VPN Gateway Application Logic REST API Call (HTTPS) Cloud Storage Service (REST API Endpoint) Application Y User Interface Storage Access Client (REST client) REST API Call (HTTPS) Secure Vault Application Logic Access Token Reply (HTTPS) Access Token Request (HTTPS) REST API Call (HTTPS) Cloud Storage Service (REST API Endpoint) Application Y User Interface Storage Access Client (REST client) (HTTPS) Access Token Re ply * * Architecture Three: Use an API Server. In this architecture, an API server is introduced between Application Y and the cloud storage service. The API server securely stores the ac cess tokens and performs REST API Calls. Application Y communicates only with the API server over HTTPS and does not possess access tokens for the cloud storage service. All authentication, authorization, and business logic are enforced on the API server, which performs REST API calls to the storage service on behalf of the client. Note: * indicates the location where the access token used to invoke REST API calls is stored Figure 4 Architecture Three API Server Storage Access Client (REST Client) Application Logic REST API Call (HTTPS) Cloud Storage Service (REST API Endpoint) Application Y User Interface Remote Service Interface Cl (R E REST API Call (HTTPS) * Architecture Four: Use a proxy server. In this architecture, a proxy server is deployed between Application Y and the cloud storage service. The proxy server stores the access credentials required to access the storage service. Application Y sends REST API requests to the proxy server over HT TPS, and the proxy server forwards these requests to the cloud storage service using the stored credentials. The proxy server does not perform application-specific authentication, authorization, or business logic enforcement, and simply relays REST API requests from the client to the storage service. Note: * indicates the location where the access token used to invoke REST API calls is stored Figure 5 Architecture Four By comparing them, the security team of Company S suggested the application development team redesign the application architecture to Architecture _________.",
        "options": [
          "a) One",
          "b) Two",
          "c) Three",
          "d) Four _ _"
        ],
        "correctIndex": 2,
        "explanation": "Official ITPEC Subject B answer for Q20 (2026S) is Option (c).",
        "requiresPseudocode": false
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2026S_FE-B_Questions.pdf",
    "pdfPage": 35
  },
  {
    "scenarioId": "fe-2025a-q1",
    "title": "Subject B Q1 (2025A): Algorithms & Programming",
    "examYear": 2025,
    "domain": "Algorithms & Programming",
    "contextMarkdown": "Open the embedded PDF at page 4 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2025a-q1-sub1",
        "questionNumber": 1,
        "prompt": "Q1. From the answer group below, select the corre ct combination of answers to be inserted into ____A____ and ____B____ in the program. Here, the array index starts at 1. The function sum receives an integer array array with at least two elements and two positive integers k and m (k < m ≤ number of elements in array). It calculates the sum of even elements of the array array whose indices are from k to m.",
        "options": [
          "a) array[i] mod 2 = 0 i ← i + 1",
          "b) array[i] mod 2 = 0 i ← i - 1",
          "c) array[i] mod 2 ≠ 0 i ← i + 1",
          "d) array[i] mod 2 ≠ 0 i ← i - 1"
        ],
        "correctIndex": 0,
        "explanation": "Official ITPEC Subject B answer for Q1 (2025A) is Option (a).",
        "requiresPseudocode": true,
        "pseudocodeBlock": "○ integer: sum(integer []: array, integer: k, integer: m) \n integer: s ← 0 \n integer: i ← k \n while (i ≤ m) \n if (____A____) \n s ← s + array[i] \n endif \n ____B____ \n endwhile \n return s"
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2025A_FE-B_Questions.pdf",
    "pdfPage": 4
  },
  {
    "scenarioId": "fe-2025a-q2",
    "title": "Subject B Q2 (2025A): Data Structures & Memory",
    "examYear": 2025,
    "domain": "Data Structures & Memory",
    "contextMarkdown": "Open the embedded PDF at page 5 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2025a-q2-sub1",
        "questionNumber": 1,
        "prompt": "Q2. From the answer group below, select the corre ct combination of answers to be inserted into ___A___ and ___B___ in the program. Here, the array index starts at 1. In statistics, the mode is the value that occurs most frequently in a dataset. For example, the mode of the integer array {2, 1, 1, 9, 6, 6, 2, 5, 6} is 6, as it occurs most often. The function findMode receives an integer array arr as a dataset and returns the mode for it.",
        "options": [
          "a) arr[i] = arr[j] m < arr[i]",
          "b) arr[i] = arr[j] m ≠ arr[i]",
          "c) arr[i] = arr[j] m_c < c",
          "d) arr[i] = arr[j] m_c > c",
          "e) m = arr[j] m < arr[i]",
          "f) m = arr[j] m ≠ arr[i]",
          "g) m = arr[j] m_c < c",
          "h) m = arr[j] m_c > c"
        ],
        "correctIndex": 2,
        "explanation": "Official ITPEC Subject B answer for Q2 (2025A) is Option (c).",
        "requiresPseudocode": true,
        "pseudocodeBlock": "○ integer: findMode(integer []: arr) \n integer: n ← the number of elements in arr \n integer: m ← arr[1] /* Current mode value */ \n integer: m_c ← 1 /* Frequency count of mode */ \n integer: c, i, j \n for (increase i from 1 to n - 1 by 1) \n c \n← 1 \n for (increase j from i + 1 to n by 1) \n if (___A___) \n c ← c + 1 \n endif \n endfor \n if (\n___B___) \n m_c ← c \n m ← arr[i] \n endif \n endfor \n return m"
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2025A_FE-B_Questions.pdf",
    "pdfPage": 5
  },
  {
    "scenarioId": "fe-2025a-q3",
    "title": "Subject B Q3 (2025A): Software Engineering",
    "examYear": 2025,
    "domain": "Software Engineering",
    "contextMarkdown": "Open the embedded PDF at page 6 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2025a-q3-sub1",
        "questionNumber": 1,
        "prompt": "Q3. From the answer group below, select the correct combination of answers to be inserted into ___A___ and ___B___ in the program. Here, the array index starts at 1. Given an array of positive integers and a targ et sum, the problem is to find the subarray whose sum is equal to the target sum. A subarra y is a part of the gi ven array composed of contiguous elements. For exampl e, when the target sum is 14, the shaded subarray in the figure satisfies the given condition. 6 3 2 5 1 1 7 3 Figure Example of an array The procedure subArraySum receives an integer array arr and an integer value targetSum as arguments and finds the subarray whose sum is equal to the target sum. If a subarray that satisfies this condition is found, it prints their starting and ending indices, and finishes the task. Otherwise, it prints the message “No subarray found”.",
        "options": [
          "a) N arr[end]",
          "b) N sum + arr[end]",
          "c) N sum + arr[start]",
          "d) N - 1 arr[end]",
          "e) N - 1 sum + arr[end]",
          "f) N - 1 sum + arr[start]",
          "g) targetSum arr[start]",
          "h) targetSum sum + arr[end]",
          "i) targetSum sum + arr[start]"
        ],
        "correctIndex": 1,
        "explanation": "Official ITPEC Subject B answer for Q3 (2025A) is Option (b).",
        "requiresPseudocode": true,
        "pseudocodeBlock": "○ subArraySum(integer []: arr, integer: targetSum) \n integer: sum, start, end \n integer: N ← the number of elements in arr \n for (increase start from 1 to N by 1) \n sum ← 0 \n for (increase end from start to ___A___ by 1) // α \n sum ← ___B___ \n if (sum = targetSum) \n output start, end \n return \n elseif (sum > targetSum) \n exit the for block marked α \n endif \n endfor \n endfor \n output \"No subarray found\""
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2025A_FE-B_Questions.pdf",
    "pdfPage": 6
  },
  {
    "scenarioId": "fe-2025a-q4",
    "title": "Subject B Q4 (2025A): Computer Architecture & OS",
    "examYear": 2025,
    "domain": "Computer Architecture & OS",
    "contextMarkdown": "Open the embedded PDF at page 8 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2025a-q4-sub1",
        "questionNumber": 1,
        "prompt": "Q4. From the answer group below, select the corre ct combination of answers to be inserted into ____A____ through ____C____ in the program. The procedure reverse_digits receives one positive integer argument named num and outputs both the original integer and the integer with its digits reversed. Assume that the ones digit of num is not 0. Example: Number is 456, output 654 Number is 23407, output 70432",
        "options": [
          "a) num > 0 rm × 10 + rev integer part of (temp ÷ 10)",
          "b) num > 0 rm × 10 + rev temp − rm",
          "c) num > 0 rev × 10 + rm integer part of (temp ÷ 10)",
          "d) num > 0 rev × 10 + rm temp – rm",
          "e) temp > 0 rm × 10 + rev integer part of (temp ÷ 10)",
          "f) temp > 0 rm × 10 + rev temp – rm",
          "g) temp > 0 rev × 10 + rm integer part of (temp ÷ 10)",
          "h) temp > 0 rev × 10 + rm temp – rm"
        ],
        "correctIndex": 6,
        "explanation": "Official ITPEC Subject B answer for Q4 (2025A) is Option (g).",
        "requiresPseudocode": true,
        "pseudocodeBlock": "○ reverse_digits(integer: num) \n integer: rev ← 0 \n integer: rm ← 0 \n integer: temp ← num \n while (____A____) \n rm ← temp mod 10 \n rev ← ____B____ \n temp ← ____C____ \n endwhile \n output \"Number is \", num, \", output \", rev"
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2025A_FE-B_Questions.pdf",
    "pdfPage": 8
  },
  {
    "scenarioId": "fe-2025a-q5",
    "title": "Subject B Q5 (2025A): Databases & SQL",
    "examYear": 2025,
    "domain": "Databases & SQL",
    "contextMarkdown": "Open the embedded PDF at page 9 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2025a-q5-sub1",
        "questionNumber": 1,
        "prompt": "Q5. From the answer group below, select the corre ct combination of answers to be inserted into ___A___ and ___B___ in the program. Prime numbers are the positive integers that are only divisible by the number itself and 1. Procedure printPrime receives the integer N (N ≥ 1) as an argument and prints the first N prime numbers. For example, printPrime(6) will print “2 3 5 7 11 13”.",
        "options": [
          "a) count ← count + 1 isPrime ← false",
          "b) count ← count + i isPrime ← false",
          "c) isPrime ← false count ← count + 1",
          "d) isPrime ← false count ← count + i"
        ],
        "correctIndex": 2,
        "explanation": "Official ITPEC Subject B answer for Q5 (2025A) is Option (c).",
        "requiresPseudocode": true,
        "pseudocodeBlock": "○ printPrime(integer: N) \n integer: count, number, i \n boolean: isPrime \n count \n← 1 \n number ← 2 \n while (count ≤ N) \n isPrime ← true \n for (increase i from 2 to integer part of the square root of number by 1) \n if (number mod i = 0) \n ___A___ \n exit the for block \n endif \n endfor \n if (isPrime = true) \n output \" \", number \n ___B___ \n endif \n number ← number + 1 \n endwhile"
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2025A_FE-B_Questions.pdf",
    "pdfPage": 9
  },
  {
    "scenarioId": "fe-2025a-q6",
    "title": "Subject B Q6 (2025A): Networking & Security",
    "examYear": 2025,
    "domain": "Networking & Security",
    "contextMarkdown": "Open the embedded PDF at page 10 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2025a-q6-sub1",
        "questionNumber": 1,
        "prompt": "Q6. From the answer group below, select th e correct answer to be inserted into ________ in the description. Class Rectangle represents a two-dimensional figure, and class Cuboid represents a three- dimensional figure. The class Cuboid is a subclass of the class Rectangle. Figures 1 and 2 explain the classes Rectangle and Cuboid, respectively. Member variable Type Description length integer Dimension of length. width integer Dimension of width. Constructor Description Rectangle(integer: _length, integer: _width) Initialize member variable length with _length and member variable width with _width. Method Return value Description enlarge(Rectangle: shape) None To increase the size, add shape.length to length and shape.width to width. output() None Output in format “(length, width)”. Figure 1 Class Rectangle Member variable Type Description height integer Dimension of height. Constructor Description Cuboid(integer: _length, integer: _width, integer: _height) Constructor of the super class is called with _length and _width as arguments in that order, and member variable height is initialized with the argument _height. Method Return value Description enlarge(Cuboid: shape) None To increase the size, add shape.length to length, shape.width to width and shape.height to height. output() None Output in format “(length, width, height)”. Figure 2 Class Cuboid When the program is executed, it is expected to produce the output “ ________ ”.",
        "options": [
          "a) (5, 2)",
          "b) (5, 2, 7)",
          "c) (9, 4)",
          "d) (9, 4, 7)",
          "e) (14, 6)",
          "f) (14, 6, 7)"
        ],
        "correctIndex": 4,
        "explanation": "Official ITPEC Subject B answer for Q6 (2025A) is Option (e).",
        "requiresPseudocode": true,
        "pseudocodeBlock": "Rectangle: f1 ← Rectangle(5, 2) \nCuboid: f2 ← Cuboid(9, 4, 7) \nf1.enlarge(f2) \nf1.output()"
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2025A_FE-B_Questions.pdf",
    "pdfPage": 10
  },
  {
    "scenarioId": "fe-2025a-q7",
    "title": "Subject B Q7 (2025A): Algorithms & Programming",
    "examYear": 2025,
    "domain": "Algorithms & Programming",
    "contextMarkdown": "Open the embedded PDF at page 12 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2025a-q7-sub1",
        "questionNumber": 1,
        "prompt": "Q7. From the answer group below, select the corre ct combination of answers to be inserted into ____A____ and ____B____ in the program. A singly linked list can be reversed using the following recursive procedure. Let head be the first element of the list, and let elm be undefined. (a) Reverse the order of the elements in the list starting from head, and set the next element of the last element in the reversed list—that is, the next element of head—to elm. To “reverse the order of the elements in the list starting from head,” reverse the list starting from the next element of head, and then connect head to the end of the reversed list. In other words, execute (a) by setting head as elm, and the next element of head as head. The recursive function reverseList reverses a singly linked list and returns the head of the reversed list. Initially, the function reverseList is called as reverseList(head, undefined). Here, head is the head of the singly linked li st before reversal and is of type ListElement. The table provides an explanation of the member variables of the class ListElement. ListElement-type variables store references to instances of the class ListElement. Table Explanation of the member variables of the class ListElement Member variable Type Description val integer The value of the element. next ListElement Reference to the next element, if there is no next element, the status is undefined.",
        "options": [
          "a) head.next elm",
          "b) head.next elm.next",
          "c) elm.next head.next.next",
          "d) elm.next elm",
          "e) elm.next elm.next"
        ],
        "correctIndex": 0,
        "explanation": "Official ITPEC Subject B answer for Q7 (2025A) is Option (a).",
        "requiresPseudocode": true,
        "pseudocodeBlock": "○ ListElement: reverseList(ListElement: head, ListElement: elm) \n ListElement: listHead \n if (head.next is not undefined) \n listHead ← reverseList(___A___, head) \n else \n listHead ← head \n endif \n head.next ← ___B___ \n return listHead"
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2025A_FE-B_Questions.pdf",
    "pdfPage": 12
  },
  {
    "scenarioId": "fe-2025a-q8",
    "title": "Subject B Q8 (2025A): Data Structures & Memory",
    "examYear": 2025,
    "domain": "Data Structures & Memory",
    "contextMarkdown": "Open the embedded PDF at page 14 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2025a-q8-sub1",
        "questionNumber": 1,
        "prompt": "Q8. From the answer group below, select the corre ct combination of answers to be inserted into ___A___ and ___B___ in the program. Here, the array index starts at 1. Stack stores data using firs t-in, last-out ordering. Here, th e items stored in the stack are integer values, and the stack is controlled by the procedure push and the function pop. The procedure push adds an item given as an argument to the top of the stack, and the function pop removes the top item from the stack and returns it. The global variable stck is an array of 10 integers that stores the stack items, and the global variable tos is the pointer that points to the topmost item of the stack.",
        "options": [
          "a) tos ← tos + 1 item ← stck[tos] tos ← tos + 1",
          "b) tos ← tos + 1 item ← stck[tos] tos ← tos − 1",
          "c) tos ← tos + 1 tos ← tos + 1 item ← stck[tos]",
          "d) tos ← tos + 1 tos ← tos − 1 item ← stck[tos]",
          "e) tos ← tos − 1 item ← stck[tos] tos ← tos + 1",
          "f) tos ← tos − 1 item ← stck[tos] tos ← tos − 1",
          "g) tos ← tos − 1 tos ← tos + 1 item ← stck[tos]",
          "h) tos ← tos − 1 tos ← tos − 1 item ← stck[tos]"
        ],
        "correctIndex": 1,
        "explanation": "Official ITPEC Subject B answer for Q8 (2025A) is Option (b).",
        "requiresPseudocode": true,
        "pseudocodeBlock": "global: integer []: stck ← {10 undefined} \nglobal: integer: tos ← 0 \n \n○ push(integer: item) \n if (tos = 10) \n output \"Stack is Full\" \n else \n ___A___ \n stck[tos] ← item \n endif \n \n○ integer: pop() \n integer: item \n if (tos < 1) \n output \"Stack is Empty\" \n return undefined \n else \n \n___B___ \n endif \n return item"
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2025A_FE-B_Questions.pdf",
    "pdfPage": 14
  },
  {
    "scenarioId": "fe-2025a-q9",
    "title": "Subject B Q9 (2025A): Software Engineering",
    "examYear": 2025,
    "domain": "Software Engineering",
    "contextMarkdown": "Open the embedded PDF at page 16 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2025a-q9-sub1",
        "questionNumber": 1,
        "prompt": "Q9. From the answer group below, select th e correct answer to be inserted into _________ in the description. Here, the array index starts at 1. The procedure traverse traces through a vertex of the graph in Figure 1, and outputs all vertex numbers in the graph. One of the vertex numbers of the graph is specified with the argument k. The global 2-dimensional array graph represents the graph in Figure 1. Each element graph[i,j] is equal to 1 if there is an edge between vertices i and j, and 0 otherwise. The array visited stores boolean values, where visited[i] indicates whether vertex i of the graph has been visited or not du ring the procedure. When the procedure is called as traverse(1), the output is in the order _______. Figure 1 Graph that is handled by the program Here, the procedure traverse uses a queue repr esented by the class Queue. Figure 2 provides an explanation of the class Queue. Constructor Description Queue() Creates an empty queue. Method Return value Description enqueue(integer: elm) None Adds the integer elm as an element to the queue. dequeue() integer Extracts the element from the queue and returns it. isEmpty() boolean Returns true if the queue is empty; otherwise, returns false. Figure 2 Explanation of the class Queue",
        "options": [
          "a) “1”, “2”, “3”, “4”, “5”",
          "b) “1”, “2”, “3”, “5”, “4”",
          "c) “1”, “2”, “4”, “3”, “5”",
          "d) “1”, “2”, “4”, “5”, “3”",
          "e) “1”, “2”, “5”, “4”, “3”",
          "f) “1”, “4”, “5”, “2”, “3”"
        ],
        "correctIndex": 2,
        "explanation": "Official ITPEC Subject B answer for Q9 (2025A) is Option (c).",
        "requiresPseudocode": true,
        "pseudocodeBlock": "global: integer [,]: graph \n← {{0, 1, 0, 1, 0}, \n {1, 0, 1, 0, 1}, \n {0, 1, 0, 0, 0}, \n {1, 0, 0, 0, 1}, \n {0, 1, 0, 1, 0}} \n\n○ traverse(integer: k) \n Queue: queue ← Queue() \n boolean []: visited ← {false, false, false, false, false} \n integer: v, i \n queue.enqueue(k) \n visited[k] \n← true \n while (not queue.isEmpty()) \n v ← queue.dequeue() \n output v \n for (increase i from 1 to 5 by 1) \n if (graph[v,i] = 1 and visited[i] = false) \n queue.enqueue(i) \n visited[i] ← true \n endif \n endfor \n endwhile"
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2025A_FE-B_Questions.pdf",
    "pdfPage": 16
  },
  {
    "scenarioId": "fe-2025a-q10",
    "title": "Subject B Q10 (2025A): Computer Architecture & OS",
    "examYear": 2025,
    "domain": "Computer Architecture & OS",
    "contextMarkdown": "Open the embedded PDF at page 18 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2025a-q10-sub1",
        "questionNumber": 1,
        "prompt": "Q10. From the answer group below, select the corre ct combination of answers to be inserted into ____A____ and ____B____ in the program. The procedure insertAfter inserts an element into a singly linked list at the position after an existing element with a speci fic data value. The argument targetData is a string type data that represents the value of the existing element in the list, after which a new element is to be inserted. If no corresponding element exists, no action is taken. The argument newData is also a string type data represents the value of the new element to be inserted. The class Element represents each element of the li nked list. The figure explains the constructor and the member variables of the class Element. Element-type variables store references to instances of the class Element. A reference to the first element in the list is pre- stored in the global variable head. Constructor Description Element(string: data) Initialize the element with the data passed as an argument, which stored in the member variable data, with the member variable next set to undefined. Member variable Type Description data string Data associated with the element. next Element This attribute represents the reference to the next element. Figure Class Element",
        "options": [
          "a) not undefined head",
          "b) not undefined x",
          "c) not undefined x.data",
          "d) not undefined x.next",
          "e) not undefined x.next.next",
          "f) undefined head",
          "g) undefined x",
          "h) undefined x.data",
          "i) undefined x.next",
          "j) undefined x.next.next"
        ],
        "correctIndex": 3,
        "explanation": "Official ITPEC Subject B answer for Q10 (2025A) is Option (d).",
        "requiresPseudocode": true,
        "pseudocodeBlock": "global: Element: head // stores first element in the list \n○ insertAfter(string: targetData, string: newData) \n Element: x, y \n x \n← head \n while(x is ____A____) \n if (x.data = targetData) \n y ← Element(newData) \n y.next ← ____B____ \n x.next ← y \n exit the while block \n else \n x ← x.next \n endif \n endwhile"
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2025A_FE-B_Questions.pdf",
    "pdfPage": 18
  },
  {
    "scenarioId": "fe-2025a-q11",
    "title": "Subject B Q11 (2025A): Databases & SQL",
    "examYear": 2025,
    "domain": "Databases & SQL",
    "contextMarkdown": "Open the embedded PDF at page 20 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2025a-q11-sub1",
        "questionNumber": 1,
        "prompt": "Q11. From the answer group below, select the corre ct combination of answers to be inserted into ____A____ and ____B____ in the program. Here, the array index starts at 1. The bubble sort compares adjacent elements in an array and swap s them if they are out of order. It makes multiple passes through an arra y. The bubble sort can be modified to stop early if it finds that the array has become sorted. The function quickBubble is modified from conventional bubble sort, whic h sorts the elements in ascending order, to recognize a sorted array and stop early. For example, the sorting of the unordered array {18, 1, 8, 6, 2, 9, 12, 14, 7, 11} is completed in six passes.",
        "options": [
          "a) maxIdx > 0 exchange = true",
          "b) maxIdx > 0 exchange = false",
          "c) maxIdx > 1 exchange = true",
          "d) maxIdx > 1 exchange = false"
        ],
        "correctIndex": 0,
        "explanation": "Official ITPEC Subject B answer for Q11 (2025A) is Option (a).",
        "requiresPseudocode": true,
        "pseudocodeBlock": "○ integer []: quickBubble(integer []: array) \n integer []: arraySorted ← array \n boolean: exchange \n integer: maxIdx, i \n exchange ← true \n maxIdx ← (the number of elements in arraySorted) - 1 \n while (___A___ and ___B___) \n exchange ← false \n for (increase i from 1 to maxIdx by 1) \n if (arraySorted[i] > arraySorted[i + 1]) \n exchange ← true \n swap the values of arraySorted[i] and arraySorted[i + 1] \n endif \n endfor \n maxIdx \n← maxIdx - 1 \n endwhile \n return arraySorted"
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2025A_FE-B_Questions.pdf",
    "pdfPage": 20
  },
  {
    "scenarioId": "fe-2025a-q12",
    "title": "Subject B Q12 (2025A): Networking & Security",
    "examYear": 2025,
    "domain": "Networking & Security",
    "contextMarkdown": "Open the embedded PDF at page 21 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2025a-q12-sub1",
        "questionNumber": 1,
        "prompt": "Q12. From the answer group below, select the corre ct combination of answers to be inserted into ___A___ and ___B___ in the program. Here, the array index starts at 1. The function containsSubstring receives two-character arrays str and seq as arguments, and returns a boolean value indicating whether the character array str contains the sequence seq as a substring. The character array str contains seq as a substring if every sequence of consecutive characters in seq exists somewhere in the sequence of characters in str, in the same order. For example, containsSubstring({\"a\", \"p\", \"p\", \"l\", \"e\"}, {\"p\", \"l\", \"e\"}) returns true, and containsSubstring({\"a\", \"p\", \"p\", \"l\", \"e\"}, {\"a\", \"e\"}) returns false. Assume that the number of elements in str and seq is one or more.",
        "options": [
          "a) str[i + j] j = seqlen",
          "b) str[i + j] j = seqlen + 1",
          "c) str[i + j] j = seqlen − 1",
          "d) str[i + j − 1] j = seqlen",
          "e) str[i + j − 1] j = seqlen + 1",
          "f) str[i + j − 1] j = seqlen − 1"
        ],
        "correctIndex": 4,
        "explanation": "Official ITPEC Subject B answer for Q12 (2025A) is Option (e).",
        "requiresPseudocode": true,
        "pseudocodeBlock": "○ boolean: containsSubstring(character []: str, character []: seq) \n integer: strlen, seqlen, len, i, j \n strlen \n← the number of elements in str \n seqlen ← the number of elements in seq \n if (seqlen > strlen) \n return false \n endif \n len \n← strlen − seqlen + 1 \n for (increase i from 1 to len by 1) \n j ← 1 \n while (j ≤ seqlen) \n if (___A___ ≠ seq[j]) \n exit the while block \n endif \n j \n← j + 1 \n endwhile \n if (___B___) \n return true \n endif \n endfor \n return false"
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2025A_FE-B_Questions.pdf",
    "pdfPage": 21
  },
  {
    "scenarioId": "fe-2025a-q13",
    "title": "Subject B Q13 (2025A): Algorithms & Programming",
    "examYear": 2025,
    "domain": "Algorithms & Programming",
    "contextMarkdown": "Open the embedded PDF at page 23 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2025a-q13-sub1",
        "questionNumber": 1,
        "prompt": "Q13. From the answer group below, select the corre ct combination of answers to be inserted into ___A___ through ___C___ in the program. Binary Search Trees (BST) are a fundamental data structure where each node has at most two children: a left child and a right child. Th e key property of a BST is that each value of all nodes in its left subtree are less than the value of the node, and each value of all nodes in its right subtree are greater than the value of the node. The table shows the member variables of the class Node. Node-type variable holds a reference to an instance of the class Node. Each node in a BST has a different value. Table Member variables of class Node Member variable Type Description key integer Integer to be stored in the node. left Node Reference to the instance that holds the left child of a binary tree. If no left child exists, it is undefined. right Node Reference to the instance that holds the right child of a binary tree. If no right child exists, it is undefined. The function remove removes a node with the same key value as the argument key from the BST specified by the argument node and returns the resulting BS T. The function searches for a node with the same key value, and if the found node (c all it X here) does not have a right subtree, the function returns its left subtree. If X has a right subtree, the function locates the node (call it Y here) with the smallest ke y value in the right subtree, replaces the key value of X with that of Y, and then removes Y. If there is no node with the same key value in the BST, the function performs no operations. The procedure test demonstrates this behavior by removing 1 node from a BST cont aining 7 nodes. The figure shows the BST before and after node removal. Figure BST before and after node removal",
        "options": [
          "a) node.left node2.key < key key",
          "b) node.left node2.key < key node2.key",
          "c) node.left node2.left is not undefined key",
          "d) node.left node2.left is not undefined node2.key",
          "e) node.right node2.key < key key",
          "f) node.right node2.key < key node2.key",
          "g) node.right node2.left is not undefined key",
          "h) node.right node2.left is not undefined node2.key"
        ],
        "correctIndex": 7,
        "explanation": "Official ITPEC Subject B answer for Q13 (2025A) is Option (h).",
        "requiresPseudocode": true,
        "pseudocodeBlock": "○ Node: remove(Node: node, integer: key) \n Node: node2 \n if (node is undefined) \n\n return undefined \n elseif (key < node.key) \n node.left \n← remove(node.left, key) \n elseif (key > node.key) \n node.right ← remove(node.right, key) \n elseif (node.right is undefined) \n return node.left \n else \n node2 \n← ___A___ \n while (___B___) \n node2 ← node2.left \n endwhile \n node.key ← node2.key \n node.right ← remove(node.right, ___C___) \n endif \n return node \n \n○ test() \n Node: root ← the root node of BST on the left side of the figure \n root ← remove(root, 2)"
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2025A_FE-B_Questions.pdf",
    "pdfPage": 23
  },
  {
    "scenarioId": "fe-2025a-q14",
    "title": "Subject B Q14 (2025A): Data Structures & Memory",
    "examYear": 2025,
    "domain": "Data Structures & Memory",
    "contextMarkdown": "Open the embedded PDF at page 25 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2025a-q14-sub1",
        "questionNumber": 1,
        "prompt": "Q14. From the answer group below, select the correct answer to be inserted into _________ in the program. Here, the array index starts at 1. A 3 × 3 normal magic square is a 3 × 3 matrix where the sum of the elements for each row, each column, and each diagonal is the same. The square contains the numbers 1 to 9, exactly as shown in the figure. 4 9 2 15 3 5 7 15 8 1 6 15 15 15 15 15 15 Figure 3 × 3 normal magic square The function checkMagicSquare receives a two-dimensional 3 × 3 integer array (matrix) m containing the numbers 1 to 9, and returns whether the given matrix is a magic square or not.",
        "options": [
          "a) (rowSum[k] = colSum[k]) and (rowSum[k] = dia1Sum)",
          "b) (rowSum[k] = colSum[k]) or (rowSum[k] = dia1Sum)",
          "c) (rowSum[k] ≠ colSum[k]) and (rowSum[k] ≠ dia1Sum)",
          "d) (rowSum[k] ≠ colSum[k]) or (rowSum[k] ≠ dia1Sum)"
        ],
        "correctIndex": 3,
        "explanation": "Official ITPEC Subject B answer for Q14 (2025A) is Option (d).",
        "requiresPseudocode": true,
        "pseudocodeBlock": "○ boolean: checkMagicSquare(integer [,]: m) \n integer: i, j, k \n integer: dia1Sum ← 0 \n integer: dia2Sum ← 0 \n integer []: rowSum ← {0, 0, 0} \n integer []: colSum ← {0, 0, 0} \n for (increase i from 1 to 3 by 1) \n for (increase j from 1 to 3 by 1) \n rowSum[i] ← rowSum[i] + m[i,j] \n colSum[i] ← colSum[i] + m[j,i] \n endfor \n dia1Sum \n← dia1Sum + m[i,i] \n dia2Sum ← dia2Sum + m[i,3 - i + 1] \n endfor \n if (dia1Sum \n≠ dia2Sum) \n return false \n endif \n for (increase k from 1 to 3 by 1) \n if(______) \n return false \n endif \n endfor \n return true"
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2025A_FE-B_Questions.pdf",
    "pdfPage": 25
  },
  {
    "scenarioId": "fe-2025a-q15",
    "title": "Subject B Q15 (2025A): Software Engineering",
    "examYear": 2025,
    "domain": "Software Engineering",
    "contextMarkdown": "Open the embedded PDF at page 27 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2025a-q15-sub1",
        "questionNumber": 1,
        "prompt": "Q15. From the answer group below, select the corre ct combination of answers to be inserted into ___A___ and ___B___ in the program. Here, the array index starts at 1. Inverse document frequency (IDF) is a metric used to evaluate the importance of a word in a document relative to a document collection. The function calcIDF receives a string term and an array of strings corpus as arguments, and calculates and returns the IDF score for the term based on the given corpus. The corpus of documents corpus is given as a string array. An example of corpus that indicates 3 documents is as follows: {\"ITPEC includes members from 6 countries\", \"many students prepare for the exam\", \"The ITPEC exam is essential for IT professionals\"} The table shows the description of the functions used in the program. Table Functions Function Return value Description split(string: str) string [] Returns words separated by a space in the text str. log(real: x) real Returns natural logarithm (base e) of the value x. Traditionally, IDF is computed using the following formula: 𝐼𝐷𝐹(𝑡)=l o g (𝑁 1+ 𝑑𝑓(𝑡)) Where N is the total number of documents, t refers to a specific term or word in a document, and df(t) is the number of documents containing the term t. For example, the return value of calcIDF(\"ITPEC\", corpus) is log(3 ÷ (1 + 2)) = 0 when array corpus is assigned as shown in the above example. Because the total number of documents is 3, and the total number of documents that include the word “ITPEC” is 2.",
        "options": [
          "a) corpus[j] = term isContainsTerm = false",
          "b) corpus[j] = term isContainsTerm = true",
          "c) corpus[j] ≠ term isContainsTerm = false",
          "d) corpus[j] ≠ term isContainsTerm = true",
          "e) words[j] = term isContainsTerm = false",
          "f) words[j] = term isContainsTerm = true",
          "g) words[j] ≠ term isContainsTerm = false",
          "h) words[j] ≠ term isContainsTerm = true"
        ],
        "correctIndex": 5,
        "explanation": "Official ITPEC Subject B answer for Q15 (2025A) is Option (f).",
        "requiresPseudocode": true,
        "pseudocodeBlock": "○ real: calcIDF(string: term, string []: corpus) \n integer: i, j, numDocs, numWords, termCount \n boolean: isContainsTerm \n real: idf \n string []: words \n termCount \n← 0 \n numDocs ← the number of elements in corpus \n for (increase i from 1 to numDocs by 1) \n\n isContainsTerm ← false \n words ← split(corpus[i]) \n numWords ← the number of elements in words \n for (increase j from 1 to numWords by 1) // α \n if (___A___) \n isContainsTerm ← true \n exit the for block marked α \n endif \n endfor \n if (___B___) \n termCount ← termCount + 1 \n endif \n endfor \n idf ← log(numDocs ÷ (1 + termCount)) /* Division is performed \n in data type real */ \n return idf"
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2025A_FE-B_Questions.pdf",
    "pdfPage": 27
  },
  {
    "scenarioId": "fe-2025a-q16",
    "title": "Subject B Q16 (2025A): Computer Architecture & OS",
    "examYear": 2025,
    "domain": "Computer Architecture & OS",
    "contextMarkdown": "Open the embedded PDF at page 29 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2025a-q16-sub1",
        "questionNumber": 1,
        "prompt": "Q16. From the answer group below, select the corre ct combination of answers to be inserted into _______ in the program. Here, the array index starts at 0. The Jaccard similarity index, J, measures the similarity between two sets by computing the ratio of the number of elements in their intersection to the number of elements in their union, i.e., J(A, B) = |A ∩B| / |A ∪B|, where A and B represent sets, ∩ and ∪ represent the intersection and the union set operations, respectiv ely, and |…| is the operator to calculate the number of elements in a set. The intersection operation builds a new set taking members that are common to both sets; while the union operation builds a set taking all members of both sets, where each member will appear only once. For instance, A = {3, 4, 6, 7} and B = {2, 4, 5}, then A∩B = {4}, A ∪ B = {2, 3, 4, 5, 6, 7}, |A| = 4, | B| = 3, |A∩B| = 1, and |A∪B| = 6. The function jaccardSimilarity calculates the Jaccard similarity stated above and returns it. The definitions of variables used in the function are stated in the below table. Table Variable definitions Variable Explanation nA Number of elements in set A. nB Number of elements in set B. iCount Variable for counting members of intersection set, i.e., for counting |A∩B|. uCount Variable for counting members of union set, i.e., for counting |A∪B|. found Variable used to indicate whether the member has already been considered for union set or not.",
        "options": [
          "a) 0",
          "b) nA",
          "c) nB",
          "d) nA + nB",
          "e) nA - nB",
          "f) nA ÷ nB",
          "g) nA × nB"
        ],
        "correctIndex": 2,
        "explanation": "Official ITPEC Subject B answer for Q16 (2025A) is Option (c).",
        "requiresPseudocode": true,
        "pseudocodeBlock": "○ real: jaccardSimilarity(integer []: A, integer []: B) \n integer: nA ← number of elements in A \n integer: nB ← number of elements in B \n integer: iCount ← 0 \n integer: uCount ← ______ \n boolean: found \n for (increase i from 0 to nA - 1 by 1) \n found ← false \n for (increase j from 0 to nB - 1 by 1) // α \n if (A[i] = B[j]) \n iCount ← iCount + 1 \n found ← true \n exit the for block marked α \n\n endif \n endfor \n if (found \n= false) \n uCount ← uCount + 1 \n endif \n endfor \n return iCount \n÷ uCount /* Division is done in data type real */"
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2025A_FE-B_Questions.pdf",
    "pdfPage": 29
  },
  {
    "scenarioId": "fe-2025a-q17",
    "title": "Subject B Q17 (2025A): Databases & SQL",
    "examYear": 2025,
    "domain": "Databases & SQL",
    "contextMarkdown": "Open the embedded PDF at page 31 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2025a-q17-sub1",
        "questionNumber": 1,
        "prompt": "Q17. From the answer group below, select the most appropriate combination of answers to be inserted into ____A____ and ____B____ in the description. Company P is a small business that recently formed a data analytics team to perform business data analytics using internal business data. This data is stored on a database system configured with a synchronous (real-time) mirror. The database is backed up regularly. The database servers and IT infrastructure are maintained by a third-party IT support provider. A junior data analyst was mistakenly granted database superuser privileges to the production database. This decision was made due to a lack of security understanding in the company. The data analyst, unfamiliar with the sensitiv ity of their access level, was tasked with executing a series of routine database queries and migrations. However, due to an error in a script, the data analyst accidentally ran a comm and that dropped critical tables, resulting in a significant loss of data. This caused the company’s internal applications to stop working. The company engaged their IT support provider, and the database system was quickly put back in service by ____A____. To prevent this incident fr om happening again, their IT support provider recommended that the company implement ____B____.",
        "options": [
          "a) restarting the database server database encryption",
          "b) restarting the database server multi-factor authentication",
          "c) restarting the database server principle of least privilege",
          "d) restoring from backups database encryption",
          "e) restoring from backups multi-factor authentication",
          "f) restoring from backups principle of least privilege",
          "g) switching to the database mirror database encryption",
          "h) switching to the database mi rror multi-factor authentication",
          "i) switching to the database mirror principle of least privilege"
        ],
        "correctIndex": 5,
        "explanation": "Official ITPEC Subject B answer for Q17 (2025A) is Option (f).",
        "requiresPseudocode": false
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2025A_FE-B_Questions.pdf",
    "pdfPage": 31
  },
  {
    "scenarioId": "fe-2025a-q18",
    "title": "Subject B Q18 (2025A): Networking & Security",
    "examYear": 2025,
    "domain": "Networking & Security",
    "contextMarkdown": "Open the embedded PDF at page 32 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2025a-q18-sub1",
        "questionNumber": 1,
        "prompt": "Q18. From the answer group below, select the most appropriate combination of answers to be inserted into ____A____ and ____B____ in the description. Company Q is a mid-sized online retailer selling a wide range of daily necessities to a large number of general consumers. Customers are required to create an account and log in to the company’s e-commerce website to make purchases. The e-commerce website is constructed using an open-source content management system (CMS) with various plugins. It is hosted on the company’s on-premise web servers lo cated in the Demilitarized Zone (DMZ). Customer data is stored in the database installed on the web server as well. Since the e- commerce site received orders from many customers, availability of the e-commerce website is critical, and the maximum tolerable downtime (MTD) is limited to one hour per week. The server is protected by a packet filtering firewall that permits access only through ports 80 and 443. Mr. K is an administrator responsible for both the operations and security of the company’s e-commerce website. He maintains th e configuration of the firewall and other security measures as well as patch manage ment. For patching the company’s e-commerce website, compatibility testing is important to maintain website stability. It takes at least three days to complete compatibility testing for one component. Du e to limited human resource, it is unrealistic to perform compatibility tests in parallel and finish them quickly. Therefore, the patch management rule is to apply patches for the web server’s OS and the core CMS components within a week of their release, while updates for other components including plugins are scheduled to be applied within six months. Patches for the web server’s OS and the core CMS components are released on a monthly basis, while updates for other components including plugins are released each month as well. One day, Company Q’s e-commerce website was compromised and the database on the webserver was accessed by an unauthorized third party. The investigation revealed that this was caused by an unpatched vulnerability in a plugin enabled on the CMS. This plug-in was critical to the functioning of the e-commerce website. The latest version of the plugin, which includes a fix for this vulnerability, was re leased by the vendor three months ago. The exploitation of this vu lnerability has been reported public ly since last month. Company Q was still conducting compatibility testing, and the update to the latest version was scheduled for a later time. To prevent similar incidents from occurrin g, Mr. K is required to revise the patch management rules for Q’s e-commerce website. In consideration of the workload associated with compatibility testing, Mr. K proposed upda ting the patch management rule for the e- commerce website to ____A____. Furthermore, as a protective measure to prevent the servers from exploitation during the interim period before patche s are applied, Mr. K proposed ____B____.",
        "options": [
          "a) apply patches to all components including plugins with in three days of their release disabling the affected components until the patches can be applied",
          "b) apply patches to all components including plugins with in three days of their release implementing web application firewall (WAF) on the webserver",
          "c) prioritize applying patches for vulnerabilities for which exploitation methods have been identified, within one week from the date such methods are publicly confirmed disabling the affected components until the patches can be applied",
          "d) prioritize applying patches for vulnerabilities for which exploitation methods have been identified, within one week from the date such methods are publicly confirmed implementing web application firewall (WAF) on the webserver",
          "e) run a vulnerability scanner to verify that no vulnerabilities with confirmed exploits are detect ed after applying patches disabling the affected components until the patches can be applied",
          "f) run a vulnerability scanner to verify that no vulnerabilities with confirmed exploits are detect ed after applying patches implementing web application firewall (WAF) on the webserver"
        ],
        "correctIndex": 3,
        "explanation": "Official ITPEC Subject B answer for Q18 (2025A) is Option (d).",
        "requiresPseudocode": false
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2025A_FE-B_Questions.pdf",
    "pdfPage": 32
  },
  {
    "scenarioId": "fe-2025a-q19",
    "title": "Subject B Q19 (2025A): Algorithms & Programming",
    "examYear": 2025,
    "domain": "Algorithms & Programming",
    "contextMarkdown": "Open the embedded PDF at page 34 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2025a-q19-sub1",
        "questionNumber": 1,
        "prompt": "Q19. From the answer group below, select the correct combination of answers to be inserted into ____A____ and ____B____ in the description. Company R is a software company that sells video editing software for consumers. The company has branch offices in multiple count ries, all managed by its head office. In Company R’s customer support department, customer satisf action surveys are sent to selected customer who have received support. The survey results are aggregated at each branch, and must be sent to the customer survey analysis team at the head office every day. Ms. T at the customer survey analysis team at the head office is responsible for managing and securing the survey data. The considerations for collecting survey data from each branch office are as follows: - The employees responsible for sending the survey data at each branch office changes daily. - At the head office, Ms. T in the customer survey analysis team is responsible for receiving and analyzing the survey data from the branch offices. After receiving the survey data from the branch offices, she save s the data to a shared folder that only the customer survey analysis team can access. - The file size of survey data is large, so using inefficient encryption methods would take too much time and is therefore not suitable. - Since the survey data contains confidential information, it must be ensured that no one other than the sender and the intended reci pients can view the contents during transmission between the head office and branch offices. - The key used to encrypt the files must be tr ansmitted in a way that prevents it from being stolen by a man-in-the-middle attacker. - There are many branch offices and it is not practical to visit each office in person to distribute keys. Ms. T decided to adopt a new method in which the branch offices upload the survey data, encrypted using file encryption, to a shared folder. She set up this shared folder with access permissions granted to both the head office and branch office staff, and instructed the branch office staff to upload the encrypted survey data to it. Taking into account the considerations related to collecting information from the branches, Ms. T decided to use ____A____ as the encryption method. In this method, the key used for encrypting the survey data is encrypted using the public key of ____B____.",
        "options": [
          "a) hybrid encryption Ms. T",
          "b) hybrid encryption the branch office staff",
          "c) public key encryption only Ms. T",
          "d) public key encryption only the branch office staff",
          "e) symmetric key encryption only Ms. T",
          "f) symmetric key encryption only the branch office staff"
        ],
        "correctIndex": 0,
        "explanation": "Official ITPEC Subject B answer for Q19 (2025A) is Option (a).",
        "requiresPseudocode": false
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2025A_FE-B_Questions.pdf",
    "pdfPage": 34
  },
  {
    "scenarioId": "fe-2025a-q20",
    "title": "Subject B Q20 (2025A): Data Structures & Memory",
    "examYear": 2025,
    "domain": "Data Structures & Memory",
    "contextMarkdown": "Open the embedded PDF at page 36 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2025a-q20-sub1",
        "questionNumber": 1,
        "prompt": "Q20. From the answer group below, select the most appropriate combination of answers to be inserted into ____A____ and ____B____ in the description. Company S is a software company that develops web applications. Some of web applications that Company S develops are open-sourced. Th e web application code is made publicly available in a repository accessible to anyone. These open-source web applications include features that interact with external services using API keys. One day, an external security researcher reported to Company S’s security team that the code published in the company’s repository contained an API key. Company S immediately made the repository private and deactivated the API key. Upon further investigation, it was found that a developer on the web application development team accidentally hard-coded the API key when testing a new feature, and committed the code to the source code repository. As a result, this allowed unauthorized users to access external services using the API key. To prevent a recurrence of such an incident, the security team has proposed adding a coding rule that instead of hard-coding the secrets including the API, use environment variables that allow the application code to be accessed dynamically. Additionally, the team suggested ____A____ to detect any secrets that might have been missed by this rule before committing code to a publicly accessible repository. Furthermore, to mi nimize damage in case any secrets still evade detection, he proposed ____B____.",
        "options": [
          "a) checking logs of APIs used by the development team to see if there is an y unauthorized use adding a rule that mandates regular rotation of secrets",
          "b) checking logs of APIs used by the development team to see if there is an y unauthorized use requiring web application developers to use multi-factor-authentication to log in to the repository",
          "c) integrating automated secret scanning tools adding a rule that mandates regular rotation of secrets",
          "d) integrating automated secret scanning tools requiring the web application developers to use multi-factor-authentication to log in to the repositor y",
          "e) running antivirus full scans on developers’ PCs adding a rule that mandates regular rotation of secrets",
          "f) running antivirus full scans on developers’ PCs requiring web application developers to use multi-factor-authentication to log in to the repository _ _"
        ],
        "correctIndex": 2,
        "explanation": "Official ITPEC Subject B answer for Q20 (2025A) is Option (c).",
        "requiresPseudocode": false
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2025A_FE-B_Questions.pdf",
    "pdfPage": 36
  },
  {
    "scenarioId": "fe-2024a-q1",
    "title": "Subject B Q1 (2024A): Algorithms & Programming",
    "examYear": 2024,
    "domain": "Algorithms & Programming",
    "contextMarkdown": "Open the embedded PDF at page 4 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2024a-q1-sub1",
        "questionNumber": 1,
        "prompt": "Q1. From the answer group below, select the correct combination of answers to be inserted into ___A___ and ___B___ in the program. Here, the array indexes start at 1. Bicycle ridership in a city is studied. Examination of several years of data revealed that 30% of the people who regularly ride bicycles in a given year do not regularly ride bicycles in the subsequent year. Additionally, 2% of the people who do not regularly ride bicycles in that year begin to ride bicycles regularly in the subsequent year. If 5,000 people ride bicycles and 100,000 people do not ride bicycles in a given year, then the following program calculates the number of cyclists in the subsequent year (cycling) and that of people who do not ride bicycles in the subsequent year (noncycling):",
        "options": [
          "a) P[1,1] × N[1] + P[1,2] × N[2] P[2,1] × N[1] + P[2,2] × N[2]",
          "b) P[1,1] × N[1] + P[1,2] × N[2] P[2,2] × N[1] + P[2,1] × N[2]",
          "c) P[1,2] × N[1] + P[1,1] × N[2] P[2,2] × N[1] + P[2,1] × N[2]",
          "d) P[1,2] × N[1] + P[2,2] × N[2] P[2,1] × N[1] + P[1,2] × N[2]",
          "e) P[2,1] × N[1] + P[1,2] × N[2] P[1,1] × N[1] + P[2,2] × N[2]",
          "f) P[2,1] × N[1] + P[2,2] × N[2] P[1,1] × N[1] + P[1,2] × N[2]"
        ],
        "correctIndex": 0,
        "explanation": "Official ITPEC Subject B answer for Q1 (2024A) is Option (a).",
        "requiresPseudocode": true,
        "pseudocodeBlock": "real: pc \n← 0.3 \nreal: pb ← 0.02 \nreal: pa ← (1 – pc) \nreal: pd ← (1 – pb) \ninteger []: N ← {5000, 100000} \nreal [,]: P ← {{pa, pb}, {pc, pd}} \nreal: cycling, noncycling \ncycling ← ___A___ \nnoncycling ← ___B___ \noutput cycling, noncycling"
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2024A_FE-B_Questions.pdf",
    "pdfPage": 4
  },
  {
    "scenarioId": "fe-2024a-q2",
    "title": "Subject B Q2 (2024A): Data Structures & Memory",
    "examYear": 2024,
    "domain": "Data Structures & Memory",
    "contextMarkdown": "Open the embedded PDF at page 5 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2024a-q2-sub1",
        "questionNumber": 1,
        "prompt": "Q2. From the answer group below, select the corre ct combination of answers to be inserted into ____A____ and ____B____ in the program. The function coupon receives the argument prod_id (a positive intege r value) of product ID, and pur_prod (a positive integer value) of th e number of purchased products by a customer. The function returns the number of coupons. For every purchase of three produc ts of the product ID of which the last digit is three, the customer receives one coupon. Otherwise, they receive no coupon.",
        "options": [
          "a) integer part of (prod_id ÷ 10) = 3 integer part of (pur_prod ÷ 3)",
          "b) integer part of (prod_id ÷ 10) = 3 integer part of (pur_prod ÷ 3) + 1",
          "c) integer part of (prod_id ÷ 10) = 3 pur_prod mod 3",
          "d) prod_id = 10 mod 3 integer part of (pur_prod ÷ 3)",
          "e) prod_id = 10 mod 3 integer part of (pur_prod ÷ 3) + 1",
          "f) prod_id = 10 mod 3 pur_prod mod 3",
          "g) prod_id mod 10 = 3 integer part of (pur_prod ÷ 3)",
          "h) prod_id mod 10 = 3 integer part of (pur_prod ÷ 3) + 1",
          "i) prod_id mod 10 = 3 pur_prod mod 3"
        ],
        "correctIndex": 6,
        "explanation": "Official ITPEC Subject B answer for Q2 (2024A) is Option (g).",
        "requiresPseudocode": true,
        "pseudocodeBlock": "○ integer: coupon(integer: prod_id, integer: pur_prod) \n integer: num_coupon ← 0 \n if (___A___) \n num_coupon ← ___B___ \n endif \n return num_coupon"
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2024A_FE-B_Questions.pdf",
    "pdfPage": 5
  },
  {
    "scenarioId": "fe-2024a-q3",
    "title": "Subject B Q3 (2024A): Software Engineering",
    "examYear": 2024,
    "domain": "Software Engineering",
    "contextMarkdown": "Open the embedded PDF at page 6 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2024a-q3-sub1",
        "questionNumber": 1,
        "prompt": "Q3. From the answer group below, select the corre ct combination of answers to be inserted into ____A____ and ____B____ in the program. Here, the array index starts at 1. The program determines the second-largest element of an integer-type array and outputs its value. For instance, the second largest element of the array {2, 6, 9, 1, 7, 5} is 7. Here, we assume that the array has two or more elements and that no duplicate elements are present in the array.",
        "options": [
          "a) array[i] < max1 max1 ← array[i]",
          "b) array[i] < max1 max2 ← array[i]",
          "c) array[i] < max2 max1 ← array[i]",
          "d) array[i] < max2 max2 ← array[i]",
          "e) array[i] > max1 max1 ← array[i]",
          "f) array[i] > max1 max2 ← array[i]",
          "g) array[i] > max2 max1 ← array[i]",
          "h) array[i] > max2 max2 ← array[i]"
        ],
        "correctIndex": 5,
        "explanation": "Official ITPEC Subject B answer for Q3 (2024A) is Option (f).",
        "requiresPseudocode": true,
        "pseudocodeBlock": "integer []: array ← {2, 6, 9, 1, 7, 5} \ninteger: i \ninteger: max1 \n← -∞ \ninteger: max2 ← -∞ \nfor (increase i from 1 \n to the number of elements of array by 1) \n if (___A___) \n max2 ← max1 \n max1 ← array[i] \n elseif (array[i] > max2) \n ___B___ \n endif \nendfor \noutput max2"
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2024A_FE-B_Questions.pdf",
    "pdfPage": 6
  },
  {
    "scenarioId": "fe-2024a-q4",
    "title": "Subject B Q4 (2024A): Computer Architecture & OS",
    "examYear": 2024,
    "domain": "Computer Architecture & OS",
    "contextMarkdown": "Open the embedded PDF at page 7 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2024a-q4-sub1",
        "questionNumber": 1,
        "prompt": "Q4. From the answer group below, select the corre ct combination of answers to be inserted into ___A___ and ___B___ in the program. The procedure primeFactors outputs the prime factors for the input values as its argument. The first few prime numbers are 2, 3, 5, 7, 11, and 13. For instance, if the input integer is 12, the output is “2×2×3”. If the input integer is 78, the output is “ 2×3×13”. The input integer must be greater than 1.",
        "options": [
          "a) num < 1 num mod i ≠ 0",
          "b) num > 1 num mod i = 0",
          "c) num mod i = 0 num > 1",
          "d) num mod i ≠ 0 num < 1"
        ],
        "correctIndex": 2,
        "explanation": "Official ITPEC Subject B answer for Q4 (2024A) is Option (c).",
        "requiresPseudocode": true,
        "pseudocodeBlock": "○ primeFactors(integer: num) \n integer: i \n \n i ← 2 \n do \n if (\n___A___) \n num ← integer part of (num ÷ i) \n output i \n if (___B___) \n output \"×\" \n endif\n \n else \n i ← i + 1 \n endif \n while (\n___B___)"
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2024A_FE-B_Questions.pdf",
    "pdfPage": 7
  },
  {
    "scenarioId": "fe-2024a-q5",
    "title": "Subject B Q5 (2024A): Databases & SQL",
    "examYear": 2024,
    "domain": "Databases & SQL",
    "contextMarkdown": "Open the embedded PDF at page 8 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2024a-q5-sub1",
        "questionNumber": 1,
        "prompt": "Q5. From the answer group below, select the corre ct combination of answers to be inserted into ____A____ and ____B____ in the program. Here, the array index starts at 1. Function calcGeoMean receives the array dataArray (the number of elements ≥ 1) as an argument and returns the geometric mean of values in dataArray as the return value. For the numbers a1, a2, …, a n, the geometric mean is ඥሺ𝑎ଵ × 𝑎ଶ × ⋯ × 𝑎௡ሻ ೙ . Here, the pow(x, y) function returns a real value by raising x to the power of y. In the program, division is performed in data type real.",
        "options": [
          "a) 1 ÷ n product",
          "b) product 1 ÷ n",
          "c) product n",
          "d) n product"
        ],
        "correctIndex": 1,
        "explanation": "Official ITPEC Subject B answer for Q5 (2024A) is Option (b).",
        "requiresPseudocode": true,
        "pseudocodeBlock": "○ real: calcGeoMean(real []: dataArray) \n real: product, geomean \n integer: n \n← the number of elements in dataArray \n integer: i \n \n product \n← 1 \n for (increase i from 1 to n by 1) \n product ← product × dataArray[i] \n endfor \n geomean ← pow(___A___, ___B___) \n return geomean"
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2024A_FE-B_Questions.pdf",
    "pdfPage": 8
  },
  {
    "scenarioId": "fe-2024a-q6",
    "title": "Subject B Q6 (2024A): Networking & Security",
    "examYear": 2024,
    "domain": "Networking & Security",
    "contextMarkdown": "Open the embedded PDF at page 9 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2024a-q6-sub1",
        "questionNumber": 1,
        "prompt": "Q6. From the answer group below, select the corre ct combination of answers to be inserted into ____A____ through ____C____ in the program. The standard form of a quadratic equation is as follows: ax2 + bx + c = 0, where a, b and c are real numbers and a ≠ 0. Here, the term b2 - 4ac is known as the discriminant of a quadratic equation. It indicates the nature of the roots. The formula for solving a quadratic equation is shown in the figure. If the discriminant value is positive, there are two solutions; if it is zero, there is one solution. Here, we assume that the discriminant value is non-negative. If the discriminant > 0 𝑟𝑜𝑜𝑡1= −𝑏 + √𝑏ଶ − 4𝑎𝑐 2𝑎 𝑟𝑜𝑜𝑡2= −𝑏 − √𝑏ଶ − 4𝑎𝑐 2𝑎 If the discriminant = 0 𝑟𝑜𝑜𝑡1= 𝑟𝑜𝑜𝑡2= −𝑏 2𝑎 Figure The formula for solving a quadratic equation The procedure findRoots receives three real number arguments a, b, and c as coefficients and outputs the value of the root(s) of the quadratic equation. Function sqrt(discriminant) returns the principal square root value of the parameter discriminant.",
        "options": [
          "a) b × 2 − 4 × a × c discriminant < 0 discriminant = 0",
          "b) b × 2 − 4 × a × c discriminant = 0 discriminant < 0",
          "c) b × 2 − 4 × a × c discriminant = 0 discriminant > 0",
          "d) b × 2 − 4 × a × c discriminant > 0 discriminant = 0",
          "e) b × b − 4 × a × c discriminant < 0 discriminant = 0",
          "f) b × b − 4 × a × c discriminant = 0 discriminant < 0",
          "g) b × b − 4 × a × c discriminant = 0 discriminant > 0",
          "h) b × b − 4 × a × c discriminant > 0 discriminant = 0"
        ],
        "correctIndex": 7,
        "explanation": "Official ITPEC Subject B answer for Q6 (2024A) is Option (h).",
        "requiresPseudocode": true,
        "pseudocodeBlock": "○ findRoots(real: a, real: b, real: c) \n real: discriminant, root1, root2 \n discriminant ← ___A___ \n if (___B___) \n root1 ← (−b + sqrt(discriminant)) ÷ (2 × a) \n root2 ← (−b − sqrt(discriminant)) ÷ (2 × a) \n output \"root1 = \", root1, \" and root2 = \", root2 \n elseif (___C___) \n root1 ← −b ÷ (2 × a) \n output \"root1 = root2 = \", root1 \n endif"
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2024A_FE-B_Questions.pdf",
    "pdfPage": 9
  },
  {
    "scenarioId": "fe-2024a-q7",
    "title": "Subject B Q7 (2024A): Algorithms & Programming",
    "examYear": 2024,
    "domain": "Algorithms & Programming",
    "contextMarkdown": "Open the embedded PDF at page 11 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2024a-q7-sub1",
        "questionNumber": 1,
        "prompt": "Q7. From the answer group below, select the corre ct combination of answers to be inserted into ___A___ and ___B___ in the program. Given two strings, str1 and str2, the task is to determine the length of the longest common subsequence (LCS), that is, the length of the longest subsequence present in both strings. For instance, if str1 is “ABXDZ” and str2 is “ABCD”, the LCS between str1 and str2 will be “ABD” and the length of the LCS will be 3. The function lcs(string: str1, string: str2, integer: m, integer: n) takes two strings str1 and str2 and two integers m and n as arguments. str1 and str2 are the strings on which the length of the LCS is calculated. m and n are indexes addressing the target characters in str1 and str2, respectively. On the first call, m and n represent the lengths of str1 and str2, respectively. The function returns an integer containing the value of the length of the LCS of str1 and str2. For instance, the function may be called as lcs(\"ABXDZ\", \"ABCD\", 5, 4). Another function max(integer: a, integer: b) is also used. The function takes two integers a and b as arguments. It compares these two integers and returns the integer value of whichever is the maximum between a and b.",
        "options": [
          "a) n n - 1",
          "b) n n + 1",
          "c) n - 1 n",
          "d) n - 1 n + 1",
          "e) n + 1 n",
          "f) n + 1 n - 1"
        ],
        "correctIndex": 2,
        "explanation": "Official ITPEC Subject B answer for Q7 (2024A) is Option (c).",
        "requiresPseudocode": true,
        "pseudocodeBlock": "○ integer: max(integer: a, integer: b) \n if (a > b) \n return a \n else \n return b \n endif \n \n○ integer: lcs(string: str1, string: str2, integer: m, integer: n) \n if (m = 0 or n = 0) \n return 0 \n endif \n if (the m-th\n character of string str1 = the n-th character of string str2) \n return 1 + lcs(str1, str2, m - 1, n - 1) \n else \n return max(lcs(str1, str2, m, \n___A___), \n lcs(str1, str2, m - 1, ___B___)) \n endif"
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2024A_FE-B_Questions.pdf",
    "pdfPage": 11
  },
  {
    "scenarioId": "fe-2024a-q8",
    "title": "Subject B Q8 (2024A): Data Structures & Memory",
    "examYear": 2024,
    "domain": "Data Structures & Memory",
    "contextMarkdown": "Open the embedded PDF at page 13 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2024a-q8-sub1",
        "questionNumber": 1,
        "prompt": "Q8. From the answer group below, select the correct answer to be inserted into _______ in the description. This program performs operations on a priority queue. A priority queue is a queue where the handled elements have a priority assigned to them, and the elements are extracted with the order of the highest priority first. The class PrioQueue represents a priority queue. The Figure shows an explanation of the class PrioQueue. Here, the priority is the integer value 1, 2, or 3, and the smaller the value the higher the priority. When the procedure prioSched is called, the order of the output is _______. Constructor Description PrioQueue() Creates an empty priority queue. Method Type of return value Description enqueue(string: s, integer: prio) None Adds string s as an element to a priority queue with the priority prio. dequeue() string Extracts the element with the highest priority in a priority queue and returns it. If multiple elements with the highest priority exist, it extracts the element that was added first and returns it. size() integer Returns the number of elements that are stored in a priority queue. Figure Explanation of the class PrioQueue",
        "options": [
          "a) \"M\", \"I\", \"K\", \"F\", \"L\", \"E\"",
          "b) \"M\", \"L\", \"K\", \"I\", \"F\", \"E\"",
          "c) \"J\", \"M\", \"F\", \"K\", \"E\", \"L\"",
          "d) \"E\", \"L\", \"F\", \"K\", \"I\", \"M\""
        ],
        "correctIndex": 2,
        "explanation": "Official ITPEC Subject B answer for Q8 (2024A) is Option (c).",
        "requiresPseudocode": true,
        "pseudocodeBlock": "○ prioSched() \n PrioQueue: prioQueue ← PrioQueue() \n prioQueue.enqueue(\"E\", 3) \n prioQueue.enqueue(\"F\", 2) \n prioQueue.enqueue(\"G\", 1) \n prioQueue.enqueue(\"H\", 1) \n prioQueue.dequeue() /* The return value is ignored */ \n prioQueue.dequeue() /* The return value is ignored */ \n prioQueue.enqueue(\"I\", 1) \n prioQueue.enqueue(\"J\", 1) \n prioQueue.dequeue() /* The return value is ignored */ \n prioQueue.enqueue(\"K\", 2) \n prioQueue.enqueue(\"L\", 3) \n prioQueue.enqueue(\"M\", 1) \n\n while (prioQueue.size() is not equal to 0) \n output prioQueue.dequeue() \n endwhile"
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2024A_FE-B_Questions.pdf",
    "pdfPage": 13
  },
  {
    "scenarioId": "fe-2024a-q9",
    "title": "Subject B Q9 (2024A): Software Engineering",
    "examYear": 2024,
    "domain": "Software Engineering",
    "contextMarkdown": "Open the embedded PDF at page 15 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2024a-q9-sub1",
        "questionNumber": 1,
        "prompt": "Q9. From the answer group below, select th e correct answer to be inserted into _________ in the description. Here, the array indexes start at 1. The procedure traverse traces through a vertex of the graph shown in the Figure, and outputs all vertex numbers in the graph. The vertex number of the graph is specified with the argument k. The global variable n indicates the number of vertices in the graph. The global array graph represents the graph in the figure. Each element graph[i][j] is equal to 1 if an edge exists between vertices i and j, and it is equal to 0 otherwise. The global array visited stores boolean values, where visited[i] indicates whether vertex i of the graph has been visited during the procedure. When the procedure is called as traverse(1), the output is in the order _______. 1 2 4 5 3 Figure Structure of the graph",
        "options": [
          "a) 1, 2, 3, 4, 5",
          "b) 1, 2, 3, 5, 4",
          "c) 1, 2, 4, 3, 5",
          "d) 1, 2, 4, 5, 3"
        ],
        "correctIndex": 1,
        "explanation": "Official ITPEC Subject B answer for Q9 (2024A) is Option (b).",
        "requiresPseudocode": true,
        "pseudocodeBlock": "global: integer: n \n← 5 \n global: integer [][]: graph ← {{0, 1, 0, 1, 0}, {1, 0, 1, 0, 1}, \n {0, 1, 0, 0, 0}, {1, 0, 0, 0, 1}, \n {0, 1, 0, 1, 0}} \n global: boolean []: visited ← {false, false, false, false, false} \n \n ○ traverse(integer: k) \n integer: i \n visited[k] \n← true \n output k \n \n for (increase i from 1 to n by 1) \n if (graph[k][i] = 1 and visited[i] = false) \n traverse(i) \n endif \n endfor"
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2024A_FE-B_Questions.pdf",
    "pdfPage": 15
  },
  {
    "scenarioId": "fe-2024a-q10",
    "title": "Subject B Q10 (2024A): Computer Architecture & OS",
    "examYear": 2024,
    "domain": "Computer Architecture & OS",
    "contextMarkdown": "Open the embedded PDF at page 16 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2024a-q10-sub1",
        "questionNumber": 1,
        "prompt": "Q10. From the answer group below, select the correct answer to be inserted into _______ in the program. The procedure addNode adds a node to a singly-linked list at the position specified by the argument pos. The argument pos is a positive integer that is equal to or less than the (number of nodes + 1) in the list. The position at the top of the list is 1. The class ListNode represents a node in a singly-li nked list. The table summarizes an explanation of the member variables of the class ListNode. ListNode-type variables store references to instances of the class ListNode. A reference to the first node in the list is pre- stored in the global variable listHead. Table Explanation of the member variables of the class ListNode Member variable Type Description val character The value of a node. next ListNode A reference for the next node. If no next node exists, the status is undefined.",
        "options": [
          "a) listHead",
          "b) listHead.next",
          "c) listHead.next.next",
          "d) prev",
          "e) prev.next",
          "f) prev.next.next"
        ],
        "correctIndex": 4,
        "explanation": "Official ITPEC Subject B answer for Q10 (2024A) is Option (e).",
        "requiresPseudocode": true,
        "pseudocodeBlock": "global: ListNode: listHead // stores the first node in the list \n \n○ addNode(integer: pos, character: val) \n ListNode: prev, newNode \n integer: i \n newNode \n← ListNode() \n newNode.val ← val \n if (pos is equal to 1) \n newNode.next ← listHead \n listHead ← newNode \n else \n prev \n← listHead \n /* if pos is equal to 2, the following iteration process is not executed */ \n for (increase i from 2 to pos - 1 by 1) \n prev ← prev.next \n endfor \n newNode.next ← prev.next \n _______ ← newNode \n endif"
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2024A_FE-B_Questions.pdf",
    "pdfPage": 16
  },
  {
    "scenarioId": "fe-2024a-q11",
    "title": "Subject B Q11 (2024A): Databases & SQL",
    "examYear": 2024,
    "domain": "Databases & SQL",
    "contextMarkdown": "Open the embedded PDF at page 17 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2024a-q11-sub1",
        "questionNumber": 1,
        "prompt": "Q11. From the answer group below, select the corre ct combination of answers to be inserted into ___A___ and ___B___ in the program. Here, the array indexes start at 1. The procedure sort sorts an integer array c ontaining certain number (≥ 2) of elements in ascending order.",
        "options": [
          "a) A[i] ← A[i - 1] k ← k + 1",
          "b) A[k] ← A[k - 1] swap k and i",
          "c) A[k - 1] ← A[k] k ← k + 1",
          "d) swap A[i] and A[i - 1] k ← k - 1",
          "e) swap A[i] and A[k] swap k and i",
          "f) swap A[k] and A[k - 1] k ← k - 1"
        ],
        "correctIndex": 5,
        "explanation": "Official ITPEC Subject B answer for Q11 (2024A) is Option (f).",
        "requiresPseudocode": true,
        "pseudocodeBlock": "○ sort(integer []: arg) \n Integer []: A ← arg \n integer: i, k \n for (increase i from 2 to the number of elements in A by 1) \n k ← i \n while (k > 1) \n if (A[k – 1] ≤ A[k]) \n exit the while block \n endif \n ___ A___ \n ___ B___ \n endwhile \n endfor \n output A"
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2024A_FE-B_Questions.pdf",
    "pdfPage": 17
  },
  {
    "scenarioId": "fe-2024a-q12",
    "title": "Subject B Q12 (2024A): Networking & Security",
    "examYear": 2024,
    "domain": "Networking & Security",
    "contextMarkdown": "Open the embedded PDF at page 18 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2024a-q12-sub1",
        "questionNumber": 1,
        "prompt": "Q12. From the answer group below, select the corre ct combination of answers to be inserted into ____A____ and ____B____ in the program. Here, the array index starts at 1. The function isPalindrome determines whether the character array s given as argument is a palindrome. Palindromes are words when read backward will still be the same such as “noon” and “madam.” If character array s is a palindrome, it returns the value true and if not, the function returns false. The table lists examples of s given to the function isPalindrome and the return values. In the program, areas outside of the arrays must not be referenced. Table Examples of s given to the function isPalindrome and the return values s Return value {\"n\", \"o\", \"o\", \"n\"} true {\"n\", \"i\", \"g\", \"h\", \"t\"} false {\"m\", \"a\", \"d\", \"a\", \"m\"} true {\"s\", \"i\", \"r\"} false",
        "options": [
          "a) s[left] = s[right] right ← right + 1",
          "b) s[left] = s[right] right ← right − 1",
          "c) s[left] = s[right] right ← right + left",
          "d) s[left] = s[right] right ← right − left",
          "e) s[left] ≠ s[right] right ← right + 1",
          "f) s[left] ≠ s[right] right ← right – 1",
          "g) s[left] ≠ s[right] right ← right + left",
          "h) s[left] ≠ s[right] right ← right − left"
        ],
        "correctIndex": 1,
        "explanation": "Official ITPEC Subject B answer for Q12 (2024A) is Option (b).",
        "requiresPseudocode": true,
        "pseudocodeBlock": "○ boolean: isPalindrome(character []: s) \n integer: left ← 1 \n integer: right ← the number of elements in s \n boolean: ok ← true \n while (left < right) \n if (___A___) \n left ← left + 1 \n ___B___ \n else \n ok ← false \n break \n endif \n endwhile \n return ok"
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2024A_FE-B_Questions.pdf",
    "pdfPage": 18
  },
  {
    "scenarioId": "fe-2024a-q13",
    "title": "Subject B Q13 (2024A): Algorithms & Programming",
    "examYear": 2024,
    "domain": "Algorithms & Programming",
    "contextMarkdown": "Open the embedded PDF at page 20 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2024a-q13-sub1",
        "questionNumber": 1,
        "prompt": "Q13. From the answer group below, select the corre ct combination of answers to be inserted into ___A___ and ___B___ in the program. Here, the array indexes start at 1. Hashing in data structures is a fundamental concept used for effici ent data retrieval and storage mechanisms. A program storing a key-da ta pairs in an array by transforming keys into array indexes using a hash function exists. A collision occurs when two keys hash to the same index in the array representing the hash table. A common method handling collisions, the probing mechanis m (checking for an available element), is used in the function. The procedure insertData inserts a pair of key and data, if the element in the array is {undefined}. Assumptions are made that no da ta with the same key is stored, and that at least one element in the array hashTable is {undefined} when the procedure insertData is called. The function hashFunction takes a key as input and returns a hash value.",
        "options": [
          "a) hashTable[index][1] ≠ key index ← 1",
          "b) hashTable[index][1] ≠ key index ← index - 1",
          "c) hashTable[index][1] = key index ← 1",
          "d) hashTable[index][1] = key index ← index - 1",
          "e) hashTable[index][1] ≠ undefined index ← 1",
          "f) hashTable[index][1] ≠ undefined index ← index - 1",
          "g) hashTable[index][1] = undefined index ← 1",
          "h) hashTable[index][1] = undefined index ← index - 1"
        ],
        "correctIndex": 4,
        "explanation": "Official ITPEC Subject B answer for Q13 (2024A) is Option (e).",
        "requiresPseudocode": true,
        "pseudocodeBlock": "global: integer [][]: hashTable ← {Elements comprising 1000 {undefined}} \n global: integer: size ← 1000 \n ○ integer: hashFunction(integer: key) \n return (key mod size) + 1 \n \n ○ insertData(integer: key, integer: data) \n integer: index \n index ← hashFunction(key) \n while (___A___) \n if (index = size) \n ___B___ \n else \n index ← index + 1 \n endif \n endwhile \n hashTable[index] \n← {key, data}"
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2024A_FE-B_Questions.pdf",
    "pdfPage": 20
  },
  {
    "scenarioId": "fe-2024a-q14",
    "title": "Subject B Q14 (2024A): Data Structures & Memory",
    "examYear": 2024,
    "domain": "Data Structures & Memory",
    "contextMarkdown": "Open the embedded PDF at page 22 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2024a-q14-sub1",
        "questionNumber": 1,
        "prompt": "Q14. From the answer group below, select the correct answer to be inserted into _______ in the description. Here, the array indexes start at 1. The function summarize receives the array sortedData sorted in ascending order and returns five values that characterize the array. The array sortedData must have at least one element. The summarize calls the findRank with two arguments, sortedData and q. When the function summarize is called as summarize({0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1}), the return value is _______.",
        "options": [
          "a) {0.1, 0.2, 0.3, 0.4, 0.5}",
          "b) {0.1, 0.2, 0.3, 0.4, 0.7}",
          "c) {0.1, 0.2, 0.4, 0.6, 0.9}",
          "d) {0.1, 0.2, 0.4, 0.7, 0.9}",
          "e) {0.1, 0.3, 0.5, 0.7, 1}",
          "f) {0.1, 0.3, 0.5, 0.8, 1}",
          "g) {0.1, 0.3, 0.6, 0.9, 1}",
          "h) {0.1, 0.3, 0.7, 0.9, 1}"
        ],
        "correctIndex": 4,
        "explanation": "Official ITPEC Subject B answer for Q14 (2024A) is Option (e).",
        "requiresPseudocode": true,
        "pseudocodeBlock": "○ real: findRank(real []: sortedData, real: q) \n integer: j \n j \n← floor(q × (the number of elements in sortedData - 1)) \n // floor returns the closest integer less than or equal to a given \n // number, e.g. floor(7.75) returns 7. \n return sortedData[j + 1] \n \n○ real []: summarize(real []: sortedData) \n real []: rankData ← {} /* array with 0 elements */ \n real []: q ← {0, 0.25, 0.5, 0.75, 1} \n integer: i \n for (increase i from 1 to the number of elements in q by 1) \n add the return value of findRank(sortedData, q[i]) to the end of rankData \n endfor \n return rankData"
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2024A_FE-B_Questions.pdf",
    "pdfPage": 22
  },
  {
    "scenarioId": "fe-2024a-q15",
    "title": "Subject B Q15 (2024A): Software Engineering",
    "examYear": 2024,
    "domain": "Software Engineering",
    "contextMarkdown": "Open the embedded PDF at page 23 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2024a-q15-sub1",
        "questionNumber": 1,
        "prompt": "Q15. From the answer group below, select the corre ct combination of answers to be inserted into ___A___ and ___B___ in the program. Here, the array indexes start at 1. Suppose the weather in a city, from day to day, follows a Markov process. This implies the next day’s weather depends only on today’s weather and not on those of the previous days. If it rains today in the city, a probability 0.3 exists that it will rain again tomorrow. Similarly, the probability that tomorrow’s weather will be sunny is 0.4 and that it will be cloudy is 0.3. If today’s weather is sunny, the next day w ill be rainy, sunny, or cloudy with probabilities 0.2, 0.7, and 0.1, respectively. Addi tionally, if today’s weather is cloudy, the next day will be rainy, sunny, or cloudy with probabilities 0.25, 0.5, and 0.25, respectively. Let us say that the weather is in state 1 if it is rainy, in state 2 if it is sunny, and in state 3 if it is cloudy. Then, the above is a three-state Markov chain whose transition probabilities are given by the following: from to 123 0.3 0.4 0.3 0.2 0.7 0.1 0.25 0.5 0.25 1 2 3 Using this transition matrix, the probability distribution of the weather after several days can be estimated. The program calculates the probability distribution of the weather of the city after three days from the present day and outputs a 3 × 3 square matrix that shows this probability distribution of the weather. For instance, if the weather on the present day is sunny (state 2), the probability that the weather three days after will be rainy (state 1) is the value in the second row and the first column of the outputted matrix.",
        "options": [
          "a) 2 dmat[i, k] × pmat[k, j]",
          "b) 2 dmat[k, i] × pmat[j, k]",
          "c) 3 dmat[i, k] × pmat[k, j]",
          "d) 3 dmat[k, i] × pmat[j, k]",
          "e) 4 dmat[i, k] × pmat[k, j]",
          "f) 4 dmat[k, i] × pmat[j, k]"
        ],
        "correctIndex": 0,
        "explanation": "Official ITPEC Subject B answer for Q15 (2024A) is Option (a).",
        "requiresPseudocode": true,
        "pseudocodeBlock": "real [,]: pmat ← {{0.3, 0.4, 0.3}, {0.2, 0.7, 0.1}, {0.25, 0.5, 0.25}} \nreal [,]: dmat ← pmat \nreal [,]: smat \ninteger: i, j, k, m \nfor (increase m from 1 to ___A___ by 1) \n smat ← {{0, 0, 0}, {0, 0, 0}, {0, 0, 0}} \n for (increase i from 1 to 3 by 1) \n for (increase j from 1 to 3 by 1) \n for (increase k from 1 to 3 by 1) \n smat[i, j] ← smat[i, j] + __B___ \n\n endfor \n endfor \n endfor \n dmat \n← smat \nendfor \noutput dmat"
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2024A_FE-B_Questions.pdf",
    "pdfPage": 23
  },
  {
    "scenarioId": "fe-2024a-q16",
    "title": "Subject B Q16 (2024A): Computer Architecture & OS",
    "examYear": 2024,
    "domain": "Computer Architecture & OS",
    "contextMarkdown": "Open the embedded PDF at page 25 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2024a-q16-sub1",
        "questionNumber": 1,
        "prompt": "Q16. From the answer group below, select the corre ct combination of answers to be inserted into ___A___ through ___C___ in the program. Function hammingDistance receives two strings as argument and returns Hamming distance as the return value. Hamming distance is a me tric used to measure the difference between two strings of equal length. It counts the number of positions at which the corresponding characters are different. For instance, the return value is 2 when the function hammingDistance(\"101010\", \"111000\") is called, because positions 2 and 5 have different characters. It can also be extended to strings of diff erent lengths by considering the unmatched characters as differences. For instance, the return value is 5 when the function hammingDistance(\"101010\", \"111000111\") is called, because of two differences in first six characters and addition of three extra unmatched characters.",
        "options": [
          "a) length2 < length1 is equal to remainingLength",
          "b) length2 < length1 is equal to distance + remainingLength",
          "c) length2 < length1 is not equal to distance + minLength",
          "d) length2 < length1 is not equal to distance + remainingLength",
          "e) length2 > length1 is equal to remainingLength",
          "f) length2 > length1 is equal to distance + remainingLength",
          "g) length2 > length1 is not equal to distance + minLength",
          "h) length2 > length1 is not equal to distance + remainingLength"
        ],
        "correctIndex": 3,
        "explanation": "Official ITPEC Subject B answer for Q16 (2024A) is Option (d).",
        "requiresPseudocode": true,
        "pseudocodeBlock": "○ integer: hammingDistance(string: s1, string: s2) \n integer: distance, length1, length2, minLength, remainingLength \n length1 \n← length of s1 \n length2 ← length of s2 \n distance ← 0 \n minLength ← length1 \n if (___A___) \n minLength ← length2 \n endif \n for (increase i from 1 to minLength by 1) \n if (the i-th character of string s1 ___B___ the i-th character of string s2) \n distance ← distance + 1 \n endif \n endfor \n if (length1 > length2) \n remainingLength = length1 - length2 \n else \n remainingLength = length2 - length1 \n endif \n distance \n← ___C___ \n return distance"
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2024A_FE-B_Questions.pdf",
    "pdfPage": 25
  },
  {
    "scenarioId": "fe-2024a-q17",
    "title": "Subject B Q17 (2024A): Databases & SQL",
    "examYear": 2024,
    "domain": "Databases & SQL",
    "contextMarkdown": "Open the embedded PDF at page 27 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2024a-q17-sub1",
        "questionNumber": 1,
        "prompt": "Q17. From the answer group below, select the most appropriate combination of answers to be inserted into ____A____ and ____B____ in the description. Company A is an e-commerce company specia lizing in sporting goods. One morning, employee X of the company's accounting departme nt starts up his PC to begin his work. When he logged into his PC, he saw an unfamiliar screen with the following message: *** Attention *** Your files have been encrypted. All of your important files have been encrypted. To restore these files, please follow these steps: 1. transfer $500 worth of cryptcurrency to the currency address provided: Address: 1ABCD.... EFGH 2. As soon as the transfer is confirmed, we will send you the key to decrypt the files. 3. If the transfer is not confirmed within 48 h, the decryption key will be deleted and the files will be lost forever. Contact: help@ransomware.example.com The accounting department immediately requested the security team in company A to help resolve the situation. The security team analyzed all the PCs in the accounting department, including that of employee X, and noted the following: 1. A total of tow compromised PCs were f ound. One PC was used by Employee X and the other PC was shared by multiple employees. 2. IDS/IPS was not installed in the accounting department LAN, delaying detection of ransomware. 3. The shared PC was backed up daily, and im portant data could be restored from the backup at the time when the PC was not compromised by the ransomware. 4. Employee X's PC was not backed up, and important data could not be restored. 5. The ransomware was saved on Employee X's PC as an attachment file of an email sent by a company pretending to be a bus iness partner. The email envelope and content were sophisticatedly disguised and difficult to detect through enhanced spam filters. 6. Employee X inadvertently executed the attached file and allowed the ransomware to invade his PC. 7. After compromising Employee X's PC, the ransomware attempted to compromise other PCs in the LAN by taking advantage of vulnerabilities in the target OS, but succeeded only in compromising the shared PC, which had neglected to apply OS security patches. 8. On both PCs, the anti-virus software versions and virus definition files were checked for updates on a daily basis and maintained up-to-date. 9. Both PCs had OS storage encryption feature enabled, but it was not effective against the ransomware attack in this incident. The security team and the accounting department decided to take the following approaches and specific measures as a plan to strengthen the measures against future ransomware attacks. Table 1. Approaches and Specific Measures (excerpts) Approaches Specific Measures Prevention User education and training ____A ___ Detection Network monitoring with IDS/IPS Data Protection ____B ___",
        "options": [
          "a) SPAM filter enhancement Data backup",
          "b) SPAM filter enhancement Data encryption",
          "c) OS updates Data backup",
          "d) OS updates Data encryption",
          "e) Virus definition updates Data backup",
          "f) Virus definition updates Data encryption"
        ],
        "correctIndex": 2,
        "explanation": "Official ITPEC Subject B answer for Q17 (2024A) is Option (c).",
        "requiresPseudocode": false
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2024A_FE-B_Questions.pdf",
    "pdfPage": 27
  },
  {
    "scenarioId": "fe-2024a-q18",
    "title": "Subject B Q18 (2024A): Networking & Security",
    "examYear": 2024,
    "domain": "Networking & Security",
    "contextMarkdown": "Open the embedded PDF at page 29 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2024a-q18-sub1",
        "questionNumber": 1,
        "prompt": "Q18. From the answer group below, select the correct answer to be inserted into ______ in the description. Company B runs several web services. Mr. Y is a software engineer in the company. He was directed to develop a feature that prevents web service users from setting weak passwords. Mr. Y investigated and found th at “Password Entropy” is th e important f actor for the password strength. Password entropy measures the strength of a pa ssword based on the difficulty of cracking the password through guessing or a brute-force attack. The entropy of a password is typically based on the type of characters used—lowercase letters, uppercase letters, numerical digits, or special characters—and the length of th e password or total number of characters. Password entropy formula: You can measure the entropy of a password in bits using the following formula: E = ⌊L ×Log 2 (R)⌋ In this formula: - E denotes the password entropy - R denotes the possible range of character types in the password - L denotes the number of characters in the password (its length) - Log 2 answers the question, \"to what power 2 must be raised to equal this number\" - ⌊X⌋ denotes the greatest integer N such that N ≤ X The following totals show the breakdown for each character set as they appear on a typical American QWERTY keyboard: Lowercase letters (a–z) = 26. Uppercase letters (A–Z) = 26. Numerical digits (0–9) = 10. Special characters (!, @, #, $, %, ^, etc.) = 32. The password vfssxfrb has a pool of 26 characters (lowercase letters); Changing the password to JAAdMAdE would increase the pool to 52 characters (lowercase letters and uppercase letters); Changing it further to u7aHqsbt would increase the pool to 62 characters (lowercase letters, uppercase letters along with numbers) and Finally, Re*ct7$% has a pool of 26 + 26 + 10 + 32 = 94 characters (lowercase letters, uppercase letters, numbers, and special characters). In our example: • For vfssxfrb, we have R = 26 and L = 8; thus, E = ⌊8 × log2(26) ⌋ ≈ ⌊8 × 4.700⌋ ≈ ⌊37.60⌋ = 37 bits • For JAAdMAdE, we have R = 52 and L = 8; thus, E = ⌊8 × log2(52) ⌋ ≈ ⌊8 × 5.700⌋ ≈ ⌊45.60⌋ = 45 bits • For u7aHqsbt, we have R = 62 and L = 8; thus, E = ⌊8 × log2(62) ⌋ ≈ ⌊8 × 5.954⌋ ≈ ⌊47.63⌋ = 47 bits • For Re*ct7$%, we have R = 94 and L = 8; thus, E = ⌊8 × log2(94) ⌋ ≈ ⌊8 × 6.555⌋ ≈ ⌊52.44⌋ = 52 bits Here, when the password is A6GmyVyOC (Using numerical digits, lowercase letters, and uppercase letters. L = 9), the password entropy is ____ ___ bits.",
        "options": [
          "a) 42",
          "b) 51",
          "c) 52",
          "d) 53",
          "e) 58"
        ],
        "correctIndex": 3,
        "explanation": "Official ITPEC Subject B answer for Q18 (2024A) is Option (d).",
        "requiresPseudocode": false
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2024A_FE-B_Questions.pdf",
    "pdfPage": 29
  },
  {
    "scenarioId": "fe-2024a-q19",
    "title": "Subject B Q19 (2024A): Algorithms & Programming",
    "examYear": 2024,
    "domain": "Algorithms & Programming",
    "contextMarkdown": "Open the embedded PDF at page 31 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2024a-q19-sub1",
        "questionNumber": 1,
        "prompt": "Q19. From the answer group below, select the corre ct combination of answers to be inserted into ___A___ and ___B___ in the description. Company X is an investment company. Recently, one of their database servers was attacked by an attacker. Mr. L, the security team leader of company X, decided to ask Ms. A, a security analyst working for the same company, to analyze the logs. Mr. L will extract log entries related to database access from the log file of the attacked database server and send the extracted log entries to Ms. A. When sending access log data from Mr. L to Ms. A, the following conditions were agreed upon in advance: - Mr. L must encrypt the file such that only Ms. A can view it. - Ms. A must confirm that the sender of the file is Mr. L. They each have an RSA key pair and have already exchanged their public keys with each other. They sign, verify, encr ypt, and decrypt using those ke ys and a previously shared cryptographic processing software. This time, the log entries must be ___ A___ and then ___B___.",
        "options": [
          "a) signed using Mr. L’s private key encrypted using Mr. L’s private key",
          "b) signed using Mr. L’s private key encrypted using Mr. L’s public key",
          "c) signed using Mr. L’s private key encrypted using Ms. A’s private key",
          "d) signed using Mr. L’s private key encrypted using Ms. A’s public key",
          "e) signed using Mr. L’s public key en crypted using Mr. L’s private key",
          "f) signed using Mr. L’s public key encrypted using Mr. L’s public key",
          "g) signed using Mr. L’s public key en crypted using Ms. A’s private key",
          "h) signed using Mr. L’s public key encrypted using Ms. A’s public key"
        ],
        "correctIndex": 3,
        "explanation": "Official ITPEC Subject B answer for Q19 (2024A) is Option (d).",
        "requiresPseudocode": false
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2024A_FE-B_Questions.pdf",
    "pdfPage": 31
  },
  {
    "scenarioId": "fe-2024a-q20",
    "title": "Subject B Q20 (2024A): Data Structures & Memory",
    "examYear": 2024,
    "domain": "Data Structures & Memory",
    "contextMarkdown": "Open the embedded PDF at page 32 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2024a-q20-sub1",
        "questionNumber": 1,
        "prompt": "Q20. From the answer group below, select the most appropriate combination of answers to be inserted into ___A___ and ___B___ in the description. Company Y, a trading company, is developing an e-commerce web application for selling products to customers directly. The web server hosting the web applic ation is installed on- premise and the web application is to be de veloped in-house. The communications to the web server are allowed only with HTTPS and the server certificate is already signed by the third party and installed on the web server. Company Y has an IT department comprising three teams—Developer, Security, and Tech Support—and the requirements for the web application are specified as follows (excerpt): • The web application is user-friendly and easy to navigate. • The web application is cost-effective to develop and maintain. • The web application can prevent malicious inputs into the system. • The web application is scalable and can handle a large number of customers. • The purchase orders and invoices are digitally signed to confirm integrity and authenticity. During the initial project meeting, the memb ers from each department discuss their respective tasks. The developer team requests the security team to derive specific tasks for the above requirements related to security. Ms. B, a member of the security team, suggests the following tasks: • Set up a ___A___ to provide the infrastructure. • Install a ___B___ in front of the web server.",
        "options": [
          "a) PKI environment honeypot",
          "b) PKI environment VPN gateway",
          "c) PKI environment web application firewall",
          "d) SPF record honeypot",
          "e) SPF record VPN gateway",
          "f) SPF record web application firewall _ _"
        ],
        "correctIndex": 2,
        "explanation": "Official ITPEC Subject B answer for Q20 (2024A) is Option (c).",
        "requiresPseudocode": false
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2024A_FE-B_Questions.pdf",
    "pdfPage": 32
  },
  {
    "scenarioId": "fe-2023s-q1",
    "title": "Subject B Q1 (2023S): Algorithms & Programming",
    "examYear": 2023,
    "domain": "Algorithms & Programming",
    "contextMarkdown": "Open the embedded PDF at page 3 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2023s-q1-blank-a",
        "questionNumber": 1,
        "prompt": "Select the correct answer to be inserted into blank A.",
        "options": [
          "a) a random number",
          "b) CA’s private key",
          "c) CA’s public key",
          "d) the server’s private key",
          "e) the server’s public key",
          "f) the session key"
        ],
        "correctIndex": 0,
        "explanation": "Official ITPEC Subject B solution for Q1 Blank A (2023S).",
        "requiresPseudocode": false
      },
      {
        "questionId": "fe-2023s-q1-blank-b",
        "questionNumber": 2,
        "prompt": "Select the correct answer to be inserted into blank B.",
        "options": [
          "a) (2) ServerHello",
          "b) (3) Certificate",
          "c) (4) ServerKeyExchange",
          "d) (5) ServerHelloDone",
          "e) (6) ClientKeyExchange",
          "f) (7) ClientChangeCipherSpec",
          "g) (8) ClientFinished",
          "h) (10) ServerFinished"
        ],
        "correctIndex": 1,
        "explanation": "Official ITPEC Subject B solution for Q1 Blank B (2023S).",
        "requiresPseudocode": false
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2023S_FE-B_Questions.pdf",
    "pdfPage": 3
  },
  {
    "scenarioId": "fe-2023s-q2",
    "title": "Subject B Q2 (2023S): Data Structures & Memory",
    "examYear": 2023,
    "domain": "Data Structures & Memory",
    "contextMarkdown": "Open the embedded PDF at page 7 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2023s-q2-sub1",
        "questionNumber": 1,
        "prompt": "Subquestion 1 From the answer group below, select the most appropriate answer to be inserted in each blank _______ in the above description. Here, the answers to be inserted in C1 and C2 should be selected as the correct combination from the answer group for C.",
        "options": [
          "a) it cannot store a sequential file when the required number of continuous free blocks is unavailable.",
          "b) it is ineffective against a di rect-access file since it must start at the beginning of the file and continue through each block to find the specific part of the file.",
          "c) it usually has greater wasted space than the other method especially in the system with a large number of small files.",
          "d) the content of the file cannot be stored in consecutive blocks due to the limitation of the referencing mechanism, resulting in lower overall performance."
        ],
        "correctIndex": 0,
        "explanation": "Official ITPEC Subject B solution for Q2 Subquestion 1 (2023S).",
        "requiresPseudocode": false
      },
      {
        "questionId": "fe-2023s-q2-sub2",
        "questionNumber": 2,
        "prompt": "Subquestion 2 From the answer group below, select the correct answer to be inserted in each blank _______ in the following description. [Inode allocation method] The inode allocation method is used in UNIX-based systems. The inode allocation method combines the linked and indexed allocation methods into one. Instead of using a table to look up a file, an entity called inode is used to store the information about a file, similar to the working of the index block in Figure 2. It is an indexed allocation method with the advantage of flexible indexing by chaining up to four index nodes. The concept of inode used in UNIX-based systems is shown in Figure 3. There are 15 pointers in an inode. The first 12 pointers directly point to data blocks; thus, any part of the file can be directly accessed if it occupies less than or equal to 12 blocks. For a larger file, the single indirect, double indirect, and triple indirect pointers will be used based on the file size. The single indirect pointer points to a block containing direct pointers, while the double indirect pointer points to a block containing pointers to another single indirect pointer. inode size * direct blocks * ⁝ * single indirect * double indirect * triple indirect * block count data data .. .. data data data data data data data data data data data data data (Legend) the box indicates a block containing direct pointers. Note: Shaded parts are not shown, and an “*” indicates a pointer to a block. Figure 3 Concept of inode allocation method in UNIX-based systems Table 1 shows the largest accessible data size by pointer level. Here, the block size is 4096 bytes (4 kB) and the pointer size is 4 bytes, i.e., a block holds 1024 pointers. Table 1 Largest accessible data size by pointer level Pointer level Number of pointers Largest accessible data size direct blocks 12 48 kB single indirect 1024 4 MB double indirect 1024 × 1024 4 GB triple indirect 1024 × 1024 × 1024 4 TB * ⁝ * * ⁝ * * ⁝ * * ⁝ * * ⁝ * * ⁝ * * ⁝ * * ⁝ * * ⁝ * * ⁝ * * ⁝ * Consider the case where a file contains 1 MB of data. On the assumption that the size of a block is 4 kB and the size of a pointer is 4 bytes, ___ D___ blocks are required to store the file in the inode allocation method. Here, the block for th e inode is ignored. Use 1MB ÷ 4 kB = 256. It is possible to specify a different block size other than 4 kB while formatting a file system. A smaller block size helps reduce occupied stor age size per file for smaller files, while a larger block size helps reduce the number of blocks per file for larger files. Change of the block size affects the maximum accessible file size by two factors: the number of bytes per data block and the number of pointers per index block. For example, if the size of a block is 1 kB and the size of a pointer is 4 bytes, the maximum accessible file size will be approximately ___ E___ in the inode allocation method.",
        "options": [
          "a) 256",
          "b) 257",
          "c) 258",
          "d) 259",
          "e) 256 GB",
          "f) 512 GB",
          "g) 1 TB"
        ],
        "correctIndex": 1,
        "explanation": "Official ITPEC Subject B solution for Q2 Subquestion 2 (2023S).",
        "requiresPseudocode": false
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2023S_FE-B_Questions.pdf",
    "pdfPage": 7
  },
  {
    "scenarioId": "fe-2023s-q3",
    "title": "Subject B Q3 (2023S): Software Engineering",
    "examYear": 2023,
    "domain": "Software Engineering",
    "contextMarkdown": "Open the embedded PDF at page 12 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2023s-q3-sub1",
        "questionNumber": 1,
        "prompt": "Subquestion 1 From the answer group below, select the correct answer to be inserted in each blank _______ in the following SQL statement. The following SQL statement SQL1 outputs how much sales amount, in dollars, each store brought in. The output records are ordered from higher to lower sales amounts. -- SQL1 -- SELECT st.StoreID, st.StoreName, ___A___ AS Sales FROM ___B___ INNER JOIN Staff s ON s.StaffID = p.StaffID INNER JOIN Store st ON st.StoreID = s.StoreID GROUP BY st.StoreID, st.StoreName ORDER BY ___C___ The INNER JOIN keyword in this statement selects all rows from both tables in case there is a match between the columns. From the sample data shown in the table definitions, SQL1 outputs the following result: StoreID StoreName Sales 20 North-east shop 12.98 10 South-west shop 11.97",
        "options": [
          "a) Amount",
          "b) Payment",
          "c) Payment p",
          "d) Sales",
          "e) Sales ASC",
          "f) Sales DESC",
          "g) SUM(Amount)"
        ],
        "correctIndex": 0,
        "explanation": "Official ITPEC Subject B solution for Q3 Subquestion 1 (2023S).",
        "requiresPseudocode": false
      },
      {
        "questionId": "fe-2023s-q3-sub2",
        "questionNumber": 2,
        "prompt": "Subquestion 2 From the answer group below, select the correct answer to be inserted in the blank _______ in the following SQL statement. One day, a store staff found that a customer had left his/her PC in the store. On the PC, there was a name sticker. Unfortunately, the characters were blurred and the staff could not clearly read the owner’s name. Finally, the staff identified that: o the first character of the first name was “B”. o the last name consists of five characters; the first three characters were “Gre”, and the last character was “n”. The following SQL statement SQL2 extracts customers whose names are closest to the name on the PC. -- SQL2 -- SELECT CustomerID, FirstName, LastName, Email FROM Customer WHERE ___D___ Two wildcard characters often used in a search pattern in pattern matching are as follows: '%' (percent sign) … represents any st ring of zero or more characters '_' (underscore) … represen ts any single character From the sample data shown in the table definitions, SQL2 outputs the following result: CustomerID FirstName LastName Email C002 Baelfire Grehn bael firegrehn@example.net C004 Brendon Green brendongreen@example.net",
        "options": [
          "a) (FirstName LIKE 'B%') AND (LastName LIKE 'Gre%n')",
          "b) (FirstName LIKE 'B%') AND (LastName LIKE 'Gre_n')",
          "c) (FirstName LIKE 'B_') AND (LastName LIKE 'Gre%n')",
          "d) (FirstName LIKE 'B_') AND (LastName LIKE 'Gre_n')"
        ],
        "correctIndex": 1,
        "explanation": "Official ITPEC Subject B solution for Q3 Subquestion 2 (2023S).",
        "requiresPseudocode": false
      },
      {
        "questionId": "fe-2023s-q3-sub3",
        "questionNumber": 3,
        "prompt": "Subquestion 3 From the answer group below, select the correct answer to be inserted in the blank _______ in the following SQL statement. DVD shop U is planning a discount campaign fo r repeaters. The following SQL statement SQL3 extracts customers who paid twice or more from April 1 to April 15, 2023. -- SQL3 -- SELECT c.CustomerID, c.LastName, COUNT(*) AS PayCount FROM Customer c, Payment p WHERE c.CustomerID = p.CustomerID ___E___ From the sample data shown in the table definitions, SQL3 outputs the following result: CustomerID LastName PayCount C003 Gretan 2",
        "options": [
          "a) AND p.PayDate >= '2023-04-01' AND p.PayDate <= '2023-04-15' AND COUNT(*) >= 2",
          "b) AND p.PayDate BETWEEN '2023-04-01' AND '2023-04-15' GROUP BY c.CustomerID, c.LastName HAVING COUNT(*) >= 2",
          "c) GROUP BY c.CustomerID, c.LastName, p.PayDate HAVING p.PayDate >= '2023-04-01' AND p.PayDate <= '2023-04-15' AND COUNT(*) >= 2",
          "d) HAVING p.PayDate BETWEEN '2023-04-01' AND '2023-04-15' AND COUNT(*) >= 2 the Internet"
        ],
        "correctIndex": 2,
        "explanation": "Official ITPEC Subject B solution for Q3 Subquestion 3 (2023S).",
        "requiresPseudocode": false
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2023S_FE-B_Questions.pdf",
    "pdfPage": 12
  },
  {
    "scenarioId": "fe-2023s-q4",
    "title": "Subject B Q4 (2023S): Computer Architecture & OS",
    "examYear": 2023,
    "domain": "Computer Architecture & OS",
    "contextMarkdown": "Open the embedded PDF at page 16 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2023s-q4-sub1",
        "questionNumber": 1,
        "prompt": "Subquestion 1 From the answer groups below, select the co rrect answer to be inserted in each blank _______ in the following description and Table 1. To design a variable length subnet mask networ k address scheme (different segments of networks), the network administrator uses the following scheme: o The network segments are designed per the re quirements of the number of hosts in each network, starting from the largest LAN to the smallest LAN. Note that the number of hosts includes not only servers and PCs but also the interfaces of network devices connected to the segment. o After determining the addresse s for all the LAN subnets, the first available address is assigned to the interface of FW and the second to the interface of CR for Link A. o The first available IP address is used as the gateway of each network segment and assigned at the router interfaces. However, for the DMZ and Server farm, the gateway of the network segment is assigned at the interface of FW. The gateway of the DMZ servers is ___A___. o Table 1 shows the required different segments of networks as per specific hosts of each network. Table 1 Variable length subnet mask network address scheme Number Network name Required number of hosts Network mask 1 Technology department 92 172.16.10.0/25 2 Sales department 32 ___B___ 3 Solutions department 28 ___C___ 4 Finance department 12 172.16.10.224/28 5 DMZ 4 172.16.10.240/29 6 Server farm 2 172.16.10.248/30 7 Link A 2 172.16.10.252/30",
        "options": [
          "a)",
          "b)",
          "c)",
          "d)",
          "e)",
          "f)",
          "g)",
          "h)",
          "i)",
          "j)"
        ],
        "correctIndex": 0,
        "explanation": "Official ITPEC Subject B solution for Q4 Subquestion 1 (2023S).",
        "requiresPseudocode": false
      },
      {
        "questionId": "fe-2023s-q4-sub2",
        "questionNumber": 2,
        "prompt": "Subquestion 2 From the answer group below, select the correct answer to be inserted in each blank ___ ____ in Table 2. After designing the different network segments, the network administrator configured the routing protocol on the CR and FW. As a result, the routing function is working properly and all hosts on the LANs can connect with each other and access to the Internet. To improve the security of servers located in DMZ and the Finance server, the network administrator implemented several zone-based security policies on FW according to the following rules: (1) Secure web services (HTTPS) on the extern al IP address of FW will be mapped to the Web server in DMZ. (2) Mail transferring services (SMTP) and rece iving services (IMAPS) on the external IP address of FW will be mapped to the Mail server in DMZ. (3) Allow access from DMZ to the Internet via NAT (IP address translation), which is necessary for the correct functionality of the mapped service. (4) Allow access only from the Finance department to the Finance server with a secure web service to access financial information from the server. (5) Other hosts from LANs and external users cannot access the Finance server. (6) Allow other traffic from LANs to DMZ, a llowing access to multiple resources at the servers from local users. Table 2 shows the configured traffic rule tabl e on FW. Each incoming packet is inspected according to the rules on FW as follows: (1) First, the source, destina tion, and destination service of the packet are compared with those in rule number 1. (i) If it matches, the specified action is ex ecuted. If the translation is specified, it will also be applied. Once the action is executed, subsequent rules are not checked. (ii) If it does not match, proceed to the next rule. (2) Repeat step (1) until the e nd of the rule table reaches. (3) Deny the packet if no action is executed in the rule table. Table 2 Traffic rule table on FW (other settings are not shown) Rule No. Source Destination Destination Service Action Translation 1 the Internet x.y.z.102 HTTPS Allow MAP: 172.1.10.242 2 the Internet x.y.z.102 SMTP/IMAPS Allow MAP: 172.1.10.243 3 DMZ ___D___ ANY Allow NAT 4 ___E___ 172.16.10.250 HTTPS Allow 5 ___F___ 172.16.10.250 ANY Deny 6 LANs DMZ ANY Allow ⁝ ⁝ ⁝ ⁝ ⁝ Note DMZ: A perimeter network that protects private networks from untrusted traffic. It is a subnetwork that sits between the Internet and private networks. the Internet: Untrusted or public network. FW is needed to protect private networks from untrusted traffic. LANs: Trusted or private network that can access any trusted traffic to DMZ and the Internet. ANY: All networks.",
        "options": [
          "a)",
          "b)",
          "c)",
          "d)",
          "e)",
          "f) ANY",
          "g)",
          "h) the Internet"
        ],
        "correctIndex": 1,
        "explanation": "Official ITPEC Subject B solution for Q4 Subquestion 2 (2023S).",
        "requiresPseudocode": false
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2023S_FE-B_Questions.pdf",
    "pdfPage": 16
  },
  {
    "scenarioId": "fe-2023s-q5",
    "title": "Subject B Q5 (2023S): Databases & SQL",
    "examYear": 2023,
    "domain": "Databases & SQL",
    "contextMarkdown": "Open the embedded PDF at page 20 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2023s-q5-blank-a",
        "questionNumber": 1,
        "prompt": "Select the correct answer to be inserted into blank A.",
        "options": [
          "a) Option A",
          "b) Option B",
          "c) Option C",
          "d) Option D"
        ],
        "correctIndex": 0,
        "explanation": "Official ITPEC Subject B solution for Q5 Blank A (2023S).",
        "requiresPseudocode": true,
        "pseudocodeBlock": "STRING: City, CityHigh ← \"????\", CityLow ← \"????\" \nINT: TotalPop, AdultPop, Employ, Unemploy \nINT: TotalTotalPop \n← 0, TotalAdultPop ← 0, \n TotalEmploy ← 0, TotalUnemploy ← 0 \nREAL: LaborRate, UnempRate \n X ← REAL: UnempRateHigh ← 0.0, UnempRateLow ← 100.0 \n \nOpenFile(\"statistic\"); /* Open the statistic file */ \nPrint(\"City \n TotalPop AdultPop Employ Unemploy Labor% Unemp%\"); \nPrint(\"----- -------- -------- -------- -------- ------ ------\"); \nReadRecord(City, TotalPop, AdultPop, Employ, Unemploy); \nWHILE (not end-of-file) { /* Loop until the statistic file reaches the end-of-file */ \n LaborRate \n← 100.0 × (Employ + Unemploy) ÷ AdultPop; \n UnempRate ← 100.0 × Unemploy ÷ (Employ + Unemploy); \n Y ← IF (UnempRate > UnempRateHigh) { \n CityHigh ← City; \n UnempRateHigh ← UnempRate; \n } \n Z ← IF (UnempRate < UnempRateLow) { \n CityLow ← City; \n UnempRateLow ← UnempRate; \n } \n TotalTotalPop ← TotalTotalPop + TotalPop; \n TotalAdultPop ← TotalAdultPop + AdultPop; \n TotalEmploy ← TotalEmploy + Employ; \n TotalUnemploy ← TotalUnemploy + Unemploy; \n Print(City, TotalPop, AdultPop, \n Employ, Unemploy, LaborRate, UnempRate); \n ReadRecord(City, TotalPop, AdultPop, Employ, Unemploy); \n} \nPrint(\"-----\n -------- -------- -------- -------- ------ ------\"); \nLaborRate ← 100.0 × (TotalEmploy + TotalUnemploy) ÷ TotalAdultPop; \nUnempRate ← 100.0 × TotalUnemploy ÷ (TotalEmploy + TotalUnemploy); \nPrint(\"TOTAL\", TotalTotalPop, TotalAdultPop, \n TotalEmploy, TotalUnemploy, LaborRate, UnempRate); \nPrint(); /* Print a blank line */ \nPrint(\"Highest Unemp%:\", UnempRateHigh, \", City:\", CityHigh); \nPrint(\"Lowest Unemp%:\", UnempRateLow, \", City:\", CityLow); \nCloseFile(\"statistic\"); /* Close the statistic file */ \n \nNote: The function ReadRecord(v1, v2, …) reads the next record from the statistic file, \nand stores the values into variables v1, v2, …. \nThe function Print(p1, p2, …) prints arguments p1, p2, … in one line. Assuming \nthat spaces between arguments are adjusted automatically."
      },
      {
        "questionId": "fe-2023s-q5-blank-e",
        "questionNumber": 2,
        "prompt": "Select the correct answer to be inserted into blank E.",
        "options": [
          "a) -0.1",
          "b) 0.1",
          "c) 99.9",
          "d) 100.1"
        ],
        "correctIndex": 1,
        "explanation": "Official ITPEC Subject B solution for Q5 Blank E (2023S).",
        "requiresPseudocode": true,
        "pseudocodeBlock": "STRING: City, CityHigh ← \"????\", CityLow ← \"????\" \nINT: TotalPop, AdultPop, Employ, Unemploy \nINT: TotalTotalPop \n← 0, TotalAdultPop ← 0, \n TotalEmploy ← 0, TotalUnemploy ← 0 \nREAL: LaborRate, UnempRate \n X ← REAL: UnempRateHigh ← 0.0, UnempRateLow ← 100.0 \n \nOpenFile(\"statistic\"); /* Open the statistic file */ \nPrint(\"City \n TotalPop AdultPop Employ Unemploy Labor% Unemp%\"); \nPrint(\"----- -------- -------- -------- -------- ------ ------\"); \nReadRecord(City, TotalPop, AdultPop, Employ, Unemploy); \nWHILE (not end-of-file) { /* Loop until the statistic file reaches the end-of-file */ \n LaborRate \n← 100.0 × (Employ + Unemploy) ÷ AdultPop; \n UnempRate ← 100.0 × Unemploy ÷ (Employ + Unemploy); \n Y ← IF (UnempRate > UnempRateHigh) { \n CityHigh ← City; \n UnempRateHigh ← UnempRate; \n } \n Z ← IF (UnempRate < UnempRateLow) { \n CityLow ← City; \n UnempRateLow ← UnempRate; \n } \n TotalTotalPop ← TotalTotalPop + TotalPop; \n TotalAdultPop ← TotalAdultPop + AdultPop; \n TotalEmploy ← TotalEmploy + Employ; \n TotalUnemploy ← TotalUnemploy + Unemploy; \n Print(City, TotalPop, AdultPop, \n Employ, Unemploy, LaborRate, UnempRate); \n ReadRecord(City, TotalPop, AdultPop, Employ, Unemploy); \n} \nPrint(\"-----\n -------- -------- -------- -------- ------ ------\"); \nLaborRate ← 100.0 × (TotalEmploy + TotalUnemploy) ÷ TotalAdultPop; \nUnempRate ← 100.0 × TotalUnemploy ÷ (TotalEmploy + TotalUnemploy); \nPrint(\"TOTAL\", TotalTotalPop, TotalAdultPop, \n TotalEmploy, TotalUnemploy, LaborRate, UnempRate); \nPrint(); /* Print a blank line */ \nPrint(\"Highest Unemp%:\", UnempRateHigh, \", City:\", CityHigh); \nPrint(\"Lowest Unemp%:\", UnempRateLow, \", City:\", CityLow); \nCloseFile(\"statistic\"); /* Close the statistic file */ \n \nNote: The function ReadRecord(v1, v2, …) reads the next record from the statistic file, \nand stores the values into variables v1, v2, …. \nThe function Print(p1, p2, …) prints arguments p1, p2, … in one line. Assuming \nthat spaces between arguments are adjusted automatically."
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2023S_FE-B_Questions.pdf",
    "pdfPage": 20
  },
  {
    "scenarioId": "fe-2023s-q6",
    "title": "Subject B Q6 (2023S): Networking & Security",
    "examYear": 2023,
    "domain": "Networking & Security",
    "contextMarkdown": "Open the embedded PDF at page 24 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2023s-q6-sub1",
        "questionNumber": 1,
        "prompt": "Subquestion 1 From the answer groups below, select the co rrect answer to be inserted in each blank _______ in the above programs.",
        "options": [
          "a) /* Do nothing */",
          "b) free.start ← free.start + reqSize",
          "c) free.state ← \"-\"",
          "d) free.state ← procName",
          "e) new.prev ← free",
          "f) new.prev ← last"
        ],
        "correctIndex": 0,
        "explanation": "Official ITPEC Subject B solution for Q6 Subquestion 1 (2023S).",
        "requiresPseudocode": false
      },
      {
        "questionId": "fe-2023s-q6-sub2",
        "questionNumber": 2,
        "prompt": "Subquestion 2 From the answer group below, select the correct answer to be inserted in each blank _______ in the following description. Figure 5 shows the current memory allocatio n status, and the linked list in Figure 6 represents the memory allocation status presen ted in Figure 5. It is assumed that the first three nodes in Figure 6 can be referred to by node names n0, n1, and n2. 0 3 4 7 8 11 12 15 16 31 X Y Figure 5 Current memory allocation status node n0 n1 n2 next ____●__ →__●__→__●__→__●__→__●__ →__●__ → ┤ prev __ ├ ← ● ← ● ← ● ← ● ← ● ←__●__ state __ wall - X - Y - wall start __ -1 0 4 8 12 16 32 size __ 1 4 4 4 4 16 1 Figure 6 Linked list that represents the memory allocation status in Figure 5 Among the following three cases: Case 1: Function allocate is called as allocate(n1, \"Z\", 2); Case 2: Function allocate is called as allocate(n1, \"Z\", 4); Case 3: Function release is called as release(n2); the case(s) that update(s) the contents of n0.next is(are) ___H___.",
        "options": [
          "a) case 1 only",
          "b) case 2 only",
          "c) case 3 only",
          "d) case 1 and case 2",
          "e) case 1 and case 3",
          "f) case 2 and case 3"
        ],
        "correctIndex": 1,
        "explanation": "Official ITPEC Subject B solution for Q6 Subquestion 2 (2023S).",
        "requiresPseudocode": false
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2023S_FE-B_Questions.pdf",
    "pdfPage": 24
  },
  {
    "scenarioId": "fe-2023s-q7",
    "title": "Subject B Q7 (2023S): Algorithms & Programming",
    "examYear": 2023,
    "domain": "Algorithms & Programming",
    "contextMarkdown": "Open the embedded PDF at page 30 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2023s-q7-sub1",
        "questionNumber": 1,
        "prompt": "Subquestion 1 From the answer groups below, select the co rrect answer to be inserted in each blank _______ in the program.",
        "options": [
          "a) str[i] < '0' && str[i] > '9'",
          "b) str[i] < '0' || str[i] > '9'",
          "c) str[i] > '0' && str[i] < '9'",
          "d) str[i] > '0' || str[i] < '9'",
          "e) str[len]"
        ],
        "correctIndex": 0,
        "explanation": "Official ITPEC Subject B solution for Q7 Subquestion 1 (2023S).",
        "requiresPseudocode": true,
        "pseudocodeBlock": "#include <stdio.h> \n#include <stdlib.h> \n#include <string.h> \n \n#define MAX_ATTEMPTS 20 \n#define MAX_STRLEN (MAX_ATTEMPTS+11) \n \nint isNumber(char *); \nvoid reverse(char *, const char *); \nint isPalindrome(const char *); \nvoid add(char *, const char *); \nint doLychrelProcess(char *, int); \n /*** \nα ***/ \nint isNumber(char *str) { \n int i; \n int len = strlen(str); \n for (i = 0; i < len; i++) { \n if (\n___A___) { \n return 0; \n } \n } \n return len != 0; \n} \n\nvoid reverse(char *rev, const char *str) { \n int i, j; \n int len = strlen(str); \n for (\n___B___) { \n rev[j] = str[i]; \n } \n rev[j] = '\\0'; \n} \n \nint isPalindrome(const char *str) { \n int i; \n int len = strlen(str); \n for (i = 0; i < len / 2; i++) { \n if (str[i] != \n___C___) { \n return 0; \n } \n } \n return len != 0; \n} \n \nvoid add(char *addend, const char *adder) { \n int i, digit; \n int carry = 0; \n int len = strlen(addend); \n for (i = len - 1; i >= 0; i--) { \n digit = addend[i] - '0' + adder[i] - '0' + carry; \n addend[i] = \n___D___ + '0'; \n carry = ___E___; \n } \n if (carry) { \n for (i = len + 1; i > 0; i--) { \n addend[i] = addend[i - 1]; \n } \n addend[0] = carry + '0'; \n } \n} \n /*** \nβ ***/ \n\nint doLychrelProcess(char *strNum, int maxAttempts) { \n int numAttempts = 0; \n char strRev[MAX_STRLEN]; \n while (!isPalindrome(strNum) && ++numAttempts <= maxAttempts) { \n reverse(strRev, strNum); \n printf(\"[%d] %s + %s = \", \n numAttempts, strNum, strRev); /*** \nγ ***/ \n add(strNum, strRev); \n printf(\"%s\\n\", strNum); \n } \n if (numAttempts <= maxAttempts) { \n return numAttempts; \n } \n return -1; \n} \n \nint main() { \n char strNum[MAX_STRLEN]; \n int steps = 0; \n printf(\"Enter a number: \"); \n scanf(\"%10s\", strNum); \n if (!isNumber(strNum)) { \n printf(\"Please input a non-negative integer.\\n\"); \n return 0; \n } \n /*** \nδ ***/ \n steps = doLychrelProcess(strNum, MAX_ATTEMPTS); \n if (steps == ___F___) { \n printf(\"The number does not become a palindrome within \" \n \"%d steps.\\n\", MAX_ATTEMPTS); \n } \n else if (steps == 0) { \n printf(\"The number is a palindrome number.\\n\"); \n } \n else { \n printf(\"The number becomes a palindrome within \" \n \"%d steps.\\n\", steps); \n } \n return 0; \n}"
      },
      {
        "questionId": "fe-2023s-q7-sub2",
        "questionNumber": 2,
        "prompt": "Subquestion 2 From the answer groups below, select the co rrect answer to be inserted in each blank _______ in the following description. Here, it is assumed that the correct answers are inserted in the blanks ___A___ to ___F___ in the program. The program handles the number with leadin g zeros differently than the same number without leading zeros. For example, the pr ogram output for input 0097 differs from the output for 97. Enter a number: 0097 [1] 0097 + 7900 = 7997 The number becomes a palindrome within 1 steps. A new function named skipLeadingZeros is added to the program according to the following instructions such that the output for a number is unique even if there are leading zeros or not. (1) Insert the following lin e at the line indicated by /*** α ***/. const char *skipLeadingZeros(const char *); (2) Insert the following 9 lines at the line indicated by /*** β ***/. const char *skipLeadingZeros(const char *str) { while (*str == '0') { str++; } if (*str == '\\0') { return ___G___; } return str; } This function returns the pointer to the character that is the first occurrence of non-zero character. If str consists of zeros only, returns the pointer to the last zero character. (3) Replace the line indicated by /*** γ ***/ with the following line. numAttempts, strNum, skipLeadingZeros(strRev)); (4) Insert the following lin e at the line indicated by /*** δ ***/. memmove(___H___); Here, memmove is the standard library function defined as follows: void *memmove(void *dest, void *src, size_t len) This function copies the character string of length len from src to dest, where src and dest may overlap each other.",
        "options": [
          "a) *str",
          "b) str + 1",
          "c) str - 1",
          "d) NULL"
        ],
        "correctIndex": 1,
        "explanation": "Official ITPEC Subject B solution for Q7 Subquestion 2 (2023S).",
        "requiresPseudocode": true,
        "pseudocodeBlock": "#include <stdio.h> \n#include <stdlib.h> \n#include <string.h> \n \n#define MAX_ATTEMPTS 20 \n#define MAX_STRLEN (MAX_ATTEMPTS+11) \n \nint isNumber(char *); \nvoid reverse(char *, const char *); \nint isPalindrome(const char *); \nvoid add(char *, const char *); \nint doLychrelProcess(char *, int); \n /*** \nα ***/ \nint isNumber(char *str) { \n int i; \n int len = strlen(str); \n for (i = 0; i < len; i++) { \n if (\n___A___) { \n return 0; \n } \n } \n return len != 0; \n} \n\nvoid reverse(char *rev, const char *str) { \n int i, j; \n int len = strlen(str); \n for (\n___B___) { \n rev[j] = str[i]; \n } \n rev[j] = '\\0'; \n} \n \nint isPalindrome(const char *str) { \n int i; \n int len = strlen(str); \n for (i = 0; i < len / 2; i++) { \n if (str[i] != \n___C___) { \n return 0; \n } \n } \n return len != 0; \n} \n \nvoid add(char *addend, const char *adder) { \n int i, digit; \n int carry = 0; \n int len = strlen(addend); \n for (i = len - 1; i >= 0; i--) { \n digit = addend[i] - '0' + adder[i] - '0' + carry; \n addend[i] = \n___D___ + '0'; \n carry = ___E___; \n } \n if (carry) { \n for (i = len + 1; i > 0; i--) { \n addend[i] = addend[i - 1]; \n } \n addend[0] = carry + '0'; \n } \n} \n /*** \nβ ***/ \n\nint doLychrelProcess(char *strNum, int maxAttempts) { \n int numAttempts = 0; \n char strRev[MAX_STRLEN]; \n while (!isPalindrome(strNum) && ++numAttempts <= maxAttempts) { \n reverse(strRev, strNum); \n printf(\"[%d] %s + %s = \", \n numAttempts, strNum, strRev); /*** \nγ ***/ \n add(strNum, strRev); \n printf(\"%s\\n\", strNum); \n } \n if (numAttempts <= maxAttempts) { \n return numAttempts; \n } \n return -1; \n} \n \nint main() { \n char strNum[MAX_STRLEN]; \n int steps = 0; \n printf(\"Enter a number: \"); \n scanf(\"%10s\", strNum); \n if (!isNumber(strNum)) { \n printf(\"Please input a non-negative integer.\\n\"); \n return 0; \n } \n /*** \nδ ***/ \n steps = doLychrelProcess(strNum, MAX_ATTEMPTS); \n if (steps == ___F___) { \n printf(\"The number does not become a palindrome within \" \n \"%d steps.\\n\", MAX_ATTEMPTS); \n } \n else if (steps == 0) { \n printf(\"The number is a palindrome number.\\n\"); \n } \n else { \n printf(\"The number becomes a palindrome within \" \n \"%d steps.\\n\", steps); \n } \n return 0; \n}"
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2023S_FE-B_Questions.pdf",
    "pdfPage": 30
  },
  {
    "scenarioId": "fe-2023s-q8",
    "title": "Subject B Q8 (2023S): Data Structures & Memory",
    "examYear": 2023,
    "domain": "Data Structures & Memory",
    "contextMarkdown": "Open the embedded PDF at page 38 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2023s-q8-sub1",
        "questionNumber": 1,
        "prompt": "Subquestion 1 From the answer groups below, select the co rrect answer to be inserted in each blank _______ in Program 2.",
        "options": [
          "a) ArrayBag",
          "b) ArrayBag<T>",
          "c) ArrayBag<T[]>",
          "d) Bag",
          "e) Bag<T>",
          "f) Bag<T[]>",
          "g) T",
          "h) T[]"
        ],
        "correctIndex": 0,
        "explanation": "Official ITPEC Subject B solution for Q8 Subquestion 1 (2023S).",
        "requiresPseudocode": false
      },
      {
        "questionId": "fe-2023s-q8-sub2",
        "questionNumber": 2,
        "prompt": "Subquestion 2 Four more methods are added to the class ArrayBag. Table 2 summarizes the descriptions of the additional four methods. Table 2 Descriptions of the additional four methods Method Description int indexOf(T entry) Find and return the first index of the specified entry in the bag. If the entry does not exist, return -1. T get(int index) Return the element at the position specified by the argument. T remove(int index) Remove the element at the position specified by the argument. If the element is successfully removed, return the removed value. Otherwise, return null. If the removed element is not the last element in the bag, move the last element to the removed position and set the last element to null. boolean removeEntry(T entry) Find and remove the first occurrence of the entry and return true. Otherwise, return null. If the removed element is not the last element in the bag, move the last element to the removed position and set the last element to null. Program 3 represents the added four methods in the class ArrayBag. [Program 3] public int indexOf(T entry) { for (int i = 0; i < numberOfEntries; i++) { if (entry.equals(bag[i])) { return i; } } return -1; } public T get(int index) { if (index < 0 || index >= numberOfEntries) { throw new ArrayIndexOutOfBoundsException(); } return bag[index]; } public T remove(int index) { T result = null; if (index >= 0 && index < numberOfEntries) { result = ___G___; ___G___ = ___H___; ___H___ = null; numberOfEntries--; } return result; } public boolean removeEntry(T entry) { T result = remove(indexOf(entry)); return entry.equals(result); } From the answer group below, select the correct answer to be inserted in each blank _______ in Program 3.",
        "options": [
          "a) bag[bag.length - 1]",
          "b) bag[bag.length]",
          "c) bag[index - 1]",
          "d) bag[index]",
          "e) bag[numberOfEntries - 1]",
          "f) bag[numberOfEntries] _ _"
        ],
        "correctIndex": 1,
        "explanation": "Official ITPEC Subject B solution for Q8 Subquestion 2 (2023S).",
        "requiresPseudocode": false
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2023S_FE-B_Questions.pdf",
    "pdfPage": 38
  },
  {
    "scenarioId": "fe-2023a-q1",
    "title": "Subject B Q1 (2023A): Algorithms & Programming",
    "examYear": 2023,
    "domain": "Algorithms & Programming",
    "contextMarkdown": "Open the embedded PDF at page 3 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2023a-q1-sub1",
        "questionNumber": 1,
        "prompt": "Subquestion 1 From the answer group below, select the correct answer to be inserted in each blank _______ in the following description. A shared secret key is being exchanged betw een Alice and Bob usi ng the Diffie-Hellman algorithm. Assume that they agreed upon the prime number p = 11 and the integer g = 2. If Bob has received the public key R1 = 3 from Alice, the random number x Alice has selected is ___A___. Also, if Alice has re ceived the public key R 2 = 9 from Bob, the random number y Bob has selected is ___B___. In this case, i.e., R1 = 3 and R2 = 9, the shared secret key obtained by both Alice and Bob is ___C___, which they can use for subsequent symmetric encryption of messages.",
        "options": [
          "a) 1",
          "b) 2",
          "c) 3",
          "d) 4",
          "e) 5",
          "f) 6",
          "g) 7",
          "h) 8",
          "i) 9",
          "j) 10"
        ],
        "correctIndex": 0,
        "explanation": "Official ITPEC Subject B solution for Q1 Subquestion 1 (2023A).",
        "requiresPseudocode": false
      },
      {
        "questionId": "fe-2023a-q1-sub2",
        "questionNumber": 2,
        "prompt": "Subquestion 2 From the answer groups below, select the co rrect answer to be inserted in each blank _______ in the following description. Alice and Bob decided to change the values of g, x, and y. Then, they exchanged the re- calculated R1 and R2, and finally obtained the shared secret key K. Assume that an attacker Eve knows the three non -secret values: p = 11, g = 7, and R 1 = 3. Recently, Eve obtained the value y = 3 by illegal means. Then, it would be possible for Eve to determine the shared secret key K as ___D___. In this case, p is sufficiently small in that it is possible to find x from R 1 or y from R 2 in a short time. However, since an efficient wa y to perform this calculation has not been discovered, finding x from R1 requires a brute-force search for x such that g x mod p = R1. Assuming that 2 90 attempts to search for x can be made in one year, it would take approximately ___E___ years to search for x if p of about 2 120 in size is used. For practical use, a prime number with a size of 2 2048 (≈ 3.2 × 10 616) or larger is used as p.",
        "options": [
          "a) 1",
          "b) 2",
          "c) 3",
          "d) 4",
          "e) 5",
          "f) 6",
          "g) 7",
          "h) 8",
          "i) 9",
          "j) 10"
        ],
        "correctIndex": 1,
        "explanation": "Official ITPEC Subject B solution for Q1 Subquestion 2 (2023A).",
        "requiresPseudocode": false
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2023A_FE-B_Questions.pdf",
    "pdfPage": 3
  },
  {
    "scenarioId": "fe-2023a-q2",
    "title": "Subject B Q2 (2023A): Data Structures & Memory",
    "examYear": 2023,
    "domain": "Data Structures & Memory",
    "contextMarkdown": "Open the embedded PDF at page 6 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2023a-q2-blank-a",
        "questionNumber": 1,
        "prompt": "Select the correct answer to be inserted into blank A.",
        "options": [
          "a) data transfer does not occu r because the word that contains the target byte already exists",
          "b) the word 0A 00 1B 00 and tag-bits 000 are loaded into the line location 100",
          "c) the word 0A 00 1B 00 and tag-bits 100 are loaded into the line location 000",
          "d) the word 1B 00 41 10 and tag-bits 000 are loaded into the line location 100",
          "e) the word 1B 00 41 10 and tag-bits 100 are loaded into the line location 000"
        ],
        "correctIndex": 0,
        "explanation": "Official ITPEC Subject B solution for Q2 Blank A (2023A).",
        "requiresPseudocode": false
      },
      {
        "questionId": "fe-2023a-q2-blank-b",
        "questionNumber": 2,
        "prompt": "Select the correct answer to be inserted into blank B.",
        "options": [
          "a) 52 to 55 (34 to 37)",
          "b) 60 to 63 (3C to 3F)",
          "c) 164 to 167 (A4 to A7)",
          "d) 204 to 207 (CC to CF)"
        ],
        "correctIndex": 1,
        "explanation": "Official ITPEC Subject B solution for Q2 Blank B (2023A).",
        "requiresPseudocode": false
      },
      {
        "questionId": "fe-2023a-q2-blank-c",
        "questionNumber": 3,
        "prompt": "Select the correct answer to be inserted into blank C.",
        "options": [
          "a) cache hit → cache hit",
          "b) cache hit → cache miss",
          "c) cache miss → cache hit",
          "d) cache miss → cache miss"
        ],
        "correctIndex": 2,
        "explanation": "Official ITPEC Subject B solution for Q2 Blank C (2023A).",
        "requiresPseudocode": false
      },
      {
        "questionId": "fe-2023a-q2-blank-d",
        "questionNumber": 4,
        "prompt": "Select the correct answer to be inserted into blank D.",
        "options": [
          "a) 2 L-1 × T",
          "b) 2 T-1 × L",
          "c) 2 L × T",
          "d) 2 T × L",
          "e) 2 T+L-1",
          "f) 2 T+L",
          "g) 2 T+L+B-1",
          "h) 2 T+L+B"
        ],
        "correctIndex": 3,
        "explanation": "Official ITPEC Subject B solution for Q2 Blank D (2023A).",
        "requiresPseudocode": false
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2023A_FE-B_Questions.pdf",
    "pdfPage": 6
  },
  {
    "scenarioId": "fe-2023a-q3",
    "title": "Subject B Q3 (2023A): Software Engineering",
    "examYear": 2023,
    "domain": "Software Engineering",
    "contextMarkdown": "Open the embedded PDF at page 9 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2023a-q3-sub1",
        "questionNumber": 1,
        "prompt": "Subquestion 1 From the answer group below, select the correct answer to be inserted in each blank _______ in Figure 1.",
        "options": [
          "a) Zero-or-one cardinality symbol",
          "b) Zero-or-many cardinality symbol",
          "c) Only-one cardinality symbol",
          "d) One-or-many cardinality symbol",
          "e) Many-to-many cardinality symbol",
          "f) Optional cardinality symbol"
        ],
        "correctIndex": 0,
        "explanation": "Official ITPEC Subject B solution for Q3 Subquestion 1 (2023A).",
        "requiresPseudocode": false
      },
      {
        "questionId": "fe-2023a-q3-sub2",
        "questionNumber": 2,
        "prompt": "Subquestion 2 From the answer groups below, select the co rrect answer to be inserted in each blank ___ ____ in the SQL statement SQL1. The defense meeting in 2023 will be held in December. The topic re gistration period has already started and the deadline for registration is getting close. The department of education is planning to send a reminder email to the students. The following SQL statement SQL1 outputs the students whose defense term is 2023 and who have not registered thesis topics. -- SQL1 -- SELECT s.ID, s.StudentName, s.Email FROM Student s ___C___ Registration r ON s.ID = r.StudentID WHERE s.DefenseTerm = 2023 AND ___D___ When SQL1 is executed using the sample data shown in the table definitions, SQL1 outputs the following result: ID StudentName Email S2104 Selena selena@example.edu Note: INNER JOIN returns the values on the matched rows from the left and right tables. LEFT OUTER JOIN returns the values on all rows from the left table and the matched rows from the right table. Columns of unmatched rows are set to NULL. RIGHT OUTER JOIN returns the values on all rows from the right table and the matched rows from the left table. Columns of unmatched rows are set to NULL.",
        "options": [
          "a) INNER JOIN",
          "b) LEFT OUTER JOIN",
          "c) RIGHT OUTER JOIN",
          "d) s.ID IS NULL"
        ],
        "correctIndex": 1,
        "explanation": "Official ITPEC Subject B solution for Q3 Subquestion 2 (2023A).",
        "requiresPseudocode": false
      },
      {
        "questionId": "fe-2023a-q3-sub3",
        "questionNumber": 3,
        "prompt": "Subquestion 3 From the answer group below, select the correct answer to be inserted in the blank _______ in the following description. At the thesis defense meeti ng, committees assess and mark students’ theses. After the meeting, these grades are put into the Registration Table. The following table shows the current content of the Registration table. It is assumed that four tables other than the Registration Table remain unchanged. Registration Table ID StudentID TopicID InstructorID Grade R01 S2101 T02 I02 85 R02 S2102 T03 I01 90 R03 S2103 T03 I01 90 R04 S2105 T04 I03 80 R05 S2104 T01 I04 85 University T gives excellent thesis awards to the students at the gr aduation ceremony. The department of education dete rmines the award receivers us ing the SQL statements SQL2 (not shown) and SQL3. First, SQL2 (not shown) modifies the Registration Table by removing the ID, TopicID, and InstructorID columns, adding the StudentName and FacultyID columns, and sorting rows by StudentID. Then SQL2 outputs the result as the Result Table as follows: Result Table StudentID StudentName FacultyID Grade S2101 Sarah FIT 85 S2102 Karina FIT 90 S2103 Mike FIT 90 S2104 Selena FEE 85 S2105 Peter FEE 80 Next, SQL3 determines the st udents who will receive the ex cellent thesis award from the Result Table created by SQL2 and Faculty Table. -- SQL3 -- SELECT f.FacultyName, st.StudentID, st.StudentName, st.Grade FROM (SELECT r.FacultyID AS FacultyID, r.StudentID AS StudentID, r.StudentName AS StudentName, r.Grade AS Grade FROM Result r INNER JOIN (SELECT FacultyID, MAX(Grade) AS MaxGrade FROM Result GROUP BY Result.FacultyID ) AS mg ON r.FacultyID = mg.FacultyID AND r.Grade = mg.MaxGrade ) AS st INNER JOIN Faculty f ON f.ID = st.FacultyID When SQL3 is executed using the sample data shown above, SQL3 determines ___E___ as the excellent thesis award receiver.",
        "options": [
          "a) one student whose student ID is S2102",
          "b) two students whose student ID’s are S2102 and S2103",
          "c) two students whose stud ent ID’s are S2102 and S2104",
          "d) three students whose student ID’s are S2102, S2103, and S2104",
          "e) three students whose student ID’s are S2102, S2104, and S2105",
          "f) four students whose studen t ID’s are S2102, S2103, S2104, and S2105"
        ],
        "correctIndex": 2,
        "explanation": "Official ITPEC Subject B solution for Q3 Subquestion 3 (2023A).",
        "requiresPseudocode": false
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2023A_FE-B_Questions.pdf",
    "pdfPage": 9
  },
  {
    "scenarioId": "fe-2023a-q4",
    "title": "Subject B Q4 (2023A): Computer Architecture & OS",
    "examYear": 2023,
    "domain": "Computer Architecture & OS",
    "contextMarkdown": "Open the embedded PDF at page 14 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2023a-q4-sub1",
        "questionNumber": 1,
        "prompt": "Subquestion 1 From the answer groups below, select the co rrect answer to be inserted in each blank _______ in the following description. Assume that the MAC address table of L2SW#1 is empty. When Sales1 sends a packet to Sales3, L2SW#1 forwards the ARP request to the port number(s) ___A___. When Sales1 wants to send a packet to Suppor t2 for the first time, Sales1 first sends ___B___ to try to find out the ___C___ of the ___D___ because Sales1 and Support2 are not in the same network.",
        "options": [
          "a) 1, 2, 3, and 4",
          "b) 1, 2, 3, 4, and 5",
          "c) 2, 3, 4, and 5",
          "d) 3 only",
          "e) 5 only",
          "f) Sales1",
          "g) Support2"
        ],
        "correctIndex": 0,
        "explanation": "Official ITPEC Subject B solution for Q4 Subquestion 1 (2023A).",
        "requiresPseudocode": false
      },
      {
        "questionId": "fe-2023a-q4-sub2",
        "questionNumber": 2,
        "prompt": "Subquestion 2 From the answer groups below, select the co rrect answer to be inserted in each blank ___ ____ in the following description. Here, the answers to be inserted in E1 and E2 should be selected as the correct combination from the answer group for E. Also, the answers to be inserted in F1 and F2 should be selected as the correct combination from the answer group for F. After ARP resolution as performed in",
        "options": [
          "a) Option A",
          "b) Option B",
          "c) Option C",
          "d) Option D"
        ],
        "correctIndex": 1,
        "explanation": "Official ITPEC Subject B solution for Q4 Subquestion 2 (2023A).",
        "requiresPseudocode": false
      },
      {
        "questionId": "fe-2023a-q4-sub1",
        "questionNumber": 1,
        "prompt": "Subquestion 1, if Sales1 wants to send a packet to Support1, then the packet will be encapsulated at the data link layer of Sales1 as follows: Frame Header IP Header Source MAC Destination MAC Source IP Destination IP Data 00:00:5E:00:53:11 ___E1___ 192.168.10.2 ___E2___ Some data When Support1 receives the packet sent from Sales1, the packet at Support1 will look like as follows: Frame Header IP Header Source MAC Destination MAC Source IP Destination IP Data ___F1___ 00:00:5E:00:53:55 ___F2___ 192.168.20.2 Some data",
        "options": [
          "a) 00:00:5E:00:53:55 192.168.10.1",
          "b) 00:00:5E:00:53:55 192.168.20.1",
          "c) 00:00:5E:00:53:55 192.168.20.2",
          "d) 00:00:5E:00:53:AA 192.168.10.1",
          "e) 00:00:5E:00:53:AA 192.168.20.1",
          "f) 00:00:5E:00:53:AA 192.168.20.2",
          "g) 00:00:5E:00:53:BB 192.168.10.1",
          "h) 00:00:5E:00:53:BB 192.168.20.1",
          "i) 00:00:5E:00:53:BB 192.168.20.2"
        ],
        "correctIndex": 0,
        "explanation": "Official ITPEC Subject B solution for Q4 Subquestion 1 (2023A).",
        "requiresPseudocode": false
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2023A_FE-B_Questions.pdf",
    "pdfPage": 14
  },
  {
    "scenarioId": "fe-2023a-q5",
    "title": "Subject B Q5 (2023A): Databases & SQL",
    "examYear": 2023,
    "domain": "Databases & SQL",
    "contextMarkdown": "Open the embedded PDF at page 19 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2023a-q5-sub1",
        "questionNumber": 1,
        "prompt": "Subquestion 1 From the answer group below, select the correct answer to be inserted in each blank _______ in the following description. Figure 1 shows a sample program to be tested, and Table 1 shows sample test cases for this program. When the program is tested with the test cases according to the testing method used in Company V, the test result reveals that ___A___ in test case 1 and ___B___ in test case 2. Here, the short-cut evaluation is applied to multiple conditions. FUNCTION func(INT: x, INT: a, INT: b, INT: c, INT: d) { IF (x > 10) { func1(); IF ((a < 10) or (b < 20)) { func2(); } ELSE { func3(); } IF ((c > 10) and (d > 10)) { func4(); } ELSE { func5(); } } } Figure 1 Sample program to be tested Table 1 Sample test cases Test data Variable x a b c d Test case 1 11 9 19 10 10 Test case 2 11 10 20 11 11",
        "options": [
          "a) b < 20 is not evaluated",
          "b) b < 20 and c > 10 are not evaluated",
          "c) b < 20 and d > 10 are not evaluated",
          "d) c > 10 is not evaluated",
          "e) c > 10 and d > 10 are not evaluated",
          "f) d > 10 is not evaluated",
          "g) all single conditions are evaluated"
        ],
        "correctIndex": 0,
        "explanation": "Official ITPEC Subject B solution for Q5 Subquestion 1 (2023A).",
        "requiresPseudocode": false
      },
      {
        "questionId": "fe-2023a-q5-sub2",
        "questionNumber": 2,
        "prompt": "Subquestion 2 The control structure of a program can be described with a c ontrol flow graph. In a control flow graph, processes are divide d into serial instructions, ite ration instructions, and branch instructions, and each of them is placed in a process block (hereinafter, a node) that is connected with a directed line segment (herei nafter, an edge) in the sequence of process execution. Here, a multiple condition is divided into the respective single conditions, and they are placed in the control flow graph. Figure 2 is prepared by assigning node numbers 1 through 10 to the sample program in Figure 1. Figure 3 shows the corresponding contro l flow graph. A circle indicates a node, and an arrow indicates an edge. The node numbers in Figure 3 correspond to the node numbers in Figure 2. Nodes S and E in Figure 3 are special nodes that indicate the entry and exit of the program, respectively, and there are no corresponding proc esses in the sample program. From the answer group below, select the appr opriate node number to be inserted in each blank _______ in Figure 3. FUNCTION func(INT: x, INT: a, INT: b, INT: c, INT: d) { IF 1 (x > 10) { 2 func1(); IF (3 (a < 10) or 4 (b < 20)) { 5 func2(); } ELSE { 6 func3(); } IF (7 (c > 10) and 8 (d > 10)) { 9 func4(); } ELSE { 10func5(); } } } Figure 2 Sample program with node numbers N o t e: Shaded parts are not shown. Figure 3 Control flow graph 1. 2. C 7. D 9. E S",
        "options": [
          "a) 3",
          "b) 4",
          "c) 5.",
          "d) 6",
          "e) 8",
          "f) 10"
        ],
        "correctIndex": 1,
        "explanation": "Official ITPEC Subject B solution for Q5 Subquestion 2 (2023A).",
        "requiresPseudocode": false
      },
      {
        "questionId": "fe-2023a-q5-sub3",
        "questionNumber": 3,
        "prompt": "Subquestion 3 From the answer group below, select the correct answer to be inserted in each blank _______ in the following description. For the testing of the program shown in Figure 1, in the case of the branch coverage used by Company V, the minimum number of test cases required is ___E___. Furthermore, there is a method for making test cases by extracting paths from a control flow graph. The minimum number of paths (P) that cover all the edge s and nodes of a control flow graph is determined with the following expression: P = Number of edges - Number of nodes + 2 By conducting a test for P test cases that correspond to the extracted paths, it is possible to assure higher coverage than branch coverage. With regard to the control flow graph in Figure 3, the value of P is ___ F___. To reduce the number of bugs left uncorrected in its programs, Company V decides to test the programs with test cases based on control flow graphs.",
        "options": [
          "a) 2",
          "b) 3",
          "c) 4",
          "d) 5",
          "e) 6",
          "f) 7"
        ],
        "correctIndex": 2,
        "explanation": "Official ITPEC Subject B solution for Q5 Subquestion 3 (2023A).",
        "requiresPseudocode": false
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2023A_FE-B_Questions.pdf",
    "pdfPage": 19
  },
  {
    "scenarioId": "fe-2023a-q6",
    "title": "Subject B Q6 (2023A): Networking & Security",
    "examYear": 2023,
    "domain": "Networking & Security",
    "contextMarkdown": "Open the embedded PDF at page 23 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2023a-q6-sub1",
        "questionNumber": 1,
        "prompt": "Subquestion 1 From the answer groups below, select the co rrect answer to be inserted in each blank _______ in the program description and Program 1.",
        "options": [
          "a) 0000000000000101",
          "b) 0000000000101000",
          "c) 0001010000000000",
          "d) 1010000000000000",
          "e) \"1111111111111111\"B"
        ],
        "correctIndex": 0,
        "explanation": "Official ITPEC Subject B solution for Q6 Subquestion 1 (2023A).",
        "requiresPseudocode": false
      },
      {
        "questionId": "fe-2023a-q6-sub2",
        "questionNumber": 2,
        "prompt": "Subquestion 2 From the answer group below, select the correct answer to be inserted in each blank ___ ____ in the following description. [Description of the Function BitapMatch] (1) The function receives Text[] and Pat[], and from the smallest element number of Text[], it searches for a string that matches Pat[]. If a match is found, it returns the element number of the Text[] element corresponding to th e first character in the matching string. If no match is found, it returns -1. (2) In the example shown in Figure 1, the string between Text[7] and Text[12] matches Pat[], so it returns 7. (3) Table 2 shows the specifications of the ar guments and the return value of the function BitapMatch. Table 2 Specifications of the arguments and return value of the function BitapMatch Arguments / return value Data type Input / Output Description Text[] CHAR Input One-dimensional array th at stores the target string Pat[] CHAR Input One-dimensional array th at stores the search string Return value INT Output If the search string is found in the target string, return the element number of the Text[] element that corresponds to the first character in the matching string. If the search string is not found, return -1. [Program 2] FUNCTION: BitapMatch(CHAR: Text[], CHAR: Pat[]) { 16-bit Binary: Goal, Status, Mask[26] INT: i, TextLen, PatLen TextLen ← number of characters in Text[]; PatLen ← GenerateBitMask(Pat[], Mask[]); Status ← \"0\"B; Goal ← \"1\"B << (PatLen - 1); FOR (i ← 1; i ≤ TextLen; i ← i + 1) { Status ← (Status << 1) | \"1\"B; /*** α ***/ Status ← Status & Mask[Index(Text[i])]; /*** β ***/ IF ((Status & Goal) ≠ \"0\"B) { return (i - PatLen + 1) } } return (-1) } The function BitapMatch is executed. The values show n in Figure 1 are stored in Text[] and Pat[]. Table 3 shows the transition in the values of i, Mask[Index(Text[i])], and Status immediately after the execution of the line commented /*** β ***/ (hereinafter, line β) in Program 2. For example, the value of Status immediately after the execution of line β when i is 1 is \"1\"B, so the value of Status immediately after the execution of line α when i is 2 is \"11\"B, which is a bitwise logical sum of \"10\"B (the value obtained by a logical left shift of \"1\"B by 1 bit) and \"1\"B. Next, given the fact that the value of Mask[Index(Text[2])] is \"10101\"B, the value of Status immediately after the execution of line β when i is 2 is ___D___. In the same way, given the fact that the value of Status immediately after the execution of line β when i is 8 is \"10\"B, the value of Mask[Index(Text[9])] immediately after the execution of line α when i is 9 is ___E___, so the value of Status immediately after the execution of line β is ___F___. Table 3 Transition in the values of i, Mask[Index(Text[i])], and Status immediately after the execution of line β in Program 2 for the example of storage in Figure 1",
        "options": [
          "a) \"0\"B",
          "b) \"1\"B",
          "c) \"10\"B",
          "d) \"11\"B",
          "e) \"100\"B",
          "f) \"101\"B",
          "g) \"10101\"B"
        ],
        "correctIndex": 1,
        "explanation": "Official ITPEC Subject B solution for Q6 Subquestion 2 (2023A).",
        "requiresPseudocode": false
      },
      {
        "questionId": "fe-2023a-q6-sub3",
        "questionNumber": 3,
        "prompt": "Subquestion 3 From the answer groups below, select the co rrect answer to be inserted in each blank ___ ____ in the following description concer ning the extension of the function GenerateBitMask. Here, assume that ___B___ in Program 3 contains the correct answer for ___B___ in",
        "options": [
          "a) Option A",
          "b) Option B",
          "c) Option C",
          "d) Option D"
        ],
        "correctIndex": 2,
        "explanation": "Official ITPEC Subject B solution for Q6 Subquestion 3 (2023A).",
        "requiresPseudocode": false
      },
      {
        "questionId": "fe-2023a-q6-sub1",
        "questionNumber": 1,
        "prompt": "Subquestion 1. i 1 2 … 8 9 … Mask[Index(Text[i])] \"10101\"B \"10101\"B … \"10\"B ___E___ … Status \"1\"B ___D___ … \"10\"B ___F___ … In order to enable the specifi cation of regular expr ession, such as the expression shown in Table 4 in the search string, the function GenerateBitMask is extended to create the function GenerateBitMaskRegex. Table 4 Regular expression [Program 3] FUNCTION: GenerateBitMaskRegex(CHAR: Pat[], 16-bit Binary: Mask[]) { INT: i, OriginalPatLen, PatLen, Mode OriginalPatLen ← number of characters in Pat[]; PatLen ← 0; Mode ← 0; FOR (i ← 1; i ≤ 26; i ← i + 1) { Mask[i] ← ___B___; /* Initialize */ } FOR (i ← 1; i ≤ OriginalPatLen; i ← i + 1) { IF (Pat[i] = \"[\") { Mode ← 1; PatLen ← PatLen + 1; } ELSE { IF (Pat[i] = \"]\") { Mode ← 0; } ELSE { IF (Mode = 0) { PatLen ← PatLen + 1; } Mask[Index(Pat[i])] ← Mask[Index(Pat[i])] | (\"1\"B << (PatLen - 1)); } } } return (PatLen); } Symbol Description [] Represents a character that matches one of the characters noted in the []. For example, “A[XYZ]B” represents “AXB”, “AYB”, and “AZB”. Assume that “ AC[BA]A[ABC]A” is stored in Pat[], and the function GenerateBitMaskRegex is called. In this situation, the bit mask Mask[1] that corresponds to “A” is \"111101\"B, and the return value of the function GenerateBitMaskRegex is ___G___. Furthermore, nesting [] in the string that is stored in Pat[] is not possible, but if “AC[B[AB]AC]A” is mistakenly stored in Pat[] and the function GenerateBitMaskRegex is called, Mask[1] becomes ___H___.",
        "options": [
          "a) 4",
          "b) 6",
          "c) 9",
          "d) 13",
          "e) \"110011\"B",
          "f) \"111101\"B"
        ],
        "correctIndex": 0,
        "explanation": "Official ITPEC Subject B solution for Q6 Subquestion 1 (2023A).",
        "requiresPseudocode": false
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2023A_FE-B_Questions.pdf",
    "pdfPage": 23
  },
  {
    "scenarioId": "fe-2023a-q7",
    "title": "Subject B Q7 (2023A): Algorithms & Programming",
    "examYear": 2023,
    "domain": "Algorithms & Programming",
    "contextMarkdown": "Open the embedded PDF at page 30 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2023a-q7-sub1",
        "questionNumber": 1,
        "prompt": "Subquestion 1 From the answer groups below, select the co rrect answer to be inserted in each blank _______ in the above program.",
        "options": [
          "a) index != -1",
          "b) index != 0",
          "c) index == -1",
          "d) index == 0",
          "e) curr->next",
          "f) curr->next->next"
        ],
        "correctIndex": 0,
        "explanation": "Official ITPEC Subject B solution for Q7 Subquestion 1 (2023A).",
        "requiresPseudocode": true,
        "pseudocodeBlock": "#include <stdio.h> \n#include <stdlib.h> \n#include <string.h> \n#define NUM_CLASSES 6 \n \nstruct Wrestler { \n char name[51]; \n int weight; \n struct Wrestler *next; \n}; \ntypedef struct Wrestler Wrestler_t; \n \nWrestler_t *Entries[NUM_CLASSES]; \nconst int UpperLimits[NUM_CLASSES] = {57, 65, 74, 86, 97, 125}; \n \nvoid Initialize(void); \nWrestler_t *AcceptEntry(void); \nint FindWeightClass(int); \nvoid Insert(Wrestler_t *, int); \nvoid Display(void); \nvoid Deallocate(void); \n \nint main() { \n Wrestler_t *wrestler; \n int n, i, index; \n \n Initialize(); \n printf(\"How many wrestlers want to participate: \"); \n scanf(\"%3d\", &n); \n\n for (i = 0; i < n; i++) { \n wrestler = AcceptEntry(); \n index = FindWeightClass(wrestler->weight); \n while (\n___A___) { \n printf(\"%s's weight exceeds %d kg. Re-enter the weight: \", \n wrestler->name, UpperLimits[NUM_CLASSES - 1]); \n scanf(\"%3d\", &wrestler->weight); \n index = FindWeightClass(wrestler->weight); \n } \n Insert(wrestler, index); \n } \n Display(); \n Deallocate(); \n return 0; \n} \n \nvoid Initialize(void) { \n int i; \n for (i = 0; i < NUM_CLASSES; i++) { \n Entries[i] = NULL; \n } \n} \n \nWrestler_t *AcceptEntry(void) { \n Wrestler_t *wrestler = (Wrestler_t *)malloc(\n___B___); \n printf(\"Enter the name of the wrestler: \"); \n scanf(\"%50s\", wrestler->name); \n printf(\"Enter the weight for %s: \", wrestler->name); \n scanf(\"%3d\", &wrestler->weight); \n wrestler->next = NULL; \n return wrestler; \n} \n \nint FindWeightClass(int weight) { \n int i; \n for (i = 0; i < NUM_CLASSES; i++) { \n if (\n___C___) { \n return i; \n } \n } \n return -1; \n} \n\nvoid Insert(Wrestler_t *wrestler, int i) { \n Wrestler_t *curr = Entries[i]; \n if (curr == NULL) { /*** \nα ***/ \n ___D___ = wrestler; \n } else { \n while (curr->next != NULL) { /*** β ***/ \n curr = curr->next; \n } \n \n___E___ = wrestler; /*** γ ***/ \n } \n} \n \nvoid Display(void) { \n Wrestler_t *curr; \n int i; \n printf(\"Result:\\n\"); \n for (i = 0; i < NUM_CLASSES; i++) { \n curr = Entries[i]; \n printf(\"%3d kg class:\", UpperLimits[i]); \n if (curr == NULL) { \n printf(\"<empty>\\n\"); \n continue; \n } \n while (curr != NULL) { \n printf(\"[%s %d] \", curr->name, curr->weight); \n curr = curr->next; \n } \n printf(\"\\n\"); \n } \n} \n \nvoid Deallocate(void) { \n int i; \n Wrestler_t \n___F___; \n for (i = 0; i < NUM_CLASSES; i++) { \n curr = Entries[i]; \n while (curr != NULL) { \n next = curr->next; \n free(curr); \n curr = next; \n } \n } \n}"
      },
      {
        "questionId": "fe-2023a-q7-sub2",
        "questionNumber": 2,
        "prompt": "Subquestion 2 From the answer group below, select the co rrect answer to be in serted in the blank ___G___ in the following description. The program is modified as follows to order the nodes in each linked list in ascending order of weight instead of the order of registration. (1) Replace the line designated by /*** α ***/ with the following two lines. if (curr == NULL || curr->weight >= wrestler->weight) { wrestler->next = curr; /*** δ ***/ (2) Replace the line designated by /*** β ***/ with the following two lines. while ((curr->next != NULL) && (___G___)) { (3) Insert the following line immediately before the line designated by /*** γ ***/. wrestler->next = curr->next;",
        "options": [
          "a) curr->next->weight < wrestler->weight",
          "b) curr->next->weight >= wrestler->weight",
          "c) curr->weight < wrestler->weight",
          "d) curr->weight >= wrestler->weight"
        ],
        "correctIndex": 1,
        "explanation": "Official ITPEC Subject B solution for Q7 Subquestion 2 (2023A).",
        "requiresPseudocode": true,
        "pseudocodeBlock": "#include <stdio.h> \n#include <stdlib.h> \n#include <string.h> \n#define NUM_CLASSES 6 \n \nstruct Wrestler { \n char name[51]; \n int weight; \n struct Wrestler *next; \n}; \ntypedef struct Wrestler Wrestler_t; \n \nWrestler_t *Entries[NUM_CLASSES]; \nconst int UpperLimits[NUM_CLASSES] = {57, 65, 74, 86, 97, 125}; \n \nvoid Initialize(void); \nWrestler_t *AcceptEntry(void); \nint FindWeightClass(int); \nvoid Insert(Wrestler_t *, int); \nvoid Display(void); \nvoid Deallocate(void); \n \nint main() { \n Wrestler_t *wrestler; \n int n, i, index; \n \n Initialize(); \n printf(\"How many wrestlers want to participate: \"); \n scanf(\"%3d\", &n); \n\n for (i = 0; i < n; i++) { \n wrestler = AcceptEntry(); \n index = FindWeightClass(wrestler->weight); \n while (\n___A___) { \n printf(\"%s's weight exceeds %d kg. Re-enter the weight: \", \n wrestler->name, UpperLimits[NUM_CLASSES - 1]); \n scanf(\"%3d\", &wrestler->weight); \n index = FindWeightClass(wrestler->weight); \n } \n Insert(wrestler, index); \n } \n Display(); \n Deallocate(); \n return 0; \n} \n \nvoid Initialize(void) { \n int i; \n for (i = 0; i < NUM_CLASSES; i++) { \n Entries[i] = NULL; \n } \n} \n \nWrestler_t *AcceptEntry(void) { \n Wrestler_t *wrestler = (Wrestler_t *)malloc(\n___B___); \n printf(\"Enter the name of the wrestler: \"); \n scanf(\"%50s\", wrestler->name); \n printf(\"Enter the weight for %s: \", wrestler->name); \n scanf(\"%3d\", &wrestler->weight); \n wrestler->next = NULL; \n return wrestler; \n} \n \nint FindWeightClass(int weight) { \n int i; \n for (i = 0; i < NUM_CLASSES; i++) { \n if (\n___C___) { \n return i; \n } \n } \n return -1; \n} \n\nvoid Insert(Wrestler_t *wrestler, int i) { \n Wrestler_t *curr = Entries[i]; \n if (curr == NULL) { /*** \nα ***/ \n ___D___ = wrestler; \n } else { \n while (curr->next != NULL) { /*** β ***/ \n curr = curr->next; \n } \n \n___E___ = wrestler; /*** γ ***/ \n } \n} \n \nvoid Display(void) { \n Wrestler_t *curr; \n int i; \n printf(\"Result:\\n\"); \n for (i = 0; i < NUM_CLASSES; i++) { \n curr = Entries[i]; \n printf(\"%3d kg class:\", UpperLimits[i]); \n if (curr == NULL) { \n printf(\"<empty>\\n\"); \n continue; \n } \n while (curr != NULL) { \n printf(\"[%s %d] \", curr->name, curr->weight); \n curr = curr->next; \n } \n printf(\"\\n\"); \n } \n} \n \nvoid Deallocate(void) { \n int i; \n Wrestler_t \n___F___; \n for (i = 0; i < NUM_CLASSES; i++) { \n curr = Entries[i]; \n while (curr != NULL) { \n next = curr->next; \n free(curr); \n curr = next; \n } \n } \n}"
      },
      {
        "questionId": "fe-2023a-q7-sub3",
        "questionNumber": 3,
        "prompt": "Subquestion 3 From the answer group below, select the correct answer to be inserted in the blank ___H___ in the following description. It is assumed that the program after modi fication in",
        "options": [
          "a) Option A",
          "b) Option B",
          "c) Option C",
          "d) Option D"
        ],
        "correctIndex": 2,
        "explanation": "Official ITPEC Subject B solution for Q7 Subquestion 3 (2023A).",
        "requiresPseudocode": true,
        "pseudocodeBlock": "#include <stdio.h> \n#include <stdlib.h> \n#include <string.h> \n#define NUM_CLASSES 6 \n \nstruct Wrestler { \n char name[51]; \n int weight; \n struct Wrestler *next; \n}; \ntypedef struct Wrestler Wrestler_t; \n \nWrestler_t *Entries[NUM_CLASSES]; \nconst int UpperLimits[NUM_CLASSES] = {57, 65, 74, 86, 97, 125}; \n \nvoid Initialize(void); \nWrestler_t *AcceptEntry(void); \nint FindWeightClass(int); \nvoid Insert(Wrestler_t *, int); \nvoid Display(void); \nvoid Deallocate(void); \n \nint main() { \n Wrestler_t *wrestler; \n int n, i, index; \n \n Initialize(); \n printf(\"How many wrestlers want to participate: \"); \n scanf(\"%3d\", &n); \n\n for (i = 0; i < n; i++) { \n wrestler = AcceptEntry(); \n index = FindWeightClass(wrestler->weight); \n while (\n___A___) { \n printf(\"%s's weight exceeds %d kg. Re-enter the weight: \", \n wrestler->name, UpperLimits[NUM_CLASSES - 1]); \n scanf(\"%3d\", &wrestler->weight); \n index = FindWeightClass(wrestler->weight); \n } \n Insert(wrestler, index); \n } \n Display(); \n Deallocate(); \n return 0; \n} \n \nvoid Initialize(void) { \n int i; \n for (i = 0; i < NUM_CLASSES; i++) { \n Entries[i] = NULL; \n } \n} \n \nWrestler_t *AcceptEntry(void) { \n Wrestler_t *wrestler = (Wrestler_t *)malloc(\n___B___); \n printf(\"Enter the name of the wrestler: \"); \n scanf(\"%50s\", wrestler->name); \n printf(\"Enter the weight for %s: \", wrestler->name); \n scanf(\"%3d\", &wrestler->weight); \n wrestler->next = NULL; \n return wrestler; \n} \n \nint FindWeightClass(int weight) { \n int i; \n for (i = 0; i < NUM_CLASSES; i++) { \n if (\n___C___) { \n return i; \n } \n } \n return -1; \n} \n\nvoid Insert(Wrestler_t *wrestler, int i) { \n Wrestler_t *curr = Entries[i]; \n if (curr == NULL) { /*** \nα ***/ \n ___D___ = wrestler; \n } else { \n while (curr->next != NULL) { /*** β ***/ \n curr = curr->next; \n } \n \n___E___ = wrestler; /*** γ ***/ \n } \n} \n \nvoid Display(void) { \n Wrestler_t *curr; \n int i; \n printf(\"Result:\\n\"); \n for (i = 0; i < NUM_CLASSES; i++) { \n curr = Entries[i]; \n printf(\"%3d kg class:\", UpperLimits[i]); \n if (curr == NULL) { \n printf(\"<empty>\\n\"); \n continue; \n } \n while (curr != NULL) { \n printf(\"[%s %d] \", curr->name, curr->weight); \n curr = curr->next; \n } \n printf(\"\\n\"); \n } \n} \n \nvoid Deallocate(void) { \n int i; \n Wrestler_t \n___F___; \n for (i = 0; i < NUM_CLASSES; i++) { \n curr = Entries[i]; \n while (curr != NULL) { \n next = curr->next; \n free(curr); \n curr = next; \n } \n } \n}"
      },
      {
        "questionId": "fe-2023a-q7-sub2",
        "questionNumber": 2,
        "prompt": "Subquestion 2 is executed, and it receives information about five wrestlers shown in Table 4. The line designated by /*** δ ***/ will be executed ___H___ times. Table 4 Information about five wrestlers Name Weight (kg) Eric 88 Faraday 72 Gregory 91 Harold 97 Issacs 68",
        "options": [
          "a) 2",
          "b) 3",
          "c) 4",
          "d) 5"
        ],
        "correctIndex": 1,
        "explanation": "Official ITPEC Subject B solution for Q7 Subquestion 2 (2023A).",
        "requiresPseudocode": true,
        "pseudocodeBlock": "#include <stdio.h> \n#include <stdlib.h> \n#include <string.h> \n#define NUM_CLASSES 6 \n \nstruct Wrestler { \n char name[51]; \n int weight; \n struct Wrestler *next; \n}; \ntypedef struct Wrestler Wrestler_t; \n \nWrestler_t *Entries[NUM_CLASSES]; \nconst int UpperLimits[NUM_CLASSES] = {57, 65, 74, 86, 97, 125}; \n \nvoid Initialize(void); \nWrestler_t *AcceptEntry(void); \nint FindWeightClass(int); \nvoid Insert(Wrestler_t *, int); \nvoid Display(void); \nvoid Deallocate(void); \n \nint main() { \n Wrestler_t *wrestler; \n int n, i, index; \n \n Initialize(); \n printf(\"How many wrestlers want to participate: \"); \n scanf(\"%3d\", &n); \n\n for (i = 0; i < n; i++) { \n wrestler = AcceptEntry(); \n index = FindWeightClass(wrestler->weight); \n while (\n___A___) { \n printf(\"%s's weight exceeds %d kg. Re-enter the weight: \", \n wrestler->name, UpperLimits[NUM_CLASSES - 1]); \n scanf(\"%3d\", &wrestler->weight); \n index = FindWeightClass(wrestler->weight); \n } \n Insert(wrestler, index); \n } \n Display(); \n Deallocate(); \n return 0; \n} \n \nvoid Initialize(void) { \n int i; \n for (i = 0; i < NUM_CLASSES; i++) { \n Entries[i] = NULL; \n } \n} \n \nWrestler_t *AcceptEntry(void) { \n Wrestler_t *wrestler = (Wrestler_t *)malloc(\n___B___); \n printf(\"Enter the name of the wrestler: \"); \n scanf(\"%50s\", wrestler->name); \n printf(\"Enter the weight for %s: \", wrestler->name); \n scanf(\"%3d\", &wrestler->weight); \n wrestler->next = NULL; \n return wrestler; \n} \n \nint FindWeightClass(int weight) { \n int i; \n for (i = 0; i < NUM_CLASSES; i++) { \n if (\n___C___) { \n return i; \n } \n } \n return -1; \n} \n\nvoid Insert(Wrestler_t *wrestler, int i) { \n Wrestler_t *curr = Entries[i]; \n if (curr == NULL) { /*** \nα ***/ \n ___D___ = wrestler; \n } else { \n while (curr->next != NULL) { /*** β ***/ \n curr = curr->next; \n } \n \n___E___ = wrestler; /*** γ ***/ \n } \n} \n \nvoid Display(void) { \n Wrestler_t *curr; \n int i; \n printf(\"Result:\\n\"); \n for (i = 0; i < NUM_CLASSES; i++) { \n curr = Entries[i]; \n printf(\"%3d kg class:\", UpperLimits[i]); \n if (curr == NULL) { \n printf(\"<empty>\\n\"); \n continue; \n } \n while (curr != NULL) { \n printf(\"[%s %d] \", curr->name, curr->weight); \n curr = curr->next; \n } \n printf(\"\\n\"); \n } \n} \n \nvoid Deallocate(void) { \n int i; \n Wrestler_t \n___F___; \n for (i = 0; i < NUM_CLASSES; i++) { \n curr = Entries[i]; \n while (curr != NULL) { \n next = curr->next; \n free(curr); \n curr = next; \n } \n } \n}"
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2023A_FE-B_Questions.pdf",
    "pdfPage": 30
  },
  {
    "scenarioId": "fe-2023a-q8",
    "title": "Subject B Q8 (2023A): Data Structures & Memory",
    "examYear": 2023,
    "domain": "Data Structures & Memory",
    "contextMarkdown": "Open the embedded PDF at page 38 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2023a-q8-sub1",
        "questionNumber": 1,
        "prompt": "Subquestion 1 From the answer groups below, select the co rrect answer to be inserted in each blank _______ in the above programs.",
        "options": [
          "a) ((ToDo) o).id.equals(id)",
          "b) (ToDo) o.id.equals(id)",
          "c) id.equals(id)",
          "d) o.id.equals(id)"
        ],
        "correctIndex": 0,
        "explanation": "Official ITPEC Subject B solution for Q8 Subquestion 1 (2023A).",
        "requiresPseudocode": false
      },
      {
        "questionId": "fe-2023a-q8-sub2",
        "questionNumber": 2,
        "prompt": "Subquestion 2 Figure 1 shows the execution result of Program 4. From the answer group below, select the correct answer to be inserted in each blank _______ in Figure 1. ___GF____, State: STARTED ___FG____, State: STARTED Figure 1 Execution result of Program 4",
        "options": [
          "a) Subject: Create the report, Deadline: 20231028, Priority: HIGH",
          "b) Subject: Purchase a PC, Deadline: 20231121, Priority: HIGH",
          "c) Subject: Purchase tickets, Deadline: 20231030, Priority: MIDDLE",
          "d) Subject: Reserve a hotel room, Deadline: 20231025, Priority: LOW",
          "e) Subject: Send the e-mail, Deadline: 202310231500, Priority: HIGH",
          "f) Subject: Set up the meeting, Deadline: 202311201400, Priority: HIGH"
        ],
        "correctIndex": 1,
        "explanation": "Official ITPEC Subject B solution for Q8 Subquestion 2 (2023A).",
        "requiresPseudocode": false
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2023A_FE-B_Questions.pdf",
    "pdfPage": 38
  },
  {
    "scenarioId": "fe-2022s-q1",
    "title": "Subject B Q1 (2022S): Algorithms & Programming",
    "examYear": 2022,
    "domain": "Algorithms & Programming",
    "contextMarkdown": "Open the embedded PDF at page 3 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2022s-q1-sub1",
        "questionNumber": 1,
        "prompt": "Subquestion 1 From the answer group below, select the correct answer to be inserted in each blank _______ in Table 5.",
        "options": [
          "a) 1",
          "b) 3",
          "c) 6",
          "d) 8",
          "e) 9",
          "f) 12",
          "g) 18"
        ],
        "correctIndex": 0,
        "explanation": "Official ITPEC Subject B solution for Q1 Subquestion 1 (2022S).",
        "requiresPseudocode": false
      },
      {
        "questionId": "fe-2022s-q1-sub2",
        "questionNumber": 2,
        "prompt": "Subquestion 2 In table 2, (ii) and (iii) are the reasoning behind the evaluation when the value of information assets has been evaluated in terms of either C, I, or A. From the answer group below, select the appropriate combination of C, I, and A that corresponds to (ii) and (iii).",
        "options": [
          "a) A C",
          "b) A I",
          "c) C A",
          "d) C I",
          "e) I A",
          "f) I C"
        ],
        "correctIndex": 1,
        "explanation": "Official ITPEC Subject B solution for Q1 Subquestion 2 (2022S).",
        "requiresPseudocode": false
      },
      {
        "questionId": "fe-2022s-q1-sub3",
        "questionNumber": 3,
        "prompt": "Subquestion 3 From the answer group below, select the co rrect number of threat s for which additional measures against the risks are required owing to the risk analysis and evaluation related to the information asset no. 4 (customer test data).",
        "options": [
          "a) 1",
          "b) 2",
          "c) 3",
          "d) 4"
        ],
        "correctIndex": 2,
        "explanation": "Official ITPEC Subject B solution for Q1 Subquestion 3 (2022S).",
        "requiresPseudocode": false
      },
      {
        "questionId": "fe-2022s-q1-sub4",
        "questionNumber": 4,
        "prompt": "Subquestion 4 From the answer group below, select the correct answer to be inserted in each blank ___ ____ in the following description related to the occurrence of, and response to, a security incident in Company R. The systems department received a report that the customer test data for Project P were stored on a development PC used in Project Q, which was launched after the completion of Project P. Investigations revealed that the PC was used as a development PC in Project P, and after being returned to the systems department, it was loaned by the systems department to members of Project Q. To address the risk of leakage of customer test data, Company R decided to add the following two measures: o _____C_____ o _____D_____",
        "options": [
          "a) A development server will be newly prepared for each project.",
          "b) A user will enter the download date, deletion date, and pers on in charge in an administration log when downloading / deleting customer test data to / from develop- ment PCs for use.",
          "c) A warning message will be displayed wh en customer test data are saved to development PCs.",
          "d) Project members will be given read-only access to cu stomer test data on the development server.",
          "e) The systems department will add processes to completely erase all data from returned development PCs.",
          "f) The systems department will regularly ch eck the development server’s access logs."
        ],
        "correctIndex": 3,
        "explanation": "Official ITPEC Subject B solution for Q1 Subquestion 4 (2022S).",
        "requiresPseudocode": false
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2022S_FE-B_Questions.pdf",
    "pdfPage": 3
  },
  {
    "scenarioId": "fe-2022s-q2",
    "title": "Subject B Q2 (2022S): Data Structures & Memory",
    "examYear": 2022,
    "domain": "Data Structures & Memory",
    "contextMarkdown": "Open the embedded PDF at page 9 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2022s-q2-sub1",
        "questionNumber": 1,
        "prompt": "Subquestion 1 From the answer group below, select the correct answer to be inserted in the blank _______ in the above description.",
        "options": [
          "a) allows programmers to check the cause of an error during execution",
          "b) allows programmers to modify th e source program and run it immediately",
          "c) can execute the source program while checking it interactively",
          "d) can optimize the executable pr ogram for the target computer"
        ],
        "correctIndex": 0,
        "explanation": "Official ITPEC Subject B solution for Q2 Subquestion 1 (2022S).",
        "requiresPseudocode": false
      },
      {
        "questionId": "fe-2022s-q2-sub2",
        "questionNumber": 2,
        "prompt": "Subquestion 2 From the answer group below, select the correct answer to be inserted in the blank _______ in the following description. There is another method that uses a computer virtually constructed by software, called a virtual machine. As with the compiler method, the language processing system in this method outputs an executable program; however, it consists of instructions dedicated for use by the virtual machine, calle d intermediate code. Figure 1 shows an example of the conversion of a source program into intermediate code and its execution with the virtual machine. Figure 1 Example of running a program on a virtual machine By implementing a virtual machine for various operating systems (OSs) or hardware, it is possible to distribute a program that ___ B___.",
        "options": [
          "a) is independent of any specific OS or hardware",
          "b) depends on a specific OS and hardware",
          "c) maximizes the performan ce of specific hardware",
          "d) reduces memory usage on certain hardware"
        ],
        "correctIndex": 1,
        "explanation": "Official ITPEC Subject B solution for Q2 Subquestion 2 (2022S).",
        "requiresPseudocode": false
      },
      {
        "questionId": "fe-2022s-q2-sub3",
        "questionNumber": 3,
        "prompt": "Subquestion 3 From the answer groups below, select the co rrect answer to be inserted in each blank _______ in the following description. Some virtual machines collect information about what processes or functions are frequently executed (hereinafter referred to as profile information) and f eeds that information back to the intermediate-code execution. Dynamic compilation is a method employed to compile a part of an intermediate code to a native c ode for subsequent execution based on the profile information. This method is used in practical language processing systems such as the Java JIT (Just-In-Time) compiler. Figure 2 shows an example of the method. Figure 2 Process flow showing application of the dynamic compilation method When adapting a specific system to dynamic compilation, it is necessary to consider certain overheads, which are the startup time and comp ilation time of the dynamic compiler, in addition to the execution time of the program. Native code Intermediate code Main program Function F Function F Dynamic compiler Profile information Intermediate code Function F Run Run (1) The main program and function F are distri buted in the form of intermediate code. (2) At first, function F is called in the form of intermediate code. (3) The decision whether to compile function F dynamically or not is made based on the profile information. (4) If function F is determined to be compile d, the dynamic compiler starts compilation. (5) After the compilation, function F is called in the form of the native code. (1) (2) (3) (4) (5) Intermediate code Main program Consider the total execution time when func tion F shown in Figure 2 is executed with and without the dynamic compilation method under the following conditions: (1) The total execution time of function F consists of the following times only. - Execution time of the intermediate-code instructions - Execution time of the na tive-code instructions - Startup time of the dynamic compiler - Compilation time of the dynamic compiler (2) Function F before the dynamic compilat ion consists of 400 intermediate-code instructions. Because function F contains a loop structure, 2,000 intermediate-code instructions are executed once it is called. (3) Function F after the dynamic compilation also consists of 400 native-code instructions. In addition, 2,000 native-code instructions are executed once it is called. (4) An intermediate-code instruction takes 0.5 μs (microseconds) to execute whereas a native-code instruction takes 0.01 μs. (5) The dynamic compiler starts compiling func tion F at the beginning of its 101st call. It takes 100 ms (milliseconds) to start up the dynamic compiler and 100 ms to compile 1,000 intermediate-code instructio ns to native-code instruc tions of the same number. The execution of function F of intermediate-code stops during the dynamic compilation and resumes function F of native-code after the compilation is finished. When function F is called from the main program 200 times, - total execution time of function F for the first 100 calls: 100 ms - execution time for the dynamic compilation: ___ C___ ms - total execution time of functi on F for the last 100 calls: ___D___ ms The dynamic compilation consumes a considerab le amount of time. Therefore, there is a tradeoff with respect to the time at which the dynamic compilation is started. Consequently, invocation of the dynamic compiler before the first call of function F reduces the total execution time when function F is called more than ___E___ times.",
        "options": [
          "a) 1",
          "b) 2",
          "c) 10",
          "d) 20",
          "e) 40",
          "f) 100",
          "g) 140"
        ],
        "correctIndex": 2,
        "explanation": "Official ITPEC Subject B solution for Q2 Subquestion 3 (2022S).",
        "requiresPseudocode": false
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2022S_FE-B_Questions.pdf",
    "pdfPage": 9
  },
  {
    "scenarioId": "fe-2022s-q3",
    "title": "Subject B Q3 (2022S): Software Engineering",
    "examYear": 2022,
    "domain": "Software Engineering",
    "contextMarkdown": "Open the embedded PDF at page 13 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2022s-q3-sub1",
        "questionNumber": 1,
        "prompt": "Subquestion 1 From the answer group below, select the correct answer to be inserted in the blank _______ in Figure 1. An entity relationship diagram (ERD) is a data modeling technique that graphically illustrates an information system’s entities and the relationships among those entities. The elements of an ERD are as follows: Entities, Relationships and Attributes. Figure 1 shows the ERD, and Table 1 shows the list of cardinality of the relationship. Figure 1 Entity Relationship Diagram Table 1 List of cardinality of relationship Termination point Cardinality Existence Description One Mandatory Must exist, one and only one One Optional May exist, one, or none Many Mandatory Must exist, one or more Many Optional May exist, one or more or none",
        "options": [
          "a) has (Customer ↔ Account)",
          "b) has (Branch ↔ Employee)",
          "c) works (Employee ↔ Branch)",
          "d) has (Account ↔ Transaction)",
          "e) manages (Employee ↔ Account)",
          "f) has (Customer ↔ Branch)"
        ],
        "correctIndex": 0,
        "explanation": "Official ITPEC Subject B solution for Q3 Subquestion 1 (2022S).",
        "requiresPseudocode": false
      },
      {
        "questionId": "fe-2022s-q3-sub2",
        "questionNumber": 2,
        "prompt": "Subquestion 2 From the answer group below, select the correct answer to be inserted in each blank _______ in the SQL statement SQL1. The following SQL statement SQL1 outputs employees with the names of their superiors. If an employee has no superior, it displays “(none)” in the SuperiorName field. Note: The function ISNULL(expression, replacement) returns the value of replacement when the value of expression is NULL. LEFT OUTER JOIN returns all records from the left table, and the matched records from the right table. The result is NULL from the right side, if there is no match. -- SQL1 -- SELECT E.EmpID, E.EmpName, E.Title, ISNULL(S.EmpName, '(none)') AS SuperiorName FROM Employee E LEFT OUTER JOIN ___B___ S ON ___C___ When the SQL statement SQL1 is executed with the following sample data: Employee table EmpID EmpName Title AssignedBranchID SuperiorEmpID 1001 Alice Receptionist 20 1003 1002 Bob Loan manager 10 NULL 1003 Charlie Loan examiner 10 1002 1004 Don Receptionist 30 1003 From the sample data shown above, SQL1 outputs the following result: EmpID EmpName Title SuperiorName 1001 Alice Receptionist Charlie 1002 Bob Loan manager (none) 1003 Charlie Loan examiner Bob 1004 Don Receptionist Charlie",
        "options": [
          "a) Account",
          "b) Customer",
          "c) E.EmpID = S.EmpID",
          "d) E.EmpID = S.SuperiorEmpID",
          "e) Employee",
          "f) S.EmpID = E.SuperiorEmpID",
          "g) S.SuperiorEmpID IS NOT NULL"
        ],
        "correctIndex": 1,
        "explanation": "Official ITPEC Subject B solution for Q3 Subquestion 2 (2022S).",
        "requiresPseudocode": false
      },
      {
        "questionId": "fe-2022s-q3-sub3",
        "questionNumber": 3,
        "prompt": "Subquestion 3 From the answer group below, select the correct answer to be inserted in each blank _______ in the SQL statement SQL2. Mr. C, an IT engineer trainee, is creating an SQL statement SQL2. The purpose of SQL2 is to output account IDs that were registered before 2020 and never used in 2020 and 2021. It is assumed that the Trans2Years table contai ns all transactions in 2020 and 2021 extracted from the Transaction table. To test the program, Mr. C provides the following sample data: Account table AcctID CustID OpenDate BranchID EmpID LoanBalance 50001 3001 2016-08-26 20 1001 2534 50002 3002 2017-04-27 30 1004 0 50003 3001 2018-01-02 20 1001 2117 50004 3002 2019-09-19 30 1004 0 50005 3001 2020-04-16 20 1001 679 50006 3002 2021-01-10 30 1004 0 Trans2Years table TransID TransDate TransType Amount AcctID 700001 2020-01-24 Restaurant 59 50003 700002 2020-04-21 Cashing 230 50005 700003 2020-05-09 Revolving 781 50001 700004 2021-01-19 Cashing 640 50001 700005 2021-06-07 Restaurant 62 50005 700006 2021-09-04 Revolving 862 50003 From the sample data shown above, SQL2 should output the following result: AcctID 50002 50004 The SQL statement SQL2 is as follows. At the moment, SQL2 is incomplete and contains error(s). Note: The function YEAR(date) returns the four-digit year of the date as a number. Line No. 1 -- SQL2 -- 2 SELECT A.AcctID 3 FROM Account A 4 WHERE EXISTS(SELECT * 5 FROM Trans2Years T 6 WHERE A.AcctID = T.AcctID) 7 AND YEAR(OpenDate) < 2020 If SQL2 shown above is executed, it outputs _____D_____. To output the correct result, SQL2 should be changed. Concretely, _____E_____.",
        "options": [
          "a) 2 rows of account IDs: 50001 and 50003",
          "b) 3 rows of account IDs: 50001, 50003 and 50005",
          "c) 3 rows of account IDs: 50002, 50004 and 50006",
          "d) 4 rows of account IDs: 50001, 50001, 50003 and 50003",
          "e) 4 rows of account IDs: 50002, 50002, 50004 and 50004"
        ],
        "correctIndex": 2,
        "explanation": "Official ITPEC Subject B solution for Q3 Subquestion 3 (2022S).",
        "requiresPseudocode": false
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2022S_FE-B_Questions.pdf",
    "pdfPage": 13
  },
  {
    "scenarioId": "fe-2022s-q4",
    "title": "Subject B Q4 (2022S): Computer Architecture & OS",
    "examYear": 2022,
    "domain": "Computer Architecture & OS",
    "contextMarkdown": "Open the embedded PDF at page 18 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2022s-q4-sub1",
        "questionNumber": 1,
        "prompt": "Subquestion 1 From the answer groups below, select the co rrect answer to be inserted in each blank _______ in the above description.",
        "options": [
          "a) 1240",
          "b) 1460",
          "c) 8192",
          "d) 55133",
          "e) 65535",
          "f) 34"
        ],
        "correctIndex": 0,
        "explanation": "Official ITPEC Subject B solution for Q4 Subquestion 1 (2022S).",
        "requiresPseudocode": false
      },
      {
        "questionId": "fe-2022s-q4-sub2",
        "questionNumber": 2,
        "prompt": "Subquestion 2 During the connection establishment process, it is possible that malicious clients may keep sending SYN packets to the serv er without supplying ACK pack ets to complete the three- way handshake. Without the acknowledgment from the client, these requests will remain in the incoming connection queue of the server until it times out. This is called SYN flooding and it may prevent the server from responding to legitimate SYN requests. From the answer group below, select the approp riate characteristic or the cause of concern regarding SYN flooding.",
        "options": [
          "a) During a SYN flooding attack, the server unde r attack is unable to initiate an outgoing TCP connection to another host because its outgoing connection queue is already overwhelmed with large numbers of incoming SYN requests.",
          "b) It is possible to reduce the effects of SYN flooding by increasing the timeout value that controls how long the sy stem should wait for an AC K as this method helps to improve the stability of legitimate clients with slower links.",
          "c) Owing to the connection-oriented nature of TCP, SYN flooding will potentially prevent new clients from conne cting to the server rather than disconnecting already established connections.",
          "d) To stop an ongoing SYN flooding attack, th e server’s administrator must restore the system from a backup because the sy stem may be damaged owing to the overwhelming number of unsuccessful three-way handshake attempts."
        ],
        "correctIndex": 1,
        "explanation": "Official ITPEC Subject B solution for Q4 Subquestion 2 (2022S).",
        "requiresPseudocode": false
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2022S_FE-B_Questions.pdf",
    "pdfPage": 18
  },
  {
    "scenarioId": "fe-2022s-q5",
    "title": "Subject B Q5 (2022S): Databases & SQL",
    "examYear": 2022,
    "domain": "Databases & SQL",
    "contextMarkdown": "Open the embedded PDF at page 23 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2022s-q5-sub1",
        "questionNumber": 1,
        "prompt": "Subquestion 1 From the answer group below, select the correct answer to be inserted in each blank _______ in Figure 1.",
        "options": [
          "a) Create information",
          "b) Report result",
          "c) Review information",
          "d) Set authority for the Organizer",
          "e) Update information",
          "f) View events Student Organizer B Notify C A Administrator Manager"
        ],
        "correctIndex": 0,
        "explanation": "Official ITPEC Subject B solution for Q5 Subquestion 1 (2022S).",
        "requiresPseudocode": false
      },
      {
        "questionId": "fe-2022s-q5-sub2",
        "questionNumber": 2,
        "prompt": "Subquestion 2 From the answer group below, select the correct answer to be inserted in each blank _______ in Figure 2. The process of organizing an event is as follows: (1) An Organizer creates event information by filling out the form w ith event information that contains the organization plan and inputs the form into the SEC system. (2) The SEC system verifies the information systematically by checking the database for reasonableness in terms of the budget and av ailability of equipment to determine whether the required equipment is needed by other similar events that overlap with the time period. After the information is verified, the SEC system sends the information to a specific Manager. (3) The Manager reviews the event information a nd decides to approve or reject the event. If the Manager approves the ev ent information, the event is published. If the event is rejected, comments and recommendations on the organization plan are sent back to the Organizer so that the Organizer can identify the problems in the organization plan. After that, the Organizer updates the event information and resubmits it. (4) The Organizer can modify the information wh enever the need arises even after it has been published. The updated information must be reviewed by the Manager. (5) After the event is over, the Organizer repor ts the result of the event to the Manager. Figure 2 shows the activity diagram of publicizi ng an event. It starts from the Organizer when he/she begins to create an event. The SEC system is responsible for managing the database and controlling the communication between the Organizer and Manager. Figure 2 Activity diagram of publicizing an event",
        "options": [
          "a) Publish information",
          "b) Remove information",
          "c) Review informati on into the database",
          "d) Send information to Organizer",
          "e) Update information",
          "f)"
        ],
        "correctIndex": 1,
        "explanation": "Official ITPEC Subject B solution for Q5 Subquestion 2 (2022S).",
        "requiresPseudocode": false
      },
      {
        "questionId": "fe-2022s-q5-sub3",
        "questionNumber": 3,
        "prompt": "Subquestion 3 From the answer group below, select the correct answer to be inserted in each blank _______ in Figure 3. Here, the answers to be inserted in F1 and F2 should be selected as the correct combination from the answer group for F. Figure 3 shows the event information state chart from the event planning to the event end. In Figure 3, a rectangular indicates a state and an arrow indicates a state transition. Figure 3 Event information state chart",
        "options": [
          "a) Waiting for report Published",
          "b) Waiting for report Update",
          "c) Waiting for report Waiting for report",
          "d) Published",
          "e) Update",
          "f)"
        ],
        "correctIndex": 2,
        "explanation": "Official ITPEC Subject B solution for Q5 Subquestion 3 (2022S).",
        "requiresPseudocode": false
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2022S_FE-B_Questions.pdf",
    "pdfPage": 23
  },
  {
    "scenarioId": "fe-2022s-q6",
    "title": "Subject B Q6 (2022S): Networking & Security",
    "examYear": 2022,
    "domain": "Networking & Security",
    "contextMarkdown": "Open the embedded PDF at page 28 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2022s-q6-sub1",
        "questionNumber": 1,
        "prompt": "Subquestion 1 From the answer groups below, select the co rrect answer to be inserted in each blank _______ in the following description and Program 1. [Description of the function BitTest] The function BitTest tests the bit values of the bits in an 8-bit data selected by a mask and returns the result. The function BitTest is declared as follows: FUNCTION: BitTest(8-bit Binary: Data, 8-bit Binary: Mask) The argument Data contains an 8-bit data to be tested, and the argument Mask contains an 8-bit mask. The bits of the Mask are made to have a one-to-one correspondence with the bits of the Data. A mask bit of 1 indicates that the corresponding bit in Data is to be tested. When a mask bit is 0, the corresponding bit in Data is ignored. Here, in Mask, there is at least one bit whose value is 1. The function BitTest returns the following return value: Return value 0: All tested bits are 0’s 1: Tested bits mixed 0’s and 1’s 2: All tested bits are 1’s For example, in Example 1 in Figure 1, the 2 bits (bit numbers 5 and 1) of Mask are 1’s; thus, the values of the 2 bits (bit numbers 5 and 1) of Data are tested. Because 0 and 1 are both included in these, the return value is 1. In Ex ample 2, the 2 bits (bit numbers 6 and 2) of Mask are 1’s; thus, the values of the 2 bits (bit numbers 6 and 2) of Data are tested. Because both are 1’s, the return value is 2. (Example 1) (Example 2) Bit number 7 6 5 4 3 2 1 0 Bit number 7 6 5 4 3 2 1 0 Data 1 1 0 0 0 1 1 0 Data 1 1 0 0 0 1 1 0 | | | | Mask 0 0 1 0 0 0 1 0 Mask 0 1 0 0 0 1 0 0 Return value 1 Return value 2 Figure 1 Examples of the BitTest operation [Program 1] FUNCTION: BitTest(8-bit Binary: Data, 8-bit Binary: Mask) { INT: Rv /* return value */ IF (___A___) Rv ← 2; ELSE IF (___B___) Rv ← 0; ELSE Rv ← 1; return Rv; /* returns Rv as the return value */ } Based on the definition of the return value, the function BitTest ___C___ when Mask has only one bit whose value is 1, and the function BitTest ___D___ when the contents of Data and Mask are identical. Program 1 presumes that Mask contains at least one bit whose value is 1. To improve the usability, the specification of Program 1 is to be changed so that it can accept the case where all the bits in Mask have value 0. In this case, Program 1 returns 0 as the return value. To achieve this, the following change proposals, (1) to (3), are made. Note that change proposal (1) makes no change to Program 1. Here, the correct answers are assumed to be inserted in blanks ___A___ and ___B___. Change proposal (1) (no change) Change proposal (2) Change proposal (3) IF (___A___) IF (___B___) Rv ← 1; Rv ← 2; Rv ← 0; IF (___B___) ELSE ELSE Rv ← 0; IF (___B___) IF (___A___) IF (___A___) Rv ← 0; Rv ← 2; Rv ← 2; ELSE ELSE return Rv; Rv ← 1; Rv ← 1; return Rv; return Rv; Of these change proposals, the one that operates correctly is ___E___.",
        "options": [
          "a) (Data & Mask) = '00000000'B",
          "b) (Data & Mask) = Data",
          "c) (Data & Mask) = Mask",
          "d) (Data | Mask) = '00000000'B",
          "e) (Data | Mask) = Mask",
          "f) never returns the return value 2"
        ],
        "correctIndex": 0,
        "explanation": "Official ITPEC Subject B solution for Q6 Subquestion 1 (2022S).",
        "requiresPseudocode": false
      },
      {
        "questionId": "fe-2022s-q6-sub2",
        "questionNumber": 2,
        "prompt": "Subquestion 2 From the answer groups below, select the co rrect answer to be inserted in each blank ___ ____ in the following description. [Description of the function BitCount] The function BitCount counts the number of bits whose values are 1 in an 8-bit data and returns the result. The function BitCount is declared as follows: FUNCTION: BitCount(8-bit Binary: Data) The argument Data contains an 8-bit data to be checked. Two programs are provided: Program 2, which uses a basic algorithm, and Program 3, which uses an efficient algorithm. For Programs 2 and 3, the proces sing time of each line is s hown. It indicates the required time in a certain time unit to execute that line of process once. For a line on which the processing time is not shown, its processing time can be ignored. In Program 3, the operator “ -” performs subtracti on by treating both operands as 8-bit unsigned integers. [Program 2] Processing time FUNCTION: BitCount(8-bit Binary: Data) { 8-bit Binary: Work INT: Count, Loop 1 Work ← Data; 1 Count ← 0; 4 FOR (Loop ← 0; Loop < 8; Loop ← Loop + 1) { 3 IF (Rightmost bit of Work is '1'B) /*** α ***/ 1 Count ← Count + 1; 1 Shift Work one bit to the right logically; } 2 return Count; /* returns Count as the return value */ } [Program 3] Processing time FUNCTION: BitCount(8-bit Binary: Data) { 8-bit Binary: Work INT: Count 1 Work ← Data; 1 Count ← 0; 2 WHILE (Work ≠ '00000000'B) { 1 Count ← Count + 1; 3 Work ← Work & (Work - 1); /*** β ***/ } 2 return Count; /* returns Count as the return value */ } With respect to Program 2, the IF statement on the line marked /*** α ***/ can be rewritten by using logical expressions such as: IF ((Work & '00000001'B) = '00000001'B), IF ((___F___) = Work), and IF ((___G___) ≠ Work). The processing efficiency of Programs 2 and 3 is considered. Table 1 shows the results of the comparison of the processing times of Programs 2 and 3. Table 1 Comparison of the processing times of Programs 2 and 3 Minimum Maximum Program 2 72 80 Program 3 ___H___ 54 With respect to Program 3, an efficient algorithm is used to update the value of Work on the line marked /*** β ***/. Assume that Program 3 is called and the argument Data contains '01100110'B. Immediately after the first execution of the line marked /*** β ***/, the value of Work becomes '___I___'B. By carrying out the process of bit replacement in this manner, the number of times the process on the line marked /*** β ***/ is executed is the same as the number of bits that have value 1 in the data to be checked.",
        "options": [
          "a) Work & '00000001'B",
          "b) Work & '11111110'B",
          "c) Work | '00000001'B",
          "d) Work | '11111110'B"
        ],
        "correctIndex": 1,
        "explanation": "Official ITPEC Subject B solution for Q6 Subquestion 2 (2022S).",
        "requiresPseudocode": false
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2022S_FE-B_Questions.pdf",
    "pdfPage": 28
  },
  {
    "scenarioId": "fe-2022s-q7",
    "title": "Subject B Q7 (2022S): Algorithms & Programming",
    "examYear": 2022,
    "domain": "Algorithms & Programming",
    "contextMarkdown": "Open the embedded PDF at page 33 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2022s-q7-sub1",
        "questionNumber": 1,
        "prompt": "Subquestion 1 From the answer groups below, select the co rrect answer to be inserted in each blank _______ in the program.",
        "options": [
          "a) num_players",
          "b) players",
          "c) players->number",
          "d) win",
          "e) win->number"
        ],
        "correctIndex": 0,
        "explanation": "Official ITPEC Subject B solution for Q7 Subquestion 1 (2022S).",
        "requiresPseudocode": true,
        "pseudocodeBlock": "#include <stdio.h> \n#include <stdlib.h> \n#include <time.h> \n \n#define MAX_NUM_PASSES 10 \n \nstruct player { \n int number; \n struct player *next; \n}; \ntypedef struct player player_t; \n \nplayer_t *Setup(int num_players); \nint PlayGame(player_t *players); \nvoid Display(player_t *players); \n \nint main() { \n int win, num_players; \n player_t *players; \n \n printf(\"How many players:= \"); \n scanf(\"%d\", &num_players); \n players = Setup(num_players); \n Display(players); \n win = PlayGame(players); \n printf(\"\\nWinner = %d\\n\", \n____A____); \n return 0; \n} \n\nplayer_t *Setup(int num_players) { \n player_t *temp, *prev, *players = NULL; \n int i; \n \n for (i = 1; i <= num_players; i++) { \n temp = (player_t *)malloc(sizeof(player_t)); \n if (players == NULL) { \n players = temp; \n prev = temp; \n } \n temp->number = \n____B____; \n temp->next = players; \n prev->next = temp; \n prev = temp; \n } \n return players; \n} \n \nint PlayGame(player_t *players) { \n player_t *p, *has_pillow; \n int rd, pass, i; \n \n srand(time(NULL)); \n pass = 1; \n has_pillow = players; \n while (\n____C____) { \n rd = rand() % (MAX_NUM_PASSES - 1) + 1; \n \n for (i = 0; i < rd; i++) { \n p = has_pillow; \n has_pillow = has_pillow->next; /*** \nα ***/ \n } \n ____D____; \n if (has_pillow == players) { \n players = has_pillow->next; /*** β ***/ \n } \n free(has_pillow); \n has_pillow = p->next; /*** \nγ ***/ \n printf(\"\\nPass = %d\", pass); \n printf(\"\\nRandom Number:= %d\", rd); \n printf(\"\\n\"); \n Display(players); \n pass++; \n } \n return players->number; \n} \n\nvoid Display(player_t *players) { \n player_t *temp; \n \n printf(\"\\nCurrent LinkedList:= \"); \n temp = players; \n do { \n printf(\"%d \", temp->number); \n \n____E____; \n } while (temp != players); \n}"
      },
      {
        "questionId": "fe-2022s-q7-sub2",
        "questionNumber": 2,
        "prompt": "Subquestion 2 From the answer group below, select the correct answer to be inserted in the blank _______ in the following description. Suppose the program created the linear circul ar linked list as shown in Figure 6 for num_players = 5. Given a series of random numbers 4, 2, 1, and 2 set to the variable rd in this order, the function PlayGame returns ___F___. Figure 6 Linear circular linked list for num_players = 5",
        "options": [
          "a) 1",
          "b) 2",
          "c) 3",
          "d) 4",
          "e) 5"
        ],
        "correctIndex": 1,
        "explanation": "Official ITPEC Subject B solution for Q7 Subquestion 2 (2022S).",
        "requiresPseudocode": true,
        "pseudocodeBlock": "#include <stdio.h> \n#include <stdlib.h> \n#include <time.h> \n \n#define MAX_NUM_PASSES 10 \n \nstruct player { \n int number; \n struct player *next; \n}; \ntypedef struct player player_t; \n \nplayer_t *Setup(int num_players); \nint PlayGame(player_t *players); \nvoid Display(player_t *players); \n \nint main() { \n int win, num_players; \n player_t *players; \n \n printf(\"How many players:= \"); \n scanf(\"%d\", &num_players); \n players = Setup(num_players); \n Display(players); \n win = PlayGame(players); \n printf(\"\\nWinner = %d\\n\", \n____A____); \n return 0; \n} \n\nplayer_t *Setup(int num_players) { \n player_t *temp, *prev, *players = NULL; \n int i; \n \n for (i = 1; i <= num_players; i++) { \n temp = (player_t *)malloc(sizeof(player_t)); \n if (players == NULL) { \n players = temp; \n prev = temp; \n } \n temp->number = \n____B____; \n temp->next = players; \n prev->next = temp; \n prev = temp; \n } \n return players; \n} \n \nint PlayGame(player_t *players) { \n player_t *p, *has_pillow; \n int rd, pass, i; \n \n srand(time(NULL)); \n pass = 1; \n has_pillow = players; \n while (\n____C____) { \n rd = rand() % (MAX_NUM_PASSES - 1) + 1; \n \n for (i = 0; i < rd; i++) { \n p = has_pillow; \n has_pillow = has_pillow->next; /*** \nα ***/ \n } \n ____D____; \n if (has_pillow == players) { \n players = has_pillow->next; /*** β ***/ \n } \n free(has_pillow); \n has_pillow = p->next; /*** \nγ ***/ \n printf(\"\\nPass = %d\", pass); \n printf(\"\\nRandom Number:= %d\", rd); \n printf(\"\\n\"); \n Display(players); \n pass++; \n } \n return players->number; \n} \n\nvoid Display(player_t *players) { \n player_t *temp; \n \n printf(\"\\nCurrent LinkedList:= \"); \n temp = players; \n do { \n printf(\"%d \", temp->number); \n \n____E____; \n } while (temp != players); \n}"
      },
      {
        "questionId": "fe-2022s-q7-sub3",
        "questionNumber": 3,
        "prompt": "Subquestion 3 From the answer groups below, select the co rrect answer to be inserted in each blank _______ in the following description. The program will be modified according to the following specification change: Once a player is eliminated from the game, the pillow is passed again from the player who is seated immediately before the elimin ated player. To apply this change to the program, the assignment statement on the line marked ___G___ should be replaced by the following line: ____H____;",
        "options": [
          "a) /*** α ***/",
          "b) /*** β ***/",
          "c) /*** γ ***/",
          "d) players = p 1 2 3 4 has_pillow players 5"
        ],
        "correctIndex": 2,
        "explanation": "Official ITPEC Subject B solution for Q7 Subquestion 3 (2022S).",
        "requiresPseudocode": true,
        "pseudocodeBlock": "#include <stdio.h> \n#include <stdlib.h> \n#include <time.h> \n \n#define MAX_NUM_PASSES 10 \n \nstruct player { \n int number; \n struct player *next; \n}; \ntypedef struct player player_t; \n \nplayer_t *Setup(int num_players); \nint PlayGame(player_t *players); \nvoid Display(player_t *players); \n \nint main() { \n int win, num_players; \n player_t *players; \n \n printf(\"How many players:= \"); \n scanf(\"%d\", &num_players); \n players = Setup(num_players); \n Display(players); \n win = PlayGame(players); \n printf(\"\\nWinner = %d\\n\", \n____A____); \n return 0; \n} \n\nplayer_t *Setup(int num_players) { \n player_t *temp, *prev, *players = NULL; \n int i; \n \n for (i = 1; i <= num_players; i++) { \n temp = (player_t *)malloc(sizeof(player_t)); \n if (players == NULL) { \n players = temp; \n prev = temp; \n } \n temp->number = \n____B____; \n temp->next = players; \n prev->next = temp; \n prev = temp; \n } \n return players; \n} \n \nint PlayGame(player_t *players) { \n player_t *p, *has_pillow; \n int rd, pass, i; \n \n srand(time(NULL)); \n pass = 1; \n has_pillow = players; \n while (\n____C____) { \n rd = rand() % (MAX_NUM_PASSES - 1) + 1; \n \n for (i = 0; i < rd; i++) { \n p = has_pillow; \n has_pillow = has_pillow->next; /*** \nα ***/ \n } \n ____D____; \n if (has_pillow == players) { \n players = has_pillow->next; /*** β ***/ \n } \n free(has_pillow); \n has_pillow = p->next; /*** \nγ ***/ \n printf(\"\\nPass = %d\", pass); \n printf(\"\\nRandom Number:= %d\", rd); \n printf(\"\\n\"); \n Display(players); \n pass++; \n } \n return players->number; \n} \n\nvoid Display(player_t *players) { \n player_t *temp; \n \n printf(\"\\nCurrent LinkedList:= \"); \n temp = players; \n do { \n printf(\"%d \", temp->number); \n \n____E____; \n } while (temp != players); \n}"
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2022S_FE-B_Questions.pdf",
    "pdfPage": 33
  },
  {
    "scenarioId": "fe-2022a-q1",
    "title": "Subject B Q1 (2022A): Algorithms & Programming",
    "examYear": 2022,
    "domain": "Algorithms & Programming",
    "contextMarkdown": "Open the embedded PDF at page 3 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2022a-q1-sub1",
        "questionNumber": 1,
        "prompt": "Subquestion 1 The sections of the communication routes in Figure 1 are numbered 1 through 5 as shown in Table 2. From the answer group below, select the correct answer that represents all of the communication routes that use HTTPS for communication when the wholesaler’s PC accesses the Web server. Table 2 Communication routes between devices Route number Communication route 1 Between each wholesaler’s PC and FW3 2 Between FW3 and FW1 3 Between FW1 and RPS 4 Between FW1 and FW2 5 Between FW2 and the Web server",
        "options": [
          "a) 1",
          "b) 1, 2, 3",
          "c) 1, 2, 3, 4",
          "d) 1, 2, 3, 4, 5",
          "e) 2, 3, 4",
          "f) 2, 3, 4, 5",
          "g) 3, 4"
        ],
        "correctIndex": 0,
        "explanation": "Official ITPEC Subject B solution for Q1 Subquestion 1 (2022A).",
        "requiresPseudocode": false
      },
      {
        "questionId": "fe-2022a-q1-sub2",
        "questionNumber": 2,
        "prompt": "Subquestion 2 From the answer group below, select the appropriate answer to be inserted in each blank _______ in the description.",
        "options": [
          "a) brute force attacks",
          "b) cross-site scripting",
          "c) dictionary attacks",
          "d) directory traversal",
          "e) DoS attacks",
          "f) port scanning",
          "g) social engineering",
          "h) SQL injection"
        ],
        "correctIndex": 1,
        "explanation": "Official ITPEC Subject B solution for Q1 Subquestion 2 (2022A).",
        "requiresPseudocode": false
      },
      {
        "questionId": "fe-2022a-q1-sub3",
        "questionNumber": 3,
        "prompt": "Subquestion 3 From the answer group below, select the answer that is appropriate as a measure to address the underlined section (i) in Table 1.",
        "options": [
          "a) Making the user specify only the name of the file to be downloaded, and if the file exists in the folder set for each wholesaler, performing download processing.",
          "b) Making the user specify the file to be downloaded by using a relative path, and if the file exists, performing download processing.",
          "c) Making the user specify the file to be downloaded by using an absolute path, and if the file exists, performing download processing.",
          "d) On the browser on the wholesaler’s PC, displaying the structure of all folders and the files on the Web server, making the user specify the file to be downloaded, and performing download processing."
        ],
        "correctIndex": 2,
        "explanation": "Official ITPEC Subject B solution for Q1 Subquestion 3 (2022A).",
        "requiresPseudocode": false
      },
      {
        "questionId": "fe-2022a-q1-sub4",
        "questionNumber": 4,
        "prompt": "Subquestion 4 From the answer group below, select the answer that is appropriate as a security incident that can be caused by the vulnerability in the underlined section (ii) in Table 1.",
        "options": [
          "a) A person could view the login operation over the operator’s shoulder, and later log in.",
          "b) A person who uses a program that automatically enters possible passwords in succession may be able to log in.",
          "c) If an operator of a wholesaler loses a memo on which the password is written, a person who finds the memo may be able to log in.",
          "d) If an operator of a wholesaler uses his or her birthday as a password, a person who knows the birthday can log in."
        ],
        "correctIndex": 3,
        "explanation": "Official ITPEC Subject B solution for Q1 Subquestion 4 (2022A).",
        "requiresPseudocode": false
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2022A_FE-B_Questions.pdf",
    "pdfPage": 3
  },
  {
    "scenarioId": "fe-2022a-q2",
    "title": "Subject B Q2 (2022A): Data Structures & Memory",
    "examYear": 2022,
    "domain": "Data Structures & Memory",
    "contextMarkdown": "Open the embedded PDF at page 7 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2022a-q2-blank-a",
        "questionNumber": 1,
        "prompt": "Select the correct answer to be inserted into blank A.",
        "options": [
          "a) 0→1→1→0",
          "b) 1→0→0→0",
          "c) 1→1→0→0",
          "d) 1→1→1→0"
        ],
        "correctIndex": 0,
        "explanation": "Official ITPEC Subject B solution for Q2 Blank A (2022A).",
        "requiresPseudocode": false
      },
      {
        "questionId": "fe-2022a-q2-blank-b",
        "questionNumber": 2,
        "prompt": "Select the correct answer to be inserted into blank B.",
        "options": [
          "a) S0",
          "b) S1",
          "c) S2"
        ],
        "correctIndex": 1,
        "explanation": "Official ITPEC Subject B solution for Q2 Blank B (2022A).",
        "requiresPseudocode": false
      },
      {
        "questionId": "fe-2022a-q2-blank-c",
        "questionNumber": 3,
        "prompt": "Select the correct answer to be inserted into blank C.",
        "options": [
          "a) Option A",
          "b) Option B",
          "c) Option C",
          "d) Option D"
        ],
        "correctIndex": 2,
        "explanation": "Official ITPEC Subject B solution for Q2 Blank C (2022A).",
        "requiresPseudocode": false
      },
      {
        "questionId": "fe-2022a-q2-blank-d",
        "questionNumber": 4,
        "prompt": "Select the correct answer to be inserted into blank D.",
        "options": [
          "a) VP•ZP• I",
          "b) VP•ZP•II",
          "c) VP•ZP• I",
          "d) VP•ZP•II a) VP•ZP• I b) VP•ZP• I c) VP•ZP• I d) VP•ZP• I."
        ],
        "correctIndex": 3,
        "explanation": "Official ITPEC Subject B solution for Q2 Blank D (2022A).",
        "requiresPseudocode": false
      },
      {
        "questionId": "fe-2022a-q2-blank-e",
        "questionNumber": 5,
        "prompt": "Select the correct answer to be inserted into blank E.",
        "options": [
          "a) I",
          "b) VP• I",
          "c) VP• I a) I b) VP• I c) VP• I",
          "d) VP•ZP",
          "e) ZP• I",
          "f) ZP• I d) VP•ZP e) ZP• I f) ZP• I a) 0 b) 0 c) 1 d) 1 0 1 0 1"
        ],
        "correctIndex": 4,
        "explanation": "Official ITPEC Subject B solution for Q2 Blank E (2022A).",
        "requiresPseudocode": false
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2022A_FE-B_Questions.pdf",
    "pdfPage": 7
  },
  {
    "scenarioId": "fe-2022a-q3",
    "title": "Subject B Q3 (2022A): Software Engineering",
    "examYear": 2022,
    "domain": "Software Engineering",
    "contextMarkdown": "Open the embedded PDF at page 10 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2022a-q3-sub1",
        "questionNumber": 1,
        "prompt": "Subquestion 1 From the answer group below, select the correct answer to be inserted in each blank _______ in the SQL statement SQL1. The store manager wants to know if the currently stocked quantities are enough or not to satisfy all the delivery requests scheduled on and after tomorrow. At the manager’s request, a database engineer plans to execute the following process as the night batch after updating the stocked quantities in the Product table. First, extract the rows of the OrderDetail table that contain the products to be delivered on and after tomorrow, and create the ExtractedOrderDetail table. Assuming that today is 2022-10-23. From the sample data shown above, the contents of the ExtractedOrderDetail table are as follows: ExtractedOrderDetail table OrderDetailID OrderID ProductID Quantity Amount 102102-01 102102 LC100 10 3000 102102-02 102102 MP080 4 8000 And then, execute the following SQL statement SQL1. -- SQL1 – SELECT P.ProductID, P.ProductName, ___A___ - CASE WHEN ___B___ IS NULL THEN 0 ELSE ___B___ END AS EstimateQuantity FROM Product P ___C___ ExtractedOrderDetail D ON P.ProductID = D.ProductID GROUP BY P.ProductID, P.ProductName, P.Quantity When SQL1 is executed with the sample data shown above, it outputs the following result: ProductID ProductName EstimateQuantity LC050 L’s cow milk (500ml) 250 LC100 L’s cow milk (1000ml) 790 MP032 M’s powdered milk (80g x 4) 40 MP080 M’s powdered milk (800g) 16 Note: INNER JOIN returns the values on the matched rows from the left and right tables. LEFT OUTER JOIN returns the values on all rows from the left table and the matched rows from the right table. Columns of unmatched rows are set to NULL. RIGHT OUTER JOIN returns the values on all rows from the right table and the matched rows from the left table. Columns of unmatched rows are set to NULL. CASE WHEN a THEN b ELSE c END returns b if condition a is true; otherwise returns c.",
        "options": [
          "a) D.Quantity",
          "b) D.Quantity – P.Quantity",
          "c) P.Quantity",
          "d) P.Quantity – D.Quantity",
          "e) SUM(D.Quantity)"
        ],
        "correctIndex": 0,
        "explanation": "Official ITPEC Subject B solution for Q3 Subquestion 1 (2022A).",
        "requiresPseudocode": false
      },
      {
        "questionId": "fe-2022a-q3-sub2",
        "questionNumber": 2,
        "prompt": "Subquestion 2 From the answer group below, select the correct answer to be inserted in each blank _______ in the SQL statement SQL2. The following SQL statement increases salary by 10% for employees who contributed to getting orders from their customers of more than total amount 10,000 in 2022. When SQL2 is executed with the sample data shown above, it increases the salary of Frank Fairchild. -- SQL2 – ___D___ SET Salary = Salary * 1.10 WHERE EmployeeID = (SELECT O.EmployeeID FROM Order O INNER JOIN OrderDetail D ON O.EmployeeID = Employee.EmployeeID WHERE ___E___ AND YEAR(O.OrderDate) = 2022 __F__ ) Note: The function YEAR(date) returns the four-digit year of the date as a number.",
        "options": [
          "a) CREATE Employee",
          "b) CREATE Salary",
          "c) INSERT INTO Employee",
          "d) INSERT INTO Salary",
          "e) UPDATE Employee",
          "f) UPDATE Salary"
        ],
        "correctIndex": 1,
        "explanation": "Official ITPEC Subject B solution for Q3 Subquestion 2 (2022A).",
        "requiresPseudocode": false
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2022A_FE-B_Questions.pdf",
    "pdfPage": 10
  },
  {
    "scenarioId": "fe-2022a-q4",
    "title": "Subject B Q4 (2022A): Computer Architecture & OS",
    "examYear": 2022,
    "domain": "Computer Architecture & OS",
    "contextMarkdown": "Open the embedded PDF at page 14 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2022a-q4-sub1",
        "questionNumber": 1,
        "prompt": "Subquestion 1 From the answer groups below, select the correct answer to be inserted in each blank _______ in the above description.",
        "options": [
          "a) 192.168.1.5",
          "b) 192.168.1.6",
          "c) 192.168.1.7",
          "d) 192.168.1.8",
          "e) 255.255.255.240",
          "f) 192.168.1.127"
        ],
        "correctIndex": 0,
        "explanation": "Official ITPEC Subject B solution for Q4 Subquestion 1 (2022A).",
        "requiresPseudocode": false
      },
      {
        "questionId": "fe-2022a-q4-sub2",
        "questionNumber": 2,
        "prompt": "Subquestion 2 From the answer group below, select the correct answer to be inserted in each blank _______ in the following description. The contents and online applications provided by SaaS have recently been renewed, and the current Internet connection 1Gbps does not have enough bandwidth to use the new contents. Therefore, the decision was made to upgrade the Internet connection and replace the switches and routers. Table 3 shows the interface specifications of the devices before and after replacement. Table 3 Interface specifications of the devices Device Before replacement After replacement Central Router 1Gbps: 4 ports 10Gbps: 4 ports Central Switch 1Gbps: 2 ports 100Mbps: 16 ports 10Gbps: 16 ports Router 1, Router 2 1Gbps: 2 ports 10Gbps: 2 ports Switch 1, Switch 2 1Gbps: 2 ports 100Mbps: 24 ports 10Gbps: 2 ports 1Gbps: 24 ports PCs for trainees and trainer 100Mbps: 1 port 1Gbps: 1 port File server 1, File server 2 1Gbps: 1 port 1Gbps: 1 port Printer1, Printer 2 100Mbps: 1 port 100Mbps: 1 port After replacement, all the hosts are connected to the 1Gbps ports of the switches, and the switches are connected to the routers via a 10Gbps port. All the devices are interconnected by UTP cat5 cables. No cables are shorter than 3 meters and longer than 20 meters. There are some training classes where the trainers conduct classes on 3D modeling, video editing, and rendering using online applications or tools provided by the SaaS. If the training class wants to work with those online applications in real time, they need at least 1Gbps even in some cases 3 to 4Gbps bandwidth between the classroom and the SaaS server farm. The performance of the PCs is well capable of handling all the tasks. However, when the entire class wants to follow the trainer using the online applications, the bandwidth significantly drops and becomes insufficient for trainees to work smoothly. The network administrator checks all the devices, connections, and configurations, and suggests to ___E___ to increase the bandwidth per computer.",
        "options": [
          "a) replace all the CAT-5 cables with CAT-6a cables",
          "b) replace all the crossover cables with straight-through cables",
          "c) replace all the PCs with a PC that has higher memory and processing power",
          "d) replace the switch with a hub to create a large collision domain"
        ],
        "correctIndex": 1,
        "explanation": "Official ITPEC Subject B solution for Q4 Subquestion 2 (2022A).",
        "requiresPseudocode": false
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2022A_FE-B_Questions.pdf",
    "pdfPage": 14
  },
  {
    "scenarioId": "fe-2022a-q5",
    "title": "Subject B Q5 (2022A): Databases & SQL",
    "examYear": 2022,
    "domain": "Databases & SQL",
    "contextMarkdown": "Open the embedded PDF at page 19 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2022a-q5-blank-a",
        "questionNumber": 1,
        "prompt": "Select the correct answer to be inserted into blank A.",
        "options": [
          "a) 0",
          "b) 0 or 1",
          "c) 0 or 2",
          "d) 1",
          "e) 1 or 2",
          "f) 2"
        ],
        "correctIndex": 0,
        "explanation": "Official ITPEC Subject B solution for Q5 Blank A (2022A).",
        "requiresPseudocode": false
      },
      {
        "questionId": "fe-2022a-q5-blank-b",
        "questionNumber": 2,
        "prompt": "Select the correct answer to be inserted into blank B.",
        "options": [
          "a) « extend »",
          "b) « extend »",
          "c) « include »",
          "d) « include »"
        ],
        "correctIndex": 1,
        "explanation": "Official ITPEC Subject B solution for Q5 Blank B (2022A).",
        "requiresPseudocode": false
      },
      {
        "questionId": "fe-2022a-q5-blank-c",
        "questionNumber": 3,
        "prompt": "Select the correct answer to be inserted into blank C.",
        "options": [
          "a) Scan QR code View location View assets",
          "b) View assets Scan QR code View location",
          "c) View location View assets Scan QR code"
        ],
        "correctIndex": 2,
        "explanation": "Official ITPEC Subject B solution for Q5 Blank C (2022A).",
        "requiresPseudocode": false
      },
      {
        "questionId": "fe-2022a-q5-blank-d",
        "questionNumber": 4,
        "prompt": "Select the correct answer to be inserted into blank D.",
        "options": [
          "a) asset ID, checking flag, department, location",
          "b) asset ID, department, location",
          "c) checking flag, department, location",
          "d) department, location"
        ],
        "correctIndex": 3,
        "explanation": "Official ITPEC Subject B solution for Q5 Blank D (2022A).",
        "requiresPseudocode": false
      },
      {
        "questionId": "fe-2022a-q5-blank-e",
        "questionNumber": 5,
        "prompt": "Select the correct answer to be inserted into blank E.",
        "options": [
          "a) the asset condition to Normal",
          "b) the asset condition to Normal and the checking flag to 0",
          "c) the asset condition to Normal and the checking flag to 1",
          "d) the checking flag to 0",
          "e) the checking flag to 1"
        ],
        "correctIndex": 4,
        "explanation": "Official ITPEC Subject B solution for Q5 Blank E (2022A).",
        "requiresPseudocode": false
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2022A_FE-B_Questions.pdf",
    "pdfPage": 19
  },
  {
    "scenarioId": "fe-2022a-q6",
    "title": "Subject B Q6 (2022A): Networking & Security",
    "examYear": 2022,
    "domain": "Networking & Security",
    "contextMarkdown": "Open the embedded PDF at page 23 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2022a-q6-sub1",
        "questionNumber": 1,
        "prompt": "Subquestion 1 From the answer groups below, select the correct answer to be inserted in each blank _______ in the above program and description.",
        "options": [
          "a) Count[i - 1]",
          "b) Count[i]",
          "c) Count[Score[i - 1]]",
          "d) Count[Score[i]]"
        ],
        "correctIndex": 0,
        "explanation": "Official ITPEC Subject B solution for Q6 Subquestion 1 (2022A).",
        "requiresPseudocode": true,
        "pseudocodeBlock": "FUNCTION: CountingSort() { \n INT: StuNo[10] {11,12,13,14,15,16,17,18,19,20}, \n Score[10] { 7, 8, 5, 9, 8, 4, 8, 6, 9, 7}, \n SortedStuNo[10], \n SortedScore[10], \n Count[11] { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0}, \n Index[11] { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0} \n INT: i, n \n \n Execute the statements in [Program - Step 1] \n Execute the statements in [Program - Step 2] \n Execute the statements in [Program - Step 3] \n} \n\n[Program - Step 1] \n FOR (i 0; i < 10; i i + 1) { \n ___A___ ___A___ + 1; \n } \n \n[Description of Program - Step 1] \nIt counts the number of occurrences of each data value in the input array Score and stores \nthe result in the array Count as shown below. The index of the array Count represents the \ndata value. \n \n 0 1 2 3 4 5 6 7 8 9 10 \nCount[] 0 0 0 0 1 1 1 2 3 2 0 \n \n[Program - Step 2] \n n 0; \n FOR (i 0; i < 11; i i + 1) { /*** α ***/ \n IF (Count[i] > 0) { \n Index[i] ___B___; \n n n + ___C___; \n } \n } \n \n[Description of Program - Step 2] \nIt calculates the lowest storing position of each data value in the output arrays and stores the \nresult in the array Index as shown below. The index of the array Index represents the data \nvalue. \n \n 0 1 2 3 4 5 6 7 8 9 10 \nIndex[] 0 0 0 0 0 1 2 3 5 8 0 \n \n[Program - Step 3] \n FOR (i 0; i < 10; i i + 1) { \n n ___D___; /*** β ***/ \n SortedStuNo[n] StuNo[i]; \n SortedScore[n] Score[i]; \n ___E___ ___E___ + 1; \n } \n \n[Description of Program - Step 3] \nIt moves the data in the input arrays to the output arrays. \n\n[Characteristics of the program] \no The sort algorithm used in this program is stable. Sort algorithms are classified into two \ntypes: stable and unstable. A stable sort algorithm sorts the elements with the same value \nin the same order they appear in the input. \no The calculation performance of the program is expressed as ___F___ in O-notation."
      },
      {
        "questionId": "fe-2022a-q6-sub2",
        "questionNumber": 2,
        "prompt": "Subquestion 2 From the answer groups below, select the correct answer to be inserted in each blank _______ in the following description. The program will be modified to sort the input data in descending order of exam scores. Two methods, method 1 and method 2, are considered. Method 1: In [Program - Step 2], replace the line marked /*** α ***/ with the following line. FOR (i 10; i >= 0; i i - 1) { Method 2: In [Program - Step 3], add the following line immediately after the line marked /*** β ***/. n ____G____; When the programs modified by method 1 and method 2 are executed, the output results will be either of the following. Concretely, ___H___. Output arrays: Stable 0 1 2 3 4 5 6 7 8 9 SortedStuNo[] 14 19 12 15 17 11 20 18 13 16 SortedScore[] 9 9 8 8 8 7 7 6 5 4 Output arrays: Unstable 0 1 2 3 4 5 6 7 8 9 SortedStuNo[] 19 14 17 15 12 20 11 18 13 16 SortedScore[] 9 9 8 8 8 7 7 6 5 4",
        "options": [
          "a) 9 - n",
          "b) 10 - n",
          "c) 11 - n",
          "d) i + 10 - n"
        ],
        "correctIndex": 1,
        "explanation": "Official ITPEC Subject B solution for Q6 Subquestion 2 (2022A).",
        "requiresPseudocode": true,
        "pseudocodeBlock": "FUNCTION: CountingSort() { \n INT: StuNo[10] {11,12,13,14,15,16,17,18,19,20}, \n Score[10] { 7, 8, 5, 9, 8, 4, 8, 6, 9, 7}, \n SortedStuNo[10], \n SortedScore[10], \n Count[11] { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0}, \n Index[11] { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0} \n INT: i, n \n \n Execute the statements in [Program - Step 1] \n Execute the statements in [Program - Step 2] \n Execute the statements in [Program - Step 3] \n} \n\n[Program - Step 1] \n FOR (i 0; i < 10; i i + 1) { \n ___A___ ___A___ + 1; \n } \n \n[Description of Program - Step 1] \nIt counts the number of occurrences of each data value in the input array Score and stores \nthe result in the array Count as shown below. The index of the array Count represents the \ndata value. \n \n 0 1 2 3 4 5 6 7 8 9 10 \nCount[] 0 0 0 0 1 1 1 2 3 2 0 \n \n[Program - Step 2] \n n 0; \n FOR (i 0; i < 11; i i + 1) { /*** α ***/ \n IF (Count[i] > 0) { \n Index[i] ___B___; \n n n + ___C___; \n } \n } \n \n[Description of Program - Step 2] \nIt calculates the lowest storing position of each data value in the output arrays and stores the \nresult in the array Index as shown below. The index of the array Index represents the data \nvalue. \n \n 0 1 2 3 4 5 6 7 8 9 10 \nIndex[] 0 0 0 0 0 1 2 3 5 8 0 \n \n[Program - Step 3] \n FOR (i 0; i < 10; i i + 1) { \n n ___D___; /*** β ***/ \n SortedStuNo[n] StuNo[i]; \n SortedScore[n] Score[i]; \n ___E___ ___E___ + 1; \n } \n \n[Description of Program - Step 3] \nIt moves the data in the input arrays to the output arrays. \n\n[Characteristics of the program] \no The sort algorithm used in this program is stable. Sort algorithms are classified into two \ntypes: stable and unstable. A stable sort algorithm sorts the elements with the same value \nin the same order they appear in the input. \no The calculation performance of the program is expressed as ___F___ in O-notation."
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2022A_FE-B_Questions.pdf",
    "pdfPage": 23
  },
  {
    "scenarioId": "fe-2022a-q7",
    "title": "Subject B Q7 (2022A): Algorithms & Programming",
    "examYear": 2022,
    "domain": "Algorithms & Programming",
    "contextMarkdown": "Open the embedded PDF at page 27 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2022a-q7-sub1",
        "questionNumber": 1,
        "prompt": "Subquestion 1 From the answer groups below, select the correct answer to be inserted in each blank _______ in the program.",
        "options": [
          "a) *a = t",
          "b) *b = *a",
          "c) *b = t",
          "d) t = *a",
          "e) t = *b",
          "f) n, n - 1"
        ],
        "correctIndex": 0,
        "explanation": "Official ITPEC Subject B solution for Q7 Subquestion 1 (2022A).",
        "requiresPseudocode": true,
        "pseudocodeBlock": "#include <stdio.h> \n \ntypedef struct Data { \n int id; \n int value; \n} Data_t; \n \nvoid swap(Data_t *a, Data_t *b); \nvoid heap_up(Data_t *data, int child); \nvoid heap_down(Data_t *data, int heap_size, int parent); \nvoid rank_by_score(Data_t *data, int n); \nvoid print_data(Data_t *data, int n); \n \nvoid swap(Data_t *a, Data_t *b) { \n Data_t t = *a; \n *a = *b; \n ___A___; \n} \n \nvoid heap_up(Data_t *data, int child) { \n int parent = ___B___; \n if (data[child].value > data[parent].value) { \n swap(&data[child], &data[parent]); \n if (___C___) { \n heap_up(data, parent); \n } \n } \n} \n \nvoid heap_down(Data_t *data, int heap_size, int parent) { \n int l_child = parent * 2 + 1; \n int r_child = parent * 2 + 2; \n int child = l_child; \n if (___D___) { \n if (r_child < heap_size && \n data[l_child].value < data[r_child].value) { \n child = r_child; \n } \n if (data[parent].value < data[child].value) { \n swap(___E___); \n heap_down(data, heap_size, child); \n } \n } \n} \n\nvoid rank_by_score(Data_t *data, int n) { \n int i, heap_size = 0; \n printf(\"Students' scores (unsorted)\"); \n print_data(data, n); \n for (i = 0; i < n; i++) { \n heap_up(data, i); \n heap_size++; \n } \n for (i = n - 1; i > 0; i--) { \n swap(&data[0], &data[i]); \n heap_size--; \n heap_down(data, ___F___); \n } \n printf(\"Students' scores (sorted)\"); \n print_data(data, n); \n} \n \nvoid print_data(Data_t *data, int n) { \n int i; \n for (i = 0; i < n; i++) { \n if (i == 0) \n printf(\"\\nID: %d\", data[i].id); \n else \n printf(\",\\t%d\", data[i].id); \n } \n for (i = 0; i < n; i++) { \n if (i == 0) \n printf(\"\\nValue: %d\", data[i].value); \n else \n printf(\",\\t%d\", data[i].value); \n } \n printf(\"\\n------------------\\n\"); \n} \n \nint main() { \n Data_t data[] = { \n {0, 75}, {1, 80}, {2, 82}, {3, 68}, {4, 56}, \n {5, 97}, {6, 65}, {7, 80}, {8, 81}, {9, 92} \n }; \n rank_by_score(data, ___G___); \n}"
      },
      {
        "questionId": "fe-2022a-q7-sub2",
        "questionNumber": 2,
        "prompt": "Subquestion 2 From the answer group below, select the correct answer to be inserted in the blank ___H___ in the following description. It is assumed that the correct answer is inserted in blank ___G_)_. The definition of the function main is replaced with the following 6 lines. int main() { Data_t data[] = { {0, 84}, {1, 84}, {2, 96}, {3, 84} }; rank_by_score(data, ___G___); } When the replaced program is executed, it outputs the following result: Students' scores (unsorted) ID: 0, 1, 2, 3 Value: 84, 84, 96, 84 ------------------ Students' scores (sorted) ID: _____H_____ 2 Value: 84, 84, 84, 96 ------------------",
        "options": [
          "a) 0, 1, 3,",
          "b) 0, 3, 1,",
          "c) 1, 0, 3,",
          "d) 1, 3, 0,",
          "e) 3, 0, 1,",
          "f) 3, 1, 0,"
        ],
        "correctIndex": 1,
        "explanation": "Official ITPEC Subject B solution for Q7 Subquestion 2 (2022A).",
        "requiresPseudocode": true,
        "pseudocodeBlock": "#include <stdio.h> \n \ntypedef struct Data { \n int id; \n int value; \n} Data_t; \n \nvoid swap(Data_t *a, Data_t *b); \nvoid heap_up(Data_t *data, int child); \nvoid heap_down(Data_t *data, int heap_size, int parent); \nvoid rank_by_score(Data_t *data, int n); \nvoid print_data(Data_t *data, int n); \n \nvoid swap(Data_t *a, Data_t *b) { \n Data_t t = *a; \n *a = *b; \n ___A___; \n} \n \nvoid heap_up(Data_t *data, int child) { \n int parent = ___B___; \n if (data[child].value > data[parent].value) { \n swap(&data[child], &data[parent]); \n if (___C___) { \n heap_up(data, parent); \n } \n } \n} \n \nvoid heap_down(Data_t *data, int heap_size, int parent) { \n int l_child = parent * 2 + 1; \n int r_child = parent * 2 + 2; \n int child = l_child; \n if (___D___) { \n if (r_child < heap_size && \n data[l_child].value < data[r_child].value) { \n child = r_child; \n } \n if (data[parent].value < data[child].value) { \n swap(___E___); \n heap_down(data, heap_size, child); \n } \n } \n} \n\nvoid rank_by_score(Data_t *data, int n) { \n int i, heap_size = 0; \n printf(\"Students' scores (unsorted)\"); \n print_data(data, n); \n for (i = 0; i < n; i++) { \n heap_up(data, i); \n heap_size++; \n } \n for (i = n - 1; i > 0; i--) { \n swap(&data[0], &data[i]); \n heap_size--; \n heap_down(data, ___F___); \n } \n printf(\"Students' scores (sorted)\"); \n print_data(data, n); \n} \n \nvoid print_data(Data_t *data, int n) { \n int i; \n for (i = 0; i < n; i++) { \n if (i == 0) \n printf(\"\\nID: %d\", data[i].id); \n else \n printf(\",\\t%d\", data[i].id); \n } \n for (i = 0; i < n; i++) { \n if (i == 0) \n printf(\"\\nValue: %d\", data[i].value); \n else \n printf(\",\\t%d\", data[i].value); \n } \n printf(\"\\n------------------\\n\"); \n} \n \nint main() { \n Data_t data[] = { \n {0, 75}, {1, 80}, {2, 82}, {3, 68}, {4, 56}, \n {5, 97}, {6, 65}, {7, 80}, {8, 81}, {9, 92} \n }; \n rank_by_score(data, ___G___); \n}"
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2022A_FE-B_Questions.pdf",
    "pdfPage": 27
  },
  {
    "scenarioId": "fe-2022a-q8",
    "title": "Subject B Q8 (2022A): Data Structures & Memory",
    "examYear": 2022,
    "domain": "Data Structures & Memory",
    "contextMarkdown": "Open the embedded PDF at page 34 for the original Subject B question text, diagrams, tables, and pseudocode.",
    "subQuestions": [
      {
        "questionId": "fe-2022a-q8-sub1",
        "questionNumber": 1,
        "prompt": "Subquestion 1 From the answer groups below, select the correct answer to be inserted in each blank _______ in the programs.",
        "options": [
          "a) Double",
          "b) double",
          "c) String",
          "d) String, Double",
          "e) String, double",
          "f) replace(sid, 0.0) == null",
          "g) courses.get(course.getCode()) != null",
          "h) courses.get(course.getCode()) == null"
        ],
        "correctIndex": 0,
        "explanation": "Official ITPEC Subject B solution for Q8 Subquestion 1 (2022A).",
        "requiresPseudocode": false
      },
      {
        "questionId": "fe-2022a-q8-sub2",
        "questionNumber": 2,
        "prompt": "Subquestion 2 The class CourseManagement is executed. From the answer group below, select the correct output of the class CourseManagement.",
        "options": [
          "a) Student: 16200, CGPA: 2.50",
          "b) Student: 16200, CGPA: 2.58",
          "c) Student: 16200, CGPA: 2.81",
          "d) Student: 16200, CGPA: 2.90 _ _"
        ],
        "correctIndex": 1,
        "explanation": "Official ITPEC Subject B solution for Q8 Subquestion 2 (2022A).",
        "requiresPseudocode": false
      }
    ],
    "pdfUrl": "/Pdfs/SubjectB/2022A_FE-B_Questions.pdf",
    "pdfPage": 34
  }
];
