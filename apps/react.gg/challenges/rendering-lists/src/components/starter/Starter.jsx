import clsx from "clsx";

/*

Given an array of friends, update our ul to include a li for every friend. The list item should display all the friend's names.

Tasks
1.   Render an unordered list with all of the friends
2.   Each list item should display the correct name
3.   Each list item should be given a unique key

*/

export default function Starter() {
  const friends = [
    { id: 893, name: "Lynn" },
    { id: 871, name: "Alex" },
    { id: 982, name: "Ben" },
    { id: 61, name: "Mikenzi" },
  ];

  return <ul className={clsx("friends-list")}></ul>;
}
