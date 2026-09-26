import HeadingTags from "./HeadingTags";
import ListTags from "./ListTags";
import ParagraphTag from "./ParagraphTag";
import Tables from "./Tables";
import Images from "./Images";
import Forms from "./forms/Forms";
import Textarea from "./forms/Textarea";
import Checkboxes from "./forms/Checkboxes";
import Dropdowns from "./forms/Dropdowns"
import OtherFieldTypes from "./forms/OtherFieldTypes";
import Buttons from "./forms/Buttons";
import YourForm from "./forms/YourForm";
import HighlightedParagraphLab from "./HighlightedParagraph";
import HighlightedBoxLab from "./HighlightedBox";
import AnchorTag from "./AnchorTag";






export default function Lab1() {
  return (
    <div id="wd-lab1">
      <h2>Lab 1</h2>
      <h3>HTML Examples</h3>
      <HeadingTags />
      <ParagraphTag />
      <ListTags />
      <Tables />
      <Images />
      <Forms />
      <Textarea />
      <Checkboxes />
      <Dropdowns />
      <OtherFieldTypes />
      <Buttons />
      <YourForm />
      <HighlightedParagraphLab />
      <HighlightedBoxLab />
      <AnchorTag />
      
    </div>
  );
}
