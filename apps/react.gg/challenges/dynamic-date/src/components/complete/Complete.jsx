import clsx from "clsx";

import { getTodaysDate } from "../../utilities/getTodaysDate.js";

export default function Complete() {
  return (
    <p
      className={clsx(
        "font-primary text-beige text-[1.8rem] font-normal not-italic leading-normal tracking-normal"
      )}>
      Today is {getTodaysDate()}
    </p>
  );
}
