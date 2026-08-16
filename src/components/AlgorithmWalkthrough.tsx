import React, { useState, useEffect } from 'react';
import { Play, Pause, ChevronRight, ChevronLeft, RotateCcw, HelpCircle } from 'lucide-react';

interface WalkthroughStep {
  lineNo: number;
  vars: Record<string, string | number>;
  explanation: string;
  highlightedIndexes?: number[]; // for arrays
  output?: string[]; // for traversals
  stackContent?: (number | string)[]; // for stacks
  queueContent?: (number | string)[]; // for queues
  headPtr?: number; // for queue
  tailPtr?: number; // for queue
  topPtr?: number; // for stack
  arrayState?: number[]; // for sorting/searching
  activeNode?: number; // for tree
  visitedNodes?: number[]; // for tree
}

interface AlgorithmData {
  id: string;
  name: string;
  pseudocode: string;
  steps: WalkthroughStep[];
  variables: string[];
}

const ALGORITHMS: Record<string, AlgorithmData> = {
  EuclideanGCD: {
    id: 'EuclideanGCD',
    name: 'Euclidean GCD Algorithm',
    variables: ['x', 'y', 'a', 'b', 'r'],
    pseudocode: `integer: compute_gcd(integer: x, integer: y)
  integer: a, b, r
  a ← x
  b ← y
  while (b ≠ 0)
    r ← a mod b
    a ← b
    b ← r
  endwhile
  return a`,
    steps: [
      { lineNo: 1, vars: { x: 48, y: 18, a: '-', b: '-', r: '-' }, explanation: 'Algorithm starts. We wish to compute the Greatest Common Divisor (GCD) of 48 and 18, representing the largest integer that divides both perfectly.' },
      { lineNo: 3, vars: { x: 48, y: 18, a: 48, b: '-', r: '-' }, explanation: 'Copy the input parameter x (48) into working variable a.' },
      { lineNo: 4, vars: { x: 48, y: 18, a: 48, b: 18, r: '-' }, explanation: 'Copy the input parameter y (18) into working variable b.' },
      { lineNo: 5, vars: { x: 48, y: 18, a: 48, b: 18, r: '-' }, explanation: 'Check loop condition b ≠ 0 (18 ≠ 0). It is true, so we enter the while loop.' },
      { lineNo: 6, vars: { x: 48, y: 18, a: 48, b: 18, r: 12 }, explanation: 'Calculate r = a mod b (48 mod 18 = 12). 12 is the remainder of dividing 48 by 18.' },
      { lineNo: 7, vars: { x: 48, y: 18, a: 18, b: 18, r: 12 }, explanation: 'Shift b (18) into a. Our new problem reduces to finding GCD of 18 and the remainder 12.' },
      { lineNo: 8, vars: { x: 48, y: 18, a: 18, b: 12, r: 12 }, explanation: 'Shift remainder r (12) into b.' },
      { lineNo: 5, vars: { x: 48, y: 18, a: 18, b: 12, r: 12 }, explanation: 'Check loop condition b ≠ 0 (12 ≠ 0). It is true, starting iteration 2.' },
      { lineNo: 6, vars: { x: 48, y: 18, a: 18, b: 12, r: 6 }, explanation: 'Calculate r = a mod b (18 mod 12 = 6).' },
      { lineNo: 7, vars: { x: 48, y: 18, a: 12, b: 12, r: 6 }, explanation: 'Shift b (12) into a.' },
      { lineNo: 8, vars: { x: 48, y: 18, a: 12, b: 6, r: 6 }, explanation: 'Shift remainder r (6) into b.' },
      { lineNo: 5, vars: { x: 48, y: 18, a: 12, b: 6, r: 6 }, explanation: 'Check loop condition b ≠ 0 (6 ≠ 0). It is true, starting iteration 3.' },
      { lineNo: 6, vars: { x: 48, y: 18, a: 12, b: 6, r: 0 }, explanation: 'Calculate r = a mod b (12 mod 6 = 0). Remainder is 0, indicating 6 divides 12 evenly.' },
      { lineNo: 7, vars: { x: 48, y: 18, a: 6, b: 6, r: 0 }, explanation: 'Shift b (6) into a.' },
      { lineNo: 8, vars: { x: 48, y: 18, a: 6, b: 0, r: 0 }, explanation: 'Shift remainder r (0) into b.' },
      { lineNo: 5, vars: { x: 48, y: 18, a: 6, b: 0, r: 0 }, explanation: 'Check loop condition b ≠ 0. b is now 0. The loop condition is false, so we exit the loop.' },
      { lineNo: 10, vars: { x: 48, y: 18, a: 6, b: 0, r: 0 }, explanation: 'Return the final value of a (6). The GCD(48, 18) = 6.' }
    ]
  },
  BinarySearch: {
    id: 'BinarySearch',
    name: 'Binary Search (1-Based Indexing)',
    variables: ['target', 'left', 'right', 'mid', 'A[mid]'],
    pseudocode: `integer: binary_search(integer []: A, integer: N, integer: target)
  integer: left, right, mid
  left ← 1
  right ← N
  while (left ≤ right)
    mid ← (left + right) div 2
    if (A[mid] = target)
      return mid
    elseif (A[mid] < target)
      left ← mid + 1
    else
      right ← mid - 1
    endif
  endwhile
  return -1`,
    steps: [
      { lineNo: 1, vars: { target: 72, left: '-', right: '-', mid: '-', 'A[mid]': '-' }, arrayState: [10, 23, 35, 47, 50, 68, 72, 85, 90], explanation: 'Starting search for target 72 in a sorted 1-based array of size N=9.' },
      { lineNo: 3, vars: { target: 72, left: 1, right: '-', mid: '-', 'A[mid]': '-' }, arrayState: [10, 23, 35, 47, 50, 68, 72, 85, 90], explanation: 'Initialize left pointer to 1 (1-based index start).' },
      { lineNo: 4, vars: { target: 72, left: 1, right: 9, mid: '-', 'A[mid]': '-' }, arrayState: [10, 23, 35, 47, 50, 68, 72, 85, 90], explanation: 'Initialize right pointer to N (9) representing the upper boundary.' },
      { lineNo: 5, vars: { target: 72, left: 1, right: 9, mid: '-', 'A[mid]': '-' }, arrayState: [10, 23, 35, 47, 50, 68, 72, 85, 90], explanation: 'Check loop condition left ≤ right (1 ≤ 9). It is true, search boundary is valid.' },
      { lineNo: 6, vars: { target: 72, left: 1, right: 9, mid: 5, 'A[mid]': 50 }, arrayState: [10, 23, 35, 47, 50, 68, 72, 85, 90], explanation: 'Calculate mid: (1 + 9) div 2 = 5. Element A[5] = 50.' },
      { lineNo: 7, vars: { target: 72, left: 1, right: 9, mid: 5, 'A[mid]': 50 }, arrayState: [10, 23, 35, 47, 50, 68, 72, 85, 90], explanation: 'Check if A[5] (50) is equal to target (72). They are not equal.' },
      { lineNo: 9, vars: { target: 72, left: 1, right: 9, mid: 5, 'A[mid]': 50 }, arrayState: [10, 23, 35, 47, 50, 68, 72, 85, 90], explanation: 'Check if A[5] (50) < target (72). It is true, meaning target must reside in the right half.' },
      { lineNo: 10, vars: { target: 72, left: 6, right: 9, mid: 5, 'A[mid]': 50 }, arrayState: [10, 23, 35, 47, 50, 68, 72, 85, 90], explanation: 'Set left = mid + 1 = 6. This discards indexes 1 to 5.' },
      { lineNo: 5, vars: { target: 72, left: 6, right: 9, mid: '-', 'A[mid]': '-' }, arrayState: [10, 23, 35, 47, 50, 68, 72, 85, 90], explanation: 'Check loop condition left ≤ right (6 ≤ 9). It is true, search boundary is valid.' },
      { lineNo: 6, vars: { target: 72, left: 6, right: 9, mid: 7, 'A[mid]': 72 }, arrayState: [10, 23, 35, 47, 50, 68, 72, 85, 90], explanation: 'Calculate mid: (6 + 9) div 2 = 7. Element A[7] = 72.' },
      { lineNo: 7, vars: { target: 72, left: 6, right: 9, mid: 7, 'A[mid]': 72 }, arrayState: [10, 23, 35, 47, 50, 68, 72, 85, 90], explanation: 'Check if A[7] (72) is equal to target (72). It is a match!' },
      { lineNo: 8, vars: { target: 72, left: 6, right: 9, mid: 7, 'A[mid]': 72 }, arrayState: [10, 23, 35, 47, 50, 68, 72, 85, 90], explanation: 'Return mid (7) indicating the target is located at 1-based index 7.' }
    ]
  },
  TreeTraversal: {
    id: 'TreeTraversal',
    name: 'Binary Tree Traversal (In-Order)',
    variables: ['node', 'LeftChild[node]', 'RightChild[node]', 'Val[node]'],
    pseudocode: `procedure: traverse_inorder(integer: node)
  if (node = 0) then
    return
  endif
  traverse_inorder(LeftChild[node])
  visit(node)
  traverse_inorder(RightChild[node])
endprocedure`,
    steps: [
      { lineNo: 1, vars: { node: 1, 'LeftChild[node]': 2, 'RightChild[node]': 3, 'Val[node]': 'A' }, activeNode: 1, visitedNodes: [], output: [], explanation: 'Call traverse_inorder(1) on root node 1 (value "A").' },
      { lineNo: 2, vars: { node: 1, 'LeftChild[node]': 2, 'RightChild[node]': 3, 'Val[node]': 'A' }, activeNode: 1, visitedNodes: [], output: [], explanation: 'Check if node = 0. It is false.' },
      { lineNo: 5, vars: { node: 2, 'LeftChild[node]': 4, 'RightChild[node]': 5, 'Val[node]': 'B' }, activeNode: 2, visitedNodes: [], output: [], explanation: 'Traverse left child of node 1. Call traverse_inorder(2) for node 2 (value "B").' },
      { lineNo: 2, vars: { node: 2, 'LeftChild[node]': 4, 'RightChild[node]': 5, 'Val[node]': 'B' }, activeNode: 2, visitedNodes: [], output: [], explanation: 'Check if node = 0. It is false.' },
      { lineNo: 5, vars: { node: 4, 'LeftChild[node]': 0, 'RightChild[node]': 0, 'Val[node]': 'D' }, activeNode: 4, visitedNodes: [], output: [], explanation: 'Traverse left child of node 2. Call traverse_inorder(4) for node 4 (value "D").' },
      { lineNo: 2, vars: { node: 4, 'LeftChild[node]': 0, 'RightChild[node]': 0, 'Val[node]': 'D' }, activeNode: 4, visitedNodes: [], output: [], explanation: 'Check if node = 0. It is false.' },
      { lineNo: 5, vars: { node: 0, 'LeftChild[node]': '-', 'RightChild[node]': '-', 'Val[node]': '-' }, activeNode: 0, visitedNodes: [], output: [], explanation: 'Traverse left child of node 4. Call traverse_inorder(0).' },
      { lineNo: 2, vars: { node: 0, 'LeftChild[node]': '-', 'RightChild[node]': '-', 'Val[node]': '-' }, activeNode: 0, visitedNodes: [], output: [], explanation: 'Check if node = 0. It is true, hit base case.' },
      { lineNo: 3, vars: { node: 0, 'LeftChild[node]': '-', 'RightChild[node]': '-', 'Val[node]': '-' }, activeNode: 0, visitedNodes: [], output: [], explanation: 'Return immediately to node 4.' },
      { lineNo: 6, vars: { node: 4, 'LeftChild[node]': 0, 'RightChild[node]': 0, 'Val[node]': 'D' }, activeNode: 4, visitedNodes: [4], output: ['D'], explanation: 'Visit node 4 (value "D") and print it. Current output: [D].' },
      { lineNo: 7, vars: { node: 0, 'LeftChild[node]': '-', 'RightChild[node]': '-', 'Val[node]': '-' }, activeNode: 0, visitedNodes: [4], output: ['D'], explanation: 'Traverse right child of node 4. Call traverse_inorder(0).' },
      { lineNo: 2, vars: { node: 0, 'LeftChild[node]': '-', 'RightChild[node]': '-', 'Val[node]': '-' }, activeNode: 0, visitedNodes: [4], output: ['D'], explanation: 'Check if node = 0. It is true, return.' },
      { lineNo: 8, vars: { node: 4, 'LeftChild[node]': 0, 'RightChild[node]': 0, 'Val[node]': 'D' }, activeNode: 4, visitedNodes: [4], output: ['D'], explanation: 'Finished node 4. Return to caller traverse_inorder(2).' },
      { lineNo: 6, vars: { node: 2, 'LeftChild[node]': 4, 'RightChild[node]': 5, 'Val[node]': 'B' }, activeNode: 2, visitedNodes: [4, 2], output: ['D', 'B'], explanation: 'Visit node 2 (value "B") and print it. Current output: [D, B].' },
      { lineNo: 7, vars: { node: 5, 'LeftChild[node]': 0, 'RightChild[node]': 0, 'Val[node]': 'E' }, activeNode: 5, visitedNodes: [4, 2], output: ['D', 'B'], explanation: 'Traverse right child of node 2. Call traverse_inorder(5) for node 5 (value "E").' },
      { lineNo: 2, vars: { node: 5, 'LeftChild[node]': 0, 'RightChild[node]': 0, 'Val[node]': 'E' }, activeNode: 5, visitedNodes: [4, 2], output: ['D', 'B'], explanation: 'Check if node = 0. It is false.' },
      { lineNo: 5, vars: { node: 0, 'LeftChild[node]': '-', 'RightChild[node]': '-', 'Val[node]': '-' }, activeNode: 0, visitedNodes: [4, 2], output: ['D', 'B'], explanation: 'Traverse left child of node 5. Call traverse_inorder(0), returns immediately.' },
      { lineNo: 6, vars: { node: 5, 'LeftChild[node]': 0, 'RightChild[node]': 0, 'Val[node]': 'E' }, activeNode: 5, visitedNodes: [4, 2, 5], output: ['D', 'B', 'E'], explanation: 'Visit node 5 (value "E") and print it. Current output: [D, B, E].' },
      { lineNo: 7, vars: { node: 0, 'LeftChild[node]': '-', 'RightChild[node]': '-', 'Val[node]': '-' }, activeNode: 0, visitedNodes: [4, 2, 5], output: ['D', 'B', 'E'], explanation: 'Traverse right child of node 5. Call traverse_inorder(0), returns.' },
      { lineNo: 8, vars: { node: 5, 'LeftChild[node]': 0, 'RightChild[node]': 0, 'Val[node]': 'E' }, activeNode: 5, visitedNodes: [4, 2, 5], output: ['D', 'B', 'E'], explanation: 'Finished node 5. Return to node 2, which has finished, and then returns to node 1.' },
      { lineNo: 6, vars: { node: 1, 'LeftChild[node]': 2, 'RightChild[node]': 3, 'Val[node]': 'A' }, activeNode: 1, visitedNodes: [4, 2, 5, 1], output: ['D', 'B', 'E', 'A'], explanation: 'Visit root node 1 (value "A") and print it. Current output: [D, B, E, A].' },
      { lineNo: 7, vars: { node: 3, 'LeftChild[node]': 0, 'RightChild[node]': 0, 'Val[node]': 'C' }, activeNode: 3, visitedNodes: [4, 2, 5, 1], output: ['D', 'B', 'E', 'A'], explanation: 'Traverse right child of node 1. Call traverse_inorder(3) for node 3 (value "C").' },
      { lineNo: 2, vars: { node: 3, 'LeftChild[node]': 0, 'RightChild[node]': 0, 'Val[node]': 'C' }, activeNode: 3, visitedNodes: [4, 2, 5, 1], output: ['D', 'B', 'E', 'A'], explanation: 'Check if node = 0. It is false.' },
      { lineNo: 5, vars: { node: 0, 'LeftChild[node]': '-', 'RightChild[node]': '-', 'Val[node]': '-' }, activeNode: 0, visitedNodes: [4, 2, 5, 1], output: ['D', 'B', 'E', 'A'], explanation: 'Traverse left child of node 3. Call traverse_inorder(0), returns.' },
      { lineNo: 6, vars: { node: 3, 'LeftChild[node]': 0, 'RightChild[node]': 0, 'Val[node]': 'C' }, activeNode: 3, visitedNodes: [4, 2, 5, 1, 3], output: ['D', 'B', 'E', 'A', 'C'], explanation: 'Visit node 3 (value "C") and print it. Current output: [D, B, E, A, C].' },
      { lineNo: 7, vars: { node: 0, 'LeftChild[node]': '-', 'RightChild[node]': '-', 'Val[node]': '-' }, activeNode: 0, visitedNodes: [4, 2, 5, 1, 3], output: ['D', 'B', 'E', 'A', 'C'], explanation: 'Traverse right child of node 3. Call traverse_inorder(0), returns.' },
      { lineNo: 8, vars: { node: 3, 'LeftChild[node]': 0, 'RightChild[node]': 0, 'Val[node]': 'C' }, activeNode: 3, visitedNodes: [4, 2, 5, 1, 3], output: ['D', 'B', 'E', 'A', 'C'], explanation: 'Finished node 3. Return to caller, finishing the traversal. Result: D B E A C.' }
    ]
  },
  StackOps: {
    id: 'StackOps',
    name: 'Stack Push/Pop (1-Based Arrays)',
    variables: ['operation', 'top', 'stack[1]', 'stack[2]', 'stack[3]', 'val'],
    pseudocode: `procedure: push(integer: val)
  if (top ≥ 5) then
    print("Stack Overflow")
    return
  endif
  top ← top + 1
  stack[top] ← val
endprocedure

integer: pop()
  if (top = 0) then
    print("Stack Underflow")
    return -1
  endif
  val ← stack[top]
  top ← top - 1
  return val`,
    steps: [
      { lineNo: 1, vars: { operation: 'Initial', top: 0, 'stack[1]': '-', 'stack[2]': '-', 'stack[3]': '-', val: '-' }, topPtr: 0, stackContent: ['-', '-', '-', '-', '-'], explanation: 'Initialize empty stack with stack pointer top = 0. Capacity is 5.' },
      { lineNo: 1, vars: { operation: 'push(10)', top: 0, 'stack[1]': '-', 'stack[2]': '-', 'stack[3]': '-', val: '-' }, topPtr: 0, stackContent: ['-', '-', '-', '-', '-'], explanation: 'Invoke push(10) to append value 10 onto the stack.' },
      { lineNo: 2, vars: { operation: 'push(10)', top: 0, 'stack[1]': '-', 'stack[2]': '-', 'stack[3]': '-', val: '-' }, topPtr: 0, stackContent: ['-', '-', '-', '-', '-'], explanation: 'Check top ≥ 5 (0 ≥ 5). False, stack is not overflowed.' },
      { lineNo: 5, vars: { operation: 'push(10)', top: 1, 'stack[1]': '-', 'stack[2]': '-', 'stack[3]': '-', val: '-' }, topPtr: 1, stackContent: ['-', '-', '-', '-', '-'], explanation: 'Increment stack pointer top = top + 1 = 1 (1-based pointer).' },
      { lineNo: 6, vars: { operation: 'push(10)', top: 1, 'stack[1]': 10, 'stack[2]': '-', 'stack[3]': '-', val: '-' }, topPtr: 1, stackContent: [10, '-', '-', '-', '-'], explanation: 'Assign stack[top] ← val, placing 10 into stack[1].' },
      { lineNo: 1, vars: { operation: 'push(20)', top: 1, 'stack[1]': 10, 'stack[2]': '-', 'stack[3]': '-', val: '-' }, topPtr: 1, stackContent: [10, '-', '-', '-', '-'], explanation: 'Invoke push(20) to append value 20.' },
      { lineNo: 2, vars: { operation: 'push(20)', top: 1, 'stack[1]': 10, 'stack[2]': '-', 'stack[3]': '-', val: '-' }, topPtr: 1, stackContent: [10, '-', '-', '-', '-'], explanation: 'Check top ≥ 5 (1 ≥ 5). False, space is available.' },
      { lineNo: 5, vars: { operation: 'push(20)', top: 2, 'stack[1]': 10, 'stack[2]': '-', 'stack[3]': '-', val: '-' }, topPtr: 2, stackContent: [10, '-', '-', '-', '-'], explanation: 'Increment stack pointer top = top + 1 = 2.' },
      { lineNo: 6, vars: { operation: 'push(20)', top: 2, 'stack[1]': 10, 'stack[2]': 20, 'stack[3]': '-', val: '-' }, topPtr: 2, stackContent: [10, 20, '-', '-', '-'], explanation: 'Assign stack[2] ← 20. Current stack contains [10, 20].' },
      { lineNo: 9, vars: { operation: 'pop()', top: 2, 'stack[1]': 10, 'stack[2]': 20, 'stack[3]': '-', val: '-' }, topPtr: 2, stackContent: [10, 20, '-', '-', '-'], explanation: 'Invoke pop() to remove top-most element.' },
      { lineNo: 10, vars: { operation: 'pop()', top: 2, 'stack[1]': 10, 'stack[2]': 20, 'stack[3]': '-', val: '-' }, topPtr: 2, stackContent: [10, 20, '-', '-', '-'], explanation: 'Check top = 0. False, stack is not empty.' },
      { lineNo: 13, vars: { operation: 'pop()', top: 2, 'stack[1]': 10, 'stack[2]': 20, 'stack[3]': '-', val: 20 }, topPtr: 2, stackContent: [10, 20, '-', '-', '-'], explanation: 'Read value from stack[top] (stack[2]) into local variable val (20).' },
      { lineNo: 14, vars: { operation: 'pop()', top: 1, 'stack[1]': 10, 'stack[2]': 20, 'stack[3]': '-', val: 20 }, topPtr: 1, stackContent: [10, 20, '-', '-', '-'], explanation: 'Decrement pointer top = top - 1 = 1. Slot 2 is conceptually freed.' },
      { lineNo: 15, vars: { operation: 'pop()', top: 1, 'stack[1]': 10, 'stack[2]': 20, 'stack[3]': '-', val: 20 }, topPtr: 1, stackContent: [10, 20, '-', '-', '-'], explanation: 'Return val (20).' },
      { lineNo: 1, vars: { operation: 'push(30)', top: 1, 'stack[1]': 10, 'stack[2]': 20, 'stack[3]': '-', val: '-' }, topPtr: 1, stackContent: [10, 20, '-', '-', '-'], explanation: 'Invoke push(30) to append value 30.' },
      { lineNo: 2, vars: { operation: 'push(30)', top: 1, 'stack[1]': 10, 'stack[2]': 20, 'stack[3]': '-', val: '-' }, topPtr: 1, stackContent: [10, 20, '-', '-', '-'], explanation: 'Check top ≥ 5 (1 ≥ 5). False, space is available.' },
      { lineNo: 5, vars: { operation: 'push(30)', top: 2, 'stack[1]': 10, 'stack[2]': 20, 'stack[3]': '-', val: '-' }, topPtr: 2, stackContent: [10, 20, '-', '-', '-'], explanation: 'Increment stack pointer top = 2.' },
      { lineNo: 6, vars: { operation: 'push(30)', top: 2, 'stack[1]': 10, 'stack[2]': 30, 'stack[3]': '-', val: '-' }, topPtr: 2, stackContent: [10, 30, '-', '-', '-'], explanation: 'Assign stack[2] ← 30, overwriting the old popped value. Current stack is [10, 30].' }
    ]
  },
  QueueOps: {
    id: 'QueueOps',
    name: 'Circular Queue Operations',
    variables: ['operation', 'head', 'tail', 'count', 'queue[head]', 'queue[tail]'],
    pseudocode: `procedure: enqueue(integer: val)
  if (count = 5) then
    print("Queue Full")
    return
  endif
  queue[tail] ← val
  tail ← (tail mod 5) + 1
  count ← count + 1
endprocedure

integer: dequeue()
  if (count = 0) then
    print("Queue Empty")
    return -1
  endif
  val ← queue[head]
  head ← (head mod 5) + 1
  count ← count - 1
  return val`,
    steps: [
      { lineNo: 1, vars: { operation: 'Initial', head: 1, tail: 1, count: 0, 'queue[head]': '-', 'queue[tail]': '-' }, headPtr: 1, tailPtr: 1, queueContent: ['-', '-', '-', '-', '-'], explanation: 'Initialize circular queue. head and tail point to index 1. count is 0.' },
      { lineNo: 1, vars: { operation: 'enqueue(10)', head: 1, tail: 1, count: 0, 'queue[head]': '-', 'queue[tail]': '-' }, headPtr: 1, tailPtr: 1, queueContent: ['-', '-', '-', '-', '-'], explanation: 'Invoke enqueue(10) to add 10 to queue.' },
      { lineNo: 2, vars: { operation: 'enqueue(10)', head: 1, tail: 1, count: 0, 'queue[head]': '-', 'queue[tail]': '-' }, headPtr: 1, tailPtr: 1, queueContent: ['-', '-', '-', '-', '-'], explanation: 'Check count = 5 (0 = 5). False, queue is not full.' },
      { lineNo: 5, vars: { operation: 'enqueue(10)', head: 1, tail: 1, count: 0, 'queue[head]': '-', 'queue[tail]': 10 }, headPtr: 1, tailPtr: 1, queueContent: [10, '-', '-', '-', '-'], explanation: 'Assign queue[tail] ← 10, storing 10 at queue[1].' },
      { lineNo: 6, vars: { operation: 'enqueue(10)', head: 1, tail: 2, count: 0, 'queue[head]': 10, 'queue[tail]': '-' }, headPtr: 1, tailPtr: 2, queueContent: [10, '-', '-', '-', '-'], explanation: 'Advance tail pointer: tail = (tail mod 5) + 1 = 2 (circular increment).' },
      { lineNo: 7, vars: { operation: 'enqueue(10)', head: 1, tail: 2, count: 1, 'queue[head]': 10, 'queue[tail]': '-' }, headPtr: 1, tailPtr: 2, queueContent: [10, '-', '-', '-', '-'], explanation: 'Increment element count = count + 1 = 1.' },
      { lineNo: 1, vars: { operation: 'enqueue(20)', head: 1, tail: 2, count: 1, 'queue[head]': 10, 'queue[tail]': '-' }, headPtr: 1, tailPtr: 2, queueContent: [10, '-', '-', '-', '-'], explanation: 'Invoke enqueue(20) to add 20.' },
      { lineNo: 2, vars: { operation: 'enqueue(20)', head: 1, tail: 2, count: 1, 'queue[head]': 10, 'queue[tail]': '-' }, headPtr: 1, tailPtr: 2, queueContent: [10, '-', '-', '-', '-'], explanation: 'Check if count = 5. False, queue has space.' },
      { lineNo: 5, vars: { operation: 'enqueue(20)', head: 1, tail: 2, count: 1, 'queue[head]': 10, 'queue[tail]': 20 }, headPtr: 1, tailPtr: 2, queueContent: [10, 20, '-', '-', '-'], explanation: 'Assign queue[2] ← 20.' },
      { lineNo: 6, vars: { operation: 'enqueue(20)', head: 1, tail: 3, count: 1, 'queue[head]': 10, 'queue[tail]': '-' }, headPtr: 1, tailPtr: 3, queueContent: [10, 20, '-', '-', '-'], explanation: 'Advance tail: tail = (2 mod 5) + 1 = 3.' },
      { lineNo: 7, vars: { operation: 'enqueue(20)', head: 1, tail: 3, count: 2, 'queue[head]': 10, 'queue[tail]': '-' }, headPtr: 1, tailPtr: 3, queueContent: [10, 20, '-', '-', '-'], explanation: 'Increment count to 2.' },
      { lineNo: 10, vars: { operation: 'dequeue()', head: 1, tail: 3, count: 2, 'queue[head]': 10, 'queue[tail]': '-' }, headPtr: 1, tailPtr: 3, queueContent: [10, 20, '-', '-', '-'], explanation: 'Invoke dequeue() to pull the oldest item.' },
      { lineNo: 11, vars: { operation: 'dequeue()', head: 1, tail: 3, count: 2, 'queue[head]': 10, 'queue[tail]': '-' }, headPtr: 1, tailPtr: 3, queueContent: [10, 20, '-', '-', '-'], explanation: 'Check count = 0. False, queue is not empty.' },
      { lineNo: 14, vars: { operation: 'dequeue()', head: 1, tail: 3, count: 2, 'queue[head]': 10, 'queue[tail]': '-', val: 10 }, headPtr: 1, tailPtr: 3, queueContent: [10, 20, '-', '-', '-'], explanation: 'Assign val ← queue[head] (queue[1]), capturing 10.' },
      { lineNo: 15, vars: { operation: 'dequeue()', head: 2, tail: 3, count: 2, 'queue[head]': 20, 'queue[tail]': '-', val: 10 }, headPtr: 2, tailPtr: 3, queueContent: [10, 20, '-', '-', '-'], explanation: 'Advance head pointer: head = (head mod 5) + 1 = 2.' },
      { lineNo: 16, vars: { operation: 'dequeue()', head: 2, tail: 3, count: 1, 'queue[head]': 20, 'queue[tail]': '-', val: 10 }, headPtr: 2, tailPtr: 3, queueContent: [10, 20, '-', '-', '-'], explanation: 'Decrement element count to 1.' },
      { lineNo: 17, vars: { operation: 'dequeue()', head: 2, tail: 3, count: 1, 'queue[head]': 20, 'queue[tail]': '-', val: 10 }, headPtr: 2, tailPtr: 3, queueContent: [10, 20, '-', '-', '-'], explanation: 'Return val (10).' }
    ]
  },
  BubbleSort: {
    id: 'BubbleSort',
    name: 'Bubble Sort Algorithm',
    variables: ['i', 'j', 'A[j-1]', 'A[j]', 'temp'],
    pseudocode: `procedure: bubble_sort(integer []: A, integer: N)
  integer: i, j, temp
  for (i from 1 to N - 1)
    for (j from N down to i + 1)
      if (A[j-1] > A[j]) then
        temp ← A[j-1]
        A[j-1] ← A[j]
        A[j] ← temp
      endif
    endfor
  endfor
endprocedure`,
    steps: [
      { lineNo: 1, vars: { i: '-', j: '-', 'A[j-1]': '-', 'A[j]': '-', temp: '-' }, arrayState: [5, 3, 8, 2], explanation: 'Bubble Sort starts. Target array: [5, 3, 8, 2] (N=4, 1-based indexing).' },
      { lineNo: 3, vars: { i: 1, j: '-', 'A[j-1]': '-', 'A[j]': '-', temp: '-' }, arrayState: [5, 3, 8, 2], explanation: 'Outer loop starts: i = 1. We will bubble the smallest item to index 1.' },
      { lineNo: 4, vars: { i: 1, j: 4, 'A[j-1]': 8, 'A[j]': 2, temp: '-' }, arrayState: [5, 3, 8, 2], highlightedIndexes: [2, 3], explanation: 'Inner loop starts at j = 4. Compare A[3] (8) and A[4] (2).' },
      { lineNo: 5, vars: { i: 1, j: 4, 'A[j-1]': 8, 'A[j]': 2, temp: '-' }, arrayState: [5, 3, 8, 2], highlightedIndexes: [2, 3], explanation: 'Verify if A[3] (8) > A[4] (2). It is true, they are out of order.' },
      { lineNo: 6, vars: { i: 1, j: 4, 'A[j-1]': 8, 'A[j]': 2, temp: 8 }, arrayState: [5, 3, 8, 2], highlightedIndexes: [2, 3], explanation: 'Set temp ← A[3] (8).' },
      { lineNo: 7, vars: { i: 1, j: 4, 'A[j-1]': 2, 'A[j]': 2, temp: 8 }, arrayState: [5, 3, 2, 2], highlightedIndexes: [2, 3], explanation: 'Assign A[3] ← A[4] (2).' },
      { lineNo: 8, vars: { i: 1, j: 4, 'A[j-1]': 2, 'A[j]': 8, temp: 8 }, arrayState: [5, 3, 2, 8], highlightedIndexes: [2, 3], explanation: 'Assign A[4] ← temp (8). Value 2 has bubbled one position left.' },
      { lineNo: 4, vars: { i: 1, j: 3, 'A[j-1]': 3, 'A[j]': 2, temp: '-' }, arrayState: [5, 3, 2, 8], highlightedIndexes: [1, 2], explanation: 'Decrement j to 3. Compare A[2] (3) and A[3] (2).' },
      { lineNo: 5, vars: { i: 1, j: 3, 'A[j-1]': 3, 'A[j]': 2, temp: '-' }, arrayState: [5, 3, 2, 8], highlightedIndexes: [1, 2], explanation: 'Verify if A[2] (3) > A[3] (2). True.' },
      { lineNo: 6, vars: { i: 1, j: 3, 'A[j-1]': 3, 'A[j]': 2, temp: 3 }, arrayState: [5, 3, 2, 8], highlightedIndexes: [1, 2], explanation: 'Set temp ← 3.' },
      { lineNo: 7, vars: { i: 1, j: 3, 'A[j-1]': 2, 'A[j]': 2, temp: 3 }, arrayState: [5, 2, 2, 8], highlightedIndexes: [1, 2], explanation: 'Assign A[2] ← A[3] (2).' },
      { lineNo: 8, vars: { i: 1, j: 3, 'A[j-1]': 2, 'A[j]': 3, temp: 3 }, arrayState: [5, 2, 3, 8], highlightedIndexes: [1, 2], explanation: 'Assign A[3] ← temp (3). Value 2 continues bubbling left.' },
      { lineNo: 4, vars: { i: 1, j: 2, 'A[j-1]': 5, 'A[j]': 2, temp: '-' }, arrayState: [5, 2, 3, 8], highlightedIndexes: [0, 1], explanation: 'Decrement j to 2. Compare A[1] (5) and A[2] (2).' },
      { lineNo: 5, vars: { i: 1, j: 2, 'A[j-1]': 5, 'A[j]': 2, temp: '-' }, arrayState: [5, 2, 3, 8], highlightedIndexes: [0, 1], explanation: 'Verify if A[1] (5) > A[2] (2). True.' },
      { lineNo: 6, vars: { i: 1, j: 2, 'A[j-1]': 5, 'A[j]': 2, temp: 5 }, arrayState: [5, 2, 3, 8], highlightedIndexes: [0, 1], explanation: 'Set temp ← 5.' },
      { lineNo: 7, vars: { i: 1, j: 2, 'A[j-1]': 2, 'A[j]': 2, temp: 5 }, arrayState: [2, 2, 3, 8], highlightedIndexes: [0, 1], explanation: 'Assign A[1] ← A[2] (2).' },
      { lineNo: 8, vars: { i: 1, j: 2, 'A[j-1]': 2, 'A[j]': 5, temp: 5 }, arrayState: [2, 5, 3, 8], highlightedIndexes: [0, 1], explanation: 'Assign A[2] ← temp (5). Pass 1 complete: index 1 has its final sorted value (2).' },
      { lineNo: 3, vars: { i: 2, j: '-', 'A[j-1]': '-', 'A[j]': '-', temp: '-' }, arrayState: [2, 5, 3, 8], explanation: 'Outer loop: i = 2. We will now bubble the next smallest element to index 2.' },
      { lineNo: 4, vars: { i: 2, j: 4, 'A[j-1]': 3, 'A[j]': 8, temp: '-' }, arrayState: [2, 5, 3, 8], highlightedIndexes: [2, 3], explanation: 'Inner loop starts at j = 4. Compare A[3] (3) and A[4] (8).' },
      { lineNo: 5, vars: { i: 2, j: 4, 'A[j-1]': 3, 'A[j]': 8, temp: '-' }, arrayState: [2, 5, 3, 8], highlightedIndexes: [2, 3], explanation: 'Check A[3] > A[4] (3 > 8). False, they are in correct order.' },
      { lineNo: 4, vars: { i: 2, j: 3, 'A[j-1]': 5, 'A[j]': 3, temp: '-' }, arrayState: [2, 5, 3, 8], highlightedIndexes: [1, 2], explanation: 'Decrement j to 3. Compare A[2] (5) and A[3] (3).' },
      { lineNo: 5, vars: { i: 2, j: 3, 'A[j-1]': 5, 'A[j]': 3, temp: '-' }, arrayState: [2, 5, 3, 8], highlightedIndexes: [1, 2], explanation: 'Check A[2] > A[3] (5 > 3). True.' },
      { lineNo: 6, vars: { i: 2, j: 3, 'A[j-1]': 5, 'A[j]': 3, temp: 5 }, arrayState: [2, 5, 3, 8], highlightedIndexes: [1, 2], explanation: 'Set temp ← 5.' },
      { lineNo: 7, vars: { i: 2, j: 3, 'A[j-1]': 3, 'A[j]': 3, temp: 5 }, arrayState: [2, 3, 3, 8], highlightedIndexes: [1, 2], explanation: 'Assign A[2] ← A[3] (3).' },
      { lineNo: 8, vars: { i: 2, j: 3, 'A[j-1]': 3, 'A[j]': 5, temp: 5 }, arrayState: [2, 3, 5, 8], highlightedIndexes: [1, 2], explanation: 'Assign A[3] ← temp (5). Pass 2 completes. index 2 is sorted.' },
      { lineNo: 3, vars: { i: 3, j: '-', 'A[j-1]': '-', 'A[j]': '-', temp: '-' }, arrayState: [2, 3, 5, 8], explanation: 'Outer loop: i = 3. Search for third smallest element.' },
      { lineNo: 4, vars: { i: 3, j: 4, 'A[j-1]': 5, 'A[j]': 8, temp: '-' }, arrayState: [2, 3, 5, 8], highlightedIndexes: [2, 3], explanation: 'Inner loop starts: j = 4. Compare A[3] (5) and A[4] (8).' },
      { lineNo: 5, vars: { i: 3, j: 4, 'A[j-1]': 5, 'A[j]': 8, temp: '-' }, arrayState: [2, 3, 5, 8], highlightedIndexes: [2, 3], explanation: 'Check A[3] > A[4] (5 > 8). False.' },
      { lineNo: 12, vars: { i: 3, j: '-', 'A[j-1]': '-', 'A[j]': '-', temp: '-' }, arrayState: [2, 3, 5, 8], explanation: 'Sorting is completed. Resulting sorted array: [2, 3, 5, 8].' }
    ]
  }
};

interface AlgorithmWalkthroughProps {
  algorithmId: string;
}

export const AlgorithmWalkthrough: React.FC<AlgorithmWalkthroughProps> = ({ algorithmId }) => {
  const algo = ALGORITHMS[algorithmId];
  const [stepIdx, setStepIdx] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    setStepIdx(0);
    setIsPlaying(false);
  }, [algorithmId]);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setStepIdx((prev) => {
          if (prev >= algo.steps.length - 1) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, 2000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, algo]);

  if (!algo) {
    return (
      <div className="p-4 bg-rose-500 border border-rose-600 text-white rounded-lg flex items-center gap-2 text-xs font-semibold">
        <HelpCircle className="w-4 h-4" />
        <span>Algorithm Walkthrough "{algorithmId}" not found in register.</span>
      </div>
    );
  }

  const currentStep = algo.steps[stepIdx];

  const handleNext = () => {
    setStepIdx((prev) => Math.min(prev + 1, algo.steps.length - 1));
  };

  const handlePrev = () => {
    setStepIdx((prev) => Math.max(prev - 1, 0));
  };

  const handleReset = () => {
    setStepIdx(0);
    setIsPlaying(false);
  };

  const codeLines = algo.pseudocode.split('\n');

  // Render helpers for specific algorithm data structures
  const renderVisualizer = () => {
    switch (algo.id) {
      case 'EuclideanGCD': {
        const aVal = currentStep.vars.a;
        const bVal = currentStep.vars.b;
        const rVal = currentStep.vars.r;
        const aNumeric = typeof aVal === 'number' ? aVal : 0;
        const bNumeric = typeof bVal === 'number' ? bVal : 0;
        const total = Math.max(aNumeric + bNumeric, 1);
        const aPct = (aNumeric / total) * 100;
        const bPct = (bNumeric / total) * 100;
        
        return (
          <div className="space-y-4">
            <span className="text-[10px] font-bold text-[var(--text-secondary)] uppercase block">Visual Euclidean Divisor Balance</span>
            <div className="flex flex-col gap-3.5 p-3 rounded-lg bg-[var(--bg-sidebar)] border border-[var(--border-color)]">
              {/* Variable A bar */}
              <div className="space-y-1">
                <div className="flex justify-between text-[11px] font-mono">
                  <span className="text-[var(--accent-cyan)] font-bold">Variable a: {aVal}</span>
                  {aNumeric > 0 && <span className="text-[var(--text-muted)]">weight</span>}
                </div>
                <div className="h-6 w-full bg-slate-900 rounded overflow-hidden flex">
                  {aNumeric > 0 ? (
                    <div 
                      className="bg-[var(--accent-cyan)] h-full transition-all duration-505 flex items-center justify-center text-[10px] font-bold text-slate-950" 
                      style={{ width: `${Math.max(aPct, 15)}%` }}
                    >
                      {aVal}
                    </div>
                  ) : (
                    <div className="w-full h-full flex items-center px-2 text-[10px] text-[var(--text-muted)] italic">uninitialized</div>
                  )}
                </div>
              </div>
              
              {/* Variable B bar */}
              <div className="space-y-1">
                <div className="flex justify-between text-[11px] font-mono">
                  <span className="text-[var(--accent-emerald)] font-bold">Variable b: {bVal}</span>
                  {bNumeric > 0 && <span className="text-[var(--text-muted)]">divisor</span>}
                </div>
                <div className="h-6 w-full bg-slate-900 rounded overflow-hidden flex">
                  {bNumeric > 0 ? (
                    <div 
                      className="bg-[var(--accent-emerald)] h-full transition-all duration-505 flex items-center justify-center text-[10px] font-bold text-slate-950" 
                      style={{ width: `${Math.max(bPct, 15)}%` }}
                    >
                      {bVal}
                    </div>
                  ) : (
                    <div className="w-full h-full flex items-center px-2 text-[10px] text-[var(--text-muted)] italic">-</div>
                  )}
                </div>
              </div>

              {/* Modulus calculation visualization */}
              <div className="flex justify-between items-center text-[11px] font-mono border-t border-[var(--border-color)]/50 pt-2 text-[var(--text-muted)]">
                <span>Modulus Operation:</span>
                <span className="text-[var(--accent-amber)] font-bold">
                  {aNumeric} mod {bNumeric} = {rVal}
                </span>
              </div>
            </div>
          </div>
        );
      }

      case 'BinarySearch': {
        const arr = currentStep.arrayState || [];
        const left = typeof currentStep.vars.left === 'number' ? currentStep.vars.left : -1;
        const right = typeof currentStep.vars.right === 'number' ? currentStep.vars.right : -1;
        const mid = typeof currentStep.vars.mid === 'number' ? currentStep.vars.mid : -1;
        const target = typeof currentStep.vars.target === 'number' ? currentStep.vars.target : -1;

        return (
          <div className="space-y-4">
            <span className="text-[10px] font-bold text-[var(--text-secondary)] uppercase block">1-Based Array Search Boundaries</span>
            <div className="flex flex-wrap gap-2.5 p-3 rounded-lg bg-[var(--bg-sidebar)] border border-[var(--border-color)] justify-center">
              {arr.map((val, idx) => {
                const oneBasedIdx = idx + 1;
                const isDiscarded = (left !== -1 && oneBasedIdx < left) || (right !== -1 && oneBasedIdx > right);
                const isMid = oneBasedIdx === mid;
                const isTarget = val === target && currentStep.lineNo === 8;
                
                let bgClass = 'bg-[var(--bg-card)] border-[var(--border-color)] text-[var(--text-primary)]';
                if (isDiscarded) bgClass = 'bg-slate-950 border-slate-900 text-slate-800 opacity-30 line-through';
                else if (isTarget) bgClass = 'bg-[var(--accent-emerald)]/20 border-[var(--accent-emerald)] text-[var(--accent-emerald)] scale-105 ring-2 ring-[var(--accent-emerald)]/30';
                else if (isMid) bgClass = 'bg-[var(--accent-cyan)]/25 border-[var(--accent-cyan)] text-[var(--accent-cyan)] font-bold';

                return (
                  <div key={idx} className="flex flex-col items-center gap-1">
                    <span className="text-[9px] font-mono text-[var(--text-muted)]">[{oneBasedIdx}]</span>
                    <div className={`w-10 h-10 rounded border flex items-center justify-center font-mono text-xs font-bold transition-all duration-300 ${bgClass}`}>
                      {val}
                    </div>
                    <div className="h-4 text-[9px] font-bold font-mono">
                      {oneBasedIdx === left && <span className="text-amber-500">L</span>}
                      {oneBasedIdx === right && <span className="text-rose-500">R</span>}
                      {oneBasedIdx === mid && <span className="text-[var(--accent-cyan)]">M</span>}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex gap-4 justify-center text-[10px] font-mono text-[var(--text-muted)]">
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded bg-amber-500"></span> Left Boundary (L)</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded bg-[var(--accent-cyan)]"></span> Midpoint (M)</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded bg-rose-500"></span> Right Boundary (R)</span>
            </div>
          </div>
        );
      }

      case 'TreeTraversal': {
        const active = currentStep.activeNode || 0;
        const visited = currentStep.visitedNodes || [];
        const out = currentStep.output || [];

        return (
          <div className="space-y-4">
            <span className="text-[10px] font-bold text-[var(--text-secondary)] uppercase block">Binary Tree In-Order Visualizer</span>
            
            {/* SVG Tree Representation */}
            <div className="p-3 rounded-lg bg-[var(--bg-sidebar)] border border-[var(--border-color)] flex justify-center">
              <svg className="w-full max-w-[280px]" viewBox="0 0 200 160" height="150">
                {/* Connections */}
                <line x1="100" y1="20" x2="60" y2="70" stroke="var(--border-color)" strokeWidth="1.5" />
                <line x1="100" y1="20" x2="140" y2="70" stroke="var(--border-color)" strokeWidth="1.5" />
                <line x1="60" y1="70" x2="35" y2="120" stroke="var(--border-color)" strokeWidth="1.5" />
                <line x1="60" y1="70" x2="85" y2="120" stroke="var(--border-color)" strokeWidth="1.5" />

                {/* Node 1 (Root A) */}
                <circle 
                  cx="100" cy="20" r="14" 
                  fill={active === 1 ? 'rgba(6,182,212,0.2)' : visited.includes(1) ? 'rgba(16,185,129,0.1)' : 'var(--bg-card)'} 
                  stroke={active === 1 ? 'var(--accent-cyan)' : visited.includes(1) ? 'var(--accent-emerald)' : 'var(--border-color)'} 
                  strokeWidth="2" 
                />
                <text x="100" y="24" textAnchor="middle" fill="var(--text-primary)" fontSize="10" fontWeight="bold">A</text>

                {/* Node 2 (B) */}
                <circle 
                  cx="60" cy="70" r="14" 
                  fill={active === 2 ? 'rgba(6,182,212,0.2)' : visited.includes(2) ? 'rgba(16,185,129,0.1)' : 'var(--bg-card)'} 
                  stroke={active === 2 ? 'var(--accent-cyan)' : visited.includes(2) ? 'var(--accent-emerald)' : 'var(--border-color)'} 
                  strokeWidth="2" 
                />
                <text x="60" y="74" textAnchor="middle" fill="var(--text-primary)" fontSize="10" fontWeight="bold">B</text>

                {/* Node 3 (C) */}
                <circle 
                  cx="140" cy="70" r="14" 
                  fill={active === 3 ? 'rgba(6,182,212,0.2)' : visited.includes(3) ? 'rgba(16,185,129,0.1)' : 'var(--bg-card)'} 
                  stroke={active === 3 ? 'var(--accent-cyan)' : visited.includes(3) ? 'var(--accent-emerald)' : 'var(--border-color)'} 
                  strokeWidth="2" 
                />
                <text x="140" y="74" textAnchor="middle" fill="var(--text-primary)" fontSize="10" fontWeight="bold">C</text>

                {/* Node 4 (D) */}
                <circle 
                  cx="35" cy="120" r="14" 
                  fill={active === 4 ? 'rgba(6,182,212,0.2)' : visited.includes(4) ? 'rgba(16,185,129,0.1)' : 'var(--bg-card)'} 
                  stroke={active === 4 ? 'var(--accent-cyan)' : visited.includes(4) ? 'var(--accent-emerald)' : 'var(--border-color)'} 
                  strokeWidth="2" 
                />
                <text x="35" y="124" textAnchor="middle" fill="var(--text-primary)" fontSize="10" fontWeight="bold">D</text>

                {/* Node 5 (E) */}
                <circle 
                  cx="85" cy="120" r="14" 
                  fill={active === 5 ? 'rgba(6,182,212,0.2)' : visited.includes(5) ? 'rgba(16,185,129,0.1)' : 'var(--bg-card)'} 
                  stroke={active === 5 ? 'var(--accent-cyan)' : visited.includes(5) ? 'var(--accent-emerald)' : 'var(--border-color)'} 
                  strokeWidth="2" 
                />
                <text x="85" y="124" textAnchor="middle" fill="var(--text-primary)" fontSize="10" fontWeight="bold">E</text>
              </svg>
            </div>

            <div className="p-2.5 rounded bg-slate-900/80 border border-slate-700/60">
              <div className="text-[10px] text-slate-400 uppercase mb-1 font-mono">In-Order Output stream</div>
              <div className="font-mono text-xs font-bold text-[var(--accent-emerald)] tracking-wider">
                {out.length > 0 ? out.join(' ➔ ') : <span className="text-slate-500 italic">no values printed yet</span>}
              </div>
            </div>
          </div>
        );
      }

      case 'StackOps': {
        const stack = currentStep.stackContent || [];
        const topVal = currentStep.topPtr ?? 0;
        
        return (
          <div className="space-y-4">
            <span className="text-[10px] font-bold text-[var(--text-secondary)] uppercase block">Stack Data Structure (Size 5)</span>
            <div className="flex gap-6 items-center justify-center p-3 rounded-lg bg-[var(--bg-sidebar)] border border-[var(--border-color)]">
              {/* Stack Tower */}
              <div className="w-[120px] flex flex-col-reverse border-b-4 border-l-2 border-r-2 border-slate-600 bg-slate-950 rounded-b p-1 gap-1">
                {[0, 1, 2, 3, 4].map((idx) => {
                  const oneBased = idx + 1;
                  const item = stack[idx];
                  const hasVal = item !== undefined && item !== '-';
                  const isTop = oneBased === topVal;

                  return (
                    <div 
                      key={idx} 
                      className={`h-8 rounded flex items-center justify-center font-mono text-xs transition-all duration-300 border ${
                        isTop 
                          ? 'bg-[var(--accent-cyan)]/20 border-[var(--accent-cyan)] text-[var(--accent-cyan)] font-extrabold'
                          : hasVal
                          ? 'bg-[var(--bg-card)] border-[var(--border-color)] text-[var(--text-primary)]'
                          : 'bg-transparent border-dashed border-slate-800/40 text-slate-800'
                      }`}
                    >
                      {hasVal ? item : ''}
                    </div>
                  );
                })}
              </div>

              {/* Stack pointer metadata */}
              <div className="space-y-1.5 font-mono text-xs">
                <div className="flex gap-2 justify-between">
                  <span className="text-[var(--text-muted)]">stack[1..5]</span>
                  <span>capacity 5</span>
                </div>
                <div className="flex gap-2 justify-between">
                  <span className="text-[var(--accent-cyan)] font-bold">top ptr:</span>
                  <span className="font-extrabold text-[var(--text-primary)]">{topVal}</span>
                </div>
                <div className="flex gap-2 justify-between border-t border-[var(--border-color)]/50 pt-1.5">
                  <span className="text-amber-500">Operation:</span>
                  <span className="font-bold text-[var(--text-primary)]">{currentStep.vars.operation}</span>
                </div>
              </div>
            </div>
          </div>
        );
      }

      case 'QueueOps': {
        const queue = currentStep.queueContent || [];
        const head = currentStep.headPtr ?? 1;
        const tail = currentStep.tailPtr ?? 1;
        const count = typeof currentStep.vars.count === 'number' ? currentStep.vars.count : 0;

        return (
          <div className="space-y-4">
            <span className="text-[10px] font-bold text-[var(--text-secondary)] uppercase block">Circular Buffer Ring (1-Based Indexes)</span>
            <div className="flex flex-col gap-3.5 p-3 rounded-lg bg-[var(--bg-sidebar)] border border-[var(--border-color)]">
              
              {/* Queue slot visualization */}
              <div className="grid grid-cols-5 gap-2 justify-center">
                {queue.map((item, idx) => {
                  const oneBased = idx + 1;
                  const isHead = oneBased === head;
                  const isTail = oneBased === tail;
                  const hasVal = item !== undefined && item !== '-';

                  return (
                    <div key={idx} className="flex flex-col items-center gap-1">
                      <span className="text-[9px] font-mono text-[var(--text-muted)]">[{oneBased}]</span>
                      <div className={`w-10 h-10 rounded border flex items-center justify-center font-mono text-xs font-bold transition-all duration-300 ${
                        isHead && isTail
                          ? 'bg-purple-500/20 border-purple-500 text-purple-400'
                          : isHead
                          ? 'bg-amber-500/20 border-amber-500 text-amber-500'
                          : isTail
                          ? 'bg-rose-500/25 border-rose-500 text-rose-500'
                          : hasVal
                          ? 'bg-[var(--bg-card)] border-[var(--border-color)] text-[var(--text-primary)]'
                          : 'bg-transparent border-slate-800 text-slate-800 border-dashed'
                      }`}>
                        {hasVal ? item : ''}
                      </div>
                      <div className="h-4 text-[9px] font-bold font-mono">
                        {isHead && <span className="text-amber-500">H</span>}
                        {isTail && <span className="text-rose-500">T</span>}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* metadata info */}
              <div className="flex justify-between items-center text-[10px] font-mono border-t border-[var(--border-color)]/50 pt-2 text-[var(--text-muted)]">
                <span>Head (H) = {head}</span>
                <span>Tail (T) = {tail}</span>
                <span className="text-[var(--text-primary)] font-bold">Count = {count}</span>
              </div>
            </div>
          </div>
        );
      }

      case 'BubbleSort': {
        const arr = currentStep.arrayState || [];
        const highIdxs = currentStep.highlightedIndexes || [];
        
        return (
          <div className="space-y-4">
            <span className="text-[10px] font-bold text-[var(--text-secondary)] uppercase block">Array Value Sorting Heights</span>
            <div className="flex flex-col gap-3 p-3 rounded-lg bg-[var(--bg-sidebar)] border border-[var(--border-color)]">
              {/* Bars chart */}
              <div className="h-[90px] flex items-end justify-around gap-2.5 border-b border-slate-700 pb-1">
                {arr.map((val, idx) => {
                  const isActiveCompare = highIdxs.includes(idx);
                  const isSortedPos = idx === 0 && currentStep.vars.i !== '-' && Number(currentStep.vars.i) > 1;
                  
                  let colorClass = 'bg-slate-700 border-slate-600';
                  if (isActiveCompare) colorClass = 'bg-[var(--accent-cyan)] border-[var(--accent-cyan)] animate-pulse';
                  else if (isSortedPos) colorClass = 'bg-[var(--accent-emerald)]/70 border-[var(--accent-emerald)]';

                  return (
                    <div key={idx} className="flex flex-col items-center w-8">
                      <span className="text-[10px] font-bold font-mono mb-1">{val}</span>
                      <div 
                        className={`w-full rounded-t border transition-all duration-300 ${colorClass}`} 
                        style={{ height: `${val * 8}px` }}
                      />
                      <span className="text-[9px] font-mono text-[var(--text-muted)] mt-1">A[{idx+1}]</span>
                    </div>
                  );
                })}
              </div>

              {/* values display */}
              <div className="flex justify-between items-center text-[10px] font-mono text-[var(--text-muted)]">
                <span>Pass Index (i) = {currentStep.vars.i}</span>
                <span>Bubble Index (j) = {currentStep.vars.j}</span>
                {currentStep.vars.temp !== '-' && (
                  <span className="text-[var(--accent-cyan)]">temp = {currentStep.vars.temp}</span>
                )}
              </div>
            </div>
          </div>
        );
      }

      default:
        return null;
    }
  };

  return (
    <div className="glass-panel p-5 space-y-4 my-6">
      
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border-color)] pb-3">
        <div>
          <h4 className="text-sm font-bold text-[var(--text-primary)] flex items-center gap-1.5">
            <span>Algorithm Step Tracer</span>
            <span className="badge badge-emerald text-[9px]">{algo.name}</span>
          </h4>
          <p className="text-xs text-[var(--text-muted)]">Interactive line-by-line tracing of 1-based ITPEC code execution.</p>
        </div>

        {/* Trace Controls */}
        <div className="flex items-center gap-2">
          <button 
            onClick={handleReset} 
            className="btn-secondary text-xs py-1 px-2.5 flex items-center gap-1"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Reset
          </button>
          
          <button 
            onClick={() => setIsPlaying(!isPlaying)} 
            className={`btn-secondary text-xs py-1 px-2.5 flex items-center gap-1 transition-all ${
              isPlaying ? 'border-[var(--accent-emerald)] text-[var(--accent-emerald)]' : ''
            }`}
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5" /> Pause
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5" /> Play Auto
              </>
            )}
          </button>

          <button 
            onClick={handlePrev} 
            disabled={stepIdx === 0} 
            className="btn-secondary p-1 rounded disabled:opacity-40"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <span className="text-xs font-mono font-bold text-[var(--text-primary)] bg-[var(--bg-sidebar)] px-2.5 py-1.5 border border-[var(--border-color)] rounded-md">
            Step {stepIdx + 1}/{algo.steps.length}
          </span>

          <button 
            onClick={handleNext} 
            disabled={stepIdx === algo.steps.length - 1} 
            className="btn-secondary p-1 rounded disabled:opacity-40"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Split Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        
        {/* Left Pane: Pseudocode with line highlight */}
        <div className="md:col-span-6 flex flex-col">
          <span className="text-[10px] font-bold text-[var(--text-secondary)] uppercase tracking-wider mb-1.5 block">ITPEC Pseudocode</span>
          <div className="bg-[var(--code-bg)] border border-[var(--border-color)] rounded-lg font-mono text-[11px] sm:text-xs overflow-hidden flex flex-col flex-1 leading-relaxed">
            <div className="p-3 overflow-x-auto flex-1 font-mono text-[var(--code-text)]">
              {codeLines.map((line, idx) => {
                const oneBasedLineNo = idx + 1;
                const isActive = oneBasedLineNo === currentStep.lineNo;
                return (
                  <div 
                    key={idx} 
                    className={`flex items-start py-0.5 px-2 rounded -mx-2 transition-all ${
                      isActive 
                        ? 'bg-[var(--accent-cyan)]/15 border-l-2 border-[var(--accent-cyan)] text-[var(--text-primary)] font-bold' 
                        : ''
                    }`}
                  >
                    <span className="w-6 text-right select-none opacity-40 text-[10px] font-mono mr-3">
                      {oneBasedLineNo}
                    </span>
                    <pre className="font-mono whitespace-pre">{line}</pre>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Pane: State Grid, Explanations and Graphics */}
        <div className="md:col-span-6 space-y-4">
          
          {/* Active variables state */}
          <div className="space-y-1.5">
            <span className="text-[10px] font-bold text-[var(--text-secondary)] uppercase block">Active Environment Scope</span>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 xl:grid-cols-4 gap-2">
              {algo.variables.map((varName) => {
                const isChanged = currentStep.vars[varName] !== '-';
                return (
                  <div key={varName} className="p-2 rounded bg-[var(--bg-card-hover)] border border-[var(--border-color)] flex flex-col justify-between shadow-sm min-h-[46px]">
                    <span className="text-[9px] text-[var(--text-muted)] font-mono">{varName}</span>
                    <span className={`text-xs font-mono font-extrabold ${isChanged ? 'text-[var(--accent-cyan)]' : 'text-slate-700'}`}>
                      {currentStep.vars[varName]}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Graphical rendering */}
          {renderVisualizer()}

          {/* Detailed Prose explanation */}
          <div className="p-4 bg-slate-900/80 border border-slate-700/60 rounded-xl space-y-1.5 text-slate-100">
            <span className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider block">First-Principles Explanation</span>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {currentStep.explanation}
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};
export default AlgorithmWalkthrough;
