import clsx from "clsx";

/*

Currently, our Badge component is displaying hardcoded values. Instead of rendering the static values, we want to pass them in as props. In this challenge, your goal is to apply the props being passed to the Badge component (name, handle, and img) so that it renders correctly.

Tasks
1.   Give the image a proper alt tag using the author's name
2.   Make sure the badge displays the profile image correctly
3.   Display the author's name in the badge's heading
4.   Display the author's handle below the heading

*/

function Badge() {
  return (
    <div className={clsx("badge")}>
      <img alt="" src={null} />
      <div>
        <h4>NAME</h4>
        <p>@HANDLE</p>
      </div>
    </div>
  );
}

export default function Starter() {
  return (
    <Badge
      handle="tylermcginnis"
      img="https://avatars0.githubusercontent.com/u/2933430"
      name="Tyler McGinnis"
    />
  );
}
