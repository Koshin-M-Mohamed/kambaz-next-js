"use client";

import { useState } from "react";

export default function PropDrilling() {
  const [count, setCount] = useState(0);

  return (
    <div id="wd-prop-drilling">
      <h2>Prop Drilling</h2>
      <p>Count: {count}</p>
      <Child count={count} setCount={setCount} />
      <hr />
    </div>
  );
}

function Child({ count, setCount }: {
  count: number;
  setCount: (n: number) => void;
}) {
  return (
    <div id="wd-prop-drilling-child">
      <Middle count={count} setCount={setCount} />
    </div>
  );
}

function Middle({ count, setCount }: {
  count: number;
  setCount: (n: number) => void;
}) {
  return (
    <div id="wd-prop-drilling-middle">
      <h3>Middle</h3>
      <MiddleChild count={count} setCount={setCount} />
    </div>
  );
}

function MiddleChild({ count, setCount }: {
  count: number;
  setCount: (n: number) => void;
}) {
  return (
    <div id="wd-my-own-prop-drill-middle">
      <Grandchild count={count} setCount={setCount} />
    </div>
  );
}

function Grandchild({ count, setCount }: {
  count: number;
  setCount: (n: number) => void;
}) {
  return (
    <div id="wd-prop-drilling-grandchild">
      <button
        type="button"
        onClick={() => setCount(count + 1)}
        id="wd-prop-drilling-increment"
        className="rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Increment
      </button>
    </div>
  );
}
