"use client";

import { useParams } from "next/navigation";

export default function CalculatePage() {
  const { op, a, b } = useParams<{
    op: string;
    a: string;
    b: string;
  }>();

  const firstNumber = Number(a);
  const secondNumber = Number(b);

  let result = 0;
  let symbol = "";

  switch (op) {
    case "add":
      result = firstNumber + secondNumber;
      symbol = "+";
      break;

    case "sub":
      result = firstNumber - secondNumber;
      symbol = "-";
      break;

    case "mul":
      result = firstNumber * secondNumber;
      symbol = "*";
      break;

    case "div":
      result = firstNumber / secondNumber;
      symbol = "/";
      break;

    default:
      symbol = "?";
  }

  return (
    <h3 id="wd-calc-result">{a} {symbol} {b} = {result}</h3>
  );
}
