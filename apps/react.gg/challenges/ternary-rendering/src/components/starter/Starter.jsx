import clsx from "clsx";

import { getIsLactoseTolerant } from "../../utilities/getIsLactoseTolerant.js";

/*

Using an if statement, update the code to conditionally render the correct component based on the value of isLactoseTolerant.

Tasks
1.   If the user is lactose intolerant, render the LactoseIntolerant component
2.   If the user is lactose tolerant, render the LactoseTolerant component

*/

function LactoseIntolerant() {
  return (
    <h1 className={clsx("text-[6rem]")}>
      <span
        aria-label="broccoli and strawberry"
        className={clsx("")}
        role="img">
        🥦🍓
      </span>
    </h1>
  );
}

function LactoseTolerant() {
  return (
    <h1 className={clsx("text-[6rem]")}>
      <span aria-label="milk and cheese" className={clsx("")} role="img">
        🥛🧀
      </span>
    </h1>
  );
}

export default function Starter() {
  // Please transform this into ternary expression
  const isLactoseTolerant = getIsLactoseTolerant();
  if (isLactoseTolerant) return <LactoseTolerant />;
  return <LactoseIntolerant />;
}
