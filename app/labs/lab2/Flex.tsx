export default function Flex() {
  return (
    <div id="wd-css-flex">
      <h2>Flex</h2>
      <div className="wd-flex-row-container">
        <div className="wd-bg-color-yellow wd-width-110px">Column 1</div>
        <div className="wd-bg-color-blue wd-fg-color-white">Column 2</div>
        <div className="wd-bg-color-red wd-fg-color-white wd-flex-grow-1">
          Column 3
        </div>
      </div>
      <div id="wd-ai-flex" className="wd-flex-row-container">
        <div className="wd-width-110px wd-bg-color-yellow">Fixed column</div>
        <div className="wd-bg-color-blue wd-fg-color-white">Normal column</div>
        <div className="wd-flex-grow-1 wd-bg-color-red wd-fg-color-white">
          Stretching column
        </div>
      </div>
<div className="wd-flex-row-container">
<div className="wd-bg-color-yellow wd-flex-my-fixed">
My fixed column
</div>

<div className="wd-bg-color-blue wd-fg-color-white">
Normal column
</div>

<div className="wd-bg-color-red wd-fg-color-white wd-flex-my-grow">
 grow column
</div>
</div>
</div>
  );
}
