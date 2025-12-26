
import { Question } from './types';

export const QUESTIONS_BANK: Question[] = [
  {
    id: 1,
    text: "Let p be a proposition. The statement 'It is not the case that p' is denoted by:",
    options: [
      { id: 'a', text: "¬p" },
      { id: 'b', text: "⊕ p" },
      { id: 'c', text: "p → ¬p" },
      { id: 'd', text: "p ∧ ¬p" }
    ],
    correctOptionId: 'a'
  },
  {
    id: 2,
    text: "The proposition that is true when both p and q are true and is false otherwise is denoted by:",
    options: [
      { id: 'a', text: "p ∧ q" },
      { id: 'b', text: "p ∨ q" },
      { id: 'c', text: "p → q" },
      { id: 'd', text: "p ↔ q" }
    ],
    correctOptionId: 'a'
  },
  {
    id: 3,
    text: "The proposition that is false when p and q are both false and is true otherwise is denoted by:",
    options: [
      { id: 'a', text: "p ∨ q" },
      { id: 'b', text: "p ∧ q" },
      { id: 'c', text: "p ↔ q" },
      { id: 'd', text: "p ⊕ q" }
    ],
    correctOptionId: 'a'
  },
  {
    id: 4,
    text: "The proposition that is true when exactly one of p and q is true and is false otherwise is denoted by:",
    options: [
      { id: 'a', text: "p ⊕ q" },
      { id: 'b', text: "p ∨ q" },
      { id: 'c', text: "p ∧ q" },
      { id: 'd', text: "p ↔ q" }
    ],
    correctOptionId: 'a'
  },
  {
    id: 5,
    text: "The proposition that is false when p is true and q is false and is true otherwise is denoted by:",
    options: [
      { id: 'a', text: "p → q" },
      { id: 'b', text: "p ∨ q" },
      { id: 'c', text: "p ∧ q" },
      { id: 'd', text: "p ↔ q" }
    ],
    correctOptionId: 'a'
  },
  {
    id: 8,
    text: "Find the converse of p → ¬q.",
    options: [
      { id: 'a', text: "¬q → p" },
      { id: 'b', text: "q → ¬p" },
      { id: 'c', text: "q → p" },
      { id: 'd', text: "¬q → ¬p" }
    ],
    correctOptionId: 'a'
  },
  {
    id: 9,
    text: "Find the contrapositive of ¬p → q.",
    options: [
      { id: 'a', text: "¬q → p" },
      { id: 'b', text: "q → ¬p" },
      { id: 'c', text: "p → ¬q" },
      { id: 'd', text: "¬q → ¬p" }
    ],
    correctOptionId: 'a'
  },
  {
    id: 10,
    text: "Find the bitwise OR of the bit strings 1011 0010 and 0110 0110.",
    options: [
      { id: 'a', text: "1111 0110" },
      { id: 'b', text: "0010 0011" },
      { id: 'c', text: "0011 0011" },
      { id: 'd', text: "1010 1001" }
    ],
    correctOptionId: 'a'
  },
  {
    id: 15,
    text: "Let p, q and r be 'You get an A on the final', 'You do every exercise', and 'You get an A in this class'. Express 'Getting an A on the final and doing every exercise is sufficient for getting an A in this class':",
    options: [
      { id: 'a', text: "(p ∧ q) → r" },
      { id: 'b', text: "r → (p ∧ q)" },
      { id: 'c', text: "(p ∨ q) → r" },
      { id: 'd', text: "¬r → (¬p ∧ ¬q)" }
    ],
    correctOptionId: 'a'
  },
  {
    id: 21,
    text: "A compound proposition is a tautology if:",
    options: [
      { id: 'a', text: "it is always true, no matter what the truth values of the propositions in it" },
      { id: 'b', text: "it is always false" },
      { id: 'c', text: "it is true whenever each component is true" },
      { id: 'd', text: "it is only false when each component is false" }
    ],
    correctOptionId: 'a'
  },
  {
    id: 39,
    text: "Find the power set of {1, 2}.",
    options: [
      { id: 'a', text: "{ ∅, {1}, {2}, {1, 2} }" },
      { id: 'b', text: "{ ∅, {1, 2} }" },
      { id: 'c', text: "{ {0}, {1}, {1, 2} }" },
      { id: 'd', text: "{ ∅, {2} }" }
    ],
    correctOptionId: 'a'
  },
  {
    id: 40,
    text: "List the members of the set {x | x is a negative integer greater than -8}.",
    options: [
      { id: 'a', text: "{ -7, -6, -5, -4, -3, -2, -1 }" },
      { id: 'b', text: "{ -8, -7, -6, -5, -4, -3, -2, -1 }" },
      { id: 'c', text: "{ -9, -10, -11, ... }" },
      { id: 'd', text: "{ 0, 1, 2, 3, 4, 5, 6, 7 }" }
    ],
    correctOptionId: 'a'
  },
  {
    id: 46,
    text: "Let U = {0..9}, A = {0, 1, 3, 4, 7, 8}, B = {0, 2, 4, 6, 7, 8, 9}. Find the complement of (A ∪ B).",
    options: [
      { id: 'a', text: "{5}" },
      { id: 'b', text: "∅" },
      { id: 'c', text: "{0, 1, 2, 4, 6, 7, 8, 9}" },
      { id: 'd', text: "{0, 4, 7, 8}" }
    ],
    correctOptionId: 'a'
  },
  {
    id: 69,
    text: "Find ⌈1.01⌉ (ceiling of 1.01).",
    options: [
      { id: 'a', text: "2" },
      { id: 'b', text: "1" },
      { id: 'c', text: "1.01" },
      { id: 'd', text: "0" }
    ],
    correctOptionId: 'a'
  },
  {
    id: 96,
    text: "There are 20 math majors and 40 CS majors. How many ways to pick one representative who is either a math major OR a CS major?",
    options: [
      { id: 'a', text: "60" },
      { id: 'b', text: "800" },
      { id: 'c', text: "20" },
      { id: 'd', text: "40" }
    ],
    correctOptionId: 'a'
  }
];
