export default function PassingFunctions({
  message,
  theFunction,
  theOtherFunction,
  myOwnFunction,
}: {
  message: string;
  theFunction: (message: string) => void;
  theOtherFunction: () => void;
  myOwnFunction: () => void;
}) {
  return (
    <div id="wd-passing-functions">
      <h2>Passing Functions</h2>

      <button
        type="button"
        onClick={() => theFunction(`From parent: ${message}`)}
        id="wd-pass-functions-click"
        className="rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Invoke the Function
      </button>

      <button
        type="button"
        onClick={myOwnFunction}
        id="wd-my-own-function-click"
        className="ms-2 rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        My Own Function
      </button>

      <button
        type="button"
        onClick={theOtherFunction}
        id="wd-pass-functions-other-click"
        className="ms-2 rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Invoke the Other Function
      </button>

      <hr />
    </div>
  );
}
