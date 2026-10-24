export default function VariableTypes() {
  let numberVariable = 123;
  let floatingPointNumber = 234.345;
  let stringVariable = "Hello World!";
  let booleanVariable = true;

  let myNumber = 27;
  let myString = "Koshin's JavaScript Practice";

  let sampleCount = 42;
  let sampleLabel = "Lab 3";

  let isNumber = typeof numberVariable;
  let isString = typeof stringVariable;
  let isBoolean = typeof booleanVariable;

  let isMyNumber = typeof myNumber;
  let isMyString = typeof myString;

  let isSampleCount = typeof sampleCount;
  let isSampleLabel = typeof sampleLabel;

  return (
    <div id="wd-variable-types">
      <h4>Variables Types</h4>

      numberVariable = {numberVariable} <br />
      floatingPointNumber = {floatingPointNumber} <br />
      stringVariable = {stringVariable} <br />
      booleanVariable = {booleanVariable + ""} <br />
      isNumber = {isNumber} <br />
      isString = {isString} <br />
      isBoolean = {isBoolean} <br />

      myNumber = {myNumber} <br />
      isMyNumber = {isMyNumber} <br />
      myString = {myString} <br />
      isMyString = {isMyString} <br />

      sampleCount = {sampleCount} <br />
      isSampleCount = {isSampleCount} <br />
      sampleLabel = {sampleLabel} <br />
      isSampleLabel = {isSampleLabel}

      <hr />
    </div>
  );
}