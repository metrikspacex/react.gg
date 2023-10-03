import clsx from "clsx";

/*

Given an array of friends, create a list item for every friend inside of our unordered list. Note: The items in our friends array don't have their own unique keys. You need to improvise.

Tasks
1.   Render an unordered list with all of the friends
2.   Each list item should display the correct name
3.   Each list item should be given a unique key

*/

export default function Starter() {
  const friends = ["Ben", "Lynn", "Alex"];
  return <ul className={clsx("friends-list")}></ul>;
}
