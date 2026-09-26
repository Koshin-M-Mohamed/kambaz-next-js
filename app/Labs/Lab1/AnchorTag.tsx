export default function AnchorTag() {
  return (
    <>
      <h4>Anchor tag</h4>
      Please{" "}
      <a href="https://www.lipsum.com" id="wd-lipsum">
        click here
      </a>{" "}
      to get dummy text
      <br />
      <a href="https://github.com/jannunzi" id="wd-github">
        GitHub
      </a>
      
      <br />
      <h4>My Anchor Tags</h4>
      <a href="https://www.uefa.com/uefachampionsleague/" id="wd-your-link">Hobby Page</a>
      <a href="https://github.com/Koshin-M-Mohamed/" target="_blank" rel="noreferrer" id="wd-your-github">My GitHub</a>

      <br />

<a
  href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table"
  id="wd-ai-link"
>
  MDN: table element
</a>
    </>
  );
}