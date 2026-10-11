export default function Dimensions() {
  return (
    <div id="wd-css-dimensions">
      <h2>Dimension</h2>
      <div>
        <div className="wd-dimension-portrait wd-bg-color-yellow">Portrait</div>
        <div className="wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">
          Landscape
        </div>
        <div className="wd-dimension-square wd-bg-color-red">Square</div>
        <div id="wd-ai-dimension" className="wd-ai-dimension wd-bg-color-yellow">
          This long sentence wraps across several lines while the yellow box
          keeps its declared width of 120 pixels and height of 60 pixels.
        </div>
<div className="wd-dimension-my wd-bg-color-yellow">This box keeps the same width and height even when the text is longer.
    
</div>
</div>
    </div>
  );
}
