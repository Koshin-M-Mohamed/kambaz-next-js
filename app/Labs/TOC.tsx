import Link from "next/link";

export default function TOC() {
  return (
    <>
      <h4>Koshin Mohamed</h4>

      <ul>
        <li>
          <Link href="/Labs" id="wd-home-link">
          Home
          </Link>
        </li>
        <li>
          <Link href="/Labs/Lab1">Lab 1</Link>
        </li>
        <li>
          <Link href="/Labs/Lab2">Lab 2</Link>
        </li>
        <li>
          <Link href="/Labs/Lab3">Lab 3</Link>
        </li>
        <li>
          <Link href="/Labs/Lab4">Lab 4</Link>
        </li>
        <li>
          <Link href="/Labs/Lab5">Lab 5</Link>
        </li>
        <li>
          <Link href="/book/ch1" id="wd-toc-book-link">Chapter 1</Link>
        </li>
        <li>
          <Link href="/" id="wd-kambaz-link">
          Kambaz
          </Link>
        </li>
      </ul>
    </>
  );
}
