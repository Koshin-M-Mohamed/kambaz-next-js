// import Lab1 from "./Lab1/page";

// export default function Labs() {
//   return (
//     <div id="wd-labs">
//       <h1>Labs</h1>
//       <Lab1 />
//     </div>
//   );
// }

import Link from "next/link";

export default function Labs() {
  return (
  
    <div id="wd-labs">
        <h2>Koshin Mohamed - CS 5610-09 Web Development </h2>
      <a href="https://github.com/Koshin-M-Mohamed/kambaz-next-js"id="wd-github"> GitHub Repository</a>
      <h1>Labs</h1>
      <ul>
        <li>
          <Link href="/Labs/Lab1">Lab 1: HTML Examples</Link>
        </li>
        <li>
          <Link href="/Labs/Lab2">Lab 2: CSS Basics</Link>
        </li>
        <li>
          <Link href="/Labs/Lab3">Lab 3: JavaScript Fundamentals</Link>
        </li>
        <li>
          <Link href="/Labs/Lab4">Lab 4: Just Lab 4</Link>
        </li>
        <li>
          <Link href="/Labs/Lab5">Lab 5</Link>
        </li>
      </ul>
    </div>
  );
}
