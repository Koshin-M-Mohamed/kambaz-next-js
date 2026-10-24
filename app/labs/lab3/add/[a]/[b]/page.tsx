"use client";

import { useParams } from "next/navigation";

export default function Add() {
  const { a, b } = useParams();
  return (
    <div>
      {a} + {b} = {parseInt(a as string) + parseInt(b as string)}
    </div>
  );
}
