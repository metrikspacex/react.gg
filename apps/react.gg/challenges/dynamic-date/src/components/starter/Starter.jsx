import clsx from "clsx";

import { getTodaysDate } from "../../utilities/getTodaysDate.js";

/*

Using JavaScript, replace the static date with today's date (we made a helper function that returns today's date to help you out).

Tasks
1.   Use the getTodaysDate function to render today's date

*/
export default function Starter() {
  return (
    <p
      className={clsx(
        "font-primary text-beige text-[1.8rem] font-normal not-italic leading-normal tracking-normal"
      )}>
      Today is 3/8/2023
    </p>
  );
}
