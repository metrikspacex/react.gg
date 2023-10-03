import clsx from "clsx";

import { getIsLactoseTolerant } from "../../utilities/getIsLactoseTolerant.js";

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

export default function Complete() {
  return getIsLactoseTolerant() ? <LactoseTolerant /> : <LactoseIntolerant />;
}
